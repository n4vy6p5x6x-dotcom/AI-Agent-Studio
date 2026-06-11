@echo off
chcp 65001 >nul
setlocal EnableDelayedExpansion

title AI Agent Studio - 一键启动

cd /d "%~dp0"

echo.
echo ========================================
echo   AI Agent Studio 本地版 - 一键启动
echo ========================================
echo.

:: ---------- 检查依赖 ----------
where node >nul 2>&1
if errorlevel 1 (
  echo [错误] 未找到 Node.js，请先安装 Node.js 20+
  echo 下载: https://nodejs.org/
  pause
  exit /b 1
)

where pnpm >nul 2>&1
if errorlevel 1 (
  echo [提示] 未找到 pnpm，正在全局安装...
  call npm install -g pnpm
  if errorlevel 1 (
    echo [错误] pnpm 安装失败
    pause
    exit /b 1
  )
)

where docker >nul 2>&1
if errorlevel 1 (
  echo [错误] 未找到 Docker，请先安装 Docker Desktop
  echo 下载: https://www.docker.com/products/docker-desktop/
  pause
  exit /b 1
)

call :ENSURE_DOCKER_RUNNING
if errorlevel 1 (
  echo [错误] Docker 无法启动，请手动打开 Docker Desktop 后重试
  pause
  exit /b 1
)

:: ---------- 环境变量 ----------
if not exist ".env" (
  if exist ".env.example" (
    echo [提示] 未找到 .env，已从 .env.example 复制
    copy /y ".env.example" ".env" >nul
  ) else (
    echo [错误] 缺少 .env 和 .env.example
    pause
    exit /b 1
  )
)

call :LOAD_ENV

:: 强制仅本机绑定，不监听局域网 0.0.0.0
set "HOST=127.0.0.1"
set "BIND_ADDRESS=127.0.0.1"
set "FRONTEND_URL=http://127.0.0.1:3000"
set "NEXT_PUBLIC_API_URL=http://127.0.0.1:3001"
set "NEXT_PUBLIC_WS_URL=ws://127.0.0.1:3001"

:: ---------- 安装依赖（首次） ----------
if not exist "node_modules" (
  echo [步骤] 首次运行，正在安装依赖...
  call pnpm install
  if errorlevel 1 (
    echo [错误] 依赖安装失败
    pause
    exit /b 1
  )
)

if not exist "node_modules\dotenv-cli" (
  echo [步骤] 安装 dotenv-cli...
  call pnpm install
)

:: ---------- 启动 Docker ----------
echo [步骤] 拉取 Docker 镜像（国内镜像加速）...
set /a PULL_RETRY=0
:PULL_IMAGES
set /a PULL_RETRY+=1
docker compose pull
if not errorlevel 1 goto START_CONTAINERS
if !PULL_RETRY! LSS 3 (
  echo [重试] 镜像拉取失败，第 !PULL_RETRY! 次重试...
  timeout /t 3 /nobreak >nul
  goto PULL_IMAGES
)

echo [提示] DaoCloud 镜像失败，尝试备用镜像源...
set "POSTGRES_IMAGE=docker.1ms.run/library/postgres:16-alpine"
set "REDIS_IMAGE=docker.1ms.run/library/redis:7-alpine"
docker compose pull
if errorlevel 1 (
  echo [错误] Docker 镜像拉取失败，请检查网络或镜像加速配置
  pause
  exit /b 1
)

:START_CONTAINERS
if not defined POSTGRES_PORT set POSTGRES_PORT=5432

call :ENSURE_POSTGRES_PORT
call :SYNC_DATABASE_URL
call :UPDATE_ENV_DB

set /a DOCKER_UP_RETRY=0
:DOCKER_UP_LOOP
set /a DOCKER_UP_RETRY+=1
if !DOCKER_UP_RETRY! GTR 5 (
  echo [错误] PostgreSQL 多次尝试仍无法绑定端口，请关闭占用 5432-5442 的程序后重试
  goto DOCKER_FAIL
)

