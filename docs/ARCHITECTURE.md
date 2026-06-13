# 系统架构

## 整体架构

```
┌─────────────────────────────────────────────────┐
│                   前端 (Next.js 15)              │
│  Agent Studio │ Workflow │ 协同 │ 知识库 │ 驾驶舱  │
└──────────────────────┬──────────────────────────┘
                       │ HTTP / WebSocket
┌──────────────────────┴──────────────────────────┐
│                   后端 (NestJS)                   │
│  Auth │ Agents │ Workflows │ RAG │ Chat │ Events │
└──────┬──────────┬──────────┬────────────────────┘
       │          │          │
┌──────┴──┐ ┌────┴────┐ ┌──┴──────────┐
│PostgreSQL│ │  Redis  │ │ AI API      │
│ (Prisma) │ │ (Cache) │ │ DeepSeek/   │
│          │ │         │ │ DeepSeek    │
└──────────┘ └─────────┘ └─────────────┘
```

## Monorepo 结构

```
ai-agent-studio/
├── apps/
│   ├── web/                 # Next.js 15 前端
│   └── api/                 # NestJS 后端
├── packages/
│   ├── database/            # Prisma Schema + Client
│   ├── types/               # 共享 TypeScript 类型
│   ├── utils/               # 工具函数
│   ├── ui/                  # 共享 UI 组件
│   ├── agents/              # Agent 运行时
│   ├── workflows/           # 工作流引擎
│   └── rag/                 # RAG 引擎
├── docs/                    # 文档
├── docker-compose.yml       # Docker 配置
└── package.json             # Monorepo 根配置
```

## 核心模块

### 1. Agent 系统
- **DeepSeekClient**: DeepSeek API 统一调用（deepseek-chat / deepseek-reasoner）
- **ContractNetProtocol**: 合同网协议任务分配
- **AgentCollaborationManager**: 多 Agent 协同管理
- **MCP_TOOLS**: Tool 注册表

### 2. 工作流引擎
- **WorkflowEngine**: LangGraph 风格的有向图执行引擎
- 支持节点类型: start, end, agent, rag, **parallel**, **merge**, http, condition, tool
- **并行网关** 同时执行多路 Agent 分支，**合并网关** 汇总后继续下游
- 条件分支支持多标签路由（通过/否、受控/失控、有冲突/无冲突）
- 预置 4 条工业演示工作流（`workflow-templates.ts`）
- 实时步骤回调 + 日志记录

### 3. RAG 引擎
- **DocumentProcessor**: 文档切片 + 文本提取
- **VectorSearchEngine**: 向量索引 + 余弦相似度检索
- **RAGChain**: 检索增强生成链

### 4. 实时通信
- Socket.IO WebSocket Gateway
- 频道: agents, logs, workflow:{id}
- 事件: agent:event, log:new, workflow:step

## 数据库设计

| 表 | 说明 |
|----|------|
| users | 用户账户 |
| agents | AI Agent 定义 |
| workflows | 工作流定义 |
| knowledge_bases | 知识库 |
| documents | 文档 |
| document_chunks | 文档切片 + Embedding |
| conversations | 对话 |
| messages | 消息 |
| tasks | 任务 |
| logs | 系统日志 |
| tool_calls | Tool 调用记录 |
| industrial_scenarios | 工业场景 |
| api_metrics | API 指标 |

## 安全

- JWT 认证 (Bearer Token)
- 密码 bcrypt 哈希
- CORS 白名单
- 输入验证 (class-validator)

## 部署

本地版仅需:
1. Docker Desktop (PostgreSQL + Redis)
2. Node.js 22+ (前端 + 后端)
3. pnpm (包管理)

无需 Kubernetes、云服务器或分布式集群。
