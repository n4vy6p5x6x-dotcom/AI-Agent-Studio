# AI Agent Studio

工业级 AI 多智能体协同平台 — **本地版**

一台电脑即可运行，基于 Docker + Node.js + pnpm 构建，支持 Cursor 一键开发。

## 功能特性

- **AI Agent Studio** — 创建、编辑、管理 AI Agent，支持 7 种工业 Agent 模板
- **多 Agent 协同** — 合同网协议（Contract Net Protocol）自动任务分配
- **Workflow 工作流** — React Flow 可视化拖拽编排，支持实时调试
- **RAG 企业知识库** — PDF/DOCX/Excel 文档上传、切片、向量检索
- **工业场景** — 无人机制造、SMT 制造、新能源汽车制造
- **AI 数据驾驶舱** — ECharts 实时图表、Agent 状态、Token 消耗监控

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | Next.js 15, React 19, TailwindCSS, Shadcn/UI, Framer Motion, React Flow, ECharts, Zustand |
| 后端 | NestJS, PostgreSQL, Redis, Prisma, Socket.IO, JWT |
| AI | DeepSeek API, LangGraph, RAG, MCP Tool Calling |

## 安装步骤

1. 安装 Node.js 22+
2. 安装 Docker Desktop
3. 安装 pnpm: `npm install -g pnpm`
4. 克隆项目
5. `pnpm install`
6. `docker compose up -d`
7. 复制环境变量: `cp .env.example .env`
8. 初始化数据库: `pnpm db:push && pnpm db:seed`
9. `pnpm dev`

## 访问地址

- 前端: http://localhost:3000
- API: http://localhost:3001
- 演示账号: `admin@aistudio.local` / `admin123`

## 项目结构

```
apps/
├── web/          # Next.js 前端
├── api/          # NestJS 后端
packages/
├── ui/           # 共享 UI 组件
├── types/        # 共享类型定义
├── agents/       # Agent 运行时 & AI 客户端
├── workflows/    # 工作流引擎
├── rag/          # RAG 文档处理 & 向量检索
├── database/     # Prisma ORM & 数据库
├── utils/        # 工具函数
docs/             # 项目文档
docker/           # Docker 配置
```

## 文档

- [INSTALL.md](./docs/INSTALL.md) — 完整安装教程
- [USER_GUIDE.md](./docs/USER_GUIDE.md) — 用户使用教程
- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) — 系统架构
- [API_DOC.md](./docs/API_DOC.md) — 接口文档
- [DEV_LOG.md](./docs/DEV_LOG.md) — 开发记录

## License

MIT