echo [步骤] 启动 PostgreSQL + Redis（仅本机 127.0.0.1:!POSTGRES_PORT!，Redis 不占主机端口）...
docker compose up -d --remove-orphans --force-recreate postgres --wait 2>nul
if errorlevel 1 (
  echo [提示] --wait 不可用，改用普通启动模式...
  docker compose up -d --remove-orphans --force-recreate postgres redis
  if errorlevel 1 goto DOCKER_PORT_RETRY
  call :WAIT_FOR_POSTGRES
  if errorlevel 1 goto DOCKER_PORT_RETRY
) else (
  docker compose up -d --remove-orphans redis 2>nul
  echo [完成] 数据库容器健康检查通过
)

call :VERIFY_POSTGRES_MAPPING
if errorlevel 1 goto DOCKER_PORT_RETRY
goto DOCKER_UP_OK

:DOCKER_PORT_RETRY
echo [提示] 端口 !POSTGRES_PORT! 不可用，尝试下一端口...
call :BUMP_POSTGRES_PORT
if errorlevel 1 goto DOCKER_FAIL
call :SYNC_DATABASE_URL
call :UPDATE_ENV_DB
docker compose stop postgres >nul 2>&1
docker compose rm -f postgres >nul 2>&1
goto DOCKER_UP_LOOP

:DOCKER_FAIL
echo [错误] Docker 容器启动失败
docker compose ps
docker port ai-studio-postgres 5432 2>nul
pause
exit /b 1

:DOCKER_UP_OK

:: ---------- 初始化数据库 ----------
echo [步骤] 初始化数据库...
call pnpm db:generate
if errorlevel 1 goto DB_FAIL

set /a DB_RETRY=0
:DB_PUSH_RETRY
set /a DB_RETRY+=1
call pnpm db:push
if not errorlevel 1 goto DB_PUSH_OK
if !DB_RETRY! LSS 15 (
  echo [重试] 连接数据库失败，第 !DB_RETRY!/15 次，3 秒后重试...
  timeout /t 3 /nobreak >nul
  goto DB_PUSH_RETRY
)
goto DB_FAIL

:DB_PUSH_OK
call pnpm db:seed
if errorlevel 1 goto DB_FAIL
goto DB_OK

:DB_FAIL
echo.
echo [错误] 数据库初始化失败
echo [诊断] 当前 DATABASE_URL=!DATABASE_URL!
echo [诊断] 容器端口映射:
docker port ai-studio-postgres 5432 2>nul
if errorlevel 1 echo   （无映射 — 5432 可能被本机其他 PostgreSQL 占用）
echo.
docker compose ps
echo.
echo 请检查:
echo   1. Docker Desktop 是否正常运行
echo   2. 本机是否已有 PostgreSQL 占用 5432（可 services.msc 停止，或由脚本自动改用 5433）
echo   3. 可尝试: docker compose down ^&^& start.bat
pause
exit /b 1

:DB_OK

:: ---------- 启动开发服务 ----------
echo.
echo ========================================
echo   启动完成，正在打开服务...
echo   前端: http://127.0.0.1:3000
echo   API:  http://127.0.0.1:3001
echo   说明: 仅本机可访问，不监听局域网
echo   账号: admin@aistudio.local / admin123
echo   按 Ctrl+C 可停止服务
echo ========================================
echo.

start "" "http://127.0.0.1:3000"
call pnpm dev

pause
exit /b 0

:: ---------- 子程序 ----------

:ENSURE_DOCKER_RUNNING
docker info >nul 2>&1
if not errorlevel 1 goto :EOF

echo [步骤] Docker 未运行，正在启动 Docker Desktop...

set "_DOCKER_EXE="
if exist "%ProgramFiles%\Docker\Docker\Docker Desktop.exe" set "_DOCKER_EXE=%ProgramFiles%\Docker\Docker\Docker Desktop.exe"
if not defined _DOCKER_EXE if exist "%LOCALAPPDATA%\Docker\Docker Desktop.exe" set "_DOCKER_EXE=%LOCALAPPDATA%\Docker\Docker Desktop.exe"

if not defined _DOCKER_EXE (
  echo [错误] 未找到 Docker Desktop.exe
  exit /b 1
)

start "" "!_DOCKER_EXE!"

echo [等待] Docker 引擎启动中（最多 120 秒）...
set /a _DK=0
:WAIT_DOCKER_LOOP
set /a _DK+=1
docker info >nul 2>&1
if not errorlevel 1 (
  echo [完成] Docker 已就绪
  goto :EOF
)
if !_DK! GEQ 60 (
  echo [错误] Docker 启动超时
  exit /b 1
)
echo   等待中... !_DK!/60
timeout /t 2 /nobreak >nul
goto WAIT_DOCKER_LOOP

