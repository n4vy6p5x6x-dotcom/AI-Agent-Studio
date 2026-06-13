# AI Agent Studio 安装手册

本文档面向 **Windows 本地开发环境**，指导你从零完成安装、配置、启动与排错。  
项目定位：**工业级 AI 多智能体协同平台（本地版）**，一台电脑 + Docker 即可运行。

---

## 目录

1. [环境要求](#1-环境要求)
2. [推荐安装方式：一键启动](#2-推荐安装方式一键启动)
3. [手动安装（逐步）](#3-手动安装逐步)
4. [环境变量完整说明](#4-环境变量完整说明)
5. [Docker 服务说明](#5-docker-服务说明)
6. [数据库初始化](#6-数据库初始化)
7. [启动与验证](#7-启动与验证)
8. [常用命令参考](#8-常用命令参考)
9. [常见问题与排错](#9-常见问题与排错)
10. [卸载与重置](#10-卸载与重置)

---

## 1. 环境要求

### 1.1 硬件建议

| 项目 | 最低配置 | 推荐配置 |
|------|----------|----------|
| CPU | 4 核 | 8 核及以上 |
| 内存 | 8 GB | 16 GB 及以上 |
| 磁盘 | 10 GB 可用空间 | 20 GB 及以上 |
| 网络 | 可访问 Docker 镜像源 | 稳定网络（用于拉镜像、AI API） |

### 1.2 软件依赖

| 工具 | 版本要求 | 用途 | 下载地址 |
|------|----------|------|----------|
| **Node.js** | 20+（推荐 22 LTS） | 运行前端 / 后端 | https://nodejs.org/ |
| **pnpm** | 9+ | Monorepo 包管理 | `npm install -g pnpm` |
| **Docker Desktop** | 最新稳定版 | PostgreSQL + Redis | https://www.docker.com/products/docker-desktop/ |
| **Git** | 任意较新版本 | 克隆代码（可选） | https://git-scm.com/ |
| **Cursor IDE** | 最新版 | 推荐开发工具（可选） | https://cursor.com/ |

### 1.3 端口占用说明

启动前请确认以下端口可用，或在 `.env` 中修改：

| 服务 | 默认端口 | 说明 |
|------|----------|------|
| Next.js 前端 | **3000** | 浏览器访问入口 |
| NestJS API | **3001** | 后端接口 / WebSocket |
| PostgreSQL | **5432** | 若被占用可改为 5433 |
| Redis | **6380** | 默认用 6380，避开常见 6379 冲突 |

检查端口占用（PowerShell）：

```powershell
netstat -ano | findstr ":3000 "
netstat -ano | findstr ":5432 "
netstat -ano | findstr ":6380 "
```

---

## 2. 推荐安装方式：一键启动

### 2.1 获取项目

```powershell
cd F:\
git clone <your-repo-url> ai智能体
cd ai智能体
```

若已有项目文件夹，直接进入：

```powershell
cd F:\ai智能体
```

### 2.2 双击或命令行运行

```powershell
.\start.bat
```

`start.bat` 会自动完成：

1. 检查 Node.js、pnpm、Docker 是否可用  
2. 若缺少 `.env`，从 `.env.example` 复制  
3. 首次运行自动 `pnpm install`  
4. 拉取 Docker 镜像（国内镜像加速）  
5. 启动 PostgreSQL + Redis，等待健康检查  
6. 执行 `db:generate` → `db:push` → `db:seed`（含自动重试）  
7. 启动前后端开发服务  
8. 自动打开浏览器：http://localhost:3000  

### 2.3 一键启动成功标志

终端出现类似输出：

```
========================================
  启动完成，正在打开服务...
  前端: http://localhost:3000
  API:  http://localhost:3001
  账号: admin@aistudio.local / admin123
========================================
```

浏览器可打开登录页，使用演示账号登录。

---

## 3. 手动安装（逐步）

若 `start.bat` 失败，或你需要更精细控制，请按以下步骤操作。

### 步骤 1：安装 Node.js

1. 下载并安装 Node.js LTS（20 或 22）  
2. 验证：

```powershell
node -v    # 例: v20.15.0 或 v22.x.x
npm -v
```

### 步骤 2：安装 pnpm

```powershell
npm install -g pnpm
pnpm -v    # 应 >= 9.0.0
```

### 步骤 3：安装并启动 Docker Desktop

1. 安装 Docker Desktop for Windows  
2. 启动 Docker Desktop，等待左下角/托盘图标显示 **Running**  
3. 验证：

```powershell
docker --version
docker compose version
docker info
```

### 步骤 4：安装项目依赖

```powershell
cd F:\ai智能体
pnpm install
```

若安装失败，可尝试：

```powershell
pnpm install --shamefully-hoist
```

### 步骤 5：配置环境变量

```powershell
copy .env.example .env
```

用编辑器打开 `.env`，至少确认以下项（详见 [第 4 节](#4-环境变量完整说明)）：

```env
DATABASE_URL=postgresql://aistudio:aistudio123@localhost:5432/ai_agent_studio?schema=public
POSTGRES_PORT=5432
REDIS_URL=redis://localhost:6380
REDIS_PORT=6380
DEEPSEEK_API_KEY=你的密钥（可选）
```

### 步骤 6：启动 Docker 数据库

```powershell
docker compose up -d --remove-orphans --wait
```

查看容器状态：

```powershell
docker compose ps
```

期望看到 `ai-studio-postgres`、`ai-studio-redis` 状态为 **running** 或 **healthy**。

### 步骤 7：初始化数据库

```powershell
pnpm db:generate
pnpm db:push
pnpm db:seed
```

Seed 完成后会创建：

| 数据 | 说明 |
|------|------|
| 管理员 | `admin@aistudio.local` / `admin123` |
| 操作员 | `operator@aistudio.local` / `admin123` |
| Agent 模板 | 8 个工业 Agent |
| 示例工作流 | 无人机生产计划工作流 |
| 知识库 | 工业制造知识库 + 示例文档 |
| 工业场景 | 无人机 / SMT / 新能源汽车 |

### 步骤 8：启动开发服务

```powershell
pnpm dev
```

分别启动：

- 前端：http://localhost:3000  
- API 健康检查：http://localhost:3001/api/health  
- API 根路径：http://localhost:3001/ （自动跳转前端）

---

## 4. 环境变量完整说明

配置文件：项目根目录 `.env`

### 4.1 数据库

```env
DATABASE_URL=postgresql://aistudio:aistudio123@localhost:5432/ai_agent_studio?schema=public
POSTGRES_PORT=5432
```

| 变量 | 说明 |
|------|------|
| `DATABASE_URL` | Prisma 连接串，端口须与 `POSTGRES_PORT` 一致 |
| `POSTGRES_PORT` | Docker 映射到本机的 PostgreSQL 端口 |

**端口冲突时**修改为 5433：

```env
POSTGRES_PORT=5433
DATABASE_URL=postgresql://aistudio:aistudio123@localhost:5433/ai_agent_studio?schema=public
```

### 4.2 Redis

```env
REDIS_URL=redis://localhost:6380
REDIS_PORT=6380
```

> 默认使用 **6380**，避免与本机已有 Redis（6379）冲突。

### 4.3 JWT 认证

```env
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
```

生产环境务必更换 `JWT_SECRET`。

### 4.4 DeepSeek AI

```env
DEEPSEEK_API_KEY=
DEEPSEEK_BASE_URL=https://api.deepseek.com/v1
DEEPSEEK_MODEL=deepseek-chat
```

| 模型 | 说明 |
|------|------|
| `deepseek-chat` | 通用对话（默认） |
| `deepseek-reasoner` | 推理模型 |

> **不配置 API Key 也可运行**：系统将使用本地模拟响应，适合 UI 演示与流程调试。

### 4.5 Docker 镜像（国内网络）

```env
POSTGRES_IMAGE=docker.m.daocloud.io/library/postgres:16-alpine
REDIS_IMAGE=docker.m.daocloud.io/library/redis:7-alpine
```

海外或镜像源不可用时，可改为官方镜像：

```env
POSTGRES_IMAGE=postgres:16-alpine
REDIS_IMAGE=redis:7-alpine
```

### 4.6 应用地址

```env
API_PORT=3001
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WS_URL=ws://localhost:3001
```

修改 `API_PORT` 后，需同步修改 `NEXT_PUBLIC_API_URL` 和 `NEXT_PUBLIC_WS_URL`。

---

## 5. Docker 服务说明

### 5.1 服务清单

`docker-compose.yml` 定义两个服务：

| 容器名 | 镜像 | 用途 |
|--------|------|------|
| `ai-studio-postgres` | postgres:16-alpine | 主数据库 |
| `ai-studio-redis` | redis:7-alpine | 缓存 / 队列（预留） |

### 5.2 数据库默认账号

| 项 | 值 |
|----|-----|
| 用户名 | `aistudio` |
| 密码 | `aistudio123` |
| 数据库名 | `ai_agent_studio` |

### 5.3 国内镜像加速（Docker Desktop）

若拉取镜像失败，在 **Docker Desktop → Settings → Docker Engine** 添加：

```json
{
  "registry-mirrors": [
    "https://docker.m.daocloud.io",
    "https://docker.1ms.run"
  ]
}
```

保存后 **Restart Docker Desktop**，再运行 `start.bat`。

### 5.4 常用 Docker 命令

```powershell
# 启动
docker compose up -d

# 停止
docker compose down

# 查看状态
docker compose ps

# 查看 PostgreSQL 日志
docker compose logs postgres --tail 50

# 进入 PostgreSQL 容器
docker compose exec postgres psql -U aistudio -d ai_agent_studio
```

---

## 6. 数据库初始化

### 6.1 命令说明

| 命令 | 作用 |
|------|------|
| `pnpm db:generate` | 根据 Prisma Schema 生成 Client |
| `pnpm db:push` | 将 Schema 同步到 PostgreSQL（开发环境） |
| `pnpm db:seed` | 写入演示数据 |
| `pnpm db:studio` | 打开 Prisma Studio 可视化管理 |

### 6.2 数据表（12 张核心表）

`users`、`agents`、`workflows`、`knowledge_bases`、`documents`、`document_chunks`、`conversations`、`messages`、`tasks`、`logs`、`tool_calls`、`industrial_scenarios`、`api_metrics`

Schema 文件：`packages/database/prisma/schema.prisma`

### 6.3 重新初始化

```powershell
docker compose down -v   # 警告：会删除数据库卷内所有数据
docker compose up -d --wait
pnpm db:push
pnpm db:seed
```

---

## 7. 启动与验证

### 7.1 验证清单

| 检查项 | 地址 / 命令 | 期望结果 |
|--------|-------------|----------|
| Docker 容器 | `docker compose ps` | postgres、redis 均为 running |
| API 健康 | http://localhost:3001/api/health | `{"status":"ok",...}` |
| 前端页面 | http://localhost:3000/login | 显示登录页 |
| 登录 | admin@aistudio.local / admin123 | 进入控制台 |
| 数据库 | `pnpm db:studio` | 可看到 users、agents 等表 |

### 7.2 访问地址汇总

| 用途 | URL |
|------|-----|
| **前端（主入口）** | http://localhost:3000 |
| 登录页 | http://localhost:3000/login |
| API | http://localhost:3001/api |
| API 文档（Markdown） | `docs/API_DOC.md` |
| WebSocket | ws://localhost:3001 |

> 请勿将 http://localhost:3001 当作前端使用；该地址为 API 服务。

---

## 8. 常用命令参考

```powershell
# 一键启动（推荐）
.\start.bat

# 仅启动 Docker
docker compose up -d --wait

# 仅启动应用（需 Docker 已运行）
pnpm dev

# 仅启动前端
pnpm dev:web

# 仅启动后端
pnpm dev:api

# 构建全项目
pnpm build

# 清理构建产物
pnpm clean
```

---

## 9. 常见问题与排错

### 9.1 Docker 镜像拉取失败（EOF / timeout）

**现象：**

```
failed to resolve reference "docker.io/library/postgres..."
short read: unexpected EOF
```

**处理：**

1. 确认 Docker Desktop 已运行  
2. 配置镜像加速（见 [5.3 节](#53-国内镜像加速docker-desktop)）  
3. 在 `.env` 中使用 DaoCloud 镜像（已默认配置）  
4. 重新运行 `start.bat`（内置重试与备用源）

---

### 9.2 端口被占用

**现象：**

```
Bind for 0.0.0.0:6379 failed: port is already allocated
Bind for 0.0.0.0:5432 failed: port is already allocated
```

**处理：**

Redis 默认已改为 **6380**。PostgreSQL 若 5432 冲突，修改 `.env`：

```env
POSTGRES_PORT=5433
DATABASE_URL=postgresql://aistudio:aistudio123@localhost:5433/ai_agent_studio?schema=public
```

然后：

```powershell
docker compose down
.\start.bat
```

---

### 9.3 数据库连接失败（P1001）

**现象：**

```
Can't reach database server at `localhost:5432`
```

**处理：**

1. 确认容器运行：`docker compose ps`  
2. 等待 30~60 秒后再执行 `pnpm db:push`（`start.bat` 已含重试）  
3. 确认 `DATABASE_URL` 端口与 `POSTGRES_PORT` 一致  
4. 查看日志：`docker compose logs postgres --tail 30`

---

### 9.4 登录无反应 / 无法登录

**现象：** 点击登录按钮无跳转

**处理：**

1. 确认访问的是 **http://localhost:3000**，不是 3001  
2. 确认 API 已启动：访问 http://localhost:3001/api/health  
3. 使用演示账号：`admin@aistudio.local` / `admin123`  
4. 若提示无法连接 API，重新运行 `start.bat`  
5. 若提示密码错误，执行 `pnpm db:seed` 重置演示数据

---

### 9.5 `pnpm dev` 报错 None of the selected packages has "dev:web"

**处理：** 确保使用项目根目录最新 `package.json`，在项目根执行：

```powershell
pnpm dev
```

正确脚本为：`pnpm --parallel --filter @ai-studio/web --filter @ai-studio/api dev`

---

### 9.6 Node 版本警告

**现象：**

```
WARN Unsupported engine: wanted: {"node":">=22.0.0"} (current: {"node":"v20.15.0"})
```

**说明：** 项目已支持 Node **20+**，该警告可忽略。推荐升级到 Node 22 LTS。

---

### 9.7 DeepSeek API 无真实回复

**现象：** Agent 回复带 `[DeepSeek 本地模拟]` 前缀

**处理：** 在 `.env` 配置有效 Key：

```env
DEEPSEEK_API_KEY=sk-xxxxxxxx
```

保存后重启 `pnpm dev`。

---

## 10. 卸载与重置

### 10.1 停止服务

```powershell
# Ctrl+C 停止 pnpm dev
docker compose down
```

### 10.2 清除数据库数据

```powershell
docker compose down -v
```

### 10.3 清除 node_modules（可选）

```powershell
pnpm clean
Remove-Item -Recurse -Force node_modules
pnpm install
```

---

## 附录：项目目录结构

```
ai智能体/
├── apps/
│   ├── web/                 # Next.js 15 前端
│   └── api/                 # NestJS 后端
├── packages/
│   ├── database/            # Prisma + 数据库
│   ├── agents/              # DeepSeek Client + 合同网协议
│   ├── workflows/           # 工作流引擎
│   ├── rag/                 # RAG 文档处理
│   ├── types/               # 共享类型
│   ├── utils/               # 工具函数
│   └── ui/                  # 共享 UI
├── docs/                    # 文档
├── docker-compose.yml       # Docker 配置
├── .env.example             # 环境变量模板
├── start.bat                # 一键启动脚本
└── package.json             # Monorepo 根配置
```

---

**安装完成后，请阅读 [USER_GUIDE.md](./USER_GUIDE.md) 了解各功能模块的使用方法。**
