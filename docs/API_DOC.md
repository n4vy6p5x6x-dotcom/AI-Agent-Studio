# API 接口文档

Base URL: `http://localhost:3001/api`

认证方式: Bearer Token (JWT)

## 健康检查

### GET /health
```json
{ "status": "ok", "service": "AI Agent Studio API" }
```

## 认证

### POST /auth/register
```json
{ "email": "user@example.com", "password": "123456", "name": "用户名" }
```

### POST /auth/login
```json
{ "email": "admin@aistudio.local", "password": "admin123" }
```
Response:
```json
{ "accessToken": "eyJ...", "user": { "id": "...", "email": "...", "name": "...", "role": "ADMIN" } }
```

### GET /auth/profile
Headers: `Authorization: Bearer <token>`

## Agent

### GET /agents
获取 Agent 列表（含模板）

### GET /agents/:id
获取 Agent 详情

### POST /agents
```json
{
  "name": "自定义 Agent",
  "description": "描述",
  "systemPrompt": "你是...",
  "model": "deepseek-chat",
  "category": "CUSTOM",
  "tools": ["sql_query"]
}
```

### PUT /agents/:id
更新 Agent

### DELETE /agents/:id
删除 Agent（不可删除模板）

### GET /agents/statuses
获取所有 Agent 状态

### POST /agents/assign-task
```json
{ "taskDescription": "生成 Q2 MPS 计划" }
```
Response: 合同网协议分配结果

## 工作流

### GET /workflows
### GET /workflows/:id
### POST /workflows
```json
{
  "name": "工作流名称",
  "nodes": [...],
  "edges": [...]
}
```

### PUT /workflows/:id
### DELETE /workflows/:id

### POST /workflows/:id/execute
```json
{ "input": { "orderId": "ORD-001" } }
```
Response:
```json
{
  "executionId": "exec-xxx",
  "status": "completed",
  "steps": [...],
  "output": {...}
}
```

## 知识库

### GET /knowledge
### GET /knowledge/:id
### POST /knowledge
```json
{ "name": "知识库名称", "description": "描述" }
```

### DELETE /knowledge/:id

### POST /knowledge/:id/upload
Content-Type: multipart/form-data
Field: `file` (PDF/DOCX/Excel)

### POST /knowledge/:id/search
```json
{ "query": "MPS 计划方法", "topK": 5 }
```

## 工业场景

### GET /scenarios
### GET /scenarios/:id
### PUT /scenarios/:id/data

## 数据驾驶舱

### GET /dashboard/metrics
### GET /dashboard/charts

## 任务

### GET /tasks
### POST /tasks
```json
{ "title": "任务标题", "description": "描述", "agentId": "...", "priority": 1 }
```

### PUT /tasks/:id/status
```json
{ "status": "COMPLETED" }
```

### GET /tasks/logs/recent?limit=50

## 对话

### POST /chat
```json
{
  "agentId": "template-planner",
  "messages": [
    { "role": "user", "content": "请生成 Q2 MPS 计划" }
  ]
}
```

## WebSocket

URL: `ws://localhost:3001`

### 订阅事件
- `subscribe:agents` — Agent 协同事件
- `subscribe:logs` — 实时日志
- `subscribe:workflow` — 工作流执行步骤

### 推送事件
- `agent:event` — Agent 状态变更
- `log:new` — 新日志
- `workflow:step` — 工作流步骤完成