:LOAD_ENV
for /f "usebackq eol=# delims=" %%L in (".env") do (
  for /f "tokens=1,* delims==" %%a in ("%%L") do (
    if not "%%a"=="" set "%%a=%%b"
  )
)
goto :EOF

:SYNC_DATABASE_URL
set "DATABASE_URL=postgresql://aistudio:aistudio123@127.0.0.1:!POSTGRES_PORT!/ai_agent_studio?schema=public"
goto :EOF

:UPDATE_ENV_DB
node -e "const fs=require('fs');const p='!POSTGRES_PORT!';const u='postgresql://aistudio:aistudio123@127.0.0.1:'+p+'/ai_agent_studio?schema=public';const lines=fs.readFileSync('.env','utf8').split(/\r?\n/);const out=lines.map(l=>l.startsWith('POSTGRES_PORT=')?'POSTGRES_PORT='+p:l.startsWith('DATABASE_URL=')?'DATABASE_URL='+u:l);fs.writeFileSync('.env',out.join('\n'));"
goto :EOF

:ENSURE_POSTGRES_PORT
set "_START=!POSTGRES_PORT!"
set "_TRY=!POSTGRES_PORT!"
:ENSURE_PORT_LOOP
call :IS_OUR_POSTGRES_PORT !_TRY!
if not errorlevel 1 (
  set "POSTGRES_PORT=!_TRY!"
  if not "!_TRY!"=="!_START!" echo [提示] 使用端口 !POSTGRES_PORT!（127.0.0.1，仅本机）
  goto :EOF
)
call :IS_PORT_LISTENING !_TRY!
if not errorlevel 1 (
  set "POSTGRES_PORT=!_TRY!"
  if not "!_TRY!"=="!_START!" (
    echo [提示] 端口 !_START! 已被占用，PostgreSQL 改用 !POSTGRES_PORT!（仍仅绑定 127.0.0.1）
  )
  goto :EOF
)
set /a _TRY+=1
if !_TRY! LEQ 5442 goto ENSURE_PORT_LOOP
echo [错误] 5432-5442 端口均被占用，请释放其中一个端口
exit /b 1

:BUMP_POSTGRES_PORT
set /a POSTGRES_PORT+=1
if !POSTGRES_PORT! GTR 5442 exit /b 1
goto :EOF

:IS_PORT_LISTENING
:: 返回 0=空闲  1=被占用（含本机进程与其他 Docker 容器）
netstat -ano | findstr /I "LISTENING" | findstr /C:":%~1 " >nul 2>&1
if not errorlevel 1 exit /b 1
netstat -ano | findstr /I "LISTENING" | findstr /C:":%~1]" >nul 2>&1
if not errorlevel 1 exit /b 1
docker ps --format "{{.Ports}}" 2>nul | findstr /C:":%~1->" >nul 2>&1
if not errorlevel 1 exit /b 1
exit /b 0

:IS_OUR_POSTGRES_PORT
docker port ai-studio-postgres 5432 2>nul | findstr /C:"127.0.0.1:%~1" >nul 2>&1
exit /b %errorlevel%

:VERIFY_POSTGRES_MAPPING
docker port ai-studio-postgres 5432 2>nul | findstr /C:"127.0.0.1:!POSTGRES_PORT!" >nul 2>&1
if errorlevel 1 exit /b 1
docker compose exec -T postgres psql -U aistudio -d ai_agent_studio -c "SELECT 1" >nul 2>&1
exit /b %errorlevel%

:WAIT_FOR_POSTGRES
echo [等待] PostgreSQL 就绪中（最多 60 秒）...
set /a RETRY=0
:WAIT_DB_LOOP
set /a RETRY+=1
docker compose exec -T postgres pg_isready -U aistudio -d ai_agent_studio >nul 2>&1
if not errorlevel 1 (
  echo [完成] PostgreSQL 已就绪
  goto :EOF
)
if !RETRY! GEQ 30 (
  echo [错误] PostgreSQL 启动超时
  docker compose logs postgres --tail 20
  exit /b 1
)
echo   等待中... !RETRY!/30
timeout /t 2 /nobreak >nul
goto WAIT_DB_LOOP
