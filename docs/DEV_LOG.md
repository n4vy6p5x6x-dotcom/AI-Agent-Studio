# AI Agent Studio 开发记录

本文档记录 **AI Agent Studio 本地版** 的完整开发历程、架构决策、模块实现细节、问题修复与后续规划。  
供开发团队、维护者与 Cursor AI 协作时参考。

---

## 目录

1. [项目背景与目标](#1-项目背景与目标)
2. [开发时间线](#2-开发时间线)
3. [五阶段开发计划与完成情况](#3-五阶段开发计划与完成情况)
4. [Monorepo 工程结构](#4-monorepo-工程结构)
5. [模块实现详情](#5-模块实现详情)
6. [数据库设计记录](#6-数据库设计记录)
7. [API 开发记录](#7-api-开发记录)
8. [前端开发记录](#8-前端开发记录)
9. [AI 架构演进](#9-ai-架构演进)
10. [Docker 与本地部署演进](#10-docker-与本地部署演进)
11. [问题修复日志](#11-问题修复日志)
12. [技术决策记录（ADR）](#12-技术决策记录adr)
13. [已知限制](#13-已知限制)
14. [待办与 SaaS 升级路线](#14-待办与-saas-升级路线)
15. [版本记录](#15-版本记录)

---

## 1. 项目背景与目标

### 1.1 背景

工业制造企业正在探索 AI Agent 在生产计划、质量追溯、排程优化等场景的应用，但：

- 公有云 SaaS 存在数据安全顾虑  
- 完整工业 Agent 平台缺少可本地运行的参考实现  
- 多 Agent 协同、工作流、RAG 需要一体化验证环境  

### 1.2 本地版目标

| 目标 | 说明 |
|------|------|
| 单机可运行 | 一台 Windows/Mac 电脑 + Docker |
| 工业级目录 | Monorepo + 分层 packages |
| 可演示 | 7 种 Agent 模板 + 3 工业场景 |
| 可开发 | Cursor 友好，TypeScript 严格模式 |
| 可扩展 | 预留 SaaS 升级路径 |

### 1.3 明确不做（本地版）

- 云服务器 / Kubernetes 部署  
- SaaS 多租户  
- 企业公网部署  
- 分布式集群  

---

## 2. 开发时间线

| 日期 | 里程碑 |
|------|--------|
| 2026-05-28 | 项目初始化，Monorepo 脚手架、Docker、Prisma、NestJS、Next.js 全栈搭建 |
| 2026-05-28 | 五阶段核心功能完成：Agent / Workflow / RAG / 工业场景 / 驾驶舱 |
| 2026-05-28 | AI 统一为 DeepSeekClient，移除 OpenAI 依赖 |
| 2026-05-28 | 新增 start.bat 一键启动脚本 |
| 2026-05-28 | 修复 Docker 镜像拉取、端口冲突、DATABASE_URL、登录、API 404 等问题 |
| 2026-05-28 | 完善 INSTALL / USER_GUIDE / DEV_LOG 详细文档 |

---

## 3. 五阶段开发计划与完成情况

### 第一阶段：UI 框架 + 用户系统 + 数据库 ✅

| 任务 | 状态 | 实现位置 |
|------|------|----------|
| pnpm Monorepo | ✅ | `package.json`, `pnpm-workspace.yaml` |
| Docker Compose | ✅ | `docker-compose.yml` |
| Prisma Schema（12+ 表） | ✅ | `packages/database/prisma/schema.prisma` |
| Seed 演示数据 | ✅ | `packages/database/prisma/seed.ts` |
| NestJS 后端骨架 | ✅ | `apps/api/` |
| JWT 认证 | ✅ | `apps/api/src/auth/` |
| Next.js 15 前端 | ✅ | `apps/web/` |
| 科幻工业风 UI | ✅ | `apps/web/src/app/globals.css`, components |
| 登录 / 注册 | ✅ | `apps/web/src/app/login/page.tsx` |

### 第二阶段：Agent 系统 + Workflow 系统 ✅

| 任务 | 状态 | 实现位置 |
|------|------|----------|
| Agent CRUD API | ✅ | `apps/api/src/agents/` |
| 7 种工业 Agent 模板 | ✅ | `seed.ts` |
| Agent 对话 Chat API | ✅ | `apps/api/src/chat/` |
| DeepSeekClient | ✅ | `packages/agents/src/index.ts` |
| 合同网协议 CNP | ✅ | `packages/agents/src/index.ts` |
| Workflow 可视化编辑器 | ✅ | `apps/web/src/app/workflows/page.tsx` |
| WorkflowEngine | ✅ | `packages/workflows/src/index.ts` |
| 多 Agent 协同页 | ✅ | `apps/web/src/app/collaboration/page.tsx` |
| Socket.IO 事件网关 | ✅ | `apps/api/src/events/` |

### 第三阶段：RAG 知识库 ✅

| 任务 | 状态 | 实现位置 |
|------|------|----------|
| 知识库 CRUD | ✅ | `apps/api/src/knowledge/` |
| 文档上传 (Multer) | ✅ | `knowledge.controller.ts` |
| 文档切片 | ✅ | `packages/rag/src/index.ts` |
| 本地 Embedding | ✅ | `packages/utils/src/index.ts` |
| 向量检索 | ✅ | `packages/rag/VectorSearchEngine` |
| 知识库 UI | ✅ | `apps/web/src/app/knowledge/page.tsx` |

### 第四阶段：工业场景 ✅

| 任务 | 状态 | 实现位置 |
|------|------|----------|
| 无人机制造 MPS/MRP/BOM | ✅ | `apps/web/src/app/scenarios/uav/` |
| SMT 排程 + 甘特图 | ✅ | `apps/web/src/app/scenarios/smt/` |
| 新能源汽车追溯 | ✅ | `apps/web/src/app/scenarios/ev/` |
| 场景 Seed 数据 | ✅ | `seed.ts` → `industrial_scenarios` |

### 第五阶段：数据驾驶舱 ✅

| 任务 | 状态 | 实现位置 |
|------|------|----------|
| Dashboard Metrics API | ✅ | `apps/api/src/dashboard/` |
| ECharts 图表 | ✅ | `apps/web/src/app/dashboard/page.tsx` |
| Agent 状态监控 | ✅ | Dashboard + 控制台 |
| 实时日志流 | ✅ | `LogStream` 组件 |

---

## 4. Monorepo 工程结构

```
ai智能体/
├── apps/
│   ├── web/                      # Next.js 15 + React 19 前端
│   │   └── src/
│   │       ├── app/              # App Router 页面
│   │       ├── components/       # UI 组件
│   │       ├── lib/              # api.ts, utils.ts
│   │       └── stores/           # Zustand 状态
│   └── api/                      # NestJS 10 后端
│       └── src/
│           ├── auth/             # JWT 认证
│           ├── agents/           # Agent CRUD + 合同网
│           ├── workflows/        # 工作流 CRUD + 执行
│           ├── knowledge/        # RAG 知识库
│           ├── scenarios/        # 工业场景
│           ├── dashboard/        # 驾驶舱指标
│           ├── chat/             # Agent 对话
│           ├── tasks/            # 任务与日志
│           └── events/           # Socket.IO
├── packages/
│   ├── database/                 # Prisma Schema + Client
│   ├── agents/                   # DeepSeekClient + CNP
│   ├── workflows/                # WorkflowEngine
│   ├── rag/                      # DocumentProcessor + VectorSearch
│   ├── types/                    # 共享 TypeScript 类型
│   ├── utils/                    # 工具函数 + Embedding
│   └── ui/                       # 共享 UI 工具 (cn)
├── docs/                         # 项目文档
├── docker-compose.yml
├── .env.example
├── start.bat                     # Windows 一键启动
├── package.json
└── pnpm-workspace.yaml
```

### 4.1 包依赖关系

```
apps/web  → types, utils
apps/api  → database, agents, workflows, rag, types, utils
workflows → agents, types, utils
agents    → types, utils
rag       → types, utils
database  → @prisma/client
```

---

## 5. 模块实现详情

### 5.1 DeepSeekClient（packages/agents）

**职责：** 统一 DeepSeek API 调用，支持 Mock 兜底。

```typescript
// 核心能力
- chat(messages, { model, temperature, maxTokens })
- 环境变量: DEEPSEEK_API_KEY, DEEPSEEK_BASE_URL, DEEPSEEK_MODEL
- 无 Key 时返回本地模拟响应
```

**设计要点：**

- OpenAI Compatible API 格式（`/chat/completions`）  
- 默认模型 `deepseek-chat`  
- 网络/API 失败时降级 Mock，保证演示不中断  

### 5.2 合同网协议（Contract Net Protocol）

**职责：** 多 Agent 任务自动分配。

**算法：**

```
bidScore = capabilityScore × 0.7 + availabilityScore × 0.3
capabilityScore = 基础分 0.3 + 关键词匹配加分（上限 1.0）
availabilityScore = IDLE:1.0, WAITING:0.6, 其他:0.3
```

**输出：** 中标 Agent、全部竞标列表、分配理由。

### 5.3 WorkflowEngine（packages/workflows）

**职责：** LangGraph 风格有向图工作流执行。

**支持节点：**

| 类型 | 行为 |
|------|------|
| start / end | 流程起止 |
| agent | 调用 DeepSeekClient |
| rag | 模拟知识库检索 |
| http | HTTP 请求（默认 health） |
| condition | 条件分支（approved / true） |
| tool | MCP Tool 模拟执行 |

**执行模型：**

- 从 start 节点 BFS 遍历  
- 每步产生 WorkflowStepResult（status, logs, duration）  
- 支持 conditionResult 分支  

### 5.4 RAG 引擎（packages/rag）

| 组件 | 职责 |
|------|------|
| DocumentProcessor | 文本提取（模拟）+ 切片 |
| VectorSearchEngine | 内存向量索引 + 余弦相似度 |
| RAGChain | 检索 + Prompt 构建 |

**Embedding：** 本地 `simpleEmbedding`（128 维），无需外部 API。

### 5.5 前端状态管理（Zustand）

| Store | 职责 |
|-------|------|
| useAuthStore | 登录态、Token、用户信息 |
| useAppStore | 侧边栏、日志、活跃 Agent |

**Token 存储：** localStorage `token` 键。

---

## 6. 数据库设计记录

### 6.1 ER 关系概览

```
User 1──N Agent
User 1──N Workflow
User 1──N KnowledgeBase
KnowledgeBase 1──N Document
Document 1──N DocumentChunk
User 1──N Conversation
Conversation 1──N Message
User 1──N Task
Agent 1──N Task / Log / ToolCall
Workflow N──1 Agent (optional binding)
```

### 6.2 核心表说明

| 表名 | 用途 | 关键字段 |
|------|------|----------|
| users | 用户账户 | email, password(bcrypt), role |
| agents | AI Agent | systemPrompt, model, tools(JSON), category, status |
| workflows | 工作流 | nodes(JSON), edges(JSON), status |
| knowledge_bases | 知识库 | chunkSize, chunkOverlap, embeddingModel |
| documents | 文档 | type, path, status, chunkCount |
| document_chunks | 切片 | content, embedding(Float[]), metadata |
| tasks | 任务 | status, priority, agentId, workflowId |
| logs | 系统日志 | level, message, agentId, metadata |
| tool_calls | Tool 调用 | toolName, input, output, status |
| industrial_scenarios | 工业场景 | type, config, data |
| api_metrics | API 指标 | endpoint, tokens, duration |

### 6.3 Seed 数据清单

| 数据 | 数量 | ID / 标识 |
|------|------|-----------|
| 用户 | 2 | admin, operator |
| Agent 模板 | 7 | template-planner 等 |
| 工作流 | 1 | demo-workflow-001 |
| 知识库 | 1 | demo-kb-001 |
| 文档 | 1 | demo-doc-001 |
| 工业场景 | 3 | scenario-uav/smt/ev-001 |
| 任务 | 3 | 示例任务 |

---

## 7. API 开发记录

### 7.1 模块清单

| 模块 | 路由前缀 | 鉴权 |
|------|----------|------|
| RootController | `/`, `/info` | 否 |
| HealthController | `/api/health` | 否 |
| AuthModule | `/api/auth` | 部分 |
| AgentsModule | `/api/agents` | JWT |
| WorkflowsModule | `/api/workflows` | JWT |
| KnowledgeModule | `/api/knowledge` | JWT |
| ScenariosModule | `/api/scenarios` | JWT |
| DashboardModule | `/api/dashboard` | JWT |
| TasksModule | `/api/tasks` | JWT |
| ChatModule | `/api/chat` | JWT |
| EventsModule | WebSocket | 否 |

### 7.2 认证流程

```
POST /api/auth/login → bcrypt 验证 → JWT sign → { accessToken, user }
GET  /api/auth/profile → JwtAuthGuard → 返回用户信息
```

**JWT Payload：** `{ sub, email, role }`  
**过期时间：** 默认 7 天（JWT_EXPIRES_IN）

### 7.3 环境变量加载

`apps/api/src/main.ts` 启动时自动加载：

1. `../../.env`（从 apps/api 目录）  
2. `./.env`（项目根目录 fallback）  

使用 `dotenv` 包。

---

## 8. 前端开发记录

### 8.1 页面清单

| 路由 | 组件 | 功能 |
|------|------|------|
| `/login` | LoginPage | 登录 / 注册 |
| `/` | HomePage | 控制台 |
| `/agents` | AgentsPage | Agent 列表 + 创建 |
| `/agents/[id]` | AgentDetailPage | 配置 + 对话 |
| `/workflows` | WorkflowsPage | React Flow 编辑器 |
| `/collaboration` | CollaborationPage | 合同网协同 |
| `/knowledge` | KnowledgePage | RAG 知识库 |
| `/scenarios` | ScenariosPage | 场景列表 |
| `/scenarios/uav` | UavScenarioPage | 无人机 |
| `/scenarios/smt` | SmtScenarioPage | SMT + ECharts |
| `/scenarios/ev` | EvScenarioPage | 新能源汽车 |
| `/dashboard` | DashboardPage | 数据驾驶舱 |

### 8.2 UI 组件库

| 组件 | 路径 | 用途 |
|------|------|------|
| SciFiBackground | layout/sci-fi-background | 动态背景 |
| Sidebar | layout/sidebar | 侧边导航 |
| Header | layout/header | 顶栏 |
| AppLayout | layout/app-layout | 鉴权布局 |
| GlassCard | ui/glass-card | 毛玻璃卡片 |
| AgentCard | ui/agent-card | Agent 卡片 |
| StatusBadge | ui/status-badge | 状态徽章 |
| LogStream | ui/log-stream | 实时日志 |

### 8.3 CSS 设计 Token

```css
主色: --primary: 199 100% 50% (cyber-blue #00d4ff)
强调: cyber-purple, cyber-green, cyber-orange
背景: 深色 grid-bg + 毛玻璃 glass-card
动画: pulse-glow, flow-line, scan-line, float
```

---

## 9. AI 架构演进

### 9.1 v1.0：AIModelClient（DeepSeek + OpenAI）

- 支持 DEEPSEEK_API_KEY 和 OPENAI_API_KEY  
- 默认 OpenAI Base URL fallback  

### 9.2 v1.1：DeepSeekClient（当前）

- **仅 DeepSeek API**  
- 环境变量：`DEEPSEEK_API_KEY`, `DEEPSEEK_BASE_URL`, `DEEPSEEK_MODEL`  
- `AIModelClient` 保留为 deprecated 别名  
- Mock 响应前缀改为 `[DeepSeek 本地模拟]`  

### 9.3 预留扩展

| 方向 | 状态 |
|------|------|
| LangGraph 深度集成 | 工作流引擎已借鉴，未引入完整 LangGraph |
| Qwen-Agent | 待办 |
| MCP Server 完整实现 | Tool 注册表已有，Server 待实现 |
| 真实 Embedding API | 当前 local-embedding |

---

## 10. Docker 与本地部署演进

### 10.1 v1：官方 Docker Hub 镜像

```yaml
image: postgres:16-alpine
image: redis:7-alpine
ports: 5432, 6379
```

**问题：** 国内网络 EOF / timeout。

### 10.2 v2：国内镜像加速

```yaml
image: ${POSTGRES_IMAGE:-docker.m.daocloud.io/library/postgres:16-alpine}
image: ${REDIS_IMAGE:-docker.m.daocloud.io/library/redis:7-alpine}
```

`start.bat` 内置：3 次重试 + docker.1ms.run 备用源。

### 10.3 v3：端口可配置 + Redis 改 6380

```yaml
ports:
  - "${POSTGRES_PORT:-5432}:5432"
  - "${REDIS_PORT:-6380}:6379"
```

**原因：** 本机 Redis 6379 冲突频发。

### 10.4 v4：健康检查 + start.bat 增强

- `docker compose up --wait --remove-orphans`  
- PostgreSQL healthcheck：`start_period: 15s`, `retries: 15`  
- `db:push` 自动重试 15 次  
- 端口冲突自动切换 5433 / 6381  
- 自动同步 `DATABASE_URL`  

### 10.5 start.bat 功能清单

| 步骤 | 功能 |
|------|------|
| 1 | 检查 Node / pnpm / Docker |
| 2 | 复制 .env |
| 3 | 加载环境变量 |
| 4 | 首次 pnpm install |
| 5 | Docker 镜像拉取（重试 + 备用源） |
| 6 | 端口检测与自动切换 |
| 7 | 容器启动 + 健康等待 |
| 8 | db:generate / push / seed（push 重试） |
| 9 | pnpm dev + 打开浏览器 |

---

## 11. 问题修复日志

### BUG-001：Docker Hub 镜像拉取失败

| 项 | 内容 |
|----|------|
| 现象 | `failed to resolve reference docker.io/library/postgres` |
| 原因 | 国内网络无法稳定访问 Docker Hub |
| 修复 | 默认 DaoCloud 镜像 + start.bat 重试 + 备用源 |
| 文件 | `docker-compose.yml`, `start.bat`, `.env.example` |

### BUG-002：Redis 6379 端口冲突

| 项 | 内容 |
|----|------|
| 现象 | `Bind for 0.0.0.0:6379 failed: port is already allocated` |
| 原因 | 本机已有 Redis 占用 6379 |
| 修复 | 默认端口改为 6380，支持 REDIS_PORT 配置 |
| 文件 | `docker-compose.yml`, `.env` |

### BUG-003：DATABASE_URL 未找到（P1012）

| 项 | 内容 |
|----|------|
| 现象 | `Environment variable not found: DATABASE_URL` |
| 原因 | Prisma 在 packages/database 运行，未加载根 .env |
| 修复 | dotenv-cli 包装 db 脚本 + start.bat LOAD_ENV |
| 文件 | `package.json`, `start.bat` |

### BUG-004：PostgreSQL 启动未就绪（P1001）

| 项 | 内容 |
|----|------|
| 现象 | `Can't reach database server at localhost:5432` |
| 原因 | 容器 Started 但 Postgres 进程未 ready |
| 修复 | `--wait` 健康检查 + db:push 15 次重试 |
| 文件 | `start.bat`, `docker-compose.yml` |

### BUG-005：pnpm dev 脚本错误

| 项 | 内容 |
|----|------|
| 现象 | `None of the selected packages has a "dev:web" script` |
| 原因 | `pnpm run --parallel dev:web dev:api` 写法错误 |
| 修复 | `pnpm --parallel --filter @ai-studio/web --filter @ai-studio/api dev` |
| 文件 | `package.json` |

### BUG-006：API 根路径 404

| 项 | 内容 |
|----|------|
| 现象 | 访问 localhost:3001 返回 Cannot GET / |
| 原因 | NestJS 全局前缀 api，无根路由 |
| 修复 | RootController 重定向到 localhost:3000 |
| 文件 | `apps/api/src/root.controller.ts` |

### BUG-007：登录按钮无反应

| 项 | 内容 |
|----|------|
| 现象 | 点击登录无任何反馈 |
| 原因 | 浏览器 HTML5 校验拒绝 `.local` 邮箱 |
| 修复 | form noValidate + type="text" + 后端邮箱正则放宽 |
| 文件 | `login/page.tsx`, `auth.dto.ts`, `api.ts` |

### BUG-008：登录失败显示 Unauthorized

| 项 | 内容 |
|----|------|
| 现象 | 密码错误时显示 Unauthorized 而非中文提示 |
| 原因 | api.ts 401 统一抛 Unauthorized，未读 response body |
| 修复 | 先解析 body.message 再抛错 |
| 文件 | `apps/web/src/lib/api.ts` |

### BUG-009：Node 版本 WARN

| 项 | 内容 |
|----|------|
| 现象 | Unsupported engine node >=22, current v20 |
| 修复 | engines 放宽为 >=20.0.0 |
| 文件 | `package.json` |

---

## 12. 技术决策记录（ADR）

### ADR-001：Monorepo + pnpm workspace

**决策：** 使用 pnpm workspace 管理 apps + packages。  
**理由：** 本地开发简单，packages 共享 types/utils，Cursor 单仓库友好。  
**替代方案：** Nx / Turborepo（过度复杂）。

### ADR-002：Prisma ORM

**决策：** PostgreSQL + Prisma。  
**理由：** TypeScript 原生、Schema 即文档、db push 适合本地快速迭代。  
**替代方案：** TypeORM（装饰器风格较重）。

### ADR-003：Next.js 15 App Router

**决策：** 前端使用 App Router + Client Components。  
**理由：** React 19 生态、Cursor 模板丰富、页面即路由。  

### ADR-004：DeepSeek 作为唯一 AI Provider

**决策：** 本地版仅 DeepSeek，Mock 兜底。  
**理由：** 用户需求、国内可用性、OpenAI Compatible 格式简单。  

### ADR-005：本地 Embedding

**决策：** simpleEmbedding 128 维，非真实 API。  
**理由：** 本地版零外部依赖可运行 RAG 流程演示。  
**风险：** 检索质量有限，SaaS 版需替换。

### ADR-006：Redis 端口 6380

**决策：** 默认映射 6380 而非 6379。  
**理由：** 开发者本机常已有 Redis，减少冲突。  

### ADR-007：JWT 而非 Session

**决策：** 无状态 JWT Bearer Token。  
**理由：** 前后端分离简单，本地版无需 Session 存储。  

---

## 13. 已知限制

| 限制 | 说明 | 计划 |
|------|------|------|
| RAG Embedding | 本地简单向量，非语义级 | SaaS 接入真实 API |
| 文档解析 | 模拟文本提取，非真实 PDF 解析 | 接入 pdf-parse / mammoth |
| Redis | 容器已启动，业务层未深度使用 | 队列 / 缓存 / Socket 扩展 |
| RBAC | 角色字段存在，细粒度权限未实现 | SaaS 多租户 |
| 工作流 | 无持久化执行历史 | 增加 execution 表 |
| 文件存储 | 上传路径为逻辑路径 | MinIO / 本地 uploads |
| 国际化 | 仅中文 UI | i18n 预留 |
| 单元测试 | 未覆盖 | 补充 Vitest / Jest |

---

## 14. 待办与 SaaS 升级路线

### 14.1 近期（本地版 v1.x）

- [ ] 工作流执行历史持久化  
- [ ] Agent 编辑 UI（当前仅创建 + 对话）  
- [ ] 真实 PDF/DOCX 解析  
- [ ] uploads 目录本地文件存储  
- [ ] stop.bat 停止脚本  
- [ ] Mac / Linux 启动脚本 start.sh  

### 14.2 中期（SaaS 预备）

- [ ] 真实 Embedding API（DeepSeek / BGE）  
- [ ] LangGraph 完整集成  
- [ ] Qwen-Agent 适配  
- [ ] MCP Server 完整实现  
- [ ] 多租户 Schema 隔离  
- [ ] MinIO 对象存储  

### 14.3 长期（SaaS 版）

- [ ] Kubernetes Helm Chart  
- [ ] 企业 SSO（LDAP / OAuth）  
- [ ] 审计日志与合规  
- [ ] MES / ERP 数据连接器  
- [ ] 计费与配额（Token 计量）  

---

## 15. 版本记录

### v1.0.0（2026-05-28）

**首个可运行本地版发布。**

包含：

- 完整 Monorepo 工程  
- 7 工业 Agent 模板 + 自定义 Agent  
- 工作流可视化编辑与执行  
- 合同网多 Agent 协同  
- RAG 知识库（本地 Embedding）  
- 三大工业场景演示  
- AI 数据驾驶舱  
- DeepSeek AI 集成  
- Windows 一键启动 start.bat  
- 完整文档：INSTALL / USER_GUIDE / ARCHITECTURE / API_DOC / DEV_LOG  

---

## 附录：开发常用命令

```powershell
# 开发
pnpm dev
pnpm dev:web
pnpm dev:api

# 数据库
pnpm db:generate
pnpm db:push
pnpm db:seed
pnpm db:studio

# 构建
pnpm build

# Docker
docker compose up -d --wait
docker compose down
docker compose logs postgres

# 一键启动（Windows）
.\start.bat
```

---

## 附录：Cursor 协作建议

1. 修改 Schema 后执行 `pnpm db:push`  
2. 新增 API 模块后更新 `docs/API_DOC.md`  
3. 新增页面后更新 `docs/USER_GUIDE.md` 路由表  
4. 重大变更记录到本文档 **§11 问题修复日志** 或 **§15 版本记录**  
5. 使用 `@ai-studio/types` 保持前后端类型一致  

---

*最后更新：2026-05-28*
