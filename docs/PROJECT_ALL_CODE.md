# AI Agent Studio — 完整项目代码

> 共 **196** 个文件 · 含 8 大工业 Agent 模板 · 生成：2026-06-14 00:10

1. [.env.example](#file-1)
2. [.gitignore](#file-2)
3. [apps/api/nest-cli.json](#file-3)
4. [apps/api/package.json](#file-4)
5. [apps/api/src/agents/agents.controller.ts](#file-5)
6. [apps/api/src/agents/agents.module.ts](#file-6)
7. [apps/api/src/agents/agents.service.ts](#file-7)
8. [apps/api/src/app.module.ts](#file-8)
9. [apps/api/src/auth/auth.controller.ts](#file-9)
10. [apps/api/src/auth/auth.dto.ts](#file-10)
11. [apps/api/src/auth/auth.module.ts](#file-11)
12. [apps/api/src/auth/auth.service.ts](#file-12)
13. [apps/api/src/auth/jwt.strategy.ts](#file-13)
14. [apps/api/src/auth/jwt-auth.guard.ts](#file-14)
15. [apps/api/src/chat/chat.controller.ts](#file-15)
16. [apps/api/src/chat/chat.module.ts](#file-16)
17. [apps/api/src/chat/chat.service.ts](#file-17)
18. [apps/api/src/dashboard/dashboard.controller.ts](#file-18)
19. [apps/api/src/dashboard/dashboard.module.ts](#file-19)
20. [apps/api/src/dashboard/dashboard.service.ts](#file-20)
21. [apps/api/src/events/events.gateway.ts](#file-21)
22. [apps/api/src/events/events.module.ts](#file-22)
23. [apps/api/src/health.controller.ts](#file-23)
24. [apps/api/src/knowledge/knowledge.controller.ts](#file-24)
25. [apps/api/src/knowledge/knowledge.module.ts](#file-25)
26. [apps/api/src/knowledge/knowledge.service.ts](#file-26)
27. [apps/api/src/main.ts](#file-27)
28. [apps/api/src/root.controller.ts](#file-28)
29. [apps/api/src/scenarios/scenarios.controller.ts](#file-29)
30. [apps/api/src/scenarios/scenarios.module.ts](#file-30)
31. [apps/api/src/scenarios/scenarios.service.ts](#file-31)
32. [apps/api/src/tasks/tasks.controller.ts](#file-32)
33. [apps/api/src/tasks/tasks.module.ts](#file-33)
34. [apps/api/src/tasks/tasks.service.ts](#file-34)
35. [apps/api/src/workflows/workflows.controller.ts](#file-35)
36. [apps/api/src/workflows/workflows.module.ts](#file-36)
37. [apps/api/src/workflows/workflows.service.ts](#file-37)
38. [apps/api/tsconfig.json](#file-38)
39. [apps/web/next.config.ts](#file-39)
40. [apps/web/next-env.d.ts](#file-40)
41. [apps/web/package.json](#file-41)
42. [apps/web/postcss.config.mjs](#file-42)
43. [apps/web/src/app/agents/[id]/page.tsx](#file-43)
44. [apps/web/src/app/agents/page.tsx](#file-44)
45. [apps/web/src/app/collaboration/page.tsx](#file-45)
46. [apps/web/src/app/dashboard/page.tsx](#file-46)
47. [apps/web/src/app/globals.css](#file-47)
48. [apps/web/src/app/knowledge/page.tsx](#file-48)
49. [apps/web/src/app/layout.tsx](#file-49)
50. [apps/web/src/app/login/page.tsx](#file-50)
51. [apps/web/src/app/page.tsx](#file-51)
52. [apps/web/src/app/scenarios/ev/page.tsx](#file-52)
53. [apps/web/src/app/scenarios/page.tsx](#file-53)
54. [apps/web/src/app/scenarios/smt/page.tsx](#file-54)
55. [apps/web/src/app/scenarios/uav/page.tsx](#file-55)
56. [apps/web/src/app/workflows/page.tsx](#file-56)
57. [apps/web/src/components/layout/app-layout.tsx](#file-57)
58. [apps/web/src/components/layout/header.tsx](#file-58)
59. [apps/web/src/components/layout/sci-fi-background.tsx](#file-59)
60. [apps/web/src/components/layout/sidebar.tsx](#file-60)
61. [apps/web/src/components/ui/agent-card.tsx](#file-61)
62. [apps/web/src/components/ui/glass-card.tsx](#file-62)
63. [apps/web/src/components/ui/log-stream.tsx](#file-63)
64. [apps/web/src/components/ui/status-badge.tsx](#file-64)
65. [apps/web/src/lib/api.ts](#file-65)
66. [apps/web/src/lib/utils.ts](#file-66)
67. [apps/web/src/stores/app-store.ts](#file-67)
68. [apps/web/tailwind.config.ts](#file-68)
69. [apps/web/tsconfig.json](#file-69)
70. [docker-compose.yml](#file-70)
71. [docs/API_DOC.md](#file-71)
72. [docs/ARCHITECTURE.md](#file-72)
73. [docs/DEV_LOG.md](#file-73)
74. [docs/INSTALL.md](#file-74)
75. [docs/PROJECT_CODE.md](#file-75)
76. [docs/USER_GUIDE.md](#file-76)
77. [knowledge-base/README.md](#file-77)
78. [package.json](#file-78)
79. [packages/agents/package.json](#file-79)
80. [packages/agents/src/index.ts](#file-80)
81. [packages/agents/tsconfig.json](#file-81)
82. [packages/database/knowledge-base/industry/doc-001-无人机MPS主生产计.md](#file-82)
83. [packages/database/knowledge-base/industry/doc-002-无人机MRP物料需求.md](#file-83)
84. [packages/database/knowledge-base/industry/doc-003-多级BOM管理与E.md](#file-84)
85. [packages/database/knowledge-base/industry/doc-004-碳纤维机架铺叠与固化工艺.md](#file-85)
86. [packages/database/knowledge-base/industry/doc-005-无刷电机2212来料.md](#file-86)
87. [packages/database/knowledge-base/industry/doc-006-飞控主板SMT贴片与.md](#file-87)
88. [packages/database/knowledge-base/industry/doc-007-桨叶动平衡检测与分级标准.md](#file-88)
89. [packages/database/knowledge-base/industry/doc-008-智能电池Pack组装.md](#file-89)
90. [packages/database/knowledge-base/industry/doc-009-四旋翼无人机整机组装流程.md](#file-90)
91. [packages/database/knowledge-base/industry/doc-010-无人机出厂检验与试飞放行.md](#file-91)
92. [packages/database/knowledge-base/industry/doc-011-无人机产线产能规划与瓶颈.md](#file-92)
93. [packages/database/knowledge-base/industry/doc-012-外协结构件来料检验规范.md](#file-93)
94. [packages/database/knowledge-base/industry/doc-013-工装夹具设计与寿命管理.md](#file-94)
95. [packages/database/knowledge-base/industry/doc-014-无人机精益生产线布局指南.md](#file-95)
96. [packages/database/knowledge-base/industry/doc-015-多机型混线换线时间优化方.md](#file-96)
97. [packages/database/knowledge-base/industry/doc-016-无人机全流程质量追溯体系.md](#file-97)
98. [packages/database/knowledge-base/industry/doc-017-飞控系统FMEA风险.md](#file-98)
99. [packages/database/knowledge-base/industry/doc-018-无人机产线数字孪生建模指.md](#file-99)
100. [packages/database/knowledge-base/industry/doc-019-合同网协议在无人机任务分.md](#file-100)
101. [packages/database/knowledge-base/industry/doc-020-民用无人机适航与合规检查.md](#file-101)
102. [packages/database/knowledge-base/industry/doc-021-ESC电调参数标定与老.md](#file-102)
103. [packages/database/knowledge-base/industry/doc-022-GNSS模块校准与环境.md](#file-103)
104. [packages/database/knowledge-base/industry/doc-023-图传系统联调与干扰测试规.md](#file-104)
105. [packages/database/knowledge-base/industry/doc-024-无人机零部件WMS仓.md](#file-105)
106. [packages/database/knowledge-base/industry/doc-025-产线AGV配送路径与.md](#file-106)
107. [packages/database/knowledge-base/industry/doc-026-无人机生产看板KPI.md](#file-107)
108. [packages/database/knowledge-base/industry/doc-027-售后返修分析与设计反馈闭.md](#file-108)
109. [packages/database/knowledge-base/industry/doc-028-SMT贴片产线智能排程.md](#file-109)
110. [packages/database/knowledge-base/industry/doc-029-锡膏印刷工艺参数与SP.md](#file-110)
111. [packages/database/knowledge-base/industry/doc-030-SPI三维检测缺陷分类.md](#file-111)
112. [packages/database/knowledge-base/industry/doc-031-回流焊温区设置与炉温曲线.md](#file-112)
113. [packages/database/knowledge-base/industry/doc-032-AOI光学检测误报分析.md](#file-113)
114. [packages/database/knowledge-base/industry/doc-033-SMT换线标准作业程序.md](#file-114)
115. [packages/database/knowledge-base/industry/doc-034-NPI新产品SMT.md](#file-115)
116. [packages/database/knowledge-base/industry/doc-035-湿敏元件MSD管理与.md](#file-116)
117. [packages/database/knowledge-base/industry/doc-036-钢网清洁张力与寿命管理.md](#file-117)
118. [packages/database/knowledge-base/industry/doc-037-SMT产线OEE分.md](#file-118)
119. [packages/database/knowledge-base/industry/doc-038-SMT批次追溯与条码关.md](#file-119)
120. [packages/database/knowledge-base/industry/doc-039-SMT首件检验与过程确.md](#file-120)
121. [packages/database/knowledge-base/industry/doc-040-SMT车间ESD静.md](#file-121)
122. [packages/database/knowledge-base/industry/doc-041-高速贴片程序优化与贴装率.md](#file-122)
123. [packages/database/knowledge-base/industry/doc-042-SMT错料预防与料站复.md](#file-123)
124. [packages/database/knowledge-base/industry/doc-043-SMT产线平衡与瓶颈工.md](#file-124)
125. [packages/database/knowledge-base/industry/doc-044-SMT夜班排班与人员技.md](#file-125)
126. [packages/database/knowledge-base/industry/doc-045-贴片机PM保养计划与.md](#file-126)
127. [packages/database/knowledge-base/industry/doc-046-020101005微.md](#file-127)
128. [packages/database/knowledge-base/industry/doc-047-BGA返修与XRa.md](#file-128)
129. [packages/database/knowledge-base/industry/doc-048-选择性焊接工艺参数手册.md](#file-129)
130. [packages/database/knowledge-base/industry/doc-049-三防涂覆工艺与IPC.md](#file-130)
131. [packages/database/knowledge-base/industry/doc-050-ICTFCT测试治具.md](#file-131)
132. [packages/database/knowledge-base/industry/doc-051-SMT良率分析与缺陷.md](#file-132)
133. [packages/database/knowledge-base/industry/doc-052-智能料塔与JIT物料.md](#file-133)
134. [packages/database/knowledge-base/industry/doc-053-SMT工单优先级与紧急.md](#file-134)
135. [packages/database/knowledge-base/industry/doc-054-SMT与AI排程员.md](#file-135)
136. [packages/database/knowledge-base/industry/doc-055-动力电池模组组装工艺规范.md](#file-136)
137. [packages/database/knowledge-base/industry/doc-056-电芯分选配组与一致性标.md](#file-137)
138. [packages/database/knowledge-base/industry/doc-057-BMS功能测试与安全策.md](#file-138)
139. [packages/database/knowledge-base/industry/doc-058-驱动电机总成装配与扭力管.md](#file-139)
140. [packages/database/knowledge-base/industry/doc-059-整车VIN追溯与关键.md](#file-140)
141. [packages/database/knowledge-base/industry/doc-060-总装线Andon异常.md](#file-141)
142. [packages/database/knowledge-base/industry/doc-061-冲压件尺寸检测与SPC.md](#file-142)
143. [packages/database/knowledge-base/industry/doc-062-车身焊接机器人参数与焊缝.md](#file-143)
144. [packages/database/knowledge-base/industry/doc-063-涂装车间VOC排放与.md](#file-144)
145. [packages/database/knowledge-base/industry/doc-064-Tier1Tier2.md](#file-145)
146. [packages/database/knowledge-base/industry/doc-065-二级供应商审核与准入标准.md](#file-146)
147. [packages/database/knowledge-base/industry/doc-066-热管理系统装配与泄漏测试.md](#file-147)
148. [packages/database/knowledge-base/industry/doc-067-充电接口检测与国标符合性.md](#file-148)
149. [packages/database/knowledge-base/industry/doc-068-整车EOL下线检测流.md](#file-149)
150. [packages/database/knowledge-base/industry/doc-069-高压系统安全操作与互锁规.md](#file-150)
151. [packages/database/knowledge-base/industry/doc-070-轻量化材料应用与成本平衡.md](#file-151)
152. [packages/database/knowledge-base/industry/doc-071-电驱系统NVH测试与.md](#file-152)
153. [packages/database/knowledge-base/industry/doc-072-整车软件OTA发布与.md](#file-153)
154. [packages/database/knowledge-base/industry/doc-073-零部件APQP与P.md](#file-154)
155. [packages/database/knowledge-base/industry/doc-074-八年质保数据追溯与索赔分.md](#file-155)
156. [packages/database/knowledge-base/industry/doc-075-退役电芯梯次利用评估标准.md](#file-156)
157. [packages/database/knowledge-base/industry/doc-076-总装产线节拍优化与工位平.md](#file-157)
158. [packages/database/knowledge-base/industry/doc-077-新能源汽车多Agent.md](#file-158)
159. [packages/database/knowledge-base/industry/doc-078-AIAgentStu.md](#file-159)
160. [packages/database/knowledge-base/industry/doc-079-工业RAG知识库建设.md](#file-160)
161. [packages/database/knowledge-base/industry/doc-080-ContractNet.md](#file-161)
162. [packages/database/package.json](#file-162)
163. [packages/database/prisma/schema.prisma](#file-163)
164. [packages/database/prisma/seed.ts](#file-164)
165. [packages/database/scripts/generate-doc-content.ts](#file-165)
166. [packages/database/src/agent-templates.ts](#file-166)
167. [packages/database/src/constants.ts](#file-167)
168. [packages/database/src/content-factory.ts](#file-168)
169. [packages/database/src/doc-content-data.ts](#file-169)
170. [packages/database/src/index.ts](#file-170)
171. [packages/database/src/industry-catalog.ts](#file-171)
172. [packages/database/src/industry-doc-generator.ts](#file-172)
173. [packages/database/src/ingest.ts](#file-173)
174. [packages/database/src/ingest-industry-docs.ts](#file-174)
175. [packages/database/tsconfig.json](#file-175)
176. [packages/rag/package.json](#file-176)
177. [packages/rag/src/index.ts](#file-177)
178. [packages/rag/tsconfig.json](#file-178)
179. [packages/types/package.json](#file-179)
180. [packages/types/src/index.ts](#file-180)
181. [packages/types/tsconfig.json](#file-181)
182. [packages/ui/package.json](#file-182)
183. [packages/ui/src/index.ts](#file-183)
184. [packages/ui/src/utils.ts](#file-184)
185. [packages/ui/tsconfig.json](#file-185)
186. [packages/utils/package.json](#file-186)
187. [packages/utils/src/index.ts](#file-187)
188. [packages/utils/tsconfig.json](#file-188)
189. [packages/workflows/package.json](#file-189)
190. [packages/workflows/src/index.ts](#file-190)
191. [packages/workflows/tsconfig.json](#file-191)
192. [pnpm-lock.yaml](#file-192)
193. [pnpm-workspace.yaml](#file-193)
194. [README.md](#file-194)
195. [start.bat](#file-195)
196. [tsconfig.base.json](#file-196)

---

<a id="file-1"></a>

## 文件 1 : `.env.example`

```env
# 绑定地址（仅本机，不监听局域网 0.0.0.0）
HOST=127.0.0.1
BIND_ADDRESS=127.0.0.1

# Database（5432 若被其他 Docker/PostgreSQL 占用，start.bat 会自动改用 5433 等）
DATABASE_URL=postgresql://aistudio:aistudio123@127.0.0.1:5432/ai_agent_studio?schema=public
POSTGRES_PORT=5432

# Redis（仅 Docker 内网，不占用主机端口）
REDIS_URL=redis://redis:6379

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d

# DeepSeek AI
DEEPSEEK_API_KEY=
DEEPSEEK_BASE_URL=https://api.deepseek.com/v1
DEEPSEEK_MODEL=deepseek-chat

# Docker 镜像（国内默认镜像加速；海外可改为 postgres:16-alpine / redis:7-alpine）
POSTGRES_IMAGE=docker.m.daocloud.io/library/postgres:16-alpine
REDIS_IMAGE=docker.m.daocloud.io/library/redis:7-alpine

# App（仅本机访问）
API_PORT=3001
FRONTEND_URL=http://127.0.0.1:3000
NEXT_PUBLIC_API_URL=http://127.0.0.1:3001
NEXT_PUBLIC_WS_URL=ws://127.0.0.1:3001
```

---

<a id="file-2"></a>

## 文件 2 : `.gitignore`

```gitignore 
node_modules/
dist/
.next/
.turbo/
.env
.env.local
*.log
.DS_Store
coverage/
uploads/
*.tsbuildinfo
.vscode/
.idea/
```

---

<a id="file-3"></a>

## 文件 3 : `apps/api/nest-cli.json`

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true
  }
}
```

---

<a id="file-4"></a>

## 文件 4 : `apps/api/package.json`

```json
{
  "name": "@ai-studio/api",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "nest start --watch",
    "build": "nest build",
    "start": "node dist/main",
    "start:prod": "node dist/main",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@ai-studio/agents": "workspace:*",
    "@ai-studio/database": "workspace:*",
    "@ai-studio/rag": "workspace:*",
    "@ai-studio/types": "workspace:*",
    "@ai-studio/utils": "workspace:*",
    "@ai-studio/workflows": "workspace:*",
    "@prisma/client": "^6.1.0",
    "@nestjs/common": "^10.4.15",
    "@nestjs/core": "^10.4.15",
    "@nestjs/jwt": "^10.2.0",
    "@nestjs/passport": "^10.0.3",
    "@nestjs/platform-express": "^10.4.15",
    "@nestjs/platform-socket.io": "^10.4.15",
    "@nestjs/websockets": "^10.4.15",
    "bcryptjs": "^2.4.3",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.14.1",
    "dotenv": "^16.4.7",
    "multer": "^1.4.5-lts.1",
    "passport": "^0.7.0",
    "passport-jwt": "^4.0.1",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.1",
    "socket.io": "^4.8.1"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.4.9",
    "@nestjs/schematics": "^10.2.3",
    "@types/bcryptjs": "^2.4.6",
    "@types/express": "^5.0.0",
    "@types/multer": "^1.4.12",
    "@types/node": "^22.10.2",
    "@types/passport-jwt": "^4.0.1",
    "rimraf": "^6.0.1",
    "typescript": "^5.7.2"
  }
}
```

---

<a id="file-5"></a>

## 文件 5 : `apps/api/src/agents/agents.controller.ts`

```typescript
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request, Query } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('agents')
@UseGuards(JwtAuthGuard)
export class AgentsController {
  constructor(private agentsService: AgentsService) {}

  @Get()
  findAll(@Request() req: { user: { id: string } }, @Query('templates') templates?: string) {
    return this.agentsService.findAll(req.user.id, templates !== 'false');
  }

  @Get('statuses')
  getStatuses() {
    return this.agentsService.getStatuses();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentsService.findOne(id);
  }

  @Post()
  create(@Request() req: { user: { id: string } }, @Body() body: Record<string, unknown>) {
    return this.agentsService.create(req.user.id, body as never);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return this.agentsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentsService.remove(id);
  }

  @Post('assign-task')
  assignTask(@Body() body: { taskDescription: string }) {
    return this.agentsService.assignTask(body.taskDescription);
  }
}
```

---

<a id="file-6"></a>

## 文件 6 : `apps/api/src/agents/agents.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsController } from './agents.controller';

@Module({
  controllers: [AgentsController],
  providers: [AgentsService],
  exports: [AgentsService],
})
export class AgentsModule {}
```

---

<a id="file-7"></a>

## 文件 7 : `apps/api/src/agents/agents.service.ts`

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '@ai-studio/database';
import { ContractNetProtocol } from '@ai-studio/agents';

@Injectable()
export class AgentsService {
  private contractNet = new ContractNetProtocol();

  async findAll(userId: string, includeTemplates = true) {
    const where = includeTemplates
      ? { OR: [{ userId }, { isTemplate: true }] }
      : { userId };

    return prisma.agent.findMany({
      where,
      orderBy: [{ isTemplate: 'desc' }, { createdAt: 'desc' }],
    });
  }

  async findOne(id: string) {
    const agent = await prisma.agent.findUnique({ where: { id } });
    if (!agent) throw new NotFoundException('Agent 不存在');
    return agent;
  }

  async create(userId: string, data: {
    name: string;
    description?: string;
    systemPrompt: string;
    model?: string;
    temperature?: number;
    maxTokens?: number;
    tools?: string[];
    category?: string;
    workflowId?: string;
  }) {
    return prisma.agent.create({
      data: {
        ...data,
        tools: data.tools || [],
        userId,
        category: (data.category as never) || 'CUSTOM',
        model: data.model || process.env.DEEPSEEK_MODEL || 'deepseek-chat',
      },
    });
  }

  async update(id: string, data: Record<string, unknown>) {
    await this.findOne(id);
    return prisma.agent.update({ where: { id }, data: data as never });
  }

  async remove(id: string) {
    const agent = await this.findOne(id);
    if (agent.isTemplate) {
      throw new NotFoundException('不能删除模板 Agent');
    }
    return prisma.agent.delete({ where: { id } });
  }

  async assignTask(taskDescription: string) {
    const agents = await prisma.agent.findMany({
      where: { isTemplate: true },
      select: { id: true, name: true, category: true, tools: true, status: true },
    });

    return this.contractNet.assignTask(
      'task-' + Date.now(),
      taskDescription,
      agents.map((a: { id: string; name: string; category: string; tools: unknown; status: string }) => ({
        ...a,
        tools: (a.tools as string[]) || [],
      })),
    );
  }

  async getStatuses() {
    const agents = await prisma.agent.findMany({
      select: { id: true, name: true, status: true, category: true },
    });
    return agents;
  }
}
```

---

<a id="file-8"></a>

## 文件 8 : `apps/api/src/app.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AgentsModule } from './agents/agents.module';
import { WorkflowsModule } from './workflows/workflows.module';
import { KnowledgeModule } from './knowledge/knowledge.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TasksModule } from './tasks/tasks.module';
import { ChatModule } from './chat/chat.module';
import { EventsModule } from './events/events.module';
import { HealthController } from './health.controller';
import { RootController } from './root.controller';

@Module({
  imports: [
    AuthModule,
    AgentsModule,
    WorkflowsModule,
    KnowledgeModule,
    ScenariosModule,
    DashboardModule,
    TasksModule,
    ChatModule,
    EventsModule,
  ],
  controllers: [RootController, HealthController],
})
export class AppModule {}
```

---

<a id="file-9"></a>

## 文件 9 : `apps/api/src/auth/auth.controller.ts`

```typescript
import { Controller, Post, Get, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto.email, dto.password, dto.name);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: { user: { id: string } }) {
    return this.authService.getProfile(req.user.id);
  }
}
```

---

<a id="file-10"></a>

## 文件 10 : `apps/api/src/auth/auth.dto.ts`

```typescript
import { IsString, Matches, MinLength } from 'class-validator';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class LoginDto {
  @IsString()
  @Matches(EMAIL_PATTERN, { message: '邮箱格式不正确' })
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}

export class RegisterDto {
  @IsString()
  @Matches(EMAIL_PATTERN, { message: '邮箱格式不正确' })
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsString()
  @MinLength(2)
  name!: string;
}
```

---

<a id="file-11"></a>

## 文件 11 : `apps/api/src/auth/auth.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
```

---

<a id="file-12"></a>

## 文件 12 : `apps/api/src/auth/auth.service.ts`

```typescript
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { prisma } from '@ai-studio/database';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(email: string, password: string, name: string) {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      throw new UnauthorizedException('邮箱已被注册');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name },
    });

    return this.generateToken(user);
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('邮箱或密码错误');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('邮箱或密码错误');
    }

    return this.generateToken(user);
  }

  async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, role: true, avatar: true, createdAt: true },
    });

    if (!user) throw new UnauthorizedException('用户不存在');
    return user;
  }

  private generateToken(user: { id: string; email: string; name: string; role: string }) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }
}
```

---

<a id="file-13"></a>

## 文件 13 : `apps/api/src/auth/jwt.strategy.ts`

```typescript
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production',
    });
  }

  validate(payload: { sub: string; email: string; role: string }) {
    return { id: payload.sub, email: payload.email, role: payload.role };
  }
}
```

---

<a id="file-14"></a>

## 文件 14 : `apps/api/src/auth/jwt-auth.guard.ts`

```typescript
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
```

---

<a id="file-15"></a>

## 文件 15 : `apps/api/src/chat/chat.controller.ts`

```typescript
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('chat')
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post()
  chat(@Body() body: { agentId: string; messages: Array<{ role: string; content: string }> }) {
    return this.chatService.chat(body.agentId, body.messages);
  }
}
```

---

<a id="file-16"></a>

## 文件 16 : `apps/api/src/chat/chat.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { KnowledgeModule } from '../knowledge/knowledge.module';

@Module({
  imports: [KnowledgeModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
```

---

<a id="file-17"></a>

## 文件 17 : `apps/api/src/chat/chat.service.ts`

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';

import { prisma } from '@ai-studio/database';

import { DeepSeekClient } from '@ai-studio/agents';

import { KnowledgeService } from '../knowledge/knowledge.service';



@Injectable()

export class ChatService {

  private deepseek = new DeepSeekClient();



  constructor(private knowledgeService: KnowledgeService) {}



  async chat(agentId: string, messages: Array<{ role: string; content: string }>) {

    const agent = await prisma.agent.findUnique({ where: { id: agentId } });

    if (!agent) throw new NotFoundException('Agent 不存在');



    await prisma.agent.update({

      where: { id: agentId },

      data: { status: 'THINKING' },

    });



    let ragContext = '';

    if (agent.knowledgeBaseId) {

      const lastUser = [...messages].reverse().find((m) => m.role === 'user');

      const query = lastUser?.content || agent.description || '工业制造';

      const hits = await this.knowledgeService.search(agent.knowledgeBaseId, query, 3);

      if (hits.length > 0) {

        ragContext = `\n\n## 行业知识库参考\n${hits.map((h, i) => `[${i + 1}] ${h.content}`).join('\n\n')}`;

      }

    }



    const systemMessage = { role: 'system', content: agent.systemPrompt + ragContext };

    const allMessages = [systemMessage, ...messages];



    const response = await this.deepseek.chat(allMessages, {

      model: agent.model || process.env.DEEPSEEK_MODEL || 'deepseek-chat',

      temperature: agent.temperature,

      maxTokens: agent.maxTokens,

    });



    await prisma.agent.update({

      where: { id: agentId },

      data: { status: 'IDLE' },

    });



    await prisma.log.create({

      data: {

        level: 'INFO',

        message: `Agent ${agent.name} 完成对话，消耗 ${response.tokens} tokens`,

        agentId: agent.id,

        metadata: { tokens: response.tokens, ragEnabled: !!agent.knowledgeBaseId },

      },

    });



    return {

      content: response.content,

      tokens: response.tokens,

      agentId: agent.id,

      agentName: agent.name,

      ragEnabled: !!agent.knowledgeBaseId,

    };

  }

}


```

---

<a id="file-18"></a>

## 文件 18 : `apps/api/src/dashboard/dashboard.controller.ts`

```typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('dashboard')
@UseGuards(JwtAuthGuard)
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get('metrics')
  getMetrics() {
    return this.dashboardService.getMetrics();
  }

  @Get('charts')
  getChartData() {
    return this.dashboardService.getChartData();
  }
}
```

---

<a id="file-19"></a>

## 文件 19 : `apps/api/src/dashboard/dashboard.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
```

---

<a id="file-20"></a>

## 文件 20 : `apps/api/src/dashboard/dashboard.service.ts`

```typescript
import { Injectable } from '@nestjs/common';
import { prisma } from '@ai-studio/database';

@Injectable()
export class DashboardService {
  async getMetrics() {
    const [
      totalAgents,
      activeAgents,
      totalTasks,
      completedTasks,
      knowledgeBases,
      documents,
      recentLogs,
      agentStatuses,
    ] = await Promise.all([
      prisma.agent.count(),
      prisma.agent.count({ where: { status: { in: ['THINKING', 'EXECUTING'] } } }),
      prisma.task.count(),
      prisma.task.count({ where: { status: 'COMPLETED' } }),
      prisma.knowledgeBase.count(),
      prisma.document.count(),
      prisma.log.findMany({ take: 20, orderBy: { createdAt: 'desc' } }),
      prisma.agent.findMany({
        select: { id: true, name: true, status: true, category: true },
      }),
    ]);

    return {
      totalAgents,
      activeAgents,
      totalTasks,
      completedTasks,
      totalTokens: 125000,
      apiCalls: 3420,
      knowledgeBases,
      documents,
      recentLogs,
      agentStatuses,
    };
  }

  async getChartData() {
    return {
      tokenUsage: [
        { time: '00:00', tokens: 1200 },
        { time: '04:00', tokens: 800 },
        { time: '08:00', tokens: 3500 },
        { time: '12:00', tokens: 5200 },
        { time: '16:00', tokens: 4800 },
        { time: '20:00', tokens: 2100 },
      ],
      apiCalls: [
        { time: '00:00', calls: 45 },
        { time: '04:00', calls: 20 },
        { time: '08:00', calls: 120 },
        { time: '12:00', calls: 180 },
        { time: '16:00', calls: 150 },
        { time: '20:00', calls: 80 },
      ],
      taskCompletion: [
        { date: 'Mon', completed: 12, failed: 1 },
        { date: 'Tue', completed: 18, failed: 2 },
        { date: 'Wed', completed: 15, failed: 0 },
        { date: 'Thu', completed: 22, failed: 1 },
        { date: 'Fri', completed: 20, failed: 3 },
        { date: 'Sat', completed: 8, failed: 0 },
        { date: 'Sun', completed: 5, failed: 0 },
      ],
      agentActivity: [
        { name: 'AI 计划员', tasks: 45, tokens: 32000 },
        { name: 'AI 数据员', tasks: 38, tokens: 28000 },
        { name: 'AI 排程员', tasks: 52, tokens: 35000 },
        { name: 'AI 调度员', tasks: 30, tokens: 15000 },
        { name: 'AI 质量员', tasks: 25, tokens: 18000 },
      ],
    };
  }
}
```

---

<a id="file-21"></a>

## 文件 21 : `apps/api/src/events/events.gateway.ts`

```typescript
import {
  WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    client.emit('connected', { message: 'AI Agent Studio WebSocket connected' });
  }

  @SubscribeMessage('subscribe:agents')
  handleAgentSubscribe(client: Socket) {
    client.join('agents');
    return { event: 'subscribed', data: { channel: 'agents' } };
  }

  @SubscribeMessage('subscribe:logs')
  handleLogSubscribe(client: Socket) {
    client.join('logs');
    return { event: 'subscribed', data: { channel: 'logs' } };
  }

  @SubscribeMessage('subscribe:workflow')
  handleWorkflowSubscribe(client: Socket, data: { workflowId: string }) {
    client.join(`workflow:${data.workflowId}`);
    return { event: 'subscribed', data: { channel: `workflow:${data.workflowId}` } };
  }

  emitAgentEvent(event: Record<string, unknown>) {
    this.server.to('agents').emit('agent:event', event);
  }

  emitLog(log: Record<string, unknown>) {
    this.server.to('logs').emit('log:new', log);
  }

  emitWorkflowStep(workflowId: string, step: Record<string, unknown>) {
    this.server.to(`workflow:${workflowId}`).emit('workflow:step', step);
  }
}
```

---

<a id="file-22"></a>

## 文件 22 : `apps/api/src/events/events.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';

@Module({
  providers: [EventsGateway],
  exports: [EventsGateway],
})
export class EventsModule {}
```

---

<a id="file-23"></a>

## 文件 23 : `apps/api/src/health.controller.ts`

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      service: 'AI Agent Studio API',
      timestamp: new Date().toISOString(),
    };
  }
}
```

---

<a id="file-24"></a>

## 文件 24 : `apps/api/src/knowledge/knowledge.controller.ts`

```typescript
import {

  Controller, Get, Post, Delete, Body, Param, UseGuards, Request, UseInterceptors, UploadedFile,

} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { KnowledgeService } from './knowledge.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';



@Controller('knowledge')

@UseGuards(JwtAuthGuard)

export class KnowledgeController {

  constructor(private knowledgeService: KnowledgeService) {}



  @Get()

  findAll(@Request() req: { user: { id: string } }) {

    return this.knowledgeService.findAll(req.user.id);

  }



  @Get('industry/default')

  getIndustryKb() {

    return { id: this.knowledgeService.getIndustryKnowledgeBaseId() };

  }



  @Get(':id/stats')

  getStats(@Param('id') id: string) {

    return this.knowledgeService.getStats(id);

  }



  @Get(':id')

  findOne(@Param('id') id: string, @Request() req: { user: { id: string } }) {

    return this.knowledgeService.findOne(id, req.user.id);

  }



  @Post()

  create(@Request() req: { user: { id: string } }, @Body() body: { name: string; description?: string; industry?: string }) {

    return this.knowledgeService.create(req.user.id, body);

  }



  @Delete(':id')

  remove(@Param('id') id: string, @Request() req: { user: { id: string } }) {

    return this.knowledgeService.remove(id, req.user.id);

  }



  @Post(':id/upload')

  @UseInterceptors(FileInterceptor('file'))

  upload(

    @Param('id') id: string,

    @Request() req: { user: { id: string } },

    @UploadedFile() file: Express.Multer.File,

  ) {

    return this.knowledgeService.uploadDocument(id, req.user.id, file);

  }



  @Post(':id/search')

  search(

    @Param('id') id: string,

    @Body() body: { query: string; topK?: number; industry?: string; scenarioType?: string },

  ) {

    return this.knowledgeService.search(id, body.query, body.topK, {

      industry: body.industry,

      scenarioType: body.scenarioType,

    });

  }



  @Post(':id/organize')

  organize(@Param('id') id: string, @Request() req: { user: { id: string } }) {

    return this.knowledgeService.organizeByAgents(id, req.user.id);

  }

}


```

---

<a id="file-25"></a>

## 文件 25 : `apps/api/src/knowledge/knowledge.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { KnowledgeService } from './knowledge.service';
import { KnowledgeController } from './knowledge.controller';

@Module({
  controllers: [KnowledgeController],
  providers: [KnowledgeService],
  exports: [KnowledgeService],
})
export class KnowledgeModule {}
```

---

<a id="file-26"></a>

## 文件 26 : `apps/api/src/knowledge/knowledge.service.ts`

```typescript
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';

import { prisma } from '@ai-studio/database';

import { DocumentProcessor, searchChunks } from '@ai-studio/rag';

import * as fs from 'fs';

import * as path from 'path';



const INDUSTRY_KB_ID = 'industry-kb-main';



@Injectable()

export class KnowledgeService {

  private processor = new DocumentProcessor();



  async findAll(userId: string) {

    const bases = await prisma.knowledgeBase.findMany({

      where: { OR: [{ userId }, { isSystem: true }] },

      include: {

        _count: { select: { documents: true } },

        documents: { select: { industry: true, scenarioType: true } },

      },

      orderBy: [{ isSystem: 'desc' }, { updatedAt: 'desc' }],

    });



    return bases.map((kb) => ({

      ...kb,

      documentCount: kb._count.documents,

      industryStats: this.buildIndustryStats(kb.documents),

    }));

  }



  async findOne(id: string, userId?: string) {

    const kb = await prisma.knowledgeBase.findUnique({

      where: { id },

      include: {

        documents: {

          orderBy: [{ industry: 'asc' }, { category: 'asc' }, { name: 'asc' }],

        },

        agents: { select: { id: true, name: true, category: true } },

      },

    });

    if (!kb) throw new NotFoundException('知识库不存在');

    if (userId && kb.userId !== userId && !kb.isSystem) {

      throw new ForbiddenException('无权访问该知识库');

    }

    return {

      ...kb,

      industryStats: this.buildIndustryStats(kb.documents),

    };

  }



  async getStats(id: string) {

    const kb = await this.findOne(id);

    const chunks = await prisma.documentChunk.count({

      where: { document: { knowledgeBaseId: id } },

    });

    const byIndustry = await prisma.document.groupBy({

      by: ['industry'],

      where: { knowledgeBaseId: id },

      _count: true,

    });

    const byCategory = await prisma.document.groupBy({

      by: ['category'],

      where: { knowledgeBaseId: id },

      _count: true,

    });



    return {

      knowledgeBaseId: id,

      name: kb.name,

      documentCount: kb.documents.length,

      chunkCount: chunks,

      isSystem: kb.isSystem,

      linkedAgents: kb.agents,

      byIndustry: byIndustry.map((i) => ({ industry: i.industry || '未分类', count: i._count })),

      byCategory: byCategory.map((c) => ({ category: c.category || '未分类', count: c._count })),

    };

  }



  async create(userId: string, data: { name: string; description?: string; industry?: string }) {

    return prisma.knowledgeBase.create({

      data: { ...data, userId },

    });

  }



  async remove(id: string, userId: string) {

    const kb = await this.findOne(id, userId);

    if (kb.isSystem) throw new ForbiddenException('系统知识库不可删除');

    return prisma.knowledgeBase.delete({ where: { id } });

  }



  async uploadDocument(

    knowledgeBaseId: string,

    userId: string,

    file: { originalname: string; size: number; mimetype: string; buffer?: Buffer },

  ) {

    const kb = await this.findOne(knowledgeBaseId, userId);

    if (kb.isSystem) throw new ForbiddenException('系统知识库请使用「智能体整理」维护');



    const ext = file.originalname.split('.').pop()?.toUpperCase() || 'TXT';

    const typeMap: Record<string, string> = {

      PDF: 'PDF', DOCX: 'DOCX', DOC: 'DOCX', XLSX: 'EXCEL', XLS: 'EXCEL', TXT: 'TXT', MD: 'MD',

    };

    const docType = typeMap[ext] || 'TXT';



    const uploadDir = path.resolve(process.cwd(), 'uploads', knowledgeBaseId);

    fs.mkdirSync(uploadDir, { recursive: true });

    if (file.buffer) fs.writeFileSync(path.join(uploadDir, file.originalname), file.buffer);



    const text = file.buffer

      ? file.buffer.toString('utf8')

      : this.processor.extractText(file.originalname, docType);



    const doc = await prisma.document.create({

      data: {

        name: file.originalname,

        type: docType as never,

        size: file.size,

        path: `/uploads/${knowledgeBaseId}/${file.originalname}`,

        status: 'PROCESSING',

        knowledgeBaseId: kb.id,

        source: '用户上传',

        organizedBy: 'AI 知识整理员',

      },

    });



    const chunkCount = await this.indexDocument(doc.id, text, kb.chunkSize, kb.chunkOverlap, {

      documentId: doc.id,

      fileName: file.originalname,

    });



    return { document: doc, chunkCount };

  }



  async search(

    knowledgeBaseId: string,

    query: string,

    topK = 5,

    filters?: { industry?: string; scenarioType?: string },

  ) {

    await this.findOne(knowledgeBaseId);



    const chunks = await prisma.documentChunk.findMany({

      where: {

        document: {

          knowledgeBaseId,

          status: 'COMPLETED',

          ...(filters?.industry ? { industry: filters.industry } : {}),

          ...(filters?.scenarioType ? { scenarioType: filters.scenarioType as never } : {}),

        },

      },

      include: {

        document: {

          select: { id: true, name: true, industry: true, category: true, scenarioType: true, summary: true },

        },

      },

    });



    const indexed = chunks.map((c) => ({

      id: c.id,

      content: c.content,

      embedding: c.embedding,

      metadata: {

        ...(c.metadata as Record<string, unknown>),

        documentName: c.document.name,

        industry: c.document.industry,

        category: c.document.category,

        summary: c.document.summary,

      },

    }));



    return searchChunks(indexed, query, topK).map((r) => ({

      content: r.chunk.content,

      score: r.score,

      metadata: r.chunk.metadata,

      document: chunks.find((c) => c.id === r.chunk.id)?.document,

    }));

  }



  async organizeByAgents(knowledgeBaseId: string, userId: string) {

    const kb = await this.findOne(knowledgeBaseId, userId);

    const documents = await prisma.document.findMany({ where: { knowledgeBaseId } });



    const agentRoles = [
      { category: 'PLANNER', name: 'AI 计划员', industries: ['UAV', 'EV'] },
      { category: 'DATA_ANALYST', name: 'AI 数据员', industries: ['UAV', 'SMT', 'EV', 'PLATFORM'] },
      { category: 'SCHEDULER', name: 'AI 排程员', industries: ['SMT', 'UAV'] },
      { category: 'DISPATCHER', name: 'AI 调度员', industries: ['UAV', 'SMT', 'EV', 'PLATFORM'] },
      { category: 'DESIGNER', name: 'AI 设计师', industries: ['UAV', 'EV'] },
      { category: 'QUALITY', name: 'AI 质量员', industries: ['UAV', 'SMT', 'EV'] },
      { category: 'SIMULATOR', name: 'AI 仿真员', industries: ['UAV', 'SMT', 'EV'] },
      { category: 'DECISION', name: '协同决策员', industries: ['PLATFORM', 'EV'] },
    ];



    let updated = 0;

    const report: Array<{ agent: string; documents: number }> = [];



    for (const agent of agentRoles) {

      const matched = documents.filter(

        (d) => d.industry && agent.industries.includes(d.industry),

      );

      for (const doc of matched) {

        await prisma.document.update({

          where: { id: doc.id },

          data: {

            organizedBy: agent.name,

            tags: [...new Set([...(doc.tags || []), agent.category.toLowerCase(), 'agent-organized'])],

          },

        });

        updated++;

      }

      report.push({ agent: agent.name, documents: matched.length });

    }



    await prisma.log.create({

      data: {

        level: 'INFO',

        message: `知识库「${kb.name}」智能体整理完成，更新 ${updated} 份文档`,

        metadata: { knowledgeBaseId, report },

      },

    });



    return {

      knowledgeBaseId,

      totalDocuments: documents.length,

      updatedDocuments: updated,

      agentReport: report,

      message: `${agentRoles.length} 个 Agent 已完成文档分类、打标与归档`,

    };

  }



  getIndustryKnowledgeBaseId() {

    return INDUSTRY_KB_ID;

  }



  private async indexDocument(

    documentId: string,

    text: string,

    chunkSize: number,

    chunkOverlap: number,

    metadata: Record<string, unknown>,

  ) {

    await prisma.documentChunk.deleteMany({ where: { documentId } });



    const chunks = this.processor.processDocument(text, { chunkSize, chunkOverlap, metadata });

    for (const chunk of chunks) {

      await prisma.documentChunk.create({

        data: {

          content: chunk.content,

          embedding: chunk.embedding,

          metadata: chunk.metadata as never,

          documentId,

        },

      });

    }



    await prisma.document.update({

      where: { id: documentId },

      data: { status: 'COMPLETED', chunkCount: chunks.length },

    });



    return chunks.length;

  }



  private buildIndustryStats(documents: Array<{ industry: string | null }>) {

    const stats: Record<string, number> = {};

    for (const d of documents) {

      const key = d.industry || 'OTHER';

      stats[key] = (stats[key] || 0) + 1;

    }

    return stats;

  }

}


```

---

<a id="file-27"></a>

## 文件 27 : `apps/api/src/main.ts`

```typescript
import { config } from 'dotenv';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { NestFactory } from '@nestjs/core';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

for (const envPath of [resolve(process.cwd(), '../../.env'), resolve(process.cwd(), '.env')]) {
  if (existsSync(envPath)) {
    config({ path: envPath });
    break;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.setGlobalPrefix('api', {
    exclude: [
      { path: '', method: RequestMethod.GET },
      { path: 'info', method: RequestMethod.GET },
    ],
  });

  const port = Number(process.env.API_PORT || 3001);
  const host = process.env.HOST || '127.0.0.1';
  const frontendUrl = process.env.FRONTEND_URL || 'http://127.0.0.1:3000';
  await app.listen(port, host);
  console.log(`🚀 AI Agent Studio API running on http://${host}:${port}`);
  console.log(`🌐 前端页面请访问 ${frontendUrl}`);
  console.log(`📡 WebSocket on ws://${host}:${port}`);
  console.log(`🔒 仅本机访问，未监听局域网`);
}

bootstrap();
```

---

<a id="file-28"></a>

## 文件 28 : `apps/api/src/root.controller.ts`

```typescript
import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class RootController {
  @Get()
  root(@Res() res: Response) {
    const frontend = process.env.FRONTEND_URL || 'http://127.0.0.1:3000';
    return res.redirect(frontend);
  }

  @Get('info')
  info() {
    const host = process.env.HOST || '127.0.0.1';
    const frontend = process.env.FRONTEND_URL || 'http://127.0.0.1:3000';
    const port = process.env.API_PORT || 3001;
    return {
      service: 'AI Agent Studio API',
      message: '这是 API 服务。请访问前端页面使用系统。',
      frontend,
      api: `http://${host}:${port}/api`,
      health: `http://${host}:${port}/api/health`,
      login: 'admin@aistudio.local / admin123',
    };
  }
}
```

---

<a id="file-29"></a>

## 文件 29 : `apps/api/src/scenarios/scenarios.controller.ts`

```typescript
import { Controller, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('scenarios')
@UseGuards(JwtAuthGuard)
export class ScenariosController {
  constructor(private scenariosService: ScenariosService) {}

  @Get()
  findAll() {
    return this.scenariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scenariosService.findOne(id);
  }

  @Put(':id/data')
  updateData(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return this.scenariosService.updateData(id, body);
  }
}
```

---

<a id="file-30"></a>

## 文件 30 : `apps/api/src/scenarios/scenarios.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';
import { ScenariosController } from './scenarios.controller';

@Module({
  controllers: [ScenariosController],
  providers: [ScenariosService],
})
export class ScenariosModule {}
```

---

<a id="file-31"></a>

## 文件 31 : `apps/api/src/scenarios/scenarios.service.ts`

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '@ai-studio/database';

@Injectable()
export class ScenariosService {
  async findAll() {
    return prisma.industrialScenario.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const scenario = await prisma.industrialScenario.findUnique({ where: { id } });
    if (!scenario) throw new NotFoundException('场景不存在');
    return scenario;
  }

  async findByType(type: string) {
    return prisma.industrialScenario.findMany({
      where: { type: type as never },
    });
  }

  async updateData(id: string, data: Record<string, unknown>) {
    await this.findOne(id);
    return prisma.industrialScenario.update({
      where: { id },
      data: { data: data as never },
    });
  }
}
```

---

<a id="file-32"></a>

## 文件 32 : `apps/api/src/tasks/tasks.controller.ts`

```typescript
import { Controller, Get, Post, Put, Body, Param, UseGuards, Request, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll(@Request() req: { user: { id: string } }) {
    return this.tasksService.findAll(req.user.id);
  }

  @Post()
  create(@Request() req: { user: { id: string } }, @Body() body: Record<string, unknown>) {
    return this.tasksService.create(req.user.id, body as never);
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.tasksService.updateStatus(id, body.status);
  }

  @Get('logs/recent')
  getLogs(@Query('limit') limit?: string) {
    return this.tasksService.getLogs(limit ? parseInt(limit) : 50);
  }
}
```

---

<a id="file-33"></a>

## 文件 33 : `apps/api/src/tasks/tasks.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
```

---

<a id="file-34"></a>

## 文件 34 : `apps/api/src/tasks/tasks.service.ts`

```typescript
import { Injectable } from '@nestjs/common';
import { prisma } from '@ai-studio/database';

@Injectable()
export class TasksService {
  async findAll(userId: string) {
    return prisma.task.findMany({
      where: { userId },
      include: { agent: { select: { id: true, name: true, category: true } } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(userId: string, data: { title: string; description?: string; agentId?: string; priority?: number }) {
    return prisma.task.create({
      data: { ...data, userId },
    });
  }

  async updateStatus(id: string, status: string) {
    return prisma.task.update({
      where: { id },
      data: { status: status as never },
    });
  }

  async getLogs(limit = 50) {
    return prisma.log.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: { agent: { select: { id: true, name: true } } },
    });
  }
}
```

---

<a id="file-35"></a>

## 文件 35 : `apps/api/src/workflows/workflows.controller.ts`

```typescript
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('workflows')
@UseGuards(JwtAuthGuard)
export class WorkflowsController {
  constructor(private workflowsService: WorkflowsService) {}

  @Get()
  findAll(@Request() req: { user: { id: string } }) {
    return this.workflowsService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workflowsService.findOne(id);
  }

  @Post()
  create(@Request() req: { user: { id: string } }, @Body() body: Record<string, unknown>) {
    return this.workflowsService.create(req.user.id, body as never);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return this.workflowsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workflowsService.remove(id);
  }

  @Post(':id/execute')
  execute(@Param('id') id: string, @Body() body: { input?: Record<string, unknown> }) {
    return this.workflowsService.execute(id, body.input);
  }
}
```

---

<a id="file-36"></a>

## 文件 36 : `apps/api/src/workflows/workflows.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { WorkflowsController } from './workflows.controller';
import { KnowledgeModule } from '../knowledge/knowledge.module';

@Module({
  imports: [KnowledgeModule],
  controllers: [WorkflowsController],
  providers: [WorkflowsService],
  exports: [WorkflowsService],
})
export class WorkflowsModule {}
```

---

<a id="file-37"></a>

## 文件 37 : `apps/api/src/workflows/workflows.service.ts`

```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '@ai-studio/database';
import { WorkflowEngine } from '@ai-studio/workflows';
import { KnowledgeService } from '../knowledge/knowledge.service';

@Injectable()
export class WorkflowsService {
  private engine = new WorkflowEngine();

  constructor(private knowledgeService: KnowledgeService) {}

  async findAll(userId: string) {
    return prisma.workflow.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const workflow = await prisma.workflow.findUnique({ where: { id } });
    if (!workflow) throw new NotFoundException('工作流不存在');
    return workflow;
  }

  async create(userId: string, data: {
    name: string;
    description?: string;
    nodes?: unknown[];
    edges?: unknown[];
  }) {
    return prisma.workflow.create({
      data: {
        name: data.name,
        description: data.description,
        nodes: (data.nodes || []) as never,
        edges: (data.edges || []) as never,
        userId,
      },
    });
  }

  async update(id: string, data: Record<string, unknown>) {
    await this.findOne(id);
    return prisma.workflow.update({ where: { id }, data: data as never });
  }

  async remove(id: string) {
    await this.findOne(id);
    return prisma.workflow.delete({ where: { id } });
  }

  async execute(id: string, input: Record<string, unknown> = {}) {
    const workflow = await this.findOne(id);
    const result = await this.engine.execute(
      {
        id: workflow.id,
        name: workflow.name,
        nodes: workflow.nodes as never[],
        edges: workflow.edges as never[],
      },
      input,
      undefined,
      {
        ragSearch: async (kbId, query) => {
          const hits = await this.knowledgeService.search(kbId, query, 5);
          return hits.map((h) => ({ content: h.content, score: h.score }));
        },
      },
    );

    await prisma.log.create({
      data: {
        level: 'INFO',
        message: `工作流 ${workflow.name} 执行${result.status === 'completed' ? '成功' : '失败'}`,
        metadata: { executionId: result.executionId, steps: result.steps.length },
      },
    });

    return result;
  }
}
```

---

<a id="file-38"></a>

## 文件 38 : `apps/api/tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2022",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strict": true,
    "declaration": false,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

<a id="file-39"></a>

## 文件 39 : `apps/web/next.config.ts`

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@ai-studio/types', '@ai-studio/utils'],
  experimental: {
    optimizePackageImports: ['lucide-react', 'echarts-for-react'],
  },
};

export default nextConfig;
```

---

<a id="file-40"></a>

## 文件 40 : `apps/web/next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
```

---

<a id="file-41"></a>

## 文件 41 : `apps/web/package.json`

```json
{
  "name": "@ai-studio/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port 3000 --hostname 127.0.0.1",
    "build": "next build",
    "start": "next start --port 3000 --hostname 127.0.0.1",
    "lint": "next lint",
    "clean": "rimraf .next"
  },
  "dependencies": {
    "@ai-studio/types": "workspace:*",
    "@ai-studio/utils": "workspace:*",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-dropdown-menu": "^2.1.4",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-tabs": "^1.1.2",
    "@radix-ui/react-toast": "^1.2.4",
    "@xyflow/react": "^12.4.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "echarts": "^5.5.1",
    "echarts-for-react": "^3.0.2",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.469.0",
    "next": "^15.1.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "socket.io-client": "^4.8.1",
    "tailwind-merge": "^2.6.0",
    "zustand": "^5.0.2"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "rimraf": "^6.0.1",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.2"
  }
}
```

---

<a id="file-42"></a>

## 文件 42 : `apps/web/postcss.config.mjs`

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

---

<a id="file-43"></a>

## 文件 43 : `apps/web/src/app/agents/[id]/page.tsx`

```tsx
'use client';

import { useEffect, useState, use } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { StatusBadge } from '@/components/ui/status-badge';
import { AgentThinkingAnimation } from '@/components/ui/agent-card';
import { Send, ArrowLeft } from 'lucide-react';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [agent, setAgent] = useState<Record<string, unknown> | null>(null);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.getAgent(id).then(setAgent).catch(console.error);
  }, [id]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await api.chat(id, newMessages);
      setMessages([...newMessages, { role: 'assistant', content: res.content }]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!agent) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-96">
          <div className="w-8 h-8 border-2 border-cyber-blue border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Header title={agent.name as string} subtitle={agent.description as string} />
      <div className="p-6">
        <Link href="/agents" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="w-4 h-4" /> 返回 Agent 列表
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard className="p-4 space-y-4">
            <h3 className="font-semibold">Agent 配置</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">状态</span>
                <StatusBadge status={agent.status as string} />
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">模型</span>
                <span className="font-mono text-cyber-blue">{agent.model as string}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">温度</span>
                <span>{agent.temperature as number}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Max Tokens</span>
                <span>{agent.maxTokens as number}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Tools</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {((agent.tools as string[]) || []).map((tool) => (
                    <span key={tool} className="text-[10px] px-2 py-0.5 rounded bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span className="text-muted-foreground text-sm">System Prompt</span>
              <pre className="mt-1 p-3 rounded-lg bg-white/5 text-xs whitespace-pre-wrap max-h-40 overflow-y-auto">
                {agent.systemPrompt as string}
              </pre>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-2 flex flex-col h-[600px]">
            <div className="px-4 py-3 border-b border-white/10">
              <span className="hud-text">Agent 对话</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                  开始与 {agent.name as string} 对话
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-cyber-blue/10 border border-cyber-blue/20'
                      : 'bg-white/5 border border-white/10'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && <AgentThinkingAnimation />}
            </div>
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="输入消息..."
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="px-4 py-2 bg-cyber-blue rounded-lg hover:opacity-90 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-44"></a>

## 文件 44 : `apps/web/src/app/agents/page.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { AgentCard } from '@/components/ui/agent-card';
import { GlassCard } from '@/components/ui/glass-card';
import { Plus, Search } from 'lucide-react';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function AgentsPage() {
  const [agents, setAgents] = useState<Array<Record<string, unknown>>>([]);
  const [filter, setFilter] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ name: '', description: '', systemPrompt: '', category: 'CUSTOM', model: 'deepseek-chat' });

  useEffect(() => {
    api.getAgents().then(setAgents).catch(console.error);
  }, []);

  const filtered = agents.filter((a) =>
    (a.name as string).toLowerCase().includes(filter.toLowerCase()),
  );

  const handleCreate = async () => {
    try {
      const agent = await api.createAgent(form);
      setAgents([agent, ...agents]);
      setShowCreate(false);
      setForm({ name: '', description: '', systemPrompt: '', category: 'CUSTOM', model: 'deepseek-chat' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppLayout>
      <Header title="Agent Studio" subtitle="创建、编辑和管理 AI Agent" />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索 Agent..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm w-64 focus:outline-none focus:border-cyber-blue/50"
            />
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-2 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg text-cyber-blue hover:bg-cyber-blue/20 transition-colors"
          >
            <Plus className="w-4 h-4" /> 创建 Agent
          </button>
        </div>

        {showCreate && (
          <GlassCard className="p-6 space-y-4">
            <h3 className="font-semibold">创建自定义 Agent</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="Agent 名称"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
              />
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none"
            >
              <option value="CUSTOM">自定义</option>
              <option value="PLANNER">计划员</option>
              <option value="DATA_ANALYST">数据员</option>
              <option value="SCHEDULER">排程员</option>
              <option value="DISPATCHER">调度员</option>
              <option value="DESIGNER">设计师</option>
              <option value="QUALITY">质量员</option>
              <option value="SIMULATOR">仿真员</option>
              <option value="DECISION">协同决策员</option>
            </select>
            <select
              value={form.model}
              onChange={(e) => setForm({ ...form, model: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none"
            >
              <option value="deepseek-chat">deepseek-chat</option>
              <option value="deepseek-reasoner">deepseek-reasoner</option>
            </select>
            </div>
            <input
              placeholder="描述"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
            />
            <textarea
              placeholder="System Prompt"
              value={form.systemPrompt}
              onChange={(e) => setForm({ ...form, systemPrompt: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
            />
            <div className="flex gap-2">
              <button onClick={handleCreate} className="px-4 py-2 bg-cyber-blue rounded-lg text-sm font-medium">创建</button>
              <button onClick={() => setShowCreate(false)} className="px-4 py-2 bg-white/5 rounded-lg text-sm">取消</button>
            </div>
          </GlassCard>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((agent) => (
            <Link key={agent.id as string} href={`/agents/${agent.id}`}>
              <AgentCard agent={agent as never} />
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-45"></a>

## 文件 45 : `apps/web/src/app/collaboration/page.tsx`

```tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow, Background, Controls, addEdge,
  useNodesState, useEdgesState, type Connection, type Node, type Edge, MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion } from 'framer-motion';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { StatusBadge } from '@/components/ui/status-badge';
import { LogStream } from '@/components/ui/log-stream';
import { Zap, Send } from 'lucide-react';
import { api } from '@/lib/api';

export default function CollaborationPage() {
  const [agents, setAgents] = useState<Array<Record<string, unknown>>>([]);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [taskInput, setTaskInput] = useState('生成 Q2 无人机 MPS 生产计划');
  const [assignment, setAssignment] = useState<Record<string, unknown> | null>(null);
  const [logs, setLogs] = useState<Array<{ id: string; level: string; message: string; createdAt: string }>>([]);
  const [tokenUsage] = useState(12500);

  useEffect(() => {
    api.getAgents().then((agentList) => {
      const templates = agentList.filter((a) => a.isTemplate);
      setAgents(templates);

      const flowNodes: Node[] = templates.map((agent, i) => {
        const angle = (i / templates.length) * 2 * Math.PI;
        const radius = 250;
        return {
          id: agent.id as string,
          position: {
            x: 400 + Math.cos(angle) * radius,
            y: 300 + Math.sin(angle) * radius,
          },
          data: {
            label: (
              <div className="text-center">
                <p className="font-semibold text-xs">{agent.name as string}</p>
                <StatusBadge status={agent.status as string} showLabel={false} />
              </div>
            ),
          },
          style: {
            background: agent.status === 'EXECUTING' ? '#00d4ff30' : '#ffffff10',
            border: agent.status === 'EXECUTING' ? '2px solid #00d4ff' : '1px solid #ffffff30',
            borderRadius: 12,
            color: '#fff',
            padding: 12,
            minWidth: 120,
            boxShadow: agent.status === 'EXECUTING' ? '0 0 20px #00d4ff40' : 'none',
          },
        };
      });

      flowNodes.push({
        id: 'dispatcher',
        position: { x: 400, y: 300 },
        data: { label: <div className="text-center"><Zap className="w-5 h-5 mx-auto text-cyber-blue" /><p className="text-xs mt-1">调度中心</p></div> },
        style: { background: '#7c3aed30', border: '2px solid #7c3aed', borderRadius: 16, color: '#fff', padding: 16, minWidth: 100 },
      });

      const flowEdges: Edge[] = templates.map((agent) => ({
        id: `e-${agent.id}`,
        source: 'dispatcher',
        target: agent.id as string,
        animated: agent.status === 'EXECUTING' || agent.status === 'THINKING',
        style: { stroke: agent.status === 'EXECUTING' ? '#00d4ff' : '#ffffff30' },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#00d4ff' },
      }));

      setNodes(flowNodes);
      setEdges(flowEdges);
    }).catch(console.error);
  }, [setNodes, setEdges]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges],
  );

  const handleAssign = async () => {
    try {
      const result = await api.assignTask(taskInput);
      setAssignment(result);
      setLogs([
        { id: '1', level: 'INFO', message: `合同网协议启动: ${taskInput}`, createdAt: new Date().toISOString() },
        { id: '2', level: 'INFO', message: `收到 ${((result.bids as unknown[]) || []).length} 个 Agent 竞标`, createdAt: new Date().toISOString() },
        { id: '3', level: 'INFO', message: `任务分配给: ${result.assignedAgentName}`, createdAt: new Date().toISOString() },
        { id: '4', level: 'INFO', message: result.reason as string, createdAt: new Date().toISOString() },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppLayout>
      <Header title="多 Agent 协同" subtitle="合同网协议 · 自动任务分配 · Agent 状态同步" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground">在线 Agent</p>
            <p className="text-2xl font-bold text-cyber-green">{agents.length}</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground">Token 消耗</p>
            <p className="text-2xl font-bold text-cyber-blue">{tokenUsage.toLocaleString()}</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground">Tool 调用</p>
            <p className="text-2xl font-bold text-cyber-purple">47</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground">协同任务</p>
            <p className="text-2xl font-bold text-cyber-orange">12</p>
          </GlassCard>
        </div>

        <div className="flex gap-2">
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
            placeholder="输入任务描述..."
          />
          <button
            onClick={handleAssign}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium hover:opacity-90"
          >
            <Send className="w-4 h-4" /> 合同网分配
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <GlassCard className="lg:col-span-2 h-[500px]">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
            >
              <Background color="#ffffff08" gap={30} />
              <Controls className="!bg-card !border-white/10" />
            </ReactFlow>
          </GlassCard>

          <div className="space-y-4">
            {assignment && (
              <GlassCard className="p-4">
                <h3 className="font-semibold mb-2 hud-text">分配结果</h3>
                <p className="text-sm text-cyber-green mb-2">✓ {assignment.assignedAgentName as string}</p>
                <p className="text-xs text-muted-foreground">{assignment.reason as string}</p>
                <div className="mt-3 space-y-1">
                  {((assignment.bids as Array<Record<string, unknown>>) || []).map((bid, i) => (
                    <div key={i} className="flex justify-between text-xs p-1.5 rounded bg-white/5">
                      <span>{bid.agentName as string}</span>
                      <span className="text-cyber-blue">{((bid.bidScore as number) * 100).toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}
            <LogStream logs={logs} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-46"></a>

## 文件 46 : `apps/web/src/app/dashboard/page.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { StatusBadge } from '@/components/ui/status-badge';
import { LogStream } from '@/components/ui/log-stream';
import { api } from '@/lib/api';

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<Record<string, unknown>>({});
  const [charts, setCharts] = useState<Record<string, unknown>>({});

  useEffect(() => {
    Promise.all([api.getDashboardMetrics(), api.getDashboardCharts()])
      .then(([m, c]) => { setMetrics(m); setCharts(c); })
      .catch(console.error);
  }, []);

  const tokenData = (charts.tokenUsage || []) as Array<{ time: string; tokens: number }>;
  const apiData = (charts.apiCalls || []) as Array<{ time: string; calls: number }>;
  const taskData = (charts.taskCompletion || []) as Array<{ date: string; completed: number; failed: number }>;
  const agentData = (charts.agentActivity || []) as Array<{ name: string; tasks: number; tokens: number }>;
  const agentStatuses = (metrics.agentStatuses || []) as Array<Record<string, unknown>>;
  const recentLogs = (metrics.recentLogs || []) as Array<{ id: string; level: string; message: string; createdAt: string }>;

  const chartBase = {
    backgroundColor: 'transparent',
    textStyle: { color: '#888' },
    grid: { left: 50, right: 20, top: 30, bottom: 30 },
  };

  const tokenOption = {
    ...chartBase,
    title: { text: 'Token 消耗趋势', textStyle: { color: '#fff', fontSize: 14 } },
    xAxis: { type: 'category', data: tokenData.map((d) => d.time), axisLabel: { color: '#888' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#ffffff10' } } },
    series: [{ type: 'line', data: tokenData.map((d) => d.tokens), smooth: true, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#00d4ff40' }, { offset: 1, color: '#00d4ff05' }] } }, lineStyle: { color: '#00d4ff' }, itemStyle: { color: '#00d4ff' } }],
  };

  const apiOption = {
    ...chartBase,
    title: { text: 'API 调用量', textStyle: { color: '#fff', fontSize: 14 } },
    xAxis: { type: 'category', data: apiData.map((d) => d.time), axisLabel: { color: '#888' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#ffffff10' } } },
    series: [{ type: 'bar', data: apiData.map((d) => d.calls), itemStyle: { color: '#7c3aed', borderRadius: [4, 4, 0, 0] } }],
  };

  const taskOption = {
    ...chartBase,
    title: { text: '任务完成情况', textStyle: { color: '#fff', fontSize: 14 } },
    legend: { data: ['完成', '失败'], textStyle: { color: '#888' }, top: 0, right: 0 },
    xAxis: { type: 'category', data: taskData.map((d) => d.date), axisLabel: { color: '#888' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#ffffff10' } } },
    series: [
      { name: '完成', type: 'bar', stack: 'total', data: taskData.map((d) => d.completed), itemStyle: { color: '#00ff88' } },
      { name: '失败', type: 'bar', stack: 'total', data: taskData.map((d) => d.failed), itemStyle: { color: '#ff4444' } },
    ],
  };

  const agentOption = {
    ...chartBase,
    title: { text: 'Agent 活跃度', textStyle: { color: '#fff', fontSize: 14 } },
    radar: {
      indicator: agentData.map((d) => ({ name: d.name, max: 60 })),
      axisName: { color: '#888', fontSize: 10 },
      splitArea: { areaStyle: { color: ['#ffffff05', '#ffffff02'] } },
      splitLine: { lineStyle: { color: '#ffffff10' } },
    },
    series: [{
      type: 'radar',
      data: [{
        value: agentData.map((d) => d.tasks),
        areaStyle: { color: '#00d4ff20' },
        lineStyle: { color: '#00d4ff' },
        itemStyle: { color: '#00d4ff' },
      }],
    }],
  };

  return (
    <AppLayout>
      <Header title="AI 数据驾驶舱" subtitle="实时监控 · Agent 状态 · Token 消耗 · API 调用" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { label: 'Agent 总数', value: metrics.totalAgents, color: 'text-cyber-blue' },
            { label: '活跃 Agent', value: metrics.activeAgents, color: 'text-cyber-green' },
            { label: '任务完成', value: metrics.completedTasks, color: 'text-cyber-purple' },
            { label: 'Token 消耗', value: (metrics.totalTokens as number)?.toLocaleString(), color: 'text-cyber-orange' },
            { label: 'API 调用', value: metrics.apiCalls, color: 'text-cyber-pink' },
            { label: '知识库', value: metrics.knowledgeBases, color: 'text-cyan-400' },
          ].map((stat) => (
            <GlassCard key={stat.label} glow className="p-4 text-center">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{String(stat.value || 0)}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <GlassCard className="p-4"><ReactECharts option={tokenOption} style={{ height: 280 }} /></GlassCard>
          <GlassCard className="p-4"><ReactECharts option={apiOption} style={{ height: 280 }} /></GlassCard>
          <GlassCard className="p-4"><ReactECharts option={taskOption} style={{ height: 280 }} /></GlassCard>
          <GlassCard className="p-4"><ReactECharts option={agentOption} style={{ height: 280 }} /></GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <GlassCard className="p-4">
            <h3 className="font-semibold mb-3 hud-text">Agent 状态</h3>
            <div className="space-y-2">
              {agentStatuses.map((agent) => (
                <div key={agent.id as string} className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span className="text-sm">{agent.name as string}</span>
                  <StatusBadge status={agent.status as string} />
                </div>
              ))}
            </div>
          </GlassCard>
          <LogStream logs={recentLogs} />
        </div>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-47"></a>

## 文件 47 : `apps/web/src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222 47% 5%;
    --foreground: 210 40% 98%;
    --card: 222 47% 8%;
    --card-foreground: 210 40% 98%;
    --primary: 199 100% 50%;
    --primary-foreground: 222 47% 5%;
    --secondary: 217 33% 17%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217 33% 17%;
    --muted-foreground: 215 20% 65%;
    --accent: 262 83% 58%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 84% 60%;
    --border: 217 33% 17%;
    --input: 217 33% 17%;
    --ring: 199 100% 50%;
    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}

@layer components {
  .glass-card {
    @apply bg-card/60 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl;
  }

  .glass-card-hover {
    @apply glass-card transition-all duration-300 hover:border-cyber-blue/30 hover:shadow-cyber-blue/10 hover:shadow-lg;
  }

  .cyber-border {
    @apply relative overflow-hidden;
  }

  .cyber-border::before {
    content: '';
    @apply absolute inset-0 rounded-xl;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
    animation: flow-line 3s linear infinite;
    background-size: 200% 100%;
  }

  .hud-text {
    @apply font-mono text-xs tracking-wider uppercase text-cyber-blue;
  }

  .glow-text {
    text-shadow: 0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3);
  }

  .status-dot {
    @apply w-2 h-2 rounded-full;
  }

  .status-idle { @apply bg-gray-400; }
  .status-thinking { @apply bg-yellow-400 animate-pulse; }
  .status-executing { @apply bg-cyber-blue animate-pulse; }
  .status-error { @apply bg-red-500; }
  .status-offline { @apply bg-gray-600; }

  .grid-bg {
    background-image:
      linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
  }

  .scan-effect::after {
    content: '';
    @apply absolute inset-0 pointer-events-none;
    background: linear-gradient(transparent 50%, rgba(0, 212, 255, 0.02) 50%);
    background-size: 100% 4px;
  }
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: hsl(var(--background));
}
::-webkit-scrollbar-thumb {
  background: hsl(var(--muted));
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: hsl(var(--primary));
}
```

---

<a id="file-48"></a>

## 文件 48 : `apps/web/src/app/knowledge/page.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { Upload, Search, FileText, Plus, Bot, BarChart3, Filter } from 'lucide-react';
import { api } from '@/lib/api';

const INDUSTRY_LABELS: Record<string, string> = {
  UAV: '无人机制造',
  SMT: 'SMT 电子制造',
  EV: '新能源汽车',
  PLATFORM: '平台与多智能体',
};

export default function KnowledgePage() {
  const [bases, setBases] = useState<Array<Record<string, unknown>>>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [documents, setDocuments] = useState<Array<Record<string, unknown>>>([]);
  const [stats, setStats] = useState<Record<string, unknown> | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [searchResults, setSearchResults] = useState<Array<Record<string, unknown>>>([]);
  const [organizeReport, setOrganizeReport] = useState<Record<string, unknown> | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.getKnowledgeBases().then(setBases).catch(console.error);
  }, []);

  const selectBase = async (id: string) => {
    setSelectedId(id);
    setOrganizeReport(null);
    const detail = await api.getKnowledgeBase(id);
    setDocuments((detail.documents as Array<Record<string, unknown>>) || []);
    const s = await api.getKnowledgeStats(id);
    setStats(s);
  };

  const handleCreate = async () => {
    const kb = await api.createKnowledgeBase({ name: newName });
    setBases([kb, ...bases]);
    setShowCreate(false);
    setNewName('');
  };

  const handleSearch = async () => {
    if (!selectedId || !searchQuery) return;
    const results = await api.searchKnowledge(selectedId, searchQuery, industryFilter || undefined);
    setSearchResults(results);
  };

  const handleOrganize = async () => {
    if (!selectedId) return;
    setLoading(true);
    try {
      const report = await api.organizeKnowledge(selectedId);
      setOrganizeReport(report);
      await selectBase(selectedId);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedId || !e.target.files?.[0]) return;
    await api.uploadKnowledgeDocument(selectedId, e.target.files[0]);
    selectBase(selectedId);
  };

  const filteredDocs = industryFilter
    ? documents.filter((d) => d.industry === industryFilter)
    : documents;

  return (
    <AppLayout>
      <Header title="企业知识库" subtitle="80 份行业文档 · RAG 向量检索 · 多 Agent 智能整理" />
      <div className="p-6 space-y-6">
        <div className="flex flex-wrap justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {bases.map((kb) => (
              <button
                key={kb.id as string}
                onClick={() => selectBase(kb.id as string)}
                className={`px-4 py-2 rounded-lg text-sm border transition-colors ${
                  selectedId === kb.id
                    ? 'bg-cyber-blue/10 border-cyber-blue/30 text-cyber-blue'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                {kb.name as string}
                {(kb.isSystem as boolean) && <span className="ml-1 text-xs text-cyber-green">[系统]</span>}
                <span className="ml-2 text-xs text-muted-foreground">({(kb.documentCount as number) || 0})</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-1 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg text-cyber-blue text-sm"
          >
            <Plus className="w-4 h-4" /> 新建知识库
          </button>
        </div>

        {showCreate && (
          <GlassCard className="p-4 flex gap-2">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="知识库名称"
              className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
            />
            <button onClick={handleCreate} className="px-4 py-2 bg-cyber-blue rounded-lg text-sm">创建</button>
            <button onClick={() => setShowCreate(false)} className="px-4 py-2 bg-white/5 rounded-lg text-sm">取消</button>
          </GlassCard>
        )}

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GlassCard className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1"><FileText className="w-4 h-4" /> 文档总数</div>
              <p className="text-2xl font-bold text-cyber-blue">{stats.documentCount as number}</p>
            </GlassCard>
            <GlassCard className="p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1"><BarChart3 className="w-4 h-4" /> RAG 切片</div>
              <p className="text-2xl font-bold text-cyber-green">{stats.chunkCount as number}</p>
            </GlassCard>
            <GlassCard className="p-4 col-span-2">
              <div className="text-xs text-muted-foreground mb-2">行业分布</div>
              <div className="flex flex-wrap gap-2">
                {((stats.byIndustry as Array<{ industry: string; count: number }>) || []).map((i) => (
                  <span key={i.industry} className="px-2 py-1 rounded bg-white/5 text-xs border border-white/10">
                    {INDUSTRY_LABELS[i.industry] || i.industry}: {i.count}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {selectedId && (
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-muted-foreground" />
            {['', 'UAV', 'SMT', 'EV', 'PLATFORM'].map((v) => (
              <button
                key={v || 'all'}
                onClick={() => setIndustryFilter(v)}
                className={`px-3 py-1 rounded-full text-xs border ${
                  industryFilter === v ? 'bg-cyber-blue/20 border-cyber-blue/40 text-cyber-blue' : 'bg-white/5 border-white/10'
                }`}
              >
                {v ? INDUSTRY_LABELS[v] : '全部行业'}
              </button>
            ))}
            <button
              onClick={handleOrganize}
              disabled={loading}
              className="ml-auto flex items-center gap-1 px-4 py-2 bg-cyber-green/10 border border-cyber-green/30 rounded-lg text-cyber-green text-sm disabled:opacity-50"
            >
              <Bot className="w-4 h-4" /> {loading ? '整理中...' : '智能体整理文档'}
            </button>
          </div>
        )}

        {organizeReport && (
          <GlassCard className="p-4 border-cyber-green/30">
            <p className="text-sm text-cyber-green mb-2">{organizeReport.message as string}</p>
            <div className="flex flex-wrap gap-2">
              {((organizeReport.agentReport as Array<{ agent: string; documents: number }>) || []).map((r) => (
                <span key={r.agent} className="text-xs px-2 py-1 rounded bg-white/5">{r.agent}: {r.documents} 份</span>
              ))}
            </div>
          </GlassCard>
        )}

        {selectedId && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">文档列表 ({filteredDocs.length})</h3>
                {!(bases.find((b) => b.id === selectedId)?.isSystem as boolean) && (
                  <label className="flex items-center gap-1 px-3 py-1.5 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg text-cyber-blue text-sm cursor-pointer">
                    <Upload className="w-4 h-4" /> 上传
                    <input type="file" className="hidden" accept=".pdf,.docx,.xlsx,.txt,.md" onChange={handleUpload} />
                  </label>
                )}
              </div>
              <div className="space-y-2 max-h-[480px] overflow-y-auto">
                {filteredDocs.map((doc) => (
                  <div key={doc.id as string} className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-cyber-blue shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{doc.name as string}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {INDUSTRY_LABELS[String(doc.industry || '')] || String(doc.industry || '通用')} · {String(doc.category || '—')} · {Number(doc.chunkCount || 0)} chunks
                        </p>
                        {typeof doc.summary === 'string' && doc.summary && (
                          <p className="text-xs text-foreground/60 mt-1 line-clamp-2">{doc.summary}</p>
                        )}
                        <p className="text-xs text-cyber-green mt-1">整理: {String(doc.organizedBy || '—')}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {filteredDocs.length === 0 && (
                  <p className="text-center text-muted-foreground py-8 text-sm">暂无文档，运行 start.bat 初始化行业知识库</p>
                )}
              </div>
            </GlassCard>

            <GlassCard className="p-4">
              <h3 className="font-semibold mb-4">向量检索 (RAG)</h3>
              <div className="flex gap-2 mb-4">
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="例如：SMT 换线优化、无人机 MPS、电池追溯..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button onClick={handleSearch} className="px-4 py-2 bg-cyber-blue rounded-lg">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2 max-h-[480px] overflow-y-auto">
                {searchResults.map((result, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-cyber-blue">
                        #{(result.metadata as Record<string, unknown>)?.documentName as string || i + 1}
                      </span>
                      <span className="text-xs text-cyber-green">{((result.score as number) * 100).toFixed(1)}%</span>
                    </div>
                    <p className="text-sm text-foreground/80 line-clamp-4">{result.content as string}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-49"></a>

## 文件 49 : `apps/web/src/app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Agent Studio - 工业级 AI 多智能体协同平台',
  description: '本地运行的工业级 AI 多智能体协同平台',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="dark">
      <body>{children}</body>
    </html>
  );
}
```

---

<a id="file-50"></a>

## 文件 50 : `apps/web/src/app/login/page.tsx`

```tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, User } from 'lucide-react';
import { SciFiBackground } from '@/components/layout/sci-fi-background';
import { useAuthStore } from '@/stores/app-store';

export default function LoginPage() {
  const router = useRouter();
  const { login, register } = useAuthStore();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('admin@aistudio.local');
  const [password, setPassword] = useState('admin123');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isRegister) {
        if (!name.trim()) {
          setError('请输入姓名');
          setLoading(false);
          return;
        }
        await register(email.trim(), password, name.trim());
      } else {
        await login(email.trim(), password);
      }
      router.replace('/');
    } catch (err) {
      if (err instanceof TypeError) {
        setError('无法连接 API 服务，请确认后端已启动（http://127.0.0.1:3001）');
      } else {
        setError(err instanceof Error ? err.message : '登录失败');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SciFiBackground />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass-card p-8 cyber-border"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold glow-text">AI Agent Studio</h1>
          <p className="text-sm text-muted-foreground mt-1">工业级 AI 多智能体协同平台</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {isRegister && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
                required
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder="邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="password"
              placeholder="密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? '处理中...' : isRegister ? '注册' : '登录'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-sm text-cyber-blue hover:underline"
          >
            {isRegister ? '已有账号？登录' : '没有账号？注册'}
          </button>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
          <p className="text-xs text-muted-foreground text-center">
            演示账号: admin@aistudio.local / admin123
          </p>
        </div>
      </motion.div>
    </div>
  );
}
```

---

<a id="file-51"></a>

## 文件 51 : `apps/web/src/app/page.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { AgentCard } from '@/components/ui/agent-card';
import { LogStream } from '@/components/ui/log-stream';
import { Bot, GitBranch, BookOpen, Factory, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [metrics, setMetrics] = useState<Record<string, unknown>>({});
  const [agents, setAgents] = useState<Array<Record<string, unknown>>>([]);
  const [logs, setLogs] = useState<Array<{ id: string; level: string; message: string; createdAt: string; agent?: { name: string } }>>([]);

  useEffect(() => {
    Promise.all([
      api.getDashboardMetrics(),
      api.getAgents(),
      api.getRecentLogs(20),
    ]).then(([m, a, l]) => {
      setMetrics(m);
      setAgents(a.slice(0, 8) as Array<Record<string, unknown>>);
      setLogs(l as typeof logs);
    }).catch(console.error);
  }, []);

  const statCards = [
    { label: 'Agent 总数', value: metrics.totalAgents || 0, icon: Bot, color: 'text-cyber-blue' },
    { label: '活跃 Agent', value: metrics.activeAgents || 0, icon: Bot, color: 'text-cyber-green' },
    { label: '任务完成', value: `${metrics.completedTasks || 0}/${metrics.totalTasks || 0}`, icon: GitBranch, color: 'text-cyber-purple' },
    { label: '知识库文档', value: metrics.documents || 0, icon: BookOpen, color: 'text-cyber-orange' },
  ];

  return (
    <AppLayout>
      <Header title="控制台" subtitle="AI Agent Studio 工业级多智能体协同平台" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <GlassCard className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{String(stat.value)}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color} opacity-50`} />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Agent 概览</h3>
              <Link href="/agents" className="text-sm text-cyber-blue flex items-center gap-1 hover:underline">
                查看全部 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map((agent) => (
                <AgentCard
                  key={agent.id as string}
                  agent={agent as never}
                  onClick={() => window.location.href = `/agents/${agent.id}`}
                />
              ))}
            </div>
          </div>

          <LogStream logs={logs} />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">快速入口</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/workflows', label: '工作流设计', desc: '可视化拖拽编排', icon: GitBranch },
              { href: '/collaboration', label: '多Agent协同', desc: '合同网协议调度', icon: Bot },
              { href: '/scenarios', label: '工业场景', desc: '三大制造场景', icon: Factory },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <GlassCard hover className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-52"></a>

## 文件 52 : `apps/web/src/app/scenarios/ev/page.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';

export default function EvScenarioPage() {
  const [scenario, setScenario] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    api.getScenarios().then((scenarios) => {
      const ev = scenarios.find((s) => s.type === 'EV_MANUFACTURING');
      if (ev) setScenario(ev);
    });
  }, []);

  const data = (scenario?.data || {}) as Record<string, unknown>;
  const trace = (data.traceability || {}) as Record<string, unknown>;
  const supply = (data.supplyChain || {}) as Record<string, unknown>;
  const bom = (data.bom || {}) as Record<string, unknown>;

  return (
    <AppLayout>
      <Header title="新能源汽车制造场景" subtitle="质量追溯 · 供应链协同 · 多级 BOM" />
      <div className="p-6 space-y-6">
        <Link href="/scenarios" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> 返回场景列表
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-4">
            <p className="text-xs hud-text">质量追溯</p>
            <p className="text-lg font-mono mt-2 text-cyber-blue">{trace.vin as string}</p>
            <p className="text-sm text-muted-foreground mt-2">{trace.checkpoints as number} 检测点</p>
            <p className="text-sm text-cyber-green mt-1">合格率: {trace.passRate as number}%</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs hud-text">供应链协同</p>
            <p className="text-3xl font-bold mt-2">{(supply.tier1 as number) + (supply.tier2 as number)}</p>
            <p className="text-sm text-muted-foreground">Tier1: {supply.tier1 as number} · Tier2: {supply.tier2 as number}</p>
            <p className="text-sm text-cyber-green mt-1">准时率: {supply.onTimeRate as number}%</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs hud-text">多级 BOM</p>
            <p className="text-3xl font-bold mt-2 text-cyber-purple">{bom.totalParts as number}</p>
            <p className="text-sm text-muted-foreground">{bom.levels as number} 层级 · 关键件 {bom.criticalParts as number}</p>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <h3 className="font-semibold mb-4 hud-text">质量追溯链路</h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {['原材料入库', '冲压成型', '焊接组装', '涂装工艺', '总装下线', 'PDI 检测', '出厂交付'].map((step, i) => (
              <div key={step} className="flex items-center gap-2 shrink-0">
                <div className="px-4 py-3 rounded-lg bg-cyber-green/10 border border-cyber-green/20 text-center min-w-[100px]">
                  <p className="text-xs text-cyber-green">Step {i + 1}</p>
                  <p className="text-sm mt-1">{step}</p>
                </div>
                {i < 6 && <div className="w-8 h-0.5 bg-cyber-blue/30" />}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-53"></a>

## 文件 53 : `apps/web/src/app/scenarios/page.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { Plane, Cpu, Car, ArrowRight } from 'lucide-react';
import { api } from '@/lib/api';
import { motion } from 'framer-motion';

const scenarioIcons: Record<string, typeof Plane> = {
  UAV_MANUFACTURING: Plane,
  SMT_MANUFACTURING: Cpu,
  EV_MANUFACTURING: Car,
};

const scenarioColors: Record<string, string> = {
  UAV_MANUFACTURING: 'from-blue-500 to-cyan-500',
  SMT_MANUFACTURING: 'from-orange-500 to-yellow-500',
  EV_MANUFACTURING: 'from-green-500 to-emerald-500',
};

const scenarioPaths: Record<string, string> = {
  UAV_MANUFACTURING: '/scenarios/uav',
  SMT_MANUFACTURING: '/scenarios/smt',
  EV_MANUFACTURING: '/scenarios/ev',
};

export default function ScenariosPage() {
  const [scenarios, setScenarios] = useState<Array<Record<string, unknown>>>([]);

  useEffect(() => {
    api.getScenarios().then(setScenarios).catch(console.error);
  }, []);

  return (
    <AppLayout>
      <Header title="工业场景" subtitle="无人机 · SMT · 新能源汽车 三大制造场景" />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((scenario, i) => {
            const type = scenario.type as string;
            const Icon = scenarioIcons[type] || Plane;
            const gradient = scenarioColors[type] || 'from-gray-500 to-slate-500';
            const path = scenarioPaths[type] || '/scenarios';

            return (
              <motion.div key={scenario.id as string} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
                <Link href={path}>
                  <GlassCard hover className="p-6 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{scenario.name as string}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{scenario.description as string}</p>
                    <div className="flex items-center text-cyber-blue text-sm">
                      进入场景 <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-54"></a>

## 文件 54 : `apps/web/src/app/scenarios/smt/page.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';

export default function SmtScenarioPage() {
  const [scenario, setScenario] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    api.getScenarios().then((scenarios) => {
      const smt = scenarios.find((s) => s.type === 'SMT_MANUFACTURING');
      if (smt) setScenario(smt);
    });
  }, []);

  const data = (scenario?.data || {}) as Record<string, unknown>;
  const schedule = (data.schedule || []) as Array<Record<string, unknown>>;
  const changeover = (data.changeover || {}) as Record<string, unknown>;

  const ganttOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    grid: { left: 80, right: 20, top: 20, bottom: 30 },
    xAxis: { type: 'category', data: schedule.map((s) => `${s.line}: ${s.product}`), axisLabel: { color: '#888', fontSize: 10 } },
    yAxis: { type: 'value', name: '产量', axisLabel: { color: '#888' }, splitLine: { lineStyle: { color: '#ffffff10' } } },
    series: [{
      type: 'bar',
      data: schedule.map((s) => s.qty),
      itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#00d4ff' }, { offset: 1, color: '#7c3aed' }] }, borderRadius: [4, 4, 0, 0] },
    }],
  };

  return (
    <AppLayout>
      <Header title="SMT 制造场景" subtitle="SMT 排程 · 换线优化 · 甘特图" />
      <div className="p-6 space-y-6">
        <Link href="/scenarios" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> 返回场景列表
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-4">
            <p className="text-xs hud-text">产线数量</p>
            <p className="text-3xl font-bold mt-2">4</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs hud-text">换线时间优化</p>
            <p className="text-3xl font-bold mt-2 text-cyber-green">{changeover.savings as string}</p>
            <p className="text-sm text-muted-foreground">{changeover.avgTime as number}min → {changeover.optimized as number}min</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs hud-text">排程任务</p>
            <p className="text-3xl font-bold mt-2 text-cyber-blue">{schedule.length}</p>
          </GlassCard>
        </div>

        <GlassCard className="p-4">
          <h3 className="font-semibold mb-4 hud-text">SMT 排程甘特图</h3>
          <ReactECharts option={ganttOption} style={{ height: 300 }} />
        </GlassCard>

        <GlassCard className="p-4">
          <h3 className="font-semibold mb-4 hud-text">排程明细</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 px-3 text-muted-foreground">产线</th>
                  <th className="text-left py-2 px-3 text-muted-foreground">产品</th>
                  <th className="text-left py-2 px-3 text-muted-foreground">开始</th>
                  <th className="text-left py-2 px-3 text-muted-foreground">结束</th>
                  <th className="text-right py-2 px-3 text-muted-foreground">产量</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-2 px-3 font-mono text-cyber-blue">{s.line as string}</td>
                    <td className="py-2 px-3">{s.product as string}</td>
                    <td className="py-2 px-3">{s.start as string}</td>
                    <td className="py-2 px-3">{s.end as string}</td>
                    <td className="py-2 px-3 text-right font-bold">{s.qty as number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-55"></a>

## 文件 55 : `apps/web/src/app/scenarios/uav/page.tsx`

```tsx
'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';

export default function UavScenarioPage() {
  const [scenario, setScenario] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    api.getScenarios().then((scenarios) => {
      const uav = scenarios.find((s) => s.type === 'UAV_MANUFACTURING');
      if (uav) setScenario(uav);
    });
  }, []);

  const data = (scenario?.data || {}) as Record<string, unknown>;
  const bom = (data.bom || []) as Array<Record<string, unknown>>;
  const mps = (data.mps || {}) as Record<string, unknown>;
  const mrp = (data.mrp || {}) as Record<string, unknown>;

  return (
    <AppLayout>
      <Header title="无人机制造场景" subtitle="MPS · MRP · BOM 生产计划" />
      <div className="p-6 space-y-6">
        <Link href="/scenarios" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> 返回场景列表
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground hud-text">MPS 主生产计划</p>
            <p className="text-3xl font-bold mt-2 text-cyber-blue">{mps.plannedQty as number}</p>
            <p className="text-sm text-muted-foreground mt-1">计划产量 · {mps.period as string}</p>
            <p className="text-sm text-cyber-green mt-2">确认: {mps.confirmedQty as number} 台</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground hud-text">MRP 物料需求</p>
            <p className="text-3xl font-bold mt-2 text-cyber-purple">{mrp.materials as number}</p>
            <p className="text-sm text-muted-foreground mt-1">物料种类</p>
            <p className="text-sm text-red-400 mt-2">缺料: {mrp.shortages as number} 项</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground hud-text">BOM 层级</p>
            <p className="text-3xl font-bold mt-2 text-cyber-green">5</p>
            <p className="text-sm text-muted-foreground mt-1">多级 BOM 结构</p>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <h3 className="font-semibold mb-4 hud-text">BOM 物料清单</h3>
          {bom.map((item) => (
            <div key={item.id as string} className="mb-4">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-cyber-blue/5 border border-cyber-blue/20">
                <span className="font-mono text-cyber-blue text-sm">{item.id as string}</span>
                <span className="font-medium">{item.name as string}</span>
                <span className="text-xs text-muted-foreground ml-auto">x{item.qty as number}</span>
              </div>
              <div className="ml-6 mt-1 space-y-1">
                {((item.children as Array<Record<string, unknown>>) || []).map((child) => (
                  <div key={child.id as string} className="flex items-center gap-2 p-2 rounded bg-white/5 text-sm">
                    <span className="font-mono text-muted-foreground">{child.id as string}</span>
                    <span>{child.name as string}</span>
                    <span className="text-xs text-muted-foreground ml-auto">x{child.qty as number}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </GlassCard>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-56"></a>

## 文件 56 : `apps/web/src/app/workflows/page.tsx`

```tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow, Background, Controls, MiniMap, addEdge,
  useNodesState, useEdgesState, type Connection, type Node, type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { Play, Save, Plus } from 'lucide-react';
import { api } from '@/lib/api';

const nodeTypes = ['start', 'end', 'agent', 'http', 'condition', 'rag', 'tool'] as const;

const defaultNodes: Node[] = [
  { id: 'start', type: 'input', position: { x: 100, y: 200 }, data: { label: '开始' }, style: { background: '#00d4ff20', border: '1px solid #00d4ff', borderRadius: 8, color: '#fff', padding: 10 } },
  { id: 'agent-1', position: { x: 350, y: 200 }, data: { label: 'AI Agent' }, style: { background: '#7c3aed20', border: '1px solid #7c3aed', borderRadius: 8, color: '#fff', padding: 10 } },
  { id: 'end', type: 'output', position: { x: 600, y: 200 }, data: { label: '结束' }, style: { background: '#00ff8820', border: '1px solid #00ff88', borderRadius: 8, color: '#fff', padding: 10 } },
];

const defaultEdges: Edge[] = [
  { id: 'e1', source: 'start', target: 'agent-1', animated: true, style: { stroke: '#00d4ff' } },
  { id: 'e2', source: 'agent-1', target: 'end', animated: true, style: { stroke: '#00d4ff' } },
];

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<Array<Record<string, unknown>>>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
  const [executionResult, setExecutionResult] = useState<Record<string, unknown> | null>(null);
  const [executing, setExecuting] = useState(false);

  useEffect(() => {
    api.getWorkflows().then((wfs) => {
      setWorkflows(wfs);
      if (wfs.length > 0) {
        loadWorkflow(wfs[0].id as string);
      }
    }).catch(console.error);
  }, []);

  const loadWorkflow = async (id: string) => {
    setSelectedId(id);
    const wf = await api.getWorkflow(id);
    if (wf.nodes && (wf.nodes as Node[]).length > 0) {
      setNodes(wf.nodes as Node[]);
      setEdges(wf.edges as Edge[]);
    }
  };

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#00d4ff' } }, eds)),
    [setEdges],
  );

  const handleSave = async () => {
    if (!selectedId) return;
    await api.updateWorkflow(selectedId, { nodes, edges });
  };

  const handleExecute = async () => {
    if (!selectedId) return;
    setExecuting(true);
    setExecutionResult(null);
    try {
      const result = await api.executeWorkflow(selectedId);
      setExecutionResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setExecuting(false);
    }
  };

  const addNode = (type: string) => {
    const id = `${type}-${Date.now()}`;
    setNodes((nds) => [
      ...nds,
      {
        id,
        position: { x: 250 + Math.random() * 200, y: 100 + Math.random() * 200 },
        data: { label: type === 'agent' ? 'AI Agent' : type === 'rag' ? 'RAG 检索' : type === 'condition' ? '条件判断' : type === 'http' ? 'HTTP 请求' : 'Tool 调用' },
        style: { background: '#ffffff10', border: '1px solid #ffffff30', borderRadius: 8, color: '#fff', padding: 10 },
      },
    ]);
  };

  return (
    <AppLayout>
      <Header title="工作流设计" subtitle="可视化拖拽编排 Agent 工作流" />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <select
            value={selectedId || ''}
            onChange={(e) => loadWorkflow(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
          >
            {workflows.map((wf) => (
              <option key={wf.id as string} value={wf.id as string}>{wf.name as string}</option>
            ))}
          </select>
          <div className="flex gap-2">
            {nodeTypes.filter(t => !['start', 'end'].includes(t)).map((type) => (
              <button
                key={type}
                onClick={() => addNode(type)}
                className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"
              >
                <Plus className="w-3 h-3 inline mr-1" />{type}
              </button>
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button onClick={handleSave} className="flex items-center gap-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10">
              <Save className="w-4 h-4" /> 保存
            </button>
            <button
              onClick={handleExecute}
              disabled={executing}
              className="flex items-center gap-1 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg text-sm text-cyber-blue hover:bg-cyber-blue/20 disabled:opacity-50"
            >
              <Play className="w-4 h-4" /> {executing ? '执行中...' : '运行'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <GlassCard className="lg:col-span-3 h-[600px] overflow-hidden">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
              className="bg-transparent"
            >
              <Background color="#ffffff10" gap={20} />
              <Controls className="!bg-card !border-white/10 !rounded-lg" />
              <MiniMap className="!bg-card !border-white/10 !rounded-lg" nodeColor="#00d4ff" />
            </ReactFlow>
          </GlassCard>

          <GlassCard className="p-4 h-[600px] overflow-y-auto">
            <h3 className="font-semibold mb-3 hud-text">执行日志</h3>
            {executionResult ? (
              <div className="space-y-2 font-mono text-xs">
                <p className="text-cyber-green">状态: {executionResult.status as string}</p>
                <p>执行 ID: {executionResult.executionId as string}</p>
                {((executionResult.steps as Array<Record<string, unknown>>) || []).map((step, i) => (
                  <div key={i} className="p-2 rounded bg-white/5 border border-white/10">
                    <p className="text-cyber-blue">[{step.nodeType as string}] {step.nodeId as string}</p>
                    <p className="text-muted-foreground">{step.status as string} - {step.duration as number}ms</p>
                    {((step.logs as string[]) || []).map((log, j) => (
                      <p key={j} className="text-foreground/60 pl-2">{log}</p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">点击"运行"执行工作流</p>
            )}
          </GlassCard>
        </div>
      </div>
    </AppLayout>
  );
}
```

---

<a id="file-57"></a>

## 文件 57 : `apps/web/src/components/layout/app-layout.tsx`

```tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SciFiBackground } from './sci-fi-background';
import { Sidebar } from './sidebar';
import { useAuthStore, useAppStore } from '@/stores/app-store';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isLoading, loadProfile } = useAuthStore();
  const { sidebarOpen } = useAppStore();

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SciFiBackground />
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-cyber-blue border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-muted-foreground hud-text">系统初始化中...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen">
      <SciFiBackground />
      <Sidebar />
      <main
        className="min-h-screen transition-all duration-300"
        style={{ marginLeft: sidebarOpen ? 260 : 72 }}
      >
        {children}
      </main>
    </div>
  );
}
```

---

<a id="file-58"></a>

## 文件 58 : `apps/web/src/components/layout/header.tsx`

```tsx
'use client';

import { Bell, Search, Activity } from 'lucide-react';
import { useAppStore } from '@/stores/app-store';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const { sidebarOpen } = useAppStore();

  return (
    <header
      className="sticky top-0 z-40 glass-card border-b border-white/10 px-6 py-4"
      style={{ marginLeft: sidebarOpen ? 260 : 72 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold glow-text">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索 Agent、工作流..."
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm w-64 focus:outline-none focus:border-cyber-blue/50 transition-colors"
            />
          </div>
          <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-cyber-blue rounded-full animate-pulse" />
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-green/10 border border-cyber-green/20">
            <Activity className="w-4 h-4 text-cyber-green" />
            <span className="text-xs text-cyber-green font-mono">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
```

---

<a id="file-59"></a>

## 文件 59 : `apps/web/src/components/layout/sci-fi-background.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';

export function SciFiBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-cyber-blue/5" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 scan-effect" />
    </div>
  );
}
```

---

<a id="file-60"></a>

## 文件 60 : `apps/web/src/components/layout/sidebar.tsx`

```tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Bot, GitBranch, Network, BookOpen, Factory,
  BarChart3, Settings, ChevronLeft, Zap, LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppStore, useAuthStore } from '@/stores/app-store';

const navItems = [
  { href: '/', label: '控制台', icon: LayoutDashboard },
  { href: '/agents', label: 'Agent Studio', icon: Bot },
  { href: '/workflows', label: '工作流', icon: GitBranch },
  { href: '/collaboration', label: '多Agent协同', icon: Network },
  { href: '/knowledge', label: '知识库', icon: BookOpen },
  { href: '/scenarios', label: '工业场景', icon: Factory },
  { href: '/dashboard', label: '数据驾驶舱', icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar } = useAppStore();
  const { user, logout } = useAuthStore();

  return (
    <motion.aside
      animate={{ width: sidebarOpen ? 260 : 72 }}
      className="fixed left-0 top-0 h-screen glass-card border-r border-white/10 z-50 flex flex-col"
    >
      <div className="flex items-center gap-3 p-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        {sidebarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-sm font-bold glow-text">AI Agent Studio</h1>
            <p className="text-[10px] text-muted-foreground">工业级多智能体平台</p>
          </motion.div>
        )}
      </div>

      <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group',
                isActive
                  ? 'bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5',
              )}
            >
              <item.icon className={cn('w-5 h-5 shrink-0', isActive && 'text-cyber-blue')} />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 border-t border-white/10 space-y-1">
        {sidebarOpen && user && (
          <div className="px-3 py-2 text-xs text-muted-foreground">
            <p className="font-medium text-foreground">{user.name}</p>
            <p>{user.email}</p>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 w-full"
        >
          <ChevronLeft className={cn('w-5 h-5 transition-transform', !sidebarOpen && 'rotate-180')} />
          {sidebarOpen && <span className="text-sm">收起</span>}
        </button>
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-red-400 hover:bg-red-400/5 w-full"
        >
          <LogOut className="w-5 h-5" />
          {sidebarOpen && <span className="text-sm">退出</span>}
        </button>
      </div>
    </motion.aside>
  );
}
```

---

<a id="file-61"></a>

## 文件 61 : `apps/web/src/components/ui/agent-card.tsx`

```tsx
'use client';

import { motion } from 'framer-motion';
import { Bot, Brain, LayoutGrid, Wrench } from 'lucide-react';
import { GlassCard } from './glass-card';
import { StatusBadge } from './status-badge';
import { cn } from '@/lib/utils';

const categoryIcons: Record<string, typeof Bot> = {
  PLANNER: Brain,
  DATA_ANALYST: Bot,
  SCHEDULER: Bot,
  DISPATCHER: Bot,
  DESIGNER: LayoutGrid,
  QUALITY: Bot,
  SIMULATOR: Bot,
  DECISION: Brain,
  CUSTOM: Wrench,
};

const categoryColors: Record<string, string> = {
  PLANNER: 'from-blue-500 to-cyan-500',
  DATA_ANALYST: 'from-purple-500 to-pink-500',
  SCHEDULER: 'from-orange-500 to-yellow-500',
  DISPATCHER: 'from-green-500 to-emerald-500',
  DESIGNER: 'from-teal-500 to-cyan-500',
  QUALITY: 'from-red-500 to-rose-500',
  SIMULATOR: 'from-indigo-500 to-violet-500',
  DECISION: 'from-cyan-500 to-blue-500',
  CUSTOM: 'from-gray-500 to-slate-500',
};

interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    description?: string;
    status: string;
    category: string;
    model: string;
    isTemplate?: boolean;
  };
  onClick?: () => void;
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  const Icon = categoryIcons[agent.category] || Bot;
  const gradient = categoryColors[agent.category] || categoryColors.CUSTOM;

  return (
    <GlassCard hover className="p-4 cursor-pointer" glow={agent.status === 'EXECUTING'}>
      <div onClick={onClick}>
        <div className="flex items-start justify-between mb-3">
          <div className={cn('w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center', gradient)}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <StatusBadge status={agent.status} />
        </div>
        <h3 className="font-semibold text-sm mb-1">{agent.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {agent.description || '暂无描述'}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-cyber-blue/70">{agent.model}</span>
          {agent.isTemplate && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20">
              模板
            </span>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export function AgentThinkingAnimation() {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-cyber-blue"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      <span className="text-xs text-cyber-blue ml-1">AI 思考中...</span>
    </div>
  );
}
```

---

<a id="file-62"></a>

## 文件 62 : `apps/web/src/components/ui/glass-card.tsx`

```tsx
'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = false, glow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        hover ? 'glass-card-hover' : 'glass-card',
        glow && 'border-cyber-blue/20 shadow-cyber-blue/5',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
```

---

<a id="file-63"></a>

## 文件 63 : `apps/web/src/components/ui/log-stream.tsx`

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LogEntry {
  id: string;
  level: string;
  message: string;
  createdAt: string;
  agent?: { name: string };
}

interface LogStreamProps {
  logs: LogEntry[];
  className?: string;
}

const levelColors: Record<string, string> = {
  DEBUG: 'text-gray-400',
  INFO: 'text-cyber-blue',
  WARN: 'text-yellow-400',
  ERROR: 'text-red-400',
};

export function LogStream({ logs, className }: LogStreamProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [logs]);

  return (
    <div className={cn('glass-card overflow-hidden', className)}>
      <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
        <span className="hud-text">实时日志流</span>
        <span className="text-[10px] text-muted-foreground font-mono">{logs.length} entries</span>
      </div>
      <div ref={containerRef} className="h-64 overflow-y-auto p-2 space-y-1 font-mono text-xs">
        <AnimatePresence>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-2 px-2 py-1 rounded hover:bg-white/5"
            >
              <span className="text-muted-foreground shrink-0">
                {new Date(log.createdAt).toLocaleTimeString('zh-CN')}
              </span>
              <span className={cn('shrink-0 w-12', levelColors[log.level])}>
                [{log.level}]
              </span>
              {log.agent && (
                <span className="text-cyber-purple shrink-0">{log.agent.name}:</span>
              )}
              <span className="text-foreground/80 truncate">{log.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        {logs.length === 0 && (
          <div className="text-center text-muted-foreground py-8">暂无日志</div>
        )}
      </div>
    </div>
  );
}
```

---

<a id="file-64"></a>

## 文件 64 : `apps/web/src/components/ui/status-badge.tsx`

```tsx
'use client';

import { cn } from '@/lib/utils';

const statusMap: Record<string, { label: string; className: string }> = {
  IDLE: { label: '空闲', className: 'status-idle' },
  THINKING: { label: '思考中', className: 'status-thinking' },
  EXECUTING: { label: '执行中', className: 'status-executing' },
  WAITING: { label: '等待中', className: 'status-thinking' },
  ERROR: { label: '错误', className: 'status-error' },
  OFFLINE: { label: '离线', className: 'status-offline' },
};

interface StatusBadgeProps {
  status: string;
  showLabel?: boolean;
}

export function StatusBadge({ status, showLabel = true }: StatusBadgeProps) {
  const config = statusMap[status] || statusMap.IDLE;
  return (
    <div className="flex items-center gap-1.5">
      <span className={cn('status-dot', config.className)} />
      {showLabel && <span className="text-xs text-muted-foreground">{config.label}</span>}
    </div>
  );
}
```

---

<a id="file-65"></a>

## 文件 65 : `apps/web/src/lib/api.ts`

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

class ApiClient {
  private token: string | null = null;

  setToken(token: string | null) {
    this.token = token;
    if (typeof window !== 'undefined') {
      if (token) localStorage.setItem('token', token);
      else localStorage.removeItem('token');
    }
  }

  getToken(): string | null {
    if (this.token) return this.token;
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    const token = this.getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const res = await fetch(`${API_URL}/api${path}`, { ...options, headers });

    if (!res.ok) {
      const body = await res.json().catch(() => ({} as { message?: string | string[] }));
      const message = Array.isArray(body.message)
        ? body.message.join('；')
        : body.message || res.statusText || 'Request failed';

      if (res.status === 401) {
        this.setToken(null);
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
          window.location.href = '/login';
        }
      }

      throw new Error(message);
    }

    return res.json();
  }

  get<T>(path: string) {
    return this.request<T>(path);
  }

  post<T>(path: string, body?: unknown) {
    return this.request<T>(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined });
  }

  put<T>(path: string, body?: unknown) {
    return this.request<T>(path, { method: 'PUT', body: body ? JSON.stringify(body) : undefined });
  }

  delete<T>(path: string) {
    return this.request<T>(path, { method: 'DELETE' });
  }

  // Auth
  login(email: string, password: string) {
    return this.post<{ accessToken: string; user: { id: string; email: string; name: string; role: string } }>(
      '/auth/login', { email, password },
    );
  }

  register(email: string, password: string, name: string) {
    return this.post<{ accessToken: string; user: { id: string; email: string; name: string; role: string } }>(
      '/auth/register', { email, password, name },
    );
  }

  getProfile() {
    return this.get<{ id: string; email: string; name: string; role: string }>('/auth/profile');
  }

  // Agents
  getAgents() {
    return this.get<Array<Record<string, unknown>>>('/agents');
  }

  getAgent(id: string) {
    return this.get<Record<string, unknown>>(`/agents/${id}`);
  }

  createAgent(data: Record<string, unknown>) {
    return this.post<Record<string, unknown>>('/agents', data);
  }

  updateAgent(id: string, data: Record<string, unknown>) {
    return this.put<Record<string, unknown>>(`/agents/${id}`, data);
  }

  deleteAgent(id: string) {
    return this.delete(`/agents/${id}`);
  }

  assignTask(taskDescription: string) {
    return this.post<Record<string, unknown>>('/agents/assign-task', { taskDescription });
  }

  getAgentStatuses() {
    return this.get<Array<Record<string, unknown>>>('/agents/statuses');
  }

  // Workflows
  getWorkflows() {
    return this.get<Array<Record<string, unknown>>>('/workflows');
  }

  getWorkflow(id: string) {
    return this.get<Record<string, unknown>>(`/workflows/${id}`);
  }

  createWorkflow(data: Record<string, unknown>) {
    return this.post<Record<string, unknown>>('/workflows', data);
  }

  updateWorkflow(id: string, data: Record<string, unknown>) {
    return this.put<Record<string, unknown>>(`/workflows/${id}`, data);
  }

  executeWorkflow(id: string, input?: Record<string, unknown>) {
    return this.post<Record<string, unknown>>(`/workflows/${id}/execute`, { input });
  }

  // Knowledge
  getKnowledgeBases() {
    return this.get<Array<Record<string, unknown>>>('/knowledge');
  }

  createKnowledgeBase(data: { name: string; description?: string }) {
    return this.post<Record<string, unknown>>('/knowledge', data);
  }

  getKnowledgeBase(id: string) {
    return this.get<Record<string, unknown>>(`/knowledge/${id}`);
  }

  getKnowledgeStats(id: string) {
    return this.get<Record<string, unknown>>(`/knowledge/${id}/stats`);
  }

  searchKnowledge(id: string, query: string, industry?: string) {
    return this.post<Array<Record<string, unknown>>>(`/knowledge/${id}/search`, { query, industry });
  }

  organizeKnowledge(id: string) {
    return this.post<Record<string, unknown>>(`/knowledge/${id}/organize`, {});
  }

  uploadKnowledgeDocument(id: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    const token = this.getToken();
    return fetch(`${API_URL}/api/knowledge/${id}/upload`, {
      method: 'POST',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      body: formData,
    }).then((r) => {
      if (!r.ok) throw new Error('上传失败');
      return r.json();
    });
  }

  // Scenarios
  getScenarios() {
    return this.get<Array<Record<string, unknown>>>('/scenarios');
  }

  getScenario(id: string) {
    return this.get<Record<string, unknown>>(`/scenarios/${id}`);
  }

  // Dashboard
  getDashboardMetrics() {
    return this.get<Record<string, unknown>>('/dashboard/metrics');
  }

  getDashboardCharts() {
    return this.get<Record<string, unknown>>('/dashboard/charts');
  }

  // Tasks
  getTasks() {
    return this.get<Array<Record<string, unknown>>>('/tasks');
  }

  getRecentLogs(limit = 50) {
    return this.get<Array<Record<string, unknown>>>(`/tasks/logs/recent?limit=${limit}`);
  }

  // Chat
  chat(agentId: string, messages: Array<{ role: string; content: string }>) {
    return this.post<{ content: string; tokens: number; agentId: string; agentName: string }>(
      '/chat', { agentId, messages },
    );
  }
}

export const api = new ApiClient();
```

---

<a id="file-66"></a>

## 文件 66 : `apps/web/src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

<a id="file-67"></a>

## 文件 67 : `apps/web/src/stores/app-store.ts`

```typescript
import { create } from 'zustand';
import { api } from '@/lib/api';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  loadProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  login: async (email, password) => {
    const res = await api.login(email, password);
    api.setToken(res.accessToken);
    set({ user: res.user, isAuthenticated: true, isLoading: false });
  },

  register: async (email, password, name) => {
    const res = await api.register(email, password, name);
    api.setToken(res.accessToken);
    set({ user: res.user, isAuthenticated: true, isLoading: false });
  },

  logout: () => {
    api.setToken(null);
    set({ user: null, isAuthenticated: false });
  },

  loadProfile: async () => {
    try {
      const token = api.getToken();
      if (!token) {
        set({ isLoading: false, isAuthenticated: false });
        return;
      }
      const user = await api.getProfile();
      set({ user, isAuthenticated: true, isLoading: false });
    } catch {
      api.setToken(null);
      set({ user: null, isAuthenticated: false, isLoading: false });
    }
  },
}));

interface AppState {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  activeAgentId: string | null;
  setActiveAgentId: (id: string | null) => void;
  logs: Array<{ id: string; level: string; message: string; createdAt: string }>;
  addLog: (log: { id: string; level: string; message: string; createdAt: string }) => void;
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  activeAgentId: null,
  setActiveAgentId: (id) => set({ activeAgentId: id }),
  logs: [],
  addLog: (log) => set((s) => ({ logs: [log, ...s.logs].slice(0, 100) })),
}));
```

---

<a id="file-68"></a>

## 文件 68 : `apps/web/tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        secondary: 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        accent: 'hsl(var(--accent))',
        'accent-foreground': 'hsl(var(--accent-foreground))',
        destructive: 'hsl(var(--destructive))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        cyber: {
          blue: '#00d4ff',
          purple: '#7c3aed',
          green: '#00ff88',
          orange: '#ff6b35',
          pink: '#ff0080',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'flow-line': 'flow-line 3s linear infinite',
        'scan-line': 'scan-line 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'flow-line': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

<a id="file-69"></a>

## 文件 69 : `apps/web/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "ES2022"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

<a id="file-70"></a>

## 文件 70 : `docker-compose.yml`

```yaml
services:
  postgres:
    image: ${POSTGRES_IMAGE:-docker.m.daocloud.io/library/postgres:16-alpine}
    container_name: ai-studio-postgres
    restart: unless-stopped
    ports:
      - "${BIND_ADDRESS:-127.0.0.1}:${POSTGRES_PORT:-5432}:5432"
    environment:
      POSTGRES_USER: aistudio
      POSTGRES_PASSWORD: aistudio123
      POSTGRES_DB: ai_agent_studio
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U aistudio -d ai_agent_studio"]
      interval: 3s
      timeout: 5s
      retries: 15
      start_period: 15s

  redis:
    image: ${REDIS_IMAGE:-docker.m.daocloud.io/library/redis:7-alpine}
    container_name: ai-studio-redis
    restart: unless-stopped
    # 不映射到主机，仅 Docker 内网使用，不占用本机端口
    expose:
      - "6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 3s
      timeout: 5s
      retries: 10
      start_period: 5s

volumes:
  postgres_data:
  redis_data:
```

---

<a id="file-71"></a>

## 文件 71 : `docs/API_DOC.md`

```markdown
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
```

---

<a id="file-72"></a>

## 文件 72 : `docs/ARCHITECTURE.md`

```markdown
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
- 支持节点类型: start, end, agent, rag, http, condition, tool
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
```

---

<a id="file-73"></a>

## 文件 73 : `docs/DEV_LOG.md`

```markdown
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
| 可演示 | 8 种 Agent 模板 + 3 工业场景 |
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
| 8 种工业 Agent 模板 | ✅ | `seed.ts` + `agent-templates.ts` |
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
| Agent 模板 | 8 | template-planner 等（含 AI 设计师） |
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
```

---

<a id="file-74"></a>

## 文件 74 : `docs/INSTALL.md`

```markdown
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
```

---

<a id="file-75"></a>

## 文件 75 : `docs/PROJECT_CODE.md`

```markdown
# AI Agent Studio — 项目代码整理

> 工业级 AI 多智能体协同平台（本地版）完整代码结构与核心实现说明  
> 生成日期：2026-05-28 · 源码文件 77 个 TypeScript/TSX · 行业知识库 80 篇 Markdown

---

## 1. 项目概览

| 项目 | 说明 |
|------|------|
| 名称 | AI Agent Studio |
| 类型 | pnpm Monorepo |
| 前端 | Next.js 15 + React 19 + TailwindCSS |
| 后端 | NestJS 10 + Prisma + PostgreSQL + Redis |
| AI | DeepSeek API · RAG · 合同网协议 · 工作流引擎 |
| 运行方式 | Docker + `start.bat` 一键启动 |
| 访问地址 | 前端 `http://127.0.0.1:3000` · API `http://127.0.0.1:3001` |
| 演示账号 | `admin@aistudio.local` / `admin123` |

---

## 2. 系统架构

```mermaid
flowchart TB
    subgraph Client["浏览器 (127.0.0.1:3000)"]
        Web["Next.js Web"]
    end

    subgraph API["NestJS API (127.0.0.1:3001)"]
        Auth["Auth JWT"]
        Agents["Agents"]
        Workflows["Workflows"]
        Knowledge["Knowledge RAG"]
        Chat["Chat"]
        WS["Socket.IO"]
    end

    subgraph Packages["共享包 packages/"]
        PKG_Agents["@ai-studio/agents"]
        PKG_WF["@ai-studio/workflows"]
        PKG_RAG["@ai-studio/rag"]
        PKG_DB["@ai-studio/database"]
    end

    subgraph Infra["Docker"]
        PG["PostgreSQL 16"]
        Redis["Redis 7"]
    end

    Web -->|REST /api| API
    Web -->|WebSocket| WS
    API --> PKG_Agents
    API --> PKG_WF
    API --> PKG_RAG
    API --> PKG_DB
    PKG_DB --> PG
    API --> Redis
```

### 包依赖关系

```
apps/web   → types, utils
apps/api   → agents, workflows, rag, database, types, utils
workflows  → agents, types, utils
agents     → types, utils
rag        → types, utils
database   → utils, @prisma/client
utils      → types
ui         → (独立，暂未接入 web)
```

---

## 3. 目录结构

```
AI Agent Studio/
├── README.md
├── start.bat                    # Windows 一键启动
├── package.json                 # 根脚本
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── docker-compose.yml           # PostgreSQL + Redis
├── .env.example
│
├── docs/                        # 项目文档
│   ├── INSTALL.md
│   ├── USER_GUIDE.md
│   ├── ARCHITECTURE.md
│   ├── API_DOC.md
│   ├── DEV_LOG.md
│   └── PROJECT_CODE.md          # 本文件
│
├── apps/
│   ├── api/                     # NestJS 后端
│   │   └── src/
│   │       ├── main.ts          # 入口
│   │       ├── app.module.ts
│   │       ├── auth/            # JWT 认证
│   │       ├── agents/          # Agent CRUD + 任务分配
│   │       ├── workflows/     # 工作流 CRUD + 执行
│   │       ├── knowledge/       # 知识库 + RAG 检索
│   │       ├── scenarios/       # 工业场景
│   │       ├── dashboard/       # 驾驶舱指标
│   │       ├── tasks/           # 任务管理
│   │       ├── chat/            # Agent 对话
│   │       └── events/          # WebSocket 网关
│   │
│   └── web/                     # Next.js 前端
│       └── src/
│           ├── app/             # App Router 页面
│           ├── components/      # UI 组件
│           ├── lib/api.ts       # API 客户端
│           └── stores/          # Zustand 状态
│
└── packages/
    ├── database/                # Prisma + 种子 + 行业文档入库
    │   ├── prisma/schema.prisma
    │   ├── prisma/seed.ts
    │   ├── knowledge-base/industry/   # 80 篇行业 MD
    │   └── src/
    │       ├── ingest-industry-docs.ts
    │       ├── content-factory.ts
    │       └── industry-doc-generator.ts
    ├── agents/                  # DeepSeek 客户端 + 合同网协议
    ├── workflows/               # LangGraph 风格工作流引擎
    ├── rag/                     # 文档切片 + 向量检索
    ├── types/                   # 共享 TypeScript 类型
    ├── utils/                   # 工具函数 + 简易 embedding
    └── ui/                      # 共享 cn 工具
```

---

## 4. 环境变量

`.env.example` 关键配置：

| 变量 | 说明 |
|------|------|
| `HOST` / `BIND_ADDRESS` | 绑定 `127.0.0.1`，仅本机访问 |
| `DATABASE_URL` | PostgreSQL 连接串 |
| `POSTGRES_PORT` | 默认 5432，`start.bat` 可自动避让 |
| `REDIS_URL` | Docker 内网 Redis |
| `JWT_SECRET` / `JWT_EXPIRES_IN` | JWT 签名 |
| `DEEPSEEK_API_KEY` | DeepSeek API（空则走本地模拟） |
| `API_PORT` | 3001 |
| `NEXT_PUBLIC_API_URL` | 前端请求 API 地址 |
| `NEXT_PUBLIC_WS_URL` | WebSocket 地址 |

---

## 5. 启动与脚本

### 5.1 一键启动 `start.bat`

流程：检测 Node/pnpm/Docker → 复制 `.env` → `pnpm install` → `docker compose up -d` → `db:generate` → `db:push` → `db:seed` → `pnpm dev` → 打开浏览器。

### 5.2 根目录 `package.json` 脚本

| 脚本 | 作用 |
|------|------|
| `pnpm dev` | 并行启动 web + api |
| `pnpm dev:web` | 仅前端 |
| `pnpm dev:api` | 仅后端 |
| `pnpm build` | 构建全部包 |
| `pnpm db:generate` | Prisma generate |
| `pnpm db:push` | 同步数据库 schema |
| `pnpm db:seed` | 写入种子数据 |
| `pnpm db:ingest` | 行业文档入库 |
| `pnpm content:generate` | 重新生成 80 篇行业 MD |
| `pnpm db:studio` | Prisma Studio GUI |

---

## 6. 后端代码

### 6.1 入口 `apps/api/src/main.ts`

```typescript
// 加载 .env → CORS → ValidationPipe → 全局前缀 /api → 监听 127.0.0.1:3001
app.setGlobalPrefix('api', {
  exclude: [
    { path: '', method: RequestMethod.GET },
    { path: 'info', method: RequestMethod.GET },
  ],
});
await app.listen(port, host); // host = 127.0.0.1
```

### 6.2 模块注册 `apps/api/src/app.module.ts`

```typescript
@Module({
  imports: [
    AuthModule,
    AgentsModule,
    WorkflowsModule,
    KnowledgeModule,
    ScenariosModule,
    DashboardModule,
    TasksModule,
    ChatModule,
    EventsModule,
  ],
  controllers: [RootController, HealthController],
})
export class AppModule {}
```

### 6.3 REST API 路由一览

**全局前缀：** `/api`（JWT 保护除 auth 外大部分接口）

| 模块 | 方法 | 路径 | 说明 |
|------|------|------|------|
| Health | GET | `/api/health` | 健康检查 |
| Auth | POST | `/api/auth/register` | 注册 |
| Auth | POST | `/api/auth/login` | 登录 |
| Auth | GET | `/api/auth/profile` | 当前用户 |
| Agents | GET/POST/PUT/DELETE | `/api/agents` | Agent CRUD |
| Agents | POST | `/api/agents/assign-task` | 合同网任务分配 |
| Workflows | GET/POST/PUT/DELETE | `/api/workflows` | 工作流 CRUD |
| Workflows | POST | `/api/workflows/:id/execute` | 执行工作流 |
| Knowledge | GET/POST/DELETE | `/api/knowledge` | 知识库管理 |
| Knowledge | POST | `/api/knowledge/:id/upload` | 上传文档 |
| Knowledge | POST | `/api/knowledge/:id/search` | RAG 检索 |
| Knowledge | POST | `/api/knowledge/:id/organize` | 按 Agent 整理 |
| Scenarios | GET/PUT | `/api/scenarios` | 工业场景 |
| Dashboard | GET | `/api/dashboard/metrics` | 驾驶舱指标 |
| Dashboard | GET | `/api/dashboard/charts` | 图表数据 |
| Tasks | GET/POST/PUT | `/api/tasks` | 任务管理 |
| Chat | POST | `/api/chat` | Agent 对话 |

### 6.4 WebSocket 事件 `events.gateway.ts`

| 事件 | 方向 | 说明 |
|------|------|------|
| `connected` | S→C | 连接确认 |
| `subscribe:agents` | C→S | 订阅 Agent 状态 |
| `subscribe:logs` | C→S | 订阅日志流 |
| `subscribe:workflow` | C→S | 订阅工作流执行 |
| `agent:event` | S→C | Agent 状态变更 |
| `log:new` | S→C | 新日志 |
| `workflow:step` | S→C | 工作流步骤 |

---

## 7. 前端代码

### 7.1 页面路由

| 路由 | 文件 | 功能 |
|------|------|------|
| `/` | `app/page.tsx` | 控制台总览 |
| `/login` | `app/login/page.tsx` | 登录/注册 |
| `/agents` | `app/agents/page.tsx` | Agent 列表 |
| `/agents/[id]` | `app/agents/[id]/page.tsx` | Agent 详情与对话 |
| `/workflows` | `app/workflows/page.tsx` | React Flow 工作流编辑器 |
| `/collaboration` | `app/collaboration/page.tsx` | 多 Agent 协同（合同网） |
| `/knowledge` | `app/knowledge/page.tsx` | 知识库上传/检索 |
| `/scenarios` | `app/scenarios/page.tsx` | 工业场景入口 |
| `/scenarios/uav` | `app/scenarios/uav/page.tsx` | 无人机制造 |
| `/scenarios/smt` | `app/scenarios/smt/page.tsx` | SMT 制造 |
| `/scenarios/ev` | `app/scenarios/ev/page.tsx` | 新能源汽车 |
| `/dashboard` | `app/dashboard/page.tsx` | ECharts 数据驾驶舱 |

### 7.2 API 客户端 `apps/web/src/lib/api.ts`

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';

class ApiClient {
  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const token = this.getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
    const res = await fetch(`${API_URL}/api${path}`, { ...options, headers });
    // 401 自动跳转 /login
  }
}
export const api = new ApiClient();
```

### 7.3 主要组件

| 组件 | 路径 | 作用 |
|------|------|------|
| `AppLayout` | `components/layout/app-layout.tsx` | 侧边栏 + 顶栏布局 |
| `Sidebar` | `components/layout/sidebar.tsx` | 导航菜单 |
| `SciFiBackground` | `components/layout/sci-fi-background.tsx` | 科幻背景动效 |
| `GlassCard` | `components/ui/glass-card.tsx` | 玻璃态卡片 |
| `AgentCard` | `components/ui/agent-card.tsx` | Agent 卡片 |
| `LogStream` | `components/ui/log-stream.tsx` | 实时日志流 |
| `app-store` | `stores/app-store.ts` | Zustand 认证状态 |

---

## 8. 共享包核心代码

### 8.1 `@ai-studio/agents` — AI 客户端与合同网

**DeepSeekClient**：调用 DeepSeek Chat Completions API；无 API Key 时返回本地模拟回复。

```typescript
export class DeepSeekClient {
  async chat(messages, options): Promise<{ content: string; tokens: number }> {
    if (!this.apiKey) return this.mockResponse(messages);
    const response = await fetch(`${this.baseUrl}/chat/completions`, { ... });
    // ...
  }
}
```

**ContractNetProtocol**：多 Agent 任务竞标与分配。

- `announceTask()` — 发布任务
- `submitBid()` — Agent 提交竞标
- `assignTask()` — 按评分选最优 Agent

**AgentCollaborationManager**：协调多 Agent 执行链。

### 8.2 `@ai-studio/workflows` — 工作流引擎

**WorkflowEngine**：LangGraph 风格，按 React Flow 节点图顺序执行。

支持节点类型：

| 类型 | 行为 |
|------|------|
| `start` | 入口，注入初始 context |
| `agent` | 调用 DeepSeekClient |
| `rag` | 调用知识库检索注入 context |
| `condition` | 条件分支 |
| `end` | 结束 |

```typescript
async execute(workflow, input, onStep?, options?) {
  // 从 start 节点遍历 edges，逐步 executeNode
  // 支持 ragSearch 回调注入 RAG 结果
}
```

### 8.3 `@ai-studio/rag` — RAG 管道

**DocumentProcessor**：

- `processDocument()` — 文本切片 + 生成 embedding
- `extractText()` — 模拟 PDF/DOCX/Excel 文本提取

**VectorSearchEngine**：

- `addChunks()` / `search()` — 内存向量索引 + 余弦相似度检索

**searchChunks()** — 从数据库持久化切片中检索

### 8.4 `@ai-studio/utils`

| 函数 | 作用 |
|------|------|
| `chunkText()` | 固定窗口文本切片 |
| `simpleEmbedding()` | 简易本地 embedding（128 维） |
| `cosineSimilarity()` | 余弦相似度 |
| `generateId()` | 生成唯一 ID |
| `formatFileSize()` / `formatDateTime()` | 格式化 |

### 8.5 `@ai-studio/types`

共享类型：`ApiResponse`、`Agent`、`WorkflowNode`、`KnowledgeBase`、`ChatMessage`、`DashboardMetrics` 等。

---

## 9. 数据库

### 9.1 Prisma 模型（13 张表）

| 模型 | 表名 | 说明 |
|------|------|------|
| `User` | users | 用户与角色 |
| `Agent` | agents | AI Agent 配置 |
| `Workflow` | workflows | 工作流图 (nodes/edges JSON) |
| `KnowledgeBase` | knowledge_bases | 知识库 |
| `Document` | documents | 文档元数据 |
| `DocumentChunk` | document_chunks | 切片 + embedding |
| `Conversation` | conversations | 对话会话 |
| `Message` | messages | 消息 |
| `Task` | tasks | 任务 |
| `Log` | logs | 运行日志 |
| `ToolCall` | tool_calls | 工具调用记录 |
| `IndustrialScenario` | industrial_scenarios | 工业场景 |
| `ApiMetric` | api_metrics | API 指标 |

### 9.2 主要枚举

- **UserRole**: ADMIN, USER, OPERATOR
- **AgentStatus**: IDLE, THINKING, EXECUTING, WAITING, ERROR, OFFLINE
- **AgentCategory**: PLANNER, DATA_ANALYST, SCHEDULER, DISPATCHER, QUALITY, SIMULATOR, DECISION, CUSTOM
- **ScenarioType**: UAV_MANUFACTURING, SMT_MANUFACTURING, EV_MANUFACTURING

### 9.3 种子数据 `prisma/seed.ts`

| 数据 | 内容 |
|------|------|
| 用户 | admin + operator（密码 admin123） |
| Agent 模板 | 8 种工业角色（计划员、数据员、排程员、调度员、设计师、质量员、仿真员、协同决策员） |
| 工作流 | demo-workflow-001（含 RAG + Agent 节点） |
| 知识库 | industry-kb-main，80 篇行业文档入库 |
| 场景 | UAV / SMT / EV 三个工业场景 |
| 任务 | 3 条示例任务 |

### 9.4 行业知识库

- **目录**: `packages/database/knowledge-base/industry/`
- **数量**: 80 篇 Markdown（doc-001 ~ doc-080）
- **系统 KB ID**: `industry-kb-main`
- **入库脚本**: `src/ingest-industry-docs.ts`
- **生成脚本**: `pnpm content:generate` → `content-factory.ts` + `doc-content-data.ts`

---

## 10. 完整源码文件索引（77 个）

### apps/api/src/

```
main.ts
app.module.ts
root.controller.ts
health.controller.ts
auth/auth.module.ts
auth/auth.controller.ts
auth/auth.service.ts
auth/auth.dto.ts
auth/jwt.strategy.ts
auth/jwt-auth.guard.ts
agents/agents.module.ts
agents/agents.controller.ts
agents/agents.service.ts
workflows/workflows.module.ts
workflows/workflows.controller.ts
workflows/workflows.service.ts
knowledge/knowledge.module.ts
knowledge/knowledge.controller.ts
knowledge/knowledge.service.ts
scenarios/scenarios.module.ts
scenarios/scenarios.controller.ts
scenarios/scenarios.service.ts
dashboard/dashboard.module.ts
dashboard/dashboard.controller.ts
dashboard/dashboard.service.ts
tasks/tasks.module.ts
tasks/tasks.controller.ts
tasks/tasks.service.ts
chat/chat.module.ts
chat/chat.controller.ts
chat/chat.service.ts
events/events.module.ts
events/events.gateway.ts
```

### apps/web/src/

```
app/layout.tsx
app/page.tsx
app/login/page.tsx
app/agents/page.tsx
app/agents/[id]/page.tsx
app/workflows/page.tsx
app/collaboration/page.tsx
app/knowledge/page.tsx
app/scenarios/page.tsx
app/scenarios/uav/page.tsx
app/scenarios/smt/page.tsx
app/scenarios/ev/page.tsx
app/dashboard/page.tsx
components/layout/app-layout.tsx
components/layout/header.tsx
components/layout/sidebar.tsx
components/layout/sci-fi-background.tsx
components/ui/glass-card.tsx
components/ui/agent-card.tsx
components/ui/status-badge.tsx
components/ui/log-stream.tsx
lib/api.ts
lib/utils.ts
stores/app-store.ts
```

### packages/

```
database/prisma/seed.ts
database/src/index.ts
database/src/constants.ts
database/src/industry-catalog.ts
database/src/industry-doc-generator.ts
database/src/doc-content-data.ts
database/src/content-factory.ts
database/src/ingest.ts
database/src/ingest-industry-docs.ts
database/scripts/generate-doc-content.ts
agents/src/index.ts
workflows/src/index.ts
rag/src/index.ts
types/src/index.ts
utils/src/index.ts
ui/src/index.ts
ui/src/utils.ts
```

### 配置文件

```
apps/web/next.config.ts
apps/web/tailwind.config.ts
apps/web/next-env.d.ts
docker-compose.yml
pnpm-workspace.yaml
tsconfig.base.json
.env.example
start.bat
```

---

## 11. 数据流示例

### Agent 对话

```
用户输入 → POST /api/chat → ChatService
  → 读取 Agent systemPrompt
  → DeepSeekClient.chat()
  → 写入 Message + Log
  → 返回回复
```

### 工作流执行

```
前端点击执行 → POST /api/workflows/:id/execute
  → WorkflowsService 加载 nodes/edges
  → WorkflowEngine.execute()
  → 逐步：start → rag → agent → condition → end
  → Socket.IO 推送 workflow:step
  → 返回 executionId + steps
```

### RAG 检索

```
用户提问 → POST /api/knowledge/:id/search
  → KnowledgeService
  → 从 DocumentChunk 表加载 embedding
  → searchChunks() 余弦相似度排序
  → 返回 topK 切片
```

---

## 12. 相关文档

| 文档 | 路径 | 内容 |
|------|------|------|
| 安装教程 | [INSTALL.md](./INSTALL.md) | 环境搭建与排错 |
| 用户指南 | [USER_GUIDE.md](./USER_GUIDE.md) | 功能使用说明 |
| 系统架构 | [ARCHITECTURE.md](./ARCHITECTURE.md) | 架构设计 |
| API 文档 | [API_DOC.md](./API_DOC.md) | 接口详细说明 |
| 开发记录 | [DEV_LOG.md](./DEV_LOG.md) | 开发历程 |

---

## 13. GitHub 仓库

https://github.com/n4vy6p5x6x-dotcom/AI-Agent-Studio

克隆后：

```bat
copy .env.example .env
pnpm install
start.bat
```

---

*本文档由项目源码自动整理，涵盖目录结构、核心模块、API/路由、数据库与文件索引。*
```

---

<a id="file-76"></a>

## 文件 76 : `docs/USER_GUIDE.md`

```markdown
# AI Agent Studio 使用手册

本文档面向 **最终用户与操作员**，详细说明 AI Agent Studio 本地版各功能模块的使用方法、操作流程与注意事项。

---

## 目录

1. [系统概述](#1-系统概述)
2. [快速开始](#2-快速开始)
3. [界面与导航](#3-界面与导航)
4. [控制台](#4-控制台)
5. [Agent Studio](#5-agent-studio)
6. [工作流系统](#6-工作流系统)
7. [多 Agent 协同](#7-多-agent-协同)
8. [企业知识库（RAG）](#8-企业知识库rag)
9. [工业场景](#9-工业场景)
10. [AI 数据驾驶舱](#10-ai-数据驾驶舱)
11. [DeepSeek AI 配置](#11-deepseek-ai-配置)
12. [用户角色与权限](#12-用户角色与权限)
13. [常见问题（使用侧）](#13-常见问题使用侧)
14. [最佳实践](#14-最佳实践)

---

## 1. 系统概述

### 1.1 产品定位

**AI Agent Studio** 是一款 **工业级 AI 多智能体协同平台（本地版）**，面向：

- 工业制造企业的 AI 试点与演示
- 多 Agent 协同调度场景验证
- 工作流编排与 RAG 知识库本地验证
- 无人机 / SMT / 新能源汽车等工业场景模拟

> 本版本为 **本地单机版**，所有数据与 AI 配置均在本地运行，无需云服务器。

### 1.2 核心能力一览

| 模块 | 能力 |
|------|------|
| Agent Studio | 创建、配置、对话工业 AI Agent |
| 工作流 | 可视化拖拽编排 Agent / RAG / HTTP / 条件 / Tool |
| 多 Agent 协同 | 合同网协议自动任务分配 |
| 知识库 | 文档上传、切片、向量检索 |
| 工业场景 | 三大制造场景数据演示 |
| 数据驾驶舱 | Token、API、任务、Agent 状态大屏 |

### 1.3 使用前准备

1. 已按 [INSTALL.md](./INSTALL.md) 完成安装  
2. 已运行 `start.bat` 或 `pnpm dev`  
3. 浏览器访问：**http://localhost:3000**

---

## 2. 快速开始

### 2.1 登录

1. 打开 http://localhost:3000/login  
2. 输入演示账号：

| 角色 | 邮箱 | 密码 |
|------|------|------|
| 系统管理员 | `admin@aistudio.local` | `admin123` |
| 工业操作员 | `operator@aistudio.local` | `admin123` |

3. 点击 **登录**，进入控制台

> 演示邮箱后缀为 `.local`，系统已做兼容处理。若登录失败，请确认后端 API（3001 端口）已启动。

### 2.2 注册新用户

1. 在登录页点击 **没有账号？注册**  
2. 填写姓名、邮箱、密码（密码至少 6 位）  
3. 注册成功后自动登录

### 2.3 推荐体验路径（30 分钟）

```
登录 → 控制台概览 → Agent Studio 与 AI 计划员对话
     → 多 Agent 协同（合同网分配）
     → 工作流（运行示例工作流）
     → 知识库（上传文档 + 检索）
     → 工业场景（无人机制造）
     → 数据驾驶舱（查看图表）
```

---

## 3. 界面与导航

### 3.1 整体风格

- **深色科幻工业风**：毛玻璃卡片、流光动画、HUD 标签  
- **实时状态指示**：Agent 状态点、系统 ONLINE 标识  
- **侧边栏导航**：可收起，适配宽屏控制台

### 3.2 侧边栏菜单

| 菜单 | 路径 | 功能 |
|------|------|------|
| 控制台 | `/` | 系统概览、快速入口 |
| Agent Studio | `/agents` | Agent 管理 |
| 工作流 | `/workflows` | 工作流设计与执行 |
| 多Agent协同 | `/collaboration` | 合同网任务分配 |
| 知识库 | `/knowledge` | RAG 文档管理 |
| 工业场景 | `/scenarios` | 三大制造场景 |
| 数据驾驶舱 | `/dashboard` | 实时数据大屏 |

### 3.3 顶栏功能

- **搜索框**：搜索 Agent、工作流（预留）  
- **通知铃铛**：系统通知（预留）  
- **SYSTEM ONLINE**：表示前端与后端连接正常

### 3.4 退出登录

点击侧边栏底部 **退出**，清除登录状态并返回登录页。

---

## 4. 控制台

路径：`/`（登录后默认页）

### 4.1 统计卡片

| 指标 | 说明 |
|------|------|
| Agent 总数 | 系统中所有 Agent 数量（含模板） |
| 活跃 Agent | 当前处于 THINKING / EXECUTING 状态的 Agent |
| 任务完成 | 已完成任务数 / 总任务数 |
| 知识库文档 | 已上传文档数量 |

### 4.2 Agent 概览

- 展示最多 6 个 Agent 卡片  
- 点击卡片进入 Agent 详情与对话  
- 点击 **查看全部** 进入 Agent Studio

### 4.3 实时日志流

- 显示系统最近 20 条日志  
- 日志级别：INFO（蓝）、WARN（黄）、ERROR（红）  
- 含 Agent 名称、时间戳、消息内容

### 4.4 快速入口

| 入口 | 说明 |
|------|------|
| 工作流设计 | 跳转工作流编辑器 |
| 多Agent协同 | 跳转协同调度页 |
| 工业场景 | 跳转场景列表 |

---

## 5. Agent Studio

路径：`/agents`

### 5.1 Agent 是什么？

Agent 是具备 **System Prompt、模型、工具、职责类别** 的 AI 智能体。  
本系统由 **8 个 AI 智能体** 与 **三层技术架构**（前端展示层 / NestJS 服务层 / 数据与 AI 引擎层）构成。  
预置 **8 种工业 Agent 模板**，也支持用户 **自定义 Agent**。

### 5.2 预置 Agent 模板

| Agent 名称 | 类别 | 职责定位 |
|------------|------|----------|
| AI 计划员 | PLANNER | 编制 MPS 与粗产能分析，支持 FCFS/SPT/EDD/CR 四种排程规则切换对比 |
| AI 数据员 | DATA_ANALYST | BOM 展开与 MRP 计算，自动生成采购计划 |
| AI 排程员 | SCHEDULER | 有限产能排程与甘特图生成 |
| AI 调度员 | DISPATCHER | 动态任务分配及异常事件响应（急单插入、设备故障等情境模拟） |
| AI 设计师 | DESIGNER | 工厂布局与物流优化，支持产品/工艺原则两种布置方式 |
| AI 质量员 | QUALITY | SPC 控制图生成与质量追溯，支持 Xbar-R/p/np/c/u 六种控制图分析 |
| AI 仿真员 | SIMULATOR | 产线建模仿真与瓶颈分析，计算产线平衡率 |
| 协同决策员 | DECISION | 全局方案协调，通过合同网协议消解资源冲突 |

> 模板 Agent 不可删除，可复制配置创建自定义 Agent。

### 5.3 查看 Agent 列表

1. 进入 **Agent Studio**  
2. 使用顶部搜索框按名称过滤  
3. 卡片显示：名称、描述、状态、模型、是否模板

**Agent 状态说明：**

| 状态 | 含义 |
|------|------|
| 空闲 (IDLE) | 等待任务 |
| 思考中 (THINKING) | 正在调用 AI 推理 |
| 执行中 (EXECUTING) | 正在执行 Tool |
| 等待中 (WAITING) | 等待外部输入 |
| 错误 (ERROR) | 执行失败 |
| 离线 (OFFLINE) | 不可用 |

### 5.4 创建自定义 Agent

1. 点击 **创建 Agent**  
2. 填写表单：

| 字段 | 说明 | 示例 |
|------|------|------|
| Agent 名称 | 显示名称 | SMT 换线优化助手 |
| 类别 | 职责分类 | 排程员 / 自定义 |
| 描述 | 简短说明 | 负责 SMT 换线时间优化 |
| System Prompt | 系统提示词 | 你是一位 SMT 排程专家... |
| 模型 | DeepSeek 模型 | deepseek-chat / deepseek-reasoner |

3. 点击 **创建**

**System Prompt 编写建议：**

- 明确角色身份（「你是一位…专家」）  
- 说明职责边界与输出格式  
- 列出可用工具与使用场景  
- 工业场景中加入领域术语（MPS、BOM、SPC 等）

### 5.5 与 Agent 对话

路径：`/agents/[id]`

1. 在 Agent 列表点击任意 Agent  
2. 左侧查看 **Agent 配置**：模型、温度、Tools、System Prompt  
3. 右侧 **对话区** 输入消息，按 Enter 或点击发送  
4. Agent 基于 System Prompt + DeepSeek 模型回复

**对话示例（AI 计划员）：**

```
用户：请根据 Q2 订单需求 200 台无人机，生成 MPS 主生产计划要点。
Agent：（基于 System Prompt 输出 MPS 计划分析）
```

> 未配置 `DEEPSEEK_API_KEY` 时，回复为本地模拟内容，适合 UI 演示。

---

## 6. 工作流系统

路径：`/workflows`

### 6.1 工作流是什么？

工作流是由 **节点（Node）** 和 **连线（Edge）** 组成的有向图，描述 Agent、RAG、HTTP、条件判断等步骤的执行顺序。

### 6.2 支持的节点类型

| 节点类型 | 说明 |
|----------|------|
| start | 开始节点 |
| end | 结束节点 |
| agent | 调用指定 AI Agent |
| rag | 知识库检索 |
| http | 发送 HTTP 请求 |
| condition | 条件分支 |
| tool | 调用 MCP Tool |

### 6.3 操作步骤

#### 选择工作流

顶部下拉框选择已有工作流，默认包含：

- **无人机生产计划工作流**（Seed 数据）

#### 添加节点

点击工具栏按钮：`agent` / `rag` / `http` / `condition` / `tool`

#### 连接节点

- 从节点边缘拖拽连线到目标节点  
- 连线 animated 表示数据流向

#### 保存工作流

点击 **保存**，将当前 nodes / edges 写入数据库。

#### 运行工作流

1. 点击 **运行**  
2. 右侧 **执行日志** 面板实时显示每个节点的：
   - 节点类型与 ID  
   - 执行状态（completed / failed）  
   - 耗时（ms）  
   - 详细日志

**示例执行流程：**

```
开始 → RAG 检索 → AI 计划员 → AI 数据员 → 条件判断 → 结束
```

### 6.4 调试技巧

- 先运行示例工作流，确认 API 与 Agent 正常  
- 逐步添加节点，每次保存后运行验证  
- 查看右侧日志定位失败节点  
- 条件节点默认判断 `approved` 条件

---

## 7. 多 Agent 协同

路径：`/collaboration`

### 7.1 功能说明

本模块实现 **合同网协议（Contract Net Protocol, CNP）**：

1. 用户提交任务描述  
2. 各 Agent 根据能力与空闲状态 **竞标**  
3. 系统选择 **匹配度最高** 的 Agent 执行任务  
4. 可视化展示 Agent 网络拓扑与分配结果

### 7.2 界面组成

| 区域 | 内容 |
|------|------|
| 顶部指标 | 在线 Agent 数、Token 消耗、Tool 调用、协同任务 |
| 拓扑图 | 中心调度器 + 周围 Agent 节点（React Flow） |
| 任务输入 | 自然语言任务描述 |
| 分配结果 | 中标 Agent、匹配度、竞标列表 |
| 日志流 | 合同网执行过程 |

### 7.3 使用步骤

1. 进入 **多Agent协同**  
2. 在输入框填写任务，例如：
   - `生成 Q2 无人机 MPS 生产计划`
   - `SMT-L1 换线优化分析`
   - `EV 电池模组质量追溯`
3. 点击 **合同网分配**  
4. 查看结果：
   - **中标 Agent** 名称  
   - **匹配度** 百分比  
   - 各 Agent 竞标得分排序

### 7.4 匹配规则（简述）

系统根据以下因素计算竞标得分：

| 因素 | 权重 | 说明 |
|------|------|------|
| 能力匹配 | 70% | 任务关键词与 Agent 类别 / 工具匹配 |
| 可用性 | 30% | IDLE > WAITING > 其他状态 |

**类别关键词示例：**

| Agent | 匹配关键词 |
|-------|------------|
| 计划员 | 计划、MPS、MRP、排产 |
| 排程员 | 排程、SMT、甘特 |
| 质量员 | 质量、追溯、缺陷 |
| 数据员 | 数据、分析、报表、KPI |

---

## 8. 企业知识库（RAG）

路径：`/knowledge`

### 8.1 功能说明

RAG（Retrieval-Augmented Generation）知识库支持：

- 上传企业文档（PDF / DOCX / Excel）  
- 自动文本提取与切片  
- 本地向量 Embedding  
- 语义检索（余弦相似度）

### 8.2 使用步骤

#### 选择知识库

点击顶部知识库标签，默认：**工业制造知识库**

#### 上传文档

1. 点击 **上传**  
2. 选择文件（支持 `.pdf` `.docx` `.xlsx` `.txt` `.md`）  
3. 系统自动：提取文本 → 切片 → Embedding → 入库

#### 向量检索

1. 在右侧 **向量检索** 输入 query，例如：`MPS 计划方法`  
2. 点击搜索或按 Enter  
3. 查看结果：相关度百分比 + 文本片段

### 8.3 创建新知识库

1. 点击 **新建知识库**  
2. 输入名称  
3. 创建后可上传文档

### 8.4 注意事项

- 当前版本使用 **本地 simpleEmbedding**，适合演示，生产环境建议接入真实 Embedding API  
- 大文件上传耗时较长，请耐心等待状态变为 COMPLETED  
- 文档处理状态：PENDING → PROCESSING → COMPLETED / FAILED

---

## 9. 工业场景

路径：`/scenarios`

系统预置三大 **工业制造数字孪生演示场景**，用于展示 AI Agent 在真实工业语境下的应用。

### 9.1 场景总览

| 场景 | 路径 | 核心能力 |
|------|------|----------|
| 无人机制造 | `/scenarios/uav` | MPS / MRP / BOM |
| SMT 制造 | `/scenarios/smt` | 排程 / 换线 / 甘特图 |
| 新能源汽车制造 | `/scenarios/ev` | 追溯 / 供应链 / 多级 BOM |

### 9.2 无人机制造场景

**业务背景：** 四旋翼无人机装配产线，需协调物料、产能与订单。

**页面内容：**

| 模块 | 说明 |
|------|------|
| MPS 主生产计划 | 计划产量、确认产量、计划周期 |
| MRP 物料需求 | 物料种类、缺料项数 |
| BOM 物料清单 | 多级 BOM 树（机架、电机、飞控、桨叶） |

**可配合 Agent：** AI 计划员、AI 数据员

**示例任务：**

```
为 Q2 200 台无人机订单生成 MPS，并分析 FRAME-001 机架缺料风险
```

### 9.3 SMT 制造场景

**业务背景：** SMT 贴片产线多品种、小批量，需优化排程与换线。

**页面内容：**

| 模块 | 说明 |
|------|------|
| 产线数量 | 可用 SMT 线体数 |
| 换线优化 | 换线时间缩短比例 |
| 排程甘特图 | ECharts 柱状图展示各线体排程 |
| 排程明细表 | 产线、产品、时段、产量 |

**可配合 Agent：** AI 排程员

**示例任务：**

```
对 SMT-L1 线体进行换线优化，目标缩短换线时间 20%
```

### 9.4 新能源汽车制造场景

**业务背景：** EV 产线质量追溯与供应链协同。

**页面内容：**

| 模块 | 说明 |
|------|------|
| 质量追溯 | VIN 码、检测点数量、合格率 |
| 供应链协同 | Tier1/Tier2 供应商、准时率 |
| 多级 BOM | BOM 层级、零件总数、关键件 |
| 追溯链路 | 原材料 → 冲压 → 焊接 → 涂装 → 总装 → PDI → 交付 |

**可配合 Agent：** AI 质量员、协同决策员

---

## 10. AI 数据驾驶舱

路径：`/dashboard`

### 10.1 功能定位

科技感 **大屏控制台**，汇总 AI 平台运行指标，适合：

- 运维监控  
- 领导汇报演示  
- Agent 运行状态巡检

### 10.2 指标卡片

| 指标 | 说明 |
|------|------|
| Agent 总数 | 系统 Agent 数量 |
| 活跃 Agent | 正在工作的 Agent |
| 任务完成 | 已完成任务数 |
| Token 消耗 | AI 推理 Token 累计 |
| API 调用 | 接口调用次数 |
| 知识库 | 知识库数量 |

### 10.3 图表

| 图表 | 类型 | 内容 |
|------|------|------|
| Token 消耗趋势 | 折线面积图 | 按时段 Token 使用 |
| API 调用量 | 柱状图 | 按时段 API 次数 |
| 任务完成情况 | 堆叠柱状图 | 完成 vs 失败 |
| Agent 活跃度 | 雷达图 | 各 Agent 任务量 |

### 10.4 Agent 状态面板

实时列表展示每个 Agent 的名称与当前状态（空闲 / 思考中 / 执行中等）。

### 10.5 系统日志

与控制台类似的实时日志流，显示最近系统事件。

---

## 11. DeepSeek AI 配置

### 11.1 为什么需要配置？

Agent 对话、工作流中的 Agent 节点依赖 **DeepSeek API** 进行真实 AI 推理。  
未配置时使用 **本地模拟响应**，功能流程可演示，但回复非真实 AI 生成。

### 11.2 配置步骤

1. 获取 DeepSeek API Key：https://platform.deepseek.com/  
2. 编辑项目根目录 `.env`：

```env
DEEPSEEK_API_KEY=sk-你的密钥
DEEPSEEK_MODEL=deepseek-chat
```

3. 重启服务（`start.bat` 或 `pnpm dev`）

### 11.3 模型选择

| 模型 | 适用场景 |
|------|----------|
| `deepseek-chat` | 通用对话、Agent 日常任务 |
| `deepseek-reasoner` | 复杂推理、计划优化、根因分析 |

创建 Agent 或编辑 Agent 时可在模型下拉框中选择。

### 11.4 如何确认 AI 已生效

- 对话回复 **不含** `[DeepSeek 本地模拟]` 前缀  
- 数据驾驶舱 Token 消耗会随真实调用增加  
- API 日志中有 Agent 对话记录

---

## 12. 用户角色与权限

| 角色 | 枚举值 | 说明 |
|------|--------|------|
| 系统管理员 | ADMIN | 完整功能，Seed 默认管理员 |
| 工业操作员 | OPERATOR | 日常操作 |
| 普通用户 | USER | 注册用户默认角色 |

> 当前本地版角色主要用于数据区分，API 鉴权统一要求登录，细粒度 RBAC 将在 SaaS 版扩展。

---

## 13. 常见问题（使用侧）

### Q1：登录后闪回登录页？

- 确认 API（3001）正常运行  
- 清除浏览器 localStorage 后重试  
- 执行 `pnpm db:seed` 重置账号

### Q2：Agent 对话一直显示「AI 思考中」？

- 检查 DeepSeek API Key 是否有效  
- 检查网络是否能访问 `api.deepseek.com`  
- 查看 API 终端是否有报错

### Q3：工作流运行失败？

- 确认工作流有 start 节点  
- 查看右侧执行日志中失败节点  
- 确认相关 Agent 存在且 API 正常

### Q4：知识库检索无结果？

- 确认文档 status 为 COMPLETED  
- 尝试与文档内容相关的 query  
- 先上传文档再检索

### Q5：工业场景数据是真实的吗？

- 当前为 **演示 Seed 数据**，用于场景展示  
- 后续可对接 MES / ERP 实时数据

### Q6：页面访问 404？

- 前端地址：**http://localhost:3000**  
- 不要直接访问 http://localhost:3001（那是 API）

---

## 14. 最佳实践

### 14.1 Agent 设计

1. 一个 Agent 聚焦一个工业职责  
2. System Prompt 写清输入输出格式  
3. 为 Agent 配置合适的 Tools  
4. 复杂任务拆分为多 Agent 协同

### 14.2 工作流设计

1. 从简单线性流开始，再增加条件分支  
2. 在 RAG 节点后接 Agent 节点，提升回答质量  
3. 每次修改后保存并运行验证

### 14.3 知识库管理

1. 按业务域划分知识库（质量 / 工艺 / 设备）  
2. 上传前整理文档结构，避免扫描版 PDF  
3. 定期清理过期文档

### 14.4 工业场景演示建议

1. 先介绍场景背景与痛点  
2. 演示合同网分配对应 Agent  
3. 展示 Agent 对话或工作流输出  
4. 用数据驾驶舱收尾，展示平台监控能力

---

## 附录：页面路由速查

| 路径 | 页面 |
|------|------|
| `/login` | 登录 / 注册 |
| `/` | 控制台 |
| `/agents` | Agent 列表 |
| `/agents/:id` | Agent 详情与对话 |
| `/workflows` | 工作流编辑器 |
| `/collaboration` | 多 Agent 协同 |
| `/knowledge` | 知识库 |
| `/scenarios` | 工业场景列表 |
| `/scenarios/uav` | 无人机制造 |
| `/scenarios/smt` | SMT 制造 |
| `/scenarios/ev` | 新能源汽车 |
| `/dashboard` | 数据驾驶舱 |

---

**更多技术细节请参阅：**

- [INSTALL.md](./INSTALL.md) — 安装部署  
- [API_DOC.md](./API_DOC.md) — 接口文档  
- [ARCHITECTURE.md](./ARCHITECTURE.md) — 系统架构  
- [DEV_LOG.md](./DEV_LOG.md) — 开发记录
```

---

<a id="file-77"></a>

## 文件 77 : `knowledge-base/README.md`

```markdown
# 工业行业知识库

本目录存放 AI Agent Studio 内置 **80 份**行业文档（Markdown），每篇内容**互不重复**，含 13 个章节、10 步操作流程、独立参数与案例。

## 初始化

```bash
pnpm content:generate   # 生成 80 篇独立正文（修改 content-factory.ts 后执行）
pnpm db:ingest -- --force   # 强制重建知识库与 RAG 切片
```

或运行 `start.bat` 自动完成 seed/ingest。

## 文档结构（每篇）

1. 文档概述 · 2. 背景 · 3. 适用范围 · 4. 详细操作流程（10 步）
5. 关键参数表 · 6. 标准规范 · 7. 设备工具 · 8. 常见问题
9. 术语 · 10. 检查清单 · 11. 典型案例 · 12. Agent 协同 · 13. RAG 说明

## 关联

- 知识库 ID: `industry-kb-main`
- 源码: `packages/database/src/content-factory.ts` + `doc-content-data.ts`
```

---

<a id="file-78"></a>

## 文件 78 : `package.json`

```json
{
  "name": "ai-agent-studio",
  "version": "1.0.0",
  "private": true,
  "description": "工业级 AI 多智能体协同平台 - 本地版",
  "scripts": {
    "dev": "pnpm --parallel --filter @ai-studio/web --filter @ai-studio/api dev",
    "dev:web": "pnpm --filter @ai-studio/web dev",
    "dev:api": "pnpm --filter @ai-studio/api dev",
    "build": "pnpm run -r build",
    "db:generate": "dotenv -e .env -- pnpm --filter @ai-studio/database generate",
    "db:push": "dotenv -e .env -- pnpm --filter @ai-studio/database push",
    "db:seed": "dotenv -e .env -- pnpm --filter @ai-studio/database seed",
    "db:ingest": "dotenv -e .env -- pnpm --filter @ai-studio/database ingest",
    "content:generate": "pnpm --filter @ai-studio/database content:generate",
    "db:studio": "dotenv -e .env -- pnpm --filter @ai-studio/database studio",
    "lint": "pnpm run -r lint",
    "clean": "pnpm run -r clean"
  },
  "engines": {
    "node": ">=20.0.0",
    "pnpm": ">=9.0.0"
  },
  "devDependencies": {
    "dotenv-cli": "^8.0.0"
  },
  "packageManager": "pnpm@9.15.0"
}
```

---

<a id="file-79"></a>

## 文件 79 : `packages/agents/package.json`

```json
{
  "name": "@ai-studio/agents",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@ai-studio/types": "workspace:*",
    "@ai-studio/utils": "workspace:*"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "rimraf": "^6.0.1",
    "@types/node": "^22.10.2"
  }
}
```

---

<a id="file-80"></a>

## 文件 80 : `packages/agents/src/index.ts`

```typescript
import type { AgentCollaborationEvent, ContractNetAssignment, ContractNetBid } from '@ai-studio/types';

export interface AgentConfig {
  id: string;
  name: string;
  systemPrompt: string;
  model: string;
  temperature: number;
  maxTokens: number;
  tools: string[];
  category: string;
}

export interface AgentRuntime {
  id: string;
  status: 'idle' | 'thinking' | 'executing' | 'waiting' | 'error';
  currentTask?: string;
  tokenUsage: number;
}

/** DeepSeek API 客户端 */
export class DeepSeekClient {
  private apiKey: string;
  private baseUrl: string;
  private defaultModel: string;

  constructor(apiKey?: string, baseUrl?: string, defaultModel?: string) {
    this.apiKey = apiKey || process.env.DEEPSEEK_API_KEY || '';
    this.baseUrl = baseUrl || process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com/v1';
    this.defaultModel = defaultModel || process.env.DEEPSEEK_MODEL || 'deepseek-chat';
  }

  async chat(
    messages: Array<{ role: string; content: string }>,
    options: { model?: string; temperature?: number; maxTokens?: number; stream?: boolean } = {},
  ): Promise<{ content: string; tokens: number }> {
    if (!this.apiKey) {
      return this.mockResponse(messages);
    }

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: options.model || this.defaultModel,
          messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.maxTokens ?? 4096,
          stream: false,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        throw new Error(`DeepSeek API error: ${response.status} ${errorText}`);
      }

      const data = (await response.json()) as {
        choices: Array<{ message: { content: string } }>;
        usage: { total_tokens: number };
      };

      return {
        content: data.choices[0]?.message?.content || '',
        tokens: data.usage?.total_tokens || 0,
      };
    } catch {
      return this.mockResponse(messages);
    }
  }

  private mockResponse(messages: Array<{ role: string; content: string }>): { content: string; tokens: number } {
    const lastMessage = messages[messages.length - 1]?.content || '';
    return {
      content: `[DeepSeek 本地模拟] 已收到您的请求："${lastMessage.slice(0, 100)}"。\n\n作为工业 AI Agent，我已分析相关数据并生成处理方案。请在 .env 中配置 DEEPSEEK_API_KEY 以启用 DeepSeek 真实推理。`,
      tokens: 150,
    };
  }
}

/** @deprecated 使用 DeepSeekClient */
export const AIModelClient = DeepSeekClient;

/** 合同网协议 - Contract Net Protocol 任务分配 */
export class ContractNetProtocol {
  assignTask(
    taskId: string,
    taskDescription: string,
    agents: Array<{ id: string; name: string; category: string; tools: string[]; status: string }>,
  ): ContractNetAssignment {
    const bids: ContractNetBid[] = agents
      .filter((a) => a.status !== 'OFFLINE' && a.status !== 'ERROR')
      .map((agent) => {
        const capabilityScore = this.evaluateCapability(taskDescription, agent);
        const availabilityScore = agent.status === 'IDLE' ? 1.0 : agent.status === 'WAITING' ? 0.6 : 0.3;
        const bidScore = capabilityScore * 0.7 + availabilityScore * 0.3;

        return {
          agentId: agent.id,
          agentName: agent.name,
          taskId,
          bidScore,
          estimatedTime: Math.round((1 - bidScore) * 300 + 30),
          capabilities: agent.tools,
        };
      })
      .sort((a, b) => b.bidScore - a.bidScore);

    const winner = bids[0];

    return {
      taskId,
      assignedAgentId: winner?.agentId || '',
      assignedAgentName: winner?.agentName || '',
      bids,
      reason: winner
        ? `基于合同网协议，${winner.agentName} 以 ${(winner.bidScore * 100).toFixed(1)}% 匹配度中标`
        : '无可用 Agent',
    };
  }

  private evaluateCapability(task: string, agent: { category: string; tools: string[] }): number {
    const taskLower = task.toLowerCase();
    const categoryKeywords: Record<string, string[]> = {
      PLANNER: ['计划', 'mps', 'mrp', '排产', 'plan'],
      DATA_ANALYST: ['数据', '分析', '报表', 'chart', 'kpi'],
      SCHEDULER: ['排程', '调度', 'smt', '甘特', 'schedule'],
      DISPATCHER: ['分配', '调度', 'dispatch', 'allocate'],
      QUALITY: ['质量', '追溯', '缺陷', 'quality', 'trace'],
      SIMULATOR: ['仿真', '模拟', 'simulation', 'digital twin'],
      DECISION: ['决策', '协同', 'decision', 'consensus'],
    };

    const keywords = categoryKeywords[agent.category] || [];
    let score = 0.3;

    for (const kw of keywords) {
      if (taskLower.includes(kw)) score += 0.15;
    }

    return Math.min(score, 1.0);
  }
}

/** 多 Agent 协同管理器 */
export class AgentCollaborationManager {
  private agents: Map<string, AgentRuntime> = new Map();
  private eventHandlers: Array<(event: AgentCollaborationEvent) => void> = [];

  registerAgent(agentId: string): void {
    this.agents.set(agentId, {
      id: agentId,
      status: 'idle',
      tokenUsage: 0,
    });
  }

  onEvent(handler: (event: AgentCollaborationEvent) => void): void {
    this.eventHandlers.push(handler);
  }

  emit(event: AgentCollaborationEvent): void {
    for (const handler of this.eventHandlers) {
      handler(event);
    }
  }

  updateStatus(agentId: string, status: AgentRuntime['status'], agentName: string): void {
    const runtime = this.agents.get(agentId);
    if (runtime) {
      runtime.status = status;
    }

    this.emit({
      type: 'status_sync',
      agentId,
      agentName,
      data: { status },
      timestamp: new Date().toISOString(),
    });
  }

  getAgentStatuses(): AgentRuntime[] {
    return Array.from(this.agents.values());
  }
}

/** MCP Tool 注册表 */
export const MCP_TOOLS: Record<string, { name: string; description: string; parameters: Record<string, unknown> }> = {
  mps_calculator: {
    name: 'MPS 计算器',
    description: '计算主生产计划',
    parameters: { period: 'string', demand: 'number' },
  },
  mrp_engine: {
    name: 'MRP 引擎',
    description: '运行物料需求计划',
    parameters: { bomId: 'string', quantity: 'number' },
  },
  smt_scheduler: {
    name: 'SMT 排程器',
    description: '生成 SMT 产线排程',
    parameters: { lines: 'array', orders: 'array' },
  },
  traceability: {
    name: '质量追溯',
    description: '追溯产品质量数据',
    parameters: { serialNumber: 'string' },
  },
  sql_query: {
    name: 'SQL 查询',
    description: '执行数据库查询',
    parameters: { query: 'string' },
  },
  contract_net: {
    name: '合同网协议',
    description: '执行合同网任务分配',
    parameters: { taskId: 'string', agents: 'array' },
  },
};

export { DeepSeekClient as default };
```

---

<a id="file-81"></a>

## 文件 81 : `packages/agents/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

---

<a id="file-82"></a>

## 文件 82 : `packages/database/knowledge-base/industry/doc-001-无人机MPS主生产计.md`

```markdown
# 无人机 MPS 主生产计划编制规范

> **文档编号**：`industry-uav-001`  
> **行业**：无人机制造 · **分类**：生产计划 · **标签**：MPS、产能、订单  
> **关联场景**：无人机制造 · **关联 Agent**：AI 计划员

---

## 1. 文档概述

《无人机 MPS 主生产计划编制规范》是 无人机制造 领域 **生产计划** 的专项作业文件（编号 industry-uav-001）。全文围绕 MPS、产能、订单 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 MPS 主生产计划编制规范 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 MPS 环节常出现与 产能 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 MPS 主生产计划编制规范 在 生产计划 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 主计划编制（针对MPS 主生产计划编制规范第1环节）
- 能力校验（针对MPS 主生产计划编制规范第2环节）
- 与 ERP/MRP 接口（针对MPS 主生产计划编制规范第3环节）
- 计划变更控制（针对MPS 主生产计划编制规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无人机 MPS 主生产计划编制规范」适用版本 Rev.6，确认与当前 UAV 产线工艺路线 industry-uav-001 一致
2. 【数据】从 MES/ERP 导出与 MPS、产能、订单 相关数据：订单 129 单、在制 49 批、库存周转 9 天
3. 【首件】按 无人机制造 WI 完成 MPS 主生产计划编制规范 首件，实测 MPS=79rpm，记录于批次卡
4. 【监控】产能 控制图 UCL=93% / LCL=77%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0629，PLANNER Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 001-629 输出 生产计划 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 MPS 检测数据，写入追溯链
9. 【复盘】班后会评审 无人机 MPS 主生产计划编制规范 执行偏差 4 项，更新 RAG 标签：MPS、产能、订单
10. 【改进】将案例 industry-uav-001 纳入 生产计划 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| MPS 合格率 | ≥98% | 生产计划 KPI |
| 产能 周期 | 39 min | 节拍统计 |
| MPS 主生 一次通过率 | ≥97% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 生产计划 企业内控标准 Rev.9

## 7. 设备、系统与工具

- ERP 计划模块
- APS 排程
- RCCP 负荷表
- S&OP 会议系统
- 文档 industry-uav-001 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| MPS 主生产计划编制规范 超差 | MPS 参数漂移 | 按 WI 调机并加严 MPS 抽检至 AQL 0.65 |
| 生产计划 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| MPS、产能、订单 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 629 |

## 9. 术语解释

- **MPS**：生产计划领域核心度量
- **产能**：MPS 主生产计划编制规范 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -001

## 10. 现场检查清单

- [ ] 无人机 MPS 主生产计划编制规范 适用版本已张贴
- [ ] MPS/产能/订单 仪器校准有效
- [ ] 生产计划 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-001】无人机制造产线在实施「无人机 MPS 主生产计划编制规范」后，MPS 相关不良从 10.9% 降至 2.8%，AI 计划员 协同缩短处置时间 44 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 无人机 MPS 主生产计划编制规范 中第 1 阶段：数据分析（MPS） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`MPS` `产能` `订单` `无人机 MPS `
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-83"></a>

## 文件 83 : `packages/database/knowledge-base/industry/doc-002-无人机MRP物料需求.md`

```markdown
# 无人机 MRP 物料需求计划运算手册

> **文档编号**：`industry-uav-002`  
> **行业**：无人机制造 · **分类**：生产计划 · **标签**：MRP、BOM、缺料  
> **关联场景**：无人机制造 · **关联 Agent**：AI 计划员、AI 数据员

---

## 1. 文档概述

《无人机 MRP 物料需求计划运算手册》是 无人机制造 领域 **生产计划** 的专项作业文件（编号 industry-uav-002）。全文围绕 MRP、BOM、缺料 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 MRP 物料需求计划运算手册 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 MRP 环节常出现与 BOM 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 MRP 物料需求计划运算手册 在 生产计划 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 主计划编制（针对MRP 物料需求计划运算手册第1环节）
- 能力校验（针对MRP 物料需求计划运算手册第2环节）
- 与 ERP/MRP 接口（针对MRP 物料需求计划运算手册第3环节）
- 计划变更控制（针对MRP 物料需求计划运算手册第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无人机 MRP 物料需求计划运算手册」适用版本 Rev.10，确认与当前 UAV 产线工艺路线 industry-uav-002 一致
2. 【数据】从 MES/ERP 导出与 MRP、BOM、缺料 相关数据：订单 101 单、在制 41 批、库存周转 8 天
3. 【首件】按 无人机制造 WI 完成 MRP 物料需求计划运算手册 首件，实测 MRP=51rpm，记录于批次卡
4. 【监控】BOM 控制图 UCL=97% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0201，PLANNER Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 002-201 输出 生产计划 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 MRP 检测数据，写入追溯链
9. 【复盘】班后会评审 无人机 MRP 物料需求计划运算手册 执行偏差 1 项，更新 RAG 标签：MRP、BOM、缺料
10. 【改进】将案例 industry-uav-002 纳入 生产计划 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| MRP 合格率 | ≥97% | 生产计划 KPI |
| BOM 周期 | 11 min | 节拍统计 |
| MRP 物料 一次通过率 | ≥89% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 生产计划 企业内控标准 Rev.4

## 7. 设备、系统与工具

- ERP 计划模块
- APS 排程
- RCCP 负荷表
- S&OP 会议系统
- 文档 industry-uav-002 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| MRP 物料需求计划运算手册 超差 | MRP 参数漂移 | 按 WI 调机并加严 MRP 抽检至 AQL 0.65 |
| 生产计划 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| MRP、BOM、缺料 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 201 |

## 9. 术语解释

- **MRP**：生产计划领域核心度量
- **BOM**：MRP 物料需求计划运算手册 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -002

## 10. 现场检查清单

- [ ] 无人机 MRP 物料需求计划运算手册 适用版本已张贴
- [ ] MRP/BOM/缺料 仪器校准有效
- [ ] 生产计划 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-002】无人机制造产线在实施「无人机 MRP 物料需求计划运算手册」后，MRP 相关不良从 6.1% 降至 0.3%，AI 计划员与AI 数据员 协同缩短处置时间 16 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 21%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 无人机 MRP 物料需求计划运算手册 中第 1 阶段：数据分析（MRP） |
| AI 数据员 | 负责 无人机 MRP 物料需求计划运算手册 中第 2 阶段：规则校验（BOM） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`MRP` `BOM` `缺料` `无人机 MRP `
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-84"></a>

## 文件 84 : `packages/database/knowledge-base/industry/doc-003-多级BOM管理与E.md`

```markdown
# 多级 BOM 管理与 ECN 变更流程

> **文档编号**：`industry-uav-003`  
> **行业**：无人机制造 · **分类**：物料管理 · **标签**：BOM、ECN、版本  
> **关联场景**：无人机制造 · **关联 Agent**：AI 计划员、AI 质量员

---

## 1. 文档概述

《多级 BOM 管理与 ECN 变更流程》是 无人机制造 领域 **物料管理** 的专项作业文件（编号 industry-uav-003）。全文围绕 BOM、ECN、版本 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 多级 BOM 管理与 ECN 变更流程 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 BOM 环节常出现与 ECN 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 多级 BOM 管理与 ECN 变更流程 在 物料管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- BOM 维护（针对多级 BOM 管理与 ECN 变更流程第1环节）
- 发料规则（针对多级 BOM 管理与 ECN 变更流程第2环节）
- 超领控制（针对多级 BOM 管理与 ECN 变更流程第3环节）
- 盘点差异（针对多级 BOM 管理与 ECN 变更流程第4环节）

## 4. 详细操作流程

1. 【准备】查阅「多级 BOM 管理与 ECN 变更流程」适用版本 Rev.2，确认与当前 UAV 产线工艺路线 industry-uav-003 一致
2. 【数据】从 MES/ERP 导出与 BOM、ECN、版本 相关数据：订单 133 单、在制 33 批、库存周转 3 天
3. 【首件】按 无人机制造 WI 完成 多级 BOM 管理与 ECN 变更流程 首件，实测 BOM=83rpm，记录于批次卡
4. 【监控】ECN 控制图 UCL=89% / LCL=77%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0133，PLANNER Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 003-133 输出 物料管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 BOM 检测数据，写入追溯链
9. 【复盘】班后会评审 多级 BOM 管理与 ECN 变更流程 执行偏差 3 项，更新 RAG 标签：BOM、ECN、版本
10. 【改进】将案例 industry-uav-003 纳入 物料管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| BOM 合格率 | ≥92% | 物料管理 KPI |
| ECN 周期 | 43 min | 节拍统计 |
| 多级 BOM 一次通过率 | ≥91% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 物料管理 企业内控标准 Rev.8

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-003 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 多级 BOM 管理与 ECN 变更流程 超差 | BOM 参数漂移 | 按 WI 调机并加严 BOM 抽检至 AQL 0.65 |
| 物料管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| BOM、ECN、版本 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 133 |

## 9. 术语解释

- **BOM**：物料管理领域核心度量
- **ECN**：多级 BOM 管理与 ECN 变更流程 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -003

## 10. 现场检查清单

- [ ] 多级 BOM 管理与 ECN 变更流程 适用版本已张贴
- [ ] BOM/ECN/版本 仪器校准有效
- [ ] 物料管理 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-003】无人机制造产线在实施「多级 BOM 管理与 ECN 变更流程」后，BOM 相关不良从 10.3% 降至 1.7%，AI 计划员与AI 质量员 协同缩短处置时间 28 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 28%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 多级 BOM 管理与 ECN 变更流程 中第 1 阶段：规则校验（BOM） |
| AI 质量员 | 负责 多级 BOM 管理与 ECN 变更流程 中第 2 阶段：方案生成（ECN） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`BOM` `ECN` `版本` `多级 BOM 管`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-85"></a>

## 文件 85 : `packages/database/knowledge-base/industry/doc-004-碳纤维机架铺叠与固化工艺.md`

```markdown
# 碳纤维机架铺叠与固化工艺标准

> **文档编号**：`industry-uav-004`  
> **行业**：无人机制造 · **分类**：制造工艺 · **标签**：复材、机架、固化  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员、AI 仿真员

---

## 1. 文档概述

《碳纤维机架铺叠与固化工艺标准》是 无人机制造 领域 **制造工艺** 的专项作业文件（编号 industry-uav-004）。全文围绕 复材、机架、固化 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 碳纤维机架铺叠与固化工艺标准 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 复材 环节常出现与 机架 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 碳纤维机架铺叠与固化工艺标准 在 制造工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 工艺参数（针对碳纤维机架铺叠与固化工艺标准第1环节）
- 过程确认（针对碳纤维机架铺叠与固化工艺标准第2环节）
- 设备点检（针对碳纤维机架铺叠与固化工艺标准第3环节）
- 首件验证（针对碳纤维机架铺叠与固化工艺标准第4环节）

## 4. 详细操作流程

1. 【准备】查阅「碳纤维机架铺叠与固化工艺标准」适用版本 Rev.9，确认与当前 UAV 产线工艺路线 industry-uav-004 一致
2. 【数据】从 MES/ERP 导出与 复材、机架、固化 相关数据：订单 110 单、在制 40 批、库存周转 9 天
3. 【首件】按 无人机制造 WI 完成 碳纤维机架铺叠与固化工艺标准 首件，实测 复材=110rpm，记录于批次卡
4. 【监控】机架 控制图 UCL=96% / LCL=76%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0860，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 004-860 输出 制造工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 复材 检测数据，写入追溯链
9. 【复盘】班后会评审 碳纤维机架铺叠与固化工艺标准 执行偏差 0 项，更新 RAG 标签：复材、机架、固化
10. 【改进】将案例 industry-uav-004 纳入 制造工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 复材 合格率 | ≥98% | 制造工艺 KPI |
| 机架 周期 | 20 min | 节拍统计 |
| 碳纤维机架铺 一次通过率 | ≥88% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 制造工艺 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-004 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 碳纤维机架铺叠与固化工艺标准 超差 | 复材 参数漂移 | 按 WI 调机并加严 复材 抽检至 AQL 0.65 |
| 制造工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 复材、机架、固化 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 860 |

## 9. 术语解释

- **复材**：制造工艺领域核心度量
- **机架**：碳纤维机架铺叠与固化工艺标准 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -004

## 10. 现场检查清单

- [ ] 碳纤维机架铺叠与固化工艺标准 适用版本已张贴
- [ ] 复材/机架/固化 仪器校准有效
- [ ] 制造工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-004】无人机制造产线在实施「碳纤维机架铺叠与固化工艺标准」后，复材 相关不良从 9.0% 降至 2.5%，AI 质量员与AI 仿真员 协同缩短处置时间 35 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 30%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 碳纤维机架铺叠与固化工艺标准 中第 1 阶段：规则校验（复材） |
| AI 仿真员 | 负责 碳纤维机架铺叠与固化工艺标准 中第 2 阶段：方案生成（机架） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`复材` `机架` `固化` `碳纤维机架铺叠与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-86"></a>

## 文件 86 : `packages/database/knowledge-base/industry/doc-005-无刷电机2212来料.md`

```markdown
# 无刷电机 2212 来料检验与性能测试

> **文档编号**：`industry-uav-005`  
> **行业**：无人机制造 · **分类**：质量检验 · **标签**：电机、IQC、测试  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《无刷电机 2212 来料检验与性能测试》是 无人机制造 领域 **质量检验** 的专项作业文件（编号 industry-uav-005）。全文围绕 电机、IQC、测试 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 无刷电机 2212 来料检验与性能测试 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 电机 环节常出现与 IQC 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 无刷电机 2212 来料检验与性能测试 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- IQC/IPQC/OQC（针对无刷电机 2212 来料检验与性能测试第1环节）
- 抽样方案（针对无刷电机 2212 来料检验与性能测试第2环节）
- 判定准则（针对无刷电机 2212 来料检验与性能测试第3环节）
- NCR 闭环（针对无刷电机 2212 来料检验与性能测试第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无刷电机 2212 来料检验与性能测试」适用版本 Rev.7，确认与当前 UAV 产线工艺路线 industry-uav-005 一致
2. 【数据】从 MES/ERP 导出与 电机、IQC、测试 相关数据：订单 104 单、在制 44 批、库存周转 6 天
3. 【首件】按 无人机制造 WI 完成 无刷电机 2212 来料检验与性能测试 首件，实测 电机=104rpm，记录于批次卡
4. 【监控】IQC 控制图 UCL=94% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0654，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 005-654 输出 质量检验 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 电机 检测数据，写入追溯链
9. 【复盘】班后会评审 无刷电机 2212 来料检验与性能测试 执行偏差 4 项，更新 RAG 标签：电机、IQC、测试
10. 【改进】将案例 industry-uav-005 纳入 质量检验 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 电机 合格率 | ≥95% | 质量检验 KPI |
| IQC 周期 | 14 min | 节拍统计 |
| 无刷电机 2 一次通过率 | ≥92% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 质量检验 企业内控标准 Rev.7

## 7. 设备、系统与工具

- 三坐标/CMM
- 光学测量仪
- SPC 软件
- AQL 抽样表
- 文档 industry-uav-005 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 无刷电机 2212 来料检验与性能测试 超差 | 电机 参数漂移 | 按 WI 调机并加严 电机 抽检至 AQL 0.65 |
| 质量检验 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 电机、IQC、测试 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 654 |

## 9. 术语解释

- **电机**：质量检验领域核心度量
- **IQC**：无刷电机 2212 来料检验与性能测试 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -005

## 10. 现场检查清单

- [ ] 无刷电机 2212 来料检验与性能测试 适用版本已张贴
- [ ] 电机/IQC/测试 仪器校准有效
- [ ] 质量检验 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-005】无人机制造产线在实施「无刷电机 2212 来料检验与性能测试」后，电机 相关不良从 11.4% 降至 0.6%，AI 质量员 协同缩短处置时间 29 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 无刷电机 2212 来料检验与性能测试 中第 1 阶段：数据分析（电机） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`电机` `IQC` `测试` `无刷电机 221`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-87"></a>

## 文件 87 : `packages/database/knowledge-base/industry/doc-006-飞控主板SMT贴片与.md`

```markdown
# 飞控主板 SMT 贴片与功能测试 SOP

> **文档编号**：`industry-uav-006`  
> **行业**：无人机制造 · **分类**：装配工艺 · **标签**：飞控、SMT、FCT  
> **关联场景**：无人机制造 · **关联 Agent**：AI 排程员、AI 质量员

---

## 1. 文档概述

《飞控主板 SMT 贴片与功能测试 SOP》是 无人机制造 领域 **装配工艺** 的专项作业文件（编号 industry-uav-006）。全文围绕 飞控、SMT、FCT 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 飞控主板 SMT 贴片与功能测试 SOP 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 飞控 环节常出现与 SMT 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 飞控主板 SMT 贴片与功能测试 SOP 在 装配工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 工位节拍（针对飞控主板 SMT 贴片与功能测试 SOP第1环节）
- 扭力管控（针对飞控主板 SMT 贴片与功能测试 SOP第2环节）
- 防错装（针对飞控主板 SMT 贴片与功能测试 SOP第3环节）
- 终检放行（针对飞控主板 SMT 贴片与功能测试 SOP第4环节）

## 4. 详细操作流程

1. 【准备】查阅「飞控主板 SMT 贴片与功能测试 SOP」适用版本 Rev.9，确认与当前 UAV 产线工艺路线 industry-uav-006 一致
2. 【数据】从 MES/ERP 导出与 飞控、SMT、FCT 相关数据：订单 114 单、在制 34 批、库存周转 5 天
3. 【首件】按 无人机制造 WI 完成 飞控主板 SMT 贴片与功能测试 SOP 首件，实测 飞控=114rpm，记录于批次卡
4. 【监控】SMT 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0464，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 006-464 输出 装配工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 飞控 检测数据，写入追溯链
9. 【复盘】班后会评审 飞控主板 SMT 贴片与功能测试 SOP 执行偏差 4 项，更新 RAG 标签：飞控、SMT、FCT
10. 【改进】将案例 industry-uav-006 纳入 装配工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 飞控 合格率 | ≥94% | 装配工艺 KPI |
| SMT 周期 | 24 min | 节拍统计 |
| 飞控主板 S 一次通过率 | ≥92% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 装配工艺 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-006 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 飞控主板 SMT 贴片与功能测试 SOP 超差 | 飞控 参数漂移 | 按 WI 调机并加严 飞控 抽检至 AQL 0.65 |
| 装配工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 飞控、SMT、FCT 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 464 |

## 9. 术语解释

- **飞控**：装配工艺领域核心度量
- **SMT**：飞控主板 SMT 贴片与功能测试 SOP 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -006

## 10. 现场检查清单

- [ ] 飞控主板 SMT 贴片与功能测试 SOP 适用版本已张贴
- [ ] 飞控/SMT/FCT 仪器校准有效
- [ ] 装配工艺 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-006】无人机制造产线在实施「飞控主板 SMT 贴片与功能测试 SOP」后，飞控 相关不良从 5.4% 降至 2.5%，AI 排程员与AI 质量员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 34%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 飞控主板 SMT 贴片与功能测试 SOP 中第 1 阶段：方案生成（飞控） |
| AI 质量员 | 负责 飞控主板 SMT 贴片与功能测试 SOP 中第 2 阶段：执行跟踪（SMT） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`飞控` `SMT` `FCT` `飞控主板 SMT`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-88"></a>

## 文件 88 : `packages/database/knowledge-base/industry/doc-007-桨叶动平衡检测与分级标准.md`

```markdown
# 桨叶动平衡检测与分级标准

> **文档编号**：`industry-uav-007`  
> **行业**：无人机制造 · **分类**：质量检验 · **标签**：桨叶、动平衡、分级  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《桨叶动平衡检测与分级标准》是 无人机制造 领域 **质量检验** 的专项作业文件（编号 industry-uav-007）。全文围绕 桨叶、动平衡、分级 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 桨叶动平衡检测与分级标准 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 桨叶 环节常出现与 动平衡 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 桨叶动平衡检测与分级标准 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- IQC/IPQC/OQC（针对桨叶动平衡检测与分级标准第1环节）
- 抽样方案（针对桨叶动平衡检测与分级标准第2环节）
- 判定准则（针对桨叶动平衡检测与分级标准第3环节）
- NCR 闭环（针对桨叶动平衡检测与分级标准第4环节）

## 4. 详细操作流程

1. 【准备】查阅「桨叶动平衡检测与分级标准」适用版本 Rev.10，确认与当前 UAV 产线工艺路线 industry-uav-007 一致
2. 【数据】从 MES/ERP 导出与 桨叶、动平衡、分级 相关数据：订单 113 单、在制 23 批、库存周转 4 天
3. 【首件】按 无人机制造 WI 完成 桨叶动平衡检测与分级标准 首件，实测 桨叶=63rpm，记录于批次卡
4. 【监控】动平衡 控制图 UCL=97% / LCL=77%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0813，QUALITY Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 007-813 输出 质量检验 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 桨叶 检测数据，写入追溯链
9. 【复盘】班后会评审 桨叶动平衡检测与分级标准 执行偏差 3 项，更新 RAG 标签：桨叶、动平衡、分级
10. 【改进】将案例 industry-uav-007 纳入 质量检验 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 桨叶 合格率 | ≥93% | 质量检验 KPI |
| 动平衡 周期 | 23 min | 节拍统计 |
| 桨叶动平衡检 一次通过率 | ≥91% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 质量检验 企业内控标准 Rev.4

## 7. 设备、系统与工具

- 三坐标/CMM
- 光学测量仪
- SPC 软件
- AQL 抽样表
- 文档 industry-uav-007 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 桨叶动平衡检测与分级标准 超差 | 桨叶 参数漂移 | 按 WI 调机并加严 桨叶 抽检至 AQL 0.65 |
| 质量检验 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 桨叶、动平衡、分级 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 813 |

## 9. 术语解释

- **桨叶**：质量检验领域核心度量
- **动平衡**：桨叶动平衡检测与分级标准 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -007

## 10. 现场检查清单

- [ ] 桨叶动平衡检测与分级标准 适用版本已张贴
- [ ] 桨叶/动平衡/分级 仪器校准有效
- [ ] 质量检验 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-007】无人机制造产线在实施「桨叶动平衡检测与分级标准」后，桨叶 相关不良从 10.3% 降至 0.3%，AI 质量员 协同缩短处置时间 28 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 桨叶动平衡检测与分级标准 中第 1 阶段：数据分析（桨叶） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`桨叶` `动平衡` `分级` `桨叶动平衡检测与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-89"></a>

## 文件 89 : `packages/database/knowledge-base/industry/doc-008-智能电池Pack组装.md`

```markdown
# 智能电池 Pack 组装与安全规范

> **文档编号**：`industry-uav-008`  
> **行业**：无人机制造 · **分类**：制造工艺 · **标签**：电池、Pack、安全  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员、AI 计划员

---

## 1. 文档概述

《智能电池 Pack 组装与安全规范》是 无人机制造 领域 **制造工艺** 的专项作业文件（编号 industry-uav-008）。全文围绕 电池、Pack、安全 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 智能电池 Pack 组装与安全规范 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 电池 环节常出现与 Pack 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 智能电池 Pack 组装与安全规范 在 制造工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 工艺参数（针对智能电池 Pack 组装与安全规范第1环节）
- 过程确认（针对智能电池 Pack 组装与安全规范第2环节）
- 设备点检（针对智能电池 Pack 组装与安全规范第3环节）
- 首件验证（针对智能电池 Pack 组装与安全规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「智能电池 Pack 组装与安全规范」适用版本 Rev.10，确认与当前 UAV 产线工艺路线 industry-uav-008 一致
2. 【数据】从 MES/ERP 导出与 电池、Pack、安全 相关数据：订单 129 单、在制 29 批、库存周转 4 天
3. 【首件】按 无人机制造 WI 完成 智能电池 Pack 组装与安全规范 首件，实测 电池=79rpm，记录于批次卡
4. 【监控】Pack 控制图 UCL=97% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0729，QUALITY Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 008-729 输出 制造工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 电池 检测数据，写入追溯链
9. 【复盘】班后会评审 智能电池 Pack 组装与安全规范 执行偏差 4 项，更新 RAG 标签：电池、Pack、安全
10. 【改进】将案例 industry-uav-008 纳入 制造工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 电池 合格率 | ≥93% | 制造工艺 KPI |
| Pack 周期 | 39 min | 节拍统计 |
| 智能电池 P 一次通过率 | ≥97% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 制造工艺 企业内控标准 Rev.1

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-008 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 智能电池 Pack 组装与安全规范 超差 | 电池 参数漂移 | 按 WI 调机并加严 电池 抽检至 AQL 0.65 |
| 制造工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 电池、Pack、安全 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 729 |

## 9. 术语解释

- **电池**：制造工艺领域核心度量
- **Pack**：智能电池 Pack 组装与安全规范 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -008

## 10. 现场检查清单

- [ ] 智能电池 Pack 组装与安全规范 适用版本已张贴
- [ ] 电池/Pack/安全 仪器校准有效
- [ ] 制造工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-008】无人机制造产线在实施「智能电池 Pack 组装与安全规范」后，电池 相关不良从 6.9% 降至 0.0%，AI 质量员与AI 计划员 协同缩短处置时间 24 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 智能电池 Pack 组装与安全规范 中第 1 阶段：数据分析（电池） |
| AI 计划员 | 负责 智能电池 Pack 组装与安全规范 中第 2 阶段：规则校验（Pack） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`电池` `Pack` `安全` `智能电池 Pac`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-90"></a>

## 文件 90 : `packages/database/knowledge-base/industry/doc-009-四旋翼无人机整机组装流程.md`

```markdown
# 四旋翼无人机整机组装流程

> **文档编号**：`industry-uav-009`  
> **行业**：无人机制造 · **分类**：装配工艺 · **标签**：总装、四旋翼、节拍  
> **关联场景**：无人机制造 · **关联 Agent**：AI 排程员、AI 调度员

---

## 1. 文档概述

《四旋翼无人机整机组装流程》是 无人机制造 领域 **装配工艺** 的专项作业文件（编号 industry-uav-009）。全文围绕 总装、四旋翼、节拍 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 四旋翼无人机整机组装流程 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 总装 环节常出现与 四旋翼 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 四旋翼无人机整机组装流程 在 装配工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 工位节拍（针对四旋翼无人机整机组装流程第1环节）
- 扭力管控（针对四旋翼无人机整机组装流程第2环节）
- 防错装（针对四旋翼无人机整机组装流程第3环节）
- 终检放行（针对四旋翼无人机整机组装流程第4环节）

## 4. 详细操作流程

1. 【准备】查阅「四旋翼无人机整机组装流程」适用版本 Rev.2，确认与当前 UAV 产线工艺路线 industry-uav-009 一致
2. 【数据】从 MES/ERP 导出与 总装、四旋翼、节拍 相关数据：订单 107 单、在制 27 批、库存周转 5 天
3. 【首件】按 无人机制造 WI 完成 四旋翼无人机整机组装流程 首件，实测 总装=107rpm，记录于批次卡
4. 【监控】四旋翼 控制图 UCL=89% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0457，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 009-457 输出 装配工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 总装 检测数据，写入追溯链
9. 【复盘】班后会评审 四旋翼无人机整机组装流程 执行偏差 2 项，更新 RAG 标签：总装、四旋翼、节拍
10. 【改进】将案例 industry-uav-009 纳入 装配工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 总装 合格率 | ≥94% | 装配工艺 KPI |
| 四旋翼 周期 | 17 min | 节拍统计 |
| 四旋翼无人机 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 装配工艺 企业内控标准 Rev.8

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-009 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 四旋翼无人机整机组装流程 超差 | 总装 参数漂移 | 按 WI 调机并加严 总装 抽检至 AQL 0.65 |
| 装配工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 总装、四旋翼、节拍 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 457 |

## 9. 术语解释

- **总装**：装配工艺领域核心度量
- **四旋翼**：四旋翼无人机整机组装流程 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -009

## 10. 现场检查清单

- [ ] 四旋翼无人机整机组装流程 适用版本已张贴
- [ ] 总装/四旋翼/节拍 仪器校准有效
- [ ] 装配工艺 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-009】无人机制造产线在实施「四旋翼无人机整机组装流程」后，总装 相关不良从 6.7% 降至 1.7%，AI 排程员与AI 调度员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 四旋翼无人机整机组装流程 中第 1 阶段：数据分析（总装） |
| AI 调度员 | 负责 四旋翼无人机整机组装流程 中第 2 阶段：规则校验（四旋翼） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`总装` `四旋翼` `节拍` `四旋翼无人机整机`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-91"></a>

## 文件 91 : `packages/database/knowledge-base/industry/doc-010-无人机出厂检验与试飞放行.md`

```markdown
# 无人机出厂检验与试飞放行标准

> **文档编号**：`industry-uav-010`  
> **行业**：无人机制造 · **分类**：质量检验 · **标签**：OQC、试飞、放行  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员、协同决策员

---

## 1. 文档概述

《无人机出厂检验与试飞放行标准》是 无人机制造 领域 **质量检验** 的专项作业文件（编号 industry-uav-010）。全文围绕 OQC、试飞、放行 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 出厂检验与试飞放行标准 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 OQC 环节常出现与 试飞 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 出厂检验与试飞放行标准 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- IQC/IPQC/OQC（针对出厂检验与试飞放行标准第1环节）
- 抽样方案（针对出厂检验与试飞放行标准第2环节）
- 判定准则（针对出厂检验与试飞放行标准第3环节）
- NCR 闭环（针对出厂检验与试飞放行标准第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无人机出厂检验与试飞放行标准」适用版本 Rev.9，确认与当前 UAV 产线工艺路线 industry-uav-010 一致
2. 【数据】从 MES/ERP 导出与 OQC、试飞、放行 相关数据：订单 138 单、在制 28 批、库存周转 9 天
3. 【首件】按 无人机制造 WI 完成 出厂检验与试飞放行标准 首件，实测 OQC=138rpm，记录于批次卡
4. 【监控】试飞 控制图 UCL=96% / LCL=76%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0188，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 010-188 输出 质量检验 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 OQC 检测数据，写入追溯链
9. 【复盘】班后会评审 无人机出厂检验与试飞放行标准 执行偏差 3 项，更新 RAG 标签：OQC、试飞、放行
10. 【改进】将案例 industry-uav-010 纳入 质量检验 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| OQC 合格率 | ≥98% | 质量检验 KPI |
| 试飞 周期 | 48 min | 节拍统计 |
| 出厂检验与试 一次通过率 | ≥96% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 质量检验 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 三坐标/CMM
- 光学测量仪
- SPC 软件
- AQL 抽样表
- 文档 industry-uav-010 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 出厂检验与试飞放行标准 超差 | OQC 参数漂移 | 按 WI 调机并加严 OQC 抽检至 AQL 0.65 |
| 质量检验 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| OQC、试飞、放行 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 188 |

## 9. 术语解释

- **OQC**：质量检验领域核心度量
- **试飞**：出厂检验与试飞放行标准 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -010

## 10. 现场检查清单

- [ ] 无人机出厂检验与试飞放行标准 适用版本已张贴
- [ ] OQC/试飞/放行 仪器校准有效
- [ ] 质量检验 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-010】无人机制造产线在实施「无人机出厂检验与试飞放行标准」后，OQC 相关不良从 9.8% 降至 2.8%，AI 质量员与协同决策员 协同缩短处置时间 43 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 无人机出厂检验与试飞放行标准 中第 1 阶段：执行跟踪（OQC） |
| 协同决策员 | 负责 无人机出厂检验与试飞放行标准 中第 2 阶段：数据分析（试飞） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`OQC` `试飞` `放行` `无人机出厂检验与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-92"></a>

## 文件 92 : `packages/database/knowledge-base/industry/doc-011-无人机产线产能规划与瓶颈.md`

```markdown
# 无人机产线产能规划与瓶颈分析

> **文档编号**：`industry-uav-011`  
> **行业**：无人机制造 · **分类**：生产计划 · **标签**：产能、瓶颈、OEE  
> **关联场景**：无人机制造 · **关联 Agent**：AI 计划员、AI 数据员

---

## 1. 文档概述

《无人机产线产能规划与瓶颈分析》是 无人机制造 领域 **生产计划** 的专项作业文件（编号 industry-uav-011）。全文围绕 产能、瓶颈、OEE 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线产能规划与瓶颈分析 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 产能 环节常出现与 瓶颈 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 产线产能规划与瓶颈分析 在 生产计划 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 主计划编制（针对产线产能规划与瓶颈分析第1环节）
- 能力校验（针对产线产能规划与瓶颈分析第2环节）
- 与 ERP/MRP 接口（针对产线产能规划与瓶颈分析第3环节）
- 计划变更控制（针对产线产能规划与瓶颈分析第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无人机产线产能规划与瓶颈分析」适用版本 Rev.4，确认与当前 UAV 产线工艺路线 industry-uav-011 一致
2. 【数据】从 MES/ERP 导出与 产能、瓶颈、OEE 相关数据：订单 125 单、在制 35 批、库存周转 6 天
3. 【首件】按 无人机制造 WI 完成 产线产能规划与瓶颈分析 首件，实测 产能=125rpm，记录于批次卡
4. 【监控】瓶颈 控制图 UCL=91% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0675，PLANNER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 011-675 输出 生产计划 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 产能 检测数据，写入追溯链
9. 【复盘】班后会评审 无人机产线产能规划与瓶颈分析 执行偏差 0 项，更新 RAG 标签：产能、瓶颈、OEE
10. 【改进】将案例 industry-uav-011 纳入 生产计划 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 产能 合格率 | ≥95% | 生产计划 KPI |
| 瓶颈 周期 | 35 min | 节拍统计 |
| 产线产能规划 一次通过率 | ≥93% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 生产计划 企业内控标准 Rev.1

## 7. 设备、系统与工具

- ERP 计划模块
- APS 排程
- RCCP 负荷表
- S&OP 会议系统
- 文档 industry-uav-011 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 产线产能规划与瓶颈分析 超差 | 产能 参数漂移 | 按 WI 调机并加严 产能 抽检至 AQL 0.65 |
| 生产计划 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 产能、瓶颈、OEE 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 675 |

## 9. 术语解释

- **产能**：生产计划领域核心度量
- **瓶颈**：产线产能规划与瓶颈分析 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -011

## 10. 现场检查清单

- [ ] 无人机产线产能规划与瓶颈分析 适用版本已张贴
- [ ] 产能/瓶颈/OEE 仪器校准有效
- [ ] 生产计划 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-011】无人机制造产线在实施「无人机产线产能规划与瓶颈分析」后，产能 相关不良从 8.5% 降至 0.0%，AI 计划员与AI 数据员 协同缩短处置时间 50 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 20%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 无人机产线产能规划与瓶颈分析 中第 1 阶段：数据分析（产能） |
| AI 数据员 | 负责 无人机产线产能规划与瓶颈分析 中第 2 阶段：规则校验（瓶颈） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`产能` `瓶颈` `OEE` `无人机产线产能规`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-93"></a>

## 文件 93 : `packages/database/knowledge-base/industry/doc-012-外协结构件来料检验规范.md`

```markdown
# 外协结构件来料检验规范

> **文档编号**：`industry-uav-012`  
> **行业**：无人机制造 · **分类**：质量检验 · **标签**：外协、IQC、结构件  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《外协结构件来料检验规范》是 无人机制造 领域 **质量检验** 的专项作业文件（编号 industry-uav-012）。全文围绕 外协、IQC、结构件 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 外协结构件来料检验规范 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 外协 环节常出现与 IQC 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 外协结构件来料检验规范 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- IQC/IPQC/OQC（针对外协结构件来料检验规范第1环节）
- 抽样方案（针对外协结构件来料检验规范第2环节）
- 判定准则（针对外协结构件来料检验规范第3环节）
- NCR 闭环（针对外协结构件来料检验规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「外协结构件来料检验规范」适用版本 Rev.12，确认与当前 UAV 产线工艺路线 industry-uav-012 一致
2. 【数据】从 MES/ERP 导出与 外协、IQC、结构件 相关数据：订单 107 单、在制 37 批、库存周转 5 天
3. 【首件】按 无人机制造 WI 完成 外协结构件来料检验规范 首件，实测 外协=57rpm，记录于批次卡
4. 【监控】IQC 控制图 UCL=99% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0107，QUALITY Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 012-107 输出 质量检验 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 外协 检测数据，写入追溯链
9. 【复盘】班后会评审 外协结构件来料检验规范 执行偏差 2 项，更新 RAG 标签：外协、IQC、结构件
10. 【改进】将案例 industry-uav-012 纳入 质量检验 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 外协 合格率 | ≥94% | 质量检验 KPI |
| IQC 周期 | 17 min | 节拍统计 |
| 外协结构件来 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 质量检验 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 三坐标/CMM
- 光学测量仪
- SPC 软件
- AQL 抽样表
- 文档 industry-uav-012 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 外协结构件来料检验规范 超差 | 外协 参数漂移 | 按 WI 调机并加严 外协 抽检至 AQL 0.65 |
| 质量检验 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 外协、IQC、结构件 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 107 |

## 9. 术语解释

- **外协**：质量检验领域核心度量
- **IQC**：外协结构件来料检验规范 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -012

## 10. 现场检查清单

- [ ] 外协结构件来料检验规范 适用版本已张贴
- [ ] 外协/IQC/结构件 仪器校准有效
- [ ] 质量检验 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-012】无人机制造产线在实施「外协结构件来料检验规范」后，外协 相关不良从 8.7% 降至 2.8%，AI 质量员 协同缩短处置时间 42 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 外协结构件来料检验规范 中第 1 阶段：数据分析（外协） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`外协` `IQC` `结构件` `外协结构件来料检`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-94"></a>

## 文件 94 : `packages/database/knowledge-base/industry/doc-013-工装夹具设计与寿命管理.md`

```markdown
# 工装夹具设计与寿命管理

> **文档编号**：`industry-uav-013`  
> **行业**：无人机制造 · **分类**：设备管理 · **标签**：工装、夹具、PM  
> **关联场景**：无人机制造 · **关联 Agent**：AI 排程员

---

## 1. 文档概述

《工装夹具设计与寿命管理》是 无人机制造 领域 **设备管理** 的专项作业文件（编号 industry-uav-013）。全文围绕 工装、夹具、PM 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 工装夹具设计与寿命管理 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 工装 环节常出现与 夹具 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 工装夹具设计与寿命管理 在 设备管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- PM 计划（针对工装夹具设计与寿命管理第1环节）
- 备件策略（针对工装夹具设计与寿命管理第2环节）
- OEE 统计（针对工装夹具设计与寿命管理第3环节）
- 故障代码（针对工装夹具设计与寿命管理第4环节）

## 4. 详细操作流程

1. 【准备】查阅「工装夹具设计与寿命管理」适用版本 Rev.4，确认与当前 UAV 产线工艺路线 industry-uav-013 一致
2. 【数据】从 MES/ERP 导出与 工装、夹具、PM 相关数据：订单 107 单、在制 47 批、库存周转 5 天
3. 【首件】按 无人机制造 WI 完成 工装夹具设计与寿命管理 首件，实测 工装=57rpm，记录于批次卡
4. 【监控】夹具 控制图 UCL=91% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0807，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 013-807 输出 设备管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 工装 检测数据，写入追溯链
9. 【复盘】班后会评审 工装夹具设计与寿命管理 执行偏差 2 项，更新 RAG 标签：工装、夹具、PM
10. 【改进】将案例 industry-uav-013 纳入 设备管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 工装 合格率 | ≥94% | 设备管理 KPI |
| 夹具 周期 | 17 min | 节拍统计 |
| 工装夹具设计 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 设备管理 企业内控标准 Rev.7

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-013 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 工装夹具设计与寿命管理 超差 | 工装 参数漂移 | 按 WI 调机并加严 工装 抽检至 AQL 0.65 |
| 设备管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 工装、夹具、PM 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 807 |

## 9. 术语解释

- **工装**：设备管理领域核心度量
- **夹具**：工装夹具设计与寿命管理 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -013

## 10. 现场检查清单

- [ ] 工装夹具设计与寿命管理 适用版本已张贴
- [ ] 工装/夹具/PM 仪器校准有效
- [ ] 设备管理 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-013】无人机制造产线在实施「工装夹具设计与寿命管理」后，工装 相关不良从 12.7% 降至 0.6%，AI 排程员 协同缩短处置时间 22 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 工装夹具设计与寿命管理 中第 1 阶段：数据分析（工装） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`工装` `夹具` `PM` `工装夹具设计与寿`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-95"></a>

## 文件 95 : `packages/database/knowledge-base/industry/doc-014-无人机精益生产线布局指南.md`

```markdown
# 无人机精益生产线布局指南

> **文档编号**：`industry-uav-014`  
> **行业**：无人机制造 · **分类**：精益生产 · **标签**：精益、线体、布局  
> **关联场景**：无人机制造 · **关联 Agent**：AI 计划员、AI 仿真员

---

## 1. 文档概述

《无人机精益生产线布局指南》是 无人机制造 领域 **精益生产** 的专项作业文件（编号 industry-uav-014）。全文围绕 精益、线体、布局 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 精益生产线布局指南 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 精益 环节常出现与 线体 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 精益生产线布局指南 在 精益生产 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 价值流图（针对精益生产线布局指南第1环节）
- 7 浪费（针对精益生产线布局指南第2环节）
- 看板设计（针对精益生产线布局指南第3环节）
- 改善闭环（针对精益生产线布局指南第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无人机精益生产线布局指南」适用版本 Rev.1，确认与当前 UAV 产线工艺路线 industry-uav-014 一致
2. 【数据】从 MES/ERP 导出与 精益、线体、布局 相关数据：订单 134 单、在制 44 批、库存周转 7 天
3. 【首件】按 无人机制造 WI 完成 精益生产线布局指南 首件，实测 精益=134rpm，记录于批次卡
4. 【监控】线体 控制图 UCL=88% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0984，PLANNER Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 014-984 输出 精益生产 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 精益 检测数据，写入追溯链
9. 【复盘】班后会评审 无人机精益生产线布局指南 执行偏差 4 项，更新 RAG 标签：精益、线体、布局
10. 【改进】将案例 industry-uav-014 纳入 精益生产 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 精益 合格率 | ≥96% | 精益生产 KPI |
| 线体 周期 | 44 min | 节拍统计 |
| 精益生产线布 一次通过率 | ≥92% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 精益生产 企业内控标准 Rev.4

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-014 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 精益生产线布局指南 超差 | 精益 参数漂移 | 按 WI 调机并加严 精益 抽检至 AQL 0.65 |
| 精益生产 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 精益、线体、布局 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 984 |

## 9. 术语解释

- **精益**：精益生产领域核心度量
- **线体**：精益生产线布局指南 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -014

## 10. 现场检查清单

- [ ] 无人机精益生产线布局指南 适用版本已张贴
- [ ] 精益/线体/布局 仪器校准有效
- [ ] 精益生产 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-014】无人机制造产线在实施「无人机精益生产线布局指南」后，精益 相关不良从 5.4% 降至 0.3%，AI 计划员与AI 仿真员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 无人机精益生产线布局指南 中第 1 阶段：规则校验（精益） |
| AI 仿真员 | 负责 无人机精益生产线布局指南 中第 2 阶段：方案生成（线体） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`精益` `线体` `布局` `无人机精益生产线`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-96"></a>

## 文件 96 : `packages/database/knowledge-base/industry/doc-015-多机型混线换线时间优化方.md`

```markdown
# 多机型混线换线时间优化方法

> **文档编号**：`industry-uav-015`  
> **行业**：无人机制造 · **分类**：排程优化 · **标签**：换线、SMED、混线  
> **关联场景**：无人机制造 · **关联 Agent**：AI 排程员、AI 计划员

---

## 1. 文档概述

《多机型混线换线时间优化方法》是 无人机制造 领域 **排程优化** 的专项作业文件（编号 industry-uav-015）。全文围绕 换线、SMED、混线 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 多机型混线换线时间优化方法 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 换线 环节常出现与 SMED 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 多机型混线换线时间优化方法 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 产线排程（针对多机型混线换线时间优化方法第1环节）
- 换线优化（针对多机型混线换线时间优化方法第2环节）
- 插单规则（针对多机型混线换线时间优化方法第3环节）
- 甘特发布（针对多机型混线换线时间优化方法第4环节）

## 4. 详细操作流程

1. 【准备】查阅「多机型混线换线时间优化方法」适用版本 Rev.9，确认与当前 UAV 产线工艺路线 industry-uav-015 一致
2. 【数据】从 MES/ERP 导出与 换线、SMED、混线 相关数据：订单 138 单、在制 28 批、库存周转 8 天
3. 【首件】按 无人机制造 WI 完成 多机型混线换线时间优化方法 首件，实测 换线=138rpm，记录于批次卡
4. 【监控】SMED 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0488，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 015-488 输出 排程优化 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 换线 检测数据，写入追溯链
9. 【复盘】班后会评审 多机型混线换线时间优化方法 执行偏差 3 项，更新 RAG 标签：换线、SMED、混线
10. 【改进】将案例 industry-uav-015 纳入 排程优化 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 换线 合格率 | ≥97% | 排程优化 KPI |
| SMED 周期 | 48 min | 节拍统计 |
| 多机型混线换 一次通过率 | ≥96% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 排程优化 企业内控标准 Rev.3

## 7. 设备、系统与工具

- 甘特排程软件
- 换线计时器
- MES 工单
- Andon 看板
- 文档 industry-uav-015 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 多机型混线换线时间优化方法 超差 | 换线 参数漂移 | 按 WI 调机并加严 换线 抽检至 AQL 0.65 |
| 排程优化 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 换线、SMED、混线 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 488 |

## 9. 术语解释

- **换线**：排程优化领域核心度量
- **SMED**：多机型混线换线时间优化方法 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -015

## 10. 现场检查清单

- [ ] 多机型混线换线时间优化方法 适用版本已张贴
- [ ] 换线/SMED/混线 仪器校准有效
- [ ] 排程优化 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-015】无人机制造产线在实施「多机型混线换线时间优化方法」后，换线 相关不良从 5.8% 降至 2.2%，AI 排程员与AI 计划员 协同缩短处置时间 23 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 多机型混线换线时间优化方法 中第 1 阶段：方案生成（换线） |
| AI 计划员 | 负责 多机型混线换线时间优化方法 中第 2 阶段：执行跟踪（SMED） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`换线` `SMED` `混线` `多机型混线换线时`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-97"></a>

## 文件 97 : `packages/database/knowledge-base/industry/doc-016-无人机全流程质量追溯体系.md`

```markdown
# 无人机全流程质量追溯体系

> **文档编号**：`industry-uav-016`  
> **行业**：无人机制造 · **分类**：质量管理 · **标签**：追溯、SN、批次  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《无人机全流程质量追溯体系》是 无人机制造 领域 **质量管理** 的专项作业文件（编号 industry-uav-016）。全文围绕 追溯、SN、批次 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 全流程质量追溯体系 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 追溯 环节常出现与 SN 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 全流程质量追溯体系 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 追溯体系（针对全流程质量追溯体系第1环节）
- SPC（针对全流程质量追溯体系第2环节）
- FMEA（针对全流程质量追溯体系第3环节）
- 8D 改善（针对全流程质量追溯体系第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无人机全流程质量追溯体系」适用版本 Rev.7，确认与当前 UAV 产线工艺路线 industry-uav-016 一致
2. 【数据】从 MES/ERP 导出与 追溯、SN、批次 相关数据：订单 142 单、在制 32 批、库存周转 8 天
3. 【首件】按 无人机制造 WI 完成 全流程质量追溯体系 首件，实测 追溯=92rpm，记录于批次卡
4. 【监控】SN 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0642，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 016-642 输出 质量管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 追溯 检测数据，写入追溯链
9. 【复盘】班后会评审 无人机全流程质量追溯体系 执行偏差 2 项，更新 RAG 标签：追溯、SN、批次
10. 【改进】将案例 industry-uav-016 纳入 质量管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 追溯 合格率 | ≥97% | 质量管理 KPI |
| SN 周期 | 52 min | 节拍统计 |
| 全流程质量追 一次通过率 | ≥90% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 质量管理 企业内控标准 Rev.4

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-016 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 全流程质量追溯体系 超差 | 追溯 参数漂移 | 按 WI 调机并加严 追溯 抽检至 AQL 0.65 |
| 质量管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 追溯、SN、批次 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 642 |

## 9. 术语解释

- **追溯**：质量管理领域核心度量
- **SN**：全流程质量追溯体系 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -016

## 10. 现场检查清单

- [ ] 无人机全流程质量追溯体系 适用版本已张贴
- [ ] 追溯/SN/批次 仪器校准有效
- [ ] 质量管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-016】无人机制造产线在实施「无人机全流程质量追溯体系」后，追溯 相关不良从 7.2% 降至 0.3%，AI 质量员与AI 数据员 协同缩短处置时间 17 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 37%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 无人机全流程质量追溯体系 中第 1 阶段：方案生成（追溯） |
| AI 数据员 | 负责 无人机全流程质量追溯体系 中第 2 阶段：执行跟踪（SN） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`追溯` `SN` `批次` `无人机全流程质量`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-98"></a>

## 文件 98 : `packages/database/knowledge-base/industry/doc-017-飞控系统FMEA风险.md`

```markdown
# 飞控系统 FMEA 风险分析报告模板

> **文档编号**：`industry-uav-017`  
> **行业**：无人机制造 · **分类**：质量管理 · **标签**：FMEA、飞控、风险  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员、协同决策员

---

## 1. 文档概述

《飞控系统 FMEA 风险分析报告模板》是 无人机制造 领域 **质量管理** 的专项作业文件（编号 industry-uav-017）。全文围绕 FMEA、飞控、风险 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 飞控系统 FMEA 风险分析报告模板 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 FMEA 环节常出现与 飞控 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 飞控系统 FMEA 风险分析报告模板 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 追溯体系（针对飞控系统 FMEA 风险分析报告模板第1环节）
- SPC（针对飞控系统 FMEA 风险分析报告模板第2环节）
- FMEA（针对飞控系统 FMEA 风险分析报告模板第3环节）
- 8D 改善（针对飞控系统 FMEA 风险分析报告模板第4环节）

## 4. 详细操作流程

1. 【准备】查阅「飞控系统 FMEA 风险分析报告模板」适用版本 Rev.12，确认与当前 UAV 产线工艺路线 industry-uav-017 一致
2. 【数据】从 MES/ERP 导出与 FMEA、飞控、风险 相关数据：订单 131 单、在制 31 批、库存周转 7 天
3. 【首件】按 无人机制造 WI 完成 飞控系统 FMEA 风险分析报告模板 首件，实测 FMEA=81rpm，记录于批次卡
4. 【监控】飞控 控制图 UCL=99% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0431，QUALITY Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 017-431 输出 质量管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 FMEA 检测数据，写入追溯链
9. 【复盘】班后会评审 飞控系统 FMEA 风险分析报告模板 执行偏差 1 项，更新 RAG 标签：FMEA、飞控、风险
10. 【改进】将案例 industry-uav-017 纳入 质量管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| FMEA 合格率 | ≥96% | 质量管理 KPI |
| 飞控 周期 | 41 min | 节拍统计 |
| 飞控系统 F 一次通过率 | ≥89% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 质量管理 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-017 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 飞控系统 FMEA 风险分析报告模板 超差 | FMEA 参数漂移 | 按 WI 调机并加严 FMEA 抽检至 AQL 0.65 |
| 质量管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| FMEA、飞控、风险 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 431 |

## 9. 术语解释

- **FMEA**：质量管理领域核心度量
- **飞控**：飞控系统 FMEA 风险分析报告模板 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -017

## 10. 现场检查清单

- [ ] 飞控系统 FMEA 风险分析报告模板 适用版本已张贴
- [ ] FMEA/飞控/风险 仪器校准有效
- [ ] 质量管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-017】无人机制造产线在实施「飞控系统 FMEA 风险分析报告模板」后，FMEA 相关不良从 12.1% 降至 2.8%，AI 质量员与协同决策员 协同缩短处置时间 46 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 26%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 飞控系统 FMEA 风险分析报告模板 中第 1 阶段：方案生成（FMEA） |
| 协同决策员 | 负责 飞控系统 FMEA 风险分析报告模板 中第 2 阶段：执行跟踪（飞控） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`FMEA` `飞控` `风险` `飞控系统 FME`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-99"></a>

## 文件 99 : `packages/database/knowledge-base/industry/doc-018-无人机产线数字孪生建模指.md`

```markdown
# 无人机产线数字孪生建模指南

> **文档编号**：`industry-uav-018`  
> **行业**：无人机制造 · **分类**：数字孪生 · **标签**：孪生、仿真、产线  
> **关联场景**：无人机制造 · **关联 Agent**：AI 仿真员、AI 数据员

---

## 1. 文档概述

《无人机产线数字孪生建模指南》是 无人机制造 领域 **数字孪生** 的专项作业文件（编号 industry-uav-018）。全文围绕 孪生、仿真、产线 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线数字孪生建模指南 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 孪生 环节常出现与 仿真 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 产线数字孪生建模指南 在 数字孪生 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 模型校准（针对产线数字孪生建模指南第1环节）
- 仿真场景（针对产线数字孪生建模指南第2环节）
- What-If（针对产线数字孪生建模指南第3环节）
- 虚实同步（针对产线数字孪生建模指南第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无人机产线数字孪生建模指南」适用版本 Rev.8，确认与当前 UAV 产线工艺路线 industry-uav-018 一致
2. 【数据】从 MES/ERP 导出与 孪生、仿真、产线 相关数据：订单 133 单、在制 33 批、库存周转 5 天
3. 【首件】按 无人机制造 WI 完成 产线数字孪生建模指南 首件，实测 孪生=133rpm，记录于批次卡
4. 【监控】仿真 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0583，SIMULATOR Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 018-583 输出 数字孪生 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 孪生 检测数据，写入追溯链
9. 【复盘】班后会评审 无人机产线数字孪生建模指南 执行偏差 3 项，更新 RAG 标签：孪生、仿真、产线
10. 【改进】将案例 industry-uav-018 纳入 数字孪生 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 孪生 合格率 | ≥94% | 数字孪生 KPI |
| 仿真 周期 | 43 min | 节拍统计 |
| 产线数字孪生 一次通过率 | ≥91% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 数字孪生 企业内控标准 Rev.8

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-018 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 产线数字孪生建模指南 超差 | 孪生 参数漂移 | 按 WI 调机并加严 孪生 抽检至 AQL 0.65 |
| 数字孪生 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 孪生、仿真、产线 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 583 |

## 9. 术语解释

- **孪生**：数字孪生领域核心度量
- **仿真**：产线数字孪生建模指南 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -018

## 10. 现场检查清单

- [ ] 无人机产线数字孪生建模指南 适用版本已张贴
- [ ] 孪生/仿真/产线 仪器校准有效
- [ ] 数字孪生 首件已签字
- [ ] Agent SIMULATOR 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-018】无人机制造产线在实施「无人机产线数字孪生建模指南」后，孪生 相关不良从 12.3% 降至 1.7%，AI 仿真员与AI 数据员 协同缩短处置时间 38 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 28%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 仿真员 | 负责 无人机产线数字孪生建模指南 中第 1 阶段：方案生成（孪生） |
| AI 数据员 | 负责 无人机产线数字孪生建模指南 中第 2 阶段：执行跟踪（仿真） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`孪生` `仿真` `产线` `无人机产线数字孪`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-100"></a>

## 文件 100 : `packages/database/knowledge-base/industry/doc-019-合同网协议在无人机任务分.md`

```markdown
# 合同网协议在无人机任务分配中的应用

> **文档编号**：`industry-uav-019`  
> **行业**：无人机制造 · **分类**：多智能体 · **标签**：CNP、调度、Agent  
> **关联场景**：无人机制造 · **关联 Agent**：AI 调度员、协同决策员

---

## 1. 文档概述

《合同网协议在无人机任务分配中的应用》是 无人机制造 领域 **多智能体** 的专项作业文件（编号 industry-uav-019）。全文围绕 CNP、调度、Agent 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 合同网协议在无人机任务分配中的应用 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 CNP 环节常出现与 调度 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 合同网协议在无人机任务分配中的应用 在 多智能体 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- Agent 分工（针对合同网协议在无人机任务分配中的应用第1环节）
- 任务分配（针对合同网协议在无人机任务分配中的应用第2环节）
- 冲突消解（针对合同网协议在无人机任务分配中的应用第3环节）
- 决策记录（针对合同网协议在无人机任务分配中的应用第4环节）

## 4. 详细操作流程

1. 【准备】查阅「合同网协议在无人机任务分配中的应用」适用版本 Rev.7，确认与当前 UAV 产线工艺路线 industry-uav-019 一致
2. 【数据】从 MES/ERP 导出与 CNP、调度、Agent 相关数据：订单 138 单、在制 38 批、库存周转 7 天
3. 【首件】按 无人机制造 WI 完成 合同网协议在无人机任务分配中的应用 首件，实测 CNP=88rpm，记录于批次卡
4. 【监控】调度 控制图 UCL=94% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0438，DISPATCHER Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 019-438 输出 多智能体 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 CNP 检测数据，写入追溯链
9. 【复盘】班后会评审 合同网协议在无人机任务分配中的应用 执行偏差 3 项，更新 RAG 标签：CNP、调度、Agent
10. 【改进】将案例 industry-uav-019 纳入 多智能体 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| CNP 合格率 | ≥96% | 多智能体 KPI |
| 调度 周期 | 48 min | 节拍统计 |
| 合同网协议在 一次通过率 | ≥96% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 多智能体 企业内控标准 Rev.7

## 7. 设备、系统与工具

- Contract Net 调度器
- Agent 注册中心
- 任务黑板
- 决策日志
- 文档 industry-uav-019 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 合同网协议在无人机任务分配中的应用 超差 | CNP 参数漂移 | 按 WI 调机并加严 CNP 抽检至 AQL 0.65 |
| 多智能体 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| CNP、调度、Agent 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 438 |

## 9. 术语解释

- **CNP**：多智能体领域核心度量
- **调度**：合同网协议在无人机任务分配中的应用 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -019

## 10. 现场检查清单

- [ ] 合同网协议在无人机任务分配中的应用 适用版本已张贴
- [ ] CNP/调度/Agent 仪器校准有效
- [ ] 多智能体 首件已签字
- [ ] Agent DISPATCHER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-019】无人机制造产线在实施「合同网协议在无人机任务分配中的应用」后，CNP 相关不良从 11.8% 降至 0.6%，AI 调度员与协同决策员 协同缩短处置时间 53 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 调度员 | 负责 合同网协议在无人机任务分配中的应用 中第 1 阶段：方案生成（CNP） |
| 协同决策员 | 负责 合同网协议在无人机任务分配中的应用 中第 2 阶段：执行跟踪（调度） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`CNP` `调度` `Agent` `合同网协议在无人`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-101"></a>

## 文件 101 : `packages/database/knowledge-base/industry/doc-020-民用无人机适航与合规检查.md`

```markdown
# 民用无人机适航与合规检查清单

> **文档编号**：`industry-uav-020`  
> **行业**：无人机制造 · **分类**：合规管理 · **标签**：适航、合规、检查  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员、协同决策员

---

## 1. 文档概述

《民用无人机适航与合规检查清单》是 无人机制造 领域 **合规管理** 的专项作业文件（编号 industry-uav-020）。全文围绕 适航、合规、检查 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 民用无人机适航与合规检查清单 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 适航 环节常出现与 合规 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 民用无人机适航与合规检查清单 在 合规管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 法规识别（针对民用无人机适航与合规检查清单第1环节）
- 审核准备（针对民用无人机适航与合规检查清单第2环节）
- 证书维护（针对民用无人机适航与合规检查清单第3环节）
- 内审整改（针对民用无人机适航与合规检查清单第4环节）

## 4. 详细操作流程

1. 【准备】查阅「民用无人机适航与合规检查清单」适用版本 Rev.8，确认与当前 UAV 产线工艺路线 industry-uav-020 一致
2. 【数据】从 MES/ERP 导出与 适航、合规、检查 相关数据：订单 105 单、在制 45 批、库存周转 8 天
3. 【首件】按 无人机制造 WI 完成 民用无人机适航与合规检查清单 首件，实测 适航=105rpm，记录于批次卡
4. 【监控】合规 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0355，QUALITY Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 020-355 输出 合规管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 适航 检测数据，写入追溯链
9. 【复盘】班后会评审 民用无人机适航与合规检查清单 执行偏差 0 项，更新 RAG 标签：适航、合规、检查
10. 【改进】将案例 industry-uav-020 纳入 合规管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 适航 合格率 | ≥97% | 合规管理 KPI |
| 合规 周期 | 15 min | 节拍统计 |
| 民用无人机适 一次通过率 | ≥93% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 合规管理 企业内控标准 Rev.5

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-020 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 民用无人机适航与合规检查清单 超差 | 适航 参数漂移 | 按 WI 调机并加严 适航 抽检至 AQL 0.65 |
| 合规管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 适航、合规、检查 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 355 |

## 9. 术语解释

- **适航**：合规管理领域核心度量
- **合规**：民用无人机适航与合规检查清单 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -020

## 10. 现场检查清单

- [ ] 民用无人机适航与合规检查清单 适用版本已张贴
- [ ] 适航/合规/检查 仪器校准有效
- [ ] 合规管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-020】无人机制造产线在实施「民用无人机适航与合规检查清单」后，适航 相关不良从 8.5% 降至 1.4%，AI 质量员与协同决策员 协同缩短处置时间 50 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 25%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 民用无人机适航与合规检查清单 中第 1 阶段：方案生成（适航） |
| 协同决策员 | 负责 民用无人机适航与合规检查清单 中第 2 阶段：执行跟踪（合规） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`适航` `合规` `检查` `民用无人机适航与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-102"></a>

## 文件 102 : `packages/database/knowledge-base/industry/doc-021-ESC电调参数标定与老.md`

```markdown
# ESC 电调参数标定与老化测试

> **文档编号**：`industry-uav-021`  
> **行业**：无人机制造 · **分类**：测试工艺 · **标签**：ESC、电调、老化  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《ESC 电调参数标定与老化测试》是 无人机制造 领域 **测试工艺** 的专项作业文件（编号 industry-uav-021）。全文围绕 ESC、电调、老化 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 ESC 电调参数标定与老化测试 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 ESC 环节常出现与 电调 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 ESC 电调参数标定与老化测试 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 测试程序（针对ESC 电调参数标定与老化测试第1环节）
- 限值设定（针对ESC 电调参数标定与老化测试第2环节）
- 设备校准（针对ESC 电调参数标定与老化测试第3环节）
- 数据归档（针对ESC 电调参数标定与老化测试第4环节）

## 4. 详细操作流程

1. 【准备】查阅「ESC 电调参数标定与老化测试」适用版本 Rev.1，确认与当前 UAV 产线工艺路线 industry-uav-021 一致
2. 【数据】从 MES/ERP 导出与 ESC、电调、老化 相关数据：订单 146 单、在制 26 批、库存周转 8 天
3. 【首件】按 无人机制造 WI 完成 ESC 电调参数标定与老化测试 首件，实测 ESC=146rpm，记录于批次卡
4. 【监控】电调 控制图 UCL=88% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0096，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 021-96 输出 测试工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 ESC 检测数据，写入追溯链
9. 【复盘】班后会评审 ESC 电调参数标定与老化测试 执行偏差 1 项，更新 RAG 标签：ESC、电调、老化
10. 【改进】将案例 industry-uav-021 纳入 测试工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| ESC 合格率 | ≥97% | 测试工艺 KPI |
| 电调 周期 | 56 min | 节拍统计 |
| ESC 电调 一次通过率 | ≥94% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 测试工艺 企业内控标准 Rev.7

## 7. 设备、系统与工具

- EOL 台架
- FCT 治具
- 数据采集仪
- 校准证书库
- 文档 industry-uav-021 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| ESC 电调参数标定与老化测试 超差 | ESC 参数漂移 | 按 WI 调机并加严 ESC 抽检至 AQL 0.65 |
| 测试工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| ESC、电调、老化 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 96 |

## 9. 术语解释

- **ESC**：测试工艺领域核心度量
- **电调**：ESC 电调参数标定与老化测试 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -021

## 10. 现场检查清单

- [ ] ESC 电调参数标定与老化测试 适用版本已张贴
- [ ] ESC/电调/老化 仪器校准有效
- [ ] 测试工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-021】无人机制造产线在实施「ESC 电调参数标定与老化测试」后，ESC 相关不良从 5.6% 降至 0.6%，AI 质量员 协同缩短处置时间 31 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 41%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 ESC 电调参数标定与老化测试 中第 1 阶段：方案生成（ESC） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`ESC` `电调` `老化` `ESC 电调参数`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-103"></a>

## 文件 103 : `packages/database/knowledge-base/industry/doc-022-GNSS模块校准与环境.md`

```markdown
# GNSS 模块校准与环境干扰排查

> **文档编号**：`industry-uav-022`  
> **行业**：无人机制造 · **分类**：测试工艺 · **标签**：GPS、GNSS、校准  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《GNSS 模块校准与环境干扰排查》是 无人机制造 领域 **测试工艺** 的专项作业文件（编号 industry-uav-022）。全文围绕 GPS、GNSS、校准 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 GNSS 模块校准与环境干扰排查 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 GPS 环节常出现与 GNSS 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 GNSS 模块校准与环境干扰排查 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 测试程序（针对GNSS 模块校准与环境干扰排查第1环节）
- 限值设定（针对GNSS 模块校准与环境干扰排查第2环节）
- 设备校准（针对GNSS 模块校准与环境干扰排查第3环节）
- 数据归档（针对GNSS 模块校准与环境干扰排查第4环节）

## 4. 详细操作流程

1. 【准备】查阅「GNSS 模块校准与环境干扰排查」适用版本 Rev.5，确认与当前 UAV 产线工艺路线 industry-uav-022 一致
2. 【数据】从 MES/ERP 导出与 GPS、GNSS、校准 相关数据：订单 118 单、在制 48 批、库存周转 3 天
3. 【首件】按 无人机制造 WI 完成 GNSS 模块校准与环境干扰排查 首件，实测 GPS=118rpm，记录于批次卡
4. 【监控】GNSS 控制图 UCL=92% / LCL=76%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0868，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 022-868 输出 测试工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 GPS 检测数据，写入追溯链
9. 【复盘】班后会评审 GNSS 模块校准与环境干扰排查 执行偏差 3 项，更新 RAG 标签：GPS、GNSS、校准
10. 【改进】将案例 industry-uav-022 纳入 测试工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| GPS 合格率 | ≥92% | 测试工艺 KPI |
| GNSS 周期 | 28 min | 节拍统计 |
| GNSS 模 一次通过率 | ≥96% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 测试工艺 企业内控标准 Rev.5

## 7. 设备、系统与工具

- EOL 台架
- FCT 治具
- 数据采集仪
- 校准证书库
- 文档 industry-uav-022 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| GNSS 模块校准与环境干扰排查 超差 | GPS 参数漂移 | 按 WI 调机并加严 GPS 抽检至 AQL 0.65 |
| 测试工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| GPS、GNSS、校准 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 868 |

## 9. 术语解释

- **GPS**：测试工艺领域核心度量
- **GNSS**：GNSS 模块校准与环境干扰排查 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -022

## 10. 现场检查清单

- [ ] GNSS 模块校准与环境干扰排查 适用版本已张贴
- [ ] GPS/GNSS/校准 仪器校准有效
- [ ] 测试工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-022】无人机制造产线在实施「GNSS 模块校准与环境干扰排查」后，GPS 相关不良从 9.8% 降至 1.4%，AI 质量员与AI 数据员 协同缩短处置时间 43 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 38%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 GNSS 模块校准与环境干扰排查 中第 1 阶段：规则校验（GPS） |
| AI 数据员 | 负责 GNSS 模块校准与环境干扰排查 中第 2 阶段：方案生成（GNSS） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`GPS` `GNSS` `校准` `GNSS 模块校`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-104"></a>

## 文件 104 : `packages/database/knowledge-base/industry/doc-023-图传系统联调与干扰测试规.md`

```markdown
# 图传系统联调与干扰测试规范

> **文档编号**：`industry-uav-023`  
> **行业**：无人机制造 · **分类**：测试工艺 · **标签**：图传、RF、联调  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《图传系统联调与干扰测试规范》是 无人机制造 领域 **测试工艺** 的专项作业文件（编号 industry-uav-023）。全文围绕 图传、RF、联调 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 图传系统联调与干扰测试规范 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 图传 环节常出现与 RF 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 图传系统联调与干扰测试规范 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 测试程序（针对图传系统联调与干扰测试规范第1环节）
- 限值设定（针对图传系统联调与干扰测试规范第2环节）
- 设备校准（针对图传系统联调与干扰测试规范第3环节）
- 数据归档（针对图传系统联调与干扰测试规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「图传系统联调与干扰测试规范」适用版本 Rev.6，确认与当前 UAV 产线工艺路线 industry-uav-023 一致
2. 【数据】从 MES/ERP 导出与 图传、RF、联调 相关数据：订单 143 单、在制 43 批、库存周转 8 天
3. 【首件】按 无人机制造 WI 完成 图传系统联调与干扰测试规范 首件，实测 图传=143rpm，记录于批次卡
4. 【监控】RF 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0593，QUALITY Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 023-593 输出 测试工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 图传 检测数据，写入追溯链
9. 【复盘】班后会评审 图传系统联调与干扰测试规范 执行偏差 3 项，更新 RAG 标签：图传、RF、联调
10. 【改进】将案例 industry-uav-023 纳入 测试工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 图传 合格率 | ≥97% | 测试工艺 KPI |
| RF 周期 | 53 min | 节拍统计 |
| 图传系统联调 一次通过率 | ≥91% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 测试工艺 企业内控标准 Rev.9

## 7. 设备、系统与工具

- EOL 台架
- FCT 治具
- 数据采集仪
- 校准证书库
- 文档 industry-uav-023 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 图传系统联调与干扰测试规范 超差 | 图传 参数漂移 | 按 WI 调机并加严 图传 抽检至 AQL 0.65 |
| 测试工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 图传、RF、联调 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 593 |

## 9. 术语解释

- **图传**：测试工艺领域核心度量
- **RF**：图传系统联调与干扰测试规范 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -023

## 10. 现场检查清单

- [ ] 图传系统联调与干扰测试规范 适用版本已张贴
- [ ] 图传/RF/联调 仪器校准有效
- [ ] 测试工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-023】无人机制造产线在实施「图传系统联调与干扰测试规范」后，图传 相关不良从 6.3% 降至 2.8%，AI 质量员 协同缩短处置时间 48 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 38%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 图传系统联调与干扰测试规范 中第 1 阶段：执行跟踪（图传） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`图传` `RF` `联调` `图传系统联调与干`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-105"></a>

## 文件 105 : `packages/database/knowledge-base/industry/doc-024-无人机零部件WMS仓.md`

```markdown
# 无人机零部件 WMS 仓储对接规范

> **文档编号**：`industry-uav-024`  
> **行业**：无人机制造 · **分类**：物流仓储 · **标签**：WMS、仓储、拣配  
> **关联场景**：无人机制造 · **关联 Agent**：AI 数据员、AI 计划员

---

## 1. 文档概述

《无人机零部件 WMS 仓储对接规范》是 无人机制造 领域 **物流仓储** 的专项作业文件（编号 industry-uav-024）。全文围绕 WMS、仓储、拣配 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 零部件 WMS 仓储对接规范 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 WMS 环节常出现与 仓储 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 零部件 WMS 仓储对接规范 在 物流仓储 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 入库检验（针对零部件 WMS 仓储对接规范第1环节）
- 拣配策略（针对零部件 WMS 仓储对接规范第2环节）
- AGV 调度（针对零部件 WMS 仓储对接规范第3环节）
- 库存周转（针对零部件 WMS 仓储对接规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无人机零部件 WMS 仓储对接规范」适用版本 Rev.6，确认与当前 UAV 产线工艺路线 industry-uav-024 一致
2. 【数据】从 MES/ERP 导出与 WMS、仓储、拣配 相关数据：订单 127 单、在制 37 批、库存周转 9 天
3. 【首件】按 无人机制造 WI 完成 零部件 WMS 仓储对接规范 首件，实测 WMS=127rpm，记录于批次卡
4. 【监控】仓储 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0377，DATA_ANALYST Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 024-377 输出 物流仓储 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 WMS 检测数据，写入追溯链
9. 【复盘】班后会评审 无人机零部件 WMS 仓储对接规范 执行偏差 2 项，更新 RAG 标签：WMS、仓储、拣配
10. 【改进】将案例 industry-uav-024 纳入 物流仓储 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| WMS 合格率 | ≥98% | 物流仓储 KPI |
| 仓储 周期 | 37 min | 节拍统计 |
| 零部件 WM 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 物流仓储 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-024 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 零部件 WMS 仓储对接规范 超差 | WMS 参数漂移 | 按 WI 调机并加严 WMS 抽检至 AQL 0.65 |
| 物流仓储 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| WMS、仓储、拣配 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 377 |

## 9. 术语解释

- **WMS**：物流仓储领域核心度量
- **仓储**：零部件 WMS 仓储对接规范 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -024

## 10. 现场检查清单

- [ ] 无人机零部件 WMS 仓储对接规范 适用版本已张贴
- [ ] WMS/仓储/拣配 仪器校准有效
- [ ] 物流仓储 首件已签字
- [ ] Agent DATA_ANALYST 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-024】无人机制造产线在实施「无人机零部件 WMS 仓储对接规范」后，WMS 相关不良从 6.7% 降至 2.8%，AI 数据员与AI 计划员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 数据员 | 负责 无人机零部件 WMS 仓储对接规范 中第 1 阶段：规则校验（WMS） |
| AI 计划员 | 负责 无人机零部件 WMS 仓储对接规范 中第 2 阶段：方案生成（仓储） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`WMS` `仓储` `拣配` `无人机零部件 W`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-106"></a>

## 文件 106 : `packages/database/knowledge-base/industry/doc-025-产线AGV配送路径与.md`

```markdown
# 产线 AGV 配送路径与节拍匹配

> **文档编号**：`industry-uav-025`  
> **行业**：无人机制造 · **分类**：物流仓储 · **标签**：AGV、配送、节拍  
> **关联场景**：无人机制造 · **关联 Agent**：AI 排程员、AI 调度员

---

## 1. 文档概述

《产线 AGV 配送路径与节拍匹配》是 无人机制造 领域 **物流仓储** 的专项作业文件（编号 industry-uav-025）。全文围绕 AGV、配送、节拍 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线 AGV 配送路径与节拍匹配 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 AGV 环节常出现与 配送 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 产线 AGV 配送路径与节拍匹配 在 物流仓储 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 入库检验（针对产线 AGV 配送路径与节拍匹配第1环节）
- 拣配策略（针对产线 AGV 配送路径与节拍匹配第2环节）
- AGV 调度（针对产线 AGV 配送路径与节拍匹配第3环节）
- 库存周转（针对产线 AGV 配送路径与节拍匹配第4环节）

## 4. 详细操作流程

1. 【准备】查阅「产线 AGV 配送路径与节拍匹配」适用版本 Rev.6，确认与当前 UAV 产线工艺路线 industry-uav-025 一致
2. 【数据】从 MES/ERP 导出与 AGV、配送、节拍 相关数据：订单 121 单、在制 31 批、库存周转 6 天
3. 【首件】按 无人机制造 WI 完成 产线 AGV 配送路径与节拍匹配 首件，实测 AGV=71rpm，记录于批次卡
4. 【监控】配送 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0521，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 025-521 输出 物流仓储 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 AGV 检测数据，写入追溯链
9. 【复盘】班后会评审 产线 AGV 配送路径与节拍匹配 执行偏差 1 项，更新 RAG 标签：AGV、配送、节拍
10. 【改进】将案例 industry-uav-025 纳入 物流仓储 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| AGV 合格率 | ≥95% | 物流仓储 KPI |
| 配送 周期 | 31 min | 节拍统计 |
| 产线 AGV 一次通过率 | ≥89% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 物流仓储 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-025 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 产线 AGV 配送路径与节拍匹配 超差 | AGV 参数漂移 | 按 WI 调机并加严 AGV 抽检至 AQL 0.65 |
| 物流仓储 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| AGV、配送、节拍 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 521 |

## 9. 术语解释

- **AGV**：物流仓储领域核心度量
- **配送**：产线 AGV 配送路径与节拍匹配 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -025

## 10. 现场检查清单

- [ ] 产线 AGV 配送路径与节拍匹配 适用版本已张贴
- [ ] AGV/配送/节拍 仪器校准有效
- [ ] 物流仓储 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-025】无人机制造产线在实施「产线 AGV 配送路径与节拍匹配」后，AGV 相关不良从 6.1% 降至 2.8%，AI 排程员与AI 调度员 协同缩短处置时间 16 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 41%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 产线 AGV 配送路径与节拍匹配 中第 1 阶段：规则校验（AGV） |
| AI 调度员 | 负责 产线 AGV 配送路径与节拍匹配 中第 2 阶段：方案生成（配送） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`AGV` `配送` `节拍` `产线 AGV 配`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-107"></a>

## 文件 107 : `packages/database/knowledge-base/industry/doc-026-无人机生产看板KPI.md`

```markdown
# 无人机生产看板 KPI 指标体系

> **文档编号**：`industry-uav-026`  
> **行业**：无人机制造 · **分类**：数据分析 · **标签**：KPI、看板、OEE  
> **关联场景**：无人机制造 · **关联 Agent**：AI 数据员

---

## 1. 文档概述

《无人机生产看板 KPI 指标体系》是 无人机制造 领域 **数据分析** 的专项作业文件（编号 industry-uav-026）。全文围绕 KPI、看板、OEE 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 生产看板 KPI 指标体系 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 KPI 环节常出现与 看板 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 生产看板 KPI 指标体系 在 数据分析 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 指标定义（针对生产看板 KPI 指标体系第1环节）
- 报表自动化（针对生产看板 KPI 指标体系第2环节）
- 异常预警（针对生产看板 KPI 指标体系第3环节）
- 决策支持（针对生产看板 KPI 指标体系第4环节）

## 4. 详细操作流程

1. 【准备】查阅「无人机生产看板 KPI 指标体系」适用版本 Rev.8，确认与当前 UAV 产线工艺路线 industry-uav-026 一致
2. 【数据】从 MES/ERP 导出与 KPI、看板、OEE 相关数据：订单 129 单、在制 39 批、库存周转 4 天
3. 【首件】按 无人机制造 WI 完成 生产看板 KPI 指标体系 首件，实测 KPI=129rpm，记录于批次卡
4. 【监控】看板 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0379，DATA_ANALYST Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 026-379 输出 数据分析 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 KPI 检测数据，写入追溯链
9. 【复盘】班后会评审 无人机生产看板 KPI 指标体系 执行偏差 4 项，更新 RAG 标签：KPI、看板、OEE
10. 【改进】将案例 industry-uav-026 纳入 数据分析 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| KPI 合格率 | ≥93% | 数据分析 KPI |
| 看板 周期 | 39 min | 节拍统计 |
| 生产看板 K 一次通过率 | ≥97% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 数据分析 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-026 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 生产看板 KPI 指标体系 超差 | KPI 参数漂移 | 按 WI 调机并加严 KPI 抽检至 AQL 0.65 |
| 数据分析 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| KPI、看板、OEE 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 379 |

## 9. 术语解释

- **KPI**：数据分析领域核心度量
- **看板**：生产看板 KPI 指标体系 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -026

## 10. 现场检查清单

- [ ] 无人机生产看板 KPI 指标体系 适用版本已张贴
- [ ] KPI/看板/OEE 仪器校准有效
- [ ] 数据分析 首件已签字
- [ ] Agent DATA_ANALYST 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-026】无人机制造产线在实施「无人机生产看板 KPI 指标体系」后，KPI 相关不良从 8.9% 降至 1.1%，AI 数据员 协同缩短处置时间 34 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 数据员 | 负责 无人机生产看板 KPI 指标体系 中第 1 阶段：方案生成（KPI） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`KPI` `看板` `OEE` `无人机生产看板 `
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-108"></a>

## 文件 108 : `packages/database/knowledge-base/industry/doc-027-售后返修分析与设计反馈闭.md`

```markdown
# 售后返修分析与设计反馈闭环

> **文档编号**：`industry-uav-027`  
> **行业**：无人机制造 · **分类**：质量管理 · **标签**：返修、RMA、闭环  
> **关联场景**：无人机制造 · **关联 Agent**：AI 质量员、协同决策员

---

## 1. 文档概述

《售后返修分析与设计反馈闭环》是 无人机制造 领域 **质量管理** 的专项作业文件（编号 industry-uav-027）。全文围绕 返修、RMA、闭环 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 售后返修分析与设计反馈闭环 相关工序与决策。

## 2. 背景与目的

无人机制造 客户在 返修 环节常出现与 RMA 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 售后返修分析与设计反馈闭环 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。

## 3. 适用范围

- 追溯体系（针对售后返修分析与设计反馈闭环第1环节）
- SPC（针对售后返修分析与设计反馈闭环第2环节）
- FMEA（针对售后返修分析与设计反馈闭环第3环节）
- 8D 改善（针对售后返修分析与设计反馈闭环第4环节）

## 4. 详细操作流程

1. 【准备】查阅「售后返修分析与设计反馈闭环」适用版本 Rev.7，确认与当前 UAV 产线工艺路线 industry-uav-027 一致
2. 【数据】从 MES/ERP 导出与 返修、RMA、闭环 相关数据：订单 130 单、在制 20 批、库存周转 4 天
3. 【首件】按 无人机制造 WI 完成 售后返修分析与设计反馈闭环 首件，实测 返修=80rpm，记录于批次卡
4. 【监控】RMA 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-UAV-0330，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 027-330 输出 质量管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 飞控 SN 与 返修 检测数据，写入追溯链
9. 【复盘】班后会评审 售后返修分析与设计反馈闭环 执行偏差 0 项，更新 RAG 标签：返修、RMA、闭环
10. 【改进】将案例 industry-uav-027 纳入 质量管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 返修 合格率 | ≥93% | 质量管理 KPI |
| RMA 周期 | 40 min | 节拍统计 |
| 售后返修分析 一次通过率 | ≥88% | 不含返工 |
| 数据追溯粒度 | 飞控 SN | 强制绑定 |

## 6. 引用标准与规范

- CCAR-92 民用无人机适航
- GB/T 19001
- GJB 复合材料通用要求
- 企业 UAV-QMS-001
- 质量管理 企业内控标准 Rev.7

## 7. 设备、系统与工具

- 总装线
- 飞测场
- 热压罐
- KV 测试台
- 文档 industry-uav-027 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 售后返修分析与设计反馈闭环 超差 | 返修 参数漂移 | 按 WI 调机并加严 返修 抽检至 AQL 0.65 |
| 质量管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 返修、RMA、闭环 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 330 |

## 9. 术语解释

- **返修**：质量管理领域核心度量
- **RMA**：售后返修分析与设计反馈闭环 标准作业程序
- **UAV-TERM**：无人机制造 专用术语，见企业术语库 -027

## 10. 现场检查清单

- [ ] 售后返修分析与设计反馈闭环 适用版本已张贴
- [ ] 返修/RMA/闭环 仪器校准有效
- [ ] 质量管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-uav-027】无人机制造产线在实施「售后返修分析与设计反馈闭环」后，返修 相关不良从 7.0% 降至 0.6%，AI 质量员与协同决策员 协同缩短处置时间 25 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 25%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 售后返修分析与设计反馈闭环 中第 1 阶段：规则校验（返修） |
| 协同决策员 | 负责 售后返修分析与设计反馈闭环 中第 2 阶段：方案生成（RMA） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`返修` `RMA` `闭环` `售后返修分析与设`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-109"></a>

## 文件 109 : `packages/database/knowledge-base/industry/doc-028-SMT贴片产线智能排程.md`

```markdown
# SMT 贴片产线智能排程操作手册

> **文档编号**：`industry-smt-028`  
> **行业**：SMT 电子制造 · **分类**：排程优化 · **标签**：排程、贴片、甘特图  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员

---

## 1. 文档概述

《SMT 贴片产线智能排程操作手册》是 SMT 电子制造 领域 **排程优化** 的专项作业文件（编号 industry-smt-028）。全文围绕 排程、贴片、甘特图 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 贴片产线智能排程操作手册 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 排程 环节常出现与 贴片 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 贴片产线智能排程操作手册 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 产线排程（针对贴片产线智能排程操作手册第1环节）
- 换线优化（针对贴片产线智能排程操作手册第2环节）
- 插单规则（针对贴片产线智能排程操作手册第3环节）
- 甘特发布（针对贴片产线智能排程操作手册第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 贴片产线智能排程操作手册」适用版本 Rev.8，确认与当前 SMT 产线工艺路线 industry-smt-028 一致
2. 【数据】从 MES/ERP 导出与 排程、贴片、甘特图 相关数据：订单 149 单、在制 39 批、库存周转 5 天
3. 【首件】按 SMT 电子制造 WI 完成 贴片产线智能排程操作手册 首件，实测 排程=149%，记录于批次卡
4. 【监控】贴片 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0499，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 028-499 输出 排程优化 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 排程 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 贴片产线智能排程操作手册 执行偏差 4 项，更新 RAG 标签：排程、贴片、甘特图
10. 【改进】将案例 industry-smt-028 纳入 排程优化 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 排程 合格率 | ≥94% | 排程优化 KPI |
| 贴片 周期 | 59 s/件 | 节拍统计 |
| 贴片产线智能 一次通过率 | ≥97% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 排程优化 企业内控标准 Rev.5

## 7. 设备、系统与工具

- 甘特排程软件
- 换线计时器
- MES 工单
- Andon 看板
- 文档 industry-smt-028 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 贴片产线智能排程操作手册 超差 | 排程 参数漂移 | 按 WI 调机并加严 排程 抽检至 AQL 0.65 |
| 排程优化 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 排程、贴片、甘特图 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 499 |

## 9. 术语解释

- **排程**：排程优化领域核心度量
- **贴片**：贴片产线智能排程操作手册 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -028

## 10. 现场检查清单

- [ ] SMT 贴片产线智能排程操作手册 适用版本已张贴
- [ ] 排程/贴片/甘特图 仪器校准有效
- [ ] 排程优化 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-028】SMT 电子制造产线在实施「SMT 贴片产线智能排程操作手册」后，排程 相关不良从 8.9% 降至 1.4%，AI 排程员 协同缩短处置时间 34 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 44%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 SMT 贴片产线智能排程操作手册 中第 1 阶段：规则校验（排程） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`排程` `贴片` `甘特图` `SMT 贴片产线`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-110"></a>

## 文件 110 : `packages/database/knowledge-base/industry/doc-029-锡膏印刷工艺参数与SP.md`

```markdown
# 锡膏印刷工艺参数与 SPI 判定标准

> **文档编号**：`industry-smt-029`  
> **行业**：SMT 电子制造 · **分类**：工艺标准 · **标签**：印刷、锡膏、SPI  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员、AI 排程员

---

## 1. 文档概述

《锡膏印刷工艺参数与 SPI 判定标准》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-029）。全文围绕 印刷、锡膏、SPI 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 锡膏印刷工艺参数与 SPI 判定标准 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 印刷 环节常出现与 锡膏 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 锡膏印刷工艺参数与 SPI 判定标准 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 过程控制（针对锡膏印刷工艺参数与 SPI 判定标准第1环节）
- 数据记录（针对锡膏印刷工艺参数与 SPI 判定标准第2环节）
- 异常升级（针对锡膏印刷工艺参数与 SPI 判定标准第3环节）
- 持续改进（针对锡膏印刷工艺参数与 SPI 判定标准第4环节）

## 4. 详细操作流程

1. 【准备】查阅「锡膏印刷工艺参数与 SPI 判定标准」适用版本 Rev.2，确认与当前 SMT 产线工艺路线 industry-smt-029 一致
2. 【数据】从 MES/ERP 导出与 印刷、锡膏、SPI 相关数据：订单 103 单、在制 33 批、库存周转 9 天
3. 【首件】按 SMT 电子制造 WI 完成 锡膏印刷工艺参数与 SPI 判定标准 首件，实测 印刷=103%，记录于批次卡
4. 【监控】锡膏 控制图 UCL=89% / LCL=77%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0853，QUALITY Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 029-853 输出 工艺标准 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 印刷 检测数据，写入追溯链
9. 【复盘】班后会评审 锡膏印刷工艺参数与 SPI 判定标准 执行偏差 3 项，更新 RAG 标签：印刷、锡膏、SPI
10. 【改进】将案例 industry-smt-029 纳入 工艺标准 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 印刷 合格率 | ≥98% | 工艺标准 KPI |
| 锡膏 周期 | 13 s/件 | 节拍统计 |
| 锡膏印刷工艺 一次通过率 | ≥91% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 工艺标准 企业内控标准 Rev.8

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-029 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 锡膏印刷工艺参数与 SPI 判定标准 超差 | 印刷 参数漂移 | 按 WI 调机并加严 印刷 抽检至 AQL 0.65 |
| 工艺标准 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 印刷、锡膏、SPI 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 853 |

## 9. 术语解释

- **印刷**：工艺标准领域核心度量
- **锡膏**：锡膏印刷工艺参数与 SPI 判定标准 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -029

## 10. 现场检查清单

- [ ] 锡膏印刷工艺参数与 SPI 判定标准 适用版本已张贴
- [ ] 印刷/锡膏/SPI 仪器校准有效
- [ ] 工艺标准 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-029】SMT 电子制造产线在实施「锡膏印刷工艺参数与 SPI 判定标准」后，印刷 相关不良从 10.3% 降至 1.7%，AI 质量员与AI 排程员 协同缩短处置时间 28 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 23%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 锡膏印刷工艺参数与 SPI 判定标准 中第 1 阶段：数据分析（印刷） |
| AI 排程员 | 负责 锡膏印刷工艺参数与 SPI 判定标准 中第 2 阶段：规则校验（锡膏） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`印刷` `锡膏` `SPI` `锡膏印刷工艺参数`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-111"></a>

## 文件 111 : `packages/database/knowledge-base/industry/doc-030-SPI三维检测缺陷分类.md`

```markdown
# SPI 三维检测缺陷分类与处置

> **文档编号**：`industry-smt-030`  
> **行业**：SMT 电子制造 · **分类**：质量检验 · **标签**：SPI、缺陷、SPC  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《SPI 三维检测缺陷分类与处置》是 SMT 电子制造 领域 **质量检验** 的专项作业文件（编号 industry-smt-030）。全文围绕 SPI、缺陷、SPC 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 SPI 三维检测缺陷分类与处置 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 SPI 环节常出现与 缺陷 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 SPI 三维检测缺陷分类与处置 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- IQC/IPQC/OQC（针对SPI 三维检测缺陷分类与处置第1环节）
- 抽样方案（针对SPI 三维检测缺陷分类与处置第2环节）
- 判定准则（针对SPI 三维检测缺陷分类与处置第3环节）
- NCR 闭环（针对SPI 三维检测缺陷分类与处置第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SPI 三维检测缺陷分类与处置」适用版本 Rev.2，确认与当前 SMT 产线工艺路线 industry-smt-030 一致
2. 【数据】从 MES/ERP 导出与 SPI、缺陷、SPC 相关数据：订单 127 单、在制 27 批、库存周转 6 天
3. 【首件】按 SMT 电子制造 WI 完成 SPI 三维检测缺陷分类与处置 首件，实测 SPI=127%，记录于批次卡
4. 【监控】缺陷 控制图 UCL=89% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0577，QUALITY Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 030-577 输出 质量检验 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 SPI 检测数据，写入追溯链
9. 【复盘】班后会评审 SPI 三维检测缺陷分类与处置 执行偏差 2 项，更新 RAG 标签：SPI、缺陷、SPC
10. 【改进】将案例 industry-smt-030 纳入 质量检验 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| SPI 合格率 | ≥95% | 质量检验 KPI |
| 缺陷 周期 | 37 s/件 | 节拍统计 |
| SPI 三维 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 质量检验 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 三坐标/CMM
- 光学测量仪
- SPC 软件
- AQL 抽样表
- 文档 industry-smt-030 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| SPI 三维检测缺陷分类与处置 超差 | SPI 参数漂移 | 按 WI 调机并加严 SPI 抽检至 AQL 0.65 |
| 质量检验 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| SPI、缺陷、SPC 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 577 |

## 9. 术语解释

- **SPI**：质量检验领域核心度量
- **缺陷**：SPI 三维检测缺陷分类与处置 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -030

## 10. 现场检查清单

- [ ] SPI 三维检测缺陷分类与处置 适用版本已张贴
- [ ] SPI/缺陷/SPC 仪器校准有效
- [ ] 质量检验 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-030】SMT 电子制造产线在实施「SPI 三维检测缺陷分类与处置」后，SPI 相关不良从 6.7% 降至 1.1%，AI 质量员与AI 数据员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 SPI 三维检测缺陷分类与处置 中第 1 阶段：规则校验（SPI） |
| AI 数据员 | 负责 SPI 三维检测缺陷分类与处置 中第 2 阶段：方案生成（缺陷） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`SPI` `缺陷` `SPC` `SPI 三维检测`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-112"></a>

## 文件 112 : `packages/database/knowledge-base/industry/doc-031-回流焊温区设置与炉温曲线.md`

```markdown
# 回流焊温区设置与炉温曲线验证

> **文档编号**：`industry-smt-031`  
> **行业**：SMT 电子制造 · **分类**：工艺标准 · **标签**：回流焊、温区、曲线  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员、AI 排程员

---

## 1. 文档概述

《回流焊温区设置与炉温曲线验证》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-031）。全文围绕 回流焊、温区、曲线 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 回流焊温区设置与炉温曲线验证 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 回流焊 环节常出现与 温区 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 回流焊温区设置与炉温曲线验证 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 过程控制（针对回流焊温区设置与炉温曲线验证第1环节）
- 数据记录（针对回流焊温区设置与炉温曲线验证第2环节）
- 异常升级（针对回流焊温区设置与炉温曲线验证第3环节）
- 持续改进（针对回流焊温区设置与炉温曲线验证第4环节）

## 4. 详细操作流程

1. 【准备】查阅「回流焊温区设置与炉温曲线验证」适用版本 Rev.5，确认与当前 SMT 产线工艺路线 industry-smt-031 一致
2. 【数据】从 MES/ERP 导出与 回流焊、温区、曲线 相关数据：订单 102 单、在制 42 批、库存周转 5 天
3. 【首件】按 SMT 电子制造 WI 完成 回流焊温区设置与炉温曲线验证 首件，实测 回流焊=102%，记录于批次卡
4. 【监控】温区 控制图 UCL=92% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0352，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 031-352 输出 工艺标准 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 回流焊 检测数据，写入追溯链
9. 【复盘】班后会评审 回流焊温区设置与炉温曲线验证 执行偏差 2 项，更新 RAG 标签：回流焊、温区、曲线
10. 【改进】将案例 industry-smt-031 纳入 工艺标准 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 回流焊 合格率 | ≥94% | 工艺标准 KPI |
| 温区 周期 | 12 s/件 | 节拍统计 |
| 回流焊温区设 一次通过率 | ≥90% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 工艺标准 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-031 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 回流焊温区设置与炉温曲线验证 超差 | 回流焊 参数漂移 | 按 WI 调机并加严 回流焊 抽检至 AQL 0.65 |
| 工艺标准 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 回流焊、温区、曲线 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 352 |

## 9. 术语解释

- **回流焊**：工艺标准领域核心度量
- **温区**：回流焊温区设置与炉温曲线验证 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -031

## 10. 现场检查清单

- [ ] 回流焊温区设置与炉温曲线验证 适用版本已张贴
- [ ] 回流焊/温区/曲线 仪器校准有效
- [ ] 工艺标准 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-031】SMT 电子制造产线在实施「回流焊温区设置与炉温曲线验证」后，回流焊 相关不良从 5.2% 降至 1.1%，AI 质量员与AI 排程员 协同缩短处置时间 47 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 回流焊温区设置与炉温曲线验证 中第 1 阶段：数据分析（回流焊） |
| AI 排程员 | 负责 回流焊温区设置与炉温曲线验证 中第 2 阶段：规则校验（温区） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`回流焊` `温区` `曲线` `回流焊温区设置与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-113"></a>

## 文件 113 : `packages/database/knowledge-base/industry/doc-032-AOI光学检测误报分析.md`

```markdown
# AOI 光学检测误报分析与优化

> **文档编号**：`industry-smt-032`  
> **行业**：SMT 电子制造 · **分类**：质量检验 · **标签**：AOI、误报、算法  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《AOI 光学检测误报分析与优化》是 SMT 电子制造 领域 **质量检验** 的专项作业文件（编号 industry-smt-032）。全文围绕 AOI、误报、算法 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 AOI 光学检测误报分析与优化 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 AOI 环节常出现与 误报 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 AOI 光学检测误报分析与优化 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- IQC/IPQC/OQC（针对AOI 光学检测误报分析与优化第1环节）
- 抽样方案（针对AOI 光学检测误报分析与优化第2环节）
- 判定准则（针对AOI 光学检测误报分析与优化第3环节）
- NCR 闭环（针对AOI 光学检测误报分析与优化第4环节）

## 4. 详细操作流程

1. 【准备】查阅「AOI 光学检测误报分析与优化」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-032 一致
2. 【数据】从 MES/ERP 导出与 AOI、误报、算法 相关数据：订单 148 单、在制 28 批、库存周转 9 天
3. 【首件】按 SMT 电子制造 WI 完成 AOI 光学检测误报分析与优化 首件，实测 AOI=148%，记录于批次卡
4. 【监控】误报 控制图 UCL=90% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0398，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 032-398 输出 质量检验 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 AOI 检测数据，写入追溯链
9. 【复盘】班后会评审 AOI 光学检测误报分析与优化 执行偏差 3 项，更新 RAG 标签：AOI、误报、算法
10. 【改进】将案例 industry-smt-032 纳入 质量检验 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| AOI 合格率 | ≥98% | 质量检验 KPI |
| 误报 周期 | 58 s/件 | 节拍统计 |
| AOI 光学 一次通过率 | ≥96% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 质量检验 企业内控标准 Rev.3

## 7. 设备、系统与工具

- 三坐标/CMM
- 光学测量仪
- SPC 软件
- AQL 抽样表
- 文档 industry-smt-032 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| AOI 光学检测误报分析与优化 超差 | AOI 参数漂移 | 按 WI 调机并加严 AOI 抽检至 AQL 0.65 |
| 质量检验 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| AOI、误报、算法 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 398 |

## 9. 术语解释

- **AOI**：质量检验领域核心度量
- **误报**：AOI 光学检测误报分析与优化 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -032

## 10. 现场检查清单

- [ ] AOI 光学检测误报分析与优化 适用版本已张贴
- [ ] AOI/误报/算法 仪器校准有效
- [ ] 质量检验 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-032】SMT 电子制造产线在实施「AOI 光学检测误报分析与优化」后，AOI 相关不良从 11.8% 降至 2.2%，AI 质量员与AI 数据员 协同缩短处置时间 53 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 43%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 AOI 光学检测误报分析与优化 中第 1 阶段：方案生成（AOI） |
| AI 数据员 | 负责 AOI 光学检测误报分析与优化 中第 2 阶段：执行跟踪（误报） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`AOI` `误报` `算法` `AOI 光学检测`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-114"></a>

## 文件 114 : `packages/database/knowledge-base/industry/doc-033-SMT换线标准作业程序.md`

```markdown
# SMT 换线标准作业程序 SMED

> **文档编号**：`industry-smt-033`  
> **行业**：SMT 电子制造 · **分类**：排程优化 · **标签**：换线、SMED、程序  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员

---

## 1. 文档概述

《SMT 换线标准作业程序 SMED》是 SMT 电子制造 领域 **排程优化** 的专项作业文件（编号 industry-smt-033）。全文围绕 换线、SMED、程序 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 换线标准作业程序 SMED 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 换线 环节常出现与 SMED 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 换线标准作业程序 SMED 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 产线排程（针对换线标准作业程序 SMED第1环节）
- 换线优化（针对换线标准作业程序 SMED第2环节）
- 插单规则（针对换线标准作业程序 SMED第3环节）
- 甘特发布（针对换线标准作业程序 SMED第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 换线标准作业程序 SMED」适用版本 Rev.8，确认与当前 SMT 产线工艺路线 industry-smt-033 一致
2. 【数据】从 MES/ERP 导出与 换线、SMED、程序 相关数据：订单 141 单、在制 21 批、库存周转 3 天
3. 【首件】按 SMT 电子制造 WI 完成 换线标准作业程序 SMED 首件，实测 换线=141%，记录于批次卡
4. 【监控】SMED 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0091，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 033-91 输出 排程优化 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 换线 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 换线标准作业程序 SMED 执行偏差 1 项，更新 RAG 标签：换线、SMED、程序
10. 【改进】将案例 industry-smt-033 纳入 排程优化 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 换线 合格率 | ≥92% | 排程优化 KPI |
| SMED 周期 | 51 s/件 | 节拍统计 |
| 换线标准作业 一次通过率 | ≥89% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 排程优化 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 甘特排程软件
- 换线计时器
- MES 工单
- Andon 看板
- 文档 industry-smt-033 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 换线标准作业程序 SMED 超差 | 换线 参数漂移 | 按 WI 调机并加严 换线 抽检至 AQL 0.65 |
| 排程优化 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 换线、SMED、程序 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 91 |

## 9. 术语解释

- **换线**：排程优化领域核心度量
- **SMED**：换线标准作业程序 SMED 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -033

## 10. 现场检查清单

- [ ] SMT 换线标准作业程序 SMED 适用版本已张贴
- [ ] 换线/SMED/程序 仪器校准有效
- [ ] 排程优化 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-033】SMT 电子制造产线在实施「SMT 换线标准作业程序 SMED」后，换线 相关不良从 8.1% 降至 1.1%，AI 排程员 协同缩短处置时间 26 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 36%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 SMT 换线标准作业程序 SMED 中第 1 阶段：执行跟踪（换线） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`换线` `SMED` `程序` `SMT 换线标准`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-115"></a>

## 文件 115 : `packages/database/knowledge-base/industry/doc-034-NPI新产品SMT.md`

```markdown
# NPI 新产品 SMT 导入流程

> **文档编号**：`industry-smt-034`  
> **行业**：SMT 电子制造 · **分类**：工程管理 · **标签**：NPI、导入、试产  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 计划员、AI 排程员

---

## 1. 文档概述

《NPI 新产品 SMT 导入流程》是 SMT 电子制造 领域 **工程管理** 的专项作业文件（编号 industry-smt-034）。全文围绕 NPI、导入、试产 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 NPI 新产品 SMT 导入流程 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 NPI 环节常出现与 导入 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 NPI 新产品 SMT 导入流程 在 工程管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- NPI 门阀（针对NPI 新产品 SMT 导入流程第1环节）
- 试产转化（针对NPI 新产品 SMT 导入流程第2环节）
- 成本核算（针对NPI 新产品 SMT 导入流程第3环节）
- 变更评估（针对NPI 新产品 SMT 导入流程第4环节）

## 4. 详细操作流程

1. 【准备】查阅「NPI 新产品 SMT 导入流程」适用版本 Rev.12，确认与当前 SMT 产线工艺路线 industry-smt-034 一致
2. 【数据】从 MES/ERP 导出与 NPI、导入、试产 相关数据：订单 147 单、在制 37 批、库存周转 5 天
3. 【首件】按 SMT 电子制造 WI 完成 NPI 新产品 SMT 导入流程 首件，实测 NPI=97%，记录于批次卡
4. 【监控】导入 控制图 UCL=99% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0947，PLANNER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 034-947 输出 工程管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 NPI 检测数据，写入追溯链
9. 【复盘】班后会评审 NPI 新产品 SMT 导入流程 执行偏差 2 项，更新 RAG 标签：NPI、导入、试产
10. 【改进】将案例 industry-smt-034 纳入 工程管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| NPI 合格率 | ≥94% | 工程管理 KPI |
| 导入 周期 | 57 s/件 | 节拍统计 |
| NPI 新产 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 工程管理 企业内控标准 Rev.3

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-034 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| NPI 新产品 SMT 导入流程 超差 | NPI 参数漂移 | 按 WI 调机并加严 NPI 抽检至 AQL 0.65 |
| 工程管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| NPI、导入、试产 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 947 |

## 9. 术语解释

- **NPI**：工程管理领域核心度量
- **导入**：NPI 新产品 SMT 导入流程 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -034

## 10. 现场检查清单

- [ ] NPI 新产品 SMT 导入流程 适用版本已张贴
- [ ] NPI/导入/试产 仪器校准有效
- [ ] 工程管理 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-034】SMT 电子制造产线在实施「NPI 新产品 SMT 导入流程」后，NPI 相关不良从 8.7% 降至 2.2%，AI 计划员与AI 排程员 协同缩短处置时间 42 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 42%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 NPI 新产品 SMT 导入流程 中第 1 阶段：执行跟踪（NPI） |
| AI 排程员 | 负责 NPI 新产品 SMT 导入流程 中第 2 阶段：数据分析（导入） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`NPI` `导入` `试产` `NPI 新产品 `
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-116"></a>

## 文件 116 : `packages/database/knowledge-base/industry/doc-035-湿敏元件MSD管理与.md`

```markdown
# 湿敏元件 MSD 管理与烘烤规范

> **文档编号**：`industry-smt-035`  
> **行业**：SMT 电子制造 · **分类**：物料管理 · **标签**：MSD、烘烤、防潮  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员、AI 计划员

---

## 1. 文档概述

《湿敏元件 MSD 管理与烘烤规范》是 SMT 电子制造 领域 **物料管理** 的专项作业文件（编号 industry-smt-035）。全文围绕 MSD、烘烤、防潮 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 湿敏元件 MSD 管理与烘烤规范 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 MSD 环节常出现与 烘烤 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 湿敏元件 MSD 管理与烘烤规范 在 物料管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- BOM 维护（针对湿敏元件 MSD 管理与烘烤规范第1环节）
- 发料规则（针对湿敏元件 MSD 管理与烘烤规范第2环节）
- 超领控制（针对湿敏元件 MSD 管理与烘烤规范第3环节）
- 盘点差异（针对湿敏元件 MSD 管理与烘烤规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「湿敏元件 MSD 管理与烘烤规范」适用版本 Rev.12，确认与当前 SMT 产线工艺路线 industry-smt-035 一致
2. 【数据】从 MES/ERP 导出与 MSD、烘烤、防潮 相关数据：订单 121 单、在制 31 批、库存周转 4 天
3. 【首件】按 SMT 电子制造 WI 完成 湿敏元件 MSD 管理与烘烤规范 首件，实测 MSD=121%，记录于批次卡
4. 【监控】烘烤 控制图 UCL=99% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0071，QUALITY Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 035-71 输出 物料管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 MSD 检测数据，写入追溯链
9. 【复盘】班后会评审 湿敏元件 MSD 管理与烘烤规范 执行偏差 1 项，更新 RAG 标签：MSD、烘烤、防潮
10. 【改进】将案例 industry-smt-035 纳入 物料管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| MSD 合格率 | ≥93% | 物料管理 KPI |
| 烘烤 周期 | 31 s/件 | 节拍统计 |
| 湿敏元件 M 一次通过率 | ≥89% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 物料管理 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-035 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 湿敏元件 MSD 管理与烘烤规范 超差 | MSD 参数漂移 | 按 WI 调机并加严 MSD 抽检至 AQL 0.65 |
| 物料管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| MSD、烘烤、防潮 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 71 |

## 9. 术语解释

- **MSD**：物料管理领域核心度量
- **烘烤**：湿敏元件 MSD 管理与烘烤规范 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -035

## 10. 现场检查清单

- [ ] 湿敏元件 MSD 管理与烘烤规范 适用版本已张贴
- [ ] MSD/烘烤/防潮 仪器校准有效
- [ ] 物料管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-035】SMT 电子制造产线在实施「湿敏元件 MSD 管理与烘烤规范」后，MSD 相关不良从 12.1% 降至 2.8%，AI 质量员与AI 计划员 协同缩短处置时间 46 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 41%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 湿敏元件 MSD 管理与烘烤规范 中第 1 阶段：规则校验（MSD） |
| AI 计划员 | 负责 湿敏元件 MSD 管理与烘烤规范 中第 2 阶段：方案生成（烘烤） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`MSD` `烘烤` `防潮` `湿敏元件 MSD`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-117"></a>

## 文件 117 : `packages/database/knowledge-base/industry/doc-036-钢网清洁张力与寿命管理.md`

```markdown
# 钢网清洁、张力与寿命管理

> **文档编号**：`industry-smt-036`  
> **行业**：SMT 电子制造 · **分类**：设备管理 · **标签**：钢网、清洁、张力  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员、AI 质量员

---

## 1. 文档概述

《钢网清洁、张力与寿命管理》是 SMT 电子制造 领域 **设备管理** 的专项作业文件（编号 industry-smt-036）。全文围绕 钢网、清洁、张力 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 钢网清洁、张力与寿命管理 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 钢网 环节常出现与 清洁 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 钢网清洁、张力与寿命管理 在 设备管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- PM 计划（针对钢网清洁、张力与寿命管理第1环节）
- 备件策略（针对钢网清洁、张力与寿命管理第2环节）
- OEE 统计（针对钢网清洁、张力与寿命管理第3环节）
- 故障代码（针对钢网清洁、张力与寿命管理第4环节）

## 4. 详细操作流程

1. 【准备】查阅「钢网清洁、张力与寿命管理」适用版本 Rev.8，确认与当前 SMT 产线工艺路线 industry-smt-036 一致
2. 【数据】从 MES/ERP 导出与 钢网、清洁、张力 相关数据：订单 105 单、在制 45 批、库存周转 9 天
3. 【首件】按 SMT 电子制造 WI 完成 钢网清洁、张力与寿命管理 首件，实测 钢网=105%，记录于批次卡
4. 【监控】清洁 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0055，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 036-55 输出 设备管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 钢网 检测数据，写入追溯链
9. 【复盘】班后会评审 钢网清洁、张力与寿命管理 执行偏差 0 项，更新 RAG 标签：钢网、清洁、张力
10. 【改进】将案例 industry-smt-036 纳入 设备管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 钢网 合格率 | ≥98% | 设备管理 KPI |
| 清洁 周期 | 15 s/件 | 节拍统计 |
| 钢网清洁、张 一次通过率 | ≥93% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 设备管理 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-036 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 钢网清洁、张力与寿命管理 超差 | 钢网 参数漂移 | 按 WI 调机并加严 钢网 抽检至 AQL 0.65 |
| 设备管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 钢网、清洁、张力 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 55 |

## 9. 术语解释

- **钢网**：设备管理领域核心度量
- **清洁**：钢网清洁、张力与寿命管理 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -036

## 10. 现场检查清单

- [ ] 钢网清洁、张力与寿命管理 适用版本已张贴
- [ ] 钢网/清洁/张力 仪器校准有效
- [ ] 设备管理 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-036】SMT 电子制造产线在实施「钢网清洁、张力与寿命管理」后，钢网 相关不良从 12.5% 降至 1.1%，AI 排程员与AI 质量员 协同缩短处置时间 30 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 25%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 钢网清洁、张力与寿命管理 中第 1 阶段：执行跟踪（钢网） |
| AI 质量员 | 负责 钢网清洁、张力与寿命管理 中第 2 阶段：数据分析（清洁） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`钢网` `清洁` `张力` `钢网清洁、张力与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-118"></a>

## 文件 118 : `packages/database/knowledge-base/industry/doc-037-SMT产线OEE分.md`

```markdown
# SMT 产线 OEE 分析与改善案例

> **文档编号**：`industry-smt-037`  
> **行业**：SMT 电子制造 · **分类**：数据分析 · **标签**：OEE、停机、改善  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 数据员

---

## 1. 文档概述

《SMT 产线 OEE 分析与改善案例》是 SMT 电子制造 领域 **数据分析** 的专项作业文件（编号 industry-smt-037）。全文围绕 OEE、停机、改善 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线 OEE 分析与改善案例 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 OEE 环节常出现与 停机 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 产线 OEE 分析与改善案例 在 数据分析 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 指标定义（针对产线 OEE 分析与改善案例第1环节）
- 报表自动化（针对产线 OEE 分析与改善案例第2环节）
- 异常预警（针对产线 OEE 分析与改善案例第3环节）
- 决策支持（针对产线 OEE 分析与改善案例第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 产线 OEE 分析与改善案例」适用版本 Rev.9，确认与当前 SMT 产线工艺路线 industry-smt-037 一致
2. 【数据】从 MES/ERP 导出与 OEE、停机、改善 相关数据：订单 102 单、在制 22 批、库存周转 8 天
3. 【首件】按 SMT 电子制造 WI 完成 产线 OEE 分析与改善案例 首件，实测 OEE=102%，记录于批次卡
4. 【监控】停机 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0152，DATA_ANALYST Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 037-152 输出 数据分析 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 OEE 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 产线 OEE 分析与改善案例 执行偏差 2 项，更新 RAG 标签：OEE、停机、改善
10. 【改进】将案例 industry-smt-037 纳入 数据分析 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| OEE 合格率 | ≥97% | 数据分析 KPI |
| 停机 周期 | 12 s/件 | 节拍统计 |
| 产线 OEE 一次通过率 | ≥90% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 数据分析 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-037 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 产线 OEE 分析与改善案例 超差 | OEE 参数漂移 | 按 WI 调机并加严 OEE 抽检至 AQL 0.65 |
| 数据分析 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| OEE、停机、改善 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 152 |

## 9. 术语解释

- **OEE**：数据分析领域核心度量
- **停机**：产线 OEE 分析与改善案例 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -037

## 10. 现场检查清单

- [ ] SMT 产线 OEE 分析与改善案例 适用版本已张贴
- [ ] OEE/停机/改善 仪器校准有效
- [ ] 数据分析 首件已签字
- [ ] Agent DATA_ANALYST 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-037】SMT 电子制造产线在实施「SMT 产线 OEE 分析与改善案例」后，OEE 相关不良从 5.2% 降至 2.8%，AI 数据员 协同缩短处置时间 47 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 数据员 | 负责 SMT 产线 OEE 分析与改善案例 中第 1 阶段：执行跟踪（OEE） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`OEE` `停机` `改善` `SMT 产线 O`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-119"></a>

## 文件 119 : `packages/database/knowledge-base/industry/doc-038-SMT批次追溯与条码关.md`

```markdown
# SMT 批次追溯与条码关联规范

> **文档编号**：`industry-smt-038`  
> **行业**：SMT 电子制造 · **分类**：质量管理 · **标签**：追溯、条码、批次  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《SMT 批次追溯与条码关联规范》是 SMT 电子制造 领域 **质量管理** 的专项作业文件（编号 industry-smt-038）。全文围绕 追溯、条码、批次 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 批次追溯与条码关联规范 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 追溯 环节常出现与 条码 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 批次追溯与条码关联规范 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 追溯体系（针对批次追溯与条码关联规范第1环节）
- SPC（针对批次追溯与条码关联规范第2环节）
- FMEA（针对批次追溯与条码关联规范第3环节）
- 8D 改善（针对批次追溯与条码关联规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 批次追溯与条码关联规范」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-038 一致
2. 【数据】从 MES/ERP 导出与 追溯、条码、批次 相关数据：订单 116 单、在制 26 批、库存周转 6 天
3. 【首件】按 SMT 电子制造 WI 完成 批次追溯与条码关联规范 首件，实测 追溯=116%，记录于批次卡
4. 【监控】条码 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0066，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 038-66 输出 质量管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 追溯 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 批次追溯与条码关联规范 执行偏差 1 项，更新 RAG 标签：追溯、条码、批次
10. 【改进】将案例 industry-smt-038 纳入 质量管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 追溯 合格率 | ≥95% | 质量管理 KPI |
| 条码 周期 | 26 s/件 | 节拍统计 |
| 批次追溯与条 一次通过率 | ≥94% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 质量管理 企业内控标准 Rev.4

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-038 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 批次追溯与条码关联规范 超差 | 追溯 参数漂移 | 按 WI 调机并加严 追溯 抽检至 AQL 0.65 |
| 质量管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 追溯、条码、批次 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 66 |

## 9. 术语解释

- **追溯**：质量管理领域核心度量
- **条码**：批次追溯与条码关联规范 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -038

## 10. 现场检查清单

- [ ] SMT 批次追溯与条码关联规范 适用版本已张贴
- [ ] 追溯/条码/批次 仪器校准有效
- [ ] 质量管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-038】SMT 电子制造产线在实施「SMT 批次追溯与条码关联规范」后，追溯 相关不良从 7.6% 降至 0.3%，AI 质量员与AI 数据员 协同缩短处置时间 41 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 36%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 SMT 批次追溯与条码关联规范 中第 1 阶段：规则校验（追溯） |
| AI 数据员 | 负责 SMT 批次追溯与条码关联规范 中第 2 阶段：方案生成（条码） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`追溯` `条码` `批次` `SMT 批次追溯`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-120"></a>

## 文件 120 : `packages/database/knowledge-base/industry/doc-039-SMT首件检验与过程确.md`

```markdown
# SMT 首件检验与过程确认流程

> **文档编号**：`industry-smt-039`  
> **行业**：SMT 电子制造 · **分类**：质量检验 · **标签**：首件、FAI、确认  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《SMT 首件检验与过程确认流程》是 SMT 电子制造 领域 **质量检验** 的专项作业文件（编号 industry-smt-039）。全文围绕 首件、FAI、确认 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 首件检验与过程确认流程 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 首件 环节常出现与 FAI 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 首件检验与过程确认流程 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- IQC/IPQC/OQC（针对首件检验与过程确认流程第1环节）
- 抽样方案（针对首件检验与过程确认流程第2环节）
- 判定准则（针对首件检验与过程确认流程第3环节）
- NCR 闭环（针对首件检验与过程确认流程第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 首件检验与过程确认流程」适用版本 Rev.11，确认与当前 SMT 产线工艺路线 industry-smt-039 一致
2. 【数据】从 MES/ERP 导出与 首件、FAI、确认 相关数据：订单 100 单、在制 30 批、库存周转 7 天
3. 【首件】按 SMT 电子制造 WI 完成 首件检验与过程确认流程 首件，实测 首件=100%，记录于批次卡
4. 【监控】FAI 控制图 UCL=98% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0550，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 039-550 输出 质量检验 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 首件 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 首件检验与过程确认流程 执行偏差 0 项，更新 RAG 标签：首件、FAI、确认
10. 【改进】将案例 industry-smt-039 纳入 质量检验 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 首件 合格率 | ≥96% | 质量检验 KPI |
| FAI 周期 | 10 s/件 | 节拍统计 |
| 首件检验与过 一次通过率 | ≥88% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 质量检验 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 三坐标/CMM
- 光学测量仪
- SPC 软件
- AQL 抽样表
- 文档 industry-smt-039 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 首件检验与过程确认流程 超差 | 首件 参数漂移 | 按 WI 调机并加严 首件 抽检至 AQL 0.65 |
| 质量检验 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 首件、FAI、确认 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 550 |

## 9. 术语解释

- **首件**：质量检验领域核心度量
- **FAI**：首件检验与过程确认流程 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -039

## 10. 现场检查清单

- [ ] SMT 首件检验与过程确认流程 适用版本已张贴
- [ ] 首件/FAI/确认 仪器校准有效
- [ ] 质量检验 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-039】SMT 电子制造产线在实施「SMT 首件检验与过程确认流程」后，首件 相关不良从 11.0% 降至 1.1%，AI 质量员 协同缩短处置时间 45 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 20%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 SMT 首件检验与过程确认流程 中第 1 阶段：数据分析（首件） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`首件` `FAI` `确认` `SMT 首件检验`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-121"></a>

## 文件 121 : `packages/database/knowledge-base/industry/doc-040-SMT车间ESD静.md`

```markdown
# SMT 车间 ESD 静电防护管理

> **文档编号**：`industry-smt-040`  
> **行业**：SMT 电子制造 · **分类**：合规管理 · **标签**：ESD、静电、防护  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《SMT 车间 ESD 静电防护管理》是 SMT 电子制造 领域 **合规管理** 的专项作业文件（编号 industry-smt-040）。全文围绕 ESD、静电、防护 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 车间 ESD 静电防护管理 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 ESD 环节常出现与 静电 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 车间 ESD 静电防护管理 在 合规管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 法规识别（针对车间 ESD 静电防护管理第1环节）
- 审核准备（针对车间 ESD 静电防护管理第2环节）
- 证书维护（针对车间 ESD 静电防护管理第3环节）
- 内审整改（针对车间 ESD 静电防护管理第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 车间 ESD 静电防护管理」适用版本 Rev.1，确认与当前 SMT 产线工艺路线 industry-smt-040 一致
2. 【数据】从 MES/ERP 导出与 ESD、静电、防护 相关数据：订单 132 单、在制 32 批、库存周转 7 天
3. 【首件】按 SMT 电子制造 WI 完成 车间 ESD 静电防护管理 首件，实测 ESD=82%，记录于批次卡
4. 【监控】静电 控制图 UCL=88% / LCL=76%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0732，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 040-732 输出 合规管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 ESD 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 车间 ESD 静电防护管理 执行偏差 2 项，更新 RAG 标签：ESD、静电、防护
10. 【改进】将案例 industry-smt-040 纳入 合规管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| ESD 合格率 | ≥96% | 合规管理 KPI |
| 静电 周期 | 42 s/件 | 节拍统计 |
| 车间 ESD 一次通过率 | ≥90% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 合规管理 企业内控标准 Rev.4

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-040 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 车间 ESD 静电防护管理 超差 | ESD 参数漂移 | 按 WI 调机并加严 ESD 抽检至 AQL 0.65 |
| 合规管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| ESD、静电、防护 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 732 |

## 9. 术语解释

- **ESD**：合规管理领域核心度量
- **静电**：车间 ESD 静电防护管理 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -040

## 10. 现场检查清单

- [ ] SMT 车间 ESD 静电防护管理 适用版本已张贴
- [ ] ESD/静电/防护 仪器校准有效
- [ ] 合规管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-040】SMT 电子制造产线在实施「SMT 车间 ESD 静电防护管理」后，ESD 相关不良从 9.2% 降至 0.3%，AI 质量员 协同缩短处置时间 27 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 SMT 车间 ESD 静电防护管理 中第 1 阶段：执行跟踪（ESD） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`ESD` `静电` `防护` `SMT 车间 E`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-122"></a>

## 文件 122 : `packages/database/knowledge-base/industry/doc-041-高速贴片程序优化与贴装率.md`

```markdown
# 高速贴片程序优化与贴装率提升

> **文档编号**：`industry-smt-041`  
> **行业**：SMT 电子制造 · **分类**：工艺标准 · **标签**：贴装、程序、CT  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员、AI 数据员

---

## 1. 文档概述

《高速贴片程序优化与贴装率提升》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-041）。全文围绕 贴装、程序、CT 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 高速贴片程序优化与贴装率提升 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 贴装 环节常出现与 程序 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 高速贴片程序优化与贴装率提升 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 过程控制（针对高速贴片程序优化与贴装率提升第1环节）
- 数据记录（针对高速贴片程序优化与贴装率提升第2环节）
- 异常升级（针对高速贴片程序优化与贴装率提升第3环节）
- 持续改进（针对高速贴片程序优化与贴装率提升第4环节）

## 4. 详细操作流程

1. 【准备】查阅「高速贴片程序优化与贴装率提升」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-041 一致
2. 【数据】从 MES/ERP 导出与 贴装、程序、CT 相关数据：订单 130 单、在制 20 批、库存周转 5 天
3. 【首件】按 SMT 电子制造 WI 完成 高速贴片程序优化与贴装率提升 首件，实测 贴装=80%，记录于批次卡
4. 【监控】程序 控制图 UCL=94% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0030，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 041-30 输出 工艺标准 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 贴装 检测数据，写入追溯链
9. 【复盘】班后会评审 高速贴片程序优化与贴装率提升 执行偏差 0 项，更新 RAG 标签：贴装、程序、CT
10. 【改进】将案例 industry-smt-041 纳入 工艺标准 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 贴装 合格率 | ≥94% | 工艺标准 KPI |
| 程序 周期 | 40 s/件 | 节拍统计 |
| 高速贴片程序 一次通过率 | ≥88% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 工艺标准 企业内控标准 Rev.4

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-041 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 高速贴片程序优化与贴装率提升 超差 | 贴装 参数漂移 | 按 WI 调机并加严 贴装 抽检至 AQL 0.65 |
| 工艺标准 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 贴装、程序、CT 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 30 |

## 9. 术语解释

- **贴装**：工艺标准领域核心度量
- **程序**：高速贴片程序优化与贴装率提升 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -041

## 10. 现场检查清单

- [ ] 高速贴片程序优化与贴装率提升 适用版本已张贴
- [ ] 贴装/程序/CT 仪器校准有效
- [ ] 工艺标准 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-041】SMT 电子制造产线在实施「高速贴片程序优化与贴装率提升」后，贴装 相关不良从 11.0% 降至 0.3%，AI 排程员与AI 数据员 协同缩短处置时间 45 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 25%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 高速贴片程序优化与贴装率提升 中第 1 阶段：方案生成（贴装） |
| AI 数据员 | 负责 高速贴片程序优化与贴装率提升 中第 2 阶段：执行跟踪（程序） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`贴装` `程序` `CT` `高速贴片程序优化`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-123"></a>

## 文件 123 : `packages/database/knowledge-base/industry/doc-042-SMT错料预防与料站复.md`

```markdown
# SMT 错料预防与料站复核机制

> **文档编号**：`industry-smt-042`  
> **行业**：SMT 电子制造 · **分类**：质量管理 · **标签**：错料、料站、复核  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员、AI 调度员

---

## 1. 文档概述

《SMT 错料预防与料站复核机制》是 SMT 电子制造 领域 **质量管理** 的专项作业文件（编号 industry-smt-042）。全文围绕 错料、料站、复核 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 错料预防与料站复核机制 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 错料 环节常出现与 料站 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 错料预防与料站复核机制 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 追溯体系（针对错料预防与料站复核机制第1环节）
- SPC（针对错料预防与料站复核机制第2环节）
- FMEA（针对错料预防与料站复核机制第3环节）
- 8D 改善（针对错料预防与料站复核机制第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 错料预防与料站复核机制」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-042 一致
2. 【数据】从 MES/ERP 导出与 错料、料站、复核 相关数据：订单 134 单、在制 34 批、库存周转 9 天
3. 【首件】按 SMT 电子制造 WI 完成 错料预防与料站复核机制 首件，实测 错料=84%，记录于批次卡
4. 【监控】料站 控制图 UCL=90% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0734，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 042-734 输出 质量管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 错料 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 错料预防与料站复核机制 执行偏差 4 项，更新 RAG 标签：错料、料站、复核
10. 【改进】将案例 industry-smt-042 纳入 质量管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 错料 合格率 | ≥98% | 质量管理 KPI |
| 料站 周期 | 44 s/件 | 节拍统计 |
| 错料预防与料 一次通过率 | ≥92% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 质量管理 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-042 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 错料预防与料站复核机制 超差 | 错料 参数漂移 | 按 WI 调机并加严 错料 抽检至 AQL 0.65 |
| 质量管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 错料、料站、复核 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 734 |

## 9. 术语解释

- **错料**：质量管理领域核心度量
- **料站**：错料预防与料站复核机制 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -042

## 10. 现场检查清单

- [ ] SMT 错料预防与料站复核机制 适用版本已张贴
- [ ] 错料/料站/复核 仪器校准有效
- [ ] 质量管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-042】SMT 电子制造产线在实施「SMT 错料预防与料站复核机制」后，错料 相关不良从 11.4% 降至 2.5%，AI 质量员与AI 调度员 协同缩短处置时间 29 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 SMT 错料预防与料站复核机制 中第 1 阶段：规则校验（错料） |
| AI 调度员 | 负责 SMT 错料预防与料站复核机制 中第 2 阶段：方案生成（料站） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`错料` `料站` `复核` `SMT 错料预防`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-124"></a>

## 文件 124 : `packages/database/knowledge-base/industry/doc-043-SMT产线平衡与瓶颈工.md`

```markdown
# SMT 产线平衡与瓶颈工序识别

> **文档编号**：`industry-smt-043`  
> **行业**：SMT 电子制造 · **分类**：排程优化 · **标签**：线平衡、瓶颈、节拍  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员、AI 计划员

---

## 1. 文档概述

《SMT 产线平衡与瓶颈工序识别》是 SMT 电子制造 领域 **排程优化** 的专项作业文件（编号 industry-smt-043）。全文围绕 线平衡、瓶颈、节拍 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线平衡与瓶颈工序识别 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 线平衡 环节常出现与 瓶颈 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 产线平衡与瓶颈工序识别 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 产线排程（针对产线平衡与瓶颈工序识别第1环节）
- 换线优化（针对产线平衡与瓶颈工序识别第2环节）
- 插单规则（针对产线平衡与瓶颈工序识别第3环节）
- 甘特发布（针对产线平衡与瓶颈工序识别第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 产线平衡与瓶颈工序识别」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-043 一致
2. 【数据】从 MES/ERP 导出与 线平衡、瓶颈、节拍 相关数据：订单 140 单、在制 40 批、库存周转 4 天
3. 【首件】按 SMT 电子制造 WI 完成 产线平衡与瓶颈工序识别 首件，实测 线平衡=140%，记录于批次卡
4. 【监控】瓶颈 控制图 UCL=90% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0890，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 043-890 输出 排程优化 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 线平衡 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 产线平衡与瓶颈工序识别 执行偏差 0 项，更新 RAG 标签：线平衡、瓶颈、节拍
10. 【改进】将案例 industry-smt-043 纳入 排程优化 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 线平衡 合格率 | ≥93% | 排程优化 KPI |
| 瓶颈 周期 | 50 s/件 | 节拍统计 |
| 产线平衡与瓶 一次通过率 | ≥88% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 排程优化 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 甘特排程软件
- 换线计时器
- MES 工单
- Andon 看板
- 文档 industry-smt-043 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 产线平衡与瓶颈工序识别 超差 | 线平衡 参数漂移 | 按 WI 调机并加严 线平衡 抽检至 AQL 0.65 |
| 排程优化 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 线平衡、瓶颈、节拍 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 890 |

## 9. 术语解释

- **线平衡**：排程优化领域核心度量
- **瓶颈**：产线平衡与瓶颈工序识别 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -043

## 10. 现场检查清单

- [ ] SMT 产线平衡与瓶颈工序识别 适用版本已张贴
- [ ] 线平衡/瓶颈/节拍 仪器校准有效
- [ ] 排程优化 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-043】SMT 电子制造产线在实施「SMT 产线平衡与瓶颈工序识别」后，线平衡 相关不良从 7.0% 降至 2.8%，AI 排程员与AI 计划员 协同缩短处置时间 25 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 35%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 SMT 产线平衡与瓶颈工序识别 中第 1 阶段：方案生成（线平衡） |
| AI 计划员 | 负责 SMT 产线平衡与瓶颈工序识别 中第 2 阶段：执行跟踪（瓶颈） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`线平衡` `瓶颈` `节拍` `SMT 产线平衡`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-125"></a>

## 文件 125 : `packages/database/knowledge-base/industry/doc-044-SMT夜班排班与人员技.md`

```markdown
# SMT 夜班排班与人员技能矩阵

> **文档编号**：`industry-smt-044`  
> **行业**：SMT 电子制造 · **分类**：人员管理 · **标签**：排班、技能、矩阵  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员、AI 调度员

---

## 1. 文档概述

《SMT 夜班排班与人员技能矩阵》是 SMT 电子制造 领域 **人员管理** 的专项作业文件（编号 industry-smt-044）。全文围绕 排班、技能、矩阵 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 夜班排班与人员技能矩阵 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 排班 环节常出现与 技能 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 夜班排班与人员技能矩阵 在 人员管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 技能矩阵（针对夜班排班与人员技能矩阵第1环节）
- 排班规则（针对夜班排班与人员技能矩阵第2环节）
- 培训记录（针对夜班排班与人员技能矩阵第3环节）
- 上岗授权（针对夜班排班与人员技能矩阵第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 夜班排班与人员技能矩阵」适用版本 Rev.2，确认与当前 SMT 产线工艺路线 industry-smt-044 一致
2. 【数据】从 MES/ERP 导出与 排班、技能、矩阵 相关数据：订单 137 单、在制 27 批、库存周转 5 天
3. 【首件】按 SMT 电子制造 WI 完成 夜班排班与人员技能矩阵 首件，实测 排班=87%，记录于批次卡
4. 【监控】技能 控制图 UCL=89% / LCL=77%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0037，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 044-37 输出 人员管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 排班 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 夜班排班与人员技能矩阵 执行偏差 2 项，更新 RAG 标签：排班、技能、矩阵
10. 【改进】将案例 industry-smt-044 纳入 人员管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 排班 合格率 | ≥94% | 人员管理 KPI |
| 技能 周期 | 47 s/件 | 节拍统计 |
| 夜班排班与人 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 人员管理 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-044 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 夜班排班与人员技能矩阵 超差 | 排班 参数漂移 | 按 WI 调机并加严 排班 抽检至 AQL 0.65 |
| 人员管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 排班、技能、矩阵 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 37 |

## 9. 术语解释

- **排班**：人员管理领域核心度量
- **技能**：夜班排班与人员技能矩阵 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -044

## 10. 现场检查清单

- [ ] SMT 夜班排班与人员技能矩阵 适用版本已张贴
- [ ] 排班/技能/矩阵 仪器校准有效
- [ ] 人员管理 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-044】SMT 电子制造产线在实施「SMT 夜班排班与人员技能矩阵」后，排班 相关不良从 10.7% 降至 1.1%，AI 排程员与AI 调度员 协同缩短处置时间 52 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 32%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 SMT 夜班排班与人员技能矩阵 中第 1 阶段：规则校验（排班） |
| AI 调度员 | 负责 SMT 夜班排班与人员技能矩阵 中第 2 阶段：方案生成（技能） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`排班` `技能` `矩阵` `SMT 夜班排班`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-126"></a>

## 文件 126 : `packages/database/knowledge-base/industry/doc-045-贴片机PM保养计划与.md`

```markdown
# 贴片机 PM 保养计划与备件管理

> **文档编号**：`industry-smt-045`  
> **行业**：SMT 电子制造 · **分类**：设备管理 · **标签**：PM、保养、备件  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员

---

## 1. 文档概述

《贴片机 PM 保养计划与备件管理》是 SMT 电子制造 领域 **设备管理** 的专项作业文件（编号 industry-smt-045）。全文围绕 PM、保养、备件 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 贴片机 PM 保养计划与备件管理 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 PM 环节常出现与 保养 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 贴片机 PM 保养计划与备件管理 在 设备管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- PM 计划（针对贴片机 PM 保养计划与备件管理第1环节）
- 备件策略（针对贴片机 PM 保养计划与备件管理第2环节）
- OEE 统计（针对贴片机 PM 保养计划与备件管理第3环节）
- 故障代码（针对贴片机 PM 保养计划与备件管理第4环节）

## 4. 详细操作流程

1. 【准备】查阅「贴片机 PM 保养计划与备件管理」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-045 一致
2. 【数据】从 MES/ERP 导出与 PM、保养、备件 相关数据：订单 126 单、在制 26 批、库存周转 9 天
3. 【首件】按 SMT 电子制造 WI 完成 贴片机 PM 保养计划与备件管理 首件，实测 PM=76%，记录于批次卡
4. 【监控】保养 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0426，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 045-426 输出 设备管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 PM 检测数据，写入追溯链
9. 【复盘】班后会评审 贴片机 PM 保养计划与备件管理 执行偏差 1 项，更新 RAG 标签：PM、保养、备件
10. 【改进】将案例 industry-smt-045 纳入 设备管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| PM 合格率 | ≥98% | 设备管理 KPI |
| 保养 周期 | 36 s/件 | 节拍统计 |
| 贴片机 PM 一次通过率 | ≥94% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 设备管理 企业内控标准 Rev.4

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-045 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 贴片机 PM 保养计划与备件管理 超差 | PM 参数漂移 | 按 WI 调机并加严 PM 抽检至 AQL 0.65 |
| 设备管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| PM、保养、备件 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 426 |

## 9. 术语解释

- **PM**：设备管理领域核心度量
- **保养**：贴片机 PM 保养计划与备件管理 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -045

## 10. 现场检查清单

- [ ] 贴片机 PM 保养计划与备件管理 适用版本已张贴
- [ ] PM/保养/备件 仪器校准有效
- [ ] 设备管理 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-045】SMT 电子制造产线在实施「贴片机 PM 保养计划与备件管理」后，PM 相关不良从 7.6% 降至 0.3%，AI 排程员 协同缩短处置时间 41 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 21%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 贴片机 PM 保养计划与备件管理 中第 1 阶段：数据分析（PM） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`PM` `保养` `备件` `贴片机 PM 保`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-127"></a>

## 文件 127 : `packages/database/knowledge-base/industry/doc-046-020101005微.md`

```markdown
# 0201/01005 微元件贴装工艺指南

> **文档编号**：`industry-smt-046`  
> **行业**：SMT 电子制造 · **分类**：工艺标准 · **标签**：0201、微元件、贴装  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员、AI 质量员

---

## 1. 文档概述

《0201/01005 微元件贴装工艺指南》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-046）。全文围绕 0201、微元件、贴装 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 0201/01005 微元件贴装工艺指南 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 0201 环节常出现与 微元件 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 0201/01005 微元件贴装工艺指南 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 过程控制（针对0201/01005 微元件贴装工艺指南第1环节）
- 数据记录（针对0201/01005 微元件贴装工艺指南第2环节）
- 异常升级（针对0201/01005 微元件贴装工艺指南第3环节）
- 持续改进（针对0201/01005 微元件贴装工艺指南第4环节）

## 4. 详细操作流程

1. 【准备】查阅「0201/01005 微元件贴装工艺指南」适用版本 Rev.6，确认与当前 SMT 产线工艺路线 industry-smt-046 一致
2. 【数据】从 MES/ERP 导出与 0201、微元件、贴装 相关数据：订单 133 单、在制 43 批、库存周转 3 天
3. 【首件】按 SMT 电子制造 WI 完成 0201/01005 微元件贴装工艺指南 首件，实测 0201=83%，记录于批次卡
4. 【监控】微元件 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0833，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 046-833 输出 工艺标准 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 0201 检测数据，写入追溯链
9. 【复盘】班后会评审 0201/01005 微元件贴装工艺指南 执行偏差 3 项，更新 RAG 标签：0201、微元件、贴装
10. 【改进】将案例 industry-smt-046 纳入 工艺标准 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 0201 合格率 | ≥92% | 工艺标准 KPI |
| 微元件 周期 | 43 s/件 | 节拍统计 |
| 0201/0 一次通过率 | ≥91% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 工艺标准 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-046 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 0201/01005 微元件贴装工艺指南 超差 | 0201 参数漂移 | 按 WI 调机并加严 0201 抽检至 AQL 0.65 |
| 工艺标准 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 0201、微元件、贴装 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 833 |

## 9. 术语解释

- **0201**：工艺标准领域核心度量
- **微元件**：0201/01005 微元件贴装工艺指南 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -046

## 10. 现场检查清单

- [ ] 0201/01005 微元件贴装工艺指南 适用版本已张贴
- [ ] 0201/微元件/贴装 仪器校准有效
- [ ] 工艺标准 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-046】SMT 电子制造产线在实施「0201/01005 微元件贴装工艺指南」后，0201 相关不良从 6.3% 降至 2.5%，AI 排程员与AI 质量员 协同缩短处置时间 48 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 28%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 0201/01005 微元件贴装工艺指南 中第 1 阶段：规则校验（0201） |
| AI 质量员 | 负责 0201/01005 微元件贴装工艺指南 中第 2 阶段：方案生成（微元件） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`0201` `微元件` `贴装` `0201/010`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-128"></a>

## 文件 128 : `packages/database/knowledge-base/industry/doc-047-BGA返修与XRa.md`

```markdown
# BGA 返修与 X-Ray 检测规范

> **文档编号**：`industry-smt-047`  
> **行业**：SMT 电子制造 · **分类**：维修工艺 · **标签**：BGA、X-Ray、返修  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《BGA 返修与 X-Ray 检测规范》是 SMT 电子制造 领域 **维修工艺** 的专项作业文件（编号 industry-smt-047）。全文围绕 BGA、X-Ray、返修 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 BGA 返修与 X-Ray 检测规范 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 BGA 环节常出现与 X-Ray 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 BGA 返修与 X-Ray 检测规范 在 维修工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 返修授权（针对BGA 返修与 X-Ray 检测规范第1环节）
- BGA 曲线（针对BGA 返修与 X-Ray 检测规范第2环节）
- X-Ray 判定（针对BGA 返修与 X-Ray 检测规范第3环节）
- 二次检验（针对BGA 返修与 X-Ray 检测规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「BGA 返修与 X-Ray 检测规范」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-047 一致
2. 【数据】从 MES/ERP 导出与 BGA、X-Ray、返修 相关数据：订单 146 单、在制 46 批、库存周转 8 天
3. 【首件】按 SMT 电子制造 WI 完成 BGA 返修与 X-Ray 检测规范 首件，实测 BGA=96%，记录于批次卡
4. 【监控】X-Ray 控制图 UCL=90% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0446，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 047-446 输出 维修工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 BGA 检测数据，写入追溯链
9. 【复盘】班后会评审 BGA 返修与 X-Ray 检测规范 执行偏差 1 项，更新 RAG 标签：BGA、X-Ray、返修
10. 【改进】将案例 industry-smt-047 纳入 维修工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| BGA 合格率 | ≥97% | 维修工艺 KPI |
| X-Ray 周期 | 56 s/件 | 节拍统计 |
| BGA 返修 一次通过率 | ≥94% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 维修工艺 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-047 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| BGA 返修与 X-Ray 检测规范 超差 | BGA 参数漂移 | 按 WI 调机并加严 BGA 抽检至 AQL 0.65 |
| 维修工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| BGA、X-Ray、返修 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 446 |

## 9. 术语解释

- **BGA**：维修工艺领域核心度量
- **X-Ray**：BGA 返修与 X-Ray 检测规范 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -047

## 10. 现场检查清单

- [ ] BGA 返修与 X-Ray 检测规范 适用版本已张贴
- [ ] BGA/X-Ray/返修 仪器校准有效
- [ ] 维修工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-047】SMT 电子制造产线在实施「BGA 返修与 X-Ray 检测规范」后，BGA 相关不良从 11.6% 降至 2.5%，AI 质量员 协同缩短处置时间 21 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 41%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 BGA 返修与 X-Ray 检测规范 中第 1 阶段：方案生成（BGA） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`BGA` `X-Ray` `返修` `BGA 返修与 `
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-129"></a>

## 文件 129 : `packages/database/knowledge-base/industry/doc-048-选择性焊接工艺参数手册.md`

```markdown
# 选择性焊接工艺参数手册

> **文档编号**：`industry-smt-048`  
> **行业**：SMT 电子制造 · **分类**：工艺标准 · **标签**：选焊、通孔、参数  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员、AI 质量员

---

## 1. 文档概述

《选择性焊接工艺参数手册》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-048）。全文围绕 选焊、通孔、参数 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 选择性焊接工艺参数手册 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 选焊 环节常出现与 通孔 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 选择性焊接工艺参数手册 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 过程控制（针对选择性焊接工艺参数手册第1环节）
- 数据记录（针对选择性焊接工艺参数手册第2环节）
- 异常升级（针对选择性焊接工艺参数手册第3环节）
- 持续改进（针对选择性焊接工艺参数手册第4环节）

## 4. 详细操作流程

1. 【准备】查阅「选择性焊接工艺参数手册」适用版本 Rev.4，确认与当前 SMT 产线工艺路线 industry-smt-048 一致
2. 【数据】从 MES/ERP 导出与 选焊、通孔、参数 相关数据：订单 103 单、在制 23 批、库存周转 6 天
3. 【首件】按 SMT 电子制造 WI 完成 选择性焊接工艺参数手册 首件，实测 选焊=53%，记录于批次卡
4. 【监控】通孔 控制图 UCL=91% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0003，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 048-3 输出 工艺标准 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 选焊 检测数据，写入追溯链
9. 【复盘】班后会评审 选择性焊接工艺参数手册 执行偏差 3 项，更新 RAG 标签：选焊、通孔、参数
10. 【改进】将案例 industry-smt-048 纳入 工艺标准 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 选焊 合格率 | ≥95% | 工艺标准 KPI |
| 通孔 周期 | 13 s/件 | 节拍统计 |
| 选择性焊接工 一次通过率 | ≥91% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 工艺标准 企业内控标准 Rev.4

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-048 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 选择性焊接工艺参数手册 超差 | 选焊 参数漂移 | 按 WI 调机并加严 选焊 抽检至 AQL 0.65 |
| 工艺标准 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 选焊、通孔、参数 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 3 |

## 9. 术语解释

- **选焊**：工艺标准领域核心度量
- **通孔**：选择性焊接工艺参数手册 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -048

## 10. 现场检查清单

- [ ] 选择性焊接工艺参数手册 适用版本已张贴
- [ ] 选焊/通孔/参数 仪器校准有效
- [ ] 工艺标准 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-048】SMT 电子制造产线在实施「选择性焊接工艺参数手册」后，选焊 相关不良从 8.3% 降至 0.3%，AI 排程员与AI 质量员 协同缩短处置时间 18 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 23%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 选择性焊接工艺参数手册 中第 1 阶段：数据分析（选焊） |
| AI 质量员 | 负责 选择性焊接工艺参数手册 中第 2 阶段：规则校验（通孔） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`选焊` `通孔` `参数` `选择性焊接工艺参`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-130"></a>

## 文件 130 : `packages/database/knowledge-base/industry/doc-049-三防涂覆工艺与IPC.md`

```markdown
# 三防涂覆工艺与 IPC 标准对照

> **文档编号**：`industry-smt-049`  
> **行业**：SMT 电子制造 · **分类**：工艺标准 · **标签**：三防、涂覆、IPC  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《三防涂覆工艺与 IPC 标准对照》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-049）。全文围绕 三防、涂覆、IPC 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 三防涂覆工艺与 IPC 标准对照 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 三防 环节常出现与 涂覆 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 三防涂覆工艺与 IPC 标准对照 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 过程控制（针对三防涂覆工艺与 IPC 标准对照第1环节）
- 数据记录（针对三防涂覆工艺与 IPC 标准对照第2环节）
- 异常升级（针对三防涂覆工艺与 IPC 标准对照第3环节）
- 持续改进（针对三防涂覆工艺与 IPC 标准对照第4环节）

## 4. 详细操作流程

1. 【准备】查阅「三防涂覆工艺与 IPC 标准对照」适用版本 Rev.8，确认与当前 SMT 产线工艺路线 industry-smt-049 一致
2. 【数据】从 MES/ERP 导出与 三防、涂覆、IPC 相关数据：订单 109 单、在制 39 批、库存周转 9 天
3. 【首件】按 SMT 电子制造 WI 完成 三防涂覆工艺与 IPC 标准对照 首件，实测 三防=109%，记录于批次卡
4. 【监控】涂覆 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0559，QUALITY Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 049-559 输出 工艺标准 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 三防 检测数据，写入追溯链
9. 【复盘】班后会评审 三防涂覆工艺与 IPC 标准对照 执行偏差 4 项，更新 RAG 标签：三防、涂覆、IPC
10. 【改进】将案例 industry-smt-049 纳入 工艺标准 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 三防 合格率 | ≥98% | 工艺标准 KPI |
| 涂覆 周期 | 19 s/件 | 节拍统计 |
| 三防涂覆工艺 一次通过率 | ≥97% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 工艺标准 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-049 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 三防涂覆工艺与 IPC 标准对照 超差 | 三防 参数漂移 | 按 WI 调机并加严 三防 抽检至 AQL 0.65 |
| 工艺标准 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 三防、涂覆、IPC 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 559 |

## 9. 术语解释

- **三防**：工艺标准领域核心度量
- **涂覆**：三防涂覆工艺与 IPC 标准对照 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -049

## 10. 现场检查清单

- [ ] 三防涂覆工艺与 IPC 标准对照 适用版本已张贴
- [ ] 三防/涂覆/IPC 仪器校准有效
- [ ] 工艺标准 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-049】SMT 电子制造产线在实施「三防涂覆工艺与 IPC 标准对照」后，三防 相关不良从 12.9% 降至 1.1%，AI 质量员 协同缩短处置时间 54 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 三防涂覆工艺与 IPC 标准对照 中第 1 阶段：数据分析（三防） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`三防` `涂覆` `IPC` `三防涂覆工艺与 `
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-131"></a>

## 文件 131 : `packages/database/knowledge-base/industry/doc-050-ICTFCT测试治具.md`

```markdown
# ICT/FCT 测试治具设计与管理

> **文档编号**：`industry-smt-050`  
> **行业**：SMT 电子制造 · **分类**：测试工艺 · **标签**：ICT、FCT、治具  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 质量员、AI 仿真员

---

## 1. 文档概述

《ICT/FCT 测试治具设计与管理》是 SMT 电子制造 领域 **测试工艺** 的专项作业文件（编号 industry-smt-050）。全文围绕 ICT、FCT、治具 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 ICT/FCT 测试治具设计与管理 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 ICT 环节常出现与 FCT 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 ICT/FCT 测试治具设计与管理 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 测试程序（针对ICT/FCT 测试治具设计与管理第1环节）
- 限值设定（针对ICT/FCT 测试治具设计与管理第2环节）
- 设备校准（针对ICT/FCT 测试治具设计与管理第3环节）
- 数据归档（针对ICT/FCT 测试治具设计与管理第4环节）

## 4. 详细操作流程

1. 【准备】查阅「ICT/FCT 测试治具设计与管理」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-050 一致
2. 【数据】从 MES/ERP 导出与 ICT、FCT、治具 相关数据：订单 116 单、在制 26 批、库存周转 4 天
3. 【首件】按 SMT 电子制造 WI 完成 ICT/FCT 测试治具设计与管理 首件，实测 ICT=116%，记录于批次卡
4. 【监控】FCT 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0666，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 050-666 输出 测试工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 ICT 检测数据，写入追溯链
9. 【复盘】班后会评审 ICT/FCT 测试治具设计与管理 执行偏差 1 项，更新 RAG 标签：ICT、FCT、治具
10. 【改进】将案例 industry-smt-050 纳入 测试工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| ICT 合格率 | ≥93% | 测试工艺 KPI |
| FCT 周期 | 26 s/件 | 节拍统计 |
| ICT/FC 一次通过率 | ≥94% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 测试工艺 企业内控标准 Rev.1

## 7. 设备、系统与工具

- EOL 台架
- FCT 治具
- 数据采集仪
- 校准证书库
- 文档 industry-smt-050 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| ICT/FCT 测试治具设计与管理 超差 | ICT 参数漂移 | 按 WI 调机并加严 ICT 抽检至 AQL 0.65 |
| 测试工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| ICT、FCT、治具 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 666 |

## 9. 术语解释

- **ICT**：测试工艺领域核心度量
- **FCT**：ICT/FCT 测试治具设计与管理 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -050

## 10. 现场检查清单

- [ ] ICT/FCT 测试治具设计与管理 适用版本已张贴
- [ ] ICT/FCT/治具 仪器校准有效
- [ ] 测试工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-050】SMT 电子制造产线在实施「ICT/FCT 测试治具设计与管理」后，ICT 相关不良从 7.6% 降至 0.0%，AI 质量员与AI 仿真员 协同缩短处置时间 41 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 36%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 ICT/FCT 测试治具设计与管理 中第 1 阶段：执行跟踪（ICT） |
| AI 仿真员 | 负责 ICT/FCT 测试治具设计与管理 中第 2 阶段：数据分析（FCT） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`ICT` `FCT` `治具` `ICT/FCT `
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-132"></a>

## 文件 132 : `packages/database/knowledge-base/industry/doc-051-SMT良率分析与缺陷.md`

```markdown
# SMT 良率分析与缺陷 Pareto 方法

> **文档编号**：`industry-smt-051`  
> **行业**：SMT 电子制造 · **分类**：数据分析 · **标签**：良率、Pareto、缺陷  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 数据员、AI 质量员

---

## 1. 文档概述

《SMT 良率分析与缺陷 Pareto 方法》是 SMT 电子制造 领域 **数据分析** 的专项作业文件（编号 industry-smt-051）。全文围绕 良率、Pareto、缺陷 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 良率分析与缺陷 Pareto 方法 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 良率 环节常出现与 Pareto 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 良率分析与缺陷 Pareto 方法 在 数据分析 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 指标定义（针对良率分析与缺陷 Pareto 方法第1环节）
- 报表自动化（针对良率分析与缺陷 Pareto 方法第2环节）
- 异常预警（针对良率分析与缺陷 Pareto 方法第3环节）
- 决策支持（针对良率分析与缺陷 Pareto 方法第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 良率分析与缺陷 Pareto 方法」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-051 一致
2. 【数据】从 MES/ERP 导出与 良率、Pareto、缺陷 相关数据：订单 138 单、在制 38 批、库存周转 6 天
3. 【首件】按 SMT 电子制造 WI 完成 良率分析与缺陷 Pareto 方法 首件，实测 良率=88%，记录于批次卡
4. 【监控】Pareto 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0738，DATA_ANALYST Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 051-738 输出 数据分析 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 良率 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 良率分析与缺陷 Pareto 方法 执行偏差 3 项，更新 RAG 标签：良率、Pareto、缺陷
10. 【改进】将案例 industry-smt-051 纳入 数据分析 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 良率 合格率 | ≥95% | 数据分析 KPI |
| Pareto 周期 | 48 s/件 | 节拍统计 |
| 良率分析与缺 一次通过率 | ≥96% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 数据分析 企业内控标准 Rev.1

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-051 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 良率分析与缺陷 Pareto 方法 超差 | 良率 参数漂移 | 按 WI 调机并加严 良率 抽检至 AQL 0.65 |
| 数据分析 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 良率、Pareto、缺陷 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 738 |

## 9. 术语解释

- **良率**：数据分析领域核心度量
- **Pareto**：良率分析与缺陷 Pareto 方法 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -051

## 10. 现场检查清单

- [ ] SMT 良率分析与缺陷 Pareto 方法 适用版本已张贴
- [ ] 良率/Pareto/缺陷 仪器校准有效
- [ ] 数据分析 首件已签字
- [ ] Agent DATA_ANALYST 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-051】SMT 电子制造产线在实施「SMT 良率分析与缺陷 Pareto 方法」后，良率 相关不良从 7.8% 降至 0.0%，AI 数据员与AI 质量员 协同缩短处置时间 33 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 数据员 | 负责 SMT 良率分析与缺陷 Pareto 方法 中第 1 阶段：方案生成（良率） |
| AI 质量员 | 负责 SMT 良率分析与缺陷 Pareto 方法 中第 2 阶段：执行跟踪（Pareto） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`良率` `Pareto` `缺陷` `SMT 良率分析`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-133"></a>

## 文件 133 : `packages/database/knowledge-base/industry/doc-052-智能料塔与JIT物料.md`

```markdown
# 智能料塔与 JIT 物料配送

> **文档编号**：`industry-smt-052`  
> **行业**：SMT 电子制造 · **分类**：物流仓储 · **标签**：料塔、JIT、配送  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 调度员、AI 计划员

---

## 1. 文档概述

《智能料塔与 JIT 物料配送》是 SMT 电子制造 领域 **物流仓储** 的专项作业文件（编号 industry-smt-052）。全文围绕 料塔、JIT、配送 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 智能料塔与 JIT 物料配送 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 料塔 环节常出现与 JIT 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 智能料塔与 JIT 物料配送 在 物流仓储 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 入库检验（针对智能料塔与 JIT 物料配送第1环节）
- 拣配策略（针对智能料塔与 JIT 物料配送第2环节）
- AGV 调度（针对智能料塔与 JIT 物料配送第3环节）
- 库存周转（针对智能料塔与 JIT 物料配送第4环节）

## 4. 详细操作流程

1. 【准备】查阅「智能料塔与 JIT 物料配送」适用版本 Rev.11，确认与当前 SMT 产线工艺路线 industry-smt-052 一致
2. 【数据】从 MES/ERP 导出与 料塔、JIT、配送 相关数据：订单 142 单、在制 42 批、库存周转 4 天
3. 【首件】按 SMT 电子制造 WI 完成 智能料塔与 JIT 物料配送 首件，实测 料塔=92%，记录于批次卡
4. 【监控】JIT 控制图 UCL=98% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0442，DISPATCHER Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 052-442 输出 物流仓储 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 料塔 检测数据，写入追溯链
9. 【复盘】班后会评审 智能料塔与 JIT 物料配送 执行偏差 2 项，更新 RAG 标签：料塔、JIT、配送
10. 【改进】将案例 industry-smt-052 纳入 物流仓储 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 料塔 合格率 | ≥93% | 物流仓储 KPI |
| JIT 周期 | 52 s/件 | 节拍统计 |
| 智能料塔与  一次通过率 | ≥90% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 物流仓储 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 印刷机
- SPI
- 贴片机
- 回流炉
- 文档 industry-smt-052 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 智能料塔与 JIT 物料配送 超差 | 料塔 参数漂移 | 按 WI 调机并加严 料塔 抽检至 AQL 0.65 |
| 物流仓储 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 料塔、JIT、配送 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 442 |

## 9. 术语解释

- **料塔**：物流仓储领域核心度量
- **JIT**：智能料塔与 JIT 物料配送 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -052

## 10. 现场检查清单

- [ ] 智能料塔与 JIT 物料配送 适用版本已张贴
- [ ] 料塔/JIT/配送 仪器校准有效
- [ ] 物流仓储 首件已签字
- [ ] Agent DISPATCHER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-052】SMT 电子制造产线在实施「智能料塔与 JIT 物料配送」后，料塔 相关不良从 7.2% 降至 1.1%，AI 调度员与AI 计划员 协同缩短处置时间 17 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 37%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 调度员 | 负责 智能料塔与 JIT 物料配送 中第 1 阶段：方案生成（料塔） |
| AI 计划员 | 负责 智能料塔与 JIT 物料配送 中第 2 阶段：执行跟踪（JIT） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`料塔` `JIT` `配送` `智能料塔与 JI`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-134"></a>

## 文件 134 : `packages/database/knowledge-base/industry/doc-053-SMT工单优先级与紧急.md`

```markdown
# SMT 工单优先级与紧急插单规则

> **文档编号**：`industry-smt-053`  
> **行业**：SMT 电子制造 · **分类**：排程优化 · **标签**：插单、优先级、工单  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员、AI 调度员

---

## 1. 文档概述

《SMT 工单优先级与紧急插单规则》是 SMT 电子制造 领域 **排程优化** 的专项作业文件（编号 industry-smt-053）。全文围绕 插单、优先级、工单 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 工单优先级与紧急插单规则 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 插单 环节常出现与 优先级 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 工单优先级与紧急插单规则 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- 产线排程（针对工单优先级与紧急插单规则第1环节）
- 换线优化（针对工单优先级与紧急插单规则第2环节）
- 插单规则（针对工单优先级与紧急插单规则第3环节）
- 甘特发布（针对工单优先级与紧急插单规则第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 工单优先级与紧急插单规则」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-053 一致
2. 【数据】从 MES/ERP 导出与 插单、优先级、工单 相关数据：订单 140 单、在制 40 批、库存周转 4 天
3. 【首件】按 SMT 电子制造 WI 完成 工单优先级与紧急插单规则 首件，实测 插单=140%，记录于批次卡
4. 【监控】优先级 控制图 UCL=90% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0890，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 053-890 输出 排程优化 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 插单 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 工单优先级与紧急插单规则 执行偏差 0 项，更新 RAG 标签：插单、优先级、工单
10. 【改进】将案例 industry-smt-053 纳入 排程优化 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 插单 合格率 | ≥93% | 排程优化 KPI |
| 优先级 周期 | 50 s/件 | 节拍统计 |
| 工单优先级与 一次通过率 | ≥88% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 排程优化 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 甘特排程软件
- 换线计时器
- MES 工单
- Andon 看板
- 文档 industry-smt-053 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 工单优先级与紧急插单规则 超差 | 插单 参数漂移 | 按 WI 调机并加严 插单 抽检至 AQL 0.65 |
| 排程优化 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 插单、优先级、工单 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 890 |

## 9. 术语解释

- **插单**：排程优化领域核心度量
- **优先级**：工单优先级与紧急插单规则 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -053

## 10. 现场检查清单

- [ ] SMT 工单优先级与紧急插单规则 适用版本已张贴
- [ ] 插单/优先级/工单 仪器校准有效
- [ ] 排程优化 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-053】SMT 电子制造产线在实施「SMT 工单优先级与紧急插单规则」后，插单 相关不良从 7.0% 降至 2.8%，AI 排程员与AI 调度员 协同缩短处置时间 25 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 35%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 SMT 工单优先级与紧急插单规则 中第 1 阶段：规则校验（插单） |
| AI 调度员 | 负责 SMT 工单优先级与紧急插单规则 中第 2 阶段：方案生成（优先级） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`插单` `优先级` `工单` `SMT 工单优先`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-135"></a>

## 文件 135 : `packages/database/knowledge-base/industry/doc-054-SMT与AI排程员.md`

```markdown
# SMT 与 AI 排程员 Agent 协同指南

> **文档编号**：`industry-smt-054`  
> **行业**：SMT 电子制造 · **分类**：多智能体 · **标签**：Agent、排程、协同  
> **关联场景**：SMT 制造 · **关联 Agent**：AI 排程员、AI 调度员、协同决策员

---

## 1. 文档概述

《SMT 与 AI 排程员 Agent 协同指南》是 SMT 电子制造 领域 **多智能体** 的专项作业文件（编号 industry-smt-054）。全文围绕 Agent、排程、协同 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 与 AI 排程员 Agent 协同指南 相关工序与决策。

## 2. 背景与目的

SMT 电子制造 客户在 Agent 环节常出现与 排程 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 与 AI 排程员 Agent 协同指南 在 多智能体 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。

## 3. 适用范围

- Agent 分工（针对与 AI 排程员 Agent 协同指南第1环节）
- 任务分配（针对与 AI 排程员 Agent 协同指南第2环节）
- 冲突消解（针对与 AI 排程员 Agent 协同指南第3环节）
- 决策记录（针对与 AI 排程员 Agent 协同指南第4环节）

## 4. 详细操作流程

1. 【准备】查阅「SMT 与 AI 排程员 Agent 协同指南」适用版本 Rev.11，确认与当前 SMT 产线工艺路线 industry-smt-054 一致
2. 【数据】从 MES/ERP 导出与 Agent、排程、协同 相关数据：订单 128 单、在制 48 批、库存周转 4 天
3. 【首件】按 SMT 电子制造 WI 完成 与 AI 排程员 Agent 协同指南 首件，实测 Agent=128%，记录于批次卡
4. 【监控】排程 控制图 UCL=98% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-SMT-0778，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 054-778 输出 多智能体 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 Agent 检测数据，写入追溯链
9. 【复盘】班后会评审 SMT 与 AI 排程员 Agent 协同指南 执行偏差 3 项，更新 RAG 标签：Agent、排程、协同
10. 【改进】将案例 industry-smt-054 纳入 多智能体 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| Agent 合格率 | ≥93% | 多智能体 KPI |
| 排程 周期 | 38 s/件 | 节拍统计 |
| 与 AI 排 一次通过率 | ≥96% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- IPC-A-610 电子组装验收
- IPC-J-STD-001 焊接
- GB/T 2828.1 抽样
- ESD S20.20
- 多智能体 企业内控标准 Rev.5

## 7. 设备、系统与工具

- Contract Net 调度器
- Agent 注册中心
- 任务黑板
- 决策日志
- 文档 industry-smt-054 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 与 AI 排程员 Agent 协同指南 超差 | Agent 参数漂移 | 按 WI 调机并加严 Agent 抽检至 AQL 0.65 |
| 多智能体 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| Agent、排程、协同 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 778 |

## 9. 术语解释

- **Agent**：多智能体领域核心度量
- **排程**：与 AI 排程员 Agent 协同指南 标准作业程序
- **SMT-TERM**：SMT 电子制造 专用术语，见企业术语库 -054

## 10. 现场检查清单

- [ ] SMT 与 AI 排程员 Agent 协同指南 适用版本已张贴
- [ ] Agent/排程/协同 仪器校准有效
- [ ] 多智能体 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-smt-054】SMT 电子制造产线在实施「SMT 与 AI 排程员 Agent 协同指南」后，Agent 相关不良从 7.8% 降至 1.4%，AI 排程员与AI 调度员与协同决策员 协同缩短处置时间 33 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 23%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 SMT 与 AI 排程员 Agent 协同指南 中第 1 阶段：数据分析（Agent） |
| AI 调度员 | 负责 SMT 与 AI 排程员 Agent 协同指南 中第 2 阶段：规则校验（排程） |
| 协同决策员 | 负责 SMT 与 AI 排程员 Agent 协同指南 中第 3 阶段：方案生成（协同） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`Agent` `排程` `协同` `SMT 与 AI`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-136"></a>

## 文件 136 : `packages/database/knowledge-base/industry/doc-055-动力电池模组组装工艺规范.md`

```markdown
# 动力电池模组组装工艺规范

> **文档编号**：`industry-ev-055`  
> **行业**：新能源汽车制造 · **分类**：制造工艺 · **标签**：电池、模组、组装  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 计划员、AI 质量员

---

## 1. 文档概述

《动力电池模组组装工艺规范》是 新能源汽车制造 领域 **制造工艺** 的专项作业文件（编号 industry-ev-055）。全文围绕 电池、模组、组装 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 动力电池模组组装工艺规范 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 电池 环节常出现与 模组 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 动力电池模组组装工艺规范 在 制造工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 工艺参数（针对动力电池模组组装工艺规范第1环节）
- 过程确认（针对动力电池模组组装工艺规范第2环节）
- 设备点检（针对动力电池模组组装工艺规范第3环节）
- 首件验证（针对动力电池模组组装工艺规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「动力电池模组组装工艺规范」适用版本 Rev.11，确认与当前 EV 产线工艺路线 industry-ev-055 一致
2. 【数据】从 MES/ERP 导出与 电池、模组、组装 相关数据：订单 134 单、在制 24 批、库存周转 8 天
3. 【首件】按 新能源汽车制造 WI 完成 动力电池模组组装工艺规范 首件，实测 电池=84μm，记录于批次卡
4. 【监控】模组 控制图 UCL=98% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0334，PLANNER Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 055-334 输出 制造工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 电池 检测数据，写入追溯链
9. 【复盘】班后会评审 动力电池模组组装工艺规范 执行偏差 4 项，更新 RAG 标签：电池、模组、组装
10. 【改进】将案例 industry-ev-055 纳入 制造工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 电池 合格率 | ≥97% | 制造工艺 KPI |
| 模组 周期 | 44 min | 节拍统计 |
| 动力电池模组 一次通过率 | ≥92% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 制造工艺 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-055 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 动力电池模组组装工艺规范 超差 | 电池 参数漂移 | 按 WI 调机并加严 电池 抽检至 AQL 0.65 |
| 制造工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 电池、模组、组装 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 334 |

## 9. 术语解释

- **电池**：制造工艺领域核心度量
- **模组**：动力电池模组组装工艺规范 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -055

## 10. 现场检查清单

- [ ] 动力电池模组组装工艺规范 适用版本已张贴
- [ ] 电池/模组/组装 仪器校准有效
- [ ] 制造工艺 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-055】新能源汽车制造产线在实施「动力电池模组组装工艺规范」后，电池 相关不良从 11.4% 降至 1.1%，AI 计划员与AI 质量员 协同缩短处置时间 29 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 动力电池模组组装工艺规范 中第 1 阶段：规则校验（电池） |
| AI 质量员 | 负责 动力电池模组组装工艺规范 中第 2 阶段：方案生成（模组） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`电池` `模组` `组装` `动力电池模组组装`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-137"></a>

## 文件 137 : `packages/database/knowledge-base/industry/doc-056-电芯分选配组与一致性标.md`

```markdown
# 电芯分选、配组与一致性标准

> **文档编号**：`industry-ev-056`  
> **行业**：新能源汽车制造 · **分类**：质量检验 · **标签**：电芯、分选、配组  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《电芯分选、配组与一致性标准》是 新能源汽车制造 领域 **质量检验** 的专项作业文件（编号 industry-ev-056）。全文围绕 电芯、分选、配组 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 电芯分选、配组与一致性标准 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 电芯 环节常出现与 分选 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 电芯分选、配组与一致性标准 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- IQC/IPQC/OQC（针对电芯分选、配组与一致性标准第1环节）
- 抽样方案（针对电芯分选、配组与一致性标准第2环节）
- 判定准则（针对电芯分选、配组与一致性标准第3环节）
- NCR 闭环（针对电芯分选、配组与一致性标准第4环节）

## 4. 详细操作流程

1. 【准备】查阅「电芯分选、配组与一致性标准」适用版本 Rev.1，确认与当前 EV 产线工艺路线 industry-ev-056 一致
2. 【数据】从 MES/ERP 导出与 电芯、分选、配组 相关数据：订单 126 单、在制 26 批、库存周转 4 天
3. 【首件】按 新能源汽车制造 WI 完成 电芯分选、配组与一致性标准 首件，实测 电芯=126μm，记录于批次卡
4. 【监控】分选 控制图 UCL=88% / LCL=76%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0876，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 056-876 输出 质量检验 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 电芯 检测数据，写入追溯链
9. 【复盘】班后会评审 电芯分选、配组与一致性标准 执行偏差 1 项，更新 RAG 标签：电芯、分选、配组
10. 【改进】将案例 industry-ev-056 纳入 质量检验 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 电芯 合格率 | ≥93% | 质量检验 KPI |
| 分选 周期 | 36 min | 节拍统计 |
| 电芯分选、配 一次通过率 | ≥94% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 质量检验 企业内控标准 Rev.4

## 7. 设备、系统与工具

- 三坐标/CMM
- 光学测量仪
- SPC 软件
- AQL 抽样表
- 文档 industry-ev-056 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 电芯分选、配组与一致性标准 超差 | 电芯 参数漂移 | 按 WI 调机并加严 电芯 抽检至 AQL 0.65 |
| 质量检验 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 电芯、分选、配组 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 876 |

## 9. 术语解释

- **电芯**：质量检验领域核心度量
- **分选**：电芯分选、配组与一致性标准 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -056

## 10. 现场检查清单

- [ ] 电芯分选、配组与一致性标准 适用版本已张贴
- [ ] 电芯/分选/配组 仪器校准有效
- [ ] 质量检验 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-056】新能源汽车制造产线在实施「电芯分选、配组与一致性标准」后，电芯 相关不良从 9.6% 降至 0.3%，AI 质量员与AI 数据员 协同缩短处置时间 51 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 21%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 电芯分选、配组与一致性标准 中第 1 阶段：规则校验（电芯） |
| AI 数据员 | 负责 电芯分选、配组与一致性标准 中第 2 阶段：方案生成（分选） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`电芯` `分选` `配组` `电芯分选、配组与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-138"></a>

## 文件 138 : `packages/database/knowledge-base/industry/doc-057-BMS功能测试与安全策.md`

```markdown
# BMS 功能测试与安全策略验证

> **文档编号**：`industry-ev-057`  
> **行业**：新能源汽车制造 · **分类**：测试工艺 · **标签**：BMS、安全、测试  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 仿真员

---

## 1. 文档概述

《BMS 功能测试与安全策略验证》是 新能源汽车制造 领域 **测试工艺** 的专项作业文件（编号 industry-ev-057）。全文围绕 BMS、安全、测试 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 BMS 功能测试与安全策略验证 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 BMS 环节常出现与 安全 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 BMS 功能测试与安全策略验证 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 测试程序（针对BMS 功能测试与安全策略验证第1环节）
- 限值设定（针对BMS 功能测试与安全策略验证第2环节）
- 设备校准（针对BMS 功能测试与安全策略验证第3环节）
- 数据归档（针对BMS 功能测试与安全策略验证第4环节）

## 4. 详细操作流程

1. 【准备】查阅「BMS 功能测试与安全策略验证」适用版本 Rev.8，确认与当前 EV 产线工艺路线 industry-ev-057 一致
2. 【数据】从 MES/ERP 导出与 BMS、安全、测试 相关数据：订单 117 单、在制 27 批、库存周转 6 天
3. 【首件】按 新能源汽车制造 WI 完成 BMS 功能测试与安全策略验证 首件，实测 BMS=117μm，记录于批次卡
4. 【监控】安全 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0367，QUALITY Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 057-367 输出 测试工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 BMS 检测数据，写入追溯链
9. 【复盘】班后会评审 BMS 功能测试与安全策略验证 执行偏差 2 项，更新 RAG 标签：BMS、安全、测试
10. 【改进】将案例 industry-ev-057 纳入 测试工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| BMS 合格率 | ≥95% | 测试工艺 KPI |
| 安全 周期 | 27 min | 节拍统计 |
| BMS 功能 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 测试工艺 企业内控标准 Rev.8

## 7. 设备、系统与工具

- EOL 台架
- FCT 治具
- 数据采集仪
- 校准证书库
- 文档 industry-ev-057 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| BMS 功能测试与安全策略验证 超差 | BMS 参数漂移 | 按 WI 调机并加严 BMS 抽检至 AQL 0.65 |
| 测试工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| BMS、安全、测试 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 367 |

## 9. 术语解释

- **BMS**：测试工艺领域核心度量
- **安全**：BMS 功能测试与安全策略验证 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -057

## 10. 现场检查清单

- [ ] BMS 功能测试与安全策略验证 适用版本已张贴
- [ ] BMS/安全/测试 仪器校准有效
- [ ] 测试工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-057】新能源汽车制造产线在实施「BMS 功能测试与安全策略验证」后，BMS 相关不良从 12.7% 降至 1.7%，AI 质量员与AI 仿真员 协同缩短处置时间 22 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 37%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 BMS 功能测试与安全策略验证 中第 1 阶段：数据分析（BMS） |
| AI 仿真员 | 负责 BMS 功能测试与安全策略验证 中第 2 阶段：规则校验（安全） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`BMS` `安全` `测试` `BMS 功能测试`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-139"></a>

## 文件 139 : `packages/database/knowledge-base/industry/doc-058-驱动电机总成装配与扭力管.md`

```markdown
# 驱动电机总成装配与扭力管控

> **文档编号**：`industry-ev-058`  
> **行业**：新能源汽车制造 · **分类**：装配工艺 · **标签**：电机、扭力、总成  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 排程员、AI 质量员

---

## 1. 文档概述

《驱动电机总成装配与扭力管控》是 新能源汽车制造 领域 **装配工艺** 的专项作业文件（编号 industry-ev-058）。全文围绕 电机、扭力、总成 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 驱动电机总成装配与扭力管控 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 电机 环节常出现与 扭力 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 驱动电机总成装配与扭力管控 在 装配工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 工位节拍（针对驱动电机总成装配与扭力管控第1环节）
- 扭力管控（针对驱动电机总成装配与扭力管控第2环节）
- 防错装（针对驱动电机总成装配与扭力管控第3环节）
- 终检放行（针对驱动电机总成装配与扭力管控第4环节）

## 4. 详细操作流程

1. 【准备】查阅「驱动电机总成装配与扭力管控」适用版本 Rev.12，确认与当前 EV 产线工艺路线 industry-ev-058 一致
2. 【数据】从 MES/ERP 导出与 电机、扭力、总成 相关数据：订单 125 单、在制 25 批、库存周转 5 天
3. 【首件】按 新能源汽车制造 WI 完成 驱动电机总成装配与扭力管控 首件，实测 电机=125μm，记录于批次卡
4. 【监控】扭力 控制图 UCL=99% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0275，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 058-275 输出 装配工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 电机 检测数据，写入追溯链
9. 【复盘】班后会评审 驱动电机总成装配与扭力管控 执行偏差 0 项，更新 RAG 标签：电机、扭力、总成
10. 【改进】将案例 industry-ev-058 纳入 装配工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 电机 合格率 | ≥94% | 装配工艺 KPI |
| 扭力 周期 | 35 min | 节拍统计 |
| 驱动电机总成 一次通过率 | ≥93% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 装配工艺 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-058 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 驱动电机总成装配与扭力管控 超差 | 电机 参数漂移 | 按 WI 调机并加严 电机 抽检至 AQL 0.65 |
| 装配工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 电机、扭力、总成 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 275 |

## 9. 术语解释

- **电机**：装配工艺领域核心度量
- **扭力**：驱动电机总成装配与扭力管控 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -058

## 10. 现场检查清单

- [ ] 驱动电机总成装配与扭力管控 适用版本已张贴
- [ ] 电机/扭力/总成 仪器校准有效
- [ ] 装配工艺 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-058】新能源汽车制造产线在实施「驱动电机总成装配与扭力管控」后，电机 相关不良从 8.5% 降至 2.5%，AI 排程员与AI 质量员 协同缩短处置时间 50 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 20%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 驱动电机总成装配与扭力管控 中第 1 阶段：执行跟踪（电机） |
| AI 质量员 | 负责 驱动电机总成装配与扭力管控 中第 2 阶段：数据分析（扭力） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`电机` `扭力` `总成` `驱动电机总成装配`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-140"></a>

## 文件 140 : `packages/database/knowledge-base/industry/doc-059-整车VIN追溯与关键.md`

```markdown
# 整车 VIN 追溯与关键件绑定规范

> **文档编号**：`industry-ev-059`  
> **行业**：新能源汽车制造 · **分类**：质量管理 · **标签**：VIN、追溯、绑定  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《整车 VIN 追溯与关键件绑定规范》是 新能源汽车制造 领域 **质量管理** 的专项作业文件（编号 industry-ev-059）。全文围绕 VIN、追溯、绑定 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 VIN 追溯与关键件绑定规范 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 VIN 环节常出现与 追溯 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 VIN 追溯与关键件绑定规范 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 追溯体系（针对VIN 追溯与关键件绑定规范第1环节）
- SPC（针对VIN 追溯与关键件绑定规范第2环节）
- FMEA（针对VIN 追溯与关键件绑定规范第3环节）
- 8D 改善（针对VIN 追溯与关键件绑定规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「整车 VIN 追溯与关键件绑定规范」适用版本 Rev.6，确认与当前 EV 产线工艺路线 industry-ev-059 一致
2. 【数据】从 MES/ERP 导出与 VIN、追溯、绑定 相关数据：订单 135 单、在制 25 批、库存周转 6 天
3. 【首件】按 新能源汽车制造 WI 完成 VIN 追溯与关键件绑定规范 首件，实测 VIN=135μm，记录于批次卡
4. 【监控】追溯 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0185，QUALITY Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 059-185 输出 质量管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 VIN 检测数据，写入追溯链
9. 【复盘】班后会评审 整车 VIN 追溯与关键件绑定规范 执行偏差 0 项，更新 RAG 标签：VIN、追溯、绑定
10. 【改进】将案例 industry-ev-059 纳入 质量管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| VIN 合格率 | ≥95% | 质量管理 KPI |
| 追溯 周期 | 45 min | 节拍统计 |
| VIN 追溯 一次通过率 | ≥93% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 质量管理 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-059 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| VIN 追溯与关键件绑定规范 超差 | VIN 参数漂移 | 按 WI 调机并加严 VIN 抽检至 AQL 0.65 |
| 质量管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| VIN、追溯、绑定 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 185 |

## 9. 术语解释

- **VIN**：质量管理领域核心度量
- **追溯**：VIN 追溯与关键件绑定规范 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -059

## 10. 现场检查清单

- [ ] 整车 VIN 追溯与关键件绑定规范 适用版本已张贴
- [ ] VIN/追溯/绑定 仪器校准有效
- [ ] 质量管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-059】新能源汽车制造产线在实施「整车 VIN 追溯与关键件绑定规范」后，VIN 相关不良从 6.5% 降至 2.5%，AI 质量员与AI 数据员 协同缩短处置时间 40 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 30%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 整车 VIN 追溯与关键件绑定规范 中第 1 阶段：执行跟踪（VIN） |
| AI 数据员 | 负责 整车 VIN 追溯与关键件绑定规范 中第 2 阶段：数据分析（追溯） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`VIN` `追溯` `绑定` `整车 VIN 追`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-141"></a>

## 文件 141 : `packages/database/knowledge-base/industry/doc-060-总装线Andon异常.md`

```markdown
# 总装线 Andon 异常响应机制

> **文档编号**：`industry-ev-060`  
> **行业**：新能源汽车制造 · **分类**：生产管理 · **标签**：Andon、停线、响应  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 调度员、AI 排程员

---

## 1. 文档概述

《总装线 Andon 异常响应机制》是 新能源汽车制造 领域 **生产管理** 的专项作业文件（编号 industry-ev-060）。全文围绕 Andon、停线、响应 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 线 Andon 异常响应机制 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 Andon 环节常出现与 停线 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 线 Andon 异常响应机制 在 生产管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 过程控制（针对线 Andon 异常响应机制第1环节）
- 数据记录（针对线 Andon 异常响应机制第2环节）
- 异常升级（针对线 Andon 异常响应机制第3环节）
- 持续改进（针对线 Andon 异常响应机制第4环节）

## 4. 详细操作流程

1. 【准备】查阅「总装线 Andon 异常响应机制」适用版本 Rev.5，确认与当前 EV 产线工艺路线 industry-ev-060 一致
2. 【数据】从 MES/ERP 导出与 Andon、停线、响应 相关数据：订单 144 单、在制 24 批、库存周转 8 天
3. 【首件】按 新能源汽车制造 WI 完成 线 Andon 异常响应机制 首件，实测 Andon=94μm，记录于批次卡
4. 【监控】停线 控制图 UCL=92% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0544，DISPATCHER Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 060-544 输出 生产管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 Andon 检测数据，写入追溯链
9. 【复盘】班后会评审 总装线 Andon 异常响应机制 执行偏差 4 项，更新 RAG 标签：Andon、停线、响应
10. 【改进】将案例 industry-ev-060 纳入 生产管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| Andon 合格率 | ≥97% | 生产管理 KPI |
| 停线 周期 | 54 min | 节拍统计 |
| 线 Ando 一次通过率 | ≥92% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 生产管理 企业内控标准 Rev.5

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-060 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 线 Andon 异常响应机制 超差 | Andon 参数漂移 | 按 WI 调机并加严 Andon 抽检至 AQL 0.65 |
| 生产管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| Andon、停线、响应 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 544 |

## 9. 术语解释

- **Andon**：生产管理领域核心度量
- **停线**：线 Andon 异常响应机制 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -060

## 10. 现场检查清单

- [ ] 总装线 Andon 异常响应机制 适用版本已张贴
- [ ] Andon/停线/响应 仪器校准有效
- [ ] 生产管理 首件已签字
- [ ] Agent DISPATCHER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-060】新能源汽车制造产线在实施「总装线 Andon 异常响应机制」后，Andon 相关不良从 5.4% 降至 1.4%，AI 调度员与AI 排程员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 39%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 调度员 | 负责 总装线 Andon 异常响应机制 中第 1 阶段：规则校验（Andon） |
| AI 排程员 | 负责 总装线 Andon 异常响应机制 中第 2 阶段：方案生成（停线） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`Andon` `停线` `响应` `总装线 Ando`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-142"></a>

## 文件 142 : `packages/database/knowledge-base/industry/doc-061-冲压件尺寸检测与SPC.md`

```markdown
# 冲压件尺寸检测与 SPC 控制

> **文档编号**：`industry-ev-061`  
> **行业**：新能源汽车制造 · **分类**：质量检验 · **标签**：冲压、SPC、尺寸  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《冲压件尺寸检测与 SPC 控制》是 新能源汽车制造 领域 **质量检验** 的专项作业文件（编号 industry-ev-061）。全文围绕 冲压、SPC、尺寸 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 冲压件尺寸检测与 SPC 控制 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 冲压 环节常出现与 SPC 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 冲压件尺寸检测与 SPC 控制 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- IQC/IPQC/OQC（针对冲压件尺寸检测与 SPC 控制第1环节）
- 抽样方案（针对冲压件尺寸检测与 SPC 控制第2环节）
- 判定准则（针对冲压件尺寸检测与 SPC 控制第3环节）
- NCR 闭环（针对冲压件尺寸检测与 SPC 控制第4环节）

## 4. 详细操作流程

1. 【准备】查阅「冲压件尺寸检测与 SPC 控制」适用版本 Rev.6，确认与当前 EV 产线工艺路线 industry-ev-061 一致
2. 【数据】从 MES/ERP 导出与 冲压、SPC、尺寸 相关数据：订单 147 单、在制 37 批、库存周转 9 天
3. 【首件】按 新能源汽车制造 WI 完成 冲压件尺寸检测与 SPC 控制 首件，实测 冲压=147μm，记录于批次卡
4. 【监控】SPC 控制图 UCL=93% / LCL=77%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0797，QUALITY Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 061-797 输出 质量检验 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 冲压 检测数据，写入追溯链
9. 【复盘】班后会评审 冲压件尺寸检测与 SPC 控制 执行偏差 2 项，更新 RAG 标签：冲压、SPC、尺寸
10. 【改进】将案例 industry-ev-061 纳入 质量检验 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 冲压 合格率 | ≥98% | 质量检验 KPI |
| SPC 周期 | 57 min | 节拍统计 |
| 冲压件尺寸检 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 质量检验 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 三坐标/CMM
- 光学测量仪
- SPC 软件
- AQL 抽样表
- 文档 industry-ev-061 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 冲压件尺寸检测与 SPC 控制 超差 | 冲压 参数漂移 | 按 WI 调机并加严 冲压 抽检至 AQL 0.65 |
| 质量检验 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 冲压、SPC、尺寸 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 797 |

## 9. 术语解释

- **冲压**：质量检验领域核心度量
- **SPC**：冲压件尺寸检测与 SPC 控制 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -061

## 10. 现场检查清单

- [ ] 冲压件尺寸检测与 SPC 控制 适用版本已张贴
- [ ] 冲压/SPC/尺寸 仪器校准有效
- [ ] 质量检验 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-061】新能源汽车制造产线在实施「冲压件尺寸检测与 SPC 控制」后，冲压 相关不良从 10.7% 降至 2.5%，AI 质量员与AI 数据员 协同缩短处置时间 52 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 42%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 冲压件尺寸检测与 SPC 控制 中第 1 阶段：规则校验（冲压） |
| AI 数据员 | 负责 冲压件尺寸检测与 SPC 控制 中第 2 阶段：方案生成（SPC） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`冲压` `SPC` `尺寸` `冲压件尺寸检测与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-143"></a>

## 文件 143 : `packages/database/knowledge-base/industry/doc-062-车身焊接机器人参数与焊缝.md`

```markdown
# 车身焊接机器人参数与焊缝质量

> **文档编号**：`industry-ev-062`  
> **行业**：新能源汽车制造 · **分类**：制造工艺 · **标签**：焊接、机器人、焊缝  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 仿真员

---

## 1. 文档概述

《车身焊接机器人参数与焊缝质量》是 新能源汽车制造 领域 **制造工艺** 的专项作业文件（编号 industry-ev-062）。全文围绕 焊接、机器人、焊缝 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 车身焊接机器人参数与焊缝质量 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 焊接 环节常出现与 机器人 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 车身焊接机器人参数与焊缝质量 在 制造工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 工艺参数（针对车身焊接机器人参数与焊缝质量第1环节）
- 过程确认（针对车身焊接机器人参数与焊缝质量第2环节）
- 设备点检（针对车身焊接机器人参数与焊缝质量第3环节）
- 首件验证（针对车身焊接机器人参数与焊缝质量第4环节）

## 4. 详细操作流程

1. 【准备】查阅「车身焊接机器人参数与焊缝质量」适用版本 Rev.7，确认与当前 EV 产线工艺路线 industry-ev-062 一致
2. 【数据】从 MES/ERP 导出与 焊接、机器人、焊缝 相关数据：订单 118 单、在制 38 批、库存周转 5 天
3. 【首件】按 新能源汽车制造 WI 完成 车身焊接机器人参数与焊缝质量 首件，实测 焊接=68μm，记录于批次卡
4. 【监控】机器人 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0618，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 062-618 输出 制造工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 焊接 检测数据，写入追溯链
9. 【复盘】班后会评审 车身焊接机器人参数与焊缝质量 执行偏差 3 项，更新 RAG 标签：焊接、机器人、焊缝
10. 【改进】将案例 industry-ev-062 纳入 制造工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 焊接 合格率 | ≥94% | 制造工艺 KPI |
| 机器人 周期 | 28 min | 节拍统计 |
| 车身焊接机器 一次通过率 | ≥96% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 制造工艺 企业内控标准 Rev.7

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-062 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 车身焊接机器人参数与焊缝质量 超差 | 焊接 参数漂移 | 按 WI 调机并加严 焊接 抽检至 AQL 0.65 |
| 制造工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 焊接、机器人、焊缝 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 618 |

## 9. 术语解释

- **焊接**：制造工艺领域核心度量
- **机器人**：车身焊接机器人参数与焊缝质量 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -062

## 10. 现场检查清单

- [ ] 车身焊接机器人参数与焊缝质量 适用版本已张贴
- [ ] 焊接/机器人/焊缝 仪器校准有效
- [ ] 制造工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-062】新能源汽车制造产线在实施「车身焊接机器人参数与焊缝质量」后，焊接 相关不良从 7.8% 降至 0.6%，AI 质量员与AI 仿真员 协同缩短处置时间 33 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 38%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 车身焊接机器人参数与焊缝质量 中第 1 阶段：执行跟踪（焊接） |
| AI 仿真员 | 负责 车身焊接机器人参数与焊缝质量 中第 2 阶段：数据分析（机器人） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`焊接` `机器人` `焊缝` `车身焊接机器人参`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-144"></a>

## 文件 144 : `packages/database/knowledge-base/industry/doc-063-涂装车间VOC排放与.md`

```markdown
# 涂装车间 VOC 排放与膜厚控制

> **文档编号**：`industry-ev-063`  
> **行业**：新能源汽车制造 · **分类**：环保工艺 · **标签**：涂装、VOC、膜厚  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《涂装车间 VOC 排放与膜厚控制》是 新能源汽车制造 领域 **环保工艺** 的专项作业文件（编号 industry-ev-063）。全文围绕 涂装、VOC、膜厚 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 涂装车间 VOC 排放与膜厚控制 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 涂装 环节常出现与 VOC 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 涂装车间 VOC 排放与膜厚控制 在 环保工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 排放监测（针对涂装车间 VOC 排放与膜厚控制第1环节）
- 危废管理（针对涂装车间 VOC 排放与膜厚控制第2环节）
- 膜厚/成分（针对涂装车间 VOC 排放与膜厚控制第3环节）
- 第三方检测（针对涂装车间 VOC 排放与膜厚控制第4环节）

## 4. 详细操作流程

1. 【准备】查阅「涂装车间 VOC 排放与膜厚控制」适用版本 Rev.9，确认与当前 EV 产线工艺路线 industry-ev-063 一致
2. 【数据】从 MES/ERP 导出与 涂装、VOC、膜厚 相关数据：订单 114 单、在制 34 批、库存周转 5 天
3. 【首件】按 新能源汽车制造 WI 完成 涂装车间 VOC 排放与膜厚控制 首件，实测 涂装=114μm，记录于批次卡
4. 【监控】VOC 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0464，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 063-464 输出 环保工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 涂装 检测数据，写入追溯链
9. 【复盘】班后会评审 涂装车间 VOC 排放与膜厚控制 执行偏差 4 项，更新 RAG 标签：涂装、VOC、膜厚
10. 【改进】将案例 industry-ev-063 纳入 环保工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 涂装 合格率 | ≥94% | 环保工艺 KPI |
| VOC 周期 | 24 min | 节拍统计 |
| 涂装车间 V 一次通过率 | ≥92% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 环保工艺 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 静电喷涂机器人
- VOC 在线监测仪
- 膜厚仪
- 焚烧/RTO 装置
- 文档 industry-ev-063 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 涂装车间 VOC 排放与膜厚控制 超差 | 涂装 参数漂移 | 按 WI 调机并加严 涂装 抽检至 AQL 0.65 |
| 环保工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 涂装、VOC、膜厚 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 464 |

## 9. 术语解释

- **涂装**：环保工艺领域核心度量
- **VOC**：涂装车间 VOC 排放与膜厚控制 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -063

## 10. 现场检查清单

- [ ] 涂装车间 VOC 排放与膜厚控制 适用版本已张贴
- [ ] 涂装/VOC/膜厚 仪器校准有效
- [ ] 环保工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-063】新能源汽车制造产线在实施「涂装车间 VOC 排放与膜厚控制」后，涂装 相关不良从 5.4% 降至 2.5%，AI 质量员与AI 数据员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 34%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 涂装车间 VOC 排放与膜厚控制 中第 1 阶段：方案生成（涂装） |
| AI 数据员 | 负责 涂装车间 VOC 排放与膜厚控制 中第 2 阶段：执行跟踪（VOC） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`涂装` `VOC` `膜厚` `涂装车间 VOC`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-145"></a>

## 文件 145 : `packages/database/knowledge-base/industry/doc-064-Tier1Tier2.md`

```markdown
# Tier1/Tier2 供应链协同计划

> **文档编号**：`industry-ev-064`  
> **行业**：新能源汽车制造 · **分类**：供应链 · **标签**：供应链、Tier、协同  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 计划员、AI 调度员

---

## 1. 文档概述

《Tier1/Tier2 供应链协同计划》是 新能源汽车制造 领域 **供应链** 的专项作业文件（编号 industry-ev-064）。全文围绕 供应链、Tier、协同 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 Tier1/Tier2 供应链协同计划 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 供应链 环节常出现与 Tier 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 Tier1/Tier2 供应链协同计划 在 供应链 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 要货计划（针对Tier1/Tier2 供应链协同计划第1环节）
- 供应商绩效（针对Tier1/Tier2 供应链协同计划第2环节）
- 风险物料（针对Tier1/Tier2 供应链协同计划第3环节）
- VMI 协同（针对Tier1/Tier2 供应链协同计划第4环节）

## 4. 详细操作流程

1. 【准备】查阅「Tier1/Tier2 供应链协同计划」适用版本 Rev.12，确认与当前 EV 产线工艺路线 industry-ev-064 一致
2. 【数据】从 MES/ERP 导出与 供应链、Tier、协同 相关数据：订单 147 单、在制 37 批、库存周转 6 天
3. 【首件】按 新能源汽车制造 WI 完成 Tier1/Tier2 供应链协同计划 首件，实测 供应链=97μm，记录于批次卡
4. 【监控】Tier 控制图 UCL=99% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0647，PLANNER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 064-647 输出 供应链 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 供应链 检测数据，写入追溯链
9. 【复盘】班后会评审 Tier1/Tier2 供应链协同计划 执行偏差 2 项，更新 RAG 标签：供应链、Tier、协同
10. 【改进】将案例 industry-ev-064 纳入 供应链 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 供应链 合格率 | ≥95% | 供应链 KPI |
| Tier 周期 | 57 min | 节拍统计 |
| Tier1/ 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 供应链 企业内控标准 Rev.9

## 7. 设备、系统与工具

- SRM 供应商门户
- 要货看板
- VMI 库存接口
- 风险物料清单
- 文档 industry-ev-064 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| Tier1/Tier2 供应链协同计划 超差 | 供应链 参数漂移 | 按 WI 调机并加严 供应链 抽检至 AQL 0.65 |
| 供应链 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 供应链、Tier、协同 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 647 |

## 9. 术语解释

- **供应链**：供应链领域核心度量
- **Tier**：Tier1/Tier2 供应链协同计划 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -064

## 10. 现场检查清单

- [ ] Tier1/Tier2 供应链协同计划 适用版本已张贴
- [ ] 供应链/Tier/协同 仪器校准有效
- [ ] 供应链 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-064】新能源汽车制造产线在实施「Tier1/Tier2 供应链协同计划」后，供应链 相关不良从 12.7% 降至 2.8%，AI 计划员与AI 调度员 协同缩短处置时间 22 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 42%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 Tier1/Tier2 供应链协同计划 中第 1 阶段：方案生成（供应链） |
| AI 调度员 | 负责 Tier1/Tier2 供应链协同计划 中第 2 阶段：执行跟踪（Tier） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`供应链` `Tier` `协同` `Tier1/Ti`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-146"></a>

## 文件 146 : `packages/database/knowledge-base/industry/doc-065-二级供应商审核与准入标准.md`

```markdown
# 二级供应商审核与准入标准

> **文档编号**：`industry-ev-065`  
> **行业**：新能源汽车制造 · **分类**：供应链 · **标签**：供应商、审核、准入  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、协同决策员

---

## 1. 文档概述

《二级供应商审核与准入标准》是 新能源汽车制造 领域 **供应链** 的专项作业文件（编号 industry-ev-065）。全文围绕 供应商、审核、准入 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 二级供应商审核与准入标准 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 供应商 环节常出现与 审核 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 二级供应商审核与准入标准 在 供应链 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 要货计划（针对二级供应商审核与准入标准第1环节）
- 供应商绩效（针对二级供应商审核与准入标准第2环节）
- 风险物料（针对二级供应商审核与准入标准第3环节）
- VMI 协同（针对二级供应商审核与准入标准第4环节）

## 4. 详细操作流程

1. 【准备】查阅「二级供应商审核与准入标准」适用版本 Rev.7，确认与当前 EV 产线工艺路线 industry-ev-065 一致
2. 【数据】从 MES/ERP 导出与 供应商、审核、准入 相关数据：订单 120 单、在制 20 批、库存周转 6 天
3. 【首件】按 新能源汽车制造 WI 完成 二级供应商审核与准入标准 首件，实测 供应商=120μm，记录于批次卡
4. 【监控】审核 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0570，QUALITY Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 065-570 输出 供应链 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 供应商 检测数据，写入追溯链
9. 【复盘】班后会评审 二级供应商审核与准入标准 执行偏差 0 项，更新 RAG 标签：供应商、审核、准入
10. 【改进】将案例 industry-ev-065 纳入 供应链 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 供应商 合格率 | ≥95% | 供应链 KPI |
| 审核 周期 | 30 min | 节拍统计 |
| 二级供应商审 一次通过率 | ≥88% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 供应链 企业内控标准 Rev.4

## 7. 设备、系统与工具

- SRM 供应商门户
- 要货看板
- VMI 库存接口
- 风险物料清单
- 文档 industry-ev-065 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 二级供应商审核与准入标准 超差 | 供应商 参数漂移 | 按 WI 调机并加严 供应商 抽检至 AQL 0.65 |
| 供应链 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 供应商、审核、准入 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 570 |

## 9. 术语解释

- **供应商**：供应链领域核心度量
- **审核**：二级供应商审核与准入标准 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -065

## 10. 现场检查清单

- [ ] 二级供应商审核与准入标准 适用版本已张贴
- [ ] 供应商/审核/准入 仪器校准有效
- [ ] 供应链 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-065】新能源汽车制造产线在实施「二级供应商审核与准入标准」后，供应商 相关不良从 7.0% 降至 0.3%，AI 质量员与协同决策员 协同缩短处置时间 25 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 40%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 二级供应商审核与准入标准 中第 1 阶段：执行跟踪（供应商） |
| 协同决策员 | 负责 二级供应商审核与准入标准 中第 2 阶段：数据分析（审核） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`供应商` `审核` `准入` `二级供应商审核与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-147"></a>

## 文件 147 : `packages/database/knowledge-base/industry/doc-066-热管理系统装配与泄漏测试.md`

```markdown
# 热管理系统装配与泄漏测试

> **文档编号**：`industry-ev-066`  
> **行业**：新能源汽车制造 · **分类**：装配工艺 · **标签**：热管理、泄漏、测试  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 排程员

---

## 1. 文档概述

《热管理系统装配与泄漏测试》是 新能源汽车制造 领域 **装配工艺** 的专项作业文件（编号 industry-ev-066）。全文围绕 热管理、泄漏、测试 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 热管理系统装配与泄漏测试 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 热管理 环节常出现与 泄漏 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 热管理系统装配与泄漏测试 在 装配工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 工位节拍（针对热管理系统装配与泄漏测试第1环节）
- 扭力管控（针对热管理系统装配与泄漏测试第2环节）
- 防错装（针对热管理系统装配与泄漏测试第3环节）
- 终检放行（针对热管理系统装配与泄漏测试第4环节）

## 4. 详细操作流程

1. 【准备】查阅「热管理系统装配与泄漏测试」适用版本 Rev.4，确认与当前 EV 产线工艺路线 industry-ev-066 一致
2. 【数据】从 MES/ERP 导出与 热管理、泄漏、测试 相关数据：订单 131 单、在制 41 批、库存周转 3 天
3. 【首件】按 新能源汽车制造 WI 完成 热管理系统装配与泄漏测试 首件，实测 热管理=81μm，记录于批次卡
4. 【监控】泄漏 控制图 UCL=91% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0231，QUALITY Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 066-231 输出 装配工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 热管理 检测数据，写入追溯链
9. 【复盘】班后会评审 热管理系统装配与泄漏测试 执行偏差 1 项，更新 RAG 标签：热管理、泄漏、测试
10. 【改进】将案例 industry-ev-066 纳入 装配工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 热管理 合格率 | ≥92% | 装配工艺 KPI |
| 泄漏 周期 | 41 min | 节拍统计 |
| 热管理系统装 一次通过率 | ≥89% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 装配工艺 企业内控标准 Rev.7

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-066 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 热管理系统装配与泄漏测试 超差 | 热管理 参数漂移 | 按 WI 调机并加严 热管理 抽检至 AQL 0.65 |
| 装配工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 热管理、泄漏、测试 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 231 |

## 9. 术语解释

- **热管理**：装配工艺领域核心度量
- **泄漏**：热管理系统装配与泄漏测试 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -066

## 10. 现场检查清单

- [ ] 热管理系统装配与泄漏测试 适用版本已张贴
- [ ] 热管理/泄漏/测试 仪器校准有效
- [ ] 装配工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-066】新能源汽车制造产线在实施「热管理系统装配与泄漏测试」后，热管理 相关不良从 12.1% 降至 0.6%，AI 质量员与AI 排程员 协同缩短处置时间 46 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 26%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 热管理系统装配与泄漏测试 中第 1 阶段：数据分析（热管理） |
| AI 排程员 | 负责 热管理系统装配与泄漏测试 中第 2 阶段：规则校验（泄漏） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`热管理` `泄漏` `测试` `热管理系统装配与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-148"></a>

## 文件 148 : `packages/database/knowledge-base/industry/doc-067-充电接口检测与国标符合性.md`

```markdown
# 充电接口检测与国标符合性

> **文档编号**：`industry-ev-067`  
> **行业**：新能源汽车制造 · **分类**：测试工艺 · **标签**：充电、国标、检测  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员

---

## 1. 文档概述

《充电接口检测与国标符合性》是 新能源汽车制造 领域 **测试工艺** 的专项作业文件（编号 industry-ev-067）。全文围绕 充电、国标、检测 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 充电接口检测与国标符合性 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 充电 环节常出现与 国标 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 充电接口检测与国标符合性 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 测试程序（针对充电接口检测与国标符合性第1环节）
- 限值设定（针对充电接口检测与国标符合性第2环节）
- 设备校准（针对充电接口检测与国标符合性第3环节）
- 数据归档（针对充电接口检测与国标符合性第4环节）

## 4. 详细操作流程

1. 【准备】查阅「充电接口检测与国标符合性」适用版本 Rev.10，确认与当前 EV 产线工艺路线 industry-ev-067 一致
2. 【数据】从 MES/ERP 导出与 充电、国标、检测 相关数据：订单 111 单、在制 41 批、库存周转 4 天
3. 【首件】按 新能源汽车制造 WI 完成 充电接口检测与国标符合性 首件，实测 充电=111μm，记录于批次卡
4. 【监控】国标 控制图 UCL=97% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0561，QUALITY Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 067-561 输出 测试工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 充电 检测数据，写入追溯链
9. 【复盘】班后会评审 充电接口检测与国标符合性 执行偏差 1 项，更新 RAG 标签：充电、国标、检测
10. 【改进】将案例 industry-ev-067 纳入 测试工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 充电 合格率 | ≥93% | 测试工艺 KPI |
| 国标 周期 | 21 min | 节拍统计 |
| 充电接口检测 一次通过率 | ≥89% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 测试工艺 企业内控标准 Rev.4

## 7. 设备、系统与工具

- EOL 台架
- FCT 治具
- 数据采集仪
- 校准证书库
- 文档 industry-ev-067 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 充电接口检测与国标符合性 超差 | 充电 参数漂移 | 按 WI 调机并加严 充电 抽检至 AQL 0.65 |
| 测试工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 充电、国标、检测 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 561 |

## 9. 术语解释

- **充电**：测试工艺领域核心度量
- **国标**：充电接口检测与国标符合性 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -067

## 10. 现场检查清单

- [ ] 充电接口检测与国标符合性 适用版本已张贴
- [ ] 充电/国标/检测 仪器校准有效
- [ ] 测试工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-067】新能源汽车制造产线在实施「充电接口检测与国标符合性」后，充电 相关不良从 6.1% 降至 0.3%，AI 质量员 协同缩短处置时间 16 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 31%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 充电接口检测与国标符合性 中第 1 阶段：方案生成（充电） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`充电` `国标` `检测` `充电接口检测与国`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-149"></a>

## 文件 149 : `packages/database/knowledge-base/industry/doc-068-整车EOL下线检测流.md`

```markdown
# 整车 EOL 下线检测流程

> **文档编号**：`industry-ev-068`  
> **行业**：新能源汽车制造 · **分类**：测试工艺 · **标签**：EOL、下线、检测  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《整车 EOL 下线检测流程》是 新能源汽车制造 领域 **测试工艺** 的专项作业文件（编号 industry-ev-068）。全文围绕 EOL、下线、检测 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 EOL 下线检测流程 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 EOL 环节常出现与 下线 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 EOL 下线检测流程 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 测试程序（针对EOL 下线检测流程第1环节）
- 限值设定（针对EOL 下线检测流程第2环节）
- 设备校准（针对EOL 下线检测流程第3环节）
- 数据归档（针对EOL 下线检测流程第4环节）

## 4. 详细操作流程

1. 【准备】查阅「整车 EOL 下线检测流程」适用版本 Rev.1，确认与当前 EV 产线工艺路线 industry-ev-068 一致
2. 【数据】从 MES/ERP 导出与 EOL、下线、检测 相关数据：订单 122 单、在制 32 批、库存周转 4 天
3. 【首件】按 新能源汽车制造 WI 完成 EOL 下线检测流程 首件，实测 EOL=122μm，记录于批次卡
4. 【监控】下线 控制图 UCL=88% / LCL=76%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0372，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 068-372 输出 测试工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 EOL 检测数据，写入追溯链
9. 【复盘】班后会评审 整车 EOL 下线检测流程 执行偏差 2 项，更新 RAG 标签：EOL、下线、检测
10. 【改进】将案例 industry-ev-068 纳入 测试工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| EOL 合格率 | ≥93% | 测试工艺 KPI |
| 下线 周期 | 32 min | 节拍统计 |
| EOL 下线 一次通过率 | ≥90% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 测试工艺 企业内控标准 Rev.4

## 7. 设备、系统与工具

- EOL 台架
- FCT 治具
- 数据采集仪
- 校准证书库
- 文档 industry-ev-068 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| EOL 下线检测流程 超差 | EOL 参数漂移 | 按 WI 调机并加严 EOL 抽检至 AQL 0.65 |
| 测试工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| EOL、下线、检测 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 372 |

## 9. 术语解释

- **EOL**：测试工艺领域核心度量
- **下线**：EOL 下线检测流程 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -068

## 10. 现场检查清单

- [ ] 整车 EOL 下线检测流程 适用版本已张贴
- [ ] EOL/下线/检测 仪器校准有效
- [ ] 测试工艺 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-068】新能源汽车制造产线在实施「整车 EOL 下线检测流程」后，EOL 相关不良从 9.2% 降至 0.3%，AI 质量员与AI 数据员 协同缩短处置时间 27 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 42%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 整车 EOL 下线检测流程 中第 1 阶段：数据分析（EOL） |
| AI 数据员 | 负责 整车 EOL 下线检测流程 中第 2 阶段：规则校验（下线） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`EOL` `下线` `检测` `整车 EOL 下`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-150"></a>

## 文件 150 : `packages/database/knowledge-base/industry/doc-069-高压系统安全操作与互锁规.md`

```markdown
# 高压系统安全操作与互锁规范

> **文档编号**：`industry-ev-069`  
> **行业**：新能源汽车制造 · **分类**：安全管理 · **标签**：高压、安全、互锁  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、协同决策员

---

## 1. 文档概述

《高压系统安全操作与互锁规范》是 新能源汽车制造 领域 **安全管理** 的专项作业文件（编号 industry-ev-069）。全文围绕 高压、安全、互锁 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 高压系统安全操作与互锁规范 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 高压 环节常出现与 安全 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 高压系统安全操作与互锁规范 在 安全管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- LOTO 上锁（针对高压系统安全操作与互锁规范第1环节）
- 互锁测试（针对高压系统安全操作与互锁规范第2环节）
- 应急演练（针对高压系统安全操作与互锁规范第3环节）
- 事故上报（针对高压系统安全操作与互锁规范第4环节）

## 4. 详细操作流程

1. 【准备】查阅「高压系统安全操作与互锁规范」适用版本 Rev.12，确认与当前 EV 产线工艺路线 industry-ev-069 一致
2. 【数据】从 MES/ERP 导出与 高压、安全、互锁 相关数据：订单 125 单、在制 25 批、库存周转 5 天
3. 【首件】按 新能源汽车制造 WI 完成 高压系统安全操作与互锁规范 首件，实测 高压=125μm，记录于批次卡
4. 【监控】安全 控制图 UCL=99% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0275，QUALITY Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 069-275 输出 安全管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 高压 检测数据，写入追溯链
9. 【复盘】班后会评审 高压系统安全操作与互锁规范 执行偏差 0 项，更新 RAG 标签：高压、安全、互锁
10. 【改进】将案例 industry-ev-069 纳入 安全管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 高压 合格率 | ≥94% | 安全管理 KPI |
| 安全 周期 | 35 min | 节拍统计 |
| 高压系统安全 一次通过率 | ≥93% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 安全管理 企业内控标准 Rev.6

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-069 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 高压系统安全操作与互锁规范 超差 | 高压 参数漂移 | 按 WI 调机并加严 高压 抽检至 AQL 0.65 |
| 安全管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 高压、安全、互锁 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 275 |

## 9. 术语解释

- **高压**：安全管理领域核心度量
- **安全**：高压系统安全操作与互锁规范 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -069

## 10. 现场检查清单

- [ ] 高压系统安全操作与互锁规范 适用版本已张贴
- [ ] 高压/安全/互锁 仪器校准有效
- [ ] 安全管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-069】新能源汽车制造产线在实施「高压系统安全操作与互锁规范」后，高压 相关不良从 8.5% 降至 2.5%，AI 质量员与协同决策员 协同缩短处置时间 50 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 20%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 高压系统安全操作与互锁规范 中第 1 阶段：规则校验（高压） |
| 协同决策员 | 负责 高压系统安全操作与互锁规范 中第 2 阶段：方案生成（安全） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`高压` `安全` `互锁` `高压系统安全操作`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-151"></a>

## 文件 151 : `packages/database/knowledge-base/industry/doc-070-轻量化材料应用与成本平衡.md`

```markdown
# 轻量化材料应用与成本平衡分析

> **文档编号**：`industry-ev-070`  
> **行业**：新能源汽车制造 · **分类**：工程管理 · **标签**：轻量化、材料、成本  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 计划员、AI 数据员

---

## 1. 文档概述

《轻量化材料应用与成本平衡分析》是 新能源汽车制造 领域 **工程管理** 的专项作业文件（编号 industry-ev-070）。全文围绕 轻量化、材料、成本 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 轻量化材料应用与成本平衡分析 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 轻量化 环节常出现与 材料 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 轻量化材料应用与成本平衡分析 在 工程管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- NPI 门阀（针对轻量化材料应用与成本平衡分析第1环节）
- 试产转化（针对轻量化材料应用与成本平衡分析第2环节）
- 成本核算（针对轻量化材料应用与成本平衡分析第3环节）
- 变更评估（针对轻量化材料应用与成本平衡分析第4环节）

## 4. 详细操作流程

1. 【准备】查阅「轻量化材料应用与成本平衡分析」适用版本 Rev.12，确认与当前 EV 产线工艺路线 industry-ev-070 一致
2. 【数据】从 MES/ERP 导出与 轻量化、材料、成本 相关数据：订单 129 单、在制 49 批、库存周转 6 天
3. 【首件】按 新能源汽车制造 WI 完成 轻量化材料应用与成本平衡分析 首件，实测 轻量化=129μm，记录于批次卡
4. 【监控】材料 控制图 UCL=99% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0479，PLANNER Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 070-479 输出 工程管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 轻量化 检测数据，写入追溯链
9. 【复盘】班后会评审 轻量化材料应用与成本平衡分析 执行偏差 4 项，更新 RAG 标签：轻量化、材料、成本
10. 【改进】将案例 industry-ev-070 纳入 工程管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 轻量化 合格率 | ≥95% | 工程管理 KPI |
| 材料 周期 | 39 min | 节拍统计 |
| 轻量化材料应 一次通过率 | ≥97% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 工程管理 企业内控标准 Rev.3

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-070 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 轻量化材料应用与成本平衡分析 超差 | 轻量化 参数漂移 | 按 WI 调机并加严 轻量化 抽检至 AQL 0.65 |
| 工程管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 轻量化、材料、成本 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 479 |

## 9. 术语解释

- **轻量化**：工程管理领域核心度量
- **材料**：轻量化材料应用与成本平衡分析 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -070

## 10. 现场检查清单

- [ ] 轻量化材料应用与成本平衡分析 适用版本已张贴
- [ ] 轻量化/材料/成本 仪器校准有效
- [ ] 工程管理 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-070】新能源汽车制造产线在实施「轻量化材料应用与成本平衡分析」后，轻量化 相关不良从 12.9% 降至 2.2%，AI 计划员与AI 数据员 协同缩短处置时间 54 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 轻量化材料应用与成本平衡分析 中第 1 阶段：规则校验（轻量化） |
| AI 数据员 | 负责 轻量化材料应用与成本平衡分析 中第 2 阶段：方案生成（材料） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`轻量化` `材料` `成本` `轻量化材料应用与`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-152"></a>

## 文件 152 : `packages/database/knowledge-base/industry/doc-071-电驱系统NVH测试与.md`

```markdown
# 电驱系统 NVH 测试与优化

> **文档编号**：`industry-ev-071`  
> **行业**：新能源汽车制造 · **分类**：测试工艺 · **标签**：NVH、电驱、优化  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 仿真员、AI 质量员

---

## 1. 文档概述

《电驱系统 NVH 测试与优化》是 新能源汽车制造 领域 **测试工艺** 的专项作业文件（编号 industry-ev-071）。全文围绕 NVH、电驱、优化 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 电驱系统 NVH 测试与优化 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 NVH 环节常出现与 电驱 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 电驱系统 NVH 测试与优化 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 测试程序（针对电驱系统 NVH 测试与优化第1环节）
- 限值设定（针对电驱系统 NVH 测试与优化第2环节）
- 设备校准（针对电驱系统 NVH 测试与优化第3环节）
- 数据归档（针对电驱系统 NVH 测试与优化第4环节）

## 4. 详细操作流程

1. 【准备】查阅「电驱系统 NVH 测试与优化」适用版本 Rev.3，确认与当前 EV 产线工艺路线 industry-ev-071 一致
2. 【数据】从 MES/ERP 导出与 NVH、电驱、优化 相关数据：订单 134 单、在制 34 批、库存周转 9 天
3. 【首件】按 新能源汽车制造 WI 完成 电驱系统 NVH 测试与优化 首件，实测 NVH=84μm，记录于批次卡
4. 【监控】电驱 控制图 UCL=90% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0734，SIMULATOR Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 071-734 输出 测试工艺 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 NVH 检测数据，写入追溯链
9. 【复盘】班后会评审 电驱系统 NVH 测试与优化 执行偏差 4 项，更新 RAG 标签：NVH、电驱、优化
10. 【改进】将案例 industry-ev-071 纳入 测试工艺 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| NVH 合格率 | ≥98% | 测试工艺 KPI |
| 电驱 周期 | 44 min | 节拍统计 |
| 电驱系统 N 一次通过率 | ≥92% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 测试工艺 企业内控标准 Rev.6

## 7. 设备、系统与工具

- EOL 台架
- FCT 治具
- 数据采集仪
- 校准证书库
- 文档 industry-ev-071 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 电驱系统 NVH 测试与优化 超差 | NVH 参数漂移 | 按 WI 调机并加严 NVH 抽检至 AQL 0.65 |
| 测试工艺 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| NVH、电驱、优化 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 734 |

## 9. 术语解释

- **NVH**：测试工艺领域核心度量
- **电驱**：电驱系统 NVH 测试与优化 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -071

## 10. 现场检查清单

- [ ] 电驱系统 NVH 测试与优化 适用版本已张贴
- [ ] NVH/电驱/优化 仪器校准有效
- [ ] 测试工艺 首件已签字
- [ ] Agent SIMULATOR 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-071】新能源汽车制造产线在实施「电驱系统 NVH 测试与优化」后，NVH 相关不良从 11.4% 降至 2.5%，AI 仿真员与AI 质量员 协同缩短处置时间 29 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 仿真员 | 负责 电驱系统 NVH 测试与优化 中第 1 阶段：规则校验（NVH） |
| AI 质量员 | 负责 电驱系统 NVH 测试与优化 中第 2 阶段：方案生成（电驱） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`NVH` `电驱` `优化` `电驱系统 NVH`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-153"></a>

## 文件 153 : `packages/database/knowledge-base/industry/doc-072-整车软件OTA发布与.md`

```markdown
# 整车软件 OTA 发布与回滚流程

> **文档编号**：`industry-ev-072`  
> **行业**：新能源汽车制造 · **分类**：软件管理 · **标签**：OTA、软件、回滚  
> **关联场景**：新能源汽车制造 · **关联 Agent**：协同决策员、AI 数据员

---

## 1. 文档概述

《整车软件 OTA 发布与回滚流程》是 新能源汽车制造 领域 **软件管理** 的专项作业文件（编号 industry-ev-072）。全文围绕 OTA、软件、回滚 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 软件 OTA 发布与回滚流程 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 OTA 环节常出现与 软件 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 软件 OTA 发布与回滚流程 在 软件管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 版本发布（针对软件 OTA 发布与回滚流程第1环节）
- 回滚策略（针对软件 OTA 发布与回滚流程第2环节）
- 灰度规则（针对软件 OTA 发布与回滚流程第3环节）
- 安全审计（针对软件 OTA 发布与回滚流程第4环节）

## 4. 详细操作流程

1. 【准备】查阅「整车软件 OTA 发布与回滚流程」适用版本 Rev.8，确认与当前 EV 产线工艺路线 industry-ev-072 一致
2. 【数据】从 MES/ERP 导出与 OTA、软件、回滚 相关数据：订单 107 单、在制 27 批、库存周转 7 天
3. 【首件】按 新能源汽车制造 WI 完成 软件 OTA 发布与回滚流程 首件，实测 OTA=57μm，记录于批次卡
4. 【监控】软件 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0907，DECISION Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 072-907 输出 软件管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 OTA 检测数据，写入追溯链
9. 【复盘】班后会评审 整车软件 OTA 发布与回滚流程 执行偏差 2 项，更新 RAG 标签：OTA、软件、回滚
10. 【改进】将案例 industry-ev-072 纳入 软件管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| OTA 合格率 | ≥96% | 软件管理 KPI |
| 软件 周期 | 17 min | 节拍统计 |
| 软件 OTA 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 软件管理 企业内控标准 Rev.8

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-072 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 软件 OTA 发布与回滚流程 超差 | OTA 参数漂移 | 按 WI 调机并加严 OTA 抽检至 AQL 0.65 |
| 软件管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| OTA、软件、回滚 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 907 |

## 9. 术语解释

- **OTA**：软件管理领域核心度量
- **软件**：软件 OTA 发布与回滚流程 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -072

## 10. 现场检查清单

- [ ] 整车软件 OTA 发布与回滚流程 适用版本已张贴
- [ ] OTA/软件/回滚 仪器校准有效
- [ ] 软件管理 首件已签字
- [ ] Agent DECISION 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-072】新能源汽车制造产线在实施「整车软件 OTA 发布与回滚流程」后，OTA 相关不良从 8.7% 降至 1.7%，协同决策员与AI 数据员 协同缩短处置时间 42 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| 协同决策员 | 负责 整车软件 OTA 发布与回滚流程 中第 1 阶段：规则校验（OTA） |
| AI 数据员 | 负责 整车软件 OTA 发布与回滚流程 中第 2 阶段：方案生成（软件） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`OTA` `软件` `回滚` `整车软件 OTA`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-154"></a>

## 文件 154 : `packages/database/knowledge-base/industry/doc-073-零部件APQP与P.md`

```markdown
# 零部件 APQP 与 PPAP 提交指南

> **文档编号**：`industry-ev-073`  
> **行业**：新能源汽车制造 · **分类**：质量管理 · **标签**：APQP、PPAP、零部件  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 计划员

---

## 1. 文档概述

《零部件 APQP 与 PPAP 提交指南》是 新能源汽车制造 领域 **质量管理** 的专项作业文件（编号 industry-ev-073）。全文围绕 APQP、PPAP、零部件 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 零部件 APQP 与 PPAP 提交指南 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 APQP 环节常出现与 PPAP 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 零部件 APQP 与 PPAP 提交指南 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 追溯体系（针对零部件 APQP 与 PPAP 提交指南第1环节）
- SPC（针对零部件 APQP 与 PPAP 提交指南第2环节）
- FMEA（针对零部件 APQP 与 PPAP 提交指南第3环节）
- 8D 改善（针对零部件 APQP 与 PPAP 提交指南第4环节）

## 4. 详细操作流程

1. 【准备】查阅「零部件 APQP 与 PPAP 提交指南」适用版本 Rev.9，确认与当前 EV 产线工艺路线 industry-ev-073 一致
2. 【数据】从 MES/ERP 导出与 APQP、PPAP、零部件 相关数据：订单 148 单、在制 28 批、库存周转 4 天
3. 【首件】按 新能源汽车制造 WI 完成 零部件 APQP 与 PPAP 提交指南 首件，实测 APQP=98μm，记录于批次卡
4. 【监控】PPAP 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0848，QUALITY Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 073-848 输出 质量管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 APQP 检测数据，写入追溯链
9. 【复盘】班后会评审 零部件 APQP 与 PPAP 提交指南 执行偏差 3 项，更新 RAG 标签：APQP、PPAP、零部件
10. 【改进】将案例 industry-ev-073 纳入 质量管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| APQP 合格率 | ≥93% | 质量管理 KPI |
| PPAP 周期 | 58 min | 节拍统计 |
| 零部件 AP 一次通过率 | ≥96% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 质量管理 企业内控标准 Rev.3

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-073 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 零部件 APQP 与 PPAP 提交指南 超差 | APQP 参数漂移 | 按 WI 调机并加严 APQP 抽检至 AQL 0.65 |
| 质量管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| APQP、PPAP、零部件 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 848 |

## 9. 术语解释

- **APQP**：质量管理领域核心度量
- **PPAP**：零部件 APQP 与 PPAP 提交指南 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -073

## 10. 现场检查清单

- [ ] 零部件 APQP 与 PPAP 提交指南 适用版本已张贴
- [ ] APQP/PPAP/零部件 仪器校准有效
- [ ] 质量管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-073】新能源汽车制造产线在实施「零部件 APQP 与 PPAP 提交指南」后，APQP 相关不良从 5.8% 降至 2.2%，AI 质量员与AI 计划员 协同缩短处置时间 23 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 43%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 零部件 APQP 与 PPAP 提交指南 中第 1 阶段：数据分析（APQP） |
| AI 计划员 | 负责 零部件 APQP 与 PPAP 提交指南 中第 2 阶段：规则校验（PPAP） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`APQP` `PPAP` `零部件` `零部件 APQP`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-155"></a>

## 文件 155 : `packages/database/knowledge-base/industry/doc-074-八年质保数据追溯与索赔分.md`

```markdown
# 八年质保数据追溯与索赔分析

> **文档编号**：`industry-ev-074`  
> **行业**：新能源汽车制造 · **分类**：质量管理 · **标签**：质保、索赔、追溯  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 质量员、AI 数据员

---

## 1. 文档概述

《八年质保数据追溯与索赔分析》是 新能源汽车制造 领域 **质量管理** 的专项作业文件（编号 industry-ev-074）。全文围绕 质保、索赔、追溯 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 八年质保数据追溯与索赔分析 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 质保 环节常出现与 索赔 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 八年质保数据追溯与索赔分析 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 追溯体系（针对八年质保数据追溯与索赔分析第1环节）
- SPC（针对八年质保数据追溯与索赔分析第2环节）
- FMEA（针对八年质保数据追溯与索赔分析第3环节）
- 8D 改善（针对八年质保数据追溯与索赔分析第4环节）

## 4. 详细操作流程

1. 【准备】查阅「八年质保数据追溯与索赔分析」适用版本 Rev.2，确认与当前 EV 产线工艺路线 industry-ev-074 一致
2. 【数据】从 MES/ERP 导出与 质保、索赔、追溯 相关数据：订单 137 单、在制 27 批、库存周转 9 天
3. 【首件】按 新能源汽车制造 WI 完成 八年质保数据追溯与索赔分析 首件，实测 质保=87μm，记录于批次卡
4. 【监控】索赔 控制图 UCL=89% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0937，QUALITY Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 074-937 输出 质量管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 质保 检测数据，写入追溯链
9. 【复盘】班后会评审 八年质保数据追溯与索赔分析 执行偏差 2 项，更新 RAG 标签：质保、索赔、追溯
10. 【改进】将案例 industry-ev-074 纳入 质量管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 质保 合格率 | ≥98% | 质量管理 KPI |
| 索赔 周期 | 47 min | 节拍统计 |
| 八年质保数据 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 质量管理 企业内控标准 Rev.2

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-074 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 八年质保数据追溯与索赔分析 超差 | 质保 参数漂移 | 按 WI 调机并加严 质保 抽检至 AQL 0.65 |
| 质量管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 质保、索赔、追溯 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 937 |

## 9. 术语解释

- **质保**：质量管理领域核心度量
- **索赔**：八年质保数据追溯与索赔分析 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -074

## 10. 现场检查清单

- [ ] 八年质保数据追溯与索赔分析 适用版本已张贴
- [ ] 质保/索赔/追溯 仪器校准有效
- [ ] 质量管理 首件已签字
- [ ] Agent QUALITY 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-074】新能源汽车制造产线在实施「八年质保数据追溯与索赔分析」后，质保 相关不良从 6.7% 降至 1.1%，AI 质量员与AI 数据员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 32%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 质量员 | 负责 八年质保数据追溯与索赔分析 中第 1 阶段：数据分析（质保） |
| AI 数据员 | 负责 八年质保数据追溯与索赔分析 中第 2 阶段：规则校验（索赔） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`质保` `索赔` `追溯` `八年质保数据追溯`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-156"></a>

## 文件 156 : `packages/database/knowledge-base/industry/doc-075-退役电芯梯次利用评估标准.md`

```markdown
# 退役电芯梯次利用评估标准

> **文档编号**：`industry-ev-075`  
> **行业**：新能源汽车制造 · **分类**：可持续 · **标签**：梯次、回收、评估  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 计划员、协同决策员

---

## 1. 文档概述

《退役电芯梯次利用评估标准》是 新能源汽车制造 领域 **可持续** 的专项作业文件（编号 industry-ev-075）。全文围绕 梯次、回收、评估 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 退役电芯梯次利用评估标准 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 梯次 环节常出现与 回收 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 退役电芯梯次利用评估标准 在 可持续 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 碳足迹（针对退役电芯梯次利用评估标准第1环节）
- 回收评估（针对退役电芯梯次利用评估标准第2环节）
- 梯次利用（针对退役电芯梯次利用评估标准第3环节）
- 环保声明（针对退役电芯梯次利用评估标准第4环节）

## 4. 详细操作流程

1. 【准备】查阅「退役电芯梯次利用评估标准」适用版本 Rev.10，确认与当前 EV 产线工艺路线 industry-ev-075 一致
2. 【数据】从 MES/ERP 导出与 梯次、回收、评估 相关数据：订单 127 单、在制 47 批、库存周转 5 天
3. 【首件】按 新能源汽车制造 WI 完成 退役电芯梯次利用评估标准 首件，实测 梯次=127μm，记录于批次卡
4. 【监控】回收 控制图 UCL=97% / LCL=73%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0177，PLANNER Agent 推送 8D 小组
6. 【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 075-177 输出 可持续 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 梯次 检测数据，写入追溯链
9. 【复盘】班后会评审 退役电芯梯次利用评估标准 执行偏差 2 项，更新 RAG 标签：梯次、回收、评估
10. 【改进】将案例 industry-ev-075 纳入 可持续 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 梯次 合格率 | ≥94% | 可持续 KPI |
| 回收 周期 | 37 min | 节拍统计 |
| 退役电芯梯次 一次通过率 | ≥95% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 可持续 企业内控标准 Rev.7

## 7. 设备、系统与工具

- 电池模组线
- 电驱总成台
- EOL 检测线
- Andon 系统
- 文档 industry-ev-075 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 退役电芯梯次利用评估标准 超差 | 梯次 参数漂移 | 按 WI 调机并加严 梯次 抽检至 AQL 0.65 |
| 可持续 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 梯次、回收、评估 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 177 |

## 9. 术语解释

- **梯次**：可持续领域核心度量
- **回收**：退役电芯梯次利用评估标准 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -075

## 10. 现场检查清单

- [ ] 退役电芯梯次利用评估标准 适用版本已张贴
- [ ] 梯次/回收/评估 仪器校准有效
- [ ] 可持续 首件已签字
- [ ] Agent PLANNER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-075】新能源汽车制造产线在实施「退役电芯梯次利用评估标准」后，梯次 相关不良从 6.7% 降至 0.6%，AI 计划员与协同决策员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 计划员 | 负责 退役电芯梯次利用评估标准 中第 1 阶段：数据分析（梯次） |
| 协同决策员 | 负责 退役电芯梯次利用评估标准 中第 2 阶段：规则校验（回收） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`梯次` `回收` `评估` `退役电芯梯次利用`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-157"></a>

## 文件 157 : `packages/database/knowledge-base/industry/doc-076-总装产线节拍优化与工位平.md`

```markdown
# 总装产线节拍优化与工位平衡

> **文档编号**：`industry-ev-076`  
> **行业**：新能源汽车制造 · **分类**：排程优化 · **标签**：节拍、工位、平衡  
> **关联场景**：新能源汽车制造 · **关联 Agent**：AI 排程员、AI 计划员

---

## 1. 文档概述

《总装产线节拍优化与工位平衡》是 新能源汽车制造 领域 **排程优化** 的专项作业文件（编号 industry-ev-076）。全文围绕 节拍、工位、平衡 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线节拍优化与工位平衡 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 节拍 环节常出现与 工位 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 产线节拍优化与工位平衡 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- 产线排程（针对产线节拍优化与工位平衡第1环节）
- 换线优化（针对产线节拍优化与工位平衡第2环节）
- 插单规则（针对产线节拍优化与工位平衡第3环节）
- 甘特发布（针对产线节拍优化与工位平衡第4环节）

## 4. 详细操作流程

1. 【准备】查阅「总装产线节拍优化与工位平衡」适用版本 Rev.9，确认与当前 EV 产线工艺路线 industry-ev-076 一致
2. 【数据】从 MES/ERP 导出与 节拍、工位、平衡 相关数据：订单 134 单、在制 34 批、库存周转 6 天
3. 【首件】按 新能源汽车制造 WI 完成 产线节拍优化与工位平衡 首件，实测 节拍=134μm，记录于批次卡
4. 【监控】工位 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0584，SCHEDULER Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 076-584 输出 排程优化 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 节拍 检测数据，写入追溯链
9. 【复盘】班后会评审 总装产线节拍优化与工位平衡 执行偏差 4 项，更新 RAG 标签：节拍、工位、平衡
10. 【改进】将案例 industry-ev-076 纳入 排程优化 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| 节拍 合格率 | ≥95% | 排程优化 KPI |
| 工位 周期 | 44 min | 节拍统计 |
| 产线节拍优化 一次通过率 | ≥92% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 排程优化 企业内控标准 Rev.9

## 7. 设备、系统与工具

- 甘特排程软件
- 换线计时器
- MES 工单
- Andon 看板
- 文档 industry-ev-076 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 产线节拍优化与工位平衡 超差 | 节拍 参数漂移 | 按 WI 调机并加严 节拍 抽检至 AQL 0.65 |
| 排程优化 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| 节拍、工位、平衡 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 584 |

## 9. 术语解释

- **节拍**：排程优化领域核心度量
- **工位**：产线节拍优化与工位平衡 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -076

## 10. 现场检查清单

- [ ] 总装产线节拍优化与工位平衡 适用版本已张贴
- [ ] 节拍/工位/平衡 仪器校准有效
- [ ] 排程优化 首件已签字
- [ ] Agent SCHEDULER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-076】新能源汽车制造产线在实施「总装产线节拍优化与工位平衡」后，节拍 相关不良从 5.4% 降至 2.8%，AI 排程员与AI 计划员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 排程员 | 负责 总装产线节拍优化与工位平衡 中第 1 阶段：执行跟踪（节拍） |
| AI 计划员 | 负责 总装产线节拍优化与工位平衡 中第 2 阶段：数据分析（工位） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`节拍` `工位` `平衡` `总装产线节拍优化`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-158"></a>

## 文件 158 : `packages/database/knowledge-base/industry/doc-077-新能源汽车多Agent.md`

```markdown
# 新能源汽车多 Agent 协同决策案例

> **文档编号**：`industry-ev-077`  
> **行业**：新能源汽车制造 · **分类**：多智能体 · **标签**：Agent、协同、决策  
> **关联场景**：新能源汽车制造 · **关联 Agent**：协同决策员、AI 调度员、AI 计划员

---

## 1. 文档概述

《新能源汽车多 Agent 协同决策案例》是 新能源汽车制造 领域 **多智能体** 的专项作业文件（编号 industry-ev-077）。全文围绕 Agent、协同、决策 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 多 Agent 协同决策案例 相关工序与决策。

## 2. 背景与目的

新能源汽车制造 客户在 Agent 环节常出现与 协同 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 多 Agent 协同决策案例 在 多智能体 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。

## 3. 适用范围

- Agent 分工（针对多 Agent 协同决策案例第1环节）
- 任务分配（针对多 Agent 协同决策案例第2环节）
- 冲突消解（针对多 Agent 协同决策案例第3环节）
- 决策记录（针对多 Agent 协同决策案例第4环节）

## 4. 详细操作流程

1. 【准备】查阅「新能源汽车多 Agent 协同决策案例」适用版本 Rev.4，确认与当前 EV 产线工艺路线 industry-ev-077 一致
2. 【数据】从 MES/ERP 导出与 Agent、协同、决策 相关数据：订单 123 单、在制 23 批、库存周转 5 天
3. 【首件】按 新能源汽车制造 WI 完成 多 Agent 协同决策案例 首件，实测 Agent=73μm，记录于批次卡
4. 【监控】协同 控制图 UCL=91% / LCL=75%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-EV-0723，DECISION Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 077-723 输出 多智能体 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 VIN 与 Agent 检测数据，写入追溯链
9. 【复盘】班后会评审 新能源汽车多 Agent 协同决策案例 执行偏差 3 项，更新 RAG 标签：Agent、协同、决策
10. 【改进】将案例 industry-ev-077 纳入 多智能体 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| Agent 合格率 | ≥94% | 多智能体 KPI |
| 协同 周期 | 33 min | 节拍统计 |
| 多 Agen 一次通过率 | ≥91% | 不含返工 |
| 数据追溯粒度 | VIN+模组 SN | 强制绑定 |

## 6. 引用标准与规范

- IATF 16949
- GB 38031 电动汽车安全
- QC/T 1022 动力电池
- GB 18384 碰撞安全
- 多智能体 企业内控标准 Rev.4

## 7. 设备、系统与工具

- Contract Net 调度器
- Agent 注册中心
- 任务黑板
- 决策日志
- 文档 industry-ev-077 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 多 Agent 协同决策案例 超差 | Agent 参数漂移 | 按 WI 调机并加严 Agent 抽检至 AQL 0.65 |
| 多智能体 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| Agent、协同、决策 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 723 |

## 9. 术语解释

- **Agent**：多智能体领域核心度量
- **协同**：多 Agent 协同决策案例 标准作业程序
- **EV-TERM**：新能源汽车制造 专用术语，见企业术语库 -077

## 10. 现场检查清单

- [ ] 新能源汽车多 Agent 协同决策案例 适用版本已张贴
- [ ] Agent/协同/决策 仪器校准有效
- [ ] 多智能体 首件已签字
- [ ] Agent DECISION 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-ev-077】新能源汽车制造产线在实施「新能源汽车多 Agent 协同决策案例」后，Agent 相关不良从 8.3% 降至 0.3%，协同决策员与AI 调度员与AI 计划员 协同缩短处置时间 18 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 43%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| 协同决策员 | 负责 新能源汽车多 Agent 协同决策案例 中第 1 阶段：规则校验（Agent） |
| AI 调度员 | 负责 新能源汽车多 Agent 协同决策案例 中第 2 阶段：方案生成（协同） |
| AI 计划员 | 负责 新能源汽车多 Agent 协同决策案例 中第 3 阶段：执行跟踪（决策） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`Agent` `协同` `决策` `新能源汽车多 A`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-159"></a>

## 文件 159 : `packages/database/knowledge-base/industry/doc-078-AIAgentStu.md`

```markdown
# AI Agent Studio 工业多智能体架构白皮书

> **文档编号**：`industry-platform-078`  
> **行业**：平台与多智能体 · **分类**：平台架构 · **标签**：Agent、架构、Studio  
> **关联场景**：AI Agent Studio 平台 · **关联 Agent**：AI 调度员、协同决策员

---

## 1. 文档概述

《AI Agent Studio 工业多智能体架构白皮书》是 平台与多智能体 领域 **平台架构** 的专项作业文件（编号 industry-platform-078）。全文围绕 Agent、架构、Studio 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 工业多智能体架构白皮书 相关工序与决策。

## 2. 背景与目的

平台与多智能体 客户在 Agent 环节常出现与 架构 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 工业多智能体架构白皮书 在 平台架构 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `PLATFORM` 对齐。

## 3. 适用范围

- 服务划分（针对工业多智能体架构白皮书第1环节）
- 权限模型（针对工业多智能体架构白皮书第2环节）
- 部署拓扑（针对工业多智能体架构白皮书第3环节）
- 监控告警（针对工业多智能体架构白皮书第4环节）

## 4. 详细操作流程

1. 【准备】查阅「AI Agent Studio 工业多智能体架构白皮书」适用版本 Rev.9，确认与当前 PLATFORM 产线工艺路线 industry-platform-078 一致
2. 【数据】从 MES/ERP 导出与 Agent、架构、Studio 相关数据：订单 140 单、在制 40 批、库存周转 3 天
3. 【首件】按 平台与多智能体 WI 完成 工业多智能体架构白皮书 首件，实测 Agent=90rpm，记录于批次卡
4. 【监控】架构 控制图 UCL=96% / LCL=76%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-PLATFORM-0140，DISPATCHER Agent 推送 8D 小组
6. 【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 078-140 输出 平台架构 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 Agent 检测数据，写入追溯链
9. 【复盘】班后会评审 AI Agent Studio 工业多智能体架构白皮书 执行偏差 0 项，更新 RAG 标签：Agent、架构、Studio
10. 【改进】将案例 industry-platform-078 纳入 平台架构 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| Agent 合格率 | ≥92% | 平台架构 KPI |
| 架构 周期 | 50 min | 节拍统计 |
| 工业多智能体 一次通过率 | ≥88% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- ISO/IEC 42001 AI 管理
- 企业 Agent Studio 架构规范
- CNP 合同网协议企业标准
- 平台架构 企业内控标准 Rev.6

## 7. 设备、系统与工具

- Agent Studio
- NestJS API
- PostgreSQL
- Workflow 引擎
- 文档 industry-platform-078 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| 工业多智能体架构白皮书 超差 | Agent 参数漂移 | 按 WI 调机并加严 Agent 抽检至 AQL 0.65 |
| 平台架构 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| Agent、架构、Studio 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 140 |

## 9. 术语解释

- **Agent**：平台架构领域核心度量
- **架构**：工业多智能体架构白皮书 标准作业程序
- **PLATFORM-TERM**：平台与多智能体 专用术语，见企业术语库 -078

## 10. 现场检查清单

- [ ] AI Agent Studio 工业多智能体架构白皮书 适用版本已张贴
- [ ] Agent/架构/Studio 仪器校准有效
- [ ] 平台架构 首件已签字
- [ ] Agent DISPATCHER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-platform-078】平台与多智能体产线在实施「AI Agent Studio 工业多智能体架构白皮书」后，Agent 相关不良从 9.0% 降至 2.5%，AI 调度员与协同决策员 协同缩短处置时间 35 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 35%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 调度员 | 负责 AI Agent Studio 工业多智能体架构白皮书 中第 1 阶段：执行跟踪（Agent） |
| 协同决策员 | 负责 AI Agent Studio 工业多智能体架构白皮书 中第 2 阶段：数据分析（架构） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`Agent` `架构` `Studio` `AI Agent`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-160"></a>

## 文件 160 : `packages/database/knowledge-base/industry/doc-079-工业RAG知识库建设.md`

```markdown
# 工业 RAG 知识库建设与向量检索最佳实践

> **文档编号**：`industry-platform-079`  
> **行业**：平台与多智能体 · **分类**：知识管理 · **标签**：RAG、向量、知识库  
> **关联场景**：AI Agent Studio 平台 · **关联 Agent**：AI 数据员、协同决策员

---

## 1. 文档概述

《工业 RAG 知识库建设与向量检索最佳实践》是 平台与多智能体 领域 **知识管理** 的专项作业文件（编号 industry-platform-079）。全文围绕 RAG、向量、知识库 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 RAG 知识库建设与向量检索最佳实践 相关工序与决策。

## 2. 背景与目的

平台与多智能体 客户在 RAG 环节常出现与 向量 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 RAG 知识库建设与向量检索最佳实践 在 知识管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `PLATFORM` 对齐。

## 3. 适用范围

- 切片策略（针对RAG 知识库建设与向量检索最佳实践第1环节）
- Embedding（针对RAG 知识库建设与向量检索最佳实践第2环节）
- 检索评估（针对RAG 知识库建设与向量检索最佳实践第3环节）
- 版本治理（针对RAG 知识库建设与向量检索最佳实践第4环节）

## 4. 详细操作流程

1. 【准备】查阅「工业 RAG 知识库建设与向量检索最佳实践」适用版本 Rev.8，确认与当前 PLATFORM 产线工艺路线 industry-platform-079 一致
2. 【数据】从 MES/ERP 导出与 RAG、向量、知识库 相关数据：订单 135 单、在制 45 批、库存周转 6 天
3. 【首件】按 平台与多智能体 WI 完成 RAG 知识库建设与向量检索最佳实践 首件，实测 RAG=85rpm，记录于批次卡
4. 【监控】向量 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-PLATFORM-0535，DATA_ANALYST Agent 推送 8D 小组
6. 【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 079-535 输出 知识管理 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 RAG 检测数据，写入追溯链
9. 【复盘】班后会评审 工业 RAG 知识库建设与向量检索最佳实践 执行偏差 0 项，更新 RAG 标签：RAG、向量、知识库
10. 【改进】将案例 industry-platform-079 纳入 知识管理 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| RAG 合格率 | ≥95% | 知识管理 KPI |
| 向量 周期 | 45 min | 节拍统计 |
| RAG 知识 一次通过率 | ≥93% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- ISO/IEC 42001 AI 管理
- 企业 Agent Studio 架构规范
- CNP 合同网协议企业标准
- 知识管理 企业内控标准 Rev.5

## 7. 设备、系统与工具

- RAG 向量库
- Embedding 服务
- 文档切片器
- 检索评估脚本
- 文档 industry-platform-079 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| RAG 知识库建设与向量检索最佳实践 超差 | RAG 参数漂移 | 按 WI 调机并加严 RAG 抽检至 AQL 0.65 |
| 知识管理 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| RAG、向量、知识库 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 535 |

## 9. 术语解释

- **RAG**：知识管理领域核心度量
- **向量**：RAG 知识库建设与向量检索最佳实践 标准作业程序
- **PLATFORM-TERM**：平台与多智能体 专用术语，见企业术语库 -079

## 10. 现场检查清单

- [ ] 工业 RAG 知识库建设与向量检索最佳实践 适用版本已张贴
- [ ] RAG/向量/知识库 仪器校准有效
- [ ] 知识管理 首件已签字
- [ ] Agent DATA_ANALYST 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-platform-079】平台与多智能体产线在实施「工业 RAG 知识库建设与向量检索最佳实践」后，RAG 相关不良从 12.5% 降至 1.4%，AI 数据员与协同决策员 协同缩短处置时间 30 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 30%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 数据员 | 负责 工业 RAG 知识库建设与向量检索最佳实践 中第 1 阶段：方案生成（RAG） |
| 协同决策员 | 负责 工业 RAG 知识库建设与向量检索最佳实践 中第 2 阶段：执行跟踪（向量） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`RAG` `向量` `知识库` `工业 RAG 知`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-161"></a>

## 文件 161 : `packages/database/knowledge-base/industry/doc-080-ContractNet.md`

```markdown
# Contract Net 合同网协议任务分配指南

> **文档编号**：`industry-platform-080`  
> **行业**：平台与多智能体 · **分类**：多智能体 · **标签**：CNP、合同网、分配  
> **关联场景**：AI Agent Studio 平台 · **关联 Agent**：AI 调度员、协同决策员

---

## 1. 文档概述

《Contract Net 合同网协议任务分配指南》是 平台与多智能体 领域 **多智能体** 的专项作业文件（编号 industry-platform-080）。全文围绕 CNP、合同网、分配 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 Contract Net 合同网协议任务 相关工序与决策。

## 2. 背景与目的

平台与多智能体 客户在 CNP 环节常出现与 合同网 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 Contract Net 合同网协议任务 在 多智能体 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `PLATFORM` 对齐。

## 3. 适用范围

- Agent 分工（针对Contract Net 合同网协议任务第1环节）
- 任务分配（针对Contract Net 合同网协议任务第2环节）
- 冲突消解（针对Contract Net 合同网协议任务第3环节）
- 决策记录（针对Contract Net 合同网协议任务第4环节）

## 4. 详细操作流程

1. 【准备】查阅「Contract Net 合同网协议任务分配指南」适用版本 Rev.11，确认与当前 PLATFORM 产线工艺路线 industry-platform-080 一致
2. 【数据】从 MES/ERP 导出与 CNP、合同网、分配 相关数据：订单 110 单、在制 30 批、库存周转 5 天
3. 【首件】按 平台与多智能体 WI 完成 Contract Net 合同网协议任务 首件，实测 CNP=60rpm，记录于批次卡
4. 【监控】合同网 控制图 UCL=98% / LCL=78%，每小时点检并上传 SPC 数据库
5. 【异常】偏离时开 NCR-PLATFORM-0310，DISPATCHER Agent 推送 8D 小组
6. 【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签
7. 【批次】完工批次 080-310 输出 多智能体 报告 PDF，附 3 项检测原始记录
8. 【追溯】绑定 PCB 条码 与 CNP 检测数据，写入追溯链
9. 【复盘】班后会评审 Contract Net 合同网协议任务分配指南 执行偏差 0 项，更新 RAG 标签：CNP、合同网、分配
10. 【改进】将案例 industry-platform-080 纳入 多智能体 知识库，供 Agent 下次检索增强

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
| CNP 合格率 | ≥94% | 多智能体 KPI |
| 合同网 周期 | 20 min | 节拍统计 |
| Contra 一次通过率 | ≥88% | 不含返工 |
| 数据追溯粒度 | PCB 条码 | 强制绑定 |

## 6. 引用标准与规范

- ISO/IEC 42001 AI 管理
- 企业 Agent Studio 架构规范
- CNP 合同网协议企业标准
- 多智能体 企业内控标准 Rev.5

## 7. 设备、系统与工具

- Contract Net 调度器
- Agent 注册中心
- 任务黑板
- 决策日志
- 文档 industry-platform-080 专用数据采集点

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
| Contract Net 合同网协议任务 超差 | CNP 参数漂移 | 按 WI 调机并加严 CNP 抽检至 AQL 0.65 |
| 多智能体 延误 | 齐套不足或排程冲突 | AI 排程员重算并启用紧急料塔/外协 |
| CNP、合同网、分配 数据缺失 | MES 接口延迟 | 切换缓存队列并人工补录批次 310 |

## 9. 术语解释

- **CNP**：多智能体领域核心度量
- **合同网**：Contract Net 合同网协议任务 标准作业程序
- **PLATFORM-TERM**：平台与多智能体 专用术语，见企业术语库 -080

## 10. 现场检查清单

- [ ] Contract Net 合同网协议任务分配指南 适用版本已张贴
- [ ] CNP/合同网/分配 仪器校准有效
- [ ] 多智能体 首件已签字
- [ ] Agent DISPATCHER 任务已关联知识库
- [ ] 异常升级路径已测试

## 11. 典型案例

【案例 industry-platform-080】平台与多智能体产线在实施「Contract Net 合同网协议任务分配指南」后，CNP 相关不良从 11.0% 降至 1.4%，AI 调度员与协同决策员 协同缩短处置时间 45 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 30%。

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
| AI 调度员 | 负责 Contract Net 合同网协议任务分配指南 中第 1 阶段：规则校验（CNP） |
| 协同决策员 | 负责 Contract Net 合同网协议任务分配指南 中第 2 阶段：方案生成（合同网） |

## 13. RAG 检索增强说明

- 知识库 ID：`industry-kb-main`
- 推荐 Query：`CNP` `合同网` `分配` `Contract`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
```

---

<a id="file-162"></a>

## 文件 162 : `packages/database/package.json`

```json
{
  "name": "@ai-studio/database",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "generate": "prisma generate",
    "push": "prisma db push",
    "seed": "tsx prisma/seed.ts",
    "ingest": "tsx src/ingest-industry-docs.ts",
    "content:generate": "tsx scripts/generate-doc-content.ts",
    "studio": "prisma studio",
    "build": "tsc",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@prisma/client": "^6.1.0",
    "@ai-studio/utils": "workspace:*"
  },
  "devDependencies": {
    "prisma": "^6.1.0",
    "tsx": "^4.19.2",
    "typescript": "^5.7.2",
    "rimraf": "^6.0.1",
    "bcryptjs": "^2.4.3",
    "@types/bcryptjs": "^2.4.6",
    "@types/node": "^22.10.2"
  }
}
```

---

<a id="file-163"></a>

## 文件 163 : `packages/database/prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  role      UserRole @default(USER)
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  agents         Agent[]
  workflows      Workflow[]
  knowledgeBases KnowledgeBase[]
  conversations  Conversation[]
  tasks          Task[]

  @@map("users")
}

enum UserRole {
  ADMIN
  USER
  OPERATOR
}

model Agent {
  id          String      @id @default(cuid())
  name        String
  description String?
  avatar      String?
  systemPrompt String     @db.Text
  model       String      @default("deepseek-chat")
  temperature Float       @default(0.7)
  maxTokens   Int         @default(4096)
  tools       Json        @default("[]")
  status      AgentStatus @default(IDLE)
  category    AgentCategory @default(CUSTOM)
  isTemplate  Boolean     @default(false)
  userId      String
  user        User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  workflowId  String?
  workflow    Workflow?   @relation(fields: [workflowId], references: [id])
  knowledgeBaseId String?
  knowledgeBase   KnowledgeBase? @relation(fields: [knowledgeBaseId], references: [id], onDelete: SetNull)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt

  tasks       Task[]
  logs        Log[]
  toolCalls   ToolCall[]

  @@map("agents")
}

enum AgentStatus {
  IDLE
  THINKING
  EXECUTING
  WAITING
  ERROR
  OFFLINE
}

enum AgentCategory {
  PLANNER
  DATA_ANALYST
  SCHEDULER
  DISPATCHER
  DESIGNER
  QUALITY
  SIMULATOR
  DECISION
  CUSTOM
}

model Workflow {
  id          String         @id @default(cuid())
  name        String
  description String?
  nodes       Json           @default("[]")
  edges       Json           @default("[]")
  status      WorkflowStatus @default(DRAFT)
  version     Int            @default(1)
  userId      String
  user        User           @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt

  agents      Agent[]
  tasks       Task[]

  @@map("workflows")
}

enum WorkflowStatus {
  DRAFT
  ACTIVE
  PAUSED
  ARCHIVED
}

model KnowledgeBase {
  id          String   @id @default(cuid())
  name        String
  description String?
  embeddingModel String @default("local-embedding")
  chunkSize   Int      @default(512)
  chunkOverlap Int     @default(50)
  industry    String?
  scenarioType ScenarioType?
  isSystem    Boolean  @default(false)
  linkedAgentCategories String[] @default([])
  userId      String
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  documents   Document[]
  agents      Agent[]

  @@map("knowledge_bases")
}

model Document {
  id              String         @id @default(cuid())
  name            String
  type            DocumentType
  size            Int
  path            String
  status          DocumentStatus @default(PENDING)
  chunkCount      Int            @default(0)
  industry        String?
  category        String?
  tags            String[]       @default([])
  scenarioType    ScenarioType?
  summary         String?        @db.Text
  source          String?
  organizedBy     String?
  knowledgeBaseId String
  knowledgeBase   KnowledgeBase  @relation(fields: [knowledgeBaseId], references: [id], onDelete: Cascade)
  createdAt       DateTime       @default(now())
  updatedAt       DateTime       @updatedAt

  chunks          DocumentChunk[]

  @@index([knowledgeBaseId, industry])
  @@index([knowledgeBaseId, scenarioType])
  @@map("documents")
}

enum DocumentType {
  PDF
  DOCX
  EXCEL
  TXT
  MD
}

enum DocumentStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
}

model DocumentChunk {
  id         String   @id @default(cuid())
  content    String   @db.Text
  embedding  Float[]
  metadata   Json     @default("{}")
  documentId String
  document   Document @relation(fields: [documentId], references: [id], onDelete: Cascade)
  createdAt  DateTime @default(now())

  @@map("document_chunks")
}

model Conversation {
  id        String   @id @default(cuid())
  title     String
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  agentIds  String[] @default([])
  metadata  Json     @default("{}")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  messages  Message[]

  @@map("conversations")
}

model Message {
  id             String       @id @default(cuid())
  role           MessageRole
  content        String       @db.Text
  tokens         Int          @default(0)
  conversationId String
  conversation   Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
  createdAt      DateTime     @default(now())

  @@map("messages")
}

enum MessageRole {
  USER
  ASSISTANT
  SYSTEM
  TOOL
}

model Task {
  id          String     @id @default(cuid())
  title       String
  description String?    @db.Text
  status      TaskStatus @default(PENDING)
  priority    Int        @default(0)
  result      Json?
  userId      String
  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  agentId     String?
  agent       Agent?     @relation(fields: [agentId], references: [id])
  workflowId  String?
  workflow    Workflow?  @relation(fields: [workflowId], references: [id])
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  logs        Log[]

  @@map("tasks")
}

enum TaskStatus {
  PENDING
  ASSIGNED
  IN_PROGRESS
  COMPLETED
  FAILED
  CANCELLED
}

model Log {
  id        String   @id @default(cuid())
  level     LogLevel @default(INFO)
  message   String   @db.Text
  metadata  Json     @default("{}")
  agentId   String?
  agent     Agent?   @relation(fields: [agentId], references: [id])
  taskId    String?
  task      Task?    @relation(fields: [taskId], references: [id])
  createdAt DateTime @default(now())

  @@map("logs")
}

enum LogLevel {
  DEBUG
  INFO
  WARN
  ERROR
}

model ToolCall {
  id        String         @id @default(cuid())
  toolName  String
  input     Json
  output    Json?
  status    ToolCallStatus @default(PENDING)
  duration  Int?
  agentId   String
  agent     Agent          @relation(fields: [agentId], references: [id], onDelete: Cascade)
  createdAt DateTime       @default(now())

  @@map("tool_calls")
}

enum ToolCallStatus {
  PENDING
  RUNNING
  SUCCESS
  FAILED
}

model IndustrialScenario {
  id          String         @id @default(cuid())
  name        String
  type        ScenarioType
  description String?        @db.Text
  config      Json           @default("{}")
  data        Json           @default("{}")
  status      ScenarioStatus @default(ACTIVE)
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt

  @@map("industrial_scenarios")
}

enum ScenarioType {
  UAV_MANUFACTURING
  SMT_MANUFACTURING
  EV_MANUFACTURING
}

enum ScenarioStatus {
  ACTIVE
  PAUSED
  ARCHIVED
}

model ApiMetric {
  id        String   @id @default(cuid())
  endpoint  String
  method    String
  status    Int
  duration  Int
  tokens    Int      @default(0)
  createdAt DateTime @default(now())

  @@map("api_metrics")
}
```

---

<a id="file-164"></a>

## 文件 164 : `packages/database/prisma/seed.ts`

```typescript
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { INDUSTRIAL_AGENT_TEMPLATES } from '../src/agent-templates';
import { ingestIndustryDocuments, INDUSTRY_KB_ID } from '../src/ingest-industry-docs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@aistudio.local' },
    update: {},
    create: {
      email: 'admin@aistudio.local',
      password: hashedPassword,
      name: '系统管理员',
      role: 'ADMIN',
    },
  });

  const operator = await prisma.user.upsert({
    where: { email: 'operator@aistudio.local' },
    update: {},
    create: {
      email: 'operator@aistudio.local',
      password: hashedPassword,
      name: '工业操作员',
      role: 'OPERATOR',
    },
  });

  for (const agent of INDUSTRIAL_AGENT_TEMPLATES) {
    await prisma.agent.upsert({
      where: { id: `template-${agent.category.toLowerCase()}` },
      update: {
        name: agent.name,
        description: agent.description,
        systemPrompt: agent.systemPrompt,
        category: agent.category,
        tools: agent.tools,
        isTemplate: true,
      },
      create: {
        id: `template-${agent.category.toLowerCase()}`,
        name: agent.name,
        description: agent.description,
        systemPrompt: agent.systemPrompt,
        category: agent.category,
        tools: agent.tools,
        isTemplate: true,
        userId: admin.id,
        model: 'deepseek-chat',
      },
    });
  }

  const workflow = await prisma.workflow.upsert({
    where: { id: 'demo-workflow-001' },
    update: {},
    create: {
      id: 'demo-workflow-001',
      name: '无人机生产计划工作流',
      description: '从订单接收到 MPS/MRP 计划生成的完整工作流',
      status: 'ACTIVE',
      userId: admin.id,
      nodes: [
        { id: 'start', type: 'start', position: { x: 100, y: 200 }, data: { label: '开始' } },
        { id: 'rag-1', type: 'rag', position: { x: 300, y: 200 }, data: { label: '行业知识库检索', knowledgeBaseId: INDUSTRY_KB_ID, query: '无人机 MPS 生产计划' } },
        { id: 'agent-1', type: 'agent', position: { x: 500, y: 200 }, data: { label: 'AI 计划员', agentId: 'template-planner' } },
        { id: 'agent-2', type: 'agent', position: { x: 700, y: 200 }, data: { label: 'AI 数据员', agentId: 'template-data_analyst' } },
        { id: 'condition-1', type: 'condition', position: { x: 900, y: 200 }, data: { label: '计划审核', condition: 'approved' } },
        { id: 'end', type: 'end', position: { x: 1100, y: 200 }, data: { label: '结束' } },
      ],
      edges: [
        { id: 'e1', source: 'start', target: 'rag-1' },
        { id: 'e2', source: 'rag-1', target: 'agent-1' },
        { id: 'e3', source: 'agent-1', target: 'agent-2' },
        { id: 'e4', source: 'agent-2', target: 'condition-1' },
        { id: 'e5', source: 'condition-1', target: 'end' },
      ],
    },
  });

  // 更新工作流 RAG 节点关联行业知识库
  const wf = await prisma.workflow.findUnique({ where: { id: 'demo-workflow-001' } });
  if (wf) {
    const nodes = wf.nodes as Array<Record<string, unknown>>;
    const updatedNodes = nodes.map((n) => {
      const node = n as { id: string; data?: Record<string, unknown> };
      if (node.id === 'rag-1') {
        return { ...node, data: { ...node.data, knowledgeBaseId: INDUSTRY_KB_ID, label: '行业知识库检索' } };
      }
      return node;
    });
    await prisma.workflow.update({
      where: { id: 'demo-workflow-001' },
      data: { nodes: updatedNodes as never },
    });
  }

  console.log('📚 入库行业知识库文档...');
  const ingestResult = await ingestIndustryDocuments({ userId: admin.id });
  console.log(`   行业文档: ${ingestResult.documentCount} 份, RAG 切片: ${ingestResult.chunkCount} 个`);

  const kb = await prisma.knowledgeBase.findUnique({ where: { id: INDUSTRY_KB_ID } });

  const scenarios = [
    {
      id: 'scenario-uav-001',
      name: '无人机制造场景',
      type: 'UAV_MANUFACTURING' as const,
      description: '无人机 MPS/MRP/BOM 生产计划场景',
      config: { bomLevels: 5, productionLines: 3, dailyCapacity: 50 },
      data: {
        bom: [
          { id: 'UAV-001', name: '四旋翼无人机', qty: 1, children: [
            { id: 'FRAME-001', name: '碳纤维机架', qty: 1 },
            { id: 'MOTOR-001', name: '无刷电机 2212', qty: 4 },
            { id: 'FC-001', name: '飞控主板', qty: 1 },
            { id: 'PROP-001', name: '碳纤维桨叶', qty: 4 },
          ]},
        ],
        mps: { period: '2026-W22', plannedQty: 200, confirmedQty: 180 },
        mrp: { materials: 15, shortages: 2, leadTime: '14d' },
      },
    },
    {
      id: 'scenario-smt-001',
      name: 'SMT 制造场景',
      type: 'SMT_MANUFACTURING' as const,
      description: 'SMT 贴片产线排程与换线优化场景',
      config: { lines: 4, changeoverTime: 30, maxBatchSize: 5000 },
      data: {
        schedule: [
          { line: 'SMT-L1', product: 'PCB-A001', start: '08:00', end: '12:00', qty: 3000 },
          { line: 'SMT-L1', product: 'PCB-B002', start: '12:30', end: '17:00', qty: 2500 },
          { line: 'SMT-L2', product: 'PCB-C003', start: '08:00', end: '16:00', qty: 8000 },
        ],
        changeover: { avgTime: 28, optimized: 22, savings: '21%' },
      },
    },
    {
      id: 'scenario-ev-001',
      name: '新能源汽车制造场景',
      type: 'EV_MANUFACTURING' as const,
      description: '质量追溯、供应链协同与多级 BOM 场景',
      config: { bomLevels: 8, suppliers: 45, tracePoints: 120 },
      data: {
        traceability: { vin: 'LVSHCAMB8PN123456', checkpoints: 120, passRate: 99.2 },
        supplyChain: { tier1: 12, tier2: 33, onTimeRate: 96.5 },
        bom: { levels: 8, totalParts: 15000, criticalParts: 230 },
      },
    },
  ];

  for (const scenario of scenarios) {
    await prisma.industrialScenario.upsert({
      where: { id: scenario.id },
      update: {},
      create: scenario,
    });
  }

  await prisma.task.createMany({
    data: [
      { title: '生成 Q2 无人机 MPS 计划', status: 'COMPLETED', priority: 1, userId: admin.id, agentId: 'template-planner' },
      { title: 'SMT-L1 换线优化分析', status: 'IN_PROGRESS', priority: 2, userId: operator.id, agentId: 'template-scheduler' },
      { title: 'EV 电池模组质量追溯', status: 'PENDING', priority: 3, userId: admin.id, agentId: 'template-quality' },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seed completed!');
  console.log(`   Admin: admin@aistudio.local / admin123`);
  console.log(`   Operator: operator@aistudio.local / admin123`);
  console.log(`   Agents: ${INDUSTRIAL_AGENT_TEMPLATES.length} templates`);
  console.log(`   Workflow: ${workflow.name}`);
  console.log(`   Knowledge Base: ${kb?.name || INDUSTRY_KB_ID} (${ingestResult.documentCount} docs)`);
  console.log(`   Scenarios: ${scenarios.length}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

---

<a id="file-165"></a>

## 文件 165 : `packages/database/scripts/generate-doc-content.ts`

```typescript
/**
 * 生成 80 篇文档的独立详细内容到 doc-content-data.ts
 * 运行: pnpm exec tsx scripts/generate-doc-content.ts
 */
import * as fs from 'fs';
import * as path from 'path';
import { INDUSTRY_DOCUMENTS } from '../src/industry-catalog';
import { synthesizeDocContent } from '../src/content-factory';

const outPath = path.join(__dirname, '../src/doc-content-data.ts');

const entries: string[] = [];
for (const doc of INDUSTRY_DOCUMENTS) {
  const c = synthesizeDocContent(doc);
  entries.push(`  ${JSON.stringify(doc.title)}: ${JSON.stringify(c, null, 4).replace(/\n/g, '\n  ')},`);
}

const file = `/**
 * 80 篇行业文档独立详细内容（每篇结构相同但正文互不重复）
 * 由 scripts/generate-doc-content.ts 生成，修改逻辑请编辑 content-factory.ts 后重新运行
 */
export interface RawDocContent {
  overview: string;
  background: string;
  scope: string[];
  processSteps: string[];
  parameters: Array<[string, string, string]>;
  standards: string[];
  equipment: string[];
  issues: Array<[string, string, string]>;
  checklist: string[];
  terms: Array<[string, string]>;
  caseStudy: string;
  agentHint?: Record<string, string>;
}

export const CONTENT_BY_TITLE: Record<string, RawDocContent> = {
${entries.join('\n')}
};
`;

fs.writeFileSync(outPath, file, 'utf8');
console.log(`✅ 已生成 ${INDUSTRY_DOCUMENTS.length} 篇文档内容 → ${outPath}`);
```

---

<a id="file-166"></a>

## 文件 166 : `packages/database/src/agent-templates.ts`

```typescript
/** 8 大工业 AI 智能体模板 — 与三层技术架构对应 */

export type AgentTemplateCategory =
  | 'PLANNER'
  | 'DATA_ANALYST'
  | 'SCHEDULER'
  | 'DISPATCHER'
  | 'DESIGNER'
  | 'QUALITY'
  | 'SIMULATOR'
  | 'DECISION';

export interface IndustrialAgentTemplate {
  name: string;
  description: string;
  systemPrompt: string;
  category: AgentTemplateCategory;
  tools: string[];
  /** 知识库按智能体整理时的行业范围 */
  organizeIndustries: string[];
}

export const INDUSTRIAL_AGENT_TEMPLATES: IndustrialAgentTemplate[] = [
  {
    name: 'AI 计划员',
    description: '编制 MPS 与粗产能分析，支持 FCFS/SPT/EDD/CR 四种排程规则切换对比',
    systemPrompt:
      '你是 AI 计划员，负责主生产计划与产能决策。你的核心能力包括：编制 MPS（主生产计划）并进行粗产能分析；在 FCFS（先到先服务）、SPT（最短加工时间）、EDD（最早交货期）、CR（临界比）四种排程规则间切换并对比效果；输出产能负荷表、计划可行性评估与规则对比结论。',
    category: 'PLANNER',
    tools: ['mps_calculator', 'capacity_analysis', 'scheduling_fcfs', 'scheduling_spt', 'scheduling_edd', 'scheduling_cr'],
    organizeIndustries: ['UAV', 'EV'],
  },
  {
    name: 'AI 数据员',
    description: 'BOM 展开与 MRP 计算，自动生成采购计划',
    systemPrompt:
      '你是 AI 数据员，负责制造主数据与物料计划运算。你的核心能力包括：多级 BOM 展开与用量计算；MRP（物料需求计划）运算与缺料分析；根据 MRP 结果自动生成采购计划与到货建议；输出物料清单、需求时界与采购建议表。',
    category: 'DATA_ANALYST',
    tools: ['bom_explosion', 'mrp_engine', 'purchase_plan_generator', 'shortage_analysis'],
    organizeIndustries: ['UAV', 'SMT', 'EV', 'PLATFORM'],
  },
  {
    name: 'AI 排程员',
    description: '有限产能排程与甘特图生成',
    systemPrompt:
      '你是 AI 排程员，负责有限产能下的详细排程。你的核心能力包括：考虑设备产能、换线时间与工序约束的有限产能排程；生成甘特图与工序时间表；优化换线顺序与批次划分；输出可执行的产线排程方案。',
    category: 'SCHEDULER',
    tools: ['finite_capacity_scheduler', 'gantt_generator', 'changeover_optimizer', 'line_sequence'],
    organizeIndustries: ['SMT', 'UAV'],
  },
  {
    name: 'AI 调度员',
    description: '动态任务分配及异常事件响应（急单插入、设备故障等情境模拟）',
    systemPrompt:
      '你是 AI 调度员，负责产线动态调度与异常响应。你的核心能力包括：基于合同网协议（Contract Net Protocol）进行动态任务分配；处理急单插入、设备故障、缺料停线等异常情境模拟；实时调整任务优先级与资源分配；输出调度指令与异常处置方案。',
    category: 'DISPATCHER',
    tools: ['contract_net', 'task_allocator', 'rush_order_handler', 'equipment_failure_sim', 'resource_monitor'],
    organizeIndustries: ['UAV', 'SMT', 'EV', 'PLATFORM'],
  },
  {
    name: 'AI 设计师',
    description: '工厂布局与物流优化，支持产品/工艺原则两种布置方式',
    systemPrompt:
      '你是 AI 设计师，负责工厂布局与物流系统设计。你的核心能力包括：基于产品布置原则（Product Layout）与工艺布置原则（Process Layout）进行产线/车间布局设计；优化物料搬运路径与物流动线；评估布局方案对产能、在制品与搬运距离的影响；输出布局方案与物流优化建议。',
    category: 'DESIGNER',
    tools: ['product_layout', 'process_layout', 'logistics_optimizer', 'material_flow_analysis'],
    organizeIndustries: ['UAV', 'EV'],
  },
  {
    name: 'AI 质量员',
    description: 'SPC 控制图生成与质量追溯，支持 Xbar-R/p/np/c/u 六种控制图分析',
    systemPrompt:
      '你是 AI 质量员，负责统计过程控制与质量追溯。你的核心能力包括：生成并解读 Xbar-R、p、np、c、u 六种 SPC 控制图；识别过程失控与异常模式；开展全流程质量追溯与根因分析；输出控制图、能力指数与质量报告。',
    category: 'QUALITY',
    tools: ['spc_xbar_r', 'spc_p', 'spc_np', 'spc_c', 'spc_u', 'traceability', 'defect_analyzer'],
    organizeIndustries: ['UAV', 'SMT', 'EV'],
  },
  {
    name: 'AI 仿真员',
    description: '产线建模仿真与瓶颈分析，计算产线平衡率',
    systemPrompt:
      '你是 AI 仿真员，负责产线数字化建模与仿真分析。你的核心能力包括：构建产线离散事件仿真模型；开展瓶颈工序识别与产能 What-If 分析；计算产线平衡率与工序负荷分布；输出仿真报告与改善建议。',
    category: 'SIMULATOR',
    tools: ['line_simulation', 'bottleneck_analysis', 'line_balance_rate', 'digital_twin', 'what_if_analysis'],
    organizeIndustries: ['UAV', 'SMT', 'EV'],
  },
  {
    name: '协同决策员',
    description: '全局方案协调，通过合同网协议消解资源冲突',
    systemPrompt:
      '你是协同决策员，负责多智能体全局协调与冲突消解。你的核心能力包括：整合计划、排程、质量、仿真等各 Agent 的输出方案；运用合同网协议识别并消解资源冲突与目标冲突；形成全局最优或帕累托可行的综合决策；输出协同决策报告与执行路线图。',
    category: 'DECISION',
    tools: ['conflict_resolver', 'contract_net_consensus', 'decision_matrix', 'global_optimizer'],
    organizeIndustries: ['PLATFORM', 'EV'],
  },
];

export const AGENT_CATEGORY_LABELS: Record<AgentTemplateCategory, string> = {
  PLANNER: '计划员',
  DATA_ANALYST: '数据员',
  SCHEDULER: '排程员',
  DISPATCHER: '调度员',
  DESIGNER: '设计师',
  QUALITY: '质量员',
  SIMULATOR: '仿真员',
  DECISION: '协同决策员',
};

export const ALL_AGENT_CATEGORIES = INDUSTRIAL_AGENT_TEMPLATES.map((t) => t.category);
```

---

<a id="file-167"></a>

## 文件 167 : `packages/database/src/constants.ts`

```typescript
export const INDUSTRY_KB_ID = 'industry-kb-main';
```

---

<a id="file-168"></a>

## 文件 168 : `packages/database/src/content-factory.ts`

```typescript
import type { IndustryDocDef } from './industry-catalog';
import { INDUSTRY_LABELS } from './industry-catalog';
import type { RawDocContent } from './doc-content-data';

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const INDUSTRY_STANDARDS: Record<string, string[]> = {
  UAV: ['CCAR-92 民用无人机适航', 'GB/T 19001', 'GJB 复合材料通用要求', '企业 UAV-QMS-001'],
  SMT: ['IPC-A-610 电子组装验收', 'IPC-J-STD-001 焊接', 'GB/T 2828.1 抽样', 'ESD S20.20'],
  EV: ['IATF 16949', 'GB 38031 电动汽车安全', 'QC/T 1022 动力电池', 'GB 18384 碰撞安全'],
  PLATFORM: ['ISO/IEC 42001 AI 管理', '企业 Agent Studio 架构规范', 'CNP 合同网协议企业标准'],
};

const INDUSTRY_EQUIP: Record<string, string[]> = {
  UAV: ['总装线', '飞测场', '热压罐', 'KV 测试台', 'MES 工单', 'WMS 拣配'],
  SMT: ['印刷机', 'SPI', '贴片机', '回流炉', 'AOI', 'X-Ray', '智能料塔'],
  EV: ['电池模组线', '电驱总成台', 'EOL 检测线', 'Andon 系统', 'VIN 绑定工位', '涂装 Robotic'],
  PLATFORM: ['Agent Studio', 'PostgreSQL RAG', 'Workflow 引擎', 'DeepSeek API', 'Socket.IO 协同'],
};

const CATEGORY_EQUIP: Record<string, string[]> = {
  环保工艺: ['静电喷涂机器人', 'VOC 在线监测仪', '膜厚仪', '焚烧/RTO 装置'],
  生产计划: ['ERP 计划模块', 'APS 排程', 'RCCP 负荷表', 'S&OP 会议系统'],
  排程优化: ['甘特排程软件', '换线计时器', 'MES 工单', 'Andon 看板'],
  质量检验: ['三坐标/CMM', '光学测量仪', 'SPC 软件', 'AQL 抽样表'],
  测试工艺: ['EOL 台架', 'FCT 治具', '数据采集仪', '校准证书库'],
  供应链: ['SRM 供应商门户', '要货看板', 'VMI 库存接口', '风险物料清单'],
  知识管理: ['RAG 向量库', 'Embedding 服务', '文档切片器', '检索评估脚本'],
  平台架构: ['Agent Studio', 'NestJS API', 'PostgreSQL', 'Workflow 引擎'],
  多智能体: ['Contract Net 调度器', 'Agent 注册中心', '任务黑板', '决策日志'],
};

const CATEGORY_SCOPES: Record<string, string[]> = {
  生产计划: ['主计划编制', '能力校验', '与 ERP/MRP 接口', '计划变更控制'],
  排程优化: ['产线排程', '换线优化', '插单规则', '甘特发布'],
  质量检验: ['IQC/IPQC/OQC', '抽样方案', '判定准则', 'NCR 闭环'],
  制造工艺: ['工艺参数', '过程确认', '设备点检', '首件验证'],
  质量管理: ['追溯体系', 'SPC', 'FMEA', '8D 改善'],
  多智能体: ['Agent 分工', '任务分配', '冲突消解', '决策记录'],
  物料管理: ['BOM 维护', '发料规则', '超领控制', '盘点差异'],
  装配工艺: ['工位节拍', '扭力管控', '防错装', '终检放行'],
  测试工艺: ['测试程序', '限值设定', '设备校准', '数据归档'],
  设备管理: ['PM 计划', '备件策略', 'OEE 统计', '故障代码'],
  物流仓储: ['入库检验', '拣配策略', 'AGV 调度', '库存周转'],
  数据分析: ['指标定义', '报表自动化', '异常预警', '决策支持'],
  供应链: ['要货计划', '供应商绩效', '风险物料', 'VMI 协同'],
  合规管理: ['法规识别', '审核准备', '证书维护', '内审整改'],
  环保工艺: ['排放监测', '危废管理', '膜厚/成分', '第三方检测'],
  安全管理: ['LOTO 上锁', '互锁测试', '应急演练', '事故上报'],
  软件管理: ['版本发布', '回滚策略', '灰度规则', '安全审计'],
  工程管理: ['NPI 门阀', '试产转化', '成本核算', '变更评估'],
  精益生产: ['价值流图', '7 浪费', '看板设计', '改善闭环'],
  数字孪生: ['模型校准', '仿真场景', 'What-If', '虚实同步'],
  维修工艺: ['返修授权', 'BGA 曲线', 'X-Ray 判定', '二次检验'],
  人员管理: ['技能矩阵', '排班规则', '培训记录', '上岗授权'],
  可持续: ['碳足迹', '回收评估', '梯次利用', '环保声明'],
  平台架构: ['服务划分', '权限模型', '部署拓扑', '监控告警'],
  知识管理: ['切片策略', 'Embedding', '检索评估', '版本治理'],
};

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

function titleCore(title: string): string {
  return title.replace(/^(无人机|SMT|新能源汽车|AI Agent Studio|整车|总装|工业)\s*/i, '').slice(0, 20);
}

function agentsLabel(doc: IndustryDocDef): string {
  const map: Record<string, string> = {
    PLANNER: 'AI 计划员', DATA_ANALYST: 'AI 数据员', SCHEDULER: 'AI 排程员',
    DISPATCHER: 'AI 调度员', QUALITY: 'AI 质量员', SIMULATOR: 'AI 仿真员', DECISION: '协同决策员',
  };
  return doc.relatedAgents.map((a) => map[a] || a).join('与');
}

/** 为未手工维护的文档合成互不相同的详细内容 */
export function synthesizeDocContent(doc: IndustryDocDef): RawDocContent {
  const h = hash(doc.id + doc.title);
  const idx = h % 997;
  const core = titleCore(doc.title);
  const industry = INDUSTRY_LABELS[doc.industry];
  const tagStr = doc.tags.join('、');

  const scopeBase = CATEGORY_SCOPES[doc.category] ?? ['过程控制', '数据记录', '异常升级', '持续改进'];
  const scope = scopeBase.map((s, i) => `${s}（针对${core}第${i + 1}环节）`);

  const steps = [
    `【准备】查阅「${doc.title}」适用版本 Rev.${(idx % 12) + 1}，确认与当前 ${doc.industry} 产线工艺路线 ${doc.id} 一致`,
    `【数据】从 MES/ERP 导出与 ${tagStr} 相关数据：订单 ${100 + (idx % 50)} 单、在制 ${20 + (idx % 30)} 批、库存周转 ${(idx % 7) + 3} 天`,
    `【首件】按 ${industry} WI 完成 ${core} 首件，实测 ${doc.tags[0]}=${(idx % 100) + 50}${doc.industry === 'EV' ? 'μm' : doc.industry === 'SMT' ? '%' : 'rpm'}，记录于批次卡`,
    `【监控】${doc.tags[1] ?? doc.tags[0]} 控制图 UCL=${(idx % 12) + 88}% / LCL=${(idx % 8) + 72}%，每小时点检并上传 SPC 数据库`,
    `【异常】偏离时开 NCR-${doc.industry}-${String(idx).padStart(4, '0')}，${doc.relatedAgents[0] ?? 'QUALITY'} Agent 推送 8D 小组`,
    `【中间检】第 ${(idx % 4) + 2} 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签`,
    `【批次】完工批次 ${doc.id.slice(-3).toUpperCase()}-${idx} 输出 ${doc.category} 报告 PDF，附 ${doc.tags.length} 项检测原始记录`,
    `【追溯】绑定 ${doc.industry === 'EV' ? 'VIN' : doc.industry === 'UAV' ? '飞控 SN' : 'PCB 条码'} 与 ${doc.tags[0]} 检测数据，写入追溯链`,
    `【复盘】班后会评审 ${doc.title} 执行偏差 ${(idx % 5)} 项，更新 RAG 标签：${tagStr}`,
    `【改进】将案例 ${doc.id} 纳入 ${doc.category} 知识库，供 Agent 下次检索增强`,
  ];

  const paramSets: Array<[string, string, string]> = [
    [`${doc.tags[0] ?? '主'} 合格率`, `≥${92 + (idx % 7)}%`, `${doc.category} KPI`],
    [`${doc.tags[1] ?? '过程'} 周期`, `${(idx % 50) + 10} ${doc.industry === 'SMT' ? 's/件' : 'min'}`, '节拍统计'],
    [`${core.slice(0, 6)} 一次通过率`, `≥${88 + (idx % 10)}%`, '不含返工'],
    ['数据追溯粒度', doc.industry === 'EV' ? 'VIN+模组 SN' : doc.industry === 'UAV' ? '飞控 SN' : 'PCB 条码', '强制绑定'],
  ];

  const issues: Array<[string, string, string]> = [
    [`${core} 超差`, `${doc.tags[0]} 参数漂移`, `按 WI 调机并加严 ${doc.tags[0]} 抽检至 AQL 0.65`],
    [`${doc.category} 延误`, '齐套不足或排程冲突', 'AI 排程员重算并启用紧急料塔/外协'],
    [`${tagStr} 数据缺失`, 'MES 接口延迟', `切换缓存队列并人工补录批次 ${idx}`],
  ];

  const checklist = [
    `${doc.title} 适用版本已张贴`,
    `${doc.tags.join('/')} 仪器校准有效`,
    `${doc.category} 首件已签字`,
    `Agent ${doc.relatedAgents[0] ?? 'PLANNER'} 任务已关联知识库`,
    '异常升级路径已测试',
  ];

  const terms: Array<[string, string]> = [
    [doc.tags[0] ?? 'KPI', `${doc.category}领域核心度量`],
    [doc.tags[1] ?? 'SOP', `${core} 标准作业程序`],
    [`${doc.industry}-TERM`, `${industry} 专用术语，见企业术语库 ${doc.id.slice(-4)}`],
  ];

  const caseStudy = `【案例 ${doc.id}】${industry}产线在实施「${doc.title}」后，${doc.tags[0]} 相关不良从 ${(idx % 8) + 5}.${idx % 10}% 降至 ${(idx % 3) + 0}.${idx % 9}%，${agentsLabel(doc)} 协同缩短处置时间 ${(idx % 40) + 15} 分钟。关键转折：第 ${(idx % 5) + 2} 次迭代引入 RAG 检索本文档后，误判率下降 ${20 + (idx % 25)}%。`;

  return {
    overview: `《${doc.title}》是 ${industry} 领域 **${doc.category}** 的专项作业文件（编号 ${doc.id}）。全文围绕 ${tagStr} 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 ${core} 相关工序与决策。`,
    background: `${industry} 客户在 ${doc.tags[0]} 环节常出现与 ${doc.tags[1] ?? '质量'} 相关的变异。本文档基于 ${2020 + (idx % 6)}–${2025 + (idx % 2)} 年量产数据编写，解决 ${core} 在 ${doc.category} 中缺乏统一基准的问题，并与 AI Agent Studio 场景 \`${doc.scenarioType ?? 'PLATFORM'}\` 对齐。`,
    scope,
    processSteps: steps,
    parameters: paramSets,
    standards: [...(INDUSTRY_STANDARDS[doc.industry] ?? []), `${doc.category} 企业内控标准 Rev.${(idx % 9) + 1}`],
    equipment: [...(CATEGORY_EQUIP[doc.category] ?? INDUSTRY_EQUIP[doc.industry] ?? []).slice(0, 4), `文档 ${doc.id} 专用数据采集点`],
    issues,
    checklist,
    terms,
    caseStudy,
    agentHint: Object.fromEntries(
      doc.relatedAgents.map((a, i) => [
        a,
        `负责 ${doc.title} 中第 ${i + 1} 阶段：${pick(['数据分析', '规则校验', '方案生成', '执行跟踪'], h + i)}（${doc.tags[i] ?? doc.tags[0]}）`,
      ]),
    ),
  };
}
```

---

<a id="file-169"></a>

## 文件 169 : `packages/database/src/doc-content-data.ts`

```typescript
/**
 * 80 篇行业文档独立详细内容（每篇结构相同但正文互不重复）
 * 由 scripts/generate-doc-content.ts 生成，修改逻辑请编辑 content-factory.ts 后重新运行
 */
export interface RawDocContent {
  overview: string;
  background: string;
  scope: string[];
  processSteps: string[];
  parameters: Array<[string, string, string]>;
  standards: string[];
  equipment: string[];
  issues: Array<[string, string, string]>;
  checklist: string[];
  terms: Array<[string, string]>;
  caseStudy: string;
  agentHint?: Record<string, string>;
}

export const CONTENT_BY_TITLE: Record<string, RawDocContent> = {
  "无人机 MPS 主生产计划编制规范": {
      "overview": "《无人机 MPS 主生产计划编制规范》是 无人机制造 领域 **生产计划** 的专项作业文件（编号 industry-uav-001）。全文围绕 MPS、产能、订单 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 MPS 主生产计划编制规范 相关工序与决策。",
      "background": "无人机制造 客户在 MPS 环节常出现与 产能 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 MPS 主生产计划编制规范 在 生产计划 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "主计划编制（针对MPS 主生产计划编制规范第1环节）",
          "能力校验（针对MPS 主生产计划编制规范第2环节）",
          "与 ERP/MRP 接口（针对MPS 主生产计划编制规范第3环节）",
          "计划变更控制（针对MPS 主生产计划编制规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无人机 MPS 主生产计划编制规范」适用版本 Rev.6，确认与当前 UAV 产线工艺路线 industry-uav-001 一致",
          "【数据】从 MES/ERP 导出与 MPS、产能、订单 相关数据：订单 129 单、在制 49 批、库存周转 9 天",
          "【首件】按 无人机制造 WI 完成 MPS 主生产计划编制规范 首件，实测 MPS=79rpm，记录于批次卡",
          "【监控】产能 控制图 UCL=93% / LCL=77%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0629，PLANNER Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 001-629 输出 生产计划 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 MPS 检测数据，写入追溯链",
          "【复盘】班后会评审 无人机 MPS 主生产计划编制规范 执行偏差 4 项，更新 RAG 标签：MPS、产能、订单",
          "【改进】将案例 industry-uav-001 纳入 生产计划 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "MPS 合格率",
              "≥98%",
              "生产计划 KPI"
          ],
          [
              "产能 周期",
              "39 min",
              "节拍统计"
          ],
          [
              "MPS 主生 一次通过率",
              "≥97%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "生产计划 企业内控标准 Rev.9"
      ],
      "equipment": [
          "ERP 计划模块",
          "APS 排程",
          "RCCP 负荷表",
          "S&OP 会议系统",
          "文档 industry-uav-001 专用数据采集点"
      ],
      "issues": [
          [
              "MPS 主生产计划编制规范 超差",
              "MPS 参数漂移",
              "按 WI 调机并加严 MPS 抽检至 AQL 0.65"
          ],
          [
              "生产计划 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "MPS、产能、订单 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 629"
          ]
      ],
      "checklist": [
          "无人机 MPS 主生产计划编制规范 适用版本已张贴",
          "MPS/产能/订单 仪器校准有效",
          "生产计划 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "MPS",
              "生产计划领域核心度量"
          ],
          [
              "产能",
              "MPS 主生产计划编制规范 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -001"
          ]
      ],
      "caseStudy": "【案例 industry-uav-001】无人机制造产线在实施「无人机 MPS 主生产计划编制规范」后，MPS 相关不良从 10.9% 降至 2.8%，AI 计划员 协同缩短处置时间 44 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。",
      "agentHint": {
          "PLANNER": "负责 无人机 MPS 主生产计划编制规范 中第 1 阶段：数据分析（MPS）"
      }
  },
  "无人机 MRP 物料需求计划运算手册": {
      "overview": "《无人机 MRP 物料需求计划运算手册》是 无人机制造 领域 **生产计划** 的专项作业文件（编号 industry-uav-002）。全文围绕 MRP、BOM、缺料 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 MRP 物料需求计划运算手册 相关工序与决策。",
      "background": "无人机制造 客户在 MRP 环节常出现与 BOM 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 MRP 物料需求计划运算手册 在 生产计划 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "主计划编制（针对MRP 物料需求计划运算手册第1环节）",
          "能力校验（针对MRP 物料需求计划运算手册第2环节）",
          "与 ERP/MRP 接口（针对MRP 物料需求计划运算手册第3环节）",
          "计划变更控制（针对MRP 物料需求计划运算手册第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无人机 MRP 物料需求计划运算手册」适用版本 Rev.10，确认与当前 UAV 产线工艺路线 industry-uav-002 一致",
          "【数据】从 MES/ERP 导出与 MRP、BOM、缺料 相关数据：订单 101 单、在制 41 批、库存周转 8 天",
          "【首件】按 无人机制造 WI 完成 MRP 物料需求计划运算手册 首件，实测 MRP=51rpm，记录于批次卡",
          "【监控】BOM 控制图 UCL=97% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0201，PLANNER Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 002-201 输出 生产计划 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 MRP 检测数据，写入追溯链",
          "【复盘】班后会评审 无人机 MRP 物料需求计划运算手册 执行偏差 1 项，更新 RAG 标签：MRP、BOM、缺料",
          "【改进】将案例 industry-uav-002 纳入 生产计划 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "MRP 合格率",
              "≥97%",
              "生产计划 KPI"
          ],
          [
              "BOM 周期",
              "11 min",
              "节拍统计"
          ],
          [
              "MRP 物料 一次通过率",
              "≥89%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "生产计划 企业内控标准 Rev.4"
      ],
      "equipment": [
          "ERP 计划模块",
          "APS 排程",
          "RCCP 负荷表",
          "S&OP 会议系统",
          "文档 industry-uav-002 专用数据采集点"
      ],
      "issues": [
          [
              "MRP 物料需求计划运算手册 超差",
              "MRP 参数漂移",
              "按 WI 调机并加严 MRP 抽检至 AQL 0.65"
          ],
          [
              "生产计划 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "MRP、BOM、缺料 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 201"
          ]
      ],
      "checklist": [
          "无人机 MRP 物料需求计划运算手册 适用版本已张贴",
          "MRP/BOM/缺料 仪器校准有效",
          "生产计划 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "MRP",
              "生产计划领域核心度量"
          ],
          [
              "BOM",
              "MRP 物料需求计划运算手册 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -002"
          ]
      ],
      "caseStudy": "【案例 industry-uav-002】无人机制造产线在实施「无人机 MRP 物料需求计划运算手册」后，MRP 相关不良从 6.1% 降至 0.3%，AI 计划员与AI 数据员 协同缩短处置时间 16 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 21%。",
      "agentHint": {
          "PLANNER": "负责 无人机 MRP 物料需求计划运算手册 中第 1 阶段：数据分析（MRP）",
          "DATA_ANALYST": "负责 无人机 MRP 物料需求计划运算手册 中第 2 阶段：规则校验（BOM）"
      }
  },
  "多级 BOM 管理与 ECN 变更流程": {
      "overview": "《多级 BOM 管理与 ECN 变更流程》是 无人机制造 领域 **物料管理** 的专项作业文件（编号 industry-uav-003）。全文围绕 BOM、ECN、版本 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 多级 BOM 管理与 ECN 变更流程 相关工序与决策。",
      "background": "无人机制造 客户在 BOM 环节常出现与 ECN 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 多级 BOM 管理与 ECN 变更流程 在 物料管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "BOM 维护（针对多级 BOM 管理与 ECN 变更流程第1环节）",
          "发料规则（针对多级 BOM 管理与 ECN 变更流程第2环节）",
          "超领控制（针对多级 BOM 管理与 ECN 变更流程第3环节）",
          "盘点差异（针对多级 BOM 管理与 ECN 变更流程第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「多级 BOM 管理与 ECN 变更流程」适用版本 Rev.2，确认与当前 UAV 产线工艺路线 industry-uav-003 一致",
          "【数据】从 MES/ERP 导出与 BOM、ECN、版本 相关数据：订单 133 单、在制 33 批、库存周转 3 天",
          "【首件】按 无人机制造 WI 完成 多级 BOM 管理与 ECN 变更流程 首件，实测 BOM=83rpm，记录于批次卡",
          "【监控】ECN 控制图 UCL=89% / LCL=77%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0133，PLANNER Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 003-133 输出 物料管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 BOM 检测数据，写入追溯链",
          "【复盘】班后会评审 多级 BOM 管理与 ECN 变更流程 执行偏差 3 项，更新 RAG 标签：BOM、ECN、版本",
          "【改进】将案例 industry-uav-003 纳入 物料管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "BOM 合格率",
              "≥92%",
              "物料管理 KPI"
          ],
          [
              "ECN 周期",
              "43 min",
              "节拍统计"
          ],
          [
              "多级 BOM 一次通过率",
              "≥91%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "物料管理 企业内控标准 Rev.8"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-003 专用数据采集点"
      ],
      "issues": [
          [
              "多级 BOM 管理与 ECN 变更流程 超差",
              "BOM 参数漂移",
              "按 WI 调机并加严 BOM 抽检至 AQL 0.65"
          ],
          [
              "物料管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "BOM、ECN、版本 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 133"
          ]
      ],
      "checklist": [
          "多级 BOM 管理与 ECN 变更流程 适用版本已张贴",
          "BOM/ECN/版本 仪器校准有效",
          "物料管理 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "BOM",
              "物料管理领域核心度量"
          ],
          [
              "ECN",
              "多级 BOM 管理与 ECN 变更流程 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -003"
          ]
      ],
      "caseStudy": "【案例 industry-uav-003】无人机制造产线在实施「多级 BOM 管理与 ECN 变更流程」后，BOM 相关不良从 10.3% 降至 1.7%，AI 计划员与AI 质量员 协同缩短处置时间 28 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 28%。",
      "agentHint": {
          "PLANNER": "负责 多级 BOM 管理与 ECN 变更流程 中第 1 阶段：规则校验（BOM）",
          "QUALITY": "负责 多级 BOM 管理与 ECN 变更流程 中第 2 阶段：方案生成（ECN）"
      }
  },
  "碳纤维机架铺叠与固化工艺标准": {
      "overview": "《碳纤维机架铺叠与固化工艺标准》是 无人机制造 领域 **制造工艺** 的专项作业文件（编号 industry-uav-004）。全文围绕 复材、机架、固化 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 碳纤维机架铺叠与固化工艺标准 相关工序与决策。",
      "background": "无人机制造 客户在 复材 环节常出现与 机架 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 碳纤维机架铺叠与固化工艺标准 在 制造工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "工艺参数（针对碳纤维机架铺叠与固化工艺标准第1环节）",
          "过程确认（针对碳纤维机架铺叠与固化工艺标准第2环节）",
          "设备点检（针对碳纤维机架铺叠与固化工艺标准第3环节）",
          "首件验证（针对碳纤维机架铺叠与固化工艺标准第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「碳纤维机架铺叠与固化工艺标准」适用版本 Rev.9，确认与当前 UAV 产线工艺路线 industry-uav-004 一致",
          "【数据】从 MES/ERP 导出与 复材、机架、固化 相关数据：订单 110 单、在制 40 批、库存周转 9 天",
          "【首件】按 无人机制造 WI 完成 碳纤维机架铺叠与固化工艺标准 首件，实测 复材=110rpm，记录于批次卡",
          "【监控】机架 控制图 UCL=96% / LCL=76%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0860，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 004-860 输出 制造工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 复材 检测数据，写入追溯链",
          "【复盘】班后会评审 碳纤维机架铺叠与固化工艺标准 执行偏差 0 项，更新 RAG 标签：复材、机架、固化",
          "【改进】将案例 industry-uav-004 纳入 制造工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "复材 合格率",
              "≥98%",
              "制造工艺 KPI"
          ],
          [
              "机架 周期",
              "20 min",
              "节拍统计"
          ],
          [
              "碳纤维机架铺 一次通过率",
              "≥88%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "制造工艺 企业内控标准 Rev.6"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-004 专用数据采集点"
      ],
      "issues": [
          [
              "碳纤维机架铺叠与固化工艺标准 超差",
              "复材 参数漂移",
              "按 WI 调机并加严 复材 抽检至 AQL 0.65"
          ],
          [
              "制造工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "复材、机架、固化 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 860"
          ]
      ],
      "checklist": [
          "碳纤维机架铺叠与固化工艺标准 适用版本已张贴",
          "复材/机架/固化 仪器校准有效",
          "制造工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "复材",
              "制造工艺领域核心度量"
          ],
          [
              "机架",
              "碳纤维机架铺叠与固化工艺标准 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -004"
          ]
      ],
      "caseStudy": "【案例 industry-uav-004】无人机制造产线在实施「碳纤维机架铺叠与固化工艺标准」后，复材 相关不良从 9.0% 降至 2.5%，AI 质量员与AI 仿真员 协同缩短处置时间 35 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 30%。",
      "agentHint": {
          "QUALITY": "负责 碳纤维机架铺叠与固化工艺标准 中第 1 阶段：规则校验（复材）",
          "SIMULATOR": "负责 碳纤维机架铺叠与固化工艺标准 中第 2 阶段：方案生成（机架）"
      }
  },
  "无刷电机 2212 来料检验与性能测试": {
      "overview": "《无刷电机 2212 来料检验与性能测试》是 无人机制造 领域 **质量检验** 的专项作业文件（编号 industry-uav-005）。全文围绕 电机、IQC、测试 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 无刷电机 2212 来料检验与性能测试 相关工序与决策。",
      "background": "无人机制造 客户在 电机 环节常出现与 IQC 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 无刷电机 2212 来料检验与性能测试 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "IQC/IPQC/OQC（针对无刷电机 2212 来料检验与性能测试第1环节）",
          "抽样方案（针对无刷电机 2212 来料检验与性能测试第2环节）",
          "判定准则（针对无刷电机 2212 来料检验与性能测试第3环节）",
          "NCR 闭环（针对无刷电机 2212 来料检验与性能测试第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无刷电机 2212 来料检验与性能测试」适用版本 Rev.7，确认与当前 UAV 产线工艺路线 industry-uav-005 一致",
          "【数据】从 MES/ERP 导出与 电机、IQC、测试 相关数据：订单 104 单、在制 44 批、库存周转 6 天",
          "【首件】按 无人机制造 WI 完成 无刷电机 2212 来料检验与性能测试 首件，实测 电机=104rpm，记录于批次卡",
          "【监控】IQC 控制图 UCL=94% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0654，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 005-654 输出 质量检验 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 电机 检测数据，写入追溯链",
          "【复盘】班后会评审 无刷电机 2212 来料检验与性能测试 执行偏差 4 项，更新 RAG 标签：电机、IQC、测试",
          "【改进】将案例 industry-uav-005 纳入 质量检验 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "电机 合格率",
              "≥95%",
              "质量检验 KPI"
          ],
          [
              "IQC 周期",
              "14 min",
              "节拍统计"
          ],
          [
              "无刷电机 2 一次通过率",
              "≥92%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "质量检验 企业内控标准 Rev.7"
      ],
      "equipment": [
          "三坐标/CMM",
          "光学测量仪",
          "SPC 软件",
          "AQL 抽样表",
          "文档 industry-uav-005 专用数据采集点"
      ],
      "issues": [
          [
              "无刷电机 2212 来料检验与性能测试 超差",
              "电机 参数漂移",
              "按 WI 调机并加严 电机 抽检至 AQL 0.65"
          ],
          [
              "质量检验 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "电机、IQC、测试 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 654"
          ]
      ],
      "checklist": [
          "无刷电机 2212 来料检验与性能测试 适用版本已张贴",
          "电机/IQC/测试 仪器校准有效",
          "质量检验 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "电机",
              "质量检验领域核心度量"
          ],
          [
              "IQC",
              "无刷电机 2212 来料检验与性能测试 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -005"
          ]
      ],
      "caseStudy": "【案例 industry-uav-005】无人机制造产线在实施「无刷电机 2212 来料检验与性能测试」后，电机 相关不良从 11.4% 降至 0.6%，AI 质量员 协同缩短处置时间 29 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。",
      "agentHint": {
          "QUALITY": "负责 无刷电机 2212 来料检验与性能测试 中第 1 阶段：数据分析（电机）"
      }
  },
  "飞控主板 SMT 贴片与功能测试 SOP": {
      "overview": "《飞控主板 SMT 贴片与功能测试 SOP》是 无人机制造 领域 **装配工艺** 的专项作业文件（编号 industry-uav-006）。全文围绕 飞控、SMT、FCT 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 飞控主板 SMT 贴片与功能测试 SOP 相关工序与决策。",
      "background": "无人机制造 客户在 飞控 环节常出现与 SMT 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 飞控主板 SMT 贴片与功能测试 SOP 在 装配工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "工位节拍（针对飞控主板 SMT 贴片与功能测试 SOP第1环节）",
          "扭力管控（针对飞控主板 SMT 贴片与功能测试 SOP第2环节）",
          "防错装（针对飞控主板 SMT 贴片与功能测试 SOP第3环节）",
          "终检放行（针对飞控主板 SMT 贴片与功能测试 SOP第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「飞控主板 SMT 贴片与功能测试 SOP」适用版本 Rev.9，确认与当前 UAV 产线工艺路线 industry-uav-006 一致",
          "【数据】从 MES/ERP 导出与 飞控、SMT、FCT 相关数据：订单 114 单、在制 34 批、库存周转 5 天",
          "【首件】按 无人机制造 WI 完成 飞控主板 SMT 贴片与功能测试 SOP 首件，实测 飞控=114rpm，记录于批次卡",
          "【监控】SMT 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0464，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 006-464 输出 装配工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 飞控 检测数据，写入追溯链",
          "【复盘】班后会评审 飞控主板 SMT 贴片与功能测试 SOP 执行偏差 4 项，更新 RAG 标签：飞控、SMT、FCT",
          "【改进】将案例 industry-uav-006 纳入 装配工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "飞控 合格率",
              "≥94%",
              "装配工艺 KPI"
          ],
          [
              "SMT 周期",
              "24 min",
              "节拍统计"
          ],
          [
              "飞控主板 S 一次通过率",
              "≥92%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "装配工艺 企业内控标准 Rev.6"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-006 专用数据采集点"
      ],
      "issues": [
          [
              "飞控主板 SMT 贴片与功能测试 SOP 超差",
              "飞控 参数漂移",
              "按 WI 调机并加严 飞控 抽检至 AQL 0.65"
          ],
          [
              "装配工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "飞控、SMT、FCT 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 464"
          ]
      ],
      "checklist": [
          "飞控主板 SMT 贴片与功能测试 SOP 适用版本已张贴",
          "飞控/SMT/FCT 仪器校准有效",
          "装配工艺 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "飞控",
              "装配工艺领域核心度量"
          ],
          [
              "SMT",
              "飞控主板 SMT 贴片与功能测试 SOP 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -006"
          ]
      ],
      "caseStudy": "【案例 industry-uav-006】无人机制造产线在实施「飞控主板 SMT 贴片与功能测试 SOP」后，飞控 相关不良从 5.4% 降至 2.5%，AI 排程员与AI 质量员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 34%。",
      "agentHint": {
          "SCHEDULER": "负责 飞控主板 SMT 贴片与功能测试 SOP 中第 1 阶段：方案生成（飞控）",
          "QUALITY": "负责 飞控主板 SMT 贴片与功能测试 SOP 中第 2 阶段：执行跟踪（SMT）"
      }
  },
  "桨叶动平衡检测与分级标准": {
      "overview": "《桨叶动平衡检测与分级标准》是 无人机制造 领域 **质量检验** 的专项作业文件（编号 industry-uav-007）。全文围绕 桨叶、动平衡、分级 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 桨叶动平衡检测与分级标准 相关工序与决策。",
      "background": "无人机制造 客户在 桨叶 环节常出现与 动平衡 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 桨叶动平衡检测与分级标准 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "IQC/IPQC/OQC（针对桨叶动平衡检测与分级标准第1环节）",
          "抽样方案（针对桨叶动平衡检测与分级标准第2环节）",
          "判定准则（针对桨叶动平衡检测与分级标准第3环节）",
          "NCR 闭环（针对桨叶动平衡检测与分级标准第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「桨叶动平衡检测与分级标准」适用版本 Rev.10，确认与当前 UAV 产线工艺路线 industry-uav-007 一致",
          "【数据】从 MES/ERP 导出与 桨叶、动平衡、分级 相关数据：订单 113 单、在制 23 批、库存周转 4 天",
          "【首件】按 无人机制造 WI 完成 桨叶动平衡检测与分级标准 首件，实测 桨叶=63rpm，记录于批次卡",
          "【监控】动平衡 控制图 UCL=97% / LCL=77%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0813，QUALITY Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 007-813 输出 质量检验 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 桨叶 检测数据，写入追溯链",
          "【复盘】班后会评审 桨叶动平衡检测与分级标准 执行偏差 3 项，更新 RAG 标签：桨叶、动平衡、分级",
          "【改进】将案例 industry-uav-007 纳入 质量检验 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "桨叶 合格率",
              "≥93%",
              "质量检验 KPI"
          ],
          [
              "动平衡 周期",
              "23 min",
              "节拍统计"
          ],
          [
              "桨叶动平衡检 一次通过率",
              "≥91%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "质量检验 企业内控标准 Rev.4"
      ],
      "equipment": [
          "三坐标/CMM",
          "光学测量仪",
          "SPC 软件",
          "AQL 抽样表",
          "文档 industry-uav-007 专用数据采集点"
      ],
      "issues": [
          [
              "桨叶动平衡检测与分级标准 超差",
              "桨叶 参数漂移",
              "按 WI 调机并加严 桨叶 抽检至 AQL 0.65"
          ],
          [
              "质量检验 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "桨叶、动平衡、分级 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 813"
          ]
      ],
      "checklist": [
          "桨叶动平衡检测与分级标准 适用版本已张贴",
          "桨叶/动平衡/分级 仪器校准有效",
          "质量检验 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "桨叶",
              "质量检验领域核心度量"
          ],
          [
              "动平衡",
              "桨叶动平衡检测与分级标准 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -007"
          ]
      ],
      "caseStudy": "【案例 industry-uav-007】无人机制造产线在实施「桨叶动平衡检测与分级标准」后，桨叶 相关不良从 10.3% 降至 0.3%，AI 质量员 协同缩短处置时间 28 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。",
      "agentHint": {
          "QUALITY": "负责 桨叶动平衡检测与分级标准 中第 1 阶段：数据分析（桨叶）"
      }
  },
  "智能电池 Pack 组装与安全规范": {
      "overview": "《智能电池 Pack 组装与安全规范》是 无人机制造 领域 **制造工艺** 的专项作业文件（编号 industry-uav-008）。全文围绕 电池、Pack、安全 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 智能电池 Pack 组装与安全规范 相关工序与决策。",
      "background": "无人机制造 客户在 电池 环节常出现与 Pack 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 智能电池 Pack 组装与安全规范 在 制造工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "工艺参数（针对智能电池 Pack 组装与安全规范第1环节）",
          "过程确认（针对智能电池 Pack 组装与安全规范第2环节）",
          "设备点检（针对智能电池 Pack 组装与安全规范第3环节）",
          "首件验证（针对智能电池 Pack 组装与安全规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「智能电池 Pack 组装与安全规范」适用版本 Rev.10，确认与当前 UAV 产线工艺路线 industry-uav-008 一致",
          "【数据】从 MES/ERP 导出与 电池、Pack、安全 相关数据：订单 129 单、在制 29 批、库存周转 4 天",
          "【首件】按 无人机制造 WI 完成 智能电池 Pack 组装与安全规范 首件，实测 电池=79rpm，记录于批次卡",
          "【监控】Pack 控制图 UCL=97% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0729，QUALITY Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 008-729 输出 制造工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 电池 检测数据，写入追溯链",
          "【复盘】班后会评审 智能电池 Pack 组装与安全规范 执行偏差 4 项，更新 RAG 标签：电池、Pack、安全",
          "【改进】将案例 industry-uav-008 纳入 制造工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "电池 合格率",
              "≥93%",
              "制造工艺 KPI"
          ],
          [
              "Pack 周期",
              "39 min",
              "节拍统计"
          ],
          [
              "智能电池 P 一次通过率",
              "≥97%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "制造工艺 企业内控标准 Rev.1"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-008 专用数据采集点"
      ],
      "issues": [
          [
              "智能电池 Pack 组装与安全规范 超差",
              "电池 参数漂移",
              "按 WI 调机并加严 电池 抽检至 AQL 0.65"
          ],
          [
              "制造工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "电池、Pack、安全 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 729"
          ]
      ],
      "checklist": [
          "智能电池 Pack 组装与安全规范 适用版本已张贴",
          "电池/Pack/安全 仪器校准有效",
          "制造工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "电池",
              "制造工艺领域核心度量"
          ],
          [
              "Pack",
              "智能电池 Pack 组装与安全规范 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -008"
          ]
      ],
      "caseStudy": "【案例 industry-uav-008】无人机制造产线在实施「智能电池 Pack 组装与安全规范」后，电池 相关不良从 6.9% 降至 0.0%，AI 质量员与AI 计划员 协同缩短处置时间 24 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。",
      "agentHint": {
          "QUALITY": "负责 智能电池 Pack 组装与安全规范 中第 1 阶段：数据分析（电池）",
          "PLANNER": "负责 智能电池 Pack 组装与安全规范 中第 2 阶段：规则校验（Pack）"
      }
  },
  "四旋翼无人机整机组装流程": {
      "overview": "《四旋翼无人机整机组装流程》是 无人机制造 领域 **装配工艺** 的专项作业文件（编号 industry-uav-009）。全文围绕 总装、四旋翼、节拍 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 四旋翼无人机整机组装流程 相关工序与决策。",
      "background": "无人机制造 客户在 总装 环节常出现与 四旋翼 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 四旋翼无人机整机组装流程 在 装配工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "工位节拍（针对四旋翼无人机整机组装流程第1环节）",
          "扭力管控（针对四旋翼无人机整机组装流程第2环节）",
          "防错装（针对四旋翼无人机整机组装流程第3环节）",
          "终检放行（针对四旋翼无人机整机组装流程第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「四旋翼无人机整机组装流程」适用版本 Rev.2，确认与当前 UAV 产线工艺路线 industry-uav-009 一致",
          "【数据】从 MES/ERP 导出与 总装、四旋翼、节拍 相关数据：订单 107 单、在制 27 批、库存周转 5 天",
          "【首件】按 无人机制造 WI 完成 四旋翼无人机整机组装流程 首件，实测 总装=107rpm，记录于批次卡",
          "【监控】四旋翼 控制图 UCL=89% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0457，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 009-457 输出 装配工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 总装 检测数据，写入追溯链",
          "【复盘】班后会评审 四旋翼无人机整机组装流程 执行偏差 2 项，更新 RAG 标签：总装、四旋翼、节拍",
          "【改进】将案例 industry-uav-009 纳入 装配工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "总装 合格率",
              "≥94%",
              "装配工艺 KPI"
          ],
          [
              "四旋翼 周期",
              "17 min",
              "节拍统计"
          ],
          [
              "四旋翼无人机 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "装配工艺 企业内控标准 Rev.8"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-009 专用数据采集点"
      ],
      "issues": [
          [
              "四旋翼无人机整机组装流程 超差",
              "总装 参数漂移",
              "按 WI 调机并加严 总装 抽检至 AQL 0.65"
          ],
          [
              "装配工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "总装、四旋翼、节拍 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 457"
          ]
      ],
      "checklist": [
          "四旋翼无人机整机组装流程 适用版本已张贴",
          "总装/四旋翼/节拍 仪器校准有效",
          "装配工艺 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "总装",
              "装配工艺领域核心度量"
          ],
          [
              "四旋翼",
              "四旋翼无人机整机组装流程 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -009"
          ]
      ],
      "caseStudy": "【案例 industry-uav-009】无人机制造产线在实施「四旋翼无人机整机组装流程」后，总装 相关不良从 6.7% 降至 1.7%，AI 排程员与AI 调度员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。",
      "agentHint": {
          "SCHEDULER": "负责 四旋翼无人机整机组装流程 中第 1 阶段：数据分析（总装）",
          "DISPATCHER": "负责 四旋翼无人机整机组装流程 中第 2 阶段：规则校验（四旋翼）"
      }
  },
  "无人机出厂检验与试飞放行标准": {
      "overview": "《无人机出厂检验与试飞放行标准》是 无人机制造 领域 **质量检验** 的专项作业文件（编号 industry-uav-010）。全文围绕 OQC、试飞、放行 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 出厂检验与试飞放行标准 相关工序与决策。",
      "background": "无人机制造 客户在 OQC 环节常出现与 试飞 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 出厂检验与试飞放行标准 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "IQC/IPQC/OQC（针对出厂检验与试飞放行标准第1环节）",
          "抽样方案（针对出厂检验与试飞放行标准第2环节）",
          "判定准则（针对出厂检验与试飞放行标准第3环节）",
          "NCR 闭环（针对出厂检验与试飞放行标准第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无人机出厂检验与试飞放行标准」适用版本 Rev.9，确认与当前 UAV 产线工艺路线 industry-uav-010 一致",
          "【数据】从 MES/ERP 导出与 OQC、试飞、放行 相关数据：订单 138 单、在制 28 批、库存周转 9 天",
          "【首件】按 无人机制造 WI 完成 出厂检验与试飞放行标准 首件，实测 OQC=138rpm，记录于批次卡",
          "【监控】试飞 控制图 UCL=96% / LCL=76%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0188，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 010-188 输出 质量检验 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 OQC 检测数据，写入追溯链",
          "【复盘】班后会评审 无人机出厂检验与试飞放行标准 执行偏差 3 项，更新 RAG 标签：OQC、试飞、放行",
          "【改进】将案例 industry-uav-010 纳入 质量检验 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "OQC 合格率",
              "≥98%",
              "质量检验 KPI"
          ],
          [
              "试飞 周期",
              "48 min",
              "节拍统计"
          ],
          [
              "出厂检验与试 一次通过率",
              "≥96%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "质量检验 企业内控标准 Rev.9"
      ],
      "equipment": [
          "三坐标/CMM",
          "光学测量仪",
          "SPC 软件",
          "AQL 抽样表",
          "文档 industry-uav-010 专用数据采集点"
      ],
      "issues": [
          [
              "出厂检验与试飞放行标准 超差",
              "OQC 参数漂移",
              "按 WI 调机并加严 OQC 抽检至 AQL 0.65"
          ],
          [
              "质量检验 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "OQC、试飞、放行 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 188"
          ]
      ],
      "checklist": [
          "无人机出厂检验与试飞放行标准 适用版本已张贴",
          "OQC/试飞/放行 仪器校准有效",
          "质量检验 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "OQC",
              "质量检验领域核心度量"
          ],
          [
              "试飞",
              "出厂检验与试飞放行标准 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -010"
          ]
      ],
      "caseStudy": "【案例 industry-uav-010】无人机制造产线在实施「无人机出厂检验与试飞放行标准」后，OQC 相关不良从 9.8% 降至 2.8%，AI 质量员与协同决策员 协同缩短处置时间 43 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。",
      "agentHint": {
          "QUALITY": "负责 无人机出厂检验与试飞放行标准 中第 1 阶段：执行跟踪（OQC）",
          "DECISION": "负责 无人机出厂检验与试飞放行标准 中第 2 阶段：数据分析（试飞）"
      }
  },
  "无人机产线产能规划与瓶颈分析": {
      "overview": "《无人机产线产能规划与瓶颈分析》是 无人机制造 领域 **生产计划** 的专项作业文件（编号 industry-uav-011）。全文围绕 产能、瓶颈、OEE 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线产能规划与瓶颈分析 相关工序与决策。",
      "background": "无人机制造 客户在 产能 环节常出现与 瓶颈 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 产线产能规划与瓶颈分析 在 生产计划 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "主计划编制（针对产线产能规划与瓶颈分析第1环节）",
          "能力校验（针对产线产能规划与瓶颈分析第2环节）",
          "与 ERP/MRP 接口（针对产线产能规划与瓶颈分析第3环节）",
          "计划变更控制（针对产线产能规划与瓶颈分析第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无人机产线产能规划与瓶颈分析」适用版本 Rev.4，确认与当前 UAV 产线工艺路线 industry-uav-011 一致",
          "【数据】从 MES/ERP 导出与 产能、瓶颈、OEE 相关数据：订单 125 单、在制 35 批、库存周转 6 天",
          "【首件】按 无人机制造 WI 完成 产线产能规划与瓶颈分析 首件，实测 产能=125rpm，记录于批次卡",
          "【监控】瓶颈 控制图 UCL=91% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0675，PLANNER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 011-675 输出 生产计划 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 产能 检测数据，写入追溯链",
          "【复盘】班后会评审 无人机产线产能规划与瓶颈分析 执行偏差 0 项，更新 RAG 标签：产能、瓶颈、OEE",
          "【改进】将案例 industry-uav-011 纳入 生产计划 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "产能 合格率",
              "≥95%",
              "生产计划 KPI"
          ],
          [
              "瓶颈 周期",
              "35 min",
              "节拍统计"
          ],
          [
              "产线产能规划 一次通过率",
              "≥93%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "生产计划 企业内控标准 Rev.1"
      ],
      "equipment": [
          "ERP 计划模块",
          "APS 排程",
          "RCCP 负荷表",
          "S&OP 会议系统",
          "文档 industry-uav-011 专用数据采集点"
      ],
      "issues": [
          [
              "产线产能规划与瓶颈分析 超差",
              "产能 参数漂移",
              "按 WI 调机并加严 产能 抽检至 AQL 0.65"
          ],
          [
              "生产计划 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "产能、瓶颈、OEE 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 675"
          ]
      ],
      "checklist": [
          "无人机产线产能规划与瓶颈分析 适用版本已张贴",
          "产能/瓶颈/OEE 仪器校准有效",
          "生产计划 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "产能",
              "生产计划领域核心度量"
          ],
          [
              "瓶颈",
              "产线产能规划与瓶颈分析 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -011"
          ]
      ],
      "caseStudy": "【案例 industry-uav-011】无人机制造产线在实施「无人机产线产能规划与瓶颈分析」后，产能 相关不良从 8.5% 降至 0.0%，AI 计划员与AI 数据员 协同缩短处置时间 50 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 20%。",
      "agentHint": {
          "PLANNER": "负责 无人机产线产能规划与瓶颈分析 中第 1 阶段：数据分析（产能）",
          "DATA_ANALYST": "负责 无人机产线产能规划与瓶颈分析 中第 2 阶段：规则校验（瓶颈）"
      }
  },
  "外协结构件来料检验规范": {
      "overview": "《外协结构件来料检验规范》是 无人机制造 领域 **质量检验** 的专项作业文件（编号 industry-uav-012）。全文围绕 外协、IQC、结构件 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 外协结构件来料检验规范 相关工序与决策。",
      "background": "无人机制造 客户在 外协 环节常出现与 IQC 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 外协结构件来料检验规范 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "IQC/IPQC/OQC（针对外协结构件来料检验规范第1环节）",
          "抽样方案（针对外协结构件来料检验规范第2环节）",
          "判定准则（针对外协结构件来料检验规范第3环节）",
          "NCR 闭环（针对外协结构件来料检验规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「外协结构件来料检验规范」适用版本 Rev.12，确认与当前 UAV 产线工艺路线 industry-uav-012 一致",
          "【数据】从 MES/ERP 导出与 外协、IQC、结构件 相关数据：订单 107 单、在制 37 批、库存周转 5 天",
          "【首件】按 无人机制造 WI 完成 外协结构件来料检验规范 首件，实测 外协=57rpm，记录于批次卡",
          "【监控】IQC 控制图 UCL=99% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0107，QUALITY Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 012-107 输出 质量检验 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 外协 检测数据，写入追溯链",
          "【复盘】班后会评审 外协结构件来料检验规范 执行偏差 2 项，更新 RAG 标签：外协、IQC、结构件",
          "【改进】将案例 industry-uav-012 纳入 质量检验 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "外协 合格率",
              "≥94%",
              "质量检验 KPI"
          ],
          [
              "IQC 周期",
              "17 min",
              "节拍统计"
          ],
          [
              "外协结构件来 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "质量检验 企业内控标准 Rev.9"
      ],
      "equipment": [
          "三坐标/CMM",
          "光学测量仪",
          "SPC 软件",
          "AQL 抽样表",
          "文档 industry-uav-012 专用数据采集点"
      ],
      "issues": [
          [
              "外协结构件来料检验规范 超差",
              "外协 参数漂移",
              "按 WI 调机并加严 外协 抽检至 AQL 0.65"
          ],
          [
              "质量检验 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "外协、IQC、结构件 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 107"
          ]
      ],
      "checklist": [
          "外协结构件来料检验规范 适用版本已张贴",
          "外协/IQC/结构件 仪器校准有效",
          "质量检验 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "外协",
              "质量检验领域核心度量"
          ],
          [
              "IQC",
              "外协结构件来料检验规范 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -012"
          ]
      ],
      "caseStudy": "【案例 industry-uav-012】无人机制造产线在实施「外协结构件来料检验规范」后，外协 相关不良从 8.7% 降至 2.8%，AI 质量员 协同缩短处置时间 42 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。",
      "agentHint": {
          "QUALITY": "负责 外协结构件来料检验规范 中第 1 阶段：数据分析（外协）"
      }
  },
  "工装夹具设计与寿命管理": {
      "overview": "《工装夹具设计与寿命管理》是 无人机制造 领域 **设备管理** 的专项作业文件（编号 industry-uav-013）。全文围绕 工装、夹具、PM 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 工装夹具设计与寿命管理 相关工序与决策。",
      "background": "无人机制造 客户在 工装 环节常出现与 夹具 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 工装夹具设计与寿命管理 在 设备管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "PM 计划（针对工装夹具设计与寿命管理第1环节）",
          "备件策略（针对工装夹具设计与寿命管理第2环节）",
          "OEE 统计（针对工装夹具设计与寿命管理第3环节）",
          "故障代码（针对工装夹具设计与寿命管理第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「工装夹具设计与寿命管理」适用版本 Rev.4，确认与当前 UAV 产线工艺路线 industry-uav-013 一致",
          "【数据】从 MES/ERP 导出与 工装、夹具、PM 相关数据：订单 107 单、在制 47 批、库存周转 5 天",
          "【首件】按 无人机制造 WI 完成 工装夹具设计与寿命管理 首件，实测 工装=57rpm，记录于批次卡",
          "【监控】夹具 控制图 UCL=91% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0807，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 013-807 输出 设备管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 工装 检测数据，写入追溯链",
          "【复盘】班后会评审 工装夹具设计与寿命管理 执行偏差 2 项，更新 RAG 标签：工装、夹具、PM",
          "【改进】将案例 industry-uav-013 纳入 设备管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "工装 合格率",
              "≥94%",
              "设备管理 KPI"
          ],
          [
              "夹具 周期",
              "17 min",
              "节拍统计"
          ],
          [
              "工装夹具设计 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "设备管理 企业内控标准 Rev.7"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-013 专用数据采集点"
      ],
      "issues": [
          [
              "工装夹具设计与寿命管理 超差",
              "工装 参数漂移",
              "按 WI 调机并加严 工装 抽检至 AQL 0.65"
          ],
          [
              "设备管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "工装、夹具、PM 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 807"
          ]
      ],
      "checklist": [
          "工装夹具设计与寿命管理 适用版本已张贴",
          "工装/夹具/PM 仪器校准有效",
          "设备管理 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "工装",
              "设备管理领域核心度量"
          ],
          [
              "夹具",
              "工装夹具设计与寿命管理 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -013"
          ]
      ],
      "caseStudy": "【案例 industry-uav-013】无人机制造产线在实施「工装夹具设计与寿命管理」后，工装 相关不良从 12.7% 降至 0.6%，AI 排程员 协同缩短处置时间 22 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。",
      "agentHint": {
          "SCHEDULER": "负责 工装夹具设计与寿命管理 中第 1 阶段：数据分析（工装）"
      }
  },
  "无人机精益生产线布局指南": {
      "overview": "《无人机精益生产线布局指南》是 无人机制造 领域 **精益生产** 的专项作业文件（编号 industry-uav-014）。全文围绕 精益、线体、布局 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 精益生产线布局指南 相关工序与决策。",
      "background": "无人机制造 客户在 精益 环节常出现与 线体 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 精益生产线布局指南 在 精益生产 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "价值流图（针对精益生产线布局指南第1环节）",
          "7 浪费（针对精益生产线布局指南第2环节）",
          "看板设计（针对精益生产线布局指南第3环节）",
          "改善闭环（针对精益生产线布局指南第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无人机精益生产线布局指南」适用版本 Rev.1，确认与当前 UAV 产线工艺路线 industry-uav-014 一致",
          "【数据】从 MES/ERP 导出与 精益、线体、布局 相关数据：订单 134 单、在制 44 批、库存周转 7 天",
          "【首件】按 无人机制造 WI 完成 精益生产线布局指南 首件，实测 精益=134rpm，记录于批次卡",
          "【监控】线体 控制图 UCL=88% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0984，PLANNER Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 014-984 输出 精益生产 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 精益 检测数据，写入追溯链",
          "【复盘】班后会评审 无人机精益生产线布局指南 执行偏差 4 项，更新 RAG 标签：精益、线体、布局",
          "【改进】将案例 industry-uav-014 纳入 精益生产 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "精益 合格率",
              "≥96%",
              "精益生产 KPI"
          ],
          [
              "线体 周期",
              "44 min",
              "节拍统计"
          ],
          [
              "精益生产线布 一次通过率",
              "≥92%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "精益生产 企业内控标准 Rev.4"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-014 专用数据采集点"
      ],
      "issues": [
          [
              "精益生产线布局指南 超差",
              "精益 参数漂移",
              "按 WI 调机并加严 精益 抽检至 AQL 0.65"
          ],
          [
              "精益生产 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "精益、线体、布局 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 984"
          ]
      ],
      "checklist": [
          "无人机精益生产线布局指南 适用版本已张贴",
          "精益/线体/布局 仪器校准有效",
          "精益生产 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "精益",
              "精益生产领域核心度量"
          ],
          [
              "线体",
              "精益生产线布局指南 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -014"
          ]
      ],
      "caseStudy": "【案例 industry-uav-014】无人机制造产线在实施「无人机精益生产线布局指南」后，精益 相关不良从 5.4% 降至 0.3%，AI 计划员与AI 仿真员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。",
      "agentHint": {
          "PLANNER": "负责 无人机精益生产线布局指南 中第 1 阶段：规则校验（精益）",
          "SIMULATOR": "负责 无人机精益生产线布局指南 中第 2 阶段：方案生成（线体）"
      }
  },
  "多机型混线换线时间优化方法": {
      "overview": "《多机型混线换线时间优化方法》是 无人机制造 领域 **排程优化** 的专项作业文件（编号 industry-uav-015）。全文围绕 换线、SMED、混线 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 多机型混线换线时间优化方法 相关工序与决策。",
      "background": "无人机制造 客户在 换线 环节常出现与 SMED 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 多机型混线换线时间优化方法 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "产线排程（针对多机型混线换线时间优化方法第1环节）",
          "换线优化（针对多机型混线换线时间优化方法第2环节）",
          "插单规则（针对多机型混线换线时间优化方法第3环节）",
          "甘特发布（针对多机型混线换线时间优化方法第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「多机型混线换线时间优化方法」适用版本 Rev.9，确认与当前 UAV 产线工艺路线 industry-uav-015 一致",
          "【数据】从 MES/ERP 导出与 换线、SMED、混线 相关数据：订单 138 单、在制 28 批、库存周转 8 天",
          "【首件】按 无人机制造 WI 完成 多机型混线换线时间优化方法 首件，实测 换线=138rpm，记录于批次卡",
          "【监控】SMED 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0488，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 015-488 输出 排程优化 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 换线 检测数据，写入追溯链",
          "【复盘】班后会评审 多机型混线换线时间优化方法 执行偏差 3 项，更新 RAG 标签：换线、SMED、混线",
          "【改进】将案例 industry-uav-015 纳入 排程优化 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "换线 合格率",
              "≥97%",
              "排程优化 KPI"
          ],
          [
              "SMED 周期",
              "48 min",
              "节拍统计"
          ],
          [
              "多机型混线换 一次通过率",
              "≥96%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "排程优化 企业内控标准 Rev.3"
      ],
      "equipment": [
          "甘特排程软件",
          "换线计时器",
          "MES 工单",
          "Andon 看板",
          "文档 industry-uav-015 专用数据采集点"
      ],
      "issues": [
          [
              "多机型混线换线时间优化方法 超差",
              "换线 参数漂移",
              "按 WI 调机并加严 换线 抽检至 AQL 0.65"
          ],
          [
              "排程优化 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "换线、SMED、混线 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 488"
          ]
      ],
      "checklist": [
          "多机型混线换线时间优化方法 适用版本已张贴",
          "换线/SMED/混线 仪器校准有效",
          "排程优化 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "换线",
              "排程优化领域核心度量"
          ],
          [
              "SMED",
              "多机型混线换线时间优化方法 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -015"
          ]
      ],
      "caseStudy": "【案例 industry-uav-015】无人机制造产线在实施「多机型混线换线时间优化方法」后，换线 相关不良从 5.8% 降至 2.2%，AI 排程员与AI 计划员 协同缩短处置时间 23 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。",
      "agentHint": {
          "SCHEDULER": "负责 多机型混线换线时间优化方法 中第 1 阶段：方案生成（换线）",
          "PLANNER": "负责 多机型混线换线时间优化方法 中第 2 阶段：执行跟踪（SMED）"
      }
  },
  "无人机全流程质量追溯体系": {
      "overview": "《无人机全流程质量追溯体系》是 无人机制造 领域 **质量管理** 的专项作业文件（编号 industry-uav-016）。全文围绕 追溯、SN、批次 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 全流程质量追溯体系 相关工序与决策。",
      "background": "无人机制造 客户在 追溯 环节常出现与 SN 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 全流程质量追溯体系 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "追溯体系（针对全流程质量追溯体系第1环节）",
          "SPC（针对全流程质量追溯体系第2环节）",
          "FMEA（针对全流程质量追溯体系第3环节）",
          "8D 改善（针对全流程质量追溯体系第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无人机全流程质量追溯体系」适用版本 Rev.7，确认与当前 UAV 产线工艺路线 industry-uav-016 一致",
          "【数据】从 MES/ERP 导出与 追溯、SN、批次 相关数据：订单 142 单、在制 32 批、库存周转 8 天",
          "【首件】按 无人机制造 WI 完成 全流程质量追溯体系 首件，实测 追溯=92rpm，记录于批次卡",
          "【监控】SN 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0642，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 016-642 输出 质量管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 追溯 检测数据，写入追溯链",
          "【复盘】班后会评审 无人机全流程质量追溯体系 执行偏差 2 项，更新 RAG 标签：追溯、SN、批次",
          "【改进】将案例 industry-uav-016 纳入 质量管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "追溯 合格率",
              "≥97%",
              "质量管理 KPI"
          ],
          [
              "SN 周期",
              "52 min",
              "节拍统计"
          ],
          [
              "全流程质量追 一次通过率",
              "≥90%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "质量管理 企业内控标准 Rev.4"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-016 专用数据采集点"
      ],
      "issues": [
          [
              "全流程质量追溯体系 超差",
              "追溯 参数漂移",
              "按 WI 调机并加严 追溯 抽检至 AQL 0.65"
          ],
          [
              "质量管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "追溯、SN、批次 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 642"
          ]
      ],
      "checklist": [
          "无人机全流程质量追溯体系 适用版本已张贴",
          "追溯/SN/批次 仪器校准有效",
          "质量管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "追溯",
              "质量管理领域核心度量"
          ],
          [
              "SN",
              "全流程质量追溯体系 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -016"
          ]
      ],
      "caseStudy": "【案例 industry-uav-016】无人机制造产线在实施「无人机全流程质量追溯体系」后，追溯 相关不良从 7.2% 降至 0.3%，AI 质量员与AI 数据员 协同缩短处置时间 17 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 37%。",
      "agentHint": {
          "QUALITY": "负责 无人机全流程质量追溯体系 中第 1 阶段：方案生成（追溯）",
          "DATA_ANALYST": "负责 无人机全流程质量追溯体系 中第 2 阶段：执行跟踪（SN）"
      }
  },
  "飞控系统 FMEA 风险分析报告模板": {
      "overview": "《飞控系统 FMEA 风险分析报告模板》是 无人机制造 领域 **质量管理** 的专项作业文件（编号 industry-uav-017）。全文围绕 FMEA、飞控、风险 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 飞控系统 FMEA 风险分析报告模板 相关工序与决策。",
      "background": "无人机制造 客户在 FMEA 环节常出现与 飞控 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 飞控系统 FMEA 风险分析报告模板 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "追溯体系（针对飞控系统 FMEA 风险分析报告模板第1环节）",
          "SPC（针对飞控系统 FMEA 风险分析报告模板第2环节）",
          "FMEA（针对飞控系统 FMEA 风险分析报告模板第3环节）",
          "8D 改善（针对飞控系统 FMEA 风险分析报告模板第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「飞控系统 FMEA 风险分析报告模板」适用版本 Rev.12，确认与当前 UAV 产线工艺路线 industry-uav-017 一致",
          "【数据】从 MES/ERP 导出与 FMEA、飞控、风险 相关数据：订单 131 单、在制 31 批、库存周转 7 天",
          "【首件】按 无人机制造 WI 完成 飞控系统 FMEA 风险分析报告模板 首件，实测 FMEA=81rpm，记录于批次卡",
          "【监控】飞控 控制图 UCL=99% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0431，QUALITY Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 017-431 输出 质量管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 FMEA 检测数据，写入追溯链",
          "【复盘】班后会评审 飞控系统 FMEA 风险分析报告模板 执行偏差 1 项，更新 RAG 标签：FMEA、飞控、风险",
          "【改进】将案例 industry-uav-017 纳入 质量管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "FMEA 合格率",
              "≥96%",
              "质量管理 KPI"
          ],
          [
              "飞控 周期",
              "41 min",
              "节拍统计"
          ],
          [
              "飞控系统 F 一次通过率",
              "≥89%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "质量管理 企业内控标准 Rev.9"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-017 专用数据采集点"
      ],
      "issues": [
          [
              "飞控系统 FMEA 风险分析报告模板 超差",
              "FMEA 参数漂移",
              "按 WI 调机并加严 FMEA 抽检至 AQL 0.65"
          ],
          [
              "质量管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "FMEA、飞控、风险 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 431"
          ]
      ],
      "checklist": [
          "飞控系统 FMEA 风险分析报告模板 适用版本已张贴",
          "FMEA/飞控/风险 仪器校准有效",
          "质量管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "FMEA",
              "质量管理领域核心度量"
          ],
          [
              "飞控",
              "飞控系统 FMEA 风险分析报告模板 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -017"
          ]
      ],
      "caseStudy": "【案例 industry-uav-017】无人机制造产线在实施「飞控系统 FMEA 风险分析报告模板」后，FMEA 相关不良从 12.1% 降至 2.8%，AI 质量员与协同决策员 协同缩短处置时间 46 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 26%。",
      "agentHint": {
          "QUALITY": "负责 飞控系统 FMEA 风险分析报告模板 中第 1 阶段：方案生成（FMEA）",
          "DECISION": "负责 飞控系统 FMEA 风险分析报告模板 中第 2 阶段：执行跟踪（飞控）"
      }
  },
  "无人机产线数字孪生建模指南": {
      "overview": "《无人机产线数字孪生建模指南》是 无人机制造 领域 **数字孪生** 的专项作业文件（编号 industry-uav-018）。全文围绕 孪生、仿真、产线 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线数字孪生建模指南 相关工序与决策。",
      "background": "无人机制造 客户在 孪生 环节常出现与 仿真 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 产线数字孪生建模指南 在 数字孪生 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "模型校准（针对产线数字孪生建模指南第1环节）",
          "仿真场景（针对产线数字孪生建模指南第2环节）",
          "What-If（针对产线数字孪生建模指南第3环节）",
          "虚实同步（针对产线数字孪生建模指南第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无人机产线数字孪生建模指南」适用版本 Rev.8，确认与当前 UAV 产线工艺路线 industry-uav-018 一致",
          "【数据】从 MES/ERP 导出与 孪生、仿真、产线 相关数据：订单 133 单、在制 33 批、库存周转 5 天",
          "【首件】按 无人机制造 WI 完成 产线数字孪生建模指南 首件，实测 孪生=133rpm，记录于批次卡",
          "【监控】仿真 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0583，SIMULATOR Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 018-583 输出 数字孪生 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 孪生 检测数据，写入追溯链",
          "【复盘】班后会评审 无人机产线数字孪生建模指南 执行偏差 3 项，更新 RAG 标签：孪生、仿真、产线",
          "【改进】将案例 industry-uav-018 纳入 数字孪生 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "孪生 合格率",
              "≥94%",
              "数字孪生 KPI"
          ],
          [
              "仿真 周期",
              "43 min",
              "节拍统计"
          ],
          [
              "产线数字孪生 一次通过率",
              "≥91%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "数字孪生 企业内控标准 Rev.8"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-018 专用数据采集点"
      ],
      "issues": [
          [
              "产线数字孪生建模指南 超差",
              "孪生 参数漂移",
              "按 WI 调机并加严 孪生 抽检至 AQL 0.65"
          ],
          [
              "数字孪生 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "孪生、仿真、产线 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 583"
          ]
      ],
      "checklist": [
          "无人机产线数字孪生建模指南 适用版本已张贴",
          "孪生/仿真/产线 仪器校准有效",
          "数字孪生 首件已签字",
          "Agent SIMULATOR 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "孪生",
              "数字孪生领域核心度量"
          ],
          [
              "仿真",
              "产线数字孪生建模指南 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -018"
          ]
      ],
      "caseStudy": "【案例 industry-uav-018】无人机制造产线在实施「无人机产线数字孪生建模指南」后，孪生 相关不良从 12.3% 降至 1.7%，AI 仿真员与AI 数据员 协同缩短处置时间 38 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 28%。",
      "agentHint": {
          "SIMULATOR": "负责 无人机产线数字孪生建模指南 中第 1 阶段：方案生成（孪生）",
          "DATA_ANALYST": "负责 无人机产线数字孪生建模指南 中第 2 阶段：执行跟踪（仿真）"
      }
  },
  "合同网协议在无人机任务分配中的应用": {
      "overview": "《合同网协议在无人机任务分配中的应用》是 无人机制造 领域 **多智能体** 的专项作业文件（编号 industry-uav-019）。全文围绕 CNP、调度、Agent 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 合同网协议在无人机任务分配中的应用 相关工序与决策。",
      "background": "无人机制造 客户在 CNP 环节常出现与 调度 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 合同网协议在无人机任务分配中的应用 在 多智能体 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "Agent 分工（针对合同网协议在无人机任务分配中的应用第1环节）",
          "任务分配（针对合同网协议在无人机任务分配中的应用第2环节）",
          "冲突消解（针对合同网协议在无人机任务分配中的应用第3环节）",
          "决策记录（针对合同网协议在无人机任务分配中的应用第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「合同网协议在无人机任务分配中的应用」适用版本 Rev.7，确认与当前 UAV 产线工艺路线 industry-uav-019 一致",
          "【数据】从 MES/ERP 导出与 CNP、调度、Agent 相关数据：订单 138 单、在制 38 批、库存周转 7 天",
          "【首件】按 无人机制造 WI 完成 合同网协议在无人机任务分配中的应用 首件，实测 CNP=88rpm，记录于批次卡",
          "【监控】调度 控制图 UCL=94% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0438，DISPATCHER Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 019-438 输出 多智能体 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 CNP 检测数据，写入追溯链",
          "【复盘】班后会评审 合同网协议在无人机任务分配中的应用 执行偏差 3 项，更新 RAG 标签：CNP、调度、Agent",
          "【改进】将案例 industry-uav-019 纳入 多智能体 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "CNP 合格率",
              "≥96%",
              "多智能体 KPI"
          ],
          [
              "调度 周期",
              "48 min",
              "节拍统计"
          ],
          [
              "合同网协议在 一次通过率",
              "≥96%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "多智能体 企业内控标准 Rev.7"
      ],
      "equipment": [
          "Contract Net 调度器",
          "Agent 注册中心",
          "任务黑板",
          "决策日志",
          "文档 industry-uav-019 专用数据采集点"
      ],
      "issues": [
          [
              "合同网协议在无人机任务分配中的应用 超差",
              "CNP 参数漂移",
              "按 WI 调机并加严 CNP 抽检至 AQL 0.65"
          ],
          [
              "多智能体 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "CNP、调度、Agent 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 438"
          ]
      ],
      "checklist": [
          "合同网协议在无人机任务分配中的应用 适用版本已张贴",
          "CNP/调度/Agent 仪器校准有效",
          "多智能体 首件已签字",
          "Agent DISPATCHER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "CNP",
              "多智能体领域核心度量"
          ],
          [
              "调度",
              "合同网协议在无人机任务分配中的应用 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -019"
          ]
      ],
      "caseStudy": "【案例 industry-uav-019】无人机制造产线在实施「合同网协议在无人机任务分配中的应用」后，CNP 相关不良从 11.8% 降至 0.6%，AI 调度员与协同决策员 协同缩短处置时间 53 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。",
      "agentHint": {
          "DISPATCHER": "负责 合同网协议在无人机任务分配中的应用 中第 1 阶段：方案生成（CNP）",
          "DECISION": "负责 合同网协议在无人机任务分配中的应用 中第 2 阶段：执行跟踪（调度）"
      }
  },
  "民用无人机适航与合规检查清单": {
      "overview": "《民用无人机适航与合规检查清单》是 无人机制造 领域 **合规管理** 的专项作业文件（编号 industry-uav-020）。全文围绕 适航、合规、检查 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 民用无人机适航与合规检查清单 相关工序与决策。",
      "background": "无人机制造 客户在 适航 环节常出现与 合规 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 民用无人机适航与合规检查清单 在 合规管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "法规识别（针对民用无人机适航与合规检查清单第1环节）",
          "审核准备（针对民用无人机适航与合规检查清单第2环节）",
          "证书维护（针对民用无人机适航与合规检查清单第3环节）",
          "内审整改（针对民用无人机适航与合规检查清单第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「民用无人机适航与合规检查清单」适用版本 Rev.8，确认与当前 UAV 产线工艺路线 industry-uav-020 一致",
          "【数据】从 MES/ERP 导出与 适航、合规、检查 相关数据：订单 105 单、在制 45 批、库存周转 8 天",
          "【首件】按 无人机制造 WI 完成 民用无人机适航与合规检查清单 首件，实测 适航=105rpm，记录于批次卡",
          "【监控】合规 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0355，QUALITY Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 020-355 输出 合规管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 适航 检测数据，写入追溯链",
          "【复盘】班后会评审 民用无人机适航与合规检查清单 执行偏差 0 项，更新 RAG 标签：适航、合规、检查",
          "【改进】将案例 industry-uav-020 纳入 合规管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "适航 合格率",
              "≥97%",
              "合规管理 KPI"
          ],
          [
              "合规 周期",
              "15 min",
              "节拍统计"
          ],
          [
              "民用无人机适 一次通过率",
              "≥93%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "合规管理 企业内控标准 Rev.5"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-020 专用数据采集点"
      ],
      "issues": [
          [
              "民用无人机适航与合规检查清单 超差",
              "适航 参数漂移",
              "按 WI 调机并加严 适航 抽检至 AQL 0.65"
          ],
          [
              "合规管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "适航、合规、检查 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 355"
          ]
      ],
      "checklist": [
          "民用无人机适航与合规检查清单 适用版本已张贴",
          "适航/合规/检查 仪器校准有效",
          "合规管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "适航",
              "合规管理领域核心度量"
          ],
          [
              "合规",
              "民用无人机适航与合规检查清单 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -020"
          ]
      ],
      "caseStudy": "【案例 industry-uav-020】无人机制造产线在实施「民用无人机适航与合规检查清单」后，适航 相关不良从 8.5% 降至 1.4%，AI 质量员与协同决策员 协同缩短处置时间 50 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 25%。",
      "agentHint": {
          "QUALITY": "负责 民用无人机适航与合规检查清单 中第 1 阶段：方案生成（适航）",
          "DECISION": "负责 民用无人机适航与合规检查清单 中第 2 阶段：执行跟踪（合规）"
      }
  },
  "ESC 电调参数标定与老化测试": {
      "overview": "《ESC 电调参数标定与老化测试》是 无人机制造 领域 **测试工艺** 的专项作业文件（编号 industry-uav-021）。全文围绕 ESC、电调、老化 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 ESC 电调参数标定与老化测试 相关工序与决策。",
      "background": "无人机制造 客户在 ESC 环节常出现与 电调 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 ESC 电调参数标定与老化测试 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "测试程序（针对ESC 电调参数标定与老化测试第1环节）",
          "限值设定（针对ESC 电调参数标定与老化测试第2环节）",
          "设备校准（针对ESC 电调参数标定与老化测试第3环节）",
          "数据归档（针对ESC 电调参数标定与老化测试第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「ESC 电调参数标定与老化测试」适用版本 Rev.1，确认与当前 UAV 产线工艺路线 industry-uav-021 一致",
          "【数据】从 MES/ERP 导出与 ESC、电调、老化 相关数据：订单 146 单、在制 26 批、库存周转 8 天",
          "【首件】按 无人机制造 WI 完成 ESC 电调参数标定与老化测试 首件，实测 ESC=146rpm，记录于批次卡",
          "【监控】电调 控制图 UCL=88% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0096，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 021-96 输出 测试工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 ESC 检测数据，写入追溯链",
          "【复盘】班后会评审 ESC 电调参数标定与老化测试 执行偏差 1 项，更新 RAG 标签：ESC、电调、老化",
          "【改进】将案例 industry-uav-021 纳入 测试工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "ESC 合格率",
              "≥97%",
              "测试工艺 KPI"
          ],
          [
              "电调 周期",
              "56 min",
              "节拍统计"
          ],
          [
              "ESC 电调 一次通过率",
              "≥94%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "测试工艺 企业内控标准 Rev.7"
      ],
      "equipment": [
          "EOL 台架",
          "FCT 治具",
          "数据采集仪",
          "校准证书库",
          "文档 industry-uav-021 专用数据采集点"
      ],
      "issues": [
          [
              "ESC 电调参数标定与老化测试 超差",
              "ESC 参数漂移",
              "按 WI 调机并加严 ESC 抽检至 AQL 0.65"
          ],
          [
              "测试工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "ESC、电调、老化 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 96"
          ]
      ],
      "checklist": [
          "ESC 电调参数标定与老化测试 适用版本已张贴",
          "ESC/电调/老化 仪器校准有效",
          "测试工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "ESC",
              "测试工艺领域核心度量"
          ],
          [
              "电调",
              "ESC 电调参数标定与老化测试 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -021"
          ]
      ],
      "caseStudy": "【案例 industry-uav-021】无人机制造产线在实施「ESC 电调参数标定与老化测试」后，ESC 相关不良从 5.6% 降至 0.6%，AI 质量员 协同缩短处置时间 31 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 41%。",
      "agentHint": {
          "QUALITY": "负责 ESC 电调参数标定与老化测试 中第 1 阶段：方案生成（ESC）"
      }
  },
  "GNSS 模块校准与环境干扰排查": {
      "overview": "《GNSS 模块校准与环境干扰排查》是 无人机制造 领域 **测试工艺** 的专项作业文件（编号 industry-uav-022）。全文围绕 GPS、GNSS、校准 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 GNSS 模块校准与环境干扰排查 相关工序与决策。",
      "background": "无人机制造 客户在 GPS 环节常出现与 GNSS 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 GNSS 模块校准与环境干扰排查 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "测试程序（针对GNSS 模块校准与环境干扰排查第1环节）",
          "限值设定（针对GNSS 模块校准与环境干扰排查第2环节）",
          "设备校准（针对GNSS 模块校准与环境干扰排查第3环节）",
          "数据归档（针对GNSS 模块校准与环境干扰排查第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「GNSS 模块校准与环境干扰排查」适用版本 Rev.5，确认与当前 UAV 产线工艺路线 industry-uav-022 一致",
          "【数据】从 MES/ERP 导出与 GPS、GNSS、校准 相关数据：订单 118 单、在制 48 批、库存周转 3 天",
          "【首件】按 无人机制造 WI 完成 GNSS 模块校准与环境干扰排查 首件，实测 GPS=118rpm，记录于批次卡",
          "【监控】GNSS 控制图 UCL=92% / LCL=76%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0868，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 022-868 输出 测试工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 GPS 检测数据，写入追溯链",
          "【复盘】班后会评审 GNSS 模块校准与环境干扰排查 执行偏差 3 项，更新 RAG 标签：GPS、GNSS、校准",
          "【改进】将案例 industry-uav-022 纳入 测试工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "GPS 合格率",
              "≥92%",
              "测试工艺 KPI"
          ],
          [
              "GNSS 周期",
              "28 min",
              "节拍统计"
          ],
          [
              "GNSS 模 一次通过率",
              "≥96%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "测试工艺 企业内控标准 Rev.5"
      ],
      "equipment": [
          "EOL 台架",
          "FCT 治具",
          "数据采集仪",
          "校准证书库",
          "文档 industry-uav-022 专用数据采集点"
      ],
      "issues": [
          [
              "GNSS 模块校准与环境干扰排查 超差",
              "GPS 参数漂移",
              "按 WI 调机并加严 GPS 抽检至 AQL 0.65"
          ],
          [
              "测试工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "GPS、GNSS、校准 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 868"
          ]
      ],
      "checklist": [
          "GNSS 模块校准与环境干扰排查 适用版本已张贴",
          "GPS/GNSS/校准 仪器校准有效",
          "测试工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "GPS",
              "测试工艺领域核心度量"
          ],
          [
              "GNSS",
              "GNSS 模块校准与环境干扰排查 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -022"
          ]
      ],
      "caseStudy": "【案例 industry-uav-022】无人机制造产线在实施「GNSS 模块校准与环境干扰排查」后，GPS 相关不良从 9.8% 降至 1.4%，AI 质量员与AI 数据员 协同缩短处置时间 43 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 38%。",
      "agentHint": {
          "QUALITY": "负责 GNSS 模块校准与环境干扰排查 中第 1 阶段：规则校验（GPS）",
          "DATA_ANALYST": "负责 GNSS 模块校准与环境干扰排查 中第 2 阶段：方案生成（GNSS）"
      }
  },
  "图传系统联调与干扰测试规范": {
      "overview": "《图传系统联调与干扰测试规范》是 无人机制造 领域 **测试工艺** 的专项作业文件（编号 industry-uav-023）。全文围绕 图传、RF、联调 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 图传系统联调与干扰测试规范 相关工序与决策。",
      "background": "无人机制造 客户在 图传 环节常出现与 RF 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 图传系统联调与干扰测试规范 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "测试程序（针对图传系统联调与干扰测试规范第1环节）",
          "限值设定（针对图传系统联调与干扰测试规范第2环节）",
          "设备校准（针对图传系统联调与干扰测试规范第3环节）",
          "数据归档（针对图传系统联调与干扰测试规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「图传系统联调与干扰测试规范」适用版本 Rev.6，确认与当前 UAV 产线工艺路线 industry-uav-023 一致",
          "【数据】从 MES/ERP 导出与 图传、RF、联调 相关数据：订单 143 单、在制 43 批、库存周转 8 天",
          "【首件】按 无人机制造 WI 完成 图传系统联调与干扰测试规范 首件，实测 图传=143rpm，记录于批次卡",
          "【监控】RF 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0593，QUALITY Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 023-593 输出 测试工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 图传 检测数据，写入追溯链",
          "【复盘】班后会评审 图传系统联调与干扰测试规范 执行偏差 3 项，更新 RAG 标签：图传、RF、联调",
          "【改进】将案例 industry-uav-023 纳入 测试工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "图传 合格率",
              "≥97%",
              "测试工艺 KPI"
          ],
          [
              "RF 周期",
              "53 min",
              "节拍统计"
          ],
          [
              "图传系统联调 一次通过率",
              "≥91%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "测试工艺 企业内控标准 Rev.9"
      ],
      "equipment": [
          "EOL 台架",
          "FCT 治具",
          "数据采集仪",
          "校准证书库",
          "文档 industry-uav-023 专用数据采集点"
      ],
      "issues": [
          [
              "图传系统联调与干扰测试规范 超差",
              "图传 参数漂移",
              "按 WI 调机并加严 图传 抽检至 AQL 0.65"
          ],
          [
              "测试工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "图传、RF、联调 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 593"
          ]
      ],
      "checklist": [
          "图传系统联调与干扰测试规范 适用版本已张贴",
          "图传/RF/联调 仪器校准有效",
          "测试工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "图传",
              "测试工艺领域核心度量"
          ],
          [
              "RF",
              "图传系统联调与干扰测试规范 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -023"
          ]
      ],
      "caseStudy": "【案例 industry-uav-023】无人机制造产线在实施「图传系统联调与干扰测试规范」后，图传 相关不良从 6.3% 降至 2.8%，AI 质量员 协同缩短处置时间 48 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 38%。",
      "agentHint": {
          "QUALITY": "负责 图传系统联调与干扰测试规范 中第 1 阶段：执行跟踪（图传）"
      }
  },
  "无人机零部件 WMS 仓储对接规范": {
      "overview": "《无人机零部件 WMS 仓储对接规范》是 无人机制造 领域 **物流仓储** 的专项作业文件（编号 industry-uav-024）。全文围绕 WMS、仓储、拣配 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 零部件 WMS 仓储对接规范 相关工序与决策。",
      "background": "无人机制造 客户在 WMS 环节常出现与 仓储 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 零部件 WMS 仓储对接规范 在 物流仓储 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "入库检验（针对零部件 WMS 仓储对接规范第1环节）",
          "拣配策略（针对零部件 WMS 仓储对接规范第2环节）",
          "AGV 调度（针对零部件 WMS 仓储对接规范第3环节）",
          "库存周转（针对零部件 WMS 仓储对接规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无人机零部件 WMS 仓储对接规范」适用版本 Rev.6，确认与当前 UAV 产线工艺路线 industry-uav-024 一致",
          "【数据】从 MES/ERP 导出与 WMS、仓储、拣配 相关数据：订单 127 单、在制 37 批、库存周转 9 天",
          "【首件】按 无人机制造 WI 完成 零部件 WMS 仓储对接规范 首件，实测 WMS=127rpm，记录于批次卡",
          "【监控】仓储 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0377，DATA_ANALYST Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 024-377 输出 物流仓储 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 WMS 检测数据，写入追溯链",
          "【复盘】班后会评审 无人机零部件 WMS 仓储对接规范 执行偏差 2 项，更新 RAG 标签：WMS、仓储、拣配",
          "【改进】将案例 industry-uav-024 纳入 物流仓储 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "WMS 合格率",
              "≥98%",
              "物流仓储 KPI"
          ],
          [
              "仓储 周期",
              "37 min",
              "节拍统计"
          ],
          [
              "零部件 WM 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "物流仓储 企业内控标准 Rev.9"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-024 专用数据采集点"
      ],
      "issues": [
          [
              "零部件 WMS 仓储对接规范 超差",
              "WMS 参数漂移",
              "按 WI 调机并加严 WMS 抽检至 AQL 0.65"
          ],
          [
              "物流仓储 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "WMS、仓储、拣配 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 377"
          ]
      ],
      "checklist": [
          "无人机零部件 WMS 仓储对接规范 适用版本已张贴",
          "WMS/仓储/拣配 仪器校准有效",
          "物流仓储 首件已签字",
          "Agent DATA_ANALYST 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "WMS",
              "物流仓储领域核心度量"
          ],
          [
              "仓储",
              "零部件 WMS 仓储对接规范 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -024"
          ]
      ],
      "caseStudy": "【案例 industry-uav-024】无人机制造产线在实施「无人机零部件 WMS 仓储对接规范」后，WMS 相关不良从 6.7% 降至 2.8%，AI 数据员与AI 计划员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。",
      "agentHint": {
          "DATA_ANALYST": "负责 无人机零部件 WMS 仓储对接规范 中第 1 阶段：规则校验（WMS）",
          "PLANNER": "负责 无人机零部件 WMS 仓储对接规范 中第 2 阶段：方案生成（仓储）"
      }
  },
  "产线 AGV 配送路径与节拍匹配": {
      "overview": "《产线 AGV 配送路径与节拍匹配》是 无人机制造 领域 **物流仓储** 的专项作业文件（编号 industry-uav-025）。全文围绕 AGV、配送、节拍 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线 AGV 配送路径与节拍匹配 相关工序与决策。",
      "background": "无人机制造 客户在 AGV 环节常出现与 配送 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 产线 AGV 配送路径与节拍匹配 在 物流仓储 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "入库检验（针对产线 AGV 配送路径与节拍匹配第1环节）",
          "拣配策略（针对产线 AGV 配送路径与节拍匹配第2环节）",
          "AGV 调度（针对产线 AGV 配送路径与节拍匹配第3环节）",
          "库存周转（针对产线 AGV 配送路径与节拍匹配第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「产线 AGV 配送路径与节拍匹配」适用版本 Rev.6，确认与当前 UAV 产线工艺路线 industry-uav-025 一致",
          "【数据】从 MES/ERP 导出与 AGV、配送、节拍 相关数据：订单 121 单、在制 31 批、库存周转 6 天",
          "【首件】按 无人机制造 WI 完成 产线 AGV 配送路径与节拍匹配 首件，实测 AGV=71rpm，记录于批次卡",
          "【监控】配送 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0521，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 025-521 输出 物流仓储 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 AGV 检测数据，写入追溯链",
          "【复盘】班后会评审 产线 AGV 配送路径与节拍匹配 执行偏差 1 项，更新 RAG 标签：AGV、配送、节拍",
          "【改进】将案例 industry-uav-025 纳入 物流仓储 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "AGV 合格率",
              "≥95%",
              "物流仓储 KPI"
          ],
          [
              "配送 周期",
              "31 min",
              "节拍统计"
          ],
          [
              "产线 AGV 一次通过率",
              "≥89%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "物流仓储 企业内控标准 Rev.9"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-025 专用数据采集点"
      ],
      "issues": [
          [
              "产线 AGV 配送路径与节拍匹配 超差",
              "AGV 参数漂移",
              "按 WI 调机并加严 AGV 抽检至 AQL 0.65"
          ],
          [
              "物流仓储 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "AGV、配送、节拍 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 521"
          ]
      ],
      "checklist": [
          "产线 AGV 配送路径与节拍匹配 适用版本已张贴",
          "AGV/配送/节拍 仪器校准有效",
          "物流仓储 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "AGV",
              "物流仓储领域核心度量"
          ],
          [
              "配送",
              "产线 AGV 配送路径与节拍匹配 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -025"
          ]
      ],
      "caseStudy": "【案例 industry-uav-025】无人机制造产线在实施「产线 AGV 配送路径与节拍匹配」后，AGV 相关不良从 6.1% 降至 2.8%，AI 排程员与AI 调度员 协同缩短处置时间 16 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 41%。",
      "agentHint": {
          "SCHEDULER": "负责 产线 AGV 配送路径与节拍匹配 中第 1 阶段：规则校验（AGV）",
          "DISPATCHER": "负责 产线 AGV 配送路径与节拍匹配 中第 2 阶段：方案生成（配送）"
      }
  },
  "无人机生产看板 KPI 指标体系": {
      "overview": "《无人机生产看板 KPI 指标体系》是 无人机制造 领域 **数据分析** 的专项作业文件（编号 industry-uav-026）。全文围绕 KPI、看板、OEE 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 生产看板 KPI 指标体系 相关工序与决策。",
      "background": "无人机制造 客户在 KPI 环节常出现与 看板 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 生产看板 KPI 指标体系 在 数据分析 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "指标定义（针对生产看板 KPI 指标体系第1环节）",
          "报表自动化（针对生产看板 KPI 指标体系第2环节）",
          "异常预警（针对生产看板 KPI 指标体系第3环节）",
          "决策支持（针对生产看板 KPI 指标体系第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「无人机生产看板 KPI 指标体系」适用版本 Rev.8，确认与当前 UAV 产线工艺路线 industry-uav-026 一致",
          "【数据】从 MES/ERP 导出与 KPI、看板、OEE 相关数据：订单 129 单、在制 39 批、库存周转 4 天",
          "【首件】按 无人机制造 WI 完成 生产看板 KPI 指标体系 首件，实测 KPI=129rpm，记录于批次卡",
          "【监控】看板 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0379，DATA_ANALYST Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 026-379 输出 数据分析 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 KPI 检测数据，写入追溯链",
          "【复盘】班后会评审 无人机生产看板 KPI 指标体系 执行偏差 4 项，更新 RAG 标签：KPI、看板、OEE",
          "【改进】将案例 industry-uav-026 纳入 数据分析 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "KPI 合格率",
              "≥93%",
              "数据分析 KPI"
          ],
          [
              "看板 周期",
              "39 min",
              "节拍统计"
          ],
          [
              "生产看板 K 一次通过率",
              "≥97%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "数据分析 企业内控标准 Rev.2"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-026 专用数据采集点"
      ],
      "issues": [
          [
              "生产看板 KPI 指标体系 超差",
              "KPI 参数漂移",
              "按 WI 调机并加严 KPI 抽检至 AQL 0.65"
          ],
          [
              "数据分析 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "KPI、看板、OEE 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 379"
          ]
      ],
      "checklist": [
          "无人机生产看板 KPI 指标体系 适用版本已张贴",
          "KPI/看板/OEE 仪器校准有效",
          "数据分析 首件已签字",
          "Agent DATA_ANALYST 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "KPI",
              "数据分析领域核心度量"
          ],
          [
              "看板",
              "生产看板 KPI 指标体系 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -026"
          ]
      ],
      "caseStudy": "【案例 industry-uav-026】无人机制造产线在实施「无人机生产看板 KPI 指标体系」后，KPI 相关不良从 8.9% 降至 1.1%，AI 数据员 协同缩短处置时间 34 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。",
      "agentHint": {
          "DATA_ANALYST": "负责 无人机生产看板 KPI 指标体系 中第 1 阶段：方案生成（KPI）"
      }
  },
  "售后返修分析与设计反馈闭环": {
      "overview": "《售后返修分析与设计反馈闭环》是 无人机制造 领域 **质量管理** 的专项作业文件（编号 industry-uav-027）。全文围绕 返修、RMA、闭环 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 售后返修分析与设计反馈闭环 相关工序与决策。",
      "background": "无人机制造 客户在 返修 环节常出现与 RMA 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 售后返修分析与设计反馈闭环 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `UAV_MANUFACTURING` 对齐。",
      "scope": [
          "追溯体系（针对售后返修分析与设计反馈闭环第1环节）",
          "SPC（针对售后返修分析与设计反馈闭环第2环节）",
          "FMEA（针对售后返修分析与设计反馈闭环第3环节）",
          "8D 改善（针对售后返修分析与设计反馈闭环第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「售后返修分析与设计反馈闭环」适用版本 Rev.7，确认与当前 UAV 产线工艺路线 industry-uav-027 一致",
          "【数据】从 MES/ERP 导出与 返修、RMA、闭环 相关数据：订单 130 单、在制 20 批、库存周转 4 天",
          "【首件】按 无人机制造 WI 完成 售后返修分析与设计反馈闭环 首件，实测 返修=80rpm，记录于批次卡",
          "【监控】RMA 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-UAV-0330，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 027-330 输出 质量管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 飞控 SN 与 返修 检测数据，写入追溯链",
          "【复盘】班后会评审 售后返修分析与设计反馈闭环 执行偏差 0 项，更新 RAG 标签：返修、RMA、闭环",
          "【改进】将案例 industry-uav-027 纳入 质量管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "返修 合格率",
              "≥93%",
              "质量管理 KPI"
          ],
          [
              "RMA 周期",
              "40 min",
              "节拍统计"
          ],
          [
              "售后返修分析 一次通过率",
              "≥88%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "飞控 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "CCAR-92 民用无人机适航",
          "GB/T 19001",
          "GJB 复合材料通用要求",
          "企业 UAV-QMS-001",
          "质量管理 企业内控标准 Rev.7"
      ],
      "equipment": [
          "总装线",
          "飞测场",
          "热压罐",
          "KV 测试台",
          "文档 industry-uav-027 专用数据采集点"
      ],
      "issues": [
          [
              "售后返修分析与设计反馈闭环 超差",
              "返修 参数漂移",
              "按 WI 调机并加严 返修 抽检至 AQL 0.65"
          ],
          [
              "质量管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "返修、RMA、闭环 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 330"
          ]
      ],
      "checklist": [
          "售后返修分析与设计反馈闭环 适用版本已张贴",
          "返修/RMA/闭环 仪器校准有效",
          "质量管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "返修",
              "质量管理领域核心度量"
          ],
          [
              "RMA",
              "售后返修分析与设计反馈闭环 标准作业程序"
          ],
          [
              "UAV-TERM",
              "无人机制造 专用术语，见企业术语库 -027"
          ]
      ],
      "caseStudy": "【案例 industry-uav-027】无人机制造产线在实施「售后返修分析与设计反馈闭环」后，返修 相关不良从 7.0% 降至 0.6%，AI 质量员与协同决策员 协同缩短处置时间 25 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 25%。",
      "agentHint": {
          "QUALITY": "负责 售后返修分析与设计反馈闭环 中第 1 阶段：规则校验（返修）",
          "DECISION": "负责 售后返修分析与设计反馈闭环 中第 2 阶段：方案生成（RMA）"
      }
  },
  "SMT 贴片产线智能排程操作手册": {
      "overview": "《SMT 贴片产线智能排程操作手册》是 SMT 电子制造 领域 **排程优化** 的专项作业文件（编号 industry-smt-028）。全文围绕 排程、贴片、甘特图 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 贴片产线智能排程操作手册 相关工序与决策。",
      "background": "SMT 电子制造 客户在 排程 环节常出现与 贴片 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 贴片产线智能排程操作手册 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "产线排程（针对贴片产线智能排程操作手册第1环节）",
          "换线优化（针对贴片产线智能排程操作手册第2环节）",
          "插单规则（针对贴片产线智能排程操作手册第3环节）",
          "甘特发布（针对贴片产线智能排程操作手册第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 贴片产线智能排程操作手册」适用版本 Rev.8，确认与当前 SMT 产线工艺路线 industry-smt-028 一致",
          "【数据】从 MES/ERP 导出与 排程、贴片、甘特图 相关数据：订单 149 单、在制 39 批、库存周转 5 天",
          "【首件】按 SMT 电子制造 WI 完成 贴片产线智能排程操作手册 首件，实测 排程=149%，记录于批次卡",
          "【监控】贴片 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0499，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 028-499 输出 排程优化 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 排程 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 贴片产线智能排程操作手册 执行偏差 4 项，更新 RAG 标签：排程、贴片、甘特图",
          "【改进】将案例 industry-smt-028 纳入 排程优化 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "排程 合格率",
              "≥94%",
              "排程优化 KPI"
          ],
          [
              "贴片 周期",
              "59 s/件",
              "节拍统计"
          ],
          [
              "贴片产线智能 一次通过率",
              "≥97%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "排程优化 企业内控标准 Rev.5"
      ],
      "equipment": [
          "甘特排程软件",
          "换线计时器",
          "MES 工单",
          "Andon 看板",
          "文档 industry-smt-028 专用数据采集点"
      ],
      "issues": [
          [
              "贴片产线智能排程操作手册 超差",
              "排程 参数漂移",
              "按 WI 调机并加严 排程 抽检至 AQL 0.65"
          ],
          [
              "排程优化 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "排程、贴片、甘特图 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 499"
          ]
      ],
      "checklist": [
          "SMT 贴片产线智能排程操作手册 适用版本已张贴",
          "排程/贴片/甘特图 仪器校准有效",
          "排程优化 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "排程",
              "排程优化领域核心度量"
          ],
          [
              "贴片",
              "贴片产线智能排程操作手册 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -028"
          ]
      ],
      "caseStudy": "【案例 industry-smt-028】SMT 电子制造产线在实施「SMT 贴片产线智能排程操作手册」后，排程 相关不良从 8.9% 降至 1.4%，AI 排程员 协同缩短处置时间 34 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 44%。",
      "agentHint": {
          "SCHEDULER": "负责 SMT 贴片产线智能排程操作手册 中第 1 阶段：规则校验（排程）"
      }
  },
  "锡膏印刷工艺参数与 SPI 判定标准": {
      "overview": "《锡膏印刷工艺参数与 SPI 判定标准》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-029）。全文围绕 印刷、锡膏、SPI 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 锡膏印刷工艺参数与 SPI 判定标准 相关工序与决策。",
      "background": "SMT 电子制造 客户在 印刷 环节常出现与 锡膏 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 锡膏印刷工艺参数与 SPI 判定标准 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "过程控制（针对锡膏印刷工艺参数与 SPI 判定标准第1环节）",
          "数据记录（针对锡膏印刷工艺参数与 SPI 判定标准第2环节）",
          "异常升级（针对锡膏印刷工艺参数与 SPI 判定标准第3环节）",
          "持续改进（针对锡膏印刷工艺参数与 SPI 判定标准第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「锡膏印刷工艺参数与 SPI 判定标准」适用版本 Rev.2，确认与当前 SMT 产线工艺路线 industry-smt-029 一致",
          "【数据】从 MES/ERP 导出与 印刷、锡膏、SPI 相关数据：订单 103 单、在制 33 批、库存周转 9 天",
          "【首件】按 SMT 电子制造 WI 完成 锡膏印刷工艺参数与 SPI 判定标准 首件，实测 印刷=103%，记录于批次卡",
          "【监控】锡膏 控制图 UCL=89% / LCL=77%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0853，QUALITY Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 029-853 输出 工艺标准 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 印刷 检测数据，写入追溯链",
          "【复盘】班后会评审 锡膏印刷工艺参数与 SPI 判定标准 执行偏差 3 项，更新 RAG 标签：印刷、锡膏、SPI",
          "【改进】将案例 industry-smt-029 纳入 工艺标准 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "印刷 合格率",
              "≥98%",
              "工艺标准 KPI"
          ],
          [
              "锡膏 周期",
              "13 s/件",
              "节拍统计"
          ],
          [
              "锡膏印刷工艺 一次通过率",
              "≥91%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "工艺标准 企业内控标准 Rev.8"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-029 专用数据采集点"
      ],
      "issues": [
          [
              "锡膏印刷工艺参数与 SPI 判定标准 超差",
              "印刷 参数漂移",
              "按 WI 调机并加严 印刷 抽检至 AQL 0.65"
          ],
          [
              "工艺标准 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "印刷、锡膏、SPI 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 853"
          ]
      ],
      "checklist": [
          "锡膏印刷工艺参数与 SPI 判定标准 适用版本已张贴",
          "印刷/锡膏/SPI 仪器校准有效",
          "工艺标准 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "印刷",
              "工艺标准领域核心度量"
          ],
          [
              "锡膏",
              "锡膏印刷工艺参数与 SPI 判定标准 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -029"
          ]
      ],
      "caseStudy": "【案例 industry-smt-029】SMT 电子制造产线在实施「锡膏印刷工艺参数与 SPI 判定标准」后，印刷 相关不良从 10.3% 降至 1.7%，AI 质量员与AI 排程员 协同缩短处置时间 28 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 23%。",
      "agentHint": {
          "QUALITY": "负责 锡膏印刷工艺参数与 SPI 判定标准 中第 1 阶段：数据分析（印刷）",
          "SCHEDULER": "负责 锡膏印刷工艺参数与 SPI 判定标准 中第 2 阶段：规则校验（锡膏）"
      }
  },
  "SPI 三维检测缺陷分类与处置": {
      "overview": "《SPI 三维检测缺陷分类与处置》是 SMT 电子制造 领域 **质量检验** 的专项作业文件（编号 industry-smt-030）。全文围绕 SPI、缺陷、SPC 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 SPI 三维检测缺陷分类与处置 相关工序与决策。",
      "background": "SMT 电子制造 客户在 SPI 环节常出现与 缺陷 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 SPI 三维检测缺陷分类与处置 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "IQC/IPQC/OQC（针对SPI 三维检测缺陷分类与处置第1环节）",
          "抽样方案（针对SPI 三维检测缺陷分类与处置第2环节）",
          "判定准则（针对SPI 三维检测缺陷分类与处置第3环节）",
          "NCR 闭环（针对SPI 三维检测缺陷分类与处置第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SPI 三维检测缺陷分类与处置」适用版本 Rev.2，确认与当前 SMT 产线工艺路线 industry-smt-030 一致",
          "【数据】从 MES/ERP 导出与 SPI、缺陷、SPC 相关数据：订单 127 单、在制 27 批、库存周转 6 天",
          "【首件】按 SMT 电子制造 WI 完成 SPI 三维检测缺陷分类与处置 首件，实测 SPI=127%，记录于批次卡",
          "【监控】缺陷 控制图 UCL=89% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0577，QUALITY Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 030-577 输出 质量检验 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 SPI 检测数据，写入追溯链",
          "【复盘】班后会评审 SPI 三维检测缺陷分类与处置 执行偏差 2 项，更新 RAG 标签：SPI、缺陷、SPC",
          "【改进】将案例 industry-smt-030 纳入 质量检验 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "SPI 合格率",
              "≥95%",
              "质量检验 KPI"
          ],
          [
              "缺陷 周期",
              "37 s/件",
              "节拍统计"
          ],
          [
              "SPI 三维 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "质量检验 企业内控标准 Rev.2"
      ],
      "equipment": [
          "三坐标/CMM",
          "光学测量仪",
          "SPC 软件",
          "AQL 抽样表",
          "文档 industry-smt-030 专用数据采集点"
      ],
      "issues": [
          [
              "SPI 三维检测缺陷分类与处置 超差",
              "SPI 参数漂移",
              "按 WI 调机并加严 SPI 抽检至 AQL 0.65"
          ],
          [
              "质量检验 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "SPI、缺陷、SPC 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 577"
          ]
      ],
      "checklist": [
          "SPI 三维检测缺陷分类与处置 适用版本已张贴",
          "SPI/缺陷/SPC 仪器校准有效",
          "质量检验 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "SPI",
              "质量检验领域核心度量"
          ],
          [
              "缺陷",
              "SPI 三维检测缺陷分类与处置 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -030"
          ]
      ],
      "caseStudy": "【案例 industry-smt-030】SMT 电子制造产线在实施「SPI 三维检测缺陷分类与处置」后，SPI 相关不良从 6.7% 降至 1.1%，AI 质量员与AI 数据员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。",
      "agentHint": {
          "QUALITY": "负责 SPI 三维检测缺陷分类与处置 中第 1 阶段：规则校验（SPI）",
          "DATA_ANALYST": "负责 SPI 三维检测缺陷分类与处置 中第 2 阶段：方案生成（缺陷）"
      }
  },
  "回流焊温区设置与炉温曲线验证": {
      "overview": "《回流焊温区设置与炉温曲线验证》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-031）。全文围绕 回流焊、温区、曲线 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 回流焊温区设置与炉温曲线验证 相关工序与决策。",
      "background": "SMT 电子制造 客户在 回流焊 环节常出现与 温区 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 回流焊温区设置与炉温曲线验证 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "过程控制（针对回流焊温区设置与炉温曲线验证第1环节）",
          "数据记录（针对回流焊温区设置与炉温曲线验证第2环节）",
          "异常升级（针对回流焊温区设置与炉温曲线验证第3环节）",
          "持续改进（针对回流焊温区设置与炉温曲线验证第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「回流焊温区设置与炉温曲线验证」适用版本 Rev.5，确认与当前 SMT 产线工艺路线 industry-smt-031 一致",
          "【数据】从 MES/ERP 导出与 回流焊、温区、曲线 相关数据：订单 102 单、在制 42 批、库存周转 5 天",
          "【首件】按 SMT 电子制造 WI 完成 回流焊温区设置与炉温曲线验证 首件，实测 回流焊=102%，记录于批次卡",
          "【监控】温区 控制图 UCL=92% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0352，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 031-352 输出 工艺标准 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 回流焊 检测数据，写入追溯链",
          "【复盘】班后会评审 回流焊温区设置与炉温曲线验证 执行偏差 2 项，更新 RAG 标签：回流焊、温区、曲线",
          "【改进】将案例 industry-smt-031 纳入 工艺标准 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "回流焊 合格率",
              "≥94%",
              "工艺标准 KPI"
          ],
          [
              "温区 周期",
              "12 s/件",
              "节拍统计"
          ],
          [
              "回流焊温区设 一次通过率",
              "≥90%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "工艺标准 企业内控标准 Rev.2"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-031 专用数据采集点"
      ],
      "issues": [
          [
              "回流焊温区设置与炉温曲线验证 超差",
              "回流焊 参数漂移",
              "按 WI 调机并加严 回流焊 抽检至 AQL 0.65"
          ],
          [
              "工艺标准 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "回流焊、温区、曲线 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 352"
          ]
      ],
      "checklist": [
          "回流焊温区设置与炉温曲线验证 适用版本已张贴",
          "回流焊/温区/曲线 仪器校准有效",
          "工艺标准 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "回流焊",
              "工艺标准领域核心度量"
          ],
          [
              "温区",
              "回流焊温区设置与炉温曲线验证 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -031"
          ]
      ],
      "caseStudy": "【案例 industry-smt-031】SMT 电子制造产线在实施「回流焊温区设置与炉温曲线验证」后，回流焊 相关不良从 5.2% 降至 1.1%，AI 质量员与AI 排程员 协同缩短处置时间 47 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。",
      "agentHint": {
          "QUALITY": "负责 回流焊温区设置与炉温曲线验证 中第 1 阶段：数据分析（回流焊）",
          "SCHEDULER": "负责 回流焊温区设置与炉温曲线验证 中第 2 阶段：规则校验（温区）"
      }
  },
  "AOI 光学检测误报分析与优化": {
      "overview": "《AOI 光学检测误报分析与优化》是 SMT 电子制造 领域 **质量检验** 的专项作业文件（编号 industry-smt-032）。全文围绕 AOI、误报、算法 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 AOI 光学检测误报分析与优化 相关工序与决策。",
      "background": "SMT 电子制造 客户在 AOI 环节常出现与 误报 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 AOI 光学检测误报分析与优化 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "IQC/IPQC/OQC（针对AOI 光学检测误报分析与优化第1环节）",
          "抽样方案（针对AOI 光学检测误报分析与优化第2环节）",
          "判定准则（针对AOI 光学检测误报分析与优化第3环节）",
          "NCR 闭环（针对AOI 光学检测误报分析与优化第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「AOI 光学检测误报分析与优化」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-032 一致",
          "【数据】从 MES/ERP 导出与 AOI、误报、算法 相关数据：订单 148 单、在制 28 批、库存周转 9 天",
          "【首件】按 SMT 电子制造 WI 完成 AOI 光学检测误报分析与优化 首件，实测 AOI=148%，记录于批次卡",
          "【监控】误报 控制图 UCL=90% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0398，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 032-398 输出 质量检验 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 AOI 检测数据，写入追溯链",
          "【复盘】班后会评审 AOI 光学检测误报分析与优化 执行偏差 3 项，更新 RAG 标签：AOI、误报、算法",
          "【改进】将案例 industry-smt-032 纳入 质量检验 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "AOI 合格率",
              "≥98%",
              "质量检验 KPI"
          ],
          [
              "误报 周期",
              "58 s/件",
              "节拍统计"
          ],
          [
              "AOI 光学 一次通过率",
              "≥96%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "质量检验 企业内控标准 Rev.3"
      ],
      "equipment": [
          "三坐标/CMM",
          "光学测量仪",
          "SPC 软件",
          "AQL 抽样表",
          "文档 industry-smt-032 专用数据采集点"
      ],
      "issues": [
          [
              "AOI 光学检测误报分析与优化 超差",
              "AOI 参数漂移",
              "按 WI 调机并加严 AOI 抽检至 AQL 0.65"
          ],
          [
              "质量检验 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "AOI、误报、算法 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 398"
          ]
      ],
      "checklist": [
          "AOI 光学检测误报分析与优化 适用版本已张贴",
          "AOI/误报/算法 仪器校准有效",
          "质量检验 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "AOI",
              "质量检验领域核心度量"
          ],
          [
              "误报",
              "AOI 光学检测误报分析与优化 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -032"
          ]
      ],
      "caseStudy": "【案例 industry-smt-032】SMT 电子制造产线在实施「AOI 光学检测误报分析与优化」后，AOI 相关不良从 11.8% 降至 2.2%，AI 质量员与AI 数据员 协同缩短处置时间 53 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 43%。",
      "agentHint": {
          "QUALITY": "负责 AOI 光学检测误报分析与优化 中第 1 阶段：方案生成（AOI）",
          "DATA_ANALYST": "负责 AOI 光学检测误报分析与优化 中第 2 阶段：执行跟踪（误报）"
      }
  },
  "SMT 换线标准作业程序 SMED": {
      "overview": "《SMT 换线标准作业程序 SMED》是 SMT 电子制造 领域 **排程优化** 的专项作业文件（编号 industry-smt-033）。全文围绕 换线、SMED、程序 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 换线标准作业程序 SMED 相关工序与决策。",
      "background": "SMT 电子制造 客户在 换线 环节常出现与 SMED 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 换线标准作业程序 SMED 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "产线排程（针对换线标准作业程序 SMED第1环节）",
          "换线优化（针对换线标准作业程序 SMED第2环节）",
          "插单规则（针对换线标准作业程序 SMED第3环节）",
          "甘特发布（针对换线标准作业程序 SMED第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 换线标准作业程序 SMED」适用版本 Rev.8，确认与当前 SMT 产线工艺路线 industry-smt-033 一致",
          "【数据】从 MES/ERP 导出与 换线、SMED、程序 相关数据：订单 141 单、在制 21 批、库存周转 3 天",
          "【首件】按 SMT 电子制造 WI 完成 换线标准作业程序 SMED 首件，实测 换线=141%，记录于批次卡",
          "【监控】SMED 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0091，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 033-91 输出 排程优化 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 换线 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 换线标准作业程序 SMED 执行偏差 1 项，更新 RAG 标签：换线、SMED、程序",
          "【改进】将案例 industry-smt-033 纳入 排程优化 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "换线 合格率",
              "≥92%",
              "排程优化 KPI"
          ],
          [
              "SMED 周期",
              "51 s/件",
              "节拍统计"
          ],
          [
              "换线标准作业 一次通过率",
              "≥89%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "排程优化 企业内控标准 Rev.2"
      ],
      "equipment": [
          "甘特排程软件",
          "换线计时器",
          "MES 工单",
          "Andon 看板",
          "文档 industry-smt-033 专用数据采集点"
      ],
      "issues": [
          [
              "换线标准作业程序 SMED 超差",
              "换线 参数漂移",
              "按 WI 调机并加严 换线 抽检至 AQL 0.65"
          ],
          [
              "排程优化 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "换线、SMED、程序 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 91"
          ]
      ],
      "checklist": [
          "SMT 换线标准作业程序 SMED 适用版本已张贴",
          "换线/SMED/程序 仪器校准有效",
          "排程优化 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "换线",
              "排程优化领域核心度量"
          ],
          [
              "SMED",
              "换线标准作业程序 SMED 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -033"
          ]
      ],
      "caseStudy": "【案例 industry-smt-033】SMT 电子制造产线在实施「SMT 换线标准作业程序 SMED」后，换线 相关不良从 8.1% 降至 1.1%，AI 排程员 协同缩短处置时间 26 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 36%。",
      "agentHint": {
          "SCHEDULER": "负责 SMT 换线标准作业程序 SMED 中第 1 阶段：执行跟踪（换线）"
      }
  },
  "NPI 新产品 SMT 导入流程": {
      "overview": "《NPI 新产品 SMT 导入流程》是 SMT 电子制造 领域 **工程管理** 的专项作业文件（编号 industry-smt-034）。全文围绕 NPI、导入、试产 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 NPI 新产品 SMT 导入流程 相关工序与决策。",
      "background": "SMT 电子制造 客户在 NPI 环节常出现与 导入 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 NPI 新产品 SMT 导入流程 在 工程管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "NPI 门阀（针对NPI 新产品 SMT 导入流程第1环节）",
          "试产转化（针对NPI 新产品 SMT 导入流程第2环节）",
          "成本核算（针对NPI 新产品 SMT 导入流程第3环节）",
          "变更评估（针对NPI 新产品 SMT 导入流程第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「NPI 新产品 SMT 导入流程」适用版本 Rev.12，确认与当前 SMT 产线工艺路线 industry-smt-034 一致",
          "【数据】从 MES/ERP 导出与 NPI、导入、试产 相关数据：订单 147 单、在制 37 批、库存周转 5 天",
          "【首件】按 SMT 电子制造 WI 完成 NPI 新产品 SMT 导入流程 首件，实测 NPI=97%，记录于批次卡",
          "【监控】导入 控制图 UCL=99% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0947，PLANNER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 034-947 输出 工程管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 NPI 检测数据，写入追溯链",
          "【复盘】班后会评审 NPI 新产品 SMT 导入流程 执行偏差 2 项，更新 RAG 标签：NPI、导入、试产",
          "【改进】将案例 industry-smt-034 纳入 工程管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "NPI 合格率",
              "≥94%",
              "工程管理 KPI"
          ],
          [
              "导入 周期",
              "57 s/件",
              "节拍统计"
          ],
          [
              "NPI 新产 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "工程管理 企业内控标准 Rev.3"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-034 专用数据采集点"
      ],
      "issues": [
          [
              "NPI 新产品 SMT 导入流程 超差",
              "NPI 参数漂移",
              "按 WI 调机并加严 NPI 抽检至 AQL 0.65"
          ],
          [
              "工程管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "NPI、导入、试产 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 947"
          ]
      ],
      "checklist": [
          "NPI 新产品 SMT 导入流程 适用版本已张贴",
          "NPI/导入/试产 仪器校准有效",
          "工程管理 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "NPI",
              "工程管理领域核心度量"
          ],
          [
              "导入",
              "NPI 新产品 SMT 导入流程 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -034"
          ]
      ],
      "caseStudy": "【案例 industry-smt-034】SMT 电子制造产线在实施「NPI 新产品 SMT 导入流程」后，NPI 相关不良从 8.7% 降至 2.2%，AI 计划员与AI 排程员 协同缩短处置时间 42 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 42%。",
      "agentHint": {
          "PLANNER": "负责 NPI 新产品 SMT 导入流程 中第 1 阶段：执行跟踪（NPI）",
          "SCHEDULER": "负责 NPI 新产品 SMT 导入流程 中第 2 阶段：数据分析（导入）"
      }
  },
  "湿敏元件 MSD 管理与烘烤规范": {
      "overview": "《湿敏元件 MSD 管理与烘烤规范》是 SMT 电子制造 领域 **物料管理** 的专项作业文件（编号 industry-smt-035）。全文围绕 MSD、烘烤、防潮 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 湿敏元件 MSD 管理与烘烤规范 相关工序与决策。",
      "background": "SMT 电子制造 客户在 MSD 环节常出现与 烘烤 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 湿敏元件 MSD 管理与烘烤规范 在 物料管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "BOM 维护（针对湿敏元件 MSD 管理与烘烤规范第1环节）",
          "发料规则（针对湿敏元件 MSD 管理与烘烤规范第2环节）",
          "超领控制（针对湿敏元件 MSD 管理与烘烤规范第3环节）",
          "盘点差异（针对湿敏元件 MSD 管理与烘烤规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「湿敏元件 MSD 管理与烘烤规范」适用版本 Rev.12，确认与当前 SMT 产线工艺路线 industry-smt-035 一致",
          "【数据】从 MES/ERP 导出与 MSD、烘烤、防潮 相关数据：订单 121 单、在制 31 批、库存周转 4 天",
          "【首件】按 SMT 电子制造 WI 完成 湿敏元件 MSD 管理与烘烤规范 首件，实测 MSD=121%，记录于批次卡",
          "【监控】烘烤 控制图 UCL=99% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0071，QUALITY Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 035-71 输出 物料管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 MSD 检测数据，写入追溯链",
          "【复盘】班后会评审 湿敏元件 MSD 管理与烘烤规范 执行偏差 1 项，更新 RAG 标签：MSD、烘烤、防潮",
          "【改进】将案例 industry-smt-035 纳入 物料管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "MSD 合格率",
              "≥93%",
              "物料管理 KPI"
          ],
          [
              "烘烤 周期",
              "31 s/件",
              "节拍统计"
          ],
          [
              "湿敏元件 M 一次通过率",
              "≥89%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "物料管理 企业内控标准 Rev.9"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-035 专用数据采集点"
      ],
      "issues": [
          [
              "湿敏元件 MSD 管理与烘烤规范 超差",
              "MSD 参数漂移",
              "按 WI 调机并加严 MSD 抽检至 AQL 0.65"
          ],
          [
              "物料管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "MSD、烘烤、防潮 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 71"
          ]
      ],
      "checklist": [
          "湿敏元件 MSD 管理与烘烤规范 适用版本已张贴",
          "MSD/烘烤/防潮 仪器校准有效",
          "物料管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "MSD",
              "物料管理领域核心度量"
          ],
          [
              "烘烤",
              "湿敏元件 MSD 管理与烘烤规范 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -035"
          ]
      ],
      "caseStudy": "【案例 industry-smt-035】SMT 电子制造产线在实施「湿敏元件 MSD 管理与烘烤规范」后，MSD 相关不良从 12.1% 降至 2.8%，AI 质量员与AI 计划员 协同缩短处置时间 46 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 41%。",
      "agentHint": {
          "QUALITY": "负责 湿敏元件 MSD 管理与烘烤规范 中第 1 阶段：规则校验（MSD）",
          "PLANNER": "负责 湿敏元件 MSD 管理与烘烤规范 中第 2 阶段：方案生成（烘烤）"
      }
  },
  "钢网清洁、张力与寿命管理": {
      "overview": "《钢网清洁、张力与寿命管理》是 SMT 电子制造 领域 **设备管理** 的专项作业文件（编号 industry-smt-036）。全文围绕 钢网、清洁、张力 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 钢网清洁、张力与寿命管理 相关工序与决策。",
      "background": "SMT 电子制造 客户在 钢网 环节常出现与 清洁 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 钢网清洁、张力与寿命管理 在 设备管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "PM 计划（针对钢网清洁、张力与寿命管理第1环节）",
          "备件策略（针对钢网清洁、张力与寿命管理第2环节）",
          "OEE 统计（针对钢网清洁、张力与寿命管理第3环节）",
          "故障代码（针对钢网清洁、张力与寿命管理第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「钢网清洁、张力与寿命管理」适用版本 Rev.8，确认与当前 SMT 产线工艺路线 industry-smt-036 一致",
          "【数据】从 MES/ERP 导出与 钢网、清洁、张力 相关数据：订单 105 单、在制 45 批、库存周转 9 天",
          "【首件】按 SMT 电子制造 WI 完成 钢网清洁、张力与寿命管理 首件，实测 钢网=105%，记录于批次卡",
          "【监控】清洁 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0055，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 036-55 输出 设备管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 钢网 检测数据，写入追溯链",
          "【复盘】班后会评审 钢网清洁、张力与寿命管理 执行偏差 0 项，更新 RAG 标签：钢网、清洁、张力",
          "【改进】将案例 industry-smt-036 纳入 设备管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "钢网 合格率",
              "≥98%",
              "设备管理 KPI"
          ],
          [
              "清洁 周期",
              "15 s/件",
              "节拍统计"
          ],
          [
              "钢网清洁、张 一次通过率",
              "≥93%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "设备管理 企业内控标准 Rev.2"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-036 专用数据采集点"
      ],
      "issues": [
          [
              "钢网清洁、张力与寿命管理 超差",
              "钢网 参数漂移",
              "按 WI 调机并加严 钢网 抽检至 AQL 0.65"
          ],
          [
              "设备管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "钢网、清洁、张力 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 55"
          ]
      ],
      "checklist": [
          "钢网清洁、张力与寿命管理 适用版本已张贴",
          "钢网/清洁/张力 仪器校准有效",
          "设备管理 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "钢网",
              "设备管理领域核心度量"
          ],
          [
              "清洁",
              "钢网清洁、张力与寿命管理 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -036"
          ]
      ],
      "caseStudy": "【案例 industry-smt-036】SMT 电子制造产线在实施「钢网清洁、张力与寿命管理」后，钢网 相关不良从 12.5% 降至 1.1%，AI 排程员与AI 质量员 协同缩短处置时间 30 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 25%。",
      "agentHint": {
          "SCHEDULER": "负责 钢网清洁、张力与寿命管理 中第 1 阶段：执行跟踪（钢网）",
          "QUALITY": "负责 钢网清洁、张力与寿命管理 中第 2 阶段：数据分析（清洁）"
      }
  },
  "SMT 产线 OEE 分析与改善案例": {
      "overview": "《SMT 产线 OEE 分析与改善案例》是 SMT 电子制造 领域 **数据分析** 的专项作业文件（编号 industry-smt-037）。全文围绕 OEE、停机、改善 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线 OEE 分析与改善案例 相关工序与决策。",
      "background": "SMT 电子制造 客户在 OEE 环节常出现与 停机 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 产线 OEE 分析与改善案例 在 数据分析 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "指标定义（针对产线 OEE 分析与改善案例第1环节）",
          "报表自动化（针对产线 OEE 分析与改善案例第2环节）",
          "异常预警（针对产线 OEE 分析与改善案例第3环节）",
          "决策支持（针对产线 OEE 分析与改善案例第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 产线 OEE 分析与改善案例」适用版本 Rev.9，确认与当前 SMT 产线工艺路线 industry-smt-037 一致",
          "【数据】从 MES/ERP 导出与 OEE、停机、改善 相关数据：订单 102 单、在制 22 批、库存周转 8 天",
          "【首件】按 SMT 电子制造 WI 完成 产线 OEE 分析与改善案例 首件，实测 OEE=102%，记录于批次卡",
          "【监控】停机 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0152，DATA_ANALYST Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 037-152 输出 数据分析 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 OEE 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 产线 OEE 分析与改善案例 执行偏差 2 项，更新 RAG 标签：OEE、停机、改善",
          "【改进】将案例 industry-smt-037 纳入 数据分析 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "OEE 合格率",
              "≥97%",
              "数据分析 KPI"
          ],
          [
              "停机 周期",
              "12 s/件",
              "节拍统计"
          ],
          [
              "产线 OEE 一次通过率",
              "≥90%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "数据分析 企业内控标准 Rev.9"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-037 专用数据采集点"
      ],
      "issues": [
          [
              "产线 OEE 分析与改善案例 超差",
              "OEE 参数漂移",
              "按 WI 调机并加严 OEE 抽检至 AQL 0.65"
          ],
          [
              "数据分析 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "OEE、停机、改善 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 152"
          ]
      ],
      "checklist": [
          "SMT 产线 OEE 分析与改善案例 适用版本已张贴",
          "OEE/停机/改善 仪器校准有效",
          "数据分析 首件已签字",
          "Agent DATA_ANALYST 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "OEE",
              "数据分析领域核心度量"
          ],
          [
              "停机",
              "产线 OEE 分析与改善案例 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -037"
          ]
      ],
      "caseStudy": "【案例 industry-smt-037】SMT 电子制造产线在实施「SMT 产线 OEE 分析与改善案例」后，OEE 相关不良从 5.2% 降至 2.8%，AI 数据员 协同缩短处置时间 47 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。",
      "agentHint": {
          "DATA_ANALYST": "负责 SMT 产线 OEE 分析与改善案例 中第 1 阶段：执行跟踪（OEE）"
      }
  },
  "SMT 批次追溯与条码关联规范": {
      "overview": "《SMT 批次追溯与条码关联规范》是 SMT 电子制造 领域 **质量管理** 的专项作业文件（编号 industry-smt-038）。全文围绕 追溯、条码、批次 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 批次追溯与条码关联规范 相关工序与决策。",
      "background": "SMT 电子制造 客户在 追溯 环节常出现与 条码 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 批次追溯与条码关联规范 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "追溯体系（针对批次追溯与条码关联规范第1环节）",
          "SPC（针对批次追溯与条码关联规范第2环节）",
          "FMEA（针对批次追溯与条码关联规范第3环节）",
          "8D 改善（针对批次追溯与条码关联规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 批次追溯与条码关联规范」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-038 一致",
          "【数据】从 MES/ERP 导出与 追溯、条码、批次 相关数据：订单 116 单、在制 26 批、库存周转 6 天",
          "【首件】按 SMT 电子制造 WI 完成 批次追溯与条码关联规范 首件，实测 追溯=116%，记录于批次卡",
          "【监控】条码 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0066，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 038-66 输出 质量管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 追溯 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 批次追溯与条码关联规范 执行偏差 1 项，更新 RAG 标签：追溯、条码、批次",
          "【改进】将案例 industry-smt-038 纳入 质量管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "追溯 合格率",
              "≥95%",
              "质量管理 KPI"
          ],
          [
              "条码 周期",
              "26 s/件",
              "节拍统计"
          ],
          [
              "批次追溯与条 一次通过率",
              "≥94%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "质量管理 企业内控标准 Rev.4"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-038 专用数据采集点"
      ],
      "issues": [
          [
              "批次追溯与条码关联规范 超差",
              "追溯 参数漂移",
              "按 WI 调机并加严 追溯 抽检至 AQL 0.65"
          ],
          [
              "质量管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "追溯、条码、批次 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 66"
          ]
      ],
      "checklist": [
          "SMT 批次追溯与条码关联规范 适用版本已张贴",
          "追溯/条码/批次 仪器校准有效",
          "质量管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "追溯",
              "质量管理领域核心度量"
          ],
          [
              "条码",
              "批次追溯与条码关联规范 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -038"
          ]
      ],
      "caseStudy": "【案例 industry-smt-038】SMT 电子制造产线在实施「SMT 批次追溯与条码关联规范」后，追溯 相关不良从 7.6% 降至 0.3%，AI 质量员与AI 数据员 协同缩短处置时间 41 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 36%。",
      "agentHint": {
          "QUALITY": "负责 SMT 批次追溯与条码关联规范 中第 1 阶段：规则校验（追溯）",
          "DATA_ANALYST": "负责 SMT 批次追溯与条码关联规范 中第 2 阶段：方案生成（条码）"
      }
  },
  "SMT 首件检验与过程确认流程": {
      "overview": "《SMT 首件检验与过程确认流程》是 SMT 电子制造 领域 **质量检验** 的专项作业文件（编号 industry-smt-039）。全文围绕 首件、FAI、确认 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 首件检验与过程确认流程 相关工序与决策。",
      "background": "SMT 电子制造 客户在 首件 环节常出现与 FAI 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 首件检验与过程确认流程 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "IQC/IPQC/OQC（针对首件检验与过程确认流程第1环节）",
          "抽样方案（针对首件检验与过程确认流程第2环节）",
          "判定准则（针对首件检验与过程确认流程第3环节）",
          "NCR 闭环（针对首件检验与过程确认流程第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 首件检验与过程确认流程」适用版本 Rev.11，确认与当前 SMT 产线工艺路线 industry-smt-039 一致",
          "【数据】从 MES/ERP 导出与 首件、FAI、确认 相关数据：订单 100 单、在制 30 批、库存周转 7 天",
          "【首件】按 SMT 电子制造 WI 完成 首件检验与过程确认流程 首件，实测 首件=100%，记录于批次卡",
          "【监控】FAI 控制图 UCL=98% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0550，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 039-550 输出 质量检验 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 首件 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 首件检验与过程确认流程 执行偏差 0 项，更新 RAG 标签：首件、FAI、确认",
          "【改进】将案例 industry-smt-039 纳入 质量检验 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "首件 合格率",
              "≥96%",
              "质量检验 KPI"
          ],
          [
              "FAI 周期",
              "10 s/件",
              "节拍统计"
          ],
          [
              "首件检验与过 一次通过率",
              "≥88%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "质量检验 企业内控标准 Rev.2"
      ],
      "equipment": [
          "三坐标/CMM",
          "光学测量仪",
          "SPC 软件",
          "AQL 抽样表",
          "文档 industry-smt-039 专用数据采集点"
      ],
      "issues": [
          [
              "首件检验与过程确认流程 超差",
              "首件 参数漂移",
              "按 WI 调机并加严 首件 抽检至 AQL 0.65"
          ],
          [
              "质量检验 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "首件、FAI、确认 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 550"
          ]
      ],
      "checklist": [
          "SMT 首件检验与过程确认流程 适用版本已张贴",
          "首件/FAI/确认 仪器校准有效",
          "质量检验 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "首件",
              "质量检验领域核心度量"
          ],
          [
              "FAI",
              "首件检验与过程确认流程 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -039"
          ]
      ],
      "caseStudy": "【案例 industry-smt-039】SMT 电子制造产线在实施「SMT 首件检验与过程确认流程」后，首件 相关不良从 11.0% 降至 1.1%，AI 质量员 协同缩短处置时间 45 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 20%。",
      "agentHint": {
          "QUALITY": "负责 SMT 首件检验与过程确认流程 中第 1 阶段：数据分析（首件）"
      }
  },
  "SMT 车间 ESD 静电防护管理": {
      "overview": "《SMT 车间 ESD 静电防护管理》是 SMT 电子制造 领域 **合规管理** 的专项作业文件（编号 industry-smt-040）。全文围绕 ESD、静电、防护 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 车间 ESD 静电防护管理 相关工序与决策。",
      "background": "SMT 电子制造 客户在 ESD 环节常出现与 静电 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 车间 ESD 静电防护管理 在 合规管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "法规识别（针对车间 ESD 静电防护管理第1环节）",
          "审核准备（针对车间 ESD 静电防护管理第2环节）",
          "证书维护（针对车间 ESD 静电防护管理第3环节）",
          "内审整改（针对车间 ESD 静电防护管理第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 车间 ESD 静电防护管理」适用版本 Rev.1，确认与当前 SMT 产线工艺路线 industry-smt-040 一致",
          "【数据】从 MES/ERP 导出与 ESD、静电、防护 相关数据：订单 132 单、在制 32 批、库存周转 7 天",
          "【首件】按 SMT 电子制造 WI 完成 车间 ESD 静电防护管理 首件，实测 ESD=82%，记录于批次卡",
          "【监控】静电 控制图 UCL=88% / LCL=76%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0732，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 040-732 输出 合规管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 ESD 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 车间 ESD 静电防护管理 执行偏差 2 项，更新 RAG 标签：ESD、静电、防护",
          "【改进】将案例 industry-smt-040 纳入 合规管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "ESD 合格率",
              "≥96%",
              "合规管理 KPI"
          ],
          [
              "静电 周期",
              "42 s/件",
              "节拍统计"
          ],
          [
              "车间 ESD 一次通过率",
              "≥90%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "合规管理 企业内控标准 Rev.4"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-040 专用数据采集点"
      ],
      "issues": [
          [
              "车间 ESD 静电防护管理 超差",
              "ESD 参数漂移",
              "按 WI 调机并加严 ESD 抽检至 AQL 0.65"
          ],
          [
              "合规管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "ESD、静电、防护 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 732"
          ]
      ],
      "checklist": [
          "SMT 车间 ESD 静电防护管理 适用版本已张贴",
          "ESD/静电/防护 仪器校准有效",
          "合规管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "ESD",
              "合规管理领域核心度量"
          ],
          [
              "静电",
              "车间 ESD 静电防护管理 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -040"
          ]
      ],
      "caseStudy": "【案例 industry-smt-040】SMT 电子制造产线在实施「SMT 车间 ESD 静电防护管理」后，ESD 相关不良从 9.2% 降至 0.3%，AI 质量员 协同缩短处置时间 27 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。",
      "agentHint": {
          "QUALITY": "负责 SMT 车间 ESD 静电防护管理 中第 1 阶段：执行跟踪（ESD）"
      }
  },
  "高速贴片程序优化与贴装率提升": {
      "overview": "《高速贴片程序优化与贴装率提升》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-041）。全文围绕 贴装、程序、CT 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 高速贴片程序优化与贴装率提升 相关工序与决策。",
      "background": "SMT 电子制造 客户在 贴装 环节常出现与 程序 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 高速贴片程序优化与贴装率提升 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "过程控制（针对高速贴片程序优化与贴装率提升第1环节）",
          "数据记录（针对高速贴片程序优化与贴装率提升第2环节）",
          "异常升级（针对高速贴片程序优化与贴装率提升第3环节）",
          "持续改进（针对高速贴片程序优化与贴装率提升第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「高速贴片程序优化与贴装率提升」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-041 一致",
          "【数据】从 MES/ERP 导出与 贴装、程序、CT 相关数据：订单 130 单、在制 20 批、库存周转 5 天",
          "【首件】按 SMT 电子制造 WI 完成 高速贴片程序优化与贴装率提升 首件，实测 贴装=80%，记录于批次卡",
          "【监控】程序 控制图 UCL=94% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0030，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 041-30 输出 工艺标准 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 贴装 检测数据，写入追溯链",
          "【复盘】班后会评审 高速贴片程序优化与贴装率提升 执行偏差 0 项，更新 RAG 标签：贴装、程序、CT",
          "【改进】将案例 industry-smt-041 纳入 工艺标准 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "贴装 合格率",
              "≥94%",
              "工艺标准 KPI"
          ],
          [
              "程序 周期",
              "40 s/件",
              "节拍统计"
          ],
          [
              "高速贴片程序 一次通过率",
              "≥88%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "工艺标准 企业内控标准 Rev.4"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-041 专用数据采集点"
      ],
      "issues": [
          [
              "高速贴片程序优化与贴装率提升 超差",
              "贴装 参数漂移",
              "按 WI 调机并加严 贴装 抽检至 AQL 0.65"
          ],
          [
              "工艺标准 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "贴装、程序、CT 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 30"
          ]
      ],
      "checklist": [
          "高速贴片程序优化与贴装率提升 适用版本已张贴",
          "贴装/程序/CT 仪器校准有效",
          "工艺标准 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "贴装",
              "工艺标准领域核心度量"
          ],
          [
              "程序",
              "高速贴片程序优化与贴装率提升 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -041"
          ]
      ],
      "caseStudy": "【案例 industry-smt-041】SMT 电子制造产线在实施「高速贴片程序优化与贴装率提升」后，贴装 相关不良从 11.0% 降至 0.3%，AI 排程员与AI 数据员 协同缩短处置时间 45 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 25%。",
      "agentHint": {
          "SCHEDULER": "负责 高速贴片程序优化与贴装率提升 中第 1 阶段：方案生成（贴装）",
          "DATA_ANALYST": "负责 高速贴片程序优化与贴装率提升 中第 2 阶段：执行跟踪（程序）"
      }
  },
  "SMT 错料预防与料站复核机制": {
      "overview": "《SMT 错料预防与料站复核机制》是 SMT 电子制造 领域 **质量管理** 的专项作业文件（编号 industry-smt-042）。全文围绕 错料、料站、复核 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 错料预防与料站复核机制 相关工序与决策。",
      "background": "SMT 电子制造 客户在 错料 环节常出现与 料站 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 错料预防与料站复核机制 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "追溯体系（针对错料预防与料站复核机制第1环节）",
          "SPC（针对错料预防与料站复核机制第2环节）",
          "FMEA（针对错料预防与料站复核机制第3环节）",
          "8D 改善（针对错料预防与料站复核机制第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 错料预防与料站复核机制」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-042 一致",
          "【数据】从 MES/ERP 导出与 错料、料站、复核 相关数据：订单 134 单、在制 34 批、库存周转 9 天",
          "【首件】按 SMT 电子制造 WI 完成 错料预防与料站复核机制 首件，实测 错料=84%，记录于批次卡",
          "【监控】料站 控制图 UCL=90% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0734，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 042-734 输出 质量管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 错料 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 错料预防与料站复核机制 执行偏差 4 项，更新 RAG 标签：错料、料站、复核",
          "【改进】将案例 industry-smt-042 纳入 质量管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "错料 合格率",
              "≥98%",
              "质量管理 KPI"
          ],
          [
              "料站 周期",
              "44 s/件",
              "节拍统计"
          ],
          [
              "错料预防与料 一次通过率",
              "≥92%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "质量管理 企业内控标准 Rev.6"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-042 专用数据采集点"
      ],
      "issues": [
          [
              "错料预防与料站复核机制 超差",
              "错料 参数漂移",
              "按 WI 调机并加严 错料 抽检至 AQL 0.65"
          ],
          [
              "质量管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "错料、料站、复核 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 734"
          ]
      ],
      "checklist": [
          "SMT 错料预防与料站复核机制 适用版本已张贴",
          "错料/料站/复核 仪器校准有效",
          "质量管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "错料",
              "质量管理领域核心度量"
          ],
          [
              "料站",
              "错料预防与料站复核机制 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -042"
          ]
      ],
      "caseStudy": "【案例 industry-smt-042】SMT 电子制造产线在实施「SMT 错料预防与料站复核机制」后，错料 相关不良从 11.4% 降至 2.5%，AI 质量员与AI 调度员 协同缩短处置时间 29 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。",
      "agentHint": {
          "QUALITY": "负责 SMT 错料预防与料站复核机制 中第 1 阶段：规则校验（错料）",
          "DISPATCHER": "负责 SMT 错料预防与料站复核机制 中第 2 阶段：方案生成（料站）"
      }
  },
  "SMT 产线平衡与瓶颈工序识别": {
      "overview": "《SMT 产线平衡与瓶颈工序识别》是 SMT 电子制造 领域 **排程优化** 的专项作业文件（编号 industry-smt-043）。全文围绕 线平衡、瓶颈、节拍 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线平衡与瓶颈工序识别 相关工序与决策。",
      "background": "SMT 电子制造 客户在 线平衡 环节常出现与 瓶颈 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 产线平衡与瓶颈工序识别 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "产线排程（针对产线平衡与瓶颈工序识别第1环节）",
          "换线优化（针对产线平衡与瓶颈工序识别第2环节）",
          "插单规则（针对产线平衡与瓶颈工序识别第3环节）",
          "甘特发布（针对产线平衡与瓶颈工序识别第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 产线平衡与瓶颈工序识别」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-043 一致",
          "【数据】从 MES/ERP 导出与 线平衡、瓶颈、节拍 相关数据：订单 140 单、在制 40 批、库存周转 4 天",
          "【首件】按 SMT 电子制造 WI 完成 产线平衡与瓶颈工序识别 首件，实测 线平衡=140%，记录于批次卡",
          "【监控】瓶颈 控制图 UCL=90% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0890，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 043-890 输出 排程优化 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 线平衡 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 产线平衡与瓶颈工序识别 执行偏差 0 项，更新 RAG 标签：线平衡、瓶颈、节拍",
          "【改进】将案例 industry-smt-043 纳入 排程优化 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "线平衡 合格率",
              "≥93%",
              "排程优化 KPI"
          ],
          [
              "瓶颈 周期",
              "50 s/件",
              "节拍统计"
          ],
          [
              "产线平衡与瓶 一次通过率",
              "≥88%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "排程优化 企业内控标准 Rev.9"
      ],
      "equipment": [
          "甘特排程软件",
          "换线计时器",
          "MES 工单",
          "Andon 看板",
          "文档 industry-smt-043 专用数据采集点"
      ],
      "issues": [
          [
              "产线平衡与瓶颈工序识别 超差",
              "线平衡 参数漂移",
              "按 WI 调机并加严 线平衡 抽检至 AQL 0.65"
          ],
          [
              "排程优化 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "线平衡、瓶颈、节拍 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 890"
          ]
      ],
      "checklist": [
          "SMT 产线平衡与瓶颈工序识别 适用版本已张贴",
          "线平衡/瓶颈/节拍 仪器校准有效",
          "排程优化 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "线平衡",
              "排程优化领域核心度量"
          ],
          [
              "瓶颈",
              "产线平衡与瓶颈工序识别 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -043"
          ]
      ],
      "caseStudy": "【案例 industry-smt-043】SMT 电子制造产线在实施「SMT 产线平衡与瓶颈工序识别」后，线平衡 相关不良从 7.0% 降至 2.8%，AI 排程员与AI 计划员 协同缩短处置时间 25 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 35%。",
      "agentHint": {
          "SCHEDULER": "负责 SMT 产线平衡与瓶颈工序识别 中第 1 阶段：方案生成（线平衡）",
          "PLANNER": "负责 SMT 产线平衡与瓶颈工序识别 中第 2 阶段：执行跟踪（瓶颈）"
      }
  },
  "SMT 夜班排班与人员技能矩阵": {
      "overview": "《SMT 夜班排班与人员技能矩阵》是 SMT 电子制造 领域 **人员管理** 的专项作业文件（编号 industry-smt-044）。全文围绕 排班、技能、矩阵 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 夜班排班与人员技能矩阵 相关工序与决策。",
      "background": "SMT 电子制造 客户在 排班 环节常出现与 技能 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 夜班排班与人员技能矩阵 在 人员管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "技能矩阵（针对夜班排班与人员技能矩阵第1环节）",
          "排班规则（针对夜班排班与人员技能矩阵第2环节）",
          "培训记录（针对夜班排班与人员技能矩阵第3环节）",
          "上岗授权（针对夜班排班与人员技能矩阵第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 夜班排班与人员技能矩阵」适用版本 Rev.2，确认与当前 SMT 产线工艺路线 industry-smt-044 一致",
          "【数据】从 MES/ERP 导出与 排班、技能、矩阵 相关数据：订单 137 单、在制 27 批、库存周转 5 天",
          "【首件】按 SMT 电子制造 WI 完成 夜班排班与人员技能矩阵 首件，实测 排班=87%，记录于批次卡",
          "【监控】技能 控制图 UCL=89% / LCL=77%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0037，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 044-37 输出 人员管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 排班 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 夜班排班与人员技能矩阵 执行偏差 2 项，更新 RAG 标签：排班、技能、矩阵",
          "【改进】将案例 industry-smt-044 纳入 人员管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "排班 合格率",
              "≥94%",
              "人员管理 KPI"
          ],
          [
              "技能 周期",
              "47 s/件",
              "节拍统计"
          ],
          [
              "夜班排班与人 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "人员管理 企业内控标准 Rev.2"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-044 专用数据采集点"
      ],
      "issues": [
          [
              "夜班排班与人员技能矩阵 超差",
              "排班 参数漂移",
              "按 WI 调机并加严 排班 抽检至 AQL 0.65"
          ],
          [
              "人员管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "排班、技能、矩阵 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 37"
          ]
      ],
      "checklist": [
          "SMT 夜班排班与人员技能矩阵 适用版本已张贴",
          "排班/技能/矩阵 仪器校准有效",
          "人员管理 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "排班",
              "人员管理领域核心度量"
          ],
          [
              "技能",
              "夜班排班与人员技能矩阵 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -044"
          ]
      ],
      "caseStudy": "【案例 industry-smt-044】SMT 电子制造产线在实施「SMT 夜班排班与人员技能矩阵」后，排班 相关不良从 10.7% 降至 1.1%，AI 排程员与AI 调度员 协同缩短处置时间 52 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 32%。",
      "agentHint": {
          "SCHEDULER": "负责 SMT 夜班排班与人员技能矩阵 中第 1 阶段：规则校验（排班）",
          "DISPATCHER": "负责 SMT 夜班排班与人员技能矩阵 中第 2 阶段：方案生成（技能）"
      }
  },
  "贴片机 PM 保养计划与备件管理": {
      "overview": "《贴片机 PM 保养计划与备件管理》是 SMT 电子制造 领域 **设备管理** 的专项作业文件（编号 industry-smt-045）。全文围绕 PM、保养、备件 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 贴片机 PM 保养计划与备件管理 相关工序与决策。",
      "background": "SMT 电子制造 客户在 PM 环节常出现与 保养 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 贴片机 PM 保养计划与备件管理 在 设备管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "PM 计划（针对贴片机 PM 保养计划与备件管理第1环节）",
          "备件策略（针对贴片机 PM 保养计划与备件管理第2环节）",
          "OEE 统计（针对贴片机 PM 保养计划与备件管理第3环节）",
          "故障代码（针对贴片机 PM 保养计划与备件管理第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「贴片机 PM 保养计划与备件管理」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-045 一致",
          "【数据】从 MES/ERP 导出与 PM、保养、备件 相关数据：订单 126 单、在制 26 批、库存周转 9 天",
          "【首件】按 SMT 电子制造 WI 完成 贴片机 PM 保养计划与备件管理 首件，实测 PM=76%，记录于批次卡",
          "【监控】保养 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0426，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 045-426 输出 设备管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 PM 检测数据，写入追溯链",
          "【复盘】班后会评审 贴片机 PM 保养计划与备件管理 执行偏差 1 项，更新 RAG 标签：PM、保养、备件",
          "【改进】将案例 industry-smt-045 纳入 设备管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "PM 合格率",
              "≥98%",
              "设备管理 KPI"
          ],
          [
              "保养 周期",
              "36 s/件",
              "节拍统计"
          ],
          [
              "贴片机 PM 一次通过率",
              "≥94%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "设备管理 企业内控标准 Rev.4"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-045 专用数据采集点"
      ],
      "issues": [
          [
              "贴片机 PM 保养计划与备件管理 超差",
              "PM 参数漂移",
              "按 WI 调机并加严 PM 抽检至 AQL 0.65"
          ],
          [
              "设备管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "PM、保养、备件 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 426"
          ]
      ],
      "checklist": [
          "贴片机 PM 保养计划与备件管理 适用版本已张贴",
          "PM/保养/备件 仪器校准有效",
          "设备管理 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "PM",
              "设备管理领域核心度量"
          ],
          [
              "保养",
              "贴片机 PM 保养计划与备件管理 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -045"
          ]
      ],
      "caseStudy": "【案例 industry-smt-045】SMT 电子制造产线在实施「贴片机 PM 保养计划与备件管理」后，PM 相关不良从 7.6% 降至 0.3%，AI 排程员 协同缩短处置时间 41 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 21%。",
      "agentHint": {
          "SCHEDULER": "负责 贴片机 PM 保养计划与备件管理 中第 1 阶段：数据分析（PM）"
      }
  },
  "0201/01005 微元件贴装工艺指南": {
      "overview": "《0201/01005 微元件贴装工艺指南》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-046）。全文围绕 0201、微元件、贴装 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 0201/01005 微元件贴装工艺指南 相关工序与决策。",
      "background": "SMT 电子制造 客户在 0201 环节常出现与 微元件 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 0201/01005 微元件贴装工艺指南 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "过程控制（针对0201/01005 微元件贴装工艺指南第1环节）",
          "数据记录（针对0201/01005 微元件贴装工艺指南第2环节）",
          "异常升级（针对0201/01005 微元件贴装工艺指南第3环节）",
          "持续改进（针对0201/01005 微元件贴装工艺指南第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「0201/01005 微元件贴装工艺指南」适用版本 Rev.6，确认与当前 SMT 产线工艺路线 industry-smt-046 一致",
          "【数据】从 MES/ERP 导出与 0201、微元件、贴装 相关数据：订单 133 单、在制 43 批、库存周转 3 天",
          "【首件】按 SMT 电子制造 WI 完成 0201/01005 微元件贴装工艺指南 首件，实测 0201=83%，记录于批次卡",
          "【监控】微元件 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0833，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 046-833 输出 工艺标准 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 0201 检测数据，写入追溯链",
          "【复盘】班后会评审 0201/01005 微元件贴装工艺指南 执行偏差 3 项，更新 RAG 标签：0201、微元件、贴装",
          "【改进】将案例 industry-smt-046 纳入 工艺标准 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "0201 合格率",
              "≥92%",
              "工艺标准 KPI"
          ],
          [
              "微元件 周期",
              "43 s/件",
              "节拍统计"
          ],
          [
              "0201/0 一次通过率",
              "≥91%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "工艺标准 企业内控标准 Rev.6"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-046 专用数据采集点"
      ],
      "issues": [
          [
              "0201/01005 微元件贴装工艺指南 超差",
              "0201 参数漂移",
              "按 WI 调机并加严 0201 抽检至 AQL 0.65"
          ],
          [
              "工艺标准 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "0201、微元件、贴装 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 833"
          ]
      ],
      "checklist": [
          "0201/01005 微元件贴装工艺指南 适用版本已张贴",
          "0201/微元件/贴装 仪器校准有效",
          "工艺标准 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "0201",
              "工艺标准领域核心度量"
          ],
          [
              "微元件",
              "0201/01005 微元件贴装工艺指南 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -046"
          ]
      ],
      "caseStudy": "【案例 industry-smt-046】SMT 电子制造产线在实施「0201/01005 微元件贴装工艺指南」后，0201 相关不良从 6.3% 降至 2.5%，AI 排程员与AI 质量员 协同缩短处置时间 48 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 28%。",
      "agentHint": {
          "SCHEDULER": "负责 0201/01005 微元件贴装工艺指南 中第 1 阶段：规则校验（0201）",
          "QUALITY": "负责 0201/01005 微元件贴装工艺指南 中第 2 阶段：方案生成（微元件）"
      }
  },
  "BGA 返修与 X-Ray 检测规范": {
      "overview": "《BGA 返修与 X-Ray 检测规范》是 SMT 电子制造 领域 **维修工艺** 的专项作业文件（编号 industry-smt-047）。全文围绕 BGA、X-Ray、返修 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 BGA 返修与 X-Ray 检测规范 相关工序与决策。",
      "background": "SMT 电子制造 客户在 BGA 环节常出现与 X-Ray 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 BGA 返修与 X-Ray 检测规范 在 维修工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "返修授权（针对BGA 返修与 X-Ray 检测规范第1环节）",
          "BGA 曲线（针对BGA 返修与 X-Ray 检测规范第2环节）",
          "X-Ray 判定（针对BGA 返修与 X-Ray 检测规范第3环节）",
          "二次检验（针对BGA 返修与 X-Ray 检测规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「BGA 返修与 X-Ray 检测规范」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-047 一致",
          "【数据】从 MES/ERP 导出与 BGA、X-Ray、返修 相关数据：订单 146 单、在制 46 批、库存周转 8 天",
          "【首件】按 SMT 电子制造 WI 完成 BGA 返修与 X-Ray 检测规范 首件，实测 BGA=96%，记录于批次卡",
          "【监控】X-Ray 控制图 UCL=90% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0446，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 047-446 输出 维修工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 BGA 检测数据，写入追溯链",
          "【复盘】班后会评审 BGA 返修与 X-Ray 检测规范 执行偏差 1 项，更新 RAG 标签：BGA、X-Ray、返修",
          "【改进】将案例 industry-smt-047 纳入 维修工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "BGA 合格率",
              "≥97%",
              "维修工艺 KPI"
          ],
          [
              "X-Ray 周期",
              "56 s/件",
              "节拍统计"
          ],
          [
              "BGA 返修 一次通过率",
              "≥94%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "维修工艺 企业内控标准 Rev.6"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-047 专用数据采集点"
      ],
      "issues": [
          [
              "BGA 返修与 X-Ray 检测规范 超差",
              "BGA 参数漂移",
              "按 WI 调机并加严 BGA 抽检至 AQL 0.65"
          ],
          [
              "维修工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "BGA、X-Ray、返修 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 446"
          ]
      ],
      "checklist": [
          "BGA 返修与 X-Ray 检测规范 适用版本已张贴",
          "BGA/X-Ray/返修 仪器校准有效",
          "维修工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "BGA",
              "维修工艺领域核心度量"
          ],
          [
              "X-Ray",
              "BGA 返修与 X-Ray 检测规范 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -047"
          ]
      ],
      "caseStudy": "【案例 industry-smt-047】SMT 电子制造产线在实施「BGA 返修与 X-Ray 检测规范」后，BGA 相关不良从 11.6% 降至 2.5%，AI 质量员 协同缩短处置时间 21 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 41%。",
      "agentHint": {
          "QUALITY": "负责 BGA 返修与 X-Ray 检测规范 中第 1 阶段：方案生成（BGA）"
      }
  },
  "选择性焊接工艺参数手册": {
      "overview": "《选择性焊接工艺参数手册》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-048）。全文围绕 选焊、通孔、参数 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 选择性焊接工艺参数手册 相关工序与决策。",
      "background": "SMT 电子制造 客户在 选焊 环节常出现与 通孔 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 选择性焊接工艺参数手册 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "过程控制（针对选择性焊接工艺参数手册第1环节）",
          "数据记录（针对选择性焊接工艺参数手册第2环节）",
          "异常升级（针对选择性焊接工艺参数手册第3环节）",
          "持续改进（针对选择性焊接工艺参数手册第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「选择性焊接工艺参数手册」适用版本 Rev.4，确认与当前 SMT 产线工艺路线 industry-smt-048 一致",
          "【数据】从 MES/ERP 导出与 选焊、通孔、参数 相关数据：订单 103 单、在制 23 批、库存周转 6 天",
          "【首件】按 SMT 电子制造 WI 完成 选择性焊接工艺参数手册 首件，实测 选焊=53%，记录于批次卡",
          "【监控】通孔 控制图 UCL=91% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0003，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 048-3 输出 工艺标准 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 选焊 检测数据，写入追溯链",
          "【复盘】班后会评审 选择性焊接工艺参数手册 执行偏差 3 项，更新 RAG 标签：选焊、通孔、参数",
          "【改进】将案例 industry-smt-048 纳入 工艺标准 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "选焊 合格率",
              "≥95%",
              "工艺标准 KPI"
          ],
          [
              "通孔 周期",
              "13 s/件",
              "节拍统计"
          ],
          [
              "选择性焊接工 一次通过率",
              "≥91%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "工艺标准 企业内控标准 Rev.4"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-048 专用数据采集点"
      ],
      "issues": [
          [
              "选择性焊接工艺参数手册 超差",
              "选焊 参数漂移",
              "按 WI 调机并加严 选焊 抽检至 AQL 0.65"
          ],
          [
              "工艺标准 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "选焊、通孔、参数 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 3"
          ]
      ],
      "checklist": [
          "选择性焊接工艺参数手册 适用版本已张贴",
          "选焊/通孔/参数 仪器校准有效",
          "工艺标准 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "选焊",
              "工艺标准领域核心度量"
          ],
          [
              "通孔",
              "选择性焊接工艺参数手册 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -048"
          ]
      ],
      "caseStudy": "【案例 industry-smt-048】SMT 电子制造产线在实施「选择性焊接工艺参数手册」后，选焊 相关不良从 8.3% 降至 0.3%，AI 排程员与AI 质量员 协同缩短处置时间 18 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 23%。",
      "agentHint": {
          "SCHEDULER": "负责 选择性焊接工艺参数手册 中第 1 阶段：数据分析（选焊）",
          "QUALITY": "负责 选择性焊接工艺参数手册 中第 2 阶段：规则校验（通孔）"
      }
  },
  "三防涂覆工艺与 IPC 标准对照": {
      "overview": "《三防涂覆工艺与 IPC 标准对照》是 SMT 电子制造 领域 **工艺标准** 的专项作业文件（编号 industry-smt-049）。全文围绕 三防、涂覆、IPC 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 三防涂覆工艺与 IPC 标准对照 相关工序与决策。",
      "background": "SMT 电子制造 客户在 三防 环节常出现与 涂覆 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 三防涂覆工艺与 IPC 标准对照 在 工艺标准 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "过程控制（针对三防涂覆工艺与 IPC 标准对照第1环节）",
          "数据记录（针对三防涂覆工艺与 IPC 标准对照第2环节）",
          "异常升级（针对三防涂覆工艺与 IPC 标准对照第3环节）",
          "持续改进（针对三防涂覆工艺与 IPC 标准对照第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「三防涂覆工艺与 IPC 标准对照」适用版本 Rev.8，确认与当前 SMT 产线工艺路线 industry-smt-049 一致",
          "【数据】从 MES/ERP 导出与 三防、涂覆、IPC 相关数据：订单 109 单、在制 39 批、库存周转 9 天",
          "【首件】按 SMT 电子制造 WI 完成 三防涂覆工艺与 IPC 标准对照 首件，实测 三防=109%，记录于批次卡",
          "【监控】涂覆 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0559，QUALITY Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 049-559 输出 工艺标准 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 三防 检测数据，写入追溯链",
          "【复盘】班后会评审 三防涂覆工艺与 IPC 标准对照 执行偏差 4 项，更新 RAG 标签：三防、涂覆、IPC",
          "【改进】将案例 industry-smt-049 纳入 工艺标准 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "三防 合格率",
              "≥98%",
              "工艺标准 KPI"
          ],
          [
              "涂覆 周期",
              "19 s/件",
              "节拍统计"
          ],
          [
              "三防涂覆工艺 一次通过率",
              "≥97%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "工艺标准 企业内控标准 Rev.2"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-049 专用数据采集点"
      ],
      "issues": [
          [
              "三防涂覆工艺与 IPC 标准对照 超差",
              "三防 参数漂移",
              "按 WI 调机并加严 三防 抽检至 AQL 0.65"
          ],
          [
              "工艺标准 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "三防、涂覆、IPC 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 559"
          ]
      ],
      "checklist": [
          "三防涂覆工艺与 IPC 标准对照 适用版本已张贴",
          "三防/涂覆/IPC 仪器校准有效",
          "工艺标准 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "三防",
              "工艺标准领域核心度量"
          ],
          [
              "涂覆",
              "三防涂覆工艺与 IPC 标准对照 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -049"
          ]
      ],
      "caseStudy": "【案例 industry-smt-049】SMT 电子制造产线在实施「三防涂覆工艺与 IPC 标准对照」后，三防 相关不良从 12.9% 降至 1.1%，AI 质量员 协同缩短处置时间 54 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。",
      "agentHint": {
          "QUALITY": "负责 三防涂覆工艺与 IPC 标准对照 中第 1 阶段：数据分析（三防）"
      }
  },
  "ICT/FCT 测试治具设计与管理": {
      "overview": "《ICT/FCT 测试治具设计与管理》是 SMT 电子制造 领域 **测试工艺** 的专项作业文件（编号 industry-smt-050）。全文围绕 ICT、FCT、治具 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 ICT/FCT 测试治具设计与管理 相关工序与决策。",
      "background": "SMT 电子制造 客户在 ICT 环节常出现与 FCT 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 ICT/FCT 测试治具设计与管理 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "测试程序（针对ICT/FCT 测试治具设计与管理第1环节）",
          "限值设定（针对ICT/FCT 测试治具设计与管理第2环节）",
          "设备校准（针对ICT/FCT 测试治具设计与管理第3环节）",
          "数据归档（针对ICT/FCT 测试治具设计与管理第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「ICT/FCT 测试治具设计与管理」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-050 一致",
          "【数据】从 MES/ERP 导出与 ICT、FCT、治具 相关数据：订单 116 单、在制 26 批、库存周转 4 天",
          "【首件】按 SMT 电子制造 WI 完成 ICT/FCT 测试治具设计与管理 首件，实测 ICT=116%，记录于批次卡",
          "【监控】FCT 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0666，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 050-666 输出 测试工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 ICT 检测数据，写入追溯链",
          "【复盘】班后会评审 ICT/FCT 测试治具设计与管理 执行偏差 1 项，更新 RAG 标签：ICT、FCT、治具",
          "【改进】将案例 industry-smt-050 纳入 测试工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "ICT 合格率",
              "≥93%",
              "测试工艺 KPI"
          ],
          [
              "FCT 周期",
              "26 s/件",
              "节拍统计"
          ],
          [
              "ICT/FC 一次通过率",
              "≥94%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "测试工艺 企业内控标准 Rev.1"
      ],
      "equipment": [
          "EOL 台架",
          "FCT 治具",
          "数据采集仪",
          "校准证书库",
          "文档 industry-smt-050 专用数据采集点"
      ],
      "issues": [
          [
              "ICT/FCT 测试治具设计与管理 超差",
              "ICT 参数漂移",
              "按 WI 调机并加严 ICT 抽检至 AQL 0.65"
          ],
          [
              "测试工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "ICT、FCT、治具 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 666"
          ]
      ],
      "checklist": [
          "ICT/FCT 测试治具设计与管理 适用版本已张贴",
          "ICT/FCT/治具 仪器校准有效",
          "测试工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "ICT",
              "测试工艺领域核心度量"
          ],
          [
              "FCT",
              "ICT/FCT 测试治具设计与管理 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -050"
          ]
      ],
      "caseStudy": "【案例 industry-smt-050】SMT 电子制造产线在实施「ICT/FCT 测试治具设计与管理」后，ICT 相关不良从 7.6% 降至 0.0%，AI 质量员与AI 仿真员 协同缩短处置时间 41 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 36%。",
      "agentHint": {
          "QUALITY": "负责 ICT/FCT 测试治具设计与管理 中第 1 阶段：执行跟踪（ICT）",
          "SIMULATOR": "负责 ICT/FCT 测试治具设计与管理 中第 2 阶段：数据分析（FCT）"
      }
  },
  "SMT 良率分析与缺陷 Pareto 方法": {
      "overview": "《SMT 良率分析与缺陷 Pareto 方法》是 SMT 电子制造 领域 **数据分析** 的专项作业文件（编号 industry-smt-051）。全文围绕 良率、Pareto、缺陷 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 良率分析与缺陷 Pareto 方法 相关工序与决策。",
      "background": "SMT 电子制造 客户在 良率 环节常出现与 Pareto 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 良率分析与缺陷 Pareto 方法 在 数据分析 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "指标定义（针对良率分析与缺陷 Pareto 方法第1环节）",
          "报表自动化（针对良率分析与缺陷 Pareto 方法第2环节）",
          "异常预警（针对良率分析与缺陷 Pareto 方法第3环节）",
          "决策支持（针对良率分析与缺陷 Pareto 方法第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 良率分析与缺陷 Pareto 方法」适用版本 Rev.7，确认与当前 SMT 产线工艺路线 industry-smt-051 一致",
          "【数据】从 MES/ERP 导出与 良率、Pareto、缺陷 相关数据：订单 138 单、在制 38 批、库存周转 6 天",
          "【首件】按 SMT 电子制造 WI 完成 良率分析与缺陷 Pareto 方法 首件，实测 良率=88%，记录于批次卡",
          "【监控】Pareto 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0738，DATA_ANALYST Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 051-738 输出 数据分析 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 良率 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 良率分析与缺陷 Pareto 方法 执行偏差 3 项，更新 RAG 标签：良率、Pareto、缺陷",
          "【改进】将案例 industry-smt-051 纳入 数据分析 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "良率 合格率",
              "≥95%",
              "数据分析 KPI"
          ],
          [
              "Pareto 周期",
              "48 s/件",
              "节拍统计"
          ],
          [
              "良率分析与缺 一次通过率",
              "≥96%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "数据分析 企业内控标准 Rev.1"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-051 专用数据采集点"
      ],
      "issues": [
          [
              "良率分析与缺陷 Pareto 方法 超差",
              "良率 参数漂移",
              "按 WI 调机并加严 良率 抽检至 AQL 0.65"
          ],
          [
              "数据分析 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "良率、Pareto、缺陷 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 738"
          ]
      ],
      "checklist": [
          "SMT 良率分析与缺陷 Pareto 方法 适用版本已张贴",
          "良率/Pareto/缺陷 仪器校准有效",
          "数据分析 首件已签字",
          "Agent DATA_ANALYST 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "良率",
              "数据分析领域核心度量"
          ],
          [
              "Pareto",
              "良率分析与缺陷 Pareto 方法 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -051"
          ]
      ],
      "caseStudy": "【案例 industry-smt-051】SMT 电子制造产线在实施「SMT 良率分析与缺陷 Pareto 方法」后，良率 相关不良从 7.8% 降至 0.0%，AI 数据员与AI 质量员 协同缩短处置时间 33 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 33%。",
      "agentHint": {
          "DATA_ANALYST": "负责 SMT 良率分析与缺陷 Pareto 方法 中第 1 阶段：方案生成（良率）",
          "QUALITY": "负责 SMT 良率分析与缺陷 Pareto 方法 中第 2 阶段：执行跟踪（Pareto）"
      }
  },
  "智能料塔与 JIT 物料配送": {
      "overview": "《智能料塔与 JIT 物料配送》是 SMT 电子制造 领域 **物流仓储** 的专项作业文件（编号 industry-smt-052）。全文围绕 料塔、JIT、配送 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 智能料塔与 JIT 物料配送 相关工序与决策。",
      "background": "SMT 电子制造 客户在 料塔 环节常出现与 JIT 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 智能料塔与 JIT 物料配送 在 物流仓储 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "入库检验（针对智能料塔与 JIT 物料配送第1环节）",
          "拣配策略（针对智能料塔与 JIT 物料配送第2环节）",
          "AGV 调度（针对智能料塔与 JIT 物料配送第3环节）",
          "库存周转（针对智能料塔与 JIT 物料配送第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「智能料塔与 JIT 物料配送」适用版本 Rev.11，确认与当前 SMT 产线工艺路线 industry-smt-052 一致",
          "【数据】从 MES/ERP 导出与 料塔、JIT、配送 相关数据：订单 142 单、在制 42 批、库存周转 4 天",
          "【首件】按 SMT 电子制造 WI 完成 智能料塔与 JIT 物料配送 首件，实测 料塔=92%，记录于批次卡",
          "【监控】JIT 控制图 UCL=98% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0442，DISPATCHER Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 052-442 输出 物流仓储 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 料塔 检测数据，写入追溯链",
          "【复盘】班后会评审 智能料塔与 JIT 物料配送 执行偏差 2 项，更新 RAG 标签：料塔、JIT、配送",
          "【改进】将案例 industry-smt-052 纳入 物流仓储 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "料塔 合格率",
              "≥93%",
              "物流仓储 KPI"
          ],
          [
              "JIT 周期",
              "52 s/件",
              "节拍统计"
          ],
          [
              "智能料塔与  一次通过率",
              "≥90%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "物流仓储 企业内控标准 Rev.2"
      ],
      "equipment": [
          "印刷机",
          "SPI",
          "贴片机",
          "回流炉",
          "文档 industry-smt-052 专用数据采集点"
      ],
      "issues": [
          [
              "智能料塔与 JIT 物料配送 超差",
              "料塔 参数漂移",
              "按 WI 调机并加严 料塔 抽检至 AQL 0.65"
          ],
          [
              "物流仓储 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "料塔、JIT、配送 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 442"
          ]
      ],
      "checklist": [
          "智能料塔与 JIT 物料配送 适用版本已张贴",
          "料塔/JIT/配送 仪器校准有效",
          "物流仓储 首件已签字",
          "Agent DISPATCHER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "料塔",
              "物流仓储领域核心度量"
          ],
          [
              "JIT",
              "智能料塔与 JIT 物料配送 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -052"
          ]
      ],
      "caseStudy": "【案例 industry-smt-052】SMT 电子制造产线在实施「智能料塔与 JIT 物料配送」后，料塔 相关不良从 7.2% 降至 1.1%，AI 调度员与AI 计划员 协同缩短处置时间 17 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 37%。",
      "agentHint": {
          "DISPATCHER": "负责 智能料塔与 JIT 物料配送 中第 1 阶段：方案生成（料塔）",
          "PLANNER": "负责 智能料塔与 JIT 物料配送 中第 2 阶段：执行跟踪（JIT）"
      }
  },
  "SMT 工单优先级与紧急插单规则": {
      "overview": "《SMT 工单优先级与紧急插单规则》是 SMT 电子制造 领域 **排程优化** 的专项作业文件（编号 industry-smt-053）。全文围绕 插单、优先级、工单 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 工单优先级与紧急插单规则 相关工序与决策。",
      "background": "SMT 电子制造 客户在 插单 环节常出现与 优先级 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 工单优先级与紧急插单规则 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "产线排程（针对工单优先级与紧急插单规则第1环节）",
          "换线优化（针对工单优先级与紧急插单规则第2环节）",
          "插单规则（针对工单优先级与紧急插单规则第3环节）",
          "甘特发布（针对工单优先级与紧急插单规则第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 工单优先级与紧急插单规则」适用版本 Rev.3，确认与当前 SMT 产线工艺路线 industry-smt-053 一致",
          "【数据】从 MES/ERP 导出与 插单、优先级、工单 相关数据：订单 140 单、在制 40 批、库存周转 4 天",
          "【首件】按 SMT 电子制造 WI 完成 工单优先级与紧急插单规则 首件，实测 插单=140%，记录于批次卡",
          "【监控】优先级 控制图 UCL=90% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0890，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 053-890 输出 排程优化 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 插单 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 工单优先级与紧急插单规则 执行偏差 0 项，更新 RAG 标签：插单、优先级、工单",
          "【改进】将案例 industry-smt-053 纳入 排程优化 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "插单 合格率",
              "≥93%",
              "排程优化 KPI"
          ],
          [
              "优先级 周期",
              "50 s/件",
              "节拍统计"
          ],
          [
              "工单优先级与 一次通过率",
              "≥88%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "排程优化 企业内控标准 Rev.9"
      ],
      "equipment": [
          "甘特排程软件",
          "换线计时器",
          "MES 工单",
          "Andon 看板",
          "文档 industry-smt-053 专用数据采集点"
      ],
      "issues": [
          [
              "工单优先级与紧急插单规则 超差",
              "插单 参数漂移",
              "按 WI 调机并加严 插单 抽检至 AQL 0.65"
          ],
          [
              "排程优化 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "插单、优先级、工单 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 890"
          ]
      ],
      "checklist": [
          "SMT 工单优先级与紧急插单规则 适用版本已张贴",
          "插单/优先级/工单 仪器校准有效",
          "排程优化 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "插单",
              "排程优化领域核心度量"
          ],
          [
              "优先级",
              "工单优先级与紧急插单规则 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -053"
          ]
      ],
      "caseStudy": "【案例 industry-smt-053】SMT 电子制造产线在实施「SMT 工单优先级与紧急插单规则」后，插单 相关不良从 7.0% 降至 2.8%，AI 排程员与AI 调度员 协同缩短处置时间 25 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 35%。",
      "agentHint": {
          "SCHEDULER": "负责 SMT 工单优先级与紧急插单规则 中第 1 阶段：规则校验（插单）",
          "DISPATCHER": "负责 SMT 工单优先级与紧急插单规则 中第 2 阶段：方案生成（优先级）"
      }
  },
  "SMT 与 AI 排程员 Agent 协同指南": {
      "overview": "《SMT 与 AI 排程员 Agent 协同指南》是 SMT 电子制造 领域 **多智能体** 的专项作业文件（编号 industry-smt-054）。全文围绕 Agent、排程、协同 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 与 AI 排程员 Agent 协同指南 相关工序与决策。",
      "background": "SMT 电子制造 客户在 Agent 环节常出现与 排程 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 与 AI 排程员 Agent 协同指南 在 多智能体 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `SMT_MANUFACTURING` 对齐。",
      "scope": [
          "Agent 分工（针对与 AI 排程员 Agent 协同指南第1环节）",
          "任务分配（针对与 AI 排程员 Agent 协同指南第2环节）",
          "冲突消解（针对与 AI 排程员 Agent 协同指南第3环节）",
          "决策记录（针对与 AI 排程员 Agent 协同指南第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「SMT 与 AI 排程员 Agent 协同指南」适用版本 Rev.11，确认与当前 SMT 产线工艺路线 industry-smt-054 一致",
          "【数据】从 MES/ERP 导出与 Agent、排程、协同 相关数据：订单 128 单、在制 48 批、库存周转 4 天",
          "【首件】按 SMT 电子制造 WI 完成 与 AI 排程员 Agent 协同指南 首件，实测 Agent=128%，记录于批次卡",
          "【监控】排程 控制图 UCL=98% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-SMT-0778，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 054-778 输出 多智能体 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 Agent 检测数据，写入追溯链",
          "【复盘】班后会评审 SMT 与 AI 排程员 Agent 协同指南 执行偏差 3 项，更新 RAG 标签：Agent、排程、协同",
          "【改进】将案例 industry-smt-054 纳入 多智能体 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "Agent 合格率",
              "≥93%",
              "多智能体 KPI"
          ],
          [
              "排程 周期",
              "38 s/件",
              "节拍统计"
          ],
          [
              "与 AI 排 一次通过率",
              "≥96%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "IPC-A-610 电子组装验收",
          "IPC-J-STD-001 焊接",
          "GB/T 2828.1 抽样",
          "ESD S20.20",
          "多智能体 企业内控标准 Rev.5"
      ],
      "equipment": [
          "Contract Net 调度器",
          "Agent 注册中心",
          "任务黑板",
          "决策日志",
          "文档 industry-smt-054 专用数据采集点"
      ],
      "issues": [
          [
              "与 AI 排程员 Agent 协同指南 超差",
              "Agent 参数漂移",
              "按 WI 调机并加严 Agent 抽检至 AQL 0.65"
          ],
          [
              "多智能体 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "Agent、排程、协同 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 778"
          ]
      ],
      "checklist": [
          "SMT 与 AI 排程员 Agent 协同指南 适用版本已张贴",
          "Agent/排程/协同 仪器校准有效",
          "多智能体 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "Agent",
              "多智能体领域核心度量"
          ],
          [
              "排程",
              "与 AI 排程员 Agent 协同指南 标准作业程序"
          ],
          [
              "SMT-TERM",
              "SMT 电子制造 专用术语，见企业术语库 -054"
          ]
      ],
      "caseStudy": "【案例 industry-smt-054】SMT 电子制造产线在实施「SMT 与 AI 排程员 Agent 协同指南」后，Agent 相关不良从 7.8% 降至 1.4%，AI 排程员与AI 调度员与协同决策员 协同缩短处置时间 33 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 23%。",
      "agentHint": {
          "SCHEDULER": "负责 SMT 与 AI 排程员 Agent 协同指南 中第 1 阶段：数据分析（Agent）",
          "DISPATCHER": "负责 SMT 与 AI 排程员 Agent 协同指南 中第 2 阶段：规则校验（排程）",
          "DECISION": "负责 SMT 与 AI 排程员 Agent 协同指南 中第 3 阶段：方案生成（协同）"
      }
  },
  "动力电池模组组装工艺规范": {
      "overview": "《动力电池模组组装工艺规范》是 新能源汽车制造 领域 **制造工艺** 的专项作业文件（编号 industry-ev-055）。全文围绕 电池、模组、组装 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 动力电池模组组装工艺规范 相关工序与决策。",
      "background": "新能源汽车制造 客户在 电池 环节常出现与 模组 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 动力电池模组组装工艺规范 在 制造工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "工艺参数（针对动力电池模组组装工艺规范第1环节）",
          "过程确认（针对动力电池模组组装工艺规范第2环节）",
          "设备点检（针对动力电池模组组装工艺规范第3环节）",
          "首件验证（针对动力电池模组组装工艺规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「动力电池模组组装工艺规范」适用版本 Rev.11，确认与当前 EV 产线工艺路线 industry-ev-055 一致",
          "【数据】从 MES/ERP 导出与 电池、模组、组装 相关数据：订单 134 单、在制 24 批、库存周转 8 天",
          "【首件】按 新能源汽车制造 WI 完成 动力电池模组组装工艺规范 首件，实测 电池=84μm，记录于批次卡",
          "【监控】模组 控制图 UCL=98% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0334，PLANNER Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 055-334 输出 制造工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 电池 检测数据，写入追溯链",
          "【复盘】班后会评审 动力电池模组组装工艺规范 执行偏差 4 项，更新 RAG 标签：电池、模组、组装",
          "【改进】将案例 industry-ev-055 纳入 制造工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "电池 合格率",
              "≥97%",
              "制造工艺 KPI"
          ],
          [
              "模组 周期",
              "44 min",
              "节拍统计"
          ],
          [
              "动力电池模组 一次通过率",
              "≥92%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "制造工艺 企业内控标准 Rev.2"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-055 专用数据采集点"
      ],
      "issues": [
          [
              "动力电池模组组装工艺规范 超差",
              "电池 参数漂移",
              "按 WI 调机并加严 电池 抽检至 AQL 0.65"
          ],
          [
              "制造工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "电池、模组、组装 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 334"
          ]
      ],
      "checklist": [
          "动力电池模组组装工艺规范 适用版本已张贴",
          "电池/模组/组装 仪器校准有效",
          "制造工艺 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "电池",
              "制造工艺领域核心度量"
          ],
          [
              "模组",
              "动力电池模组组装工艺规范 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -055"
          ]
      ],
      "caseStudy": "【案例 industry-ev-055】新能源汽车制造产线在实施「动力电池模组组装工艺规范」后，电池 相关不良从 11.4% 降至 1.1%，AI 计划员与AI 质量员 协同缩短处置时间 29 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。",
      "agentHint": {
          "PLANNER": "负责 动力电池模组组装工艺规范 中第 1 阶段：规则校验（电池）",
          "QUALITY": "负责 动力电池模组组装工艺规范 中第 2 阶段：方案生成（模组）"
      }
  },
  "电芯分选、配组与一致性标准": {
      "overview": "《电芯分选、配组与一致性标准》是 新能源汽车制造 领域 **质量检验** 的专项作业文件（编号 industry-ev-056）。全文围绕 电芯、分选、配组 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 电芯分选、配组与一致性标准 相关工序与决策。",
      "background": "新能源汽车制造 客户在 电芯 环节常出现与 分选 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 电芯分选、配组与一致性标准 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "IQC/IPQC/OQC（针对电芯分选、配组与一致性标准第1环节）",
          "抽样方案（针对电芯分选、配组与一致性标准第2环节）",
          "判定准则（针对电芯分选、配组与一致性标准第3环节）",
          "NCR 闭环（针对电芯分选、配组与一致性标准第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「电芯分选、配组与一致性标准」适用版本 Rev.1，确认与当前 EV 产线工艺路线 industry-ev-056 一致",
          "【数据】从 MES/ERP 导出与 电芯、分选、配组 相关数据：订单 126 单、在制 26 批、库存周转 4 天",
          "【首件】按 新能源汽车制造 WI 完成 电芯分选、配组与一致性标准 首件，实测 电芯=126μm，记录于批次卡",
          "【监控】分选 控制图 UCL=88% / LCL=76%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0876，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 056-876 输出 质量检验 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 电芯 检测数据，写入追溯链",
          "【复盘】班后会评审 电芯分选、配组与一致性标准 执行偏差 1 项，更新 RAG 标签：电芯、分选、配组",
          "【改进】将案例 industry-ev-056 纳入 质量检验 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "电芯 合格率",
              "≥93%",
              "质量检验 KPI"
          ],
          [
              "分选 周期",
              "36 min",
              "节拍统计"
          ],
          [
              "电芯分选、配 一次通过率",
              "≥94%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "质量检验 企业内控标准 Rev.4"
      ],
      "equipment": [
          "三坐标/CMM",
          "光学测量仪",
          "SPC 软件",
          "AQL 抽样表",
          "文档 industry-ev-056 专用数据采集点"
      ],
      "issues": [
          [
              "电芯分选、配组与一致性标准 超差",
              "电芯 参数漂移",
              "按 WI 调机并加严 电芯 抽检至 AQL 0.65"
          ],
          [
              "质量检验 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "电芯、分选、配组 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 876"
          ]
      ],
      "checklist": [
          "电芯分选、配组与一致性标准 适用版本已张贴",
          "电芯/分选/配组 仪器校准有效",
          "质量检验 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "电芯",
              "质量检验领域核心度量"
          ],
          [
              "分选",
              "电芯分选、配组与一致性标准 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -056"
          ]
      ],
      "caseStudy": "【案例 industry-ev-056】新能源汽车制造产线在实施「电芯分选、配组与一致性标准」后，电芯 相关不良从 9.6% 降至 0.3%，AI 质量员与AI 数据员 协同缩短处置时间 51 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 21%。",
      "agentHint": {
          "QUALITY": "负责 电芯分选、配组与一致性标准 中第 1 阶段：规则校验（电芯）",
          "DATA_ANALYST": "负责 电芯分选、配组与一致性标准 中第 2 阶段：方案生成（分选）"
      }
  },
  "BMS 功能测试与安全策略验证": {
      "overview": "《BMS 功能测试与安全策略验证》是 新能源汽车制造 领域 **测试工艺** 的专项作业文件（编号 industry-ev-057）。全文围绕 BMS、安全、测试 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 BMS 功能测试与安全策略验证 相关工序与决策。",
      "background": "新能源汽车制造 客户在 BMS 环节常出现与 安全 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 BMS 功能测试与安全策略验证 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "测试程序（针对BMS 功能测试与安全策略验证第1环节）",
          "限值设定（针对BMS 功能测试与安全策略验证第2环节）",
          "设备校准（针对BMS 功能测试与安全策略验证第3环节）",
          "数据归档（针对BMS 功能测试与安全策略验证第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「BMS 功能测试与安全策略验证」适用版本 Rev.8，确认与当前 EV 产线工艺路线 industry-ev-057 一致",
          "【数据】从 MES/ERP 导出与 BMS、安全、测试 相关数据：订单 117 单、在制 27 批、库存周转 6 天",
          "【首件】按 新能源汽车制造 WI 完成 BMS 功能测试与安全策略验证 首件，实测 BMS=117μm，记录于批次卡",
          "【监控】安全 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0367，QUALITY Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 057-367 输出 测试工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 BMS 检测数据，写入追溯链",
          "【复盘】班后会评审 BMS 功能测试与安全策略验证 执行偏差 2 项，更新 RAG 标签：BMS、安全、测试",
          "【改进】将案例 industry-ev-057 纳入 测试工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "BMS 合格率",
              "≥95%",
              "测试工艺 KPI"
          ],
          [
              "安全 周期",
              "27 min",
              "节拍统计"
          ],
          [
              "BMS 功能 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "测试工艺 企业内控标准 Rev.8"
      ],
      "equipment": [
          "EOL 台架",
          "FCT 治具",
          "数据采集仪",
          "校准证书库",
          "文档 industry-ev-057 专用数据采集点"
      ],
      "issues": [
          [
              "BMS 功能测试与安全策略验证 超差",
              "BMS 参数漂移",
              "按 WI 调机并加严 BMS 抽检至 AQL 0.65"
          ],
          [
              "测试工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "BMS、安全、测试 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 367"
          ]
      ],
      "checklist": [
          "BMS 功能测试与安全策略验证 适用版本已张贴",
          "BMS/安全/测试 仪器校准有效",
          "测试工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "BMS",
              "测试工艺领域核心度量"
          ],
          [
              "安全",
              "BMS 功能测试与安全策略验证 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -057"
          ]
      ],
      "caseStudy": "【案例 industry-ev-057】新能源汽车制造产线在实施「BMS 功能测试与安全策略验证」后，BMS 相关不良从 12.7% 降至 1.7%，AI 质量员与AI 仿真员 协同缩短处置时间 22 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 37%。",
      "agentHint": {
          "QUALITY": "负责 BMS 功能测试与安全策略验证 中第 1 阶段：数据分析（BMS）",
          "SIMULATOR": "负责 BMS 功能测试与安全策略验证 中第 2 阶段：规则校验（安全）"
      }
  },
  "驱动电机总成装配与扭力管控": {
      "overview": "《驱动电机总成装配与扭力管控》是 新能源汽车制造 领域 **装配工艺** 的专项作业文件（编号 industry-ev-058）。全文围绕 电机、扭力、总成 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 驱动电机总成装配与扭力管控 相关工序与决策。",
      "background": "新能源汽车制造 客户在 电机 环节常出现与 扭力 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 驱动电机总成装配与扭力管控 在 装配工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "工位节拍（针对驱动电机总成装配与扭力管控第1环节）",
          "扭力管控（针对驱动电机总成装配与扭力管控第2环节）",
          "防错装（针对驱动电机总成装配与扭力管控第3环节）",
          "终检放行（针对驱动电机总成装配与扭力管控第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「驱动电机总成装配与扭力管控」适用版本 Rev.12，确认与当前 EV 产线工艺路线 industry-ev-058 一致",
          "【数据】从 MES/ERP 导出与 电机、扭力、总成 相关数据：订单 125 单、在制 25 批、库存周转 5 天",
          "【首件】按 新能源汽车制造 WI 完成 驱动电机总成装配与扭力管控 首件，实测 电机=125μm，记录于批次卡",
          "【监控】扭力 控制图 UCL=99% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0275，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 058-275 输出 装配工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 电机 检测数据，写入追溯链",
          "【复盘】班后会评审 驱动电机总成装配与扭力管控 执行偏差 0 项，更新 RAG 标签：电机、扭力、总成",
          "【改进】将案例 industry-ev-058 纳入 装配工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "电机 合格率",
              "≥94%",
              "装配工艺 KPI"
          ],
          [
              "扭力 周期",
              "35 min",
              "节拍统计"
          ],
          [
              "驱动电机总成 一次通过率",
              "≥93%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "装配工艺 企业内控标准 Rev.6"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-058 专用数据采集点"
      ],
      "issues": [
          [
              "驱动电机总成装配与扭力管控 超差",
              "电机 参数漂移",
              "按 WI 调机并加严 电机 抽检至 AQL 0.65"
          ],
          [
              "装配工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "电机、扭力、总成 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 275"
          ]
      ],
      "checklist": [
          "驱动电机总成装配与扭力管控 适用版本已张贴",
          "电机/扭力/总成 仪器校准有效",
          "装配工艺 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "电机",
              "装配工艺领域核心度量"
          ],
          [
              "扭力",
              "驱动电机总成装配与扭力管控 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -058"
          ]
      ],
      "caseStudy": "【案例 industry-ev-058】新能源汽车制造产线在实施「驱动电机总成装配与扭力管控」后，电机 相关不良从 8.5% 降至 2.5%，AI 排程员与AI 质量员 协同缩短处置时间 50 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 20%。",
      "agentHint": {
          "SCHEDULER": "负责 驱动电机总成装配与扭力管控 中第 1 阶段：执行跟踪（电机）",
          "QUALITY": "负责 驱动电机总成装配与扭力管控 中第 2 阶段：数据分析（扭力）"
      }
  },
  "整车 VIN 追溯与关键件绑定规范": {
      "overview": "《整车 VIN 追溯与关键件绑定规范》是 新能源汽车制造 领域 **质量管理** 的专项作业文件（编号 industry-ev-059）。全文围绕 VIN、追溯、绑定 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 VIN 追溯与关键件绑定规范 相关工序与决策。",
      "background": "新能源汽车制造 客户在 VIN 环节常出现与 追溯 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 VIN 追溯与关键件绑定规范 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "追溯体系（针对VIN 追溯与关键件绑定规范第1环节）",
          "SPC（针对VIN 追溯与关键件绑定规范第2环节）",
          "FMEA（针对VIN 追溯与关键件绑定规范第3环节）",
          "8D 改善（针对VIN 追溯与关键件绑定规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「整车 VIN 追溯与关键件绑定规范」适用版本 Rev.6，确认与当前 EV 产线工艺路线 industry-ev-059 一致",
          "【数据】从 MES/ERP 导出与 VIN、追溯、绑定 相关数据：订单 135 单、在制 25 批、库存周转 6 天",
          "【首件】按 新能源汽车制造 WI 完成 VIN 追溯与关键件绑定规范 首件，实测 VIN=135μm，记录于批次卡",
          "【监控】追溯 控制图 UCL=93% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0185，QUALITY Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 059-185 输出 质量管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 VIN 检测数据，写入追溯链",
          "【复盘】班后会评审 整车 VIN 追溯与关键件绑定规范 执行偏差 0 项，更新 RAG 标签：VIN、追溯、绑定",
          "【改进】将案例 industry-ev-059 纳入 质量管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "VIN 合格率",
              "≥95%",
              "质量管理 KPI"
          ],
          [
              "追溯 周期",
              "45 min",
              "节拍统计"
          ],
          [
              "VIN 追溯 一次通过率",
              "≥93%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "质量管理 企业内控标准 Rev.6"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-059 专用数据采集点"
      ],
      "issues": [
          [
              "VIN 追溯与关键件绑定规范 超差",
              "VIN 参数漂移",
              "按 WI 调机并加严 VIN 抽检至 AQL 0.65"
          ],
          [
              "质量管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "VIN、追溯、绑定 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 185"
          ]
      ],
      "checklist": [
          "整车 VIN 追溯与关键件绑定规范 适用版本已张贴",
          "VIN/追溯/绑定 仪器校准有效",
          "质量管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "VIN",
              "质量管理领域核心度量"
          ],
          [
              "追溯",
              "VIN 追溯与关键件绑定规范 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -059"
          ]
      ],
      "caseStudy": "【案例 industry-ev-059】新能源汽车制造产线在实施「整车 VIN 追溯与关键件绑定规范」后，VIN 相关不良从 6.5% 降至 2.5%，AI 质量员与AI 数据员 协同缩短处置时间 40 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 30%。",
      "agentHint": {
          "QUALITY": "负责 整车 VIN 追溯与关键件绑定规范 中第 1 阶段：执行跟踪（VIN）",
          "DATA_ANALYST": "负责 整车 VIN 追溯与关键件绑定规范 中第 2 阶段：数据分析（追溯）"
      }
  },
  "总装线 Andon 异常响应机制": {
      "overview": "《总装线 Andon 异常响应机制》是 新能源汽车制造 领域 **生产管理** 的专项作业文件（编号 industry-ev-060）。全文围绕 Andon、停线、响应 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 线 Andon 异常响应机制 相关工序与决策。",
      "background": "新能源汽车制造 客户在 Andon 环节常出现与 停线 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 线 Andon 异常响应机制 在 生产管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "过程控制（针对线 Andon 异常响应机制第1环节）",
          "数据记录（针对线 Andon 异常响应机制第2环节）",
          "异常升级（针对线 Andon 异常响应机制第3环节）",
          "持续改进（针对线 Andon 异常响应机制第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「总装线 Andon 异常响应机制」适用版本 Rev.5，确认与当前 EV 产线工艺路线 industry-ev-060 一致",
          "【数据】从 MES/ERP 导出与 Andon、停线、响应 相关数据：订单 144 单、在制 24 批、库存周转 8 天",
          "【首件】按 新能源汽车制造 WI 完成 线 Andon 异常响应机制 首件，实测 Andon=94μm，记录于批次卡",
          "【监控】停线 控制图 UCL=92% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0544，DISPATCHER Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 060-544 输出 生产管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 Andon 检测数据，写入追溯链",
          "【复盘】班后会评审 总装线 Andon 异常响应机制 执行偏差 4 项，更新 RAG 标签：Andon、停线、响应",
          "【改进】将案例 industry-ev-060 纳入 生产管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "Andon 合格率",
              "≥97%",
              "生产管理 KPI"
          ],
          [
              "停线 周期",
              "54 min",
              "节拍统计"
          ],
          [
              "线 Ando 一次通过率",
              "≥92%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "生产管理 企业内控标准 Rev.5"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-060 专用数据采集点"
      ],
      "issues": [
          [
              "线 Andon 异常响应机制 超差",
              "Andon 参数漂移",
              "按 WI 调机并加严 Andon 抽检至 AQL 0.65"
          ],
          [
              "生产管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "Andon、停线、响应 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 544"
          ]
      ],
      "checklist": [
          "总装线 Andon 异常响应机制 适用版本已张贴",
          "Andon/停线/响应 仪器校准有效",
          "生产管理 首件已签字",
          "Agent DISPATCHER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "Andon",
              "生产管理领域核心度量"
          ],
          [
              "停线",
              "线 Andon 异常响应机制 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -060"
          ]
      ],
      "caseStudy": "【案例 industry-ev-060】新能源汽车制造产线在实施「总装线 Andon 异常响应机制」后，Andon 相关不良从 5.4% 降至 1.4%，AI 调度员与AI 排程员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 39%。",
      "agentHint": {
          "DISPATCHER": "负责 总装线 Andon 异常响应机制 中第 1 阶段：规则校验（Andon）",
          "SCHEDULER": "负责 总装线 Andon 异常响应机制 中第 2 阶段：方案生成（停线）"
      }
  },
  "冲压件尺寸检测与 SPC 控制": {
      "overview": "《冲压件尺寸检测与 SPC 控制》是 新能源汽车制造 领域 **质量检验** 的专项作业文件（编号 industry-ev-061）。全文围绕 冲压、SPC、尺寸 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 冲压件尺寸检测与 SPC 控制 相关工序与决策。",
      "background": "新能源汽车制造 客户在 冲压 环节常出现与 SPC 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 冲压件尺寸检测与 SPC 控制 在 质量检验 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "IQC/IPQC/OQC（针对冲压件尺寸检测与 SPC 控制第1环节）",
          "抽样方案（针对冲压件尺寸检测与 SPC 控制第2环节）",
          "判定准则（针对冲压件尺寸检测与 SPC 控制第3环节）",
          "NCR 闭环（针对冲压件尺寸检测与 SPC 控制第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「冲压件尺寸检测与 SPC 控制」适用版本 Rev.6，确认与当前 EV 产线工艺路线 industry-ev-061 一致",
          "【数据】从 MES/ERP 导出与 冲压、SPC、尺寸 相关数据：订单 147 单、在制 37 批、库存周转 9 天",
          "【首件】按 新能源汽车制造 WI 完成 冲压件尺寸检测与 SPC 控制 首件，实测 冲压=147μm，记录于批次卡",
          "【监控】SPC 控制图 UCL=93% / LCL=77%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0797，QUALITY Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 061-797 输出 质量检验 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 冲压 检测数据，写入追溯链",
          "【复盘】班后会评审 冲压件尺寸检测与 SPC 控制 执行偏差 2 项，更新 RAG 标签：冲压、SPC、尺寸",
          "【改进】将案例 industry-ev-061 纳入 质量检验 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "冲压 合格率",
              "≥98%",
              "质量检验 KPI"
          ],
          [
              "SPC 周期",
              "57 min",
              "节拍统计"
          ],
          [
              "冲压件尺寸检 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "质量检验 企业内控标准 Rev.6"
      ],
      "equipment": [
          "三坐标/CMM",
          "光学测量仪",
          "SPC 软件",
          "AQL 抽样表",
          "文档 industry-ev-061 专用数据采集点"
      ],
      "issues": [
          [
              "冲压件尺寸检测与 SPC 控制 超差",
              "冲压 参数漂移",
              "按 WI 调机并加严 冲压 抽检至 AQL 0.65"
          ],
          [
              "质量检验 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "冲压、SPC、尺寸 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 797"
          ]
      ],
      "checklist": [
          "冲压件尺寸检测与 SPC 控制 适用版本已张贴",
          "冲压/SPC/尺寸 仪器校准有效",
          "质量检验 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "冲压",
              "质量检验领域核心度量"
          ],
          [
              "SPC",
              "冲压件尺寸检测与 SPC 控制 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -061"
          ]
      ],
      "caseStudy": "【案例 industry-ev-061】新能源汽车制造产线在实施「冲压件尺寸检测与 SPC 控制」后，冲压 相关不良从 10.7% 降至 2.5%，AI 质量员与AI 数据员 协同缩短处置时间 52 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 42%。",
      "agentHint": {
          "QUALITY": "负责 冲压件尺寸检测与 SPC 控制 中第 1 阶段：规则校验（冲压）",
          "DATA_ANALYST": "负责 冲压件尺寸检测与 SPC 控制 中第 2 阶段：方案生成（SPC）"
      }
  },
  "车身焊接机器人参数与焊缝质量": {
      "overview": "《车身焊接机器人参数与焊缝质量》是 新能源汽车制造 领域 **制造工艺** 的专项作业文件（编号 industry-ev-062）。全文围绕 焊接、机器人、焊缝 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 车身焊接机器人参数与焊缝质量 相关工序与决策。",
      "background": "新能源汽车制造 客户在 焊接 环节常出现与 机器人 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 车身焊接机器人参数与焊缝质量 在 制造工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "工艺参数（针对车身焊接机器人参数与焊缝质量第1环节）",
          "过程确认（针对车身焊接机器人参数与焊缝质量第2环节）",
          "设备点检（针对车身焊接机器人参数与焊缝质量第3环节）",
          "首件验证（针对车身焊接机器人参数与焊缝质量第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「车身焊接机器人参数与焊缝质量」适用版本 Rev.7，确认与当前 EV 产线工艺路线 industry-ev-062 一致",
          "【数据】从 MES/ERP 导出与 焊接、机器人、焊缝 相关数据：订单 118 单、在制 38 批、库存周转 5 天",
          "【首件】按 新能源汽车制造 WI 完成 车身焊接机器人参数与焊缝质量 首件，实测 焊接=68μm，记录于批次卡",
          "【监控】机器人 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0618，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 062-618 输出 制造工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 焊接 检测数据，写入追溯链",
          "【复盘】班后会评审 车身焊接机器人参数与焊缝质量 执行偏差 3 项，更新 RAG 标签：焊接、机器人、焊缝",
          "【改进】将案例 industry-ev-062 纳入 制造工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "焊接 合格率",
              "≥94%",
              "制造工艺 KPI"
          ],
          [
              "机器人 周期",
              "28 min",
              "节拍统计"
          ],
          [
              "车身焊接机器 一次通过率",
              "≥96%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "制造工艺 企业内控标准 Rev.7"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-062 专用数据采集点"
      ],
      "issues": [
          [
              "车身焊接机器人参数与焊缝质量 超差",
              "焊接 参数漂移",
              "按 WI 调机并加严 焊接 抽检至 AQL 0.65"
          ],
          [
              "制造工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "焊接、机器人、焊缝 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 618"
          ]
      ],
      "checklist": [
          "车身焊接机器人参数与焊缝质量 适用版本已张贴",
          "焊接/机器人/焊缝 仪器校准有效",
          "制造工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "焊接",
              "制造工艺领域核心度量"
          ],
          [
              "机器人",
              "车身焊接机器人参数与焊缝质量 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -062"
          ]
      ],
      "caseStudy": "【案例 industry-ev-062】新能源汽车制造产线在实施「车身焊接机器人参数与焊缝质量」后，焊接 相关不良从 7.8% 降至 0.6%，AI 质量员与AI 仿真员 协同缩短处置时间 33 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 38%。",
      "agentHint": {
          "QUALITY": "负责 车身焊接机器人参数与焊缝质量 中第 1 阶段：执行跟踪（焊接）",
          "SIMULATOR": "负责 车身焊接机器人参数与焊缝质量 中第 2 阶段：数据分析（机器人）"
      }
  },
  "涂装车间 VOC 排放与膜厚控制": {
      "overview": "《涂装车间 VOC 排放与膜厚控制》是 新能源汽车制造 领域 **环保工艺** 的专项作业文件（编号 industry-ev-063）。全文围绕 涂装、VOC、膜厚 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 涂装车间 VOC 排放与膜厚控制 相关工序与决策。",
      "background": "新能源汽车制造 客户在 涂装 环节常出现与 VOC 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 涂装车间 VOC 排放与膜厚控制 在 环保工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "排放监测（针对涂装车间 VOC 排放与膜厚控制第1环节）",
          "危废管理（针对涂装车间 VOC 排放与膜厚控制第2环节）",
          "膜厚/成分（针对涂装车间 VOC 排放与膜厚控制第3环节）",
          "第三方检测（针对涂装车间 VOC 排放与膜厚控制第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「涂装车间 VOC 排放与膜厚控制」适用版本 Rev.9，确认与当前 EV 产线工艺路线 industry-ev-063 一致",
          "【数据】从 MES/ERP 导出与 涂装、VOC、膜厚 相关数据：订单 114 单、在制 34 批、库存周转 5 天",
          "【首件】按 新能源汽车制造 WI 完成 涂装车间 VOC 排放与膜厚控制 首件，实测 涂装=114μm，记录于批次卡",
          "【监控】VOC 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0464，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 063-464 输出 环保工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 涂装 检测数据，写入追溯链",
          "【复盘】班后会评审 涂装车间 VOC 排放与膜厚控制 执行偏差 4 项，更新 RAG 标签：涂装、VOC、膜厚",
          "【改进】将案例 industry-ev-063 纳入 环保工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "涂装 合格率",
              "≥94%",
              "环保工艺 KPI"
          ],
          [
              "VOC 周期",
              "24 min",
              "节拍统计"
          ],
          [
              "涂装车间 V 一次通过率",
              "≥92%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "环保工艺 企业内控标准 Rev.6"
      ],
      "equipment": [
          "静电喷涂机器人",
          "VOC 在线监测仪",
          "膜厚仪",
          "焚烧/RTO 装置",
          "文档 industry-ev-063 专用数据采集点"
      ],
      "issues": [
          [
              "涂装车间 VOC 排放与膜厚控制 超差",
              "涂装 参数漂移",
              "按 WI 调机并加严 涂装 抽检至 AQL 0.65"
          ],
          [
              "环保工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "涂装、VOC、膜厚 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 464"
          ]
      ],
      "checklist": [
          "涂装车间 VOC 排放与膜厚控制 适用版本已张贴",
          "涂装/VOC/膜厚 仪器校准有效",
          "环保工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "涂装",
              "环保工艺领域核心度量"
          ],
          [
              "VOC",
              "涂装车间 VOC 排放与膜厚控制 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -063"
          ]
      ],
      "caseStudy": "【案例 industry-ev-063】新能源汽车制造产线在实施「涂装车间 VOC 排放与膜厚控制」后，涂装 相关不良从 5.4% 降至 2.5%，AI 质量员与AI 数据员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 34%。",
      "agentHint": {
          "QUALITY": "负责 涂装车间 VOC 排放与膜厚控制 中第 1 阶段：方案生成（涂装）",
          "DATA_ANALYST": "负责 涂装车间 VOC 排放与膜厚控制 中第 2 阶段：执行跟踪（VOC）"
      }
  },
  "Tier1/Tier2 供应链协同计划": {
      "overview": "《Tier1/Tier2 供应链协同计划》是 新能源汽车制造 领域 **供应链** 的专项作业文件（编号 industry-ev-064）。全文围绕 供应链、Tier、协同 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 Tier1/Tier2 供应链协同计划 相关工序与决策。",
      "background": "新能源汽车制造 客户在 供应链 环节常出现与 Tier 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 Tier1/Tier2 供应链协同计划 在 供应链 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "要货计划（针对Tier1/Tier2 供应链协同计划第1环节）",
          "供应商绩效（针对Tier1/Tier2 供应链协同计划第2环节）",
          "风险物料（针对Tier1/Tier2 供应链协同计划第3环节）",
          "VMI 协同（针对Tier1/Tier2 供应链协同计划第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「Tier1/Tier2 供应链协同计划」适用版本 Rev.12，确认与当前 EV 产线工艺路线 industry-ev-064 一致",
          "【数据】从 MES/ERP 导出与 供应链、Tier、协同 相关数据：订单 147 单、在制 37 批、库存周转 6 天",
          "【首件】按 新能源汽车制造 WI 完成 Tier1/Tier2 供应链协同计划 首件，实测 供应链=97μm，记录于批次卡",
          "【监控】Tier 控制图 UCL=99% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0647，PLANNER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 064-647 输出 供应链 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 供应链 检测数据，写入追溯链",
          "【复盘】班后会评审 Tier1/Tier2 供应链协同计划 执行偏差 2 项，更新 RAG 标签：供应链、Tier、协同",
          "【改进】将案例 industry-ev-064 纳入 供应链 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "供应链 合格率",
              "≥95%",
              "供应链 KPI"
          ],
          [
              "Tier 周期",
              "57 min",
              "节拍统计"
          ],
          [
              "Tier1/ 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "供应链 企业内控标准 Rev.9"
      ],
      "equipment": [
          "SRM 供应商门户",
          "要货看板",
          "VMI 库存接口",
          "风险物料清单",
          "文档 industry-ev-064 专用数据采集点"
      ],
      "issues": [
          [
              "Tier1/Tier2 供应链协同计划 超差",
              "供应链 参数漂移",
              "按 WI 调机并加严 供应链 抽检至 AQL 0.65"
          ],
          [
              "供应链 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "供应链、Tier、协同 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 647"
          ]
      ],
      "checklist": [
          "Tier1/Tier2 供应链协同计划 适用版本已张贴",
          "供应链/Tier/协同 仪器校准有效",
          "供应链 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "供应链",
              "供应链领域核心度量"
          ],
          [
              "Tier",
              "Tier1/Tier2 供应链协同计划 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -064"
          ]
      ],
      "caseStudy": "【案例 industry-ev-064】新能源汽车制造产线在实施「Tier1/Tier2 供应链协同计划」后，供应链 相关不良从 12.7% 降至 2.8%，AI 计划员与AI 调度员 协同缩短处置时间 22 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 42%。",
      "agentHint": {
          "PLANNER": "负责 Tier1/Tier2 供应链协同计划 中第 1 阶段：方案生成（供应链）",
          "DISPATCHER": "负责 Tier1/Tier2 供应链协同计划 中第 2 阶段：执行跟踪（Tier）"
      }
  },
  "二级供应商审核与准入标准": {
      "overview": "《二级供应商审核与准入标准》是 新能源汽车制造 领域 **供应链** 的专项作业文件（编号 industry-ev-065）。全文围绕 供应商、审核、准入 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 二级供应商审核与准入标准 相关工序与决策。",
      "background": "新能源汽车制造 客户在 供应商 环节常出现与 审核 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 二级供应商审核与准入标准 在 供应链 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "要货计划（针对二级供应商审核与准入标准第1环节）",
          "供应商绩效（针对二级供应商审核与准入标准第2环节）",
          "风险物料（针对二级供应商审核与准入标准第3环节）",
          "VMI 协同（针对二级供应商审核与准入标准第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「二级供应商审核与准入标准」适用版本 Rev.7，确认与当前 EV 产线工艺路线 industry-ev-065 一致",
          "【数据】从 MES/ERP 导出与 供应商、审核、准入 相关数据：订单 120 单、在制 20 批、库存周转 6 天",
          "【首件】按 新能源汽车制造 WI 完成 二级供应商审核与准入标准 首件，实测 供应商=120μm，记录于批次卡",
          "【监控】审核 控制图 UCL=94% / LCL=74%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0570，QUALITY Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 065-570 输出 供应链 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 供应商 检测数据，写入追溯链",
          "【复盘】班后会评审 二级供应商审核与准入标准 执行偏差 0 项，更新 RAG 标签：供应商、审核、准入",
          "【改进】将案例 industry-ev-065 纳入 供应链 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "供应商 合格率",
              "≥95%",
              "供应链 KPI"
          ],
          [
              "审核 周期",
              "30 min",
              "节拍统计"
          ],
          [
              "二级供应商审 一次通过率",
              "≥88%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "供应链 企业内控标准 Rev.4"
      ],
      "equipment": [
          "SRM 供应商门户",
          "要货看板",
          "VMI 库存接口",
          "风险物料清单",
          "文档 industry-ev-065 专用数据采集点"
      ],
      "issues": [
          [
              "二级供应商审核与准入标准 超差",
              "供应商 参数漂移",
              "按 WI 调机并加严 供应商 抽检至 AQL 0.65"
          ],
          [
              "供应链 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "供应商、审核、准入 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 570"
          ]
      ],
      "checklist": [
          "二级供应商审核与准入标准 适用版本已张贴",
          "供应商/审核/准入 仪器校准有效",
          "供应链 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "供应商",
              "供应链领域核心度量"
          ],
          [
              "审核",
              "二级供应商审核与准入标准 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -065"
          ]
      ],
      "caseStudy": "【案例 industry-ev-065】新能源汽车制造产线在实施「二级供应商审核与准入标准」后，供应商 相关不良从 7.0% 降至 0.3%，AI 质量员与协同决策员 协同缩短处置时间 25 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 40%。",
      "agentHint": {
          "QUALITY": "负责 二级供应商审核与准入标准 中第 1 阶段：执行跟踪（供应商）",
          "DECISION": "负责 二级供应商审核与准入标准 中第 2 阶段：数据分析（审核）"
      }
  },
  "热管理系统装配与泄漏测试": {
      "overview": "《热管理系统装配与泄漏测试》是 新能源汽车制造 领域 **装配工艺** 的专项作业文件（编号 industry-ev-066）。全文围绕 热管理、泄漏、测试 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 热管理系统装配与泄漏测试 相关工序与决策。",
      "background": "新能源汽车制造 客户在 热管理 环节常出现与 泄漏 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 热管理系统装配与泄漏测试 在 装配工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "工位节拍（针对热管理系统装配与泄漏测试第1环节）",
          "扭力管控（针对热管理系统装配与泄漏测试第2环节）",
          "防错装（针对热管理系统装配与泄漏测试第3环节）",
          "终检放行（针对热管理系统装配与泄漏测试第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「热管理系统装配与泄漏测试」适用版本 Rev.4，确认与当前 EV 产线工艺路线 industry-ev-066 一致",
          "【数据】从 MES/ERP 导出与 热管理、泄漏、测试 相关数据：订单 131 单、在制 41 批、库存周转 3 天",
          "【首件】按 新能源汽车制造 WI 完成 热管理系统装配与泄漏测试 首件，实测 热管理=81μm，记录于批次卡",
          "【监控】泄漏 控制图 UCL=91% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0231，QUALITY Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 066-231 输出 装配工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 热管理 检测数据，写入追溯链",
          "【复盘】班后会评审 热管理系统装配与泄漏测试 执行偏差 1 项，更新 RAG 标签：热管理、泄漏、测试",
          "【改进】将案例 industry-ev-066 纳入 装配工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "热管理 合格率",
              "≥92%",
              "装配工艺 KPI"
          ],
          [
              "泄漏 周期",
              "41 min",
              "节拍统计"
          ],
          [
              "热管理系统装 一次通过率",
              "≥89%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "装配工艺 企业内控标准 Rev.7"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-066 专用数据采集点"
      ],
      "issues": [
          [
              "热管理系统装配与泄漏测试 超差",
              "热管理 参数漂移",
              "按 WI 调机并加严 热管理 抽检至 AQL 0.65"
          ],
          [
              "装配工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "热管理、泄漏、测试 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 231"
          ]
      ],
      "checklist": [
          "热管理系统装配与泄漏测试 适用版本已张贴",
          "热管理/泄漏/测试 仪器校准有效",
          "装配工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "热管理",
              "装配工艺领域核心度量"
          ],
          [
              "泄漏",
              "热管理系统装配与泄漏测试 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -066"
          ]
      ],
      "caseStudy": "【案例 industry-ev-066】新能源汽车制造产线在实施「热管理系统装配与泄漏测试」后，热管理 相关不良从 12.1% 降至 0.6%，AI 质量员与AI 排程员 协同缩短处置时间 46 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 26%。",
      "agentHint": {
          "QUALITY": "负责 热管理系统装配与泄漏测试 中第 1 阶段：数据分析（热管理）",
          "SCHEDULER": "负责 热管理系统装配与泄漏测试 中第 2 阶段：规则校验（泄漏）"
      }
  },
  "充电接口检测与国标符合性": {
      "overview": "《充电接口检测与国标符合性》是 新能源汽车制造 领域 **测试工艺** 的专项作业文件（编号 industry-ev-067）。全文围绕 充电、国标、检测 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 充电接口检测与国标符合性 相关工序与决策。",
      "background": "新能源汽车制造 客户在 充电 环节常出现与 国标 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 充电接口检测与国标符合性 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "测试程序（针对充电接口检测与国标符合性第1环节）",
          "限值设定（针对充电接口检测与国标符合性第2环节）",
          "设备校准（针对充电接口检测与国标符合性第3环节）",
          "数据归档（针对充电接口检测与国标符合性第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「充电接口检测与国标符合性」适用版本 Rev.10，确认与当前 EV 产线工艺路线 industry-ev-067 一致",
          "【数据】从 MES/ERP 导出与 充电、国标、检测 相关数据：订单 111 单、在制 41 批、库存周转 4 天",
          "【首件】按 新能源汽车制造 WI 完成 充电接口检测与国标符合性 首件，实测 充电=111μm，记录于批次卡",
          "【监控】国标 控制图 UCL=97% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0561，QUALITY Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 067-561 输出 测试工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 充电 检测数据，写入追溯链",
          "【复盘】班后会评审 充电接口检测与国标符合性 执行偏差 1 项，更新 RAG 标签：充电、国标、检测",
          "【改进】将案例 industry-ev-067 纳入 测试工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "充电 合格率",
              "≥93%",
              "测试工艺 KPI"
          ],
          [
              "国标 周期",
              "21 min",
              "节拍统计"
          ],
          [
              "充电接口检测 一次通过率",
              "≥89%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "测试工艺 企业内控标准 Rev.4"
      ],
      "equipment": [
          "EOL 台架",
          "FCT 治具",
          "数据采集仪",
          "校准证书库",
          "文档 industry-ev-067 专用数据采集点"
      ],
      "issues": [
          [
              "充电接口检测与国标符合性 超差",
              "充电 参数漂移",
              "按 WI 调机并加严 充电 抽检至 AQL 0.65"
          ],
          [
              "测试工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "充电、国标、检测 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 561"
          ]
      ],
      "checklist": [
          "充电接口检测与国标符合性 适用版本已张贴",
          "充电/国标/检测 仪器校准有效",
          "测试工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "充电",
              "测试工艺领域核心度量"
          ],
          [
              "国标",
              "充电接口检测与国标符合性 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -067"
          ]
      ],
      "caseStudy": "【案例 industry-ev-067】新能源汽车制造产线在实施「充电接口检测与国标符合性」后，充电 相关不良从 6.1% 降至 0.3%，AI 质量员 协同缩短处置时间 16 分钟。关键转折：第 3 次迭代引入 RAG 检索本文档后，误判率下降 31%。",
      "agentHint": {
          "QUALITY": "负责 充电接口检测与国标符合性 中第 1 阶段：方案生成（充电）"
      }
  },
  "整车 EOL 下线检测流程": {
      "overview": "《整车 EOL 下线检测流程》是 新能源汽车制造 领域 **测试工艺** 的专项作业文件（编号 industry-ev-068）。全文围绕 EOL、下线、检测 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 EOL 下线检测流程 相关工序与决策。",
      "background": "新能源汽车制造 客户在 EOL 环节常出现与 下线 相关的变异。本文档基于 2020–2025 年量产数据编写，解决 EOL 下线检测流程 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "测试程序（针对EOL 下线检测流程第1环节）",
          "限值设定（针对EOL 下线检测流程第2环节）",
          "设备校准（针对EOL 下线检测流程第3环节）",
          "数据归档（针对EOL 下线检测流程第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「整车 EOL 下线检测流程」适用版本 Rev.1，确认与当前 EV 产线工艺路线 industry-ev-068 一致",
          "【数据】从 MES/ERP 导出与 EOL、下线、检测 相关数据：订单 122 单、在制 32 批、库存周转 4 天",
          "【首件】按 新能源汽车制造 WI 完成 EOL 下线检测流程 首件，实测 EOL=122μm，记录于批次卡",
          "【监控】下线 控制图 UCL=88% / LCL=76%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0372，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 068-372 输出 测试工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 EOL 检测数据，写入追溯链",
          "【复盘】班后会评审 整车 EOL 下线检测流程 执行偏差 2 项，更新 RAG 标签：EOL、下线、检测",
          "【改进】将案例 industry-ev-068 纳入 测试工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "EOL 合格率",
              "≥93%",
              "测试工艺 KPI"
          ],
          [
              "下线 周期",
              "32 min",
              "节拍统计"
          ],
          [
              "EOL 下线 一次通过率",
              "≥90%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "测试工艺 企业内控标准 Rev.4"
      ],
      "equipment": [
          "EOL 台架",
          "FCT 治具",
          "数据采集仪",
          "校准证书库",
          "文档 industry-ev-068 专用数据采集点"
      ],
      "issues": [
          [
              "EOL 下线检测流程 超差",
              "EOL 参数漂移",
              "按 WI 调机并加严 EOL 抽检至 AQL 0.65"
          ],
          [
              "测试工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "EOL、下线、检测 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 372"
          ]
      ],
      "checklist": [
          "整车 EOL 下线检测流程 适用版本已张贴",
          "EOL/下线/检测 仪器校准有效",
          "测试工艺 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "EOL",
              "测试工艺领域核心度量"
          ],
          [
              "下线",
              "EOL 下线检测流程 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -068"
          ]
      ],
      "caseStudy": "【案例 industry-ev-068】新能源汽车制造产线在实施「整车 EOL 下线检测流程」后，EOL 相关不良从 9.2% 降至 0.3%，AI 质量员与AI 数据员 协同缩短处置时间 27 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 42%。",
      "agentHint": {
          "QUALITY": "负责 整车 EOL 下线检测流程 中第 1 阶段：数据分析（EOL）",
          "DATA_ANALYST": "负责 整车 EOL 下线检测流程 中第 2 阶段：规则校验（下线）"
      }
  },
  "高压系统安全操作与互锁规范": {
      "overview": "《高压系统安全操作与互锁规范》是 新能源汽车制造 领域 **安全管理** 的专项作业文件（编号 industry-ev-069）。全文围绕 高压、安全、互锁 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 高压系统安全操作与互锁规范 相关工序与决策。",
      "background": "新能源汽车制造 客户在 高压 环节常出现与 安全 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 高压系统安全操作与互锁规范 在 安全管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "LOTO 上锁（针对高压系统安全操作与互锁规范第1环节）",
          "互锁测试（针对高压系统安全操作与互锁规范第2环节）",
          "应急演练（针对高压系统安全操作与互锁规范第3环节）",
          "事故上报（针对高压系统安全操作与互锁规范第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「高压系统安全操作与互锁规范」适用版本 Rev.12，确认与当前 EV 产线工艺路线 industry-ev-069 一致",
          "【数据】从 MES/ERP 导出与 高压、安全、互锁 相关数据：订单 125 单、在制 25 批、库存周转 5 天",
          "【首件】按 新能源汽车制造 WI 完成 高压系统安全操作与互锁规范 首件，实测 高压=125μm，记录于批次卡",
          "【监控】安全 控制图 UCL=99% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0275，QUALITY Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 069-275 输出 安全管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 高压 检测数据，写入追溯链",
          "【复盘】班后会评审 高压系统安全操作与互锁规范 执行偏差 0 项，更新 RAG 标签：高压、安全、互锁",
          "【改进】将案例 industry-ev-069 纳入 安全管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "高压 合格率",
              "≥94%",
              "安全管理 KPI"
          ],
          [
              "安全 周期",
              "35 min",
              "节拍统计"
          ],
          [
              "高压系统安全 一次通过率",
              "≥93%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "安全管理 企业内控标准 Rev.6"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-069 专用数据采集点"
      ],
      "issues": [
          [
              "高压系统安全操作与互锁规范 超差",
              "高压 参数漂移",
              "按 WI 调机并加严 高压 抽检至 AQL 0.65"
          ],
          [
              "安全管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "高压、安全、互锁 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 275"
          ]
      ],
      "checklist": [
          "高压系统安全操作与互锁规范 适用版本已张贴",
          "高压/安全/互锁 仪器校准有效",
          "安全管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "高压",
              "安全管理领域核心度量"
          ],
          [
              "安全",
              "高压系统安全操作与互锁规范 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -069"
          ]
      ],
      "caseStudy": "【案例 industry-ev-069】新能源汽车制造产线在实施「高压系统安全操作与互锁规范」后，高压 相关不良从 8.5% 降至 2.5%，AI 质量员与协同决策员 协同缩短处置时间 50 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 20%。",
      "agentHint": {
          "QUALITY": "负责 高压系统安全操作与互锁规范 中第 1 阶段：规则校验（高压）",
          "DECISION": "负责 高压系统安全操作与互锁规范 中第 2 阶段：方案生成（安全）"
      }
  },
  "轻量化材料应用与成本平衡分析": {
      "overview": "《轻量化材料应用与成本平衡分析》是 新能源汽车制造 领域 **工程管理** 的专项作业文件（编号 industry-ev-070）。全文围绕 轻量化、材料、成本 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 轻量化材料应用与成本平衡分析 相关工序与决策。",
      "background": "新能源汽车制造 客户在 轻量化 环节常出现与 材料 相关的变异。本文档基于 2025–2026 年量产数据编写，解决 轻量化材料应用与成本平衡分析 在 工程管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "NPI 门阀（针对轻量化材料应用与成本平衡分析第1环节）",
          "试产转化（针对轻量化材料应用与成本平衡分析第2环节）",
          "成本核算（针对轻量化材料应用与成本平衡分析第3环节）",
          "变更评估（针对轻量化材料应用与成本平衡分析第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「轻量化材料应用与成本平衡分析」适用版本 Rev.12，确认与当前 EV 产线工艺路线 industry-ev-070 一致",
          "【数据】从 MES/ERP 导出与 轻量化、材料、成本 相关数据：订单 129 单、在制 49 批、库存周转 6 天",
          "【首件】按 新能源汽车制造 WI 完成 轻量化材料应用与成本平衡分析 首件，实测 轻量化=129μm，记录于批次卡",
          "【监控】材料 控制图 UCL=99% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0479，PLANNER Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 070-479 输出 工程管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 轻量化 检测数据，写入追溯链",
          "【复盘】班后会评审 轻量化材料应用与成本平衡分析 执行偏差 4 项，更新 RAG 标签：轻量化、材料、成本",
          "【改进】将案例 industry-ev-070 纳入 工程管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "轻量化 合格率",
              "≥95%",
              "工程管理 KPI"
          ],
          [
              "材料 周期",
              "39 min",
              "节拍统计"
          ],
          [
              "轻量化材料应 一次通过率",
              "≥97%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "工程管理 企业内控标准 Rev.3"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-070 专用数据采集点"
      ],
      "issues": [
          [
              "轻量化材料应用与成本平衡分析 超差",
              "轻量化 参数漂移",
              "按 WI 调机并加严 轻量化 抽检至 AQL 0.65"
          ],
          [
              "工程管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "轻量化、材料、成本 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 479"
          ]
      ],
      "checklist": [
          "轻量化材料应用与成本平衡分析 适用版本已张贴",
          "轻量化/材料/成本 仪器校准有效",
          "工程管理 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "轻量化",
              "工程管理领域核心度量"
          ],
          [
              "材料",
              "轻量化材料应用与成本平衡分析 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -070"
          ]
      ],
      "caseStudy": "【案例 industry-ev-070】新能源汽车制造产线在实施「轻量化材料应用与成本平衡分析」后，轻量化 相关不良从 12.9% 降至 2.2%，AI 计划员与AI 数据员 协同缩短处置时间 54 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 24%。",
      "agentHint": {
          "PLANNER": "负责 轻量化材料应用与成本平衡分析 中第 1 阶段：规则校验（轻量化）",
          "DATA_ANALYST": "负责 轻量化材料应用与成本平衡分析 中第 2 阶段：方案生成（材料）"
      }
  },
  "电驱系统 NVH 测试与优化": {
      "overview": "《电驱系统 NVH 测试与优化》是 新能源汽车制造 领域 **测试工艺** 的专项作业文件（编号 industry-ev-071）。全文围绕 NVH、电驱、优化 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 电驱系统 NVH 测试与优化 相关工序与决策。",
      "background": "新能源汽车制造 客户在 NVH 环节常出现与 电驱 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 电驱系统 NVH 测试与优化 在 测试工艺 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "测试程序（针对电驱系统 NVH 测试与优化第1环节）",
          "限值设定（针对电驱系统 NVH 测试与优化第2环节）",
          "设备校准（针对电驱系统 NVH 测试与优化第3环节）",
          "数据归档（针对电驱系统 NVH 测试与优化第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「电驱系统 NVH 测试与优化」适用版本 Rev.3，确认与当前 EV 产线工艺路线 industry-ev-071 一致",
          "【数据】从 MES/ERP 导出与 NVH、电驱、优化 相关数据：订单 134 单、在制 34 批、库存周转 9 天",
          "【首件】按 新能源汽车制造 WI 完成 电驱系统 NVH 测试与优化 首件，实测 NVH=84μm，记录于批次卡",
          "【监控】电驱 控制图 UCL=90% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0734，SIMULATOR Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 071-734 输出 测试工艺 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 NVH 检测数据，写入追溯链",
          "【复盘】班后会评审 电驱系统 NVH 测试与优化 执行偏差 4 项，更新 RAG 标签：NVH、电驱、优化",
          "【改进】将案例 industry-ev-071 纳入 测试工艺 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "NVH 合格率",
              "≥98%",
              "测试工艺 KPI"
          ],
          [
              "电驱 周期",
              "44 min",
              "节拍统计"
          ],
          [
              "电驱系统 N 一次通过率",
              "≥92%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "测试工艺 企业内控标准 Rev.6"
      ],
      "equipment": [
          "EOL 台架",
          "FCT 治具",
          "数据采集仪",
          "校准证书库",
          "文档 industry-ev-071 专用数据采集点"
      ],
      "issues": [
          [
              "电驱系统 NVH 测试与优化 超差",
              "NVH 参数漂移",
              "按 WI 调机并加严 NVH 抽检至 AQL 0.65"
          ],
          [
              "测试工艺 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "NVH、电驱、优化 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 734"
          ]
      ],
      "checklist": [
          "电驱系统 NVH 测试与优化 适用版本已张贴",
          "NVH/电驱/优化 仪器校准有效",
          "测试工艺 首件已签字",
          "Agent SIMULATOR 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "NVH",
              "测试工艺领域核心度量"
          ],
          [
              "电驱",
              "电驱系统 NVH 测试与优化 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -071"
          ]
      ],
      "caseStudy": "【案例 industry-ev-071】新能源汽车制造产线在实施「电驱系统 NVH 测试与优化」后，NVH 相关不良从 11.4% 降至 2.5%，AI 仿真员与AI 质量员 协同缩短处置时间 29 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。",
      "agentHint": {
          "SIMULATOR": "负责 电驱系统 NVH 测试与优化 中第 1 阶段：规则校验（NVH）",
          "QUALITY": "负责 电驱系统 NVH 测试与优化 中第 2 阶段：方案生成（电驱）"
      }
  },
  "整车软件 OTA 发布与回滚流程": {
      "overview": "《整车软件 OTA 发布与回滚流程》是 新能源汽车制造 领域 **软件管理** 的专项作业文件（编号 industry-ev-072）。全文围绕 OTA、软件、回滚 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 软件 OTA 发布与回滚流程 相关工序与决策。",
      "background": "新能源汽车制造 客户在 OTA 环节常出现与 软件 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 软件 OTA 发布与回滚流程 在 软件管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "版本发布（针对软件 OTA 发布与回滚流程第1环节）",
          "回滚策略（针对软件 OTA 发布与回滚流程第2环节）",
          "灰度规则（针对软件 OTA 发布与回滚流程第3环节）",
          "安全审计（针对软件 OTA 发布与回滚流程第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「整车软件 OTA 发布与回滚流程」适用版本 Rev.8，确认与当前 EV 产线工艺路线 industry-ev-072 一致",
          "【数据】从 MES/ERP 导出与 OTA、软件、回滚 相关数据：订单 107 单、在制 27 批、库存周转 7 天",
          "【首件】按 新能源汽车制造 WI 完成 软件 OTA 发布与回滚流程 首件，实测 OTA=57μm，记录于批次卡",
          "【监控】软件 控制图 UCL=95% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0907，DECISION Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 072-907 输出 软件管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 OTA 检测数据，写入追溯链",
          "【复盘】班后会评审 整车软件 OTA 发布与回滚流程 执行偏差 2 项，更新 RAG 标签：OTA、软件、回滚",
          "【改进】将案例 industry-ev-072 纳入 软件管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "OTA 合格率",
              "≥96%",
              "软件管理 KPI"
          ],
          [
              "软件 周期",
              "17 min",
              "节拍统计"
          ],
          [
              "软件 OTA 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "软件管理 企业内控标准 Rev.8"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-072 专用数据采集点"
      ],
      "issues": [
          [
              "软件 OTA 发布与回滚流程 超差",
              "OTA 参数漂移",
              "按 WI 调机并加严 OTA 抽检至 AQL 0.65"
          ],
          [
              "软件管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "OTA、软件、回滚 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 907"
          ]
      ],
      "checklist": [
          "整车软件 OTA 发布与回滚流程 适用版本已张贴",
          "OTA/软件/回滚 仪器校准有效",
          "软件管理 首件已签字",
          "Agent DECISION 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "OTA",
              "软件管理领域核心度量"
          ],
          [
              "软件",
              "软件 OTA 发布与回滚流程 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -072"
          ]
      ],
      "caseStudy": "【案例 industry-ev-072】新能源汽车制造产线在实施「整车软件 OTA 发布与回滚流程」后，OTA 相关不良从 8.7% 降至 1.7%，协同决策员与AI 数据员 协同缩短处置时间 42 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 27%。",
      "agentHint": {
          "DECISION": "负责 整车软件 OTA 发布与回滚流程 中第 1 阶段：规则校验（OTA）",
          "DATA_ANALYST": "负责 整车软件 OTA 发布与回滚流程 中第 2 阶段：方案生成（软件）"
      }
  },
  "零部件 APQP 与 PPAP 提交指南": {
      "overview": "《零部件 APQP 与 PPAP 提交指南》是 新能源汽车制造 领域 **质量管理** 的专项作业文件（编号 industry-ev-073）。全文围绕 APQP、PPAP、零部件 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 零部件 APQP 与 PPAP 提交指南 相关工序与决策。",
      "background": "新能源汽车制造 客户在 APQP 环节常出现与 PPAP 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 零部件 APQP 与 PPAP 提交指南 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "追溯体系（针对零部件 APQP 与 PPAP 提交指南第1环节）",
          "SPC（针对零部件 APQP 与 PPAP 提交指南第2环节）",
          "FMEA（针对零部件 APQP 与 PPAP 提交指南第3环节）",
          "8D 改善（针对零部件 APQP 与 PPAP 提交指南第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「零部件 APQP 与 PPAP 提交指南」适用版本 Rev.9，确认与当前 EV 产线工艺路线 industry-ev-073 一致",
          "【数据】从 MES/ERP 导出与 APQP、PPAP、零部件 相关数据：订单 148 单、在制 28 批、库存周转 4 天",
          "【首件】按 新能源汽车制造 WI 完成 零部件 APQP 与 PPAP 提交指南 首件，实测 APQP=98μm，记录于批次卡",
          "【监控】PPAP 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0848，QUALITY Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 073-848 输出 质量管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 APQP 检测数据，写入追溯链",
          "【复盘】班后会评审 零部件 APQP 与 PPAP 提交指南 执行偏差 3 项，更新 RAG 标签：APQP、PPAP、零部件",
          "【改进】将案例 industry-ev-073 纳入 质量管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "APQP 合格率",
              "≥93%",
              "质量管理 KPI"
          ],
          [
              "PPAP 周期",
              "58 min",
              "节拍统计"
          ],
          [
              "零部件 AP 一次通过率",
              "≥96%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "质量管理 企业内控标准 Rev.3"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-073 专用数据采集点"
      ],
      "issues": [
          [
              "零部件 APQP 与 PPAP 提交指南 超差",
              "APQP 参数漂移",
              "按 WI 调机并加严 APQP 抽检至 AQL 0.65"
          ],
          [
              "质量管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "APQP、PPAP、零部件 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 848"
          ]
      ],
      "checklist": [
          "零部件 APQP 与 PPAP 提交指南 适用版本已张贴",
          "APQP/PPAP/零部件 仪器校准有效",
          "质量管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "APQP",
              "质量管理领域核心度量"
          ],
          [
              "PPAP",
              "零部件 APQP 与 PPAP 提交指南 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -073"
          ]
      ],
      "caseStudy": "【案例 industry-ev-073】新能源汽车制造产线在实施「零部件 APQP 与 PPAP 提交指南」后，APQP 相关不良从 5.8% 降至 2.2%，AI 质量员与AI 计划员 协同缩短处置时间 23 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 43%。",
      "agentHint": {
          "QUALITY": "负责 零部件 APQP 与 PPAP 提交指南 中第 1 阶段：数据分析（APQP）",
          "PLANNER": "负责 零部件 APQP 与 PPAP 提交指南 中第 2 阶段：规则校验（PPAP）"
      }
  },
  "八年质保数据追溯与索赔分析": {
      "overview": "《八年质保数据追溯与索赔分析》是 新能源汽车制造 领域 **质量管理** 的专项作业文件（编号 industry-ev-074）。全文围绕 质保、索赔、追溯 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 八年质保数据追溯与索赔分析 相关工序与决策。",
      "background": "新能源汽车制造 客户在 质保 环节常出现与 索赔 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 八年质保数据追溯与索赔分析 在 质量管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "追溯体系（针对八年质保数据追溯与索赔分析第1环节）",
          "SPC（针对八年质保数据追溯与索赔分析第2环节）",
          "FMEA（针对八年质保数据追溯与索赔分析第3环节）",
          "8D 改善（针对八年质保数据追溯与索赔分析第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「八年质保数据追溯与索赔分析」适用版本 Rev.2，确认与当前 EV 产线工艺路线 industry-ev-074 一致",
          "【数据】从 MES/ERP 导出与 质保、索赔、追溯 相关数据：订单 137 单、在制 27 批、库存周转 9 天",
          "【首件】按 新能源汽车制造 WI 完成 八年质保数据追溯与索赔分析 首件，实测 质保=87μm，记录于批次卡",
          "【监控】索赔 控制图 UCL=89% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0937，QUALITY Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 074-937 输出 质量管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 质保 检测数据，写入追溯链",
          "【复盘】班后会评审 八年质保数据追溯与索赔分析 执行偏差 2 项，更新 RAG 标签：质保、索赔、追溯",
          "【改进】将案例 industry-ev-074 纳入 质量管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "质保 合格率",
              "≥98%",
              "质量管理 KPI"
          ],
          [
              "索赔 周期",
              "47 min",
              "节拍统计"
          ],
          [
              "八年质保数据 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "质量管理 企业内控标准 Rev.2"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-074 专用数据采集点"
      ],
      "issues": [
          [
              "八年质保数据追溯与索赔分析 超差",
              "质保 参数漂移",
              "按 WI 调机并加严 质保 抽检至 AQL 0.65"
          ],
          [
              "质量管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "质保、索赔、追溯 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 937"
          ]
      ],
      "checklist": [
          "八年质保数据追溯与索赔分析 适用版本已张贴",
          "质保/索赔/追溯 仪器校准有效",
          "质量管理 首件已签字",
          "Agent QUALITY 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "质保",
              "质量管理领域核心度量"
          ],
          [
              "索赔",
              "八年质保数据追溯与索赔分析 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -074"
          ]
      ],
      "caseStudy": "【案例 industry-ev-074】新能源汽车制造产线在实施「八年质保数据追溯与索赔分析」后，质保 相关不良从 6.7% 降至 1.1%，AI 质量员与AI 数据员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 32%。",
      "agentHint": {
          "QUALITY": "负责 八年质保数据追溯与索赔分析 中第 1 阶段：数据分析（质保）",
          "DATA_ANALYST": "负责 八年质保数据追溯与索赔分析 中第 2 阶段：规则校验（索赔）"
      }
  },
  "退役电芯梯次利用评估标准": {
      "overview": "《退役电芯梯次利用评估标准》是 新能源汽车制造 领域 **可持续** 的专项作业文件（编号 industry-ev-075）。全文围绕 梯次、回收、评估 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 退役电芯梯次利用评估标准 相关工序与决策。",
      "background": "新能源汽车制造 客户在 梯次 环节常出现与 回收 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 退役电芯梯次利用评估标准 在 可持续 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "碳足迹（针对退役电芯梯次利用评估标准第1环节）",
          "回收评估（针对退役电芯梯次利用评估标准第2环节）",
          "梯次利用（针对退役电芯梯次利用评估标准第3环节）",
          "环保声明（针对退役电芯梯次利用评估标准第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「退役电芯梯次利用评估标准」适用版本 Rev.10，确认与当前 EV 产线工艺路线 industry-ev-075 一致",
          "【数据】从 MES/ERP 导出与 梯次、回收、评估 相关数据：订单 127 单、在制 47 批、库存周转 5 天",
          "【首件】按 新能源汽车制造 WI 完成 退役电芯梯次利用评估标准 首件，实测 梯次=127μm，记录于批次卡",
          "【监控】回收 控制图 UCL=97% / LCL=73%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0177，PLANNER Agent 推送 8D 小组",
          "【中间检】第 3 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 075-177 输出 可持续 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 梯次 检测数据，写入追溯链",
          "【复盘】班后会评审 退役电芯梯次利用评估标准 执行偏差 2 项，更新 RAG 标签：梯次、回收、评估",
          "【改进】将案例 industry-ev-075 纳入 可持续 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "梯次 合格率",
              "≥94%",
              "可持续 KPI"
          ],
          [
              "回收 周期",
              "37 min",
              "节拍统计"
          ],
          [
              "退役电芯梯次 一次通过率",
              "≥95%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "可持续 企业内控标准 Rev.7"
      ],
      "equipment": [
          "电池模组线",
          "电驱总成台",
          "EOL 检测线",
          "Andon 系统",
          "文档 industry-ev-075 专用数据采集点"
      ],
      "issues": [
          [
              "退役电芯梯次利用评估标准 超差",
              "梯次 参数漂移",
              "按 WI 调机并加严 梯次 抽检至 AQL 0.65"
          ],
          [
              "可持续 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "梯次、回收、评估 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 177"
          ]
      ],
      "checklist": [
          "退役电芯梯次利用评估标准 适用版本已张贴",
          "梯次/回收/评估 仪器校准有效",
          "可持续 首件已签字",
          "Agent PLANNER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "梯次",
              "可持续领域核心度量"
          ],
          [
              "回收",
              "退役电芯梯次利用评估标准 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -075"
          ]
      ],
      "caseStudy": "【案例 industry-ev-075】新能源汽车制造产线在实施「退役电芯梯次利用评估标准」后，梯次 相关不良从 6.7% 降至 0.6%，AI 计划员与协同决策员 协同缩短处置时间 32 分钟。关键转折：第 4 次迭代引入 RAG 检索本文档后，误判率下降 22%。",
      "agentHint": {
          "PLANNER": "负责 退役电芯梯次利用评估标准 中第 1 阶段：数据分析（梯次）",
          "DECISION": "负责 退役电芯梯次利用评估标准 中第 2 阶段：规则校验（回收）"
      }
  },
  "总装产线节拍优化与工位平衡": {
      "overview": "《总装产线节拍优化与工位平衡》是 新能源汽车制造 领域 **排程优化** 的专项作业文件（编号 industry-ev-076）。全文围绕 节拍、工位、平衡 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 产线节拍优化与工位平衡 相关工序与决策。",
      "background": "新能源汽车制造 客户在 节拍 环节常出现与 工位 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 产线节拍优化与工位平衡 在 排程优化 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "产线排程（针对产线节拍优化与工位平衡第1环节）",
          "换线优化（针对产线节拍优化与工位平衡第2环节）",
          "插单规则（针对产线节拍优化与工位平衡第3环节）",
          "甘特发布（针对产线节拍优化与工位平衡第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「总装产线节拍优化与工位平衡」适用版本 Rev.9，确认与当前 EV 产线工艺路线 industry-ev-076 一致",
          "【数据】从 MES/ERP 导出与 节拍、工位、平衡 相关数据：订单 134 单、在制 34 批、库存周转 6 天",
          "【首件】按 新能源汽车制造 WI 完成 产线节拍优化与工位平衡 首件，实测 节拍=134μm，记录于批次卡",
          "【监控】工位 控制图 UCL=96% / LCL=72%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0584，SCHEDULER Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 076-584 输出 排程优化 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 节拍 检测数据，写入追溯链",
          "【复盘】班后会评审 总装产线节拍优化与工位平衡 执行偏差 4 项，更新 RAG 标签：节拍、工位、平衡",
          "【改进】将案例 industry-ev-076 纳入 排程优化 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "节拍 合格率",
              "≥95%",
              "排程优化 KPI"
          ],
          [
              "工位 周期",
              "44 min",
              "节拍统计"
          ],
          [
              "产线节拍优化 一次通过率",
              "≥92%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "排程优化 企业内控标准 Rev.9"
      ],
      "equipment": [
          "甘特排程软件",
          "换线计时器",
          "MES 工单",
          "Andon 看板",
          "文档 industry-ev-076 专用数据采集点"
      ],
      "issues": [
          [
              "产线节拍优化与工位平衡 超差",
              "节拍 参数漂移",
              "按 WI 调机并加严 节拍 抽检至 AQL 0.65"
          ],
          [
              "排程优化 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "节拍、工位、平衡 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 584"
          ]
      ],
      "checklist": [
          "总装产线节拍优化与工位平衡 适用版本已张贴",
          "节拍/工位/平衡 仪器校准有效",
          "排程优化 首件已签字",
          "Agent SCHEDULER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "节拍",
              "排程优化领域核心度量"
          ],
          [
              "工位",
              "产线节拍优化与工位平衡 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -076"
          ]
      ],
      "caseStudy": "【案例 industry-ev-076】新能源汽车制造产线在实施「总装产线节拍优化与工位平衡」后，节拍 相关不良从 5.4% 降至 2.8%，AI 排程员与AI 计划员 协同缩短处置时间 39 分钟。关键转折：第 6 次迭代引入 RAG 检索本文档后，误判率下降 29%。",
      "agentHint": {
          "SCHEDULER": "负责 总装产线节拍优化与工位平衡 中第 1 阶段：执行跟踪（节拍）",
          "PLANNER": "负责 总装产线节拍优化与工位平衡 中第 2 阶段：数据分析（工位）"
      }
  },
  "新能源汽车多 Agent 协同决策案例": {
      "overview": "《新能源汽车多 Agent 协同决策案例》是 新能源汽车制造 领域 **多智能体** 的专项作业文件（编号 industry-ev-077）。全文围绕 Agent、协同、决策 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 多 Agent 协同决策案例 相关工序与决策。",
      "background": "新能源汽车制造 客户在 Agent 环节常出现与 协同 相关的变异。本文档基于 2023–2026 年量产数据编写，解决 多 Agent 协同决策案例 在 多智能体 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `EV_MANUFACTURING` 对齐。",
      "scope": [
          "Agent 分工（针对多 Agent 协同决策案例第1环节）",
          "任务分配（针对多 Agent 协同决策案例第2环节）",
          "冲突消解（针对多 Agent 协同决策案例第3环节）",
          "决策记录（针对多 Agent 协同决策案例第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「新能源汽车多 Agent 协同决策案例」适用版本 Rev.4，确认与当前 EV 产线工艺路线 industry-ev-077 一致",
          "【数据】从 MES/ERP 导出与 Agent、协同、决策 相关数据：订单 123 单、在制 23 批、库存周转 5 天",
          "【首件】按 新能源汽车制造 WI 完成 多 Agent 协同决策案例 首件，实测 Agent=73μm，记录于批次卡",
          "【监控】协同 控制图 UCL=91% / LCL=75%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-EV-0723，DECISION Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 077-723 输出 多智能体 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 VIN 与 Agent 检测数据，写入追溯链",
          "【复盘】班后会评审 新能源汽车多 Agent 协同决策案例 执行偏差 3 项，更新 RAG 标签：Agent、协同、决策",
          "【改进】将案例 industry-ev-077 纳入 多智能体 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "Agent 合格率",
              "≥94%",
              "多智能体 KPI"
          ],
          [
              "协同 周期",
              "33 min",
              "节拍统计"
          ],
          [
              "多 Agen 一次通过率",
              "≥91%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "VIN+模组 SN",
              "强制绑定"
          ]
      ],
      "standards": [
          "IATF 16949",
          "GB 38031 电动汽车安全",
          "QC/T 1022 动力电池",
          "GB 18384 碰撞安全",
          "多智能体 企业内控标准 Rev.4"
      ],
      "equipment": [
          "Contract Net 调度器",
          "Agent 注册中心",
          "任务黑板",
          "决策日志",
          "文档 industry-ev-077 专用数据采集点"
      ],
      "issues": [
          [
              "多 Agent 协同决策案例 超差",
              "Agent 参数漂移",
              "按 WI 调机并加严 Agent 抽检至 AQL 0.65"
          ],
          [
              "多智能体 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "Agent、协同、决策 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 723"
          ]
      ],
      "checklist": [
          "新能源汽车多 Agent 协同决策案例 适用版本已张贴",
          "Agent/协同/决策 仪器校准有效",
          "多智能体 首件已签字",
          "Agent DECISION 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "Agent",
              "多智能体领域核心度量"
          ],
          [
              "协同",
              "多 Agent 协同决策案例 标准作业程序"
          ],
          [
              "EV-TERM",
              "新能源汽车制造 专用术语，见企业术语库 -077"
          ]
      ],
      "caseStudy": "【案例 industry-ev-077】新能源汽车制造产线在实施「新能源汽车多 Agent 协同决策案例」后，Agent 相关不良从 8.3% 降至 0.3%，协同决策员与AI 调度员与AI 计划员 协同缩短处置时间 18 分钟。关键转折：第 5 次迭代引入 RAG 检索本文档后，误判率下降 43%。",
      "agentHint": {
          "DECISION": "负责 新能源汽车多 Agent 协同决策案例 中第 1 阶段：规则校验（Agent）",
          "DISPATCHER": "负责 新能源汽车多 Agent 协同决策案例 中第 2 阶段：方案生成（协同）",
          "PLANNER": "负责 新能源汽车多 Agent 协同决策案例 中第 3 阶段：执行跟踪（决策）"
      }
  },
  "AI Agent Studio 工业多智能体架构白皮书": {
      "overview": "《AI Agent Studio 工业多智能体架构白皮书》是 平台与多智能体 领域 **平台架构** 的专项作业文件（编号 industry-platform-078）。全文围绕 Agent、架构、Studio 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 工业多智能体架构白皮书 相关工序与决策。",
      "background": "平台与多智能体 客户在 Agent 环节常出现与 架构 相关的变异。本文档基于 2022–2025 年量产数据编写，解决 工业多智能体架构白皮书 在 平台架构 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `PLATFORM` 对齐。",
      "scope": [
          "服务划分（针对工业多智能体架构白皮书第1环节）",
          "权限模型（针对工业多智能体架构白皮书第2环节）",
          "部署拓扑（针对工业多智能体架构白皮书第3环节）",
          "监控告警（针对工业多智能体架构白皮书第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「AI Agent Studio 工业多智能体架构白皮书」适用版本 Rev.9，确认与当前 PLATFORM 产线工艺路线 industry-platform-078 一致",
          "【数据】从 MES/ERP 导出与 Agent、架构、Studio 相关数据：订单 140 单、在制 40 批、库存周转 3 天",
          "【首件】按 平台与多智能体 WI 完成 工业多智能体架构白皮书 首件，实测 Agent=90rpm，记录于批次卡",
          "【监控】架构 控制图 UCL=96% / LCL=76%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-PLATFORM-0140，DISPATCHER Agent 推送 8D 小组",
          "【中间检】第 2 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 078-140 输出 平台架构 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 Agent 检测数据，写入追溯链",
          "【复盘】班后会评审 AI Agent Studio 工业多智能体架构白皮书 执行偏差 0 项，更新 RAG 标签：Agent、架构、Studio",
          "【改进】将案例 industry-platform-078 纳入 平台架构 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "Agent 合格率",
              "≥92%",
              "平台架构 KPI"
          ],
          [
              "架构 周期",
              "50 min",
              "节拍统计"
          ],
          [
              "工业多智能体 一次通过率",
              "≥88%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "ISO/IEC 42001 AI 管理",
          "企业 Agent Studio 架构规范",
          "CNP 合同网协议企业标准",
          "平台架构 企业内控标准 Rev.6"
      ],
      "equipment": [
          "Agent Studio",
          "NestJS API",
          "PostgreSQL",
          "Workflow 引擎",
          "文档 industry-platform-078 专用数据采集点"
      ],
      "issues": [
          [
              "工业多智能体架构白皮书 超差",
              "Agent 参数漂移",
              "按 WI 调机并加严 Agent 抽检至 AQL 0.65"
          ],
          [
              "平台架构 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "Agent、架构、Studio 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 140"
          ]
      ],
      "checklist": [
          "AI Agent Studio 工业多智能体架构白皮书 适用版本已张贴",
          "Agent/架构/Studio 仪器校准有效",
          "平台架构 首件已签字",
          "Agent DISPATCHER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "Agent",
              "平台架构领域核心度量"
          ],
          [
              "架构",
              "工业多智能体架构白皮书 标准作业程序"
          ],
          [
              "PLATFORM-TERM",
              "平台与多智能体 专用术语，见企业术语库 -078"
          ]
      ],
      "caseStudy": "【案例 industry-platform-078】平台与多智能体产线在实施「AI Agent Studio 工业多智能体架构白皮书」后，Agent 相关不良从 9.0% 降至 2.5%，AI 调度员与协同决策员 协同缩短处置时间 35 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 35%。",
      "agentHint": {
          "DISPATCHER": "负责 AI Agent Studio 工业多智能体架构白皮书 中第 1 阶段：执行跟踪（Agent）",
          "DECISION": "负责 AI Agent Studio 工业多智能体架构白皮书 中第 2 阶段：数据分析（架构）"
      }
  },
  "工业 RAG 知识库建设与向量检索最佳实践": {
      "overview": "《工业 RAG 知识库建设与向量检索最佳实践》是 平台与多智能体 领域 **知识管理** 的专项作业文件（编号 industry-platform-079）。全文围绕 RAG、向量、知识库 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 RAG 知识库建设与向量检索最佳实践 相关工序与决策。",
      "background": "平台与多智能体 客户在 RAG 环节常出现与 向量 相关的变异。本文档基于 2021–2026 年量产数据编写，解决 RAG 知识库建设与向量检索最佳实践 在 知识管理 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `PLATFORM` 对齐。",
      "scope": [
          "切片策略（针对RAG 知识库建设与向量检索最佳实践第1环节）",
          "Embedding（针对RAG 知识库建设与向量检索最佳实践第2环节）",
          "检索评估（针对RAG 知识库建设与向量检索最佳实践第3环节）",
          "版本治理（针对RAG 知识库建设与向量检索最佳实践第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「工业 RAG 知识库建设与向量检索最佳实践」适用版本 Rev.8，确认与当前 PLATFORM 产线工艺路线 industry-platform-079 一致",
          "【数据】从 MES/ERP 导出与 RAG、向量、知识库 相关数据：订单 135 单、在制 45 批、库存周转 6 天",
          "【首件】按 平台与多智能体 WI 完成 RAG 知识库建设与向量检索最佳实践 首件，实测 RAG=85rpm，记录于批次卡",
          "【监控】向量 控制图 UCL=95% / LCL=79%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-PLATFORM-0535，DATA_ANALYST Agent 推送 8D 小组",
          "【中间检】第 5 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 079-535 输出 知识管理 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 RAG 检测数据，写入追溯链",
          "【复盘】班后会评审 工业 RAG 知识库建设与向量检索最佳实践 执行偏差 0 项，更新 RAG 标签：RAG、向量、知识库",
          "【改进】将案例 industry-platform-079 纳入 知识管理 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "RAG 合格率",
              "≥95%",
              "知识管理 KPI"
          ],
          [
              "向量 周期",
              "45 min",
              "节拍统计"
          ],
          [
              "RAG 知识 一次通过率",
              "≥93%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "ISO/IEC 42001 AI 管理",
          "企业 Agent Studio 架构规范",
          "CNP 合同网协议企业标准",
          "知识管理 企业内控标准 Rev.5"
      ],
      "equipment": [
          "RAG 向量库",
          "Embedding 服务",
          "文档切片器",
          "检索评估脚本",
          "文档 industry-platform-079 专用数据采集点"
      ],
      "issues": [
          [
              "RAG 知识库建设与向量检索最佳实践 超差",
              "RAG 参数漂移",
              "按 WI 调机并加严 RAG 抽检至 AQL 0.65"
          ],
          [
              "知识管理 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "RAG、向量、知识库 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 535"
          ]
      ],
      "checklist": [
          "工业 RAG 知识库建设与向量检索最佳实践 适用版本已张贴",
          "RAG/向量/知识库 仪器校准有效",
          "知识管理 首件已签字",
          "Agent DATA_ANALYST 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "RAG",
              "知识管理领域核心度量"
          ],
          [
              "向量",
              "RAG 知识库建设与向量检索最佳实践 标准作业程序"
          ],
          [
              "PLATFORM-TERM",
              "平台与多智能体 专用术语，见企业术语库 -079"
          ]
      ],
      "caseStudy": "【案例 industry-platform-079】平台与多智能体产线在实施「工业 RAG 知识库建设与向量检索最佳实践」后，RAG 相关不良从 12.5% 降至 1.4%，AI 数据员与协同决策员 协同缩短处置时间 30 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 30%。",
      "agentHint": {
          "DATA_ANALYST": "负责 工业 RAG 知识库建设与向量检索最佳实践 中第 1 阶段：方案生成（RAG）",
          "DECISION": "负责 工业 RAG 知识库建设与向量检索最佳实践 中第 2 阶段：执行跟踪（向量）"
      }
  },
  "Contract Net 合同网协议任务分配指南": {
      "overview": "《Contract Net 合同网协议任务分配指南》是 平台与多智能体 领域 **多智能体** 的专项作业文件（编号 industry-platform-080）。全文围绕 CNP、合同网、分配 展开，规定可操作步骤、量化指标与 Agent 协同接口，区别于通用模板，仅适用于 Contract Net 合同网协议任务 相关工序与决策。",
      "background": "平台与多智能体 客户在 CNP 环节常出现与 合同网 相关的变异。本文档基于 2024–2025 年量产数据编写，解决 Contract Net 合同网协议任务 在 多智能体 中缺乏统一基准的问题，并与 AI Agent Studio 场景 `PLATFORM` 对齐。",
      "scope": [
          "Agent 分工（针对Contract Net 合同网协议任务第1环节）",
          "任务分配（针对Contract Net 合同网协议任务第2环节）",
          "冲突消解（针对Contract Net 合同网协议任务第3环节）",
          "决策记录（针对Contract Net 合同网协议任务第4环节）"
      ],
      "processSteps": [
          "【准备】查阅「Contract Net 合同网协议任务分配指南」适用版本 Rev.11，确认与当前 PLATFORM 产线工艺路线 industry-platform-080 一致",
          "【数据】从 MES/ERP 导出与 CNP、合同网、分配 相关数据：订单 110 单、在制 30 批、库存周转 5 天",
          "【首件】按 平台与多智能体 WI 完成 Contract Net 合同网协议任务 首件，实测 CNP=60rpm，记录于批次卡",
          "【监控】合同网 控制图 UCL=98% / LCL=78%，每小时点检并上传 SPC 数据库",
          "【异常】偏离时开 NCR-PLATFORM-0310，DISPATCHER Agent 推送 8D 小组",
          "【中间检】第 4 工序设置 Go/No-Go 门，未通过则冻结 WIP 并标识红色标签",
          "【批次】完工批次 080-310 输出 多智能体 报告 PDF，附 3 项检测原始记录",
          "【追溯】绑定 PCB 条码 与 CNP 检测数据，写入追溯链",
          "【复盘】班后会评审 Contract Net 合同网协议任务分配指南 执行偏差 0 项，更新 RAG 标签：CNP、合同网、分配",
          "【改进】将案例 industry-platform-080 纳入 多智能体 知识库，供 Agent 下次检索增强"
      ],
      "parameters": [
          [
              "CNP 合格率",
              "≥94%",
              "多智能体 KPI"
          ],
          [
              "合同网 周期",
              "20 min",
              "节拍统计"
          ],
          [
              "Contra 一次通过率",
              "≥88%",
              "不含返工"
          ],
          [
              "数据追溯粒度",
              "PCB 条码",
              "强制绑定"
          ]
      ],
      "standards": [
          "ISO/IEC 42001 AI 管理",
          "企业 Agent Studio 架构规范",
          "CNP 合同网协议企业标准",
          "多智能体 企业内控标准 Rev.5"
      ],
      "equipment": [
          "Contract Net 调度器",
          "Agent 注册中心",
          "任务黑板",
          "决策日志",
          "文档 industry-platform-080 专用数据采集点"
      ],
      "issues": [
          [
              "Contract Net 合同网协议任务 超差",
              "CNP 参数漂移",
              "按 WI 调机并加严 CNP 抽检至 AQL 0.65"
          ],
          [
              "多智能体 延误",
              "齐套不足或排程冲突",
              "AI 排程员重算并启用紧急料塔/外协"
          ],
          [
              "CNP、合同网、分配 数据缺失",
              "MES 接口延迟",
              "切换缓存队列并人工补录批次 310"
          ]
      ],
      "checklist": [
          "Contract Net 合同网协议任务分配指南 适用版本已张贴",
          "CNP/合同网/分配 仪器校准有效",
          "多智能体 首件已签字",
          "Agent DISPATCHER 任务已关联知识库",
          "异常升级路径已测试"
      ],
      "terms": [
          [
              "CNP",
              "多智能体领域核心度量"
          ],
          [
              "合同网",
              "Contract Net 合同网协议任务 标准作业程序"
          ],
          [
              "PLATFORM-TERM",
              "平台与多智能体 专用术语，见企业术语库 -080"
          ]
      ],
      "caseStudy": "【案例 industry-platform-080】平台与多智能体产线在实施「Contract Net 合同网协议任务分配指南」后，CNP 相关不良从 11.0% 降至 1.4%，AI 调度员与协同决策员 协同缩短处置时间 45 分钟。关键转折：第 2 次迭代引入 RAG 检索本文档后，误判率下降 30%。",
      "agentHint": {
          "DISPATCHER": "负责 Contract Net 合同网协议任务分配指南 中第 1 阶段：规则校验（CNP）",
          "DECISION": "负责 Contract Net 合同网协议任务分配指南 中第 2 阶段：方案生成（合同网）"
      }
  },
};
```

---

<a id="file-170"></a>

## 文件 170 : `packages/database/src/index.ts`

```typescript
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export * from '@prisma/client';
export default prisma;
```

---

<a id="file-171"></a>

## 文件 171 : `packages/database/src/industry-catalog.ts`

```typescript
/** 工业行业文档目录 — 80 份，覆盖无人机 / SMT / 新能源汽车 / 平台协同 */

export type IndustryCode = 'UAV' | 'SMT' | 'EV' | 'PLATFORM';
export type ScenarioCode = 'UAV_MANUFACTURING' | 'SMT_MANUFACTURING' | 'EV_MANUFACTURING' | null;

export interface IndustryDocDef {
  id: string;
  fileName: string;
  title: string;
  industry: IndustryCode;
  scenarioType: ScenarioCode;
  category: string;
  tags: string[];
  relatedAgents: string[];
}

const UAV_TOPICS: Array<{ title: string; category: string; tags: string[]; agents: string[] }> = [
  { title: '无人机 MPS 主生产计划编制规范', category: '生产计划', tags: ['MPS', '产能', '订单'], agents: ['PLANNER'] },
  { title: '无人机 MRP 物料需求计划运算手册', category: '生产计划', tags: ['MRP', 'BOM', '缺料'], agents: ['PLANNER', 'DATA_ANALYST'] },
  { title: '多级 BOM 管理与 ECN 变更流程', category: '物料管理', tags: ['BOM', 'ECN', '版本'], agents: ['PLANNER', 'QUALITY'] },
  { title: '碳纤维机架铺叠与固化工艺标准', category: '制造工艺', tags: ['复材', '机架', '固化'], agents: ['QUALITY', 'SIMULATOR'] },
  { title: '无刷电机 2212 来料检验与性能测试', category: '质量检验', tags: ['电机', 'IQC', '测试'], agents: ['QUALITY'] },
  { title: '飞控主板 SMT 贴片与功能测试 SOP', category: '装配工艺', tags: ['飞控', 'SMT', 'FCT'], agents: ['SCHEDULER', 'QUALITY'] },
  { title: '桨叶动平衡检测与分级标准', category: '质量检验', tags: ['桨叶', '动平衡', '分级'], agents: ['QUALITY'] },
  { title: '智能电池 Pack 组装与安全规范', category: '制造工艺', tags: ['电池', 'Pack', '安全'], agents: ['QUALITY', 'PLANNER'] },
  { title: '四旋翼无人机整机组装流程', category: '装配工艺', tags: ['总装', '四旋翼', '节拍'], agents: ['SCHEDULER', 'DISPATCHER'] },
  { title: '无人机出厂检验与试飞放行标准', category: '质量检验', tags: ['OQC', '试飞', '放行'], agents: ['QUALITY', 'DECISION'] },
  { title: '无人机产线产能规划与瓶颈分析', category: '生产计划', tags: ['产能', '瓶颈', 'OEE'], agents: ['PLANNER', 'DATA_ANALYST'] },
  { title: '外协结构件来料检验规范', category: '质量检验', tags: ['外协', 'IQC', '结构件'], agents: ['QUALITY'] },
  { title: '工装夹具设计与寿命管理', category: '设备管理', tags: ['工装', '夹具', 'PM'], agents: ['SCHEDULER'] },
  { title: '无人机精益生产线布局指南', category: '精益生产', tags: ['精益', '线体', '布局'], agents: ['DESIGNER', 'PLANNER', 'SIMULATOR'] },
  { title: '多机型混线换线时间优化方法', category: '排程优化', tags: ['换线', 'SMED', '混线'], agents: ['SCHEDULER', 'PLANNER'] },
  { title: '无人机全流程质量追溯体系', category: '质量管理', tags: ['追溯', 'SN', '批次'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: '飞控系统 FMEA 风险分析报告模板', category: '质量管理', tags: ['FMEA', '飞控', '风险'], agents: ['QUALITY', 'DECISION'] },
  { title: '无人机产线数字孪生建模指南', category: '数字孪生', tags: ['孪生', '仿真', '产线'], agents: ['SIMULATOR', 'DATA_ANALYST'] },
  { title: '合同网协议在无人机任务分配中的应用', category: '多智能体', tags: ['CNP', '调度', 'Agent'], agents: ['DISPATCHER', 'DECISION'] },
  { title: '民用无人机适航与合规检查清单', category: '合规管理', tags: ['适航', '合规', '检查'], agents: ['QUALITY', 'DECISION'] },
  { title: 'ESC 电调参数标定与老化测试', category: '测试工艺', tags: ['ESC', '电调', '老化'], agents: ['QUALITY'] },
  { title: 'GNSS 模块校准与环境干扰排查', category: '测试工艺', tags: ['GPS', 'GNSS', '校准'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: '图传系统联调与干扰测试规范', category: '测试工艺', tags: ['图传', 'RF', '联调'], agents: ['QUALITY'] },
  { title: '无人机零部件 WMS 仓储对接规范', category: '物流仓储', tags: ['WMS', '仓储', '拣配'], agents: ['DATA_ANALYST', 'PLANNER'] },
  { title: '产线 AGV 配送路径与节拍匹配', category: '物流仓储', tags: ['AGV', '配送', '节拍'], agents: ['DESIGNER', 'SCHEDULER', 'DISPATCHER'] },
  { title: '无人机生产看板 KPI 指标体系', category: '数据分析', tags: ['KPI', '看板', 'OEE'], agents: ['DATA_ANALYST'] },
  { title: '售后返修分析与设计反馈闭环', category: '质量管理', tags: ['返修', 'RMA', '闭环'], agents: ['QUALITY', 'DECISION'] },
];

const SMT_TOPICS: Array<{ title: string; category: string; tags: string[]; agents: string[] }> = [
  { title: 'SMT 贴片产线智能排程操作手册', category: '排程优化', tags: ['排程', '贴片', '甘特图'], agents: ['SCHEDULER'] },
  { title: '锡膏印刷工艺参数与 SPI 判定标准', category: '工艺标准', tags: ['印刷', '锡膏', 'SPI'], agents: ['QUALITY', 'SCHEDULER'] },
  { title: 'SPI 三维检测缺陷分类与处置', category: '质量检验', tags: ['SPI', '缺陷', 'SPC'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: '回流焊温区设置与炉温曲线验证', category: '工艺标准', tags: ['回流焊', '温区', '曲线'], agents: ['QUALITY', 'SCHEDULER'] },
  { title: 'AOI 光学检测误报分析与优化', category: '质量检验', tags: ['AOI', '误报', '算法'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: 'SMT 换线标准作业程序 SMED', category: '排程优化', tags: ['换线', 'SMED', '程序'], agents: ['SCHEDULER'] },
  { title: 'NPI 新产品 SMT 导入流程', category: '工程管理', tags: ['NPI', '导入', '试产'], agents: ['PLANNER', 'SCHEDULER'] },
  { title: '湿敏元件 MSD 管理与烘烤规范', category: '物料管理', tags: ['MSD', '烘烤', '防潮'], agents: ['QUALITY', 'PLANNER'] },
  { title: '钢网清洁、张力与寿命管理', category: '设备管理', tags: ['钢网', '清洁', '张力'], agents: ['SCHEDULER', 'QUALITY'] },
  { title: 'SMT 产线 OEE 分析与改善案例', category: '数据分析', tags: ['OEE', '停机', '改善'], agents: ['DATA_ANALYST'] },
  { title: 'SMT 批次追溯与条码关联规范', category: '质量管理', tags: ['追溯', '条码', '批次'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: 'SMT 首件检验与过程确认流程', category: '质量检验', tags: ['首件', 'FAI', '确认'], agents: ['QUALITY'] },
  { title: 'SMT 车间 ESD 静电防护管理', category: '合规管理', tags: ['ESD', '静电', '防护'], agents: ['QUALITY'] },
  { title: '高速贴片程序优化与贴装率提升', category: '工艺标准', tags: ['贴装', '程序', 'CT'], agents: ['SCHEDULER', 'DATA_ANALYST'] },
  { title: 'SMT 错料预防与料站复核机制', category: '质量管理', tags: ['错料', '料站', '复核'], agents: ['QUALITY', 'DISPATCHER'] },
  { title: 'SMT 产线平衡与瓶颈工序识别', category: '排程优化', tags: ['线平衡', '瓶颈', '节拍'], agents: ['SCHEDULER', 'PLANNER'] },
  { title: 'SMT 夜班排班与人员技能矩阵', category: '人员管理', tags: ['排班', '技能', '矩阵'], agents: ['SCHEDULER', 'DISPATCHER'] },
  { title: '贴片机 PM 保养计划与备件管理', category: '设备管理', tags: ['PM', '保养', '备件'], agents: ['SCHEDULER'] },
  { title: '0201/01005 微元件贴装工艺指南', category: '工艺标准', tags: ['0201', '微元件', '贴装'], agents: ['SCHEDULER', 'QUALITY'] },
  { title: 'BGA 返修与 X-Ray 检测规范', category: '维修工艺', tags: ['BGA', 'X-Ray', '返修'], agents: ['QUALITY'] },
  { title: '选择性焊接工艺参数手册', category: '工艺标准', tags: ['选焊', '通孔', '参数'], agents: ['SCHEDULER', 'QUALITY'] },
  { title: '三防涂覆工艺与 IPC 标准对照', category: '工艺标准', tags: ['三防', '涂覆', 'IPC'], agents: ['QUALITY'] },
  { title: 'ICT/FCT 测试治具设计与管理', category: '测试工艺', tags: ['ICT', 'FCT', '治具'], agents: ['QUALITY', 'SIMULATOR'] },
  { title: 'SMT 良率分析与缺陷 Pareto 方法', category: '数据分析', tags: ['良率', 'Pareto', '缺陷'], agents: ['DATA_ANALYST', 'QUALITY'] },
  { title: '智能料塔与 JIT 物料配送', category: '物流仓储', tags: ['料塔', 'JIT', '配送'], agents: ['DISPATCHER', 'PLANNER'] },
  { title: 'SMT 工单优先级与紧急插单规则', category: '排程优化', tags: ['插单', '优先级', '工单'], agents: ['SCHEDULER', 'DISPATCHER'] },
  { title: 'SMT 与 AI 排程员 Agent 协同指南', category: '多智能体', tags: ['Agent', '排程', '协同'], agents: ['SCHEDULER', 'DISPATCHER', 'DECISION'] },
];

const EV_TOPICS: Array<{ title: string; category: string; tags: string[]; agents: string[] }> = [
  { title: '动力电池模组组装工艺规范', category: '制造工艺', tags: ['电池', '模组', '组装'], agents: ['PLANNER', 'QUALITY'] },
  { title: '电芯分选、配组与一致性标准', category: '质量检验', tags: ['电芯', '分选', '配组'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: 'BMS 功能测试与安全策略验证', category: '测试工艺', tags: ['BMS', '安全', '测试'], agents: ['QUALITY', 'SIMULATOR'] },
  { title: '驱动电机总成装配与扭力管控', category: '装配工艺', tags: ['电机', '扭力', '总成'], agents: ['SCHEDULER', 'QUALITY'] },
  { title: '整车 VIN 追溯与关键件绑定规范', category: '质量管理', tags: ['VIN', '追溯', '绑定'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: '总装线 Andon 异常响应机制', category: '生产管理', tags: ['Andon', '停线', '响应'], agents: ['DISPATCHER', 'SCHEDULER'] },
  { title: '冲压件尺寸检测与 SPC 控制', category: '质量检验', tags: ['冲压', 'SPC', '尺寸'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: '车身焊接机器人参数与焊缝质量', category: '制造工艺', tags: ['焊接', '机器人', '焊缝'], agents: ['QUALITY', 'SIMULATOR'] },
  { title: '涂装车间 VOC 排放与膜厚控制', category: '环保工艺', tags: ['涂装', 'VOC', '膜厚'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: 'Tier1/Tier2 供应链协同计划', category: '供应链', tags: ['供应链', 'Tier', '协同'], agents: ['PLANNER', 'DISPATCHER'] },
  { title: '二级供应商审核与准入标准', category: '供应链', tags: ['供应商', '审核', '准入'], agents: ['QUALITY', 'DECISION'] },
  { title: '热管理系统装配与泄漏测试', category: '装配工艺', tags: ['热管理', '泄漏', '测试'], agents: ['QUALITY', 'SCHEDULER'] },
  { title: '充电接口检测与国标符合性', category: '测试工艺', tags: ['充电', '国标', '检测'], agents: ['QUALITY'] },
  { title: '整车 EOL 下线检测流程', category: '测试工艺', tags: ['EOL', '下线', '检测'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: '高压系统安全操作与互锁规范', category: '安全管理', tags: ['高压', '安全', '互锁'], agents: ['QUALITY', 'DECISION'] },
  { title: '轻量化材料应用与成本平衡分析', category: '工程管理', tags: ['轻量化', '材料', '成本'], agents: ['PLANNER', 'DATA_ANALYST'] },
  { title: '电驱系统 NVH 测试与优化', category: '测试工艺', tags: ['NVH', '电驱', '优化'], agents: ['SIMULATOR', 'QUALITY'] },
  { title: '整车软件 OTA 发布与回滚流程', category: '软件管理', tags: ['OTA', '软件', '回滚'], agents: ['DECISION', 'DATA_ANALYST'] },
  { title: '零部件 APQP 与 PPAP 提交指南', category: '质量管理', tags: ['APQP', 'PPAP', '零部件'], agents: ['QUALITY', 'PLANNER'] },
  { title: '八年质保数据追溯与索赔分析', category: '质量管理', tags: ['质保', '索赔', '追溯'], agents: ['QUALITY', 'DATA_ANALYST'] },
  { title: '退役电芯梯次利用评估标准', category: '可持续', tags: ['梯次', '回收', '评估'], agents: ['PLANNER', 'DECISION'] },
  { title: '总装产线节拍优化与工位平衡', category: '排程优化', tags: ['节拍', '工位', '平衡'], agents: ['DESIGNER', 'SCHEDULER', 'PLANNER'] },
  { title: '新能源汽车多 Agent 协同决策案例', category: '多智能体', tags: ['Agent', '协同', '决策'], agents: ['DECISION', 'DISPATCHER', 'PLANNER'] },
];

const PLATFORM_TOPICS: Array<{ title: string; category: string; tags: string[]; agents: string[] }> = [
  { title: 'AI Agent Studio 工业多智能体架构白皮书', category: '平台架构', tags: ['Agent', '架构', 'Studio'], agents: ['DISPATCHER', 'DECISION'] },
  { title: '工业 RAG 知识库建设与向量检索最佳实践', category: '知识管理', tags: ['RAG', '向量', '知识库'], agents: ['DATA_ANALYST', 'DECISION'] },
  { title: 'Contract Net 合同网协议任务分配指南', category: '多智能体', tags: ['CNP', '合同网', '分配'], agents: ['DISPATCHER', 'DECISION'] },
];

function slugify(title: string, index: number): string {
  const num = String(index + 1).padStart(3, '0');
  return `doc-${num}-${title.slice(0, 12).replace(/[^\u4e00-\u9fa5a-zA-Z0-9]/g, '')}.md`;
}

function buildDocs(
  industry: IndustryCode,
  scenarioType: ScenarioCode,
  topics: Array<{ title: string; category: string; tags: string[]; agents: string[] }>,
  startIndex: number,
): IndustryDocDef[] {
  return topics.map((t, i) => ({
    id: `industry-${industry.toLowerCase()}-${String(startIndex + i + 1).padStart(3, '0')}`,
    fileName: slugify(t.title, startIndex + i),
    title: t.title,
    industry,
    scenarioType,
    category: t.category,
    tags: t.tags,
    relatedAgents: t.agents,
  }));
}

export const INDUSTRY_DOCUMENTS: IndustryDocDef[] = [
  ...buildDocs('UAV', 'UAV_MANUFACTURING', UAV_TOPICS, 0),
  ...buildDocs('SMT', 'SMT_MANUFACTURING', SMT_TOPICS, UAV_TOPICS.length),
  ...buildDocs('EV', 'EV_MANUFACTURING', EV_TOPICS, UAV_TOPICS.length + SMT_TOPICS.length),
  ...buildDocs('PLATFORM', null, PLATFORM_TOPICS, UAV_TOPICS.length + SMT_TOPICS.length + EV_TOPICS.length),
];

export const INDUSTRY_LABELS: Record<IndustryCode, string> = {
  UAV: '无人机制造',
  SMT: 'SMT 电子制造',
  EV: '新能源汽车制造',
  PLATFORM: '平台与多智能体',
};

export { generateDocumentContent } from './industry-doc-generator';
```

---

<a id="file-172"></a>

## 文件 172 : `packages/database/src/industry-doc-generator.ts`

```typescript
import type { IndustryDocDef } from './industry-catalog';
import { INDUSTRY_LABELS } from './industry-catalog';
import { CONTENT_BY_TITLE, type RawDocContent } from './doc-content-data';
import { synthesizeDocContent } from './content-factory';

const AGENT_MAP: Record<string, string> = {
  PLANNER: 'AI 计划员',
  DATA_ANALYST: 'AI 数据员',
  SCHEDULER: 'AI 排程员',
  DISPATCHER: 'AI 调度员',
  QUALITY: 'AI 质量员',
  SIMULATOR: 'AI 仿真员',
  DECISION: '协同决策员',
};

function getContent(doc: IndustryDocDef): RawDocContent {
  return CONTENT_BY_TITLE[doc.title] ?? synthesizeDocContent(doc);
}

function scenarioLabel(doc: IndustryDocDef): string {
  if (!doc.scenarioType) return 'AI Agent Studio 平台';
  return { UAV_MANUFACTURING: '无人机制造', SMT_MANUFACTURING: 'SMT 制造', EV_MANUFACTURING: '新能源汽车制造' }[doc.scenarioType];
}

export function generateDocumentContent(doc: IndustryDocDef): string {
  const c = getContent(doc);
  const agents = doc.relatedAgents.map((a) => AGENT_MAP[a] || a);
  const scenario = scenarioLabel(doc);

  return `# ${doc.title}

> **文档编号**：\`${doc.id}\`  
> **行业**：${INDUSTRY_LABELS[doc.industry]} · **分类**：${doc.category} · **标签**：${doc.tags.join('、')}  
> **关联场景**：${scenario} · **关联 Agent**：${agents.join('、')}

---

## 1. 文档概述

${c.overview}

## 2. 背景与目的

${c.background}

## 3. 适用范围

${c.scope.map((s) => `- ${s}`).join('\n')}

## 4. 详细操作流程

${c.processSteps.map((s, i) => `${i + 1}. ${s}`).join('\n')}

## 5. 关键工艺/控制参数

| 参数名称 | 标准/目标值 | 说明 |
|----------|-------------|------|
${c.parameters.map(([n, v, note]) => `| ${n} | ${v} | ${note} |`).join('\n')}

## 6. 引用标准与规范

${c.standards.map((s) => `- ${s}`).join('\n')}

## 7. 设备、系统与工具

${c.equipment.map((e) => `- ${e}`).join('\n')}

## 8. 常见问题与处置

| 问题现象 | 可能原因 | 纠正措施 |
|----------|----------|----------|
${c.issues.map(([p, cause, action]) => `| ${p} | ${cause} | ${action} |`).join('\n')}

## 9. 术语解释

${c.terms.map(([t, d]) => `- **${t}**：${d}`).join('\n')}

## 10. 现场检查清单

${c.checklist.map((item) => `- [ ] ${item}`).join('\n')}

## 11. 典型案例

${c.caseStudy}

## 12. AI Agent 协同指引

| Agent | 在本主题中的具体任务 |
|-------|----------------------|
${doc.relatedAgents.map((a) => {
    const label = AGENT_MAP[a] || a;
    const task = c.agentHint?.[a] ?? `基于本文档执行「${doc.title}」相关的${doc.category}分析与建议输出`;
    return `| ${label} | ${task} |`;
  }).join('\n')}

## 13. RAG 检索增强说明

- 知识库 ID：\`industry-kb-main\`
- 推荐 Query：${doc.tags.map((t) => `\`${t}\``).join(' ')} \`${doc.title.slice(0, 8)}\`
- 与 Workflow RAG 节点、Agent 对话 RAG 自动关联

---

*本文档由 AI Agent Studio 行业知识库维护，版本随 ECN/工艺变更同步更新。*
`;
}
```

---

<a id="file-173"></a>

## 文件 173 : `packages/database/src/ingest.ts`

```typescript
export { ingestIndustryDocuments, INDUSTRY_KB_ID } from './ingest-industry-docs';
```

---

<a id="file-174"></a>

## 文件 174 : `packages/database/src/ingest-industry-docs.ts`

```typescript
import * as fs from 'fs';
import * as path from 'path';
import { PrismaClient } from '@prisma/client';
import { chunkText, simpleEmbedding } from '@ai-studio/utils';
import {
  INDUSTRY_DOCUMENTS,
  generateDocumentContent,
  type IndustryDocDef,
} from './industry-catalog';

const prisma = new PrismaClient();

import { INDUSTRY_KB_ID } from './constants';

export { INDUSTRY_KB_ID };

function resolveKnowledgeBaseDir(): string {
  const candidates = [
    path.resolve(process.cwd(), 'knowledge-base', 'industry'),
    path.resolve(process.cwd(), '..', '..', 'knowledge-base', 'industry'),
    path.resolve(__dirname, '..', '..', '..', 'knowledge-base', 'industry'),
    path.resolve(__dirname, '..', '..', 'knowledge-base', 'industry'),
  ];
  for (const dir of candidates) {
    const parent = path.dirname(dir);
    if (fs.existsSync(parent) || dir.includes('knowledge-base')) {
      return dir;
    }
  }
  return candidates[0];
}

function organizeDocument(doc: IndustryDocDef): {
  category: string;
  tags: string[];
  summary: string;
  organizedBy: string;
} {
  const agentMap: Record<string, string> = {
    PLANNER: 'AI 计划员',
    DATA_ANALYST: 'AI 数据员',
    SCHEDULER: 'AI 排程员',
    DISPATCHER: 'AI 调度员',
    QUALITY: 'AI 质量员',
    SIMULATOR: 'AI 仿真员',
    DECISION: '协同决策员',
  };
  const primaryAgent = doc.relatedAgents[0] || 'DATA_ANALYST';
  const organizer = agentMap[primaryAgent] || 'AI 知识整理员';

  return {
    category: doc.category,
    tags: [...new Set([...doc.tags, doc.industry, doc.category])],
    summary: `【${doc.industry}】${doc.title} — 适用于${doc.relatedAgents.map((a) => agentMap[a] || a).join('、')}协同处理。`,
    organizedBy: organizer,
  };
}

async function ingestDocument(
  kbId: string,
  doc: IndustryDocDef,
  storageDir: string,
  chunkSize: number,
  chunkOverlap: number,
): Promise<number> {
  const content = generateDocumentContent(doc);
  fs.mkdirSync(storageDir, { recursive: true });
  const filePath = path.join(storageDir, doc.fileName);
  fs.writeFileSync(filePath, content, 'utf8');

  const relativePath = `/knowledge-base/industry/${doc.fileName}`;
  const organized = organizeDocument(doc);

  await prisma.documentChunk.deleteMany({ where: { documentId: doc.id } });

  const document = await prisma.document.upsert({
    where: { id: doc.id },
    update: {
      name: doc.title,
      type: 'MD',
      size: Buffer.byteLength(content, 'utf8'),
      path: relativePath,
      status: 'PROCESSING',
      industry: doc.industry,
      category: organized.category,
      tags: organized.tags,
      scenarioType: doc.scenarioType ?? undefined,
      summary: organized.summary,
      source: 'AI Agent Studio 行业知识库',
      organizedBy: organized.organizedBy,
      knowledgeBaseId: kbId,
    },
    create: {
      id: doc.id,
      name: doc.title,
      type: 'MD',
      size: Buffer.byteLength(content, 'utf8'),
      path: relativePath,
      status: 'PROCESSING',
      industry: doc.industry,
      category: organized.category,
      tags: organized.tags,
      scenarioType: doc.scenarioType ?? undefined,
      summary: organized.summary,
      source: 'AI Agent Studio 行业知识库',
      organizedBy: organized.organizedBy,
      knowledgeBaseId: kbId,
    },
  });

  const chunks = chunkText(content, chunkSize, chunkOverlap);
  if (chunks.length > 0) {
    await prisma.documentChunk.createMany({
      data: chunks.map((text, i) => ({
        content: text,
        embedding: simpleEmbedding(text),
        metadata: {
          documentId: doc.id,
          fileName: doc.fileName,
          chunkIndex: i,
          totalChunks: chunks.length,
          industry: doc.industry,
          category: organized.category,
          title: doc.title,
        },
        documentId: document.id,
      })),
    });
  }

  await prisma.document.update({
    where: { id: doc.id },
    data: { status: 'COMPLETED', chunkCount: chunks.length },
  });

  return chunks.length;
}

export async function ingestIndustryDocuments(options: {
  userId: string;
  force?: boolean;
}): Promise<{ documentCount: number; chunkCount: number }> {
  const storageDir = resolveKnowledgeBaseDir();
  const chunkSize = 512;
  const chunkOverlap = 50;

  const kb = await prisma.knowledgeBase.upsert({
    where: { id: INDUSTRY_KB_ID },
    update: {
      name: '工业行业知识库',
      description: `AI Agent Studio 内置行业 RAG 知识库，含 ${INDUSTRY_DOCUMENTS.length} 份无人机/SMT/新能源汽车/多智能体文档，与工业场景和 Agent 模板关联。`,
      industry: 'INDUSTRIAL',
      isSystem: true,
      linkedAgentCategories: ['PLANNER', 'DATA_ANALYST', 'SCHEDULER', 'DISPATCHER', 'DESIGNER', 'QUALITY', 'SIMULATOR', 'DECISION'],
    },
    create: {
      id: INDUSTRY_KB_ID,
      name: '工业行业知识库',
      description: `AI Agent Studio 内置行业 RAG 知识库，含 ${INDUSTRY_DOCUMENTS.length} 份无人机/SMT/新能源汽车/多智能体文档，与工业场景和 Agent 模板关联。`,
      industry: 'INDUSTRIAL',
      isSystem: true,
      linkedAgentCategories: ['PLANNER', 'DATA_ANALYST', 'SCHEDULER', 'DISPATCHER', 'DESIGNER', 'QUALITY', 'SIMULATOR', 'DECISION'],
      userId: options.userId,
      chunkSize,
      chunkOverlap,
    },
  });

  const existing = await prisma.document.count({ where: { knowledgeBaseId: kb.id } });
  if (existing >= INDUSTRY_DOCUMENTS.length && !options.force) {
    const chunkCount = await prisma.documentChunk.count({
      where: { document: { knowledgeBaseId: kb.id } },
    });
    console.log(`   行业知识库已存在 ${existing} 份文档，跳过入库（使用 force 可重建）`);
    return { documentCount: existing, chunkCount };
  }

  if (options.force) {
    await prisma.documentChunk.deleteMany({
      where: { document: { knowledgeBaseId: kb.id } },
    });
    await prisma.document.deleteMany({ where: { knowledgeBaseId: kb.id } });
  }

  let totalChunks = 0;
  for (let i = 0; i < INDUSTRY_DOCUMENTS.length; i++) {
    const doc = INDUSTRY_DOCUMENTS[i];
    const n = await ingestDocument(kb.id, doc, storageDir, chunkSize, chunkOverlap);
    totalChunks += n;
    if ((i + 1) % 10 === 0 || i === INDUSTRY_DOCUMENTS.length - 1) {
      console.log(`   已入库 ${i + 1}/${INDUSTRY_DOCUMENTS.length} 份文档...`);
    }
  }

  await prisma.agent.updateMany({
    where: { isTemplate: true },
    data: { knowledgeBaseId: kb.id },
  });

  return { documentCount: INDUSTRY_DOCUMENTS.length, chunkCount: totalChunks };
}

async function runCli() {
  const admin = await prisma.user.findFirst({ where: { email: 'admin@aistudio.local' } });
  if (!admin) {
    console.error('请先运行 pnpm db:seed 创建管理员账号');
    process.exit(1);
  }
  const result = await ingestIndustryDocuments({ userId: admin.id, force: process.argv.includes('--force') });
  console.log(`✅ 入库完成: ${result.documentCount} 份文档, ${result.chunkCount} 个切片`);
}

if (require.main === module) {
  runCli()
    .catch(async (e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
```

---

<a id="file-175"></a>

## 文件 175 : `packages/database/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

<a id="file-176"></a>

## 文件 176 : `packages/rag/package.json`

```json
{
  "name": "@ai-studio/rag",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@ai-studio/types": "workspace:*",
    "@ai-studio/utils": "workspace:*"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "rimraf": "^6.0.1"
  }
}
```

---

<a id="file-177"></a>

## 文件 177 : `packages/rag/src/index.ts`

```typescript
import { chunkText, simpleEmbedding, cosineSimilarity } from '@ai-studio/utils';

export interface DocumentChunkData {
  id: string;
  content: string;
  embedding: number[];
  metadata: Record<string, unknown>;
}

export interface SearchResult {
  chunk: DocumentChunkData;
  score: number;
}

/** RAG 文档处理器 */
export class DocumentProcessor {
  processDocument(
    text: string,
    options: { chunkSize?: number; chunkOverlap?: number; metadata?: Record<string, unknown> } = {},
  ): DocumentChunkData[] {
    const { chunkSize = 512, chunkOverlap = 50, metadata = {} } = options;
    const chunks = chunkText(text, chunkSize, chunkOverlap);

    return chunks.map((content, index) => ({
      id: `chunk-${index}`,
      content,
      embedding: simpleEmbedding(content),
      metadata: { ...metadata, chunkIndex: index, totalChunks: chunks.length },
    }));
  }

  /** 模拟 PDF/DOCX/Excel 文本提取 */
  extractText(fileName: string, fileType: string): string {
    const templates: Record<string, string> = {
      PDF: `[${fileName}] 这是一份工业制造领域的技术文档。内容涵盖 MPS/MRP 生产计划方法论、物料需求计算规则、产能约束分析等核心知识点。`,
      DOCX: `[${fileName}] 企业标准操作规程(SOP)文档。详细描述了 SMT 贴片产线的操作流程、换线标准、质量控制检查点等内容。`,
      EXCEL: `[${fileName}] 生产数据报表。包含月度产能统计、设备利用率、良品率趋势、物料消耗明细等结构化数据。`,
    };

    return templates[fileType] || `[${fileName}] 文档内容已提取。`;
  }
}

/** RAG 向量检索引擎 */
export class VectorSearchEngine {
  private index: DocumentChunkData[] = [];

  addChunks(chunks: DocumentChunkData[]): void {
    this.index.push(...chunks);
  }

  removeByDocument(documentId: string): void {
    this.index = this.index.filter((c) => c.metadata.documentId !== documentId);
  }

  search(query: string, topK = 5): SearchResult[] {
    const queryEmbedding = simpleEmbedding(query);

    const results = this.index
      .map((chunk) => ({
        chunk,
        score: cosineSimilarity(queryEmbedding, chunk.embedding),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);

    return results;
  }

  getStats(): { totalChunks: number; dimensions: number } {
    return {
      totalChunks: this.index.length,
      dimensions: this.index[0]?.embedding.length || 128,
    };
  }
}

/** 从数据库切片列表中检索（持久化 RAG） */
export function searchChunks(
  chunks: DocumentChunkData[],
  query: string,
  topK = 5,
): SearchResult[] {
  const queryEmbedding = simpleEmbedding(query);
  return chunks
    .map((chunk) => ({
      chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

/** RAG 问答链 */
export class RAGChain {
  private searchEngine: VectorSearchEngine;

  constructor(searchEngine?: VectorSearchEngine) {
    this.searchEngine = searchEngine || new VectorSearchEngine();
  }

  retrieve(query: string, topK = 3): string {
    const results = this.searchEngine.search(query, topK);

    if (results.length === 0) {
      return '未找到相关知识。';
    }

    return results
      .map((r, i) => `[${i + 1}] (相关度: ${(r.score * 100).toFixed(1)}%) ${r.chunk.content}`)
      .join('\n\n');
  }

  buildPrompt(query: string, context: string): string {
    return `基于以下知识库内容回答问题。如果知识库中没有相关信息，请说明。

## 知识库内容
${context}

## 用户问题
${query}

## 回答`;
  }
}

export { DocumentProcessor as default };
```

---

<a id="file-178"></a>

## 文件 178 : `packages/rag/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

---

<a id="file-179"></a>

## 文件 179 : `packages/types/package.json`

```json
{
  "name": "@ai-studio/types",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "clean": "rimraf dist"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "rimraf": "^6.0.1"
  }
}
```

---

<a id="file-180"></a>

## 文件 180 : `packages/types/src/index.ts`

```typescript
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  accessToken: string;
  user: UserProfile;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'USER' | 'OPERATOR';
  avatar?: string;
}

export interface CreateAgentDto {
  name: string;
  description?: string;
  systemPrompt: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  tools?: string[];
  category?: AgentCategory;
  workflowId?: string;
}

export interface UpdateAgentDto extends Partial<CreateAgentDto> {
  status?: AgentStatus;
}

export type AgentCategory =
  | 'PLANNER'
  | 'DATA_ANALYST'
  | 'SCHEDULER'
  | 'DISPATCHER'
  | 'DESIGNER'
  | 'QUALITY'
  | 'SIMULATOR'
  | 'DECISION'
  | 'CUSTOM';

export type AgentStatus =
  | 'IDLE'
  | 'THINKING'
  | 'EXECUTING'
  | 'WAITING'
  | 'ERROR'
  | 'OFFLINE';

export interface AgentResponse {
  id: string;
  name: string;
  description?: string;
  systemPrompt: string;
  model: string;
  temperature: number;
  maxTokens: number;
  tools: string[];
  status: AgentStatus;
  category: AgentCategory;
  isTemplate: boolean;
  workflowId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWorkflowDto {
  name: string;
  description?: string;
  nodes?: WorkflowNode[];
  edges?: WorkflowEdge[];
}

export interface UpdateWorkflowDto extends Partial<CreateWorkflowDto> {
  status?: WorkflowStatus;
}

export type WorkflowStatus = 'DRAFT' | 'ACTIVE' | 'PAUSED' | 'ARCHIVED';

export interface WorkflowNode {
  id: string;
  type: 'start' | 'end' | 'agent' | 'http' | 'condition' | 'rag' | 'tool';
  position: { x: number; y: number };
  data: Record<string, unknown>;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export interface WorkflowResponse {
  id: string;
  name: string;
  description?: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  status: WorkflowStatus;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateKnowledgeBaseDto {
  name: string;
  description?: string;
  embeddingModel?: string;
  chunkSize?: number;
  chunkOverlap?: number;
}

export interface KnowledgeBaseResponse {
  id: string;
  name: string;
  description?: string;
  embeddingModel: string;
  chunkSize: number;
  chunkOverlap: number;
  documentCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface DocumentResponse {
  id: string;
  name: string;
  type: 'PDF' | 'DOCX' | 'EXCEL' | 'TXT' | 'MD';
  size: number;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
  chunkCount: number;
  createdAt: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system' | 'tool';
  content: string;
}

export interface ChatRequest {
  agentId: string;
  messages: ChatMessage[];
  stream?: boolean;
}

export interface ChatResponse {
  content: string;
  tokens: number;
  toolCalls?: ToolCallInfo[];
}

export interface ToolCallInfo {
  id: string;
  toolName: string;
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  status: 'pending' | 'running' | 'success' | 'failed';
}

export interface AgentCollaborationEvent {
  type: 'agent_thinking' | 'agent_executing' | 'agent_message' | 'tool_call' | 'task_assigned' | 'status_sync';
  agentId: string;
  agentName: string;
  data: Record<string, unknown>;
  timestamp: string;
}

export interface DashboardMetrics {
  totalAgents: number;
  activeAgents: number;
  totalTasks: number;
  completedTasks: number;
  totalTokens: number;
  apiCalls: number;
  knowledgeBases: number;
  documents: number;
}

export interface ScenarioResponse {
  id: string;
  name: string;
  type: 'UAV_MANUFACTURING' | 'SMT_MANUFACTURING' | 'EV_MANUFACTURING';
  description?: string;
  config: Record<string, unknown>;
  data: Record<string, unknown>;
  status: string;
}

export interface LogEntry {
  id: string;
  level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
  message: string;
  agentId?: string;
  taskId?: string;
  createdAt: string;
}

export interface WorkflowExecutionRequest {
  workflowId: string;
  input?: Record<string, unknown>;
}

export interface WorkflowExecutionResult {
  executionId: string;
  status: 'running' | 'completed' | 'failed';
  steps: WorkflowStepResult[];
  output?: Record<string, unknown>;
}

export interface WorkflowStepResult {
  nodeId: string;
  nodeType: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped';
  input?: Record<string, unknown>;
  output?: Record<string, unknown>;
  duration?: number;
  logs: string[];
}

export interface ContractNetBid {
  agentId: string;
  agentName: string;
  taskId: string;
  bidScore: number;
  estimatedTime: number;
  capabilities: string[];
}

export interface ContractNetAssignment {
  taskId: string;
  assignedAgentId: string;
  assignedAgentName: string;
  bids: ContractNetBid[];
  reason: string;
}
```

---

<a id="file-181"></a>

## 文件 181 : `packages/types/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

---

<a id="file-182"></a>

## 文件 182 : `packages/ui/package.json`

```json
{
  "name": "@ai-studio/ui",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "rimraf": "^6.0.1"
  }
}
```

---

<a id="file-183"></a>

## 文件 183 : `packages/ui/src/index.ts`

```typescript
export { cn } from './utils';
```

---

<a id="file-184"></a>

## 文件 184 : `packages/ui/src/utils.ts`

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

<a id="file-185"></a>

## 文件 185 : `packages/ui/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

---

<a id="file-186"></a>

## 文件 186 : `packages/utils/package.json`

```json
{
  "name": "@ai-studio/utils",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@ai-studio/types": "workspace:*"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "rimraf": "^6.0.1",
    "@types/node": "^22.10.2"
  }
}
```

---

<a id="file-187"></a>

## 文件 187 : `packages/utils/src/index.ts`

```typescript
/** 格式化文件大小 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

/** 格式化日期时间 */
export function formatDateTime(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

/** 生成唯一 ID */
export function generateId(prefix = ''): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return prefix ? `${prefix}-${timestamp}-${random}` : `${timestamp}-${random}`;
}

/** 延迟函数 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** 文本切片 - 用于 RAG 文档处理 */
export function chunkText(
  text: string,
  chunkSize = 512,
  overlap = 50,
): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    chunks.push(text.slice(start, end));
    start += chunkSize - overlap;
  }

  return chunks;
}

/** 计算余弦相似度 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;

  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const denominator = Math.sqrt(normA) * Math.sqrt(normB);
  return denominator === 0 ? 0 : dotProduct / denominator;
}

/** 简单哈希 embedding（本地开发用，生产环境应使用真实 embedding API） */
export function simpleEmbedding(text: string, dimensions = 128): number[] {
  const embedding = new Array(dimensions).fill(0);
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    embedding[i % dimensions] += charCode / 1000;
  }
  const norm = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
  return norm === 0 ? embedding : embedding.map((val) => val / norm);
}

/** 截断文本 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

/** Agent 类别中文名 */
export const AGENT_CATEGORY_LABELS: Record<string, string> = {
  PLANNER: 'AI 计划员',
  DATA_ANALYST: 'AI 数据员',
  SCHEDULER: 'AI 排程员',
  DISPATCHER: 'AI 调度员',
  QUALITY: 'AI 质量员',
  SIMULATOR: 'AI 仿真员',
  DECISION: '协同决策员',
  CUSTOM: '自定义 Agent',
};

/** Agent 状态中文名 */
export const AGENT_STATUS_LABELS: Record<string, string> = {
  IDLE: '空闲',
  THINKING: '思考中',
  EXECUTING: '执行中',
  WAITING: '等待中',
  ERROR: '错误',
  OFFLINE: '离线',
};

/** 场景类型中文名 */
export const SCENARIO_TYPE_LABELS: Record<string, string> = {
  UAV_MANUFACTURING: '无人机制造',
  SMT_MANUFACTURING: 'SMT 制造',
  EV_MANUFACTURING: '新能源汽车制造',
};
```

---

<a id="file-188"></a>

## 文件 188 : `packages/utils/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

---

<a id="file-189"></a>

## 文件 189 : `packages/workflows/package.json`

```json
{
  "name": "@ai-studio/workflows",
  "version": "1.0.0",
  "private": true,
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "clean": "rimraf dist"
  },
  "dependencies": {
    "@ai-studio/types": "workspace:*",
    "@ai-studio/agents": "workspace:*",
    "@ai-studio/utils": "workspace:*"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "rimraf": "^6.0.1"
  }
}
```

---

<a id="file-190"></a>

## 文件 190 : `packages/workflows/src/index.ts`

```typescript
import type { WorkflowEdge, WorkflowNode, WorkflowExecutionResult, WorkflowStepResult } from '@ai-studio/types';
import { DeepSeekClient } from '@ai-studio/agents';
import { generateId, sleep } from '@ai-studio/utils';

export interface WorkflowDefinition {
  id: string;
  name: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}

export type StepCallback = (step: WorkflowStepResult) => void;

/** LangGraph 风格的工作流执行引擎 */
export class WorkflowEngine {
  private deepseek: DeepSeekClient;

  constructor() {
    this.deepseek = new DeepSeekClient();
  }

  async execute(
    workflow: WorkflowDefinition,
    input: Record<string, unknown> = {},
    onStep?: StepCallback,
    options?: {
      ragSearch?: (knowledgeBaseId: string, query: string) => Promise<Array<{ content: string; score: number }>>;
    },
  ): Promise<WorkflowExecutionResult> {
    const executionId = generateId('exec');
    const steps: WorkflowStepResult[] = [];
    let context = { ...input };

    const startNode = workflow.nodes.find((n) => n.type === 'start');
    if (!startNode) {
      return { executionId, status: 'failed', steps, output: { error: 'No start node found' } };
    }

    const visited = new Set<string>();
    let currentNodeId: string | null = startNode.id;

    while (currentNodeId) {
      if (visited.has(currentNodeId)) break;
      visited.add(currentNodeId);

      const node = workflow.nodes.find((n) => n.id === currentNodeId);
      if (!node) break;

      const step = await this.executeNode(node, context, options);
      steps.push(step);
      onStep?.(step);

      if (step.status === 'failed') {
        return { executionId, status: 'failed', steps, output: context };
      }

      if (step.output) {
        context = { ...context, ...step.output };
      }

      if (node.type === 'end') break;

      currentNodeId = this.getNextNode(node.id, workflow.edges, context);
    }

    return { executionId, status: 'completed', steps, output: context };
  }

  private async executeNode(
    node: WorkflowNode,
    context: Record<string, unknown>,
    options?: {
      ragSearch?: (knowledgeBaseId: string, query: string) => Promise<Array<{ content: string; score: number }>>;
    },
  ): Promise<WorkflowStepResult> {
    const startTime = Date.now();
    const logs: string[] = [];

    try {
      logs.push(`[${node.type}] 开始执行节点: ${node.data.label || node.id}`);

      switch (node.type) {
        case 'start':
          return this.completeStep(node, context, logs, startTime);

        case 'end':
          logs.push('工作流执行完成');
          return this.completeStep(node, context, logs, startTime);

        case 'agent': {
          const agentName = (node.data.label as string) || 'Agent';
          logs.push(`调用 Agent: ${agentName}`);
          await sleep(500);

          const response = await this.deepseek.chat([
            { role: 'system', content: `你是 ${agentName}，请处理以下任务。` },
            { role: 'user', content: JSON.stringify(context) },
          ]);

          logs.push(`Agent 响应: ${response.content.slice(0, 100)}...`);
          return this.completeStep(node, { agentResponse: response.content, tokens: response.tokens }, logs, startTime);
        }

        case 'rag': {
          const kbId = (node.data.knowledgeBaseId as string) || 'industry-kb-main';
          const query = (context.query as string) || (node.data.query as string) || '工业制造生产计划';
          logs.push(`RAG 检索: KB=${kbId}, query=${query}`);
          await sleep(200);

          if (options?.ragSearch) {
            const results = await options.ragSearch(kbId, query);
            logs.push(`命中 ${results.length} 条知识片段`);
            return this.completeStep(
              node,
              {
                ragResults: results,
                ragContext: results.map((r) => r.content).join('\n\n'),
                knowledgeBaseId: kbId,
              },
              logs,
              startTime,
            );
          }

          return this.completeStep(node, { ragResults: [], ragContext: '' }, logs, startTime);
        }

        case 'http': {
          const url = (node.data.url as string) || 'http://127.0.0.1:3001/health';
          logs.push(`HTTP 请求: ${url}`);
          await sleep(200);
          return this.completeStep(node, { httpResponse: { status: 200 } }, logs, startTime);
        }

        case 'condition': {
          const condition = (node.data.condition as string) || 'true';
          logs.push(`条件判断: ${condition}`);
          const result = condition === 'approved' || condition === 'true';
          return this.completeStep(node, { conditionResult: result }, logs, startTime);
        }

        case 'tool': {
          const toolName = (node.data.toolName as string) || 'unknown';
          logs.push(`调用 Tool: ${toolName}`);
          await sleep(400);
          return this.completeStep(node, { toolResult: `${toolName} 执行成功` }, logs, startTime);
        }

        default:
          logs.push(`未知节点类型: ${node.type}`);
          return this.completeStep(node, {}, logs, startTime);
      }
    } catch (error) {
      logs.push(`错误: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return {
        nodeId: node.id,
        nodeType: node.type,
        status: 'failed',
        duration: Date.now() - startTime,
        logs,
      };
    }
  }

  private completeStep(
    node: WorkflowNode,
    output: Record<string, unknown>,
    logs: string[],
    startTime: number,
  ): WorkflowStepResult {
    return {
      nodeId: node.id,
      nodeType: node.type,
      status: 'completed',
      output,
      duration: Date.now() - startTime,
      logs,
    };
  }

  private getNextNode(
    currentId: string,
    edges: WorkflowEdge[],
    context: Record<string, unknown>,
  ): string | null {
    const outEdges = edges.filter((e) => e.source === currentId);
    if (outEdges.length === 0) return null;
    if (outEdges.length === 1) return outEdges[0].target;

    if (context.conditionResult === false) {
      const falseEdge = outEdges.find((e) => e.label === 'false' || e.label === '否');
      return falseEdge?.target || outEdges[1]?.target || null;
    }

    return outEdges[0].target;
  }
}

export { WorkflowEngine as default };
```

---

<a id="file-191"></a>

## 文件 191 : `packages/workflows/tsconfig.json`

```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
```

---

<a id="file-192"></a>

## 文件 192 : `pnpm-lock.yaml`

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    devDependencies:
      dotenv-cli:
        specifier: ^8.0.0
        version: 8.0.0

  apps/api:
    dependencies:
      '@ai-studio/agents':
        specifier: workspace:*
        version: link:../../packages/agents
      '@ai-studio/database':
        specifier: workspace:*
        version: link:../../packages/database
      '@ai-studio/rag':
        specifier: workspace:*
        version: link:../../packages/rag
      '@ai-studio/types':
        specifier: workspace:*
        version: link:../../packages/types
      '@ai-studio/utils':
        specifier: workspace:*
        version: link:../../packages/utils
      '@ai-studio/workflows':
        specifier: workspace:*
        version: link:../../packages/workflows
      '@nestjs/common':
        specifier: ^10.4.15
        version: 10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      '@nestjs/core':
        specifier: ^10.4.15
        version: 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/platform-express@10.4.22)(@nestjs/websockets@10.4.22)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      '@nestjs/jwt':
        specifier: ^10.2.0
        version: 10.2.0(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))
      '@nestjs/passport':
        specifier: ^10.0.3
        version: 10.0.3(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(passport@0.7.0)
      '@nestjs/platform-express':
        specifier: ^10.4.15
        version: 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/core@10.4.22)
      '@nestjs/platform-socket.io':
        specifier: ^10.4.15
        version: 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/websockets@10.4.22)(rxjs@7.8.2)
      '@nestjs/websockets':
        specifier: ^10.4.15
        version: 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/core@10.4.22)(@nestjs/platform-socket.io@10.4.22)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      '@prisma/client':
        specifier: ^6.1.0
        version: 6.19.3(prisma@6.19.3(typescript@5.9.3))(typescript@5.9.3)
      bcryptjs:
        specifier: ^2.4.3
        version: 2.4.3
      class-transformer:
        specifier: ^0.5.1
        version: 0.5.1
      class-validator:
        specifier: ^0.14.1
        version: 0.14.4
      dotenv:
        specifier: ^16.4.7
        version: 16.6.1
      multer:
        specifier: ^1.4.5-lts.1
        version: 1.4.5-lts.2
      passport:
        specifier: ^0.7.0
        version: 0.7.0
      passport-jwt:
        specifier: ^4.0.1
        version: 4.0.1
      reflect-metadata:
        specifier: ^0.2.2
        version: 0.2.2
      rxjs:
        specifier: ^7.8.1
        version: 7.8.2
      socket.io:
        specifier: ^4.8.1
        version: 4.8.3
    devDependencies:
      '@nestjs/cli':
        specifier: ^10.4.9
        version: 10.4.9
      '@nestjs/schematics':
        specifier: ^10.2.3
        version: 10.2.3(chokidar@3.6.0)(typescript@5.9.3)
      '@types/bcryptjs':
        specifier: ^2.4.6
        version: 2.4.6
      '@types/express':
        specifier: ^5.0.0
        version: 5.0.6
      '@types/multer':
        specifier: ^1.4.12
        version: 1.4.13
      '@types/node':
        specifier: ^22.10.2
        version: 22.19.19
      '@types/passport-jwt':
        specifier: ^4.0.1
        version: 4.0.1
      rimraf:
        specifier: ^6.0.1
        version: 6.1.3
      typescript:
        specifier: ^5.7.2
        version: 5.9.3

  apps/web:
    dependencies:
      '@ai-studio/types':
        specifier: workspace:*
        version: link:../../packages/types
      '@ai-studio/utils':
        specifier: workspace:*
        version: link:../../packages/utils
      '@radix-ui/react-dialog':
        specifier: ^1.1.4
        version: 1.1.15(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-dropdown-menu':
        specifier: ^2.1.4
        version: 2.1.16(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-label':
        specifier: ^2.1.1
        version: 2.1.8(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-select':
        specifier: ^2.1.4
        version: 2.2.6(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot':
        specifier: ^1.1.1
        version: 1.2.4(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-tabs':
        specifier: ^1.1.2
        version: 1.1.13(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-toast':
        specifier: ^1.2.4
        version: 1.2.15(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@xyflow/react':
        specifier: ^12.4.2
        version: 12.10.2(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      class-variance-authority:
        specifier: ^0.7.1
        version: 0.7.1
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      echarts:
        specifier: ^5.5.1
        version: 5.6.0
      echarts-for-react:
        specifier: ^3.0.2
        version: 3.0.6(echarts@5.6.0)(react@19.2.6)
      framer-motion:
        specifier: ^11.15.0
        version: 11.18.2(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      lucide-react:
        specifier: ^0.469.0
        version: 0.469.0(react@19.2.6)
      next:
        specifier: ^15.1.3
        version: 15.5.18(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react:
        specifier: ^19.0.0
        version: 19.2.6
      react-dom:
        specifier: ^19.0.0
        version: 19.2.6(react@19.2.6)
      socket.io-client:
        specifier: ^4.8.1
        version: 4.8.3
      tailwind-merge:
        specifier: ^2.6.0
        version: 2.6.1
      zustand:
        specifier: ^5.0.2
        version: 5.0.13(@types/react@19.2.15)(react@19.2.6)(use-sync-external-store@1.6.0(react@19.2.6))
    devDependencies:
      '@types/node':
        specifier: ^22.10.2
        version: 22.19.19
      '@types/react':
        specifier: ^19.0.2
        version: 19.2.15
      '@types/react-dom':
        specifier: ^19.0.2
        version: 19.2.3(@types/react@19.2.15)
      autoprefixer:
        specifier: ^10.4.20
        version: 10.5.0(postcss@8.5.15)
      postcss:
        specifier: ^8.4.49
        version: 8.5.15
      rimraf:
        specifier: ^6.0.1
        version: 6.1.3
      tailwindcss:
        specifier: ^3.4.17
        version: 3.4.19(tsx@4.22.3)
      typescript:
        specifier: ^5.7.2
        version: 5.9.3

  packages/agents:
    dependencies:
      '@ai-studio/types':
        specifier: workspace:*
        version: link:../types
      '@ai-studio/utils':
        specifier: workspace:*
        version: link:../utils
    devDependencies:
      '@types/node':
        specifier: ^22.10.2
        version: 22.19.19
      rimraf:
        specifier: ^6.0.1
        version: 6.1.3
      typescript:
        specifier: ^5.7.2
        version: 5.9.3

  packages/database:
    dependencies:
      '@ai-studio/utils':
        specifier: workspace:*
        version: link:../utils
      '@prisma/client':
        specifier: ^6.1.0
        version: 6.19.3(prisma@6.19.3(typescript@5.9.3))(typescript@5.9.3)
    devDependencies:
      '@types/bcryptjs':
        specifier: ^2.4.6
        version: 2.4.6
      '@types/node':
        specifier: ^22.10.2
        version: 22.19.19
      bcryptjs:
        specifier: ^2.4.3
        version: 2.4.3
      prisma:
        specifier: ^6.1.0
        version: 6.19.3(typescript@5.9.3)
      rimraf:
        specifier: ^6.0.1
        version: 6.1.3
      tsx:
        specifier: ^4.19.2
        version: 4.22.3
      typescript:
        specifier: ^5.7.2
        version: 5.9.3

  packages/rag:
    dependencies:
      '@ai-studio/types':
        specifier: workspace:*
        version: link:../types
      '@ai-studio/utils':
        specifier: workspace:*
        version: link:../utils
    devDependencies:
      rimraf:
        specifier: ^6.0.1
        version: 6.1.3
      typescript:
        specifier: ^5.7.2
        version: 5.9.3

  packages/types:
    devDependencies:
      rimraf:
        specifier: ^6.0.1
        version: 6.1.3
      typescript:
        specifier: ^5.7.2
        version: 5.9.3

  packages/ui:
    dependencies:
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      tailwind-merge:
        specifier: ^2.6.0
        version: 2.6.1
    devDependencies:
      rimraf:
        specifier: ^6.0.1
        version: 6.1.3
      typescript:
        specifier: ^5.7.2
        version: 5.9.3

  packages/utils:
    dependencies:
      '@ai-studio/types':
        specifier: workspace:*
        version: link:../types
    devDependencies:
      '@types/node':
        specifier: ^22.10.2
        version: 22.19.19
      rimraf:
        specifier: ^6.0.1
        version: 6.1.3
      typescript:
        specifier: ^5.7.2
        version: 5.9.3

  packages/workflows:
    dependencies:
      '@ai-studio/agents':
        specifier: workspace:*
        version: link:../agents
      '@ai-studio/types':
        specifier: workspace:*
        version: link:../types
      '@ai-studio/utils':
        specifier: workspace:*
        version: link:../utils
    devDependencies:
      rimraf:
        specifier: ^6.0.1
        version: 6.1.3
      typescript:
        specifier: ^5.7.2
        version: 5.9.3

packages:

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@angular-devkit/core@17.3.11':
    resolution: {integrity: sha512-vTNDYNsLIWpYk2I969LMQFH29GTsLzxNk/0cLw5q56ARF0v5sIWfHYwGTS88jdDqIpuuettcSczbxeA7EuAmqQ==}
    engines: {node: ^18.13.0 || >=20.9.0, npm: ^6.11.0 || ^7.5.6 || >=8.0.0, yarn: '>= 1.13.0'}
    peerDependencies:
      chokidar: ^3.5.2
    peerDependenciesMeta:
      chokidar:
        optional: true

  '@angular-devkit/schematics-cli@17.3.11':
    resolution: {integrity: sha512-kcOMqp+PHAKkqRad7Zd7PbpqJ0LqLaNZdY1+k66lLWmkEBozgq8v4ASn/puPWf9Bo0HpCiK+EzLf0VHE8Z/y6Q==}
    engines: {node: ^18.13.0 || >=20.9.0, npm: ^6.11.0 || ^7.5.6 || >=8.0.0, yarn: '>= 1.13.0'}
    hasBin: true

  '@angular-devkit/schematics@17.3.11':
    resolution: {integrity: sha512-I5wviiIqiFwar9Pdk30Lujk8FczEEc18i22A5c6Z9lbmhPQdTroDnEQdsfXjy404wPe8H62s0I15o4pmMGfTYQ==}
    engines: {node: ^18.13.0 || >=20.9.0, npm: ^6.11.0 || ^7.5.6 || >=8.0.0, yarn: '>= 1.13.0'}

  '@babel/code-frame@7.29.7':
    resolution: {integrity: sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.29.7':
    resolution: {integrity: sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==}
    engines: {node: '>=6.9.0'}

  '@borewit/text-codec@0.2.2':
    resolution: {integrity: sha512-DDaRehssg1aNrH4+2hnj1B7vnUGEjU6OIlyRdkMd0aUdIUvKXrJfXsy8LVtXAy7DRvYVluWbMspsRhz2lcW0mQ==}

  '@colors/colors@1.5.0':
    resolution: {integrity: sha512-ooWCrlZP11i8GImSjTHYHLkvFDP48nS4+204nGb1RiX/WXYHmJA2III9/e2DWVabCESdW7hBAEzHRqUn9OUVvQ==}
    engines: {node: '>=0.1.90'}

  '@emnapi/runtime@1.10.0':
    resolution: {integrity: sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==}

  '@esbuild/aix-ppc64@0.28.0':
    resolution: {integrity: sha512-lhRUCeuOyJQURhTxl4WkpFTjIsbDayJHih5kZC1giwE+MhIzAb7mEsQMqMf18rHLsrb5qI1tafG20mLxEWcWlA==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [aix]

  '@esbuild/android-arm64@0.28.0':
    resolution: {integrity: sha512-+WzIXQOSaGs33tLEgYPYe/yQHf0WTU0X42Jca3y8NWMbUVhp7rUnw+vAsRC/QiDrdD31IszMrZy+qwPOPjd+rw==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [android]

  '@esbuild/android-arm@0.28.0':
    resolution: {integrity: sha512-wqh0ByljabXLKHeWXYLqoJ5jKC4XBaw6Hk08OfMrCRd2nP2ZQ5eleDZC41XHyCNgktBGYMbqnrJKq/K/lzPMSQ==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [android]

  '@esbuild/android-x64@0.28.0':
    resolution: {integrity: sha512-+VJggoaKhk2VNNqVL7f6S189UzShHC/mR9EE8rDdSkdpN0KflSwWY/gWjDrNxxisg8Fp1ZCD9jLMo4m0OUfeUA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [android]

  '@esbuild/darwin-arm64@0.28.0':
    resolution: {integrity: sha512-0T+A9WZm+bZ84nZBtk1ckYsOvyA3x7e2Acj1KdVfV4/2tdG4fzUp91YHx+GArWLtwqp77pBXVCPn2We7Letr0Q==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [darwin]

  '@esbuild/darwin-x64@0.28.0':
    resolution: {integrity: sha512-fyzLm/DLDl/84OCfp2f/XQ4flmORsjU7VKt8HLjvIXChJoFFOIL6pLJPH4Yhd1n1gGFF9mPwtlN5Wf82DZs+LQ==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [darwin]

  '@esbuild/freebsd-arm64@0.28.0':
    resolution: {integrity: sha512-l9GeW5UZBT9k9brBYI+0WDffcRxgHQD8ShN2Ur4xWq/NFzUKm3k5lsH4PdaRgb2w7mI9u61nr2gI2mLI27Nh3Q==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [freebsd]

  '@esbuild/freebsd-x64@0.28.0':
    resolution: {integrity: sha512-BXoQai/A0wPO6Es3yFJ7APCiKGc1tdAEOgeTNy3SsB491S3aHn4S4r3e976eUnPdU+NbdtmBuLncYir2tMU9Nw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [freebsd]

  '@esbuild/linux-arm64@0.28.0':
    resolution: {integrity: sha512-RVyzfb3FWsGA55n6WY0MEIEPURL1FcbhFE6BffZEMEekfCzCIMtB5yyDcFnVbTnwk+CLAgTujmV/Lgvih56W+A==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [linux]

  '@esbuild/linux-arm@0.28.0':
    resolution: {integrity: sha512-CjaaREJagqJp7iTaNQjjidaNbCKYcd4IDkzbwwxtSvjI7NZm79qiHc8HqciMddQ6CKvJT6aBd8lO9kN/ZudLlw==}
    engines: {node: '>=18'}
    cpu: [arm]
    os: [linux]

  '@esbuild/linux-ia32@0.28.0':
    resolution: {integrity: sha512-KBnSTt1kxl9x70q+ydterVdl+Cn0H18ngRMRCEQfrbqdUuntQQ0LoMZv47uB97NljZFzY6HcfqEZ2SAyIUTQBQ==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [linux]

  '@esbuild/linux-loong64@0.28.0':
    resolution: {integrity: sha512-zpSlUce1mnxzgBADvxKXX5sl8aYQHo2ezvMNI8I0lbblJtp8V4odlm3Yzlj7gPyt3T8ReksE6bK+pT3WD+aJRg==}
    engines: {node: '>=18'}
    cpu: [loong64]
    os: [linux]

  '@esbuild/linux-mips64el@0.28.0':
    resolution: {integrity: sha512-2jIfP6mmjkdmeTlsX/9vmdmhBmKADrWqN7zcdtHIeNSCH1SqIoNI63cYsjQR8J+wGa4Y5izRcSHSm8K3QWmk3w==}
    engines: {node: '>=18'}
    cpu: [mips64el]
    os: [linux]

  '@esbuild/linux-ppc64@0.28.0':
    resolution: {integrity: sha512-bc0FE9wWeC0WBm49IQMPSPILRocGTQt3j5KPCA8os6VprfuJ7KD+5PzESSrJ6GmPIPJK965ZJHTUlSA6GNYEhg==}
    engines: {node: '>=18'}
    cpu: [ppc64]
    os: [linux]

  '@esbuild/linux-riscv64@0.28.0':
    resolution: {integrity: sha512-SQPZOwoTTT/HXFXQJG/vBX8sOFagGqvZyXcgLA3NhIqcBv1BJU1d46c0rGcrij2B56Z2rNiSLaZOYW5cUk7yLQ==}
    engines: {node: '>=18'}
    cpu: [riscv64]
    os: [linux]

  '@esbuild/linux-s390x@0.28.0':
    resolution: {integrity: sha512-SCfR0HN8CEEjnYnySJTd2cw0k9OHB/YFzt5zgJEwa+wL/T/raGWYMBqwDNAC6dqFKmJYZoQBRfHjgwLHGSrn3Q==}
    engines: {node: '>=18'}
    cpu: [s390x]
    os: [linux]

  '@esbuild/linux-x64@0.28.0':
    resolution: {integrity: sha512-us0dSb9iFxIi8srnpl931Nvs65it/Jd2a2K3qs7fz2WfGPHqzfzZTfec7oxZJRNPXPnNYZtanmRc4AL/JwVzHQ==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [linux]

  '@esbuild/netbsd-arm64@0.28.0':
    resolution: {integrity: sha512-CR/RYotgtCKwtftMwJlUU7xCVNg3lMYZ0RzTmAHSfLCXw3NtZtNpswLEj/Kkf6kEL3Gw+BpOekRX0BYCtklhUw==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [netbsd]

  '@esbuild/netbsd-x64@0.28.0':
    resolution: {integrity: sha512-nU1yhmYutL+fQ71Kxnhg8uEOdC0pwEW9entHykTgEbna2pw2dkbFSMeqjjyHZoCmt8SBkOSvV+yNmm94aUrrqw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [netbsd]

  '@esbuild/openbsd-arm64@0.28.0':
    resolution: {integrity: sha512-cXb5vApOsRsxsEl4mcZ1XY3D4DzcoMxR/nnc4IyqYs0rTI8ZKmW6kyyg+11Z8yvgMfAEldKzP7AdP64HnSC/6g==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [openbsd]

  '@esbuild/openbsd-x64@0.28.0':
    resolution: {integrity: sha512-8wZM2qqtv9UP3mzy7HiGYNH/zjTA355mpeuA+859TyR+e+Tc08IHYpLJuMsfpDJwoLo1ikIJI8jC3GFjnRClzA==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [openbsd]

  '@esbuild/openharmony-arm64@0.28.0':
    resolution: {integrity: sha512-FLGfyizszcef5C3YtoyQDACyg95+dndv79i2EekILBofh5wpCa1KuBqOWKrEHZg3zrL3t5ouE5jgr94vA+Wb2w==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [openharmony]

  '@esbuild/sunos-x64@0.28.0':
    resolution: {integrity: sha512-1ZgjUoEdHZZl/YlV76TSCz9Hqj9h9YmMGAgAPYd+q4SicWNX3G5GCyx9uhQWSLcbvPW8Ni7lj4gDa1T40akdlw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [sunos]

  '@esbuild/win32-arm64@0.28.0':
    resolution: {integrity: sha512-Q9StnDmQ/enxnpxCCLSg0oo4+34B9TdXpuyPeTedN/6+iXBJ4J+zwfQI28u/Jl40nOYAxGoNi7mFP40RUtkmUA==}
    engines: {node: '>=18'}
    cpu: [arm64]
    os: [win32]

  '@esbuild/win32-ia32@0.28.0':
    resolution: {integrity: sha512-zF3ag/gfiCe6U2iczcRzSYJKH1DCI+ByzSENHlM2FcDbEeo5Zd2C86Aq0tKUYAJJ1obRP84ymxIAksZUcdztHA==}
    engines: {node: '>=18'}
    cpu: [ia32]
    os: [win32]

  '@esbuild/win32-x64@0.28.0':
    resolution: {integrity: sha512-pEl1bO9mfAmIC+tW5btTmrKaujg3zGtUmWNdCw/xs70FBjwAL3o9OEKNHvNmnyylD6ubxUERiEhdsL0xBQ9efw==}
    engines: {node: '>=18'}
    cpu: [x64]
    os: [win32]

  '@floating-ui/core@1.7.5':
    resolution: {integrity: sha512-1Ih4WTWyw0+lKyFMcBHGbb5U5FtuHJuujoyyr5zTaWS5EYMeT6Jb2AuDeftsCsEuchO+mM2ij5+q9crhydzLhQ==}

  '@floating-ui/dom@1.7.6':
    resolution: {integrity: sha512-9gZSAI5XM36880PPMm//9dfiEngYoC6Am2izES1FF406YFsjvyBMmeJ2g4SAju3xWwtuynNRFL2s9hgxpLI5SQ==}

  '@floating-ui/react-dom@2.1.8':
    resolution: {integrity: sha512-cC52bHwM/n/CxS87FH0yWdngEZrjdtLW/qVruo68qg+prK7ZQ4YGdut2GyDVpoGeAYe/h899rVeOVm6Oi40k2A==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@floating-ui/utils@0.2.11':
    resolution: {integrity: sha512-RiB/yIh78pcIxl6lLMG0CgBXAZ2Y0eVHqMPYugu+9U0AeT6YBeiJpf7lbdJNIugFP5SIjwNRgo4DhR1Qxi26Gg==}

  '@img/colour@1.1.0':
    resolution: {integrity: sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==}
    engines: {node: '>=18'}

  '@img/sharp-darwin-arm64@0.34.5':
    resolution: {integrity: sha512-imtQ3WMJXbMY4fxb/Ndp6HBTNVtWCUI0WdobyheGf5+ad6xX8VIDO8u2xE4qc/fr08CKG/7dDseFtn6M6g/r3w==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.34.5':
    resolution: {integrity: sha512-YNEFAF/4KQ/PeW0N+r+aVVsoIY0/qxxikF2SWdp+NRkmMB7y9LBZAVqQ4yhGCm/H3H270OSykqmQMKLBhBJDEw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-darwin-arm64@1.2.4':
    resolution: {integrity: sha512-zqjjo7RatFfFoP0MkQ51jfuFZBnVE2pRiaydKJ1G/rHZvnsrHAOcQALIi9sA5co5xenQdTugCvtb1cuf78Vf4g==}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.2.4':
    resolution: {integrity: sha512-1IOd5xfVhlGwX+zXv2N93k0yMONvUlANylbJw1eTah8K/Jtpi15KC+WSiaX/nBmbm2HxRM1gZ0nSdjSsrZbGKg==}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.2.4':
    resolution: {integrity: sha512-excjX8DfsIcJ10x1Kzr4RcWe1edC9PquDRRPx3YVCvQv+U5p7Yin2s32ftzikXojb1PIFc/9Mt28/y+iRklkrw==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linux-arm@1.2.4':
    resolution: {integrity: sha512-bFI7xcKFELdiNCVov8e44Ia4u2byA+l3XtsAj+Q8tfCwO6BQ8iDojYdvoPMqsKDkuoOo+X6HZA0s0q11ANMQ8A==}
    cpu: [arm]
    os: [linux]

  '@img/sharp-libvips-linux-ppc64@1.2.4':
    resolution: {integrity: sha512-FMuvGijLDYG6lW+b/UvyilUWu5Ayu+3r2d1S8notiGCIyYU/76eig1UfMmkZ7vwgOrzKzlQbFSuQfgm7GYUPpA==}
    cpu: [ppc64]
    os: [linux]

  '@img/sharp-libvips-linux-riscv64@1.2.4':
    resolution: {integrity: sha512-oVDbcR4zUC0ce82teubSm+x6ETixtKZBh/qbREIOcI3cULzDyb18Sr/Wcyx7NRQeQzOiHTNbZFF1UwPS2scyGA==}
    cpu: [riscv64]
    os: [linux]

  '@img/sharp-libvips-linux-s390x@1.2.4':
    resolution: {integrity: sha512-qmp9VrzgPgMoGZyPvrQHqk02uyjA0/QrTO26Tqk6l4ZV0MPWIW6LTkqOIov+J1yEu7MbFQaDpwdwJKhbJvuRxQ==}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-libvips-linux-x64@1.2.4':
    resolution: {integrity: sha512-tJxiiLsmHc9Ax1bz3oaOYBURTXGIRDODBqhveVHonrHJ9/+k89qbLl0bcJns+e4t4rvaNBxaEZsFtSfAdquPrw==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-arm64@1.2.4':
    resolution: {integrity: sha512-FVQHuwx1IIuNow9QAbYUzJ+En8KcVm9Lk5+uGUQJHaZmMECZmOlix9HnH7n1TRkXMS0pGxIJokIVB9SuqZGGXw==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-x64@1.2.4':
    resolution: {integrity: sha512-+LpyBk7L44ZIXwz/VYfglaX/okxezESc6UxDSoyo2Ks6Jxc4Y7sGjpgU9s4PMgqgjj1gZCylTieNamqA1MF7Dg==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linux-arm64@0.34.5':
    resolution: {integrity: sha512-bKQzaJRY/bkPOXyKx5EVup7qkaojECG6NLYswgktOZjaXecSAeCWiZwwiFf3/Y+O1HrauiE3FVsGxFg8c24rZg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linux-arm@0.34.5':
    resolution: {integrity: sha512-9dLqsvwtg1uuXBGZKsxem9595+ujv0sJ6Vi8wcTANSFpwV/GONat5eCkzQo/1O6zRIkh0m/8+5BjrRr7jDUSZw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm]
    os: [linux]

  '@img/sharp-linux-ppc64@0.34.5':
    resolution: {integrity: sha512-7zznwNaqW6YtsfrGGDA6BRkISKAAE1Jo0QdpNYXNMHu2+0dTrPflTLNkpc8l7MUP5M16ZJcUvysVWWrMefZquA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [ppc64]
    os: [linux]

  '@img/sharp-linux-riscv64@0.34.5':
    resolution: {integrity: sha512-51gJuLPTKa7piYPaVs8GmByo7/U7/7TZOq+cnXJIHZKavIRHAP77e3N2HEl3dgiqdD/w0yUfiJnII77PuDDFdw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [riscv64]
    os: [linux]

  '@img/sharp-linux-s390x@0.34.5':
    resolution: {integrity: sha512-nQtCk0PdKfho3eC5MrbQoigJ2gd1CgddUMkabUj+rBevs8tZ2cULOx46E7oyX+04WGfABgIwmMC0VqieTiR4jg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-linux-x64@0.34.5':
    resolution: {integrity: sha512-MEzd8HPKxVxVenwAa+JRPwEC7QFjoPWuS5NZnBt6B3pu7EG2Ge0id1oLHZpPJdn3OQK+BQDiw9zStiHBTJQQQQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linuxmusl-arm64@0.34.5':
    resolution: {integrity: sha512-fprJR6GtRsMt6Kyfq44IsChVZeGN97gTD331weR1ex1c1rypDEABN6Tm2xa1wE6lYb5DdEnk03NZPqA7Id21yg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linuxmusl-x64@0.34.5':
    resolution: {integrity: sha512-Jg8wNT1MUzIvhBFxViqrEhWDGzqymo3sV7z7ZsaWbZNDLXRJZoRGrjulp60YYtV4wfY8VIKcWidjojlLcWrd8Q==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-wasm32@0.34.5':
    resolution: {integrity: sha512-OdWTEiVkY2PHwqkbBI8frFxQQFekHaSSkUIJkwzclWZe64O1X4UlUjqqqLaPbUpMOQk6FBu/HtlGXNblIs0huw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [wasm32]

  '@img/sharp-win32-arm64@0.34.5':
    resolution: {integrity: sha512-WQ3AgWCWYSb2yt+IG8mnC6Jdk9Whs7O0gxphblsLvdhSpSTtmu69ZG1Gkb6NuvxsNACwiPV6cNSZNzt0KPsw7g==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [win32]

  '@img/sharp-win32-ia32@0.34.5':
    resolution: {integrity: sha512-FV9m/7NmeCmSHDD5j4+4pNI8Cp3aW+JvLoXcTUo0IqyjSfAZJ8dIUmijx1qaJsIiU+Hosw6xM5KijAWRJCSgNg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.34.5':
    resolution: {integrity: sha512-+29YMsqY2/9eFEiW93eqWnuLcWcufowXewwSNIT6UwZdUUCrM3oFjMWH/Z6/TMmb4hlFenmfAVbpWeup2jryCw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [win32]

  '@isaacs/cliui@8.0.2':
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}

  '@jridgewell/gen-mapping@0.3.13':
    resolution: {integrity: sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/source-map@0.3.11':
    resolution: {integrity: sha512-ZMp1V8ZFcPG5dIWnQLr3NSI1MiCU7UETdS/A0G8V/XWHvJv3ZsFqutJn1Y5RPmAPX6F3BiE397OqveU/9NCuIA==}

  '@jridgewell/sourcemap-codec@1.5.5':
    resolution: {integrity: sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==}

  '@jridgewell/trace-mapping@0.3.31':
    resolution: {integrity: sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==}

  '@ljharb/through@2.3.14':
    resolution: {integrity: sha512-ajBvlKpWucBB17FuQYUShqpqy8GRgYEpJW0vWJbUu1CV9lWyrDCapy0lScU8T8Z6qn49sSwJB3+M+evYIdGg+A==}
    engines: {node: '>= 0.4'}

  '@lukeed/csprng@1.1.0':
    resolution: {integrity: sha512-Z7C/xXCiGWsg0KuKsHTKJxbWhpI3Vs5GwLfOean7MGyVFGqdRgBbAjOCh6u4bbjPc/8MJ2pZmK/0DLdCbivLDA==}
    engines: {node: '>=8'}

  '@nestjs/cli@10.4.9':
    resolution: {integrity: sha512-s8qYd97bggqeK7Op3iD49X2MpFtW4LVNLAwXFkfbRxKME6IYT7X0muNTJ2+QfI8hpbNx9isWkrLWIp+g5FOhiA==}
    engines: {node: '>= 16.14'}
    hasBin: true
    peerDependencies:
      '@swc/cli': ^0.1.62 || ^0.3.0 || ^0.4.0 || ^0.5.0
      '@swc/core': ^1.3.62
    peerDependenciesMeta:
      '@swc/cli':
        optional: true
      '@swc/core':
        optional: true

  '@nestjs/common@10.4.22':
    resolution: {integrity: sha512-fxJ4v85nDHaqT1PmfNCQ37b/jcv2OojtXTaK1P2uAXhzLf9qq6WNUOFvxBrV4fhQek1EQoT1o9oj5xAZmv3NRw==}
    peerDependencies:
      class-transformer: '*'
      class-validator: '*'
      reflect-metadata: ^0.1.12 || ^0.2.0
      rxjs: ^7.1.0
    peerDependenciesMeta:
      class-transformer:
        optional: true
      class-validator:
        optional: true

  '@nestjs/core@10.4.22':
    resolution: {integrity: sha512-6IX9+VwjiKtCjx+mXVPncpkQ5ZjKfmssOZPFexmT+6T9H9wZ3svpYACAo7+9e7Nr9DZSoRZw3pffkJP7Z0UjaA==}
    peerDependencies:
      '@nestjs/common': ^10.0.0
      '@nestjs/microservices': ^10.0.0
      '@nestjs/platform-express': ^10.0.0
      '@nestjs/websockets': ^10.0.0
      reflect-metadata: ^0.1.12 || ^0.2.0
      rxjs: ^7.1.0
    peerDependenciesMeta:
      '@nestjs/microservices':
        optional: true
      '@nestjs/platform-express':
        optional: true
      '@nestjs/websockets':
        optional: true

  '@nestjs/jwt@10.2.0':
    resolution: {integrity: sha512-x8cG90SURkEiLOehNaN2aRlotxT0KZESUliOPKKnjWiyJOcWurkF3w345WOX0P4MgFzUjGoZ1Sy0aZnxeihT0g==}
    peerDependencies:
      '@nestjs/common': ^8.0.0 || ^9.0.0 || ^10.0.0

  '@nestjs/passport@10.0.3':
    resolution: {integrity: sha512-znJ9Y4S8ZDVY+j4doWAJ8EuuVO7SkQN3yOBmzxbGaXbvcSwFDAdGJ+OMCg52NdzIO4tQoN4pYKx8W6M0ArfFRQ==}
    peerDependencies:
      '@nestjs/common': ^8.0.0 || ^9.0.0 || ^10.0.0
      passport: ^0.4.0 || ^0.5.0 || ^0.6.0 || ^0.7.0

  '@nestjs/platform-express@10.4.22':
    resolution: {integrity: sha512-ySSq7Py/DFozzZdNDH67m/vHoeVdphDniWBnl6q5QVoXldDdrZIHLXLRMPayTDh5A95nt7jjJzmD4qpTbNQ6tA==}
    peerDependencies:
      '@nestjs/common': ^10.0.0
      '@nestjs/core': ^10.0.0

  '@nestjs/platform-socket.io@10.4.22':
    resolution: {integrity: sha512-xxGw3R0Ihr51/Omq23z3//bKmCXyVKaikxbH0/pkwqMsQrxkUv9NabNUZ22b4Jnlwwi02X+zlwo8GRa9u8oV9g==}
    peerDependencies:
      '@nestjs/common': ^10.0.0
      '@nestjs/websockets': ^10.0.0
      rxjs: ^7.1.0

  '@nestjs/schematics@10.2.3':
    resolution: {integrity: sha512-4e8gxaCk7DhBxVUly2PjYL4xC2ifDFexCqq1/u4TtivLGXotVk0wHdYuPYe1tHTHuR1lsOkRbfOCpkdTnigLVg==}
    peerDependencies:
      typescript: '>=4.8.2'

  '@nestjs/websockets@10.4.22':
    resolution: {integrity: sha512-OLd4i0Faq7vgdtB5vVUrJ54hWEtcXy9poJ6n7kbbh/5ms+KffUl+wwGsbe7uSXLrkoyI8xXU6fZPkFArI+XiRg==}
    peerDependencies:
      '@nestjs/common': ^10.0.0
      '@nestjs/core': ^10.0.0
      '@nestjs/platform-socket.io': ^10.0.0
      reflect-metadata: ^0.1.12 || ^0.2.0
      rxjs: ^7.1.0
    peerDependenciesMeta:
      '@nestjs/platform-socket.io':
        optional: true

  '@next/env@15.5.18':
    resolution: {integrity: sha512-hAV85Ckd9QR6RvH04MEKwsfLTksvFpO47j9xwtoIuvuPnlwecpSi+uZTtm8HirVbtlI2Fnz//xpcSTjFdyJk+g==}

  '@next/swc-darwin-arm64@15.5.18':
    resolution: {integrity: sha512-w0WvQf1n+txiwns/9pwIQteCJpZTbxzO2SE0FLcwuD4v0WEh1JPOjdyxWL21XwJsdpx8cFRjyzxzCS/siP7HcQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@next/swc-darwin-x64@15.5.18':
    resolution: {integrity: sha512-znn71QmDuxm+BOaglihMZfvyySMnNljkVIY5Z2TCssBmm+WqL6c19VhtH5ktFkHa8EZ2bnTUpcNcmNSQsg67og==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@next/swc-linux-arm64-gnu@15.5.18':
    resolution: {integrity: sha512-yPPe5MNL+igZUa+OsqQJisqSfh6oarIuA1Q0BDxljGJhRQyZeP+WRHh7rs/jZUGMh5aY0YdIjXZG0VohkKkUdw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-arm64-musl@15.5.18':
    resolution: {integrity: sha512-glaCczEWIrHsokFZ3pP08U4BpKxwIdnT+txdOM32OBgpL9Yw4aqx8NejmgtZQZOdstQ5f0L3CasIZudzCuD+nw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-x64-gnu@15.5.18':
    resolution: {integrity: sha512-oUfg2EgJmU3R0OCOWiokGFUTvZiPfXtriXiuF3YNxRoROCdgvTedHIzYoeKH34gsZxS/V7mHbfq2hpAHwhH1/A==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-linux-x64-musl@15.5.18':
    resolution: {integrity: sha512-JLxSP3KTd9iu/bvUMQxH7RJo9xKSHf55/6RPE4a6FTSZygGn7uvZbCej0AHXydwkggQGSD9UddSjwv6Xz5ESfA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-win32-arm64-msvc@15.5.18':
    resolution: {integrity: sha512-ir1v7enP52K2HNz3tQQvwF+x7VNxBk1ciiZ18WBPvxf4C59IqdfmHPJYK3vH7rSxpuCVw/8C712wTXNAtEp+NA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@next/swc-win32-x64-msvc@15.5.18':
    resolution: {integrity: sha512-LIu5me6QTANCd25E7I5uIEfvgQ06RK7tvHAbYo3zCb3VpxQEPvMcSpd87NwUABDT6MbGPdEGR5VRiK4PPTJhQg==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@nuxtjs/opencollective@0.3.2':
    resolution: {integrity: sha512-um0xL3fO7Mf4fDxcqx9KryrB7zgRM5JSlvGN5AGkP6JLM5XEKyjeAiPbNxdXVXQ16isuAhYpvP88NgL2BGd6aA==}
    engines: {node: '>=8.0.0', npm: '>=5.0.0'}
    hasBin: true

  '@pkgjs/parseargs@0.11.0':
    resolution: {integrity: sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==}
    engines: {node: '>=14'}

  '@prisma/client@6.19.3':
    resolution: {integrity: sha512-mKq3jQFhjvko5LTJFHGilsuQs+W+T3Gm451NzuTDGQxwCzwXHYnIu2zGkRoW+Exq3Rob7yp2MfzSrdIiZVhrBg==}
    engines: {node: '>=18.18'}
    peerDependencies:
      prisma: '*'
      typescript: '>=5.1.0'
    peerDependenciesMeta:
      prisma:
        optional: true
      typescript:
        optional: true

  '@prisma/config@6.19.3':
    resolution: {integrity: sha512-CBPT44BjlQxEt8kiMEauji2WHTDoVBOKl7UlewXmUgBPnr/oPRZC3psci5chJnYmH0ivEIog2OU9PGWoki3DLQ==}

  '@prisma/debug@6.19.3':
    resolution: {integrity: sha512-ljkJ+SgpXNktLG0Q/n4JGYCkKf0f8oYLyjImS2I8e2q2WCfdRRtWER062ZV/ixaNP2M2VKlWXVJiGzZaUgbKZw==}

  '@prisma/engines-version@7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7':
    resolution: {integrity: sha512-03bgb1VD5gvuumNf+7fVGBzfpJPjmqV423l/WxsWk2cNQ42JD0/SsFBPhN6z8iAvdHs07/7ei77SKu7aZfq8bA==}

  '@prisma/engines@6.19.3':
    resolution: {integrity: sha512-RSYxtlYFl5pJ8ZePgMv0lZ9IzVCOdTPOegrs2qcbAEFrBI1G33h6wyC9kjQvo0DnYEhEVY0X4LsuFHXLKQk88g==}

  '@prisma/fetch-engine@6.19.3':
    resolution: {integrity: sha512-tKtl/qco9Nt7LU5iKhpultD8O4vMCZcU2CHjNTnRrL1QvSUr5W/GcyFPjNL87GtRrwBc7ubXXD9xy4EvLvt8JA==}

  '@prisma/get-platform@6.19.3':
    resolution: {integrity: sha512-xFj1VcJ1N3MKooOQAGO0W5tsd0W2QzIvW7DD7c/8H14Zmp4jseeWAITm+w2LLoLrlhoHdPPh0NMZ8mfL6puoHA==}

  '@radix-ui/number@1.1.1':
    resolution: {integrity: sha512-MkKCwxlXTgz6CFoJx3pCwn07GKp36+aZyu/u2Ln2VrA5DcdyCZkASEDBTd8x5whTQQL5CiYf4prXKLcgQdv29g==}

  '@radix-ui/primitive@1.1.3':
    resolution: {integrity: sha512-JTF99U/6XIjCBo0wqkU5sK10glYe27MRRsfwoiq5zzOEZLHU3A3KCMa5X/azekYRCJ0HlwI0crAXS/5dEHTzDg==}

  '@radix-ui/react-arrow@1.1.7':
    resolution: {integrity: sha512-F+M1tLhO+mlQaOWspE8Wstg+z6PwxwRd8oQ8IXceWz92kfAmalTRf0EjrouQeo7QssEPfCn05B4Ihs1K9WQ/7w==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collection@1.1.7':
    resolution: {integrity: sha512-Fh9rGN0MoI4ZFUNyfFVNU4y9LUz93u9/0K+yLgA2bwRojxM8JU1DyvvMBabnZPBgMWREAJvU2jjVzq+LrFUglw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-compose-refs@1.1.2':
    resolution: {integrity: sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.2':
    resolution: {integrity: sha512-jCi/QKUM2r1Ju5a3J64TH2A5SpKAgh0LpknyqdQ4m6DCV0xJ2HG1xARRwNGPQfi1SLdLWZ1OJz6F4OMBBNiGJA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dialog@1.1.15':
    resolution: {integrity: sha512-TCglVRtzlffRNxRMEyR36DGBLJpeusFcgMVD9PZEzAKnUs1lKCgX5u9BmC2Yg+LL9MgZDugFFs1Vl+Jp4t/PGw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-direction@1.1.1':
    resolution: {integrity: sha512-1UEWRX6jnOA2y4H5WczZ44gOOjTEmlqv1uNW4GAJEO5+bauCBhv8snY65Iw5/VOS/ghKN9gr2KjnLKxrsvoMVw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.11':
    resolution: {integrity: sha512-Nqcp+t5cTB8BinFkZgXiMJniQH0PsUt2k51FUhbdfeKvc4ACcG2uQniY/8+h1Yv6Kza4Q7lD7PQV0z0oicE0Mg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dropdown-menu@2.1.16':
    resolution: {integrity: sha512-1PLGQEynI/3OX/ftV54COn+3Sud/Mn8vALg2rWnBLnRaGtJDduNW/22XjlGgPdpcIbiQxjKtb7BkcjP00nqfJw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-guards@1.1.3':
    resolution: {integrity: sha512-0rFg/Rj2Q62NCm62jZw0QX7a3sz6QCQU0LpZdNrJX8byRGaGVTqbrW9jAoIAHyMQqsNpeZ81YgSizOt5WXq0Pw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-scope@1.1.7':
    resolution: {integrity: sha512-t2ODlkXBQyn7jkl6TNaw/MtVEVvIGelJDCG41Okq/KwUsJBwQ4XVZsHAVUkK4mBv3ewiAS3PGuUWuY2BoK4ZUw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-id@1.1.1':
    resolution: {integrity: sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-label@2.1.8':
    resolution: {integrity: sha512-FmXs37I6hSBVDlO4y764TNz1rLgKwjJMQ0EGte6F3Cb3f4bIuHB/iLa/8I9VKkmOy+gNHq8rql3j686ACVV21A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-menu@2.1.16':
    resolution: {integrity: sha512-72F2T+PLlphrqLcAotYPp0uJMr5SjP5SL01wfEspJbru5Zs5vQaSHb4VB3ZMJPimgHHCHG7gMOeOB9H3Hdmtxg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popper@1.2.8':
    resolution: {integrity: sha512-0NJQ4LFFUuWkE7Oxf0htBKS6zLkkjBH+hM1uk7Ng705ReR8m/uelduy1DBo0PyBXPKVnBA6YBlU94MBGXrSBCw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.9':
    resolution: {integrity: sha512-bpIxvq03if6UNwXZ+HTK71JLh4APvnXntDc6XOX8UVq4XQOVl7lwok0AvIl+b8zgCw3fSaVTZMpAPPagXbKmHQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.5':
    resolution: {integrity: sha512-/jfEwNDdQVBCNvjkGit4h6pMOzq8bHkopq458dPt2lMjx+eBQUohZNG9A7DtO/O5ukSbxuaNGXMjHicgwy6rQQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.1.3':
    resolution: {integrity: sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.1.4':
    resolution: {integrity: sha512-9hQc4+GNVtJAIEPEqlYqW5RiYdrr8ea5XQ0ZOnD6fgru+83kqT15mq2OCcbe8KnjRZl5vF3ks69AKz3kh1jrhg==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-roving-focus@1.1.11':
    resolution: {integrity: sha512-7A6S9jSgm/S+7MdtNDSb+IU859vQqJ/QAtcYQcfFC6W8RS4IxIZDldLR0xqCFZ6DCyrQLjLPsxtTNch5jVA4lA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-select@2.2.6':
    resolution: {integrity: sha512-I30RydO+bnn2PQztvo25tswPH+wFBjehVGtmagkU78yMdwTwVf12wnAOF+AeP8S2N8xD+5UPbGhkUfPyvT+mwQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slot@1.2.3':
    resolution: {integrity: sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-slot@1.2.4':
    resolution: {integrity: sha512-Jl+bCv8HxKnlTLVrcDE8zTMJ09R9/ukw4qBs/oZClOfoQk/cOTbDn+NceXfV7j09YPVQUryJPHurafcSg6EVKA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-tabs@1.1.13':
    resolution: {integrity: sha512-7xdcatg7/U+7+Udyoj2zodtI9H/IIopqo+YOIcZOq1nJwXWBZ9p8xiu5llXlekDbZkca79a/fozEYQXIA4sW6A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-toast@1.2.15':
    resolution: {integrity: sha512-3OSz3TacUWy4WtOXV38DggwxoqJK4+eDkNMl5Z/MJZaoUPaP4/9lf81xXMe1I2ReTAptverZUpbPY4wWwWyL5g==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.1':
    resolution: {integrity: sha512-FkBMwD+qbGQeMu1cOHnuGB6x4yzPjho8ap5WtbEJ26umhgqVXbhekKUQO+hZEL1vU92a3wHwdp0HAcqAUF5iDg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.2.2':
    resolution: {integrity: sha512-BjasUjixPFdS+NKkypcyyN5Pmg83Olst0+c6vGov0diwTEo6mgdqVR6hxcEgFuh4QrAs7Rc+9KuGJ9TVCj0Zzg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-effect-event@0.0.2':
    resolution: {integrity: sha512-Qp8WbZOBe+blgpuUT+lw2xheLP8q0oatc9UpmiemEICxGvFLYmHm9QowVZGHtJlGbS6A6yJ3iViad/2cVjnOiA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.1':
    resolution: {integrity: sha512-Il0+boE7w/XebUHyBjroE+DbByORGR9KKmITzbR7MyQ4akpORYP/ZmbhAr0DG7RmmBqoOnZdy2QlvajJ2QA59g==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.1':
    resolution: {integrity: sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-previous@1.1.1':
    resolution: {integrity: sha512-2dHfToCj/pzca2Ck724OZ5L0EVrr3eHRNsG/b3xQJLA2hZpVCS99bLAX+hm1IHXDEnzU6by5z/5MIY794/a8NQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-rect@1.1.1':
    resolution: {integrity: sha512-QTYuDesS0VtuHNNvMh+CjlKJ4LJickCMUAqjlE3+j8w+RlRpwyX3apEQKGFzbZGdo7XNG1tXa+bQqIE7HIXT2w==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-size@1.1.1':
    resolution: {integrity: sha512-ewrXRDTAqAXlkl6t/fkXWNAhFX9I+CkKlw6zjEwk86RSPKwZr3xpBRso655aqYafwtnbpHLj6toFzmd6xdVptQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-visually-hidden@1.2.3':
    resolution: {integrity: sha512-pzJq12tEaaIhqjbzpCuv/OypJY/BPavOofm+dbab+MHLajy277+1lLm6JFcGgF5eskJ6mquGirhXY2GD/8u8Ug==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/rect@1.1.1':
    resolution: {integrity: sha512-HPwpGIzkl28mWyZqG52jiqDJ12waP11Pa1lGoiyUkIEuMLBP0oeK/C89esbXrxsky5we7dfd8U58nm0SgAWpVw==}

  '@socket.io/component-emitter@3.1.2':
    resolution: {integrity: sha512-9BCxFwvbGg/RsZK9tjXd8s4UcwR0MWeFQ1XEKIQVVvAGJyINdrqKMcTRyLoK8Rse1GjzLV9cwjWV1olXRWEXVA==}

  '@standard-schema/spec@1.1.0':
    resolution: {integrity: sha512-l2aFy5jALhniG5HgqrD6jXLi/rUWrKvqN/qJx6yoJsgKhblVd+iqqU4RCXavm/jPityDo5TCvKMnpjKnOriy0w==}

  '@swc/helpers@0.5.15':
    resolution: {integrity: sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==}

  '@tokenizer/inflate@0.2.7':
    resolution: {integrity: sha512-MADQgmZT1eKjp06jpI2yozxaU9uVs4GzzgSL+uEq7bVcJ9V1ZXQkeGNql1fsSI0gMy1vhvNTNbUqrx+pZfJVmg==}
    engines: {node: '>=18'}

  '@tokenizer/token@0.3.0':
    resolution: {integrity: sha512-OvjF+z51L3ov0OyAU0duzsYuvO01PH7x4t6DJx+guahgTnBHkhJdG7soQeTSFLWN3efnHyibZ4Z8l2EuWwJN3A==}

  '@types/bcryptjs@2.4.6':
    resolution: {integrity: sha512-9xlo6R2qDs5uixm0bcIqCeMCE6HiQsIyel9KQySStiyqNl2tnj2mP3DX1Nf56MD6KMenNNlBBsy3LJ7gUEQPXQ==}

  '@types/body-parser@1.19.6':
    resolution: {integrity: sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==}

  '@types/connect@3.4.38':
    resolution: {integrity: sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==}

  '@types/cors@2.8.19':
    resolution: {integrity: sha512-mFNylyeyqN93lfe/9CSxOGREz8cpzAhH+E93xJ4xWQf62V8sQ/24reV2nyzUWM6H6Xji+GGHpkbLe7pVoUEskg==}

  '@types/d3-color@3.1.3':
    resolution: {integrity: sha512-iO90scth9WAbmgv7ogoq57O9YpKmFBbmoEoCHDB2xMBY0+/KVrqAaCDyCE16dUspeOvIxFFRI+0sEtqDqy2b4A==}

  '@types/d3-drag@3.0.7':
    resolution: {integrity: sha512-HE3jVKlzU9AaMazNufooRJ5ZpWmLIoc90A37WU2JMmeq28w1FQqCZswHZ3xR+SuxYftzHq6WU6KJHvqxKzTxxQ==}

  '@types/d3-interpolate@3.0.4':
    resolution: {integrity: sha512-mgLPETlrpVV1YRJIglr4Ez47g7Yxjl1lj7YKsiMCb27VJH9W8NVM6Bb9d8kkpG/uAQS5AmbA48q2IAolKKo1MA==}

  '@types/d3-selection@3.0.11':
    resolution: {integrity: sha512-bhAXu23DJWsrI45xafYpkQ4NtcKMwWnAC/vKrd2l+nxMFuvOT3XMYTIj2opv8vq8AO5Yh7Qac/nSeP/3zjTK0w==}

  '@types/d3-transition@3.0.9':
    resolution: {integrity: sha512-uZS5shfxzO3rGlu0cC3bjmMFKsXv+SmZZcgp0KD22ts4uGXp5EVYGzu/0YdwZeKmddhcAccYtREJKkPfXkZuCg==}

  '@types/d3-zoom@3.0.8':
    resolution: {integrity: sha512-iqMC4/YlFCSlO8+2Ii1GGGliCAY4XdeG748w5vQUbevlbDu0zSjH/+jojorQVBK/se0j6DUFNPBGSqD3YWYnDw==}

  '@types/eslint-scope@3.7.7':
    resolution: {integrity: sha512-MzMFlSLBqNF2gcHWO0G1vP/YQyfvrxZ0bF+u7mzUdZ1/xK4A4sru+nraZz5i3iEIk1l1uyicaDVTB4QbbEkAYg==}

  '@types/eslint@9.6.1':
    resolution: {integrity: sha512-FXx2pKgId/WyYo2jXw63kk7/+TY7u7AziEJxJAnSFzHlqTAS3Ync6SvgYAN/k4/PQpnnVuzoMuVnByKK2qp0ag==}

  '@types/estree@1.0.9':
    resolution: {integrity: sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==}

  '@types/express-serve-static-core@5.1.1':
    resolution: {integrity: sha512-v4zIMr/cX7/d2BpAEX3KNKL/JrT1s43s96lLvvdTmza1oEvDudCqK9aF/djc/SWgy8Yh0h30TZx5VpzqFCxk5A==}

  '@types/express@5.0.6':
    resolution: {integrity: sha512-sKYVuV7Sv9fbPIt/442koC7+IIwK5olP1KWeD88e/idgoJqDm3JV/YUiPwkoKK92ylff2MGxSz1CSjsXelx0YA==}

  '@types/http-errors@2.0.5':
    resolution: {integrity: sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==}

  '@types/json-schema@7.0.15':
    resolution: {integrity: sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==}

  '@types/jsonwebtoken@9.0.10':
    resolution: {integrity: sha512-asx5hIG9Qmf/1oStypjanR7iKTv0gXQ1Ov/jfrX6kS/EO0OFni8orbmGCn0672NHR3kXHwpAwR+B368ZGN/2rA==}

  '@types/jsonwebtoken@9.0.5':
    resolution: {integrity: sha512-VRLSGzik+Unrup6BsouBeHsf4d1hOEgYWTm/7Nmw1sXoN1+tRly/Gy/po3yeahnP4jfnQWWAhQAqcNfH7ngOkA==}

  '@types/ms@2.1.0':
    resolution: {integrity: sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==}

  '@types/multer@1.4.13':
    resolution: {integrity: sha512-bhhdtPw7JqCiEfC9Jimx5LqX9BDIPJEh2q/fQ4bqbBPtyEZYr3cvF22NwG0DmPZNYA0CAf2CnqDB4KIGGpJcaw==}

  '@types/node@22.19.19':
    resolution: {integrity: sha512-dyh/xO2Fh5bYrfWaaqGrRQQGkNdmYw6AmaAUvYeUMNTWQtvb796ikLdmTchRmOlOiIJ1TDXfWgVx1QkUlQ6Hew==}

  '@types/passport-jwt@4.0.1':
    resolution: {integrity: sha512-Y0Ykz6nWP4jpxgEUYq8NoVZeCQPo1ZndJLfapI249g1jHChvRfZRO/LS3tqu26YgAS/laI1qx98sYGz0IalRXQ==}

  '@types/passport-strategy@0.2.38':
    resolution: {integrity: sha512-GC6eMqqojOooq993Tmnmp7AUTbbQSgilyvpCYQjT+H6JfG/g6RGc7nXEniZlp0zyKJ0WUdOiZWLBZft9Yug1uA==}

  '@types/passport@1.0.17':
    resolution: {integrity: sha512-aciLyx+wDwT2t2/kJGJR2AEeBz0nJU4WuRX04Wu9Dqc5lSUtwu0WERPHYsLhF9PtseiAMPBGNUOtFjxZ56prsg==}

  '@types/qs@6.15.1':
    resolution: {integrity: sha512-GZHUBZR9hckSUhrxmp1nG6NwdpM9fCunJwyThLW1X3AyHgd9IlHb6VANpQQqDr2o/qQp6McZ3y/IA2rVzKzSbw==}

  '@types/range-parser@1.2.7':
    resolution: {integrity: sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==}

  '@types/react-dom@19.2.3':
    resolution: {integrity: sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==}
    peerDependencies:
      '@types/react': ^19.2.0

  '@types/react@19.2.15':
    resolution: {integrity: sha512-eRwcGNHve+E8qtEQSSRl6urh+rFop4v8gm6O8rGv25CodbvFdLjA1vVQ1KkiFE0w0UPOnb8tDiFKL5lp0rtY5Q==}

  '@types/send@1.2.1':
    resolution: {integrity: sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==}

  '@types/serve-static@2.2.0':
    resolution: {integrity: sha512-8mam4H1NHLtu7nmtalF7eyBH14QyOASmcxHhSfEoRyr0nP/YdoesEtU+uSRvMe96TW/HPTtkoKqQLl53N7UXMQ==}

  '@types/validator@13.15.10':
    resolution: {integrity: sha512-T8L6i7wCuyoK8A/ZeLYt1+q0ty3Zb9+qbSSvrIVitzT3YjZqkTZ40IbRsPanlB4h1QB3JVL1SYCdR6ngtFYcuA==}

  '@types/ws@8.18.1':
    resolution: {integrity: sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==}

  '@webassemblyjs/ast@1.14.1':
    resolution: {integrity: sha512-nuBEDgQfm1ccRp/8bCQrx1frohyufl4JlbMMZ4P1wpeOfDhF6FQkxZJ1b/e+PLwr6X1Nhw6OLme5usuBWYBvuQ==}

  '@webassemblyjs/floating-point-hex-parser@1.13.2':
    resolution: {integrity: sha512-6oXyTOzbKxGH4steLbLNOu71Oj+C8Lg34n6CqRvqfS2O71BxY6ByfMDRhBytzknj9yGUPVJ1qIKhRlAwO1AovA==}

  '@webassemblyjs/helper-api-error@1.13.2':
    resolution: {integrity: sha512-U56GMYxy4ZQCbDZd6JuvvNV/WFildOjsaWD3Tzzvmw/mas3cXzRJPMjP83JqEsgSbyrmaGjBfDtV7KDXV9UzFQ==}

  '@webassemblyjs/helper-buffer@1.14.1':
    resolution: {integrity: sha512-jyH7wtcHiKssDtFPRB+iQdxlDf96m0E39yb0k5uJVhFGleZFoNw1c4aeIcVUPPbXUVJ94wwnMOAqUHyzoEPVMA==}

  '@webassemblyjs/helper-numbers@1.13.2':
    resolution: {integrity: sha512-FE8aCmS5Q6eQYcV3gI35O4J789wlQA+7JrqTTpJqn5emA4U2hvwJmvFRC0HODS+3Ye6WioDklgd6scJ3+PLnEA==}

  '@webassemblyjs/helper-wasm-bytecode@1.13.2':
    resolution: {integrity: sha512-3QbLKy93F0EAIXLh0ogEVR6rOubA9AoZ+WRYhNbFyuB70j3dRdwH9g+qXhLAO0kiYGlg3TxDV+I4rQTr/YNXkA==}

  '@webassemblyjs/helper-wasm-section@1.14.1':
    resolution: {integrity: sha512-ds5mXEqTJ6oxRoqjhWDU83OgzAYjwsCV8Lo/N+oRsNDmx/ZDpqalmrtgOMkHwxsG0iI//3BwWAErYRHtgn0dZw==}

  '@webassemblyjs/ieee754@1.13.2':
    resolution: {integrity: sha512-4LtOzh58S/5lX4ITKxnAK2USuNEvpdVV9AlgGQb8rJDHaLeHciwG4zlGr0j/SNWlr7x3vO1lDEsuePvtcDNCkw==}

  '@webassemblyjs/leb128@1.13.2':
    resolution: {integrity: sha512-Lde1oNoIdzVzdkNEAWZ1dZ5orIbff80YPdHx20mrHwHrVNNTjNr8E3xz9BdpcGqRQbAEa+fkrCb+fRFTl/6sQw==}

  '@webassemblyjs/utf8@1.13.2':
    resolution: {integrity: sha512-3NQWGjKTASY1xV5m7Hr0iPeXD9+RDobLll3T9d2AO+g3my8xy5peVyjSag4I50mR1bBSN/Ct12lo+R9tJk0NZQ==}

  '@webassemblyjs/wasm-edit@1.14.1':
    resolution: {integrity: sha512-RNJUIQH/J8iA/1NzlE4N7KtyZNHi3w7at7hDjvRNm5rcUXa00z1vRz3glZoULfJ5mpvYhLybmVcwcjGrC1pRrQ==}

  '@webassemblyjs/wasm-gen@1.14.1':
    resolution: {integrity: sha512-AmomSIjP8ZbfGQhumkNvgC33AY7qtMCXnN6bL2u2Js4gVCg8fp735aEiMSBbDR7UQIj90n4wKAFUSEd0QN2Ukg==}

  '@webassemblyjs/wasm-opt@1.14.1':
    resolution: {integrity: sha512-PTcKLUNvBqnY2U6E5bdOQcSM+oVP/PmrDY9NzowJjislEjwP/C4an2303MCVS2Mg9d3AJpIGdUFIQQWbPds0Sw==}

  '@webassemblyjs/wasm-parser@1.14.1':
    resolution: {integrity: sha512-JLBl+KZ0R5qB7mCnud/yyX08jWFw5MsoalJ1pQ4EdFlgj9VdXKGuENGsiCIjegI1W7p91rUlcB/LB5yRJKNTcQ==}

  '@webassemblyjs/wast-printer@1.14.1':
    resolution: {integrity: sha512-kPSSXE6De1XOR820C90RIo2ogvZG+c3KiHzqUoO/F34Y2shGzesfqv7o57xrxovZJH/MetF5UjroJ/R/3isoiw==}

  '@xtuc/ieee754@1.2.0':
    resolution: {integrity: sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==}

  '@xtuc/long@4.2.2':
    resolution: {integrity: sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==}

  '@xyflow/react@12.10.2':
    resolution: {integrity: sha512-CgIi6HwlcHXwlkTpr0fxLv/0sRVNZ8IdwKLzzeCscaYBwpvfcH1QFOCeaTCuEn1FQEs/B8CjnTSjhs8udgmBgQ==}
    peerDependencies:
      react: '>=17'
      react-dom: '>=17'

  '@xyflow/system@0.0.76':
    resolution: {integrity: sha512-hvwvnRS1B3REwVDlWexsq7YQaPZeG3/mKo1jv38UmnpWmxihp14bW6VtEOuHEwJX2FvzFw8k77LyKSk/wiZVNA==}

  accepts@1.3.8:
    resolution: {integrity: sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==}
    engines: {node: '>= 0.6'}

  acorn@8.16.0:
    resolution: {integrity: sha512-UVJyE9MttOsBQIDKw1skb9nAwQuR5wuGD3+82K6JgJlm/Y+KI92oNsMNGZCYdDsVtRHSak0pcV5Dno5+4jh9sw==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  ajv-formats@2.1.1:
    resolution: {integrity: sha512-Wx0Kx52hxE7C18hkMEggYlEifqWZtYaRgouJor+WMdPnQyEK13vgEWyVNup7SoeeoLMsr4kf5h6dOW11I15MUA==}
    peerDependencies:
      ajv: ^8.0.0
    peerDependenciesMeta:
      ajv:
        optional: true

  ajv-keywords@3.5.2:
    resolution: {integrity: sha512-5p6WTN0DdTGVQk6VjcEju19IgaHudalcfabD7yhDGeA6bcQnmL+CpveLJq/3hvfwd1aof6L386Ougkx6RfyMIQ==}
    peerDependencies:
      ajv: ^6.9.1

  ajv-keywords@5.1.0:
    resolution: {integrity: sha512-YCS/JNFAUyr5vAuhk1DWm1CBxRHW9LbJ2ozWeemrIqpbsqKjHVxYPyi5GC0rjZIT5JxJ3virVTS8wk4i/Z+krw==}
    peerDependencies:
      ajv: ^8.8.2

  ajv@6.15.0:
    resolution: {integrity: sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==}

  ajv@8.12.0:
    resolution: {integrity: sha512-sRu1kpcO9yLtYxBKvqfTeh9KzZEwO3STyX1HT+4CaDzC6HpTGYhIhPIzj9XuKU7KYDwnaeh5hcOwjy1QuJzBPA==}

  ajv@8.20.0:
    resolution: {integrity: sha512-Thbli+OlOj+iMPYFBVBfJ3OmCAnaSyNn4M1vz9T6Gka5Jt9ba/HIR56joy65tY6kx/FCF5VXNB819Y7/GUrBGA==}

  ansi-colors@4.1.3:
    resolution: {integrity: sha512-/6w/C21Pm1A7aZitlI5Ni/2J6FFQN8i1Cvz3kHABAAbw93v/NlvKdVOqz7CCWz/3iv/JplRSEEZ83XION15ovw==}
    engines: {node: '>=6'}

  ansi-escapes@4.3.2:
    resolution: {integrity: sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==}
    engines: {node: '>=8'}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.2.2:
    resolution: {integrity: sha512-Bq3SmSpyFHaWjPk8If9yc6svM8c56dB5BAtW4Qbw5jHTwwXXcTLoRMkpDJp6VL0XzlWaCHTXrkFURMYmD0sLqg==}
    engines: {node: '>=12'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  ansi-styles@6.2.3:
    resolution: {integrity: sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==}
    engines: {node: '>=12'}

  any-promise@1.3.0:
    resolution: {integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  append-field@1.0.0:
    resolution: {integrity: sha512-klpgFSWLW1ZEs8svjfb7g4qWY0YS5imI82dTg+QahUvJ8YqAY0P10Uk8tTyh9ZGuYEZEMaeJYCF5BFuX552hsw==}

  arg@5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-hidden@1.2.6:
    resolution: {integrity: sha512-ik3ZgC9dY/lYVVM++OISsaYDeg1tb0VtP5uL3ouh1koGOaUMDPpbFIei4JkFimWUFPn90sbMNMXQAIVOlnYKJA==}
    engines: {node: '>=10'}

  array-flatten@1.1.1:
    resolution: {integrity: sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg==}

  array-timsort@1.0.3:
    resolution: {integrity: sha512-/+3GRL7dDAGEfM6TseQk/U+mi18TU2Ms9I3UlLdUMhz2hbvGNTKdj9xniwXfUqgYhHxRx0+8UnKkvlNwVU+cWQ==}

  autoprefixer@10.5.0:
    resolution: {integrity: sha512-FMhOoZV4+qR6aTUALKX2rEqGG+oyATvwBt9IIzVR5rMa2HRWPkxf+P+PAJLD1I/H5/II+HuZcBJYEFBpq39ong==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  balanced-match@4.0.4:
    resolution: {integrity: sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==}
    engines: {node: 18 || 20 || >=22}

  base64-js@1.5.1:
    resolution: {integrity: sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==}

  base64id@2.0.0:
    resolution: {integrity: sha512-lGe34o6EHj9y3Kts9R4ZYs/Gr+6N7MCaMlIFA3F1R2O5/m7K06AxfSeO5530PEERE6/WyEg3lsuyw4GHlPZHog==}
    engines: {node: ^4.5.0 || >= 5.9}

  baseline-browser-mapping@2.10.32:
    resolution: {integrity: sha512-wbPvpyjJPC0zdfdKXxqEL3Ea+bOMD/87X4lftiJkkaBiuG6ALQy1SLmEd7BSmVCuwCQsBrCamgBoLyfFDD1EPg==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  bcryptjs@2.4.3:
    resolution: {integrity: sha512-V/Hy/X9Vt7f3BbPJEi8BdVFMByHi+jNXrYkW3huaybV/kQ0KJg0Y6PkEMbn+zeT+i+SiKZ/HMqJGIIt4LZDqNQ==}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  bl@4.1.0:
    resolution: {integrity: sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==}

  body-parser@1.20.4:
    resolution: {integrity: sha512-ZTgYYLMOXY9qKU/57FAo8F+HA2dGX7bqGc71txDRC1rS4frdFI5R7NhluHxH6M0YItAP0sHB4uqAOcYKxO6uGA==}
    engines: {node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16}

  brace-expansion@1.1.15:
    resolution: {integrity: sha512-EwOCDEex4quD37XhqM3omwtMoJjr//isUZz1JopUNWms+4Z2ViyM/k1YIRePpoVNnQhENnxtFjLaxNHrT7xIUg==}

  brace-expansion@2.1.1:
    resolution: {integrity: sha512-WR1cURNjuvBLMZBMbqM0UoE+WAfdUcEV1ccD8PVBVOI+Z3ND4+SZbN8RsfT2bMuG1qwz5RFvPukSZm5fF2D5eA==}

  brace-expansion@5.0.6:
    resolution: {integrity: sha512-kLpxurY4Z4r9sgMsyG0Z9uzsBlgiU/EFKhj/h91/8yHu0edo7XuixOIH3VcJ8kkxs6/jPzoI6U9Vj3WqbMQ94g==}
    engines: {node: 18 || 20 || >=22}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.28.2:
    resolution: {integrity: sha512-48xSriZYYg+8qXna9kwqjIVzuQxi+KYWp2+5nCYnYKPTr0LvD89Jqk2Or5ogxz0NUMfIjhh2lIUX/LyX9B4oIg==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  buffer-equal-constant-time@1.0.1:
    resolution: {integrity: sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==}

  buffer-from@1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}

  buffer@5.7.1:
    resolution: {integrity: sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==}

  busboy@1.6.0:
    resolution: {integrity: sha512-8SFQbg/0hQ9xy3UNTB0YEnsNBbWfhf7RtnzpL7TkBiTBRfrQ9Fxcnz7VJsleJpyp6rVLvXiuORqjlHi5q+PYuA==}
    engines: {node: '>=10.16.0'}

  bytes@3.1.2:
    resolution: {integrity: sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==}
    engines: {node: '>= 0.8'}

  c12@3.1.0:
    resolution: {integrity: sha512-uWoS8OU1MEIsOv8p/5a82c3H31LsWVR5qiyXVfBNOzfffjUWtPnhAb4BYI2uG2HfGmZmFjCtui5XNWaps+iFuw==}
    peerDependencies:
      magicast: ^0.3.5
    peerDependenciesMeta:
      magicast:
        optional: true

  call-bind-apply-helpers@1.0.2:
    resolution: {integrity: sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==}
    engines: {node: '>= 0.4'}

  call-bind@1.0.9:
    resolution: {integrity: sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==}
    engines: {node: '>= 0.4'}

  call-bound@1.0.4:
    resolution: {integrity: sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  camelcase-css@2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}

  caniuse-lite@1.0.30001793:
    resolution: {integrity: sha512-iwSsYWaCOoh26cV8NwNRViHlrfUvYsHDfRVcbtmw0Kg6PJIZZXwMkj1442FYLBGkeUf1juAsU3DTfxW579mrPA==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  chalk@5.6.2:
    resolution: {integrity: sha512-7NzBL0rN6fMUW+f7A6Io4h40qQlG+xGmtMxfbnH/K7TAtt8JQWVQK+6g0UXKMeVJoyV5EkkNsErQ8pVD3bLHbA==}
    engines: {node: ^12.17.0 || ^14.13 || >=16.0.0}

  chardet@0.7.0:
    resolution: {integrity: sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  chokidar@4.0.3:
    resolution: {integrity: sha512-Qgzu8kfBvo+cA4962jnP1KkS6Dop5NS6g7R5LFYJr4b8Ub94PPQXUksCw9PvXoeXPRRddRNC5C1JQUR2SMGtnA==}
    engines: {node: '>= 14.16.0'}

  chrome-trace-event@1.0.4:
    resolution: {integrity: sha512-rNjApaLzuwaOTjCiT8lSDdGN1APCiqkChLMJxJPWLunPAt5fy8xgU9/jNOchV84wfIxrA0lRQB7oCT8jrn/wrQ==}
    engines: {node: '>=6.0'}

  citty@0.1.6:
    resolution: {integrity: sha512-tskPPKEs8D2KPafUypv2gxwJP8h/OaJmC82QQGGDQcHvXX43xF2VDACcJVmZ0EuSxkpO9Kc4MlrA3q0+FG58AQ==}

  citty@0.2.2:
    resolution: {integrity: sha512-+6vJA3L98yv+IdfKGZHBNiGW5KHn22e/JwID0Strsz8h4S/csAu/OuICwxrg44k5MRiZHWIo8XXuJgQTriRP4w==}

  class-transformer@0.5.1:
    resolution: {integrity: sha512-SQa1Ws6hUbfC98vKGxZH3KFY0Y1lm5Zm0SY8XX9zbK7FJCyVEac3ATW0RIpwzW+oOfmHE5PMPufDG9hCfoEOMw==}

  class-validator@0.14.4:
    resolution: {integrity: sha512-AwNusCCam51q703dW82x95tOqQp6oC9HNUl724KxJJOfnKscI8dOloXFgyez7LbTTKWuRBA37FScqVbJEoq8Yw==}

  class-variance-authority@0.7.1:
    resolution: {integrity: sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==}

  classcat@5.0.5:
    resolution: {integrity: sha512-JhZUT7JFcQy/EzW605k/ktHtncoo9vnyW/2GspNYwFlN1C/WmjuV/xtS04e9SOkL2sTdw0VAZ2UGCcQ9lR6p6w==}

  cli-cursor@3.1.0:
    resolution: {integrity: sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==}
    engines: {node: '>=8'}

  cli-spinners@2.9.2:
    resolution: {integrity: sha512-ywqV+5MmyL4E7ybXgKys4DugZbX0FC6LnwrhjuykIjnK9k8OQacQ7axGKnjDXWNhns0xot3bZI5h55H8yo9cJg==}
    engines: {node: '>=6'}

  cli-table3@0.6.5:
    resolution: {integrity: sha512-+W/5efTR7y5HRD7gACw9yQjqMVvEMLBHmboM/kPWam+H+Hmyrgjh6YncVKK122YZkXrLudzTuAukUw9FnMf7IQ==}
    engines: {node: 10.* || >= 12.*}

  cli-width@3.0.0:
    resolution: {integrity: sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw==}
    engines: {node: '>= 10'}

  cli-width@4.1.0:
    resolution: {integrity: sha512-ouuZd4/dm2Sw5Gmqy6bGyNNNe1qt9RpmxveLSO7KcgsTnU7RXfsw+/bukWGo1abgBiMAic068rclZsO4IWmmxQ==}
    engines: {node: '>= 12'}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  clone@1.0.4:
    resolution: {integrity: sha512-JQHZ2QMW6l3aH/j6xCqQThY/9OH4D/9ls34cgkUBiEeocRTU04tHfKPBsUK1PqZCUQM7GiA0IIXJSuXHI64Kbg==}
    engines: {node: '>=0.8'}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  commander@2.20.3:
    resolution: {integrity: sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==}

  commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}

  comment-json@4.2.5:
    resolution: {integrity: sha512-bKw/r35jR3HGt5PEPm1ljsQQGyCrR8sFGNiN5L+ykDHdpO8Smxkrkla9Yi6NkQyUrb8V54PGhfMs6NrIwtxtdw==}
    engines: {node: '>= 6'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  concat-stream@1.6.2:
    resolution: {integrity: sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==}
    engines: {'0': node >= 0.8}

  concat-stream@2.0.0:
    resolution: {integrity: sha512-MWufYdFw53ccGjCA+Ol7XJYpAlW6/prSMzuPOTRnJGcGzuhLn4Scrz7qf6o8bROZ514ltazcIFJZevcfbo0x7A==}
    engines: {'0': node >= 6.0}

  confbox@0.2.4:
    resolution: {integrity: sha512-ysOGlgTFbN2/Y6Cg3Iye8YKulHw+R2fNXHrgSmXISQdMnomY6eNDprVdW9R5xBguEqI954+S6709UyiO7B+6OQ==}

  consola@2.15.3:
    resolution: {integrity: sha512-9vAdYbHj6x2fLKC4+oPH0kFzY/orMZyG2Aj+kNylHxKGJ/Ed4dpNyAQYwJOdqO4zdM7XpVHmyejQDcQHrnuXbw==}

  consola@3.4.2:
    resolution: {integrity: sha512-5IKcdX0nnYavi6G7TtOhwkYzyjfJlatbjMjuLSfE2kYT5pMDOilZ4OvMhi637CcDICTmz3wARPoyhqyX1Y+XvA==}
    engines: {node: ^14.18.0 || >=16.10.0}

  content-disposition@0.5.4:
    resolution: {integrity: sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==}
    engines: {node: '>= 0.6'}

  content-type@1.0.5:
    resolution: {integrity: sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==}
    engines: {node: '>= 0.6'}

  cookie-signature@1.0.7:
    resolution: {integrity: sha512-NXdYc3dLr47pBkpUCHtKSwIOQXLVn8dZEuywboCOJY/osA0wFSLlSawr3KN8qXJEyX66FcONTH8EIlVuK0yyFA==}

  cookie@0.7.2:
    resolution: {integrity: sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==}
    engines: {node: '>= 0.6'}

  core-util-is@1.0.3:
    resolution: {integrity: sha512-ZQBvi1DcpJ4GDqanjucZ2Hj3wEO5pZDS89BWbkcrvdxksJorwUDDZamX9ldFkp9aw2lmBDLgkObEA4DWNJ9FYQ==}

  cors@2.8.5:
    resolution: {integrity: sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==}
    engines: {node: '>= 0.10'}

  cors@2.8.6:
    resolution: {integrity: sha512-tJtZBBHA6vjIAaF6EnIaq6laBBP9aq/Y3ouVJjEfoHbRBcHBAHYcMh/w8LDrk2PvIMMq8gmopa5D4V8RmbrxGw==}
    engines: {node: '>= 0.10'}

  cosmiconfig@8.3.6:
    resolution: {integrity: sha512-kcZ6+W5QzcJ3P1Mt+83OUv/oHFqZHIx8DuxG6eZ5RGMERoLqp4BuGjhHLYGK+Kf5XVkQvqBSmAy/nGWN3qDgEA==}
    engines: {node: '>=14'}
    peerDependencies:
      typescript: '>=4.9.5'
    peerDependenciesMeta:
      typescript:
        optional: true

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  csstype@3.2.3:
    resolution: {integrity: sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==}

  d3-color@3.1.0:
    resolution: {integrity: sha512-zg/chbXyeBtMQ1LbD/WSoW2DpC3I0mpmPdW+ynRTj/x2DAWYrIY7qeZIHidozwV24m4iavr15lNwIwLxRmOxhA==}
    engines: {node: '>=12'}

  d3-dispatch@3.0.1:
    resolution: {integrity: sha512-rzUyPU/S7rwUflMyLc1ETDeBj0NRuHKKAcvukozwhshr6g6c5d8zh4c2gQjY2bZ0dXeGLWc1PF174P2tVvKhfg==}
    engines: {node: '>=12'}

  d3-drag@3.0.0:
    resolution: {integrity: sha512-pWbUJLdETVA8lQNJecMxoXfH6x+mO2UQo8rSmZ+QqxcbyA3hfeprFgIT//HW2nlHChWeIIMwS2Fq+gEARkhTkg==}
    engines: {node: '>=12'}

  d3-ease@3.0.1:
    resolution: {integrity: sha512-wR/XK3D3XcLIZwpbvQwQ5fK+8Ykds1ip7A2Txe0yxncXSdq1L9skcG7blcedkOX+ZcgxGAmLX1FrRGbADwzi0w==}
    engines: {node: '>=12'}

  d3-interpolate@3.0.1:
    resolution: {integrity: sha512-3bYs1rOD33uo8aqJfKP3JWPAibgw8Zm2+L9vBKEHJ2Rg+viTR7o5Mmv5mZcieN+FRYaAOWX5SJATX6k1PWz72g==}
    engines: {node: '>=12'}

  d3-selection@3.0.0:
    resolution: {integrity: sha512-fmTRWbNMmsmWq6xJV8D19U/gw/bwrHfNXxrIN+HfZgnzqTHp9jOmKMhsTUjXOJnZOdZY9Q28y4yebKzqDKlxlQ==}
    engines: {node: '>=12'}

  d3-timer@3.0.1:
    resolution: {integrity: sha512-ndfJ/JxxMd3nw31uyKoY2naivF+r29V+Lc0svZxe1JvvIRmi8hUsrMvdOwgS1o6uBHmiz91geQ0ylPP0aj1VUA==}
    engines: {node: '>=12'}

  d3-transition@3.0.1:
    resolution: {integrity: sha512-ApKvfjsSR6tg06xrL434C0WydLr7JewBB3V+/39RMHsaXTOG0zmt/OAXeng5M5LBm0ojmxJrpomQVZ1aPvBL4w==}
    engines: {node: '>=12'}
    peerDependencies:
      d3-selection: 2 - 3

  d3-zoom@3.0.0:
    resolution: {integrity: sha512-b8AmV3kfQaqWAuacbPuNbL6vahnOJflOhexLzMMNLga62+/nh0JzvJ0aO/5a5MVgUFGS7Hu1P9P03o3fJkDCyw==}
    engines: {node: '>=12'}

  debug@2.6.9:
    resolution: {integrity: sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.3.7:
    resolution: {integrity: sha512-Er2nc/H7RrMXZBFCEim6TCmMk02Z8vLC2Rbi1KEBggpo0fS6l0S1nnapwmIi3yW/+GOJap1Krg4w0Hg80oCqgQ==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.4.3:
    resolution: {integrity: sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  deepmerge-ts@7.1.5:
    resolution: {integrity: sha512-HOJkrhaYsweh+W+e74Yn7YStZOilkoPb6fycpwNLKzSPtruFs48nYis0zy5yJz1+ktUhHxoRDJ27RQAWLIJVJw==}
    engines: {node: '>=16.0.0'}

  deepmerge@4.3.1:
    resolution: {integrity: sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==}
    engines: {node: '>=0.10.0'}

  defaults@1.0.4:
    resolution: {integrity: sha512-eFuaLoy/Rxalv2kr+lqMlUnrDWV+3j4pljOIJgLIhI058IQfWJ7vXhyEIHu+HtC738klGALYxOKDO0bQP3tg8A==}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  defu@6.1.7:
    resolution: {integrity: sha512-7z22QmUWiQ/2d0KkdYmANbRUVABpZ9SNYyH5vx6PZ+nE5bcC0l7uFvEfHlyld/HcGBFTL536ClDt3DEcSlEJAQ==}

  depd@2.0.0:
    resolution: {integrity: sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==}
    engines: {node: '>= 0.8'}

  destr@2.0.5:
    resolution: {integrity: sha512-ugFTXCtDZunbzasqBxrK93Ik/DRYsO6S/fedkWEMKqt04xZ4csmnmwGDBAb07QWNaGMAmnTIemsYZCksjATwsA==}

  destroy@1.2.0:
    resolution: {integrity: sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==}
    engines: {node: '>= 0.8', npm: 1.2.8000 || >= 1.4.16}

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  detect-node-es@1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}

  didyoumean@1.2.2:
    resolution: {integrity: sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==}

  dlv@1.1.3:
    resolution: {integrity: sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==}

  dotenv-cli@8.0.0:
    resolution: {integrity: sha512-aLqYbK7xKOiTMIRf1lDPbI+Y+Ip/wo5k3eyp6ePysVaSqbyxjyK3dK35BTxG+rmd7djf5q2UPs4noPNH+cj0Qw==}
    hasBin: true

  dotenv-expand@10.0.0:
    resolution: {integrity: sha512-GopVGCpVS1UKH75VKHGuQFqS1Gusej0z4FyQkPdwjil2gNIv+LNsqBlboOzpJFZKVT95GkCyWJbBSdFEFUWI2A==}
    engines: {node: '>=12'}

  dotenv@16.6.1:
    resolution: {integrity: sha512-uBq4egWHTcTt33a72vpSG0z3HnPuIl6NqYcTrKEg2azoEyl2hpW0zqlxysq2pK9HlDIHyHyakeYaYnSAwd8bow==}
    engines: {node: '>=12'}

  dunder-proto@1.0.1:
    resolution: {integrity: sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==}
    engines: {node: '>= 0.4'}

  eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  ecdsa-sig-formatter@1.0.11:
    resolution: {integrity: sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==}

  echarts-for-react@3.0.6:
    resolution: {integrity: sha512-4zqLgTGWS3JvkQDXjzkR1k1CHRdpd6by0988TWMJgnvDytegWLbeP/VNZmMa+0VJx2eD7Y632bi2JquXDgiGJg==}
    peerDependencies:
      echarts: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0
      react: ^15.0.0 || >=16.0.0

  echarts@5.6.0:
    resolution: {integrity: sha512-oTbVTsXfKuEhxftHqL5xprgLoc0k7uScAwtryCgWF6hPYFLRwOUHiFmHGCBKP5NPFNkDVopOieyUqYGH8Fa3kA==}

  ee-first@1.1.1:
    resolution: {integrity: sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==}

  effect@3.21.0:
    resolution: {integrity: sha512-PPN80qRokCd1f015IANNhrwOnLO7GrrMQfk4/lnZRE/8j7UPWrNNjPV0uBrZutI/nHzernbW+J0hdqQysHiSnQ==}

  electron-to-chromium@1.5.363:
    resolution: {integrity: sha512-VjUKPyWzGnT1fujlkEGC/BvN70Hh70KXtAqcmniXviYlJC/ivcT+BWGPyxWVbJZLfvtKR6dqg1L7T7pgAMBtWA==}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  empathic@2.0.0:
    resolution: {integrity: sha512-i6UzDscO/XfAcNYD75CfICkmfLedpyPDdozrLMmQc5ORaQcdMoc21OnlEylMIqI7U8eniKrPMxxtj8k0vhmJhA==}
    engines: {node: '>=14'}

  encodeurl@2.0.0:
    resolution: {integrity: sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==}
    engines: {node: '>= 0.8'}

  engine.io-client@6.6.5:
    resolution: {integrity: sha512-QCwxUDULPlXv8F6tqMMKx5dNkTe6OaBYRMPYeXKBlyOoKvAmE0ac6pW7fFhSscJ/5SI7666/U/B+MElbsrJlIg==}

  engine.io-parser@5.2.3:
    resolution: {integrity: sha512-HqD3yTBfnBxIrbnM1DoD6Pcq8NECnh8d4As1Qgh0z5Gg3jRRIqijury0CL3ghu/edArpUYiYqQiDUQBIs4np3Q==}
    engines: {node: '>=10.0.0'}

  engine.io@6.6.8:
    resolution: {integrity: sha512-2agL3ueZhqxoVrfmntO8yuVj+uNSlIOnhykYHk3Cq0ShYPdUjjUiSJrQvXjq01I9jAuI0Zl2YO8Evv5Mqytm5g==}
    engines: {node: '>=10.2.0'}

  enhanced-resolve@5.22.0:
    resolution: {integrity: sha512-xYcDWrpELkFzz9SpZ3PlI6Eu6eD93Yf0WLDRxikGhWJ3MAir2SNZTIVCVZqZ/NUyx8AdMc2gT9C0gPiw18kG+A==}
    engines: {node: '>=10.13.0'}

  error-ex@1.3.4:
    resolution: {integrity: sha512-sqQamAnR14VgCr1A618A3sGrygcpK+HEbenA/HiEAkkUwcZIIB/tgWqHFxWgOyDh4nB4JCRimh79dR5Ywc9MDQ==}

  es-define-property@1.0.1:
    resolution: {integrity: sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-module-lexer@1.7.0:
    resolution: {integrity: sha512-jEQoCwk8hyb2AZziIOLhDqpm5+2ww5uIE6lkO/6jcOCusfk6LhMHpXXfBLXTZ7Ydyt0j4VoUQv6uGNYbdW+kBA==}

  es-object-atoms@1.1.2:
    resolution: {integrity: sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==}
    engines: {node: '>= 0.4'}

  esbuild@0.28.0:
    resolution: {integrity: sha512-sNR9MHpXSUV/XB4zmsFKN+QgVG82Cc7+/aaxJ8Adi8hyOac+EXptIp45QBPaVyX3N70664wRbTcLTOemCAnyqw==}
    engines: {node: '>=18'}
    hasBin: true

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-html@1.0.3:
    resolution: {integrity: sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==}

  escape-string-regexp@1.0.5:
    resolution: {integrity: sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==}
    engines: {node: '>=0.8.0'}

  eslint-scope@5.1.1:
    resolution: {integrity: sha512-2NxwbF/hZ0KpepYN0cNbo+FN6XoK7GaHlQhgx/hIZl6Va0bF45RQOOwhLIy8lQDbuCiadSLCBnH2CFYquit5bw==}
    engines: {node: '>=8.0.0'}

  esprima@4.0.1:
    resolution: {integrity: sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==}
    engines: {node: '>=4'}
    hasBin: true

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@4.3.0:
    resolution: {integrity: sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  etag@1.8.1:
    resolution: {integrity: sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==}
    engines: {node: '>= 0.6'}

  events@3.3.0:
    resolution: {integrity: sha512-mQw+2fkQbALzQ7V0MY0IqdnXNOeTtP4r0lN9z7AAawCXgqea7bDii20AYrIBrFd/Hx0M2Ocz6S111CaFkUcb0Q==}
    engines: {node: '>=0.8.x'}

  express@4.22.1:
    resolution: {integrity: sha512-F2X8g9P1X7uCPZMA3MVf9wcTqlyNp7IhH5qPCI0izhaOIYXaW9L535tGA3qmjRzpH+bZczqq7hVKxTR4NWnu+g==}
    engines: {node: '>= 0.10.0'}

  exsolve@1.0.8:
    resolution: {integrity: sha512-LmDxfWXwcTArk8fUEnOfSZpHOJ6zOMUJKOtFLFqJLoKJetuQG874Uc7/Kki7zFLzYybmZhp1M7+98pfMqeX8yA==}

  external-editor@3.1.0:
    resolution: {integrity: sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==}
    engines: {node: '>=4'}

  fast-check@3.23.2:
    resolution: {integrity: sha512-h5+1OzzfCC3Ef7VbtKdcv7zsstUQwUDlYpUTvjeUsJAssPgLn7QzbboPtL5ro04Mq0rPOsMzl7q5hIbRs2wD1A==}
    engines: {node: '>=8.0.0'}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-glob@3.3.3:
    resolution: {integrity: sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-safe-stringify@2.1.1:
    resolution: {integrity: sha512-W+KJc2dmILlPplD/H4K9l9LcAHAfPtP6BY84uVLXQ6Evcz9Lcg33Y2z1IVblT6xdY54PXYVHEv+0Wpq8Io6zkA==}

  fast-uri@3.1.2:
    resolution: {integrity: sha512-rVjf7ArG3LTk+FS6Yw81V1DLuZl1bRbNrev6Tmd/9RaroeeRRJhAt7jg/6YFxbvAQXUCavSoZhPPj6oOx+5KjQ==}

  fastq@1.20.1:
    resolution: {integrity: sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  fflate@0.8.3:
    resolution: {integrity: sha512-tbZNuJrLwGUp3zshBtdy4W+ORxZuIh8a5ilyIEQDC5rY1f3U20JMry0Ll3WBzU58EZKsEuJFXhb5gwv8CsPvgA==}

  figures@3.2.0:
    resolution: {integrity: sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==}
    engines: {node: '>=8'}

  file-type@20.4.1:
    resolution: {integrity: sha512-hw9gNZXUfZ02Jo0uafWLaFVPter5/k2rfcrjFJJHX/77xtSDOfJuEFb6oKlFV86FLP1SuyHMW1PSk0U9M5tKkQ==}
    engines: {node: '>=18'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  finalhandler@1.3.2:
    resolution: {integrity: sha512-aA4RyPcd3badbdABGDuTXCMTtOneUCAYH/gxoYRTZlIJdF0YPWuGqiAsIrhNnnqdXGswYk6dGujem4w80UJFhg==}
    engines: {node: '>= 0.8'}

  foreground-child@3.3.1:
    resolution: {integrity: sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==}
    engines: {node: '>=14'}

  fork-ts-checker-webpack-plugin@9.0.2:
    resolution: {integrity: sha512-Uochze2R8peoN1XqlSi/rGUkDQpRogtLFocP9+PGu68zk1BDAKXfdeCdyVZpgTk8V8WFVQXdEz426VKjXLO1Gg==}
    engines: {node: '>=12.13.0', yarn: '>=1.0.0'}
    peerDependencies:
      typescript: '>3.6.0'
      webpack: ^5.11.0

  forwarded@0.2.0:
    resolution: {integrity: sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==}
    engines: {node: '>= 0.6'}

  fraction.js@5.3.4:
    resolution: {integrity: sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==}

  framer-motion@11.18.2:
    resolution: {integrity: sha512-5F5Och7wrvtLVElIpclDT0CBzMVg3dL22B64aZwHtsIY8RB4mXICLrkajK4G9R+ieSAGcgrLeae2SeUTg2pr6w==}
    peerDependencies:
      '@emotion/is-prop-valid': '*'
      react: ^18.0.0 || ^19.0.0
      react-dom: ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@emotion/is-prop-valid':
        optional: true
      react:
        optional: true
      react-dom:
        optional: true

  fresh@0.5.2:
    resolution: {integrity: sha512-zJ2mQYM18rEFOudeV4GShTGIQ7RbzA7ozbU9I/XBpm7kqgMywgmylMwXHxZJmkVoYkna9d2pVXVXPdYTP9ej8Q==}
    engines: {node: '>= 0.6'}

  fs-extra@10.1.0:
    resolution: {integrity: sha512-oRXApq54ETRj4eMiFzGnHWGy+zo5raudjuxN0b8H7s/RU2oW0Wvsx9O0ACRN/kRq9E8Vu/ReskGB5o3ji+FzHQ==}
    engines: {node: '>=12'}

  fs-monkey@1.1.0:
    resolution: {integrity: sha512-QMUezzXWII9EV5aTFXW1UBVUO77wYPpjqIF8/AviUCThNeSYZykpoTixUeaNNBwmCev0AMDWMAni+f8Hxb1IFw==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  get-intrinsic@1.3.0:
    resolution: {integrity: sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==}
    engines: {node: '>= 0.4'}

  get-nonce@1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}

  get-proto@1.0.1:
    resolution: {integrity: sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==}
    engines: {node: '>= 0.4'}

  giget@2.0.0:
    resolution: {integrity: sha512-L5bGsVkxJbJgdnwyuheIunkGatUF/zssUoxxjACCseZYAVbaqdh9Tsmmlkl8vYan09H7sbvKt4pS8GqKLBrEzA==}
    hasBin: true

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  glob-to-regexp@0.4.1:
    resolution: {integrity: sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==}

  glob@10.4.5:
    resolution: {integrity: sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==}
    hasBin: true

  glob@13.0.6:
    resolution: {integrity: sha512-Wjlyrolmm8uDpm/ogGyXZXb1Z+Ca2B8NbJwqBVg0axK9GbBeoS7yGV6vjXnYdGm6X53iehEuxxbyiKp8QmN4Vw==}
    engines: {node: 18 || 20 || >=22}

  gopd@1.2.0:
    resolution: {integrity: sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==}
    engines: {node: '>= 0.4'}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-own-prop@2.0.0:
    resolution: {integrity: sha512-Pq0h+hvsVm6dDEa8x82GnLSYHOzNDt7f0ddFa3FqcQlgzEiptPqL+XrOJNavjOzSYiYWIrgeVYYgGlLmnxwilQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-symbols@1.1.0:
    resolution: {integrity: sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==}
    engines: {node: '>= 0.4'}

  hasown@2.0.3:
    resolution: {integrity: sha512-ej4AhfhfL2Q2zpMmLo7U1Uv9+PyhIZpgQLGT1F9miIGmiCJIoCgSmczFdrc97mWT4kVY72KA+WnnhJ5pghSvSg==}
    engines: {node: '>= 0.4'}

  http-errors@2.0.1:
    resolution: {integrity: sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==}
    engines: {node: '>= 0.8'}

  iconv-lite@0.4.24:
    resolution: {integrity: sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==}
    engines: {node: '>=0.10.0'}

  ieee754@1.2.1:
    resolution: {integrity: sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA==}

  import-fresh@3.3.1:
    resolution: {integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==}
    engines: {node: '>=6'}

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  inquirer@8.2.6:
    resolution: {integrity: sha512-M1WuAmb7pn9zdFRtQYk26ZBoY043Sse0wVDdk4Bppr+JOXyQYybdtvK+l9wUibhtjdjvtoiNy8tk+EgsYIUqKg==}
    engines: {node: '>=12.0.0'}

  inquirer@9.2.15:
    resolution: {integrity: sha512-vI2w4zl/mDluHt9YEQ/543VTCwPKWiHzKtm9dM2V0NdFcqEexDAjUHzO1oA60HRNaVifGXXM1tRRNluLVHa0Kg==}
    engines: {node: '>=18'}

  ipaddr.js@1.9.1:
    resolution: {integrity: sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==}
    engines: {node: '>= 0.10'}

  is-arrayish@0.2.1:
    resolution: {integrity: sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-core-module@2.16.2:
    resolution: {integrity: sha512-evOr8xfXKxE6qSR0hSXL2r3sd7ALj8+7jQEUvPYcm5sgZFdJ+AYzT6yNmJenvIYQBgIGwfwz08sL8zoL7yq2BA==}
    engines: {node: '>= 0.4'}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-interactive@1.0.0:
    resolution: {integrity: sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w==}
    engines: {node: '>=8'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-unicode-supported@0.1.0:
    resolution: {integrity: sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw==}
    engines: {node: '>=10'}

  isarray@1.0.0:
    resolution: {integrity: sha512-VLghIWNM6ELQzo7zwmcg0NmTVyWKYjvIeM83yjp0wRDTmUnrM678fQbcKBo6n2CJEF0szoG//ytg+TKla89ALQ==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  iterare@1.2.1:
    resolution: {integrity: sha512-RKYVTCjAnRthyJes037NX/IiqeidgN1xc3j1RjFfECFp28A1GVwK9nA+i0rJPaHqSZwygLzRnFlzUuHFoWWy+Q==}
    engines: {node: '>=6'}

  jackspeak@3.4.3:
    resolution: {integrity: sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==}

  jest-worker@27.5.1:
    resolution: {integrity: sha512-7vuh85V5cdDofPyxn58nrPjBktZo0u9x1g8WtjQol+jZDaE+fhN+cIvTj11GndBnMnyfrUOG1sZQxCdjKh+DKg==}
    engines: {node: '>= 10.13.0'}

  jiti@1.21.7:
    resolution: {integrity: sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==}
    hasBin: true

  jiti@2.7.0:
    resolution: {integrity: sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==}
    hasBin: true

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@4.1.1:
    resolution: {integrity: sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==}
    hasBin: true

  json-parse-even-better-errors@2.3.1:
    resolution: {integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-schema-traverse@1.0.0:
    resolution: {integrity: sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==}

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jsonc-parser@3.2.1:
    resolution: {integrity: sha512-AilxAyFOAcK5wA1+LeaySVBrHsGQvUFCDWXKpZjzaL0PqW+xfBOttn8GNtWKFWqneyMZj41MWF9Kl6iPWLwgOA==}

  jsonc-parser@3.3.1:
    resolution: {integrity: sha512-HUgH65KyejrUFPvHFPbqOY0rsFip3Bo5wb4ngvdi1EpCYWUQDC5V+Y7mZws+DLkr4M//zQJoanu1SP+87Dv1oQ==}

  jsonfile@6.2.1:
    resolution: {integrity: sha512-zwOTdL3rFQ/lRdBnntKVOX6k5cKJwEc1HdilT71BWEu7J41gXIB2MRp+vxduPSwZJPWBxEzv4yH1wYLJGUHX4Q==}

  jsonwebtoken@9.0.2:
    resolution: {integrity: sha512-PRp66vJ865SSqOlgqS8hujT5U4AOgMfhrwYIuIhfKaoSCZcirrmASQr8CX7cUg+RMih+hgznrjp99o+W4pJLHQ==}
    engines: {node: '>=12', npm: '>=6'}

  jsonwebtoken@9.0.3:
    resolution: {integrity: sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==}
    engines: {node: '>=12', npm: '>=6'}

  jwa@1.4.2:
    resolution: {integrity: sha512-eeH5JO+21J78qMvTIDdBXidBd6nG2kZjg5Ohz/1fpa28Z4CcsWUzJ1ZZyFq/3z3N17aZy+ZuBoHljASbL1WfOw==}

  jwa@2.0.1:
    resolution: {integrity: sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==}

  jws@3.2.3:
    resolution: {integrity: sha512-byiJ0FLRdLdSVSReO/U4E7RoEyOCKnEnEPMjq3HxWtvzLsV08/i5RQKsFVNkCldrCaPr2vDNAOMsfs8T/Hze7g==}

  jws@4.0.1:
    resolution: {integrity: sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==}

  libphonenumber-js@1.13.3:
    resolution: {integrity: sha512-xMkdAMqcyG7iN2WZZmGIfWbYxW4orRkny+0/AXIbwL0xll2zkDX0Vzo/BXFa6+7mh2UvJl9MbcTtHk0YXkFtBA==}

  lilconfig@3.1.3:
    resolution: {integrity: sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==}
    engines: {node: '>=14'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  loader-runner@4.3.2:
    resolution: {integrity: sha512-DFEqQ3ihfS9blba08cLfYf1NRAIEm+dDjic073DRDc3/JspI/8wYmtDsHwd3+4hwvdxSK7PGaElfTmm0awWJ4w==}
    engines: {node: '>=6.11.5'}

  lodash.includes@4.3.0:
    resolution: {integrity: sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==}

  lodash.isboolean@3.0.3:
    resolution: {integrity: sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==}

  lodash.isinteger@4.0.4:
    resolution: {integrity: sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==}

  lodash.isnumber@3.0.3:
    resolution: {integrity: sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==}

  lodash.isplainobject@4.0.6:
    resolution: {integrity: sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==}

  lodash.isstring@4.0.1:
    resolution: {integrity: sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==}

  lodash.once@4.1.1:
    resolution: {integrity: sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==}

  lodash@4.18.1:
    resolution: {integrity: sha512-dMInicTPVE8d1e5otfwmmjlxkZoUpiVLwyeTdUsi/Caj/gfzzblBcCE5sRHV/AsjuCmxWrte2TNGSYuCeCq+0Q==}

  log-symbols@4.1.0:
    resolution: {integrity: sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==}
    engines: {node: '>=10'}

  lru-cache@10.4.3:
    resolution: {integrity: sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==}

  lru-cache@11.5.1:
    resolution: {integrity: sha512-RPimw/7aMdv2oqRrxKwvZXcPfwBrn/JZ2xYcY9Hus/6LaS3VOAKVWKWgNLCFSiOm1ESXinjsDlidVU7JlnCN2A==}
    engines: {node: 20 || >=22}

  lucide-react@0.469.0:
    resolution: {integrity: sha512-28vvUnnKQ/dBwiCQtwJw7QauYnE7yd2Cyp4tTTJpvglX4EMpbflcdBgrgToX2j71B3YvugK/NH3BGUk+E/p/Fw==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0

  magic-string@0.30.8:
    resolution: {integrity: sha512-ISQTe55T2ao7XtlAStud6qwYPZjE4GK1S/BeVPus4jrq6JuOnQ00YKQC581RWhR122W7msZV263KzVeLoqidyQ==}
    engines: {node: '>=12'}

  math-intrinsics@1.1.0:
    resolution: {integrity: sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==}
    engines: {node: '>= 0.4'}

  media-typer@0.3.0:
    resolution: {integrity: sha512-dq+qelQ9akHpcOl/gUVRTxVIOkAJ1wR3QAvb4RsVjS8oVoFjDGTc679wJYmUmknUF5HwMLOgb5O+a3KxfWapPQ==}
    engines: {node: '>= 0.6'}

  memfs@3.5.3:
    resolution: {integrity: sha512-UERzLsxzllchadvbPs5aolHh65ISpKpM+ccLbOJ8/vvpBKmAWf+la7dXFy7Mr0ySHbdHrFv5kGFCUHHe6GFEmw==}
    engines: {node: '>= 4.0.0'}

  merge-descriptors@1.0.3:
    resolution: {integrity: sha512-gaNvAS7TZ897/rVaZ0nMtAyxNyi/pdbjbAwUpFQpN70GqnVfOiXpeUUMKRBmzXaSQ8DdTX4/0ms62r2K+hE6mQ==}

  merge-stream@2.0.0:
    resolution: {integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  methods@1.1.2:
    resolution: {integrity: sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==}
    engines: {node: '>= 0.6'}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  mime-db@1.52.0:
    resolution: {integrity: sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==}
    engines: {node: '>= 0.6'}

  mime-types@2.1.35:
    resolution: {integrity: sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==}
    engines: {node: '>= 0.6'}

  mime@1.6.0:
    resolution: {integrity: sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==}
    engines: {node: '>=4'}
    hasBin: true

  mimic-fn@2.1.0:
    resolution: {integrity: sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==}
    engines: {node: '>=6'}

  minimatch@10.2.5:
    resolution: {integrity: sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==}
    engines: {node: 18 || 20 || >=22}

  minimatch@3.1.5:
    resolution: {integrity: sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==}

  minimatch@9.0.9:
    resolution: {integrity: sha512-OBwBN9AL4dqmETlpS2zasx+vTeWclWzkblfZk7KTA5j3jeOONz/tRCnZomUyvNg83wL5Zv9Ss6HMJXAgL8R2Yg==}
    engines: {node: '>=16 || 14 >=14.17'}

  minimist@1.2.8:
    resolution: {integrity: sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==}

  minipass@7.1.3:
    resolution: {integrity: sha512-tEBHqDnIoM/1rXME1zgka9g6Q2lcoCkxHLuc7ODJ5BxbP5d4c2Z5cGgtXAku59200Cx7diuHTOYfSBD8n6mm8A==}
    engines: {node: '>=16 || 14 >=14.17'}

  mkdirp@0.5.6:
    resolution: {integrity: sha512-FP+p8RB8OWpF3YZBCrP5gtADmtXApB5AMLn+vdyA+PyxCjrCs00mjyUozssO33cwDeT3wNGdLxJ5M//YqtHAJw==}
    hasBin: true

  motion-dom@11.18.1:
    resolution: {integrity: sha512-g76KvA001z+atjfxczdRtw/RXOM3OMSdd1f4DL77qCTF/+avrRJiawSG4yDibEQ215sr9kpinSlX2pCTJ9zbhw==}

  motion-utils@11.18.1:
    resolution: {integrity: sha512-49Kt+HKjtbJKLtgO/LKj9Ld+6vw9BjH5d9sc40R/kVyH8GLAXgT42M2NnuPcJNuA3s9ZfZBUcwIgpmZWGEE+hA==}

  ms@2.0.0:
    resolution: {integrity: sha512-Tpp60P6IUJDTuOq/5Z8cdskzJujfwqfOTkrwIwj7IRISpnkJnT6SyJ4PCPnGMoFjC9ddhal5KVIYtAt97ix05A==}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  multer@1.4.5-lts.2:
    resolution: {integrity: sha512-VzGiVigcG9zUAoCNU+xShztrlr1auZOlurXynNvO9GiWD1/mTBbUljOKY+qMeazBqXgRnjzeEgJI/wyjJUHg9A==}
    engines: {node: '>= 6.0.0'}
    deprecated: Multer 1.x is impacted by a number of vulnerabilities, which have been patched in 2.x. You should upgrade to the latest 2.x version.

  multer@2.0.2:
    resolution: {integrity: sha512-u7f2xaZ/UG8oLXHvtF/oWTRvT44p9ecwBBqTwgJVq0+4BW1g8OW01TyMEGWBHbyMOYVHXslaut7qEQ1meATXgw==}
    engines: {node: '>= 10.16.0'}

  mute-stream@0.0.8:
    resolution: {integrity: sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA==}

  mute-stream@1.0.0:
    resolution: {integrity: sha512-avsJQhyd+680gKXyG/sQc0nXaC6rBkPOfyHYcFb9+hdkqQkR9bdnkJ0AMZhke0oesPqIO+mFFJ+IdBc7mst4IA==}
    engines: {node: ^14.17.0 || ^16.13.0 || >=18.0.0}

  mz@2.7.0:
    resolution: {integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==}

  nanoid@3.3.12:
    resolution: {integrity: sha512-ZB9RH/39qpq5Vu6Y+NmUaFhQR6pp+M2Xt76XBnEwDaGcVAqhlvxrl3B2bKS5D3NH3QR76v3aSrKaF/Kiy7lEtQ==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  negotiator@0.6.3:
    resolution: {integrity: sha512-+EUsqGPLsM+j/zdChZjsnX51g4XrHFOIXwfnCVPGlQk/k5giakcKsuxCObBRu6DSm9opw/O6slWbJdghQM4bBg==}
    engines: {node: '>= 0.6'}

  neo-async@2.6.2:
    resolution: {integrity: sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==}

  next@15.5.18:
    resolution: {integrity: sha512-eKL8zUJkX9Y5lE+RX/2YJoItVdGlIscyVyboeD9wSpp0PaGqjoA4tTpT2qPqz9ax+5IzGESyLSeZ/RCwbSZ2uQ==}
    engines: {node: ^18.18.0 || ^19.8.0 || >= 20.0.0}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.51.1
      babel-plugin-react-compiler: '*'
      react: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      react-dom: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      sass:
        optional: true

  node-abort-controller@3.1.1:
    resolution: {integrity: sha512-AGK2yQKIjRuqnc6VkX2Xj5d+QW8xZ87pa1UK6yA6ouUyuxfHuMP6umE5QK7UmTeOAymo+Zx1Fxiuw9rVx8taHQ==}

  node-emoji@1.11.0:
    resolution: {integrity: sha512-wo2DpQkQp7Sjm2A0cq+sN7EHKO6Sl0ctXeBdFZrL9T9+UywORbufTcTZxom8YqpLQt/FqNMUkOpkZrJVYSKD3A==}

  node-fetch-native@1.6.7:
    resolution: {integrity: sha512-g9yhqoedzIUm0nTnTqAQvueMPVOuIY16bqgAJJC8XOOubYFNwz6IER9qs0Gq2Xd0+CecCKFjtdDTMA4u4xG06Q==}

  node-fetch@2.7.0:
    resolution: {integrity: sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==}
    engines: {node: 4.x || >=6.0.0}
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true

  node-releases@2.0.46:
    resolution: {integrity: sha512-GYVXHE2KnrzAfsAjl4uP++evGFCrAU1jta4ubEjIG7YWt/64Gqv66a30yKwWczVjA6j3bM4nBwH7Pk1JmDHaxQ==}
    engines: {node: '>=18'}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  nypm@0.6.6:
    resolution: {integrity: sha512-vRyr0r4cbBapw07Xw8xrj9Teq3o7MUD35rSaTcanDbW+aK2XHDgJFiU6ZTj2GBw7Q12ysdsyFss+Vdz4hQ0Y6Q==}
    engines: {node: '>=18'}
    hasBin: true

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-hash@3.0.0:
    resolution: {integrity: sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==}
    engines: {node: '>= 6'}

  object-inspect@1.13.4:
    resolution: {integrity: sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==}
    engines: {node: '>= 0.4'}

  ohash@2.0.11:
    resolution: {integrity: sha512-RdR9FQrFwNBNXAr4GixM8YaRZRJ5PUWbKYbE5eOsrwAjJW0q2REGcf79oYPsLyskQCZG1PLN+S/K1V00joZAoQ==}

  on-finished@2.4.1:
    resolution: {integrity: sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==}
    engines: {node: '>= 0.8'}

  onetime@5.1.2:
    resolution: {integrity: sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==}
    engines: {node: '>=6'}

  ora@5.4.1:
    resolution: {integrity: sha512-5b6Y85tPxZZ7QytO+BQzysW31HJku27cRIlkbAXaNx+BdcVi+LlRFmVXzeF6a7JCwJpyw5c4b+YSVImQIrBpuQ==}
    engines: {node: '>=10'}

  os-tmpdir@1.0.2:
    resolution: {integrity: sha512-D2FR03Vir7FIu45XBY20mTb+/ZSWB00sjU9jdQXt83gDrI4Ztz5Fs7/yy74g2N5SVQY4xY1qDr4rNddwYRVX0g==}
    engines: {node: '>=0.10.0'}

  package-json-from-dist@1.0.1:
    resolution: {integrity: sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  parse-json@5.2.0:
    resolution: {integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==}
    engines: {node: '>=8'}

  parseurl@1.3.3:
    resolution: {integrity: sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==}
    engines: {node: '>= 0.8'}

  passport-jwt@4.0.1:
    resolution: {integrity: sha512-UCKMDYhNuGOBE9/9Ycuoyh7vP6jpeTp/+sfMJl7nLff/t6dps+iaeE0hhNkKN8/HZHcJ7lCdOyDxHdDoxoSvdQ==}

  passport-strategy@1.0.0:
    resolution: {integrity: sha512-CB97UUvDKJde2V0KDWWB3lyf6PC3FaZP7YxZ2G8OAtn9p4HI9j9JLP9qjOGZFvyl8uwNT8qM+hGnz/n16NI7oA==}
    engines: {node: '>= 0.4.0'}

  passport@0.7.0:
    resolution: {integrity: sha512-cPLl+qZpSc+ireUvt+IzqbED1cHHkDoVYMo30jbJIdOOjQ1MQYZBPiNvmi8UM6lJuOpTPXJGZQk0DtC4y61MYQ==}
    engines: {node: '>= 0.4.0'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-scurry@1.11.1:
    resolution: {integrity: sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==}
    engines: {node: '>=16 || 14 >=14.18'}

  path-scurry@2.0.2:
    resolution: {integrity: sha512-3O/iVVsJAPsOnpwWIeD+d6z/7PmqApyQePUtCndjatj/9I5LylHvt5qluFaBT3I5h3r1ejfR056c+FCv+NnNXg==}
    engines: {node: 18 || 20 || >=22}

  path-to-regexp@0.1.13:
    resolution: {integrity: sha512-A/AGNMFN3c8bOlvV9RreMdrv7jsmF9XIfDeCd87+I8RNg6s78BhJxMu69NEMHBSJFxKidViTEdruRwEk/WIKqA==}

  path-to-regexp@3.3.0:
    resolution: {integrity: sha512-qyCH421YQPS2WFDxDjftfc1ZR5WKQzVzqsp4n9M2kQhVOo/ByahFoUNJfl58kOcEGfQ//7weFTDhm+ss8Ecxgw==}

  path-type@4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}

  pathe@2.0.3:
    resolution: {integrity: sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==}

  pause@0.0.1:
    resolution: {integrity: sha512-KG8UEiEVkR3wGEb4m5yZkVCzigAD+cVEJck2CzYZO37ZGJfctvVptVO192MwrtPhzONn6go8ylnOdMhKqi4nfg==}

  perfect-debounce@1.0.0:
    resolution: {integrity: sha512-xCy9V055GLEqoFaHoC1SoLIaLmWctgCUaBaWxDZ7/Zx4CTyX7cJQLJOok/orfjZAh9kEYpjJa4d0KcJmCbctZA==}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.2:
    resolution: {integrity: sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==}
    engines: {node: '>=8.6'}

  picomatch@4.0.1:
    resolution: {integrity: sha512-xUXwsxNjwTQ8K3GnT4pCJm+xq3RUPQbmkYJTP5aFIfNIvbcc/4MUxgBaaRSZJ6yGJZiGSyYlM6MzwTsRk8SYCg==}
    engines: {node: '>=12'}

  picomatch@4.0.4:
    resolution: {integrity: sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==}
    engines: {node: '>=12'}

  pify@2.3.0:
    resolution: {integrity: sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==}
    engines: {node: '>=0.10.0'}

  pirates@4.0.7:
    resolution: {integrity: sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==}
    engines: {node: '>= 6'}

  pkg-types@2.3.1:
    resolution: {integrity: sha512-y+ichcgc2LrADuhLNAx8DFjVfgz91pRxfZdI3UDhxHvcVEZsenLO+7XaU5vOp0u/7V/wZ+plyuQxtrDlZJ+yeg==}

  pluralize@8.0.0:
    resolution: {integrity: sha512-Nc3IT5yHzflTfbjgqWcCPpo7DaKy4FnpB0l/zCAW0Tc7jxAiuqSxHasntB3D7887LSrA93kDJ9IXovxJYxyLCA==}
    engines: {node: '>=4'}

  postcss-import@15.1.0:
    resolution: {integrity: sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      postcss: ^8.0.0

  postcss-js@4.1.0:
    resolution: {integrity: sha512-oIAOTqgIo7q2EOwbhb8UalYePMvYoIeRY2YKntdpFQXNosSu3vLrniGgmH9OKs/qAkfoj5oB3le/7mINW1LCfw==}
    engines: {node: ^12 || ^14 || >= 16}
    peerDependencies:
      postcss: ^8.4.21

  postcss-load-config@6.0.1:
    resolution: {integrity: sha512-oPtTM4oerL+UXmx+93ytZVN82RrlY/wPUV8IeDxFrzIjXOLF1pN+EmKPLbubvKHT2HC20xXsCAH2Z+CKV6Oz/g==}
    engines: {node: '>= 18'}
    peerDependencies:
      jiti: '>=1.21.0'
      postcss: '>=8.0.9'
      tsx: ^4.8.1
      yaml: ^2.4.2
    peerDependenciesMeta:
      jiti:
        optional: true
      postcss:
        optional: true
      tsx:
        optional: true
      yaml:
        optional: true

  postcss-nested@6.2.0:
    resolution: {integrity: sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==}
    engines: {node: '>=12.0'}
    peerDependencies:
      postcss: ^8.2.14

  postcss-selector-parser@6.1.2:
    resolution: {integrity: sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==}
    engines: {node: '>=4'}

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.4.31:
    resolution: {integrity: sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.5.15:
    resolution: {integrity: sha512-FfR8sjd4em2T6fb3I2MwAJU7HWVMr9zba+enmQeeWFfCbm+UOC/0X4DS8XtpUTMwWMGbjKYP7xjfNekzyGmB3A==}
    engines: {node: ^10 || ^12 || >=14}

  prisma@6.19.3:
    resolution: {integrity: sha512-++ZJ0ijLrDJF6hNB4t4uxg2br3fC4H9Yc9tcbjr2fcNFP3rh/SBNrAgjhsqBU4Ght8JPrVofG/ZkXfnSfnYsFg==}
    engines: {node: '>=18.18'}
    hasBin: true
    peerDependencies:
      typescript: '>=5.1.0'
    peerDependenciesMeta:
      typescript:
        optional: true

  process-nextick-args@2.0.1:
    resolution: {integrity: sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==}

  proxy-addr@2.0.7:
    resolution: {integrity: sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==}
    engines: {node: '>= 0.10'}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  pure-rand@6.1.0:
    resolution: {integrity: sha512-bVWawvoZoBYpp6yIoQtQXHZjmz35RSVHnUOTefl8Vcjr8snTPY1wnpSPMWekcFwbxI6gtmT7rSYPFvz71ldiOA==}

  qs@6.14.2:
    resolution: {integrity: sha512-V/yCWTTF7VJ9hIh18Ugr2zhJMP01MY7c5kh4J870L7imm6/DIzBsNLTXzMwUA3yZ5b/KBqLx8Kp3uRvd7xSe3Q==}
    engines: {node: '>=0.6'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  range-parser@1.2.1:
    resolution: {integrity: sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==}
    engines: {node: '>= 0.6'}

  raw-body@2.5.3:
    resolution: {integrity: sha512-s4VSOf6yN0rvbRZGxs8Om5CWj6seneMwK3oDb4lWDH0UPhWcxwOWw5+qk24bxq87szX1ydrwylIOp2uG1ojUpA==}
    engines: {node: '>= 0.8'}

  rc9@2.1.2:
    resolution: {integrity: sha512-btXCnMmRIBINM2LDZoEmOogIZU7Qe7zn4BpomSKZ/ykbLObuBdvG+mFq11DL6fjH1DRwHhrlgtYWG96bJiC7Cg==}

  react-dom@19.2.6:
    resolution: {integrity: sha512-0prMI+hvBbPjsWnxDLxlCGyM8PN6UuWjEUCYmZhO67xIV9Xasa/r/vDnq+Xyq4Lo27g8QSbO5YzARu0D1Sps3g==}
    peerDependencies:
      react: ^19.2.6

  react-remove-scroll-bar@2.3.8:
    resolution: {integrity: sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.7.2:
    resolution: {integrity: sha512-Iqb9NjCCTt6Hf+vOdNIZGdTiH1QSqr27H/Ek9sv/a97gfueI/5h1s3yRi1nngzMUaOOToin5dI1dXKdXiF+u0Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-style-singleton@2.2.3:
    resolution: {integrity: sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react@19.2.6:
    resolution: {integrity: sha512-sfWGGfavi0xr8Pg0sVsyHMAOziVYKgPLNrS7ig+ivMNb3wbCBw3KxtflsGBAwD3gYQlE/AEZsTLgToRrSCjb0Q==}
    engines: {node: '>=0.10.0'}

  read-cache@1.0.0:
    resolution: {integrity: sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==}

  readable-stream@2.3.8:
    resolution: {integrity: sha512-8p0AUk4XODgIewSi0l8Epjs+EVnWiK7NoDIEGU0HhE7+ZyY8D1IMY7odu5lRrFXGg71L15KG8QrPmum45RTtdA==}

  readable-stream@3.6.2:
    resolution: {integrity: sha512-9u/sniCrY3D5WdsERHzHE4G2YCXqoG5FTHUiCC4SIbr6XcLZBY05ya9EKjYek9O5xOAwjGq+1JdGBAS7Q9ScoA==}
    engines: {node: '>= 6'}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  readdirp@4.1.2:
    resolution: {integrity: sha512-GDhwkLfywWL2s6vEjyhri+eXmfH6j1L7JE27WhqLeYzoh/A3DBaYGEj2H/HFZCn/kMfim73FXxEJTw06WtxQwg==}
    engines: {node: '>= 14.18.0'}

  reflect-metadata@0.2.2:
    resolution: {integrity: sha512-urBwgfrvVP/eAyXx4hluJivBKzuEbSQs9rKWCrCkbSxNv8mxPcUZKeuoF3Uy4mJl3Lwprp6yy5/39VWigZ4K6Q==}

  repeat-string@1.6.1:
    resolution: {integrity: sha512-PV0dzCYDNfRi1jCDbJzpW7jNNDRuCOG/jI5ctQcGKt/clZD+YcPS3yIlWuTJMmESC8aevCFmWJy5wjAFgNqN6w==}
    engines: {node: '>=0.10'}

  require-from-string@2.0.2:
    resolution: {integrity: sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==}
    engines: {node: '>=0.10.0'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve@1.22.12:
    resolution: {integrity: sha512-TyeJ1zif53BPfHootBGwPRYT1RUt6oGWsaQr8UyZW/eAm9bKoijtvruSDEmZHm92CwS9nj7/fWttqPCgzep8CA==}
    engines: {node: '>= 0.4'}
    hasBin: true

  restore-cursor@3.1.0:
    resolution: {integrity: sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==}
    engines: {node: '>=8'}

  reusify@1.1.0:
    resolution: {integrity: sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  rimraf@6.1.3:
    resolution: {integrity: sha512-LKg+Cr2ZF61fkcaK1UdkH2yEBBKnYjTyWzTJT6KNPcSPaiT7HSdhtMXQuN5wkTX0Xu72KQ1l8S42rlmexS2hSA==}
    engines: {node: 20 || >=22}
    hasBin: true

  run-async@2.4.1:
    resolution: {integrity: sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ==}
    engines: {node: '>=0.12.0'}

  run-async@3.0.0:
    resolution: {integrity: sha512-540WwVDOMxA6dN6We19EcT9sc3hkXPw5mzRNGM3FkdN/vtE9NFvj5lFAPNwUDmJjXidm3v7TC1cTE7t17Ulm1Q==}
    engines: {node: '>=0.12.0'}

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  rxjs@7.8.1:
    resolution: {integrity: sha512-AA3TVj+0A2iuIoQkWEK/tqFjBq2j+6PO6Y0zJcvzLAFhEFIO3HL0vls9hWLncZbAAbK0mar7oZ4V079I/qPMxg==}

  rxjs@7.8.2:
    resolution: {integrity: sha512-dhKf903U/PQZY6boNNtAGdWbG85WAbjT/1xYoZIC7FAY0yWapOBQVsVrDl58W86//e1VpMNBtRV4MaXfdMySFA==}

  safe-buffer@5.1.2:
    resolution: {integrity: sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==}

  safe-buffer@5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}

  safer-buffer@2.1.2:
    resolution: {integrity: sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==}

  scheduler@0.27.0:
    resolution: {integrity: sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==}

  schema-utils@3.3.0:
    resolution: {integrity: sha512-pN/yOAvcC+5rQ5nERGuwrjLlYvLTbCibnZ1I7B1LaiAz9BRBlE9GMgE/eqV30P7aJQUf7Ddimy/RsbYO/GrVGg==}
    engines: {node: '>= 10.13.0'}

  schema-utils@4.3.3:
    resolution: {integrity: sha512-eflK8wEtyOE6+hsaRVPxvUKYCpRgzLqDTb8krvAsRIwOGlHoSgYLgBXoubGgLd2fT41/OUYdb48v4k4WWHQurA==}
    engines: {node: '>= 10.13.0'}

  semver@7.8.1:
    resolution: {integrity: sha512-rkVq3IXh+4FDGch+KwzX3aV9W3kO54GyEgpvBzSyctDA6Xtd7RJQV1xmXbeQp5v7+VzLOfVqiutSE6GICgPFvg==}
    engines: {node: '>=10'}
    hasBin: true

  send@0.19.2:
    resolution: {integrity: sha512-VMbMxbDeehAxpOtWJXlcUS5E8iXh6QmN+BkRX1GARS3wRaXEEgzCcB10gTQazO42tpNIya8xIyNx8fll1OFPrg==}
    engines: {node: '>= 0.8.0'}

  serve-static@1.16.3:
    resolution: {integrity: sha512-x0RTqQel6g5SY7Lg6ZreMmsOzncHFU7nhnRWkKgWuMTu5NN0DR5oruckMqRvacAN9d5w6ARnRBXl9xhDCgfMeA==}
    engines: {node: '>= 0.8.0'}

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  setprototypeof@1.2.0:
    resolution: {integrity: sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==}

  sharp@0.34.5:
    resolution: {integrity: sha512-Ou9I5Ft9WNcCbXrU9cMgPBcCK8LiwLqcbywW3t4oDV37n1pzpuNLsYiAV8eODnjbtQlSDwZ2cUEeQz4E54Hltg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel-list@1.0.1:
    resolution: {integrity: sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==}
    engines: {node: '>= 0.4'}

  side-channel-map@1.0.1:
    resolution: {integrity: sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==}
    engines: {node: '>= 0.4'}

  side-channel-weakmap@1.0.2:
    resolution: {integrity: sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==}
    engines: {node: '>= 0.4'}

  side-channel@1.1.0:
    resolution: {integrity: sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==}
    engines: {node: '>= 0.4'}

  signal-exit@3.0.7:
    resolution: {integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  size-sensor@1.0.3:
    resolution: {integrity: sha512-+k9mJ2/rQMiRmQUcjn+qznch260leIXY8r4FyYKKyRBO/s5UoeMAHGkCJyE1R/4wrIhTJONfyloY55SkE7ve3A==}

  socket.io-adapter@2.5.7:
    resolution: {integrity: sha512-e0LyK91f3cUxTmv95/KzoLg47+zF+s/sbxRGDNsyG4dmIP8ZSX8ax6byOxfJXeNNtS/8AZlfD+uP7gBeR7DLlg==}

  socket.io-client@4.8.3:
    resolution: {integrity: sha512-uP0bpjWrjQmUt5DTHq9RuoCBdFJF10cdX9X+a368j/Ft0wmaVgxlrjvK3kjvgCODOMMOz9lcaRzxmso0bTWZ/g==}
    engines: {node: '>=10.0.0'}

  socket.io-parser@4.2.6:
    resolution: {integrity: sha512-asJqbVBDsBCJx0pTqw3WfesSY0iRX+2xzWEWzrpcH7L6fLzrhyF8WPI8UaeM4YCuDfpwA/cgsdugMsmtz8EJeg==}
    engines: {node: '>=10.0.0'}

  socket.io@4.8.1:
    resolution: {integrity: sha512-oZ7iUCxph8WYRHHcjBEc9unw3adt5CmSNlppj/5Q4k2RIrhl8Z5yY2Xr4j9zj0+wzVZ0bxmYoGSzKJnRl6A4yg==}
    engines: {node: '>=10.2.0'}

  socket.io@4.8.3:
    resolution: {integrity: sha512-2Dd78bqzzjE6KPkD5fHZmDAKRNe3J15q+YHDrIsy9WEkqttc7GY+kT9OBLSMaPbQaEd0x1BjcmtMtXkfpc+T5A==}
    engines: {node: '>=10.2.0'}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  source-map-support@0.5.21:
    resolution: {integrity: sha512-uBHU3L3czsIyYXKX88fdrGovxdSCoTGDRZ6SYXtSRxLZUzHg5P/66Ht6uoUlHu9EZod+inXhKo3qQgwXUT/y1w==}

  source-map@0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  source-map@0.7.4:
    resolution: {integrity: sha512-l3BikUxvPOcn5E74dZiq5BGsTb5yEwhaTSzccU6t4sDOH8NWJCstKO5QT2CvtFoK6F0saL7p9xHAqHOlCPJygA==}
    engines: {node: '>= 8'}

  statuses@2.0.2:
    resolution: {integrity: sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==}
    engines: {node: '>= 0.8'}

  streamsearch@1.1.0:
    resolution: {integrity: sha512-Mcc5wHehp9aXz1ax6bZUyY5afg9u2rv5cqQI3mRrYkGC8rW2hM02jWuwjtL++LS5qinSyhj2QfLyNsuc+VsExg==}
    engines: {node: '>=10.0.0'}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}

  string_decoder@1.1.1:
    resolution: {integrity: sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==}

  string_decoder@1.3.0:
    resolution: {integrity: sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.2.0:
    resolution: {integrity: sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==}
    engines: {node: '>=12'}

  strip-bom@3.0.0:
    resolution: {integrity: sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==}
    engines: {node: '>=4'}

  strtok3@10.3.5:
    resolution: {integrity: sha512-ki4hZQfh5rX0QDLLkOCj+h+CVNkqmp/CMf8v8kZpkNVK6jGQooMytqzLZYUVYIZcFZ6yDB70EfD8POcFXiF5oA==}
    engines: {node: '>=18'}

  styled-jsx@5.1.6:
    resolution: {integrity: sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==}
    engines: {node: '>= 12.0.0'}
    peerDependencies:
      '@babel/core': '*'
      babel-plugin-macros: '*'
      react: '>= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      babel-plugin-macros:
        optional: true

  sucrase@3.35.1:
    resolution: {integrity: sha512-DhuTmvZWux4H1UOnWMB3sk0sbaCVOoQZjv8u1rDoTV0HTdGem9hkAZtl4JZy8P2z4Bg0nT+YMeOFyVr4zcG5Tw==}
    engines: {node: '>=16 || 14 >=14.17'}
    hasBin: true

  supports-color@7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}

  supports-color@8.1.1:
    resolution: {integrity: sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==}
    engines: {node: '>=10'}

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  symbol-observable@4.0.0:
    resolution: {integrity: sha512-b19dMThMV4HVFynSAM1++gBHAbk2Tc/osgLIBZMKsyqh34jb2e8Os7T6ZW/Bt3pJFdBTd2JwAnAAEQV7rSNvcQ==}
    engines: {node: '>=0.10'}

  tailwind-merge@2.6.1:
    resolution: {integrity: sha512-Oo6tHdpZsGpkKG88HJ8RR1rg/RdnEkQEfMoEk2x1XRI3F1AxeU+ijRXpiVUF4UbLfcxxRGw6TbUINKYdWVsQTQ==}

  tailwindcss@3.4.19:
    resolution: {integrity: sha512-3ofp+LL8E+pK/JuPLPggVAIaEuhvIz4qNcf3nA1Xn2o/7fb7s/TYpHhwGDv1ZU3PkBluUVaF8PyCHcm48cKLWQ==}
    engines: {node: '>=14.0.0'}
    hasBin: true

  tapable@2.3.3:
    resolution: {integrity: sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==}
    engines: {node: '>=6'}

  terser-webpack-plugin@5.6.1:
    resolution: {integrity: sha512-201R5j+sJpK8nFWwKVyNfZot8FaJbLZDq5evriVzbV1wDtSXDjRUDRfJzHpAaxFDMEhsZL1QkeqM61wgsS3KaQ==}
    engines: {node: '>= 10.13.0'}
    peerDependencies:
      '@minify-html/node': '*'
      '@swc/core': '*'
      '@swc/css': '*'
      '@swc/html': '*'
      clean-css: '*'
      cssnano: '*'
      csso: '*'
      esbuild: '*'
      html-minifier-terser: '*'
      lightningcss: '*'
      postcss: '*'
      uglify-js: '*'
      webpack: ^5.1.0
    peerDependenciesMeta:
      '@minify-html/node':
        optional: true
      '@swc/core':
        optional: true
      '@swc/css':
        optional: true
      '@swc/html':
        optional: true
      clean-css:
        optional: true
      cssnano:
        optional: true
      csso:
        optional: true
      esbuild:
        optional: true
      html-minifier-terser:
        optional: true
      lightningcss:
        optional: true
      postcss:
        optional: true
      uglify-js:
        optional: true

  terser@5.48.0:
    resolution: {integrity: sha512-J/9An6vs9Us6wKRriSFXBWdRZapREHqFzdNUKk0pmu804EMR6dr6winwo7e5JDxN4xahxQsuysyYFwlwj4XN/Q==}
    engines: {node: '>=10'}
    hasBin: true

  thenify-all@1.6.0:
    resolution: {integrity: sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==}
    engines: {node: '>=0.8'}

  thenify@3.3.1:
    resolution: {integrity: sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==}

  through@2.3.8:
    resolution: {integrity: sha512-w89qg7PI8wAdvX60bMDP+bFoD5Dvhm9oLheFp5O4a2QF0cSBGsBX4qZmadPMvVqlLJBBci+WqGGOAPvcDeNSVg==}

  tinyexec@1.2.2:
    resolution: {integrity: sha512-M/Q0B2cp4K7kynaT/vnED1j8TlLY+Pp7C6Wl2bl/7u/F0mUVwdyOpwomQb8JpYLitHUssAJRmLZdMCGsrx7i+g==}
    engines: {node: '>=18'}

  tinyglobby@0.2.16:
    resolution: {integrity: sha512-pn99VhoACYR8nFHhxqix+uvsbXineAasWm5ojXoN8xEwK5Kd3/TrhNn1wByuD52UxWRLy8pu+kRMniEi6Eq9Zg==}
    engines: {node: '>=12.0.0'}

  tmp@0.0.33:
    resolution: {integrity: sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==}
    engines: {node: '>=0.6.0'}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  toidentifier@1.0.1:
    resolution: {integrity: sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==}
    engines: {node: '>=0.6'}

  token-types@6.1.2:
    resolution: {integrity: sha512-dRXchy+C0IgK8WPC6xvCHFRIWYUbqqdEIKPaKo/AcTUNzwLTK6AH7RjdLWsEZcAN/TBdtfUw3PYEgPr5VPr6ww==}
    engines: {node: '>=14.16'}

  tr46@0.0.3:
    resolution: {integrity: sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==}

  tree-kill@1.2.2:
    resolution: {integrity: sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==}
    hasBin: true

  ts-interface-checker@0.1.13:
    resolution: {integrity: sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==}

  tsconfig-paths-webpack-plugin@4.2.0:
    resolution: {integrity: sha512-zbem3rfRS8BgeNK50Zz5SIQgXzLafiHjOwUAvk/38/o1jHn/V5QAgVUcz884or7WYcPaH3N2CIfUc2u0ul7UcA==}
    engines: {node: '>=10.13.0'}

  tsconfig-paths@4.2.0:
    resolution: {integrity: sha512-NoZ4roiN7LnbKn9QqE1amc9DJfzvZXxF4xDavcOWt1BPkdx+m+0gJuPM+S0vCe7zTJMYUP0R8pO2XMr+Y8oLIg==}
    engines: {node: '>=6'}

  tslib@2.3.0:
    resolution: {integrity: sha512-N82ooyxVNm6h1riLCoyS9e3fuJ3AMG2zIZs2Gd1ATcSFjSA23Q0fzjjZeh0jbJvWVDZ0cJT8yaNNaaXHzueNjg==}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  tsx@4.22.3:
    resolution: {integrity: sha512-mdoNxBC/cSQObGGVQ5Bpn5i+yv7j68gk3Nfm3wFjcJg3Z0Mix9jzAFfP12prmm5eVGmDKtp0yyArrs0Q+8gZHg==}
    engines: {node: '>=18.0.0'}
    hasBin: true

  type-fest@0.21.3:
    resolution: {integrity: sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==}
    engines: {node: '>=10'}

  type-is@1.6.18:
    resolution: {integrity: sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==}
    engines: {node: '>= 0.6'}

  typedarray@0.0.6:
    resolution: {integrity: sha512-/aCDEGatGvZ2BIk+HmLf4ifCJFwvKFNb9/JeZPMulfgFracn9QFcAf5GO8B/mweUjSoblS5In0cWhqpfs/5PQA==}

  typescript@5.7.2:
    resolution: {integrity: sha512-i5t66RHxDvVN40HfDd1PsEThGNnlMCMT3jMUuoh9/0TaqWevNontacunWyN02LA9/fIbEWlcHZcgTKb9QoaLfg==}
    engines: {node: '>=14.17'}
    hasBin: true

  typescript@5.9.3:
    resolution: {integrity: sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==}
    engines: {node: '>=14.17'}
    hasBin: true

  uid@2.0.2:
    resolution: {integrity: sha512-u3xV3X7uzvi5b1MncmZo3i2Aw222Zk1keqLA1YkHldREkAhAqi65wuPfe7lHx8H/Wzy+8CE7S7uS3jekIM5s8g==}
    engines: {node: '>=8'}

  uint8array-extras@1.5.0:
    resolution: {integrity: sha512-rvKSBiC5zqCCiDZ9kAOszZcDvdAHwwIKJG33Ykj43OKcWsnmcBRL09YTU4nOeHZ8Y2a7l1MgTd08SBe9A8Qj6A==}
    engines: {node: '>=18'}

  undici-types@6.21.0:
    resolution: {integrity: sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==}

  universalify@2.0.1:
    resolution: {integrity: sha512-gptHNQghINnc/vTGIk0SOFGFNXw7JVrlRUtConJRlvaw6DuX0wO5Jeko9sWrMBhh+PsYAZ7oXAiOnf/UKogyiw==}
    engines: {node: '>= 10.0.0'}

  unpipe@1.0.0:
    resolution: {integrity: sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==}
    engines: {node: '>= 0.8'}

  update-browserslist-db@1.2.3:
    resolution: {integrity: sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  uri-js@4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}

  use-callback-ref@1.3.3:
    resolution: {integrity: sha512-jQL3lRnocaFtu3V00JToYz/4QkNWswxijDaCVNZRiRTO3HQDLsdu1ZtmIUvV4yPp+rvWm5j0y0TG/S61cuijTg==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sidecar@1.1.3:
    resolution: {integrity: sha512-Fedw0aZvkhynoPYlA5WXrMCAMm+nSWdZt6lzJQ7Ok8S6Q+VsHmHpRWndVRJ8Be0ZbkfPc5LRYH+5XrzXcEeLRQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sync-external-store@1.6.0:
    resolution: {integrity: sha512-Pp6GSwGP/NrPIrxVFAIkOQeyw8lFenOHijQWkUTrDvrF4ALqylP2C/KCkeS9dpUM3KvYRQhna5vt7IL95+ZQ9w==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  util-deprecate@1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}

  utils-merge@1.0.1:
    resolution: {integrity: sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA==}
    engines: {node: '>= 0.4.0'}

  validator@13.15.35:
    resolution: {integrity: sha512-TQ5pAGhd5whStmqWvYF4OjQROlmv9SMFVt37qoCBdqRffuuklWYQlCNnEs2ZaIBD1kZRNnikiZOS1eqgkar0iw==}
    engines: {node: '>= 0.10'}

  vary@1.1.2:
    resolution: {integrity: sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==}
    engines: {node: '>= 0.8'}

  watchpack@2.5.1:
    resolution: {integrity: sha512-Zn5uXdcFNIA1+1Ei5McRd+iRzfhENPCe7LeABkJtNulSxjma+l7ltNx55BWZkRlwRnpOgHqxnjyaDgJnNXnqzg==}
    engines: {node: '>=10.13.0'}

  wcwidth@1.0.1:
    resolution: {integrity: sha512-XHPEwS0q6TaxcvG85+8EYkbiCux2XtWG2mkc47Ng2A77BQu9+DqIOJldST4HgPkuea7dvKSj5VgX3P1d4rW8Tg==}

  webidl-conversions@3.0.1:
    resolution: {integrity: sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==}

  webpack-node-externals@3.0.0:
    resolution: {integrity: sha512-LnL6Z3GGDPht/AigwRh2dvL9PQPFQ8skEpVrWZXLWBYmqcaojHNN0onvHzie6rq7EWKrrBfPYqNEzTJgiwEQDQ==}
    engines: {node: '>=6'}

  webpack-sources@3.5.0:
    resolution: {integrity: sha512-HPuy+uuoTCaaoEoI1LQ3JN9+vrPBvEesnnX1jADHy728cHSMlq4wUc4afYqahq2B1mhQVZxCXOkNTnXltr+2vQ==}
    engines: {node: '>=10.13.0'}

  webpack@5.97.1:
    resolution: {integrity: sha512-EksG6gFY3L1eFMROS/7Wzgrii5mBAFe4rIr3r2BTfo7bcc+DWwFZ4OJ/miOuHJO/A85HwyI4eQ0F6IKXesO7Fg==}
    engines: {node: '>=10.13.0'}
    hasBin: true
    peerDependencies:
      webpack-cli: '*'
    peerDependenciesMeta:
      webpack-cli:
        optional: true

  whatwg-url@5.0.0:
    resolution: {integrity: sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  wrap-ansi@6.2.0:
    resolution: {integrity: sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==}
    engines: {node: '>=8'}

  wrap-ansi@7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}

  wrap-ansi@8.1.0:
    resolution: {integrity: sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==}
    engines: {node: '>=12'}

  ws@8.20.1:
    resolution: {integrity: sha512-It4dO0K5v//JtTXuPkfEOaI3uUN87iYPnqo/ZzqCoG3g8uhA66QUMs/SrM0YK7/NAu+r4LMh/9dq2A7k+rHs+w==}
    engines: {node: '>=10.0.0'}
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: '>=5.0.2'
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true

  xmlhttprequest-ssl@2.1.2:
    resolution: {integrity: sha512-TEU+nJVUUnA4CYJFLvK5X9AOeH4KvDvhIfm0vV1GaQRtchnG0hgK5p8hw/xjv8cunWYCsiPCSDzObPyhEwq3KQ==}
    engines: {node: '>=0.4.0'}

  xtend@4.0.2:
    resolution: {integrity: sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==}
    engines: {node: '>=0.4'}

  yargs-parser@21.1.1:
    resolution: {integrity: sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==}
    engines: {node: '>=12'}

  zrender@5.6.1:
    resolution: {integrity: sha512-OFXkDJKcrlx5su2XbzJvj/34Q3m6PvyCZkVPHGYpcCJ52ek4U/ymZyfuV1nKE23AyBJ51E/6Yr0mhZ7xGTO4ag==}

  zustand@4.5.7:
    resolution: {integrity: sha512-CHOUy7mu3lbD6o6LJLfllpjkzhHXSBlX8B9+qPddUsIfeF5S/UZ5q0kmCsnRqT1UHFQZchNFDDzMbQsuesHWlw==}
    engines: {node: '>=12.7.0'}
    peerDependencies:
      '@types/react': '>=16.8'
      immer: '>=9.0.6'
      react: '>=16.8'
    peerDependenciesMeta:
      '@types/react':
        optional: true
      immer:
        optional: true
      react:
        optional: true

  zustand@5.0.13:
    resolution: {integrity: sha512-efI2tVaVQPqtOh114loML/Z80Y4NP3yc+Ff0fYiZJPauNeWZeIp/bRFD7I9bfmCOYBh/PHxlglQ9+wvlwnPikQ==}
    engines: {node: '>=12.20.0'}
    peerDependencies:
      '@types/react': '>=18.0.0'
      immer: '>=9.0.6'
      react: '>=18.0.0'
      use-sync-external-store: '>=1.2.0'
    peerDependenciesMeta:
      '@types/react':
        optional: true
      immer:
        optional: true
      react:
        optional: true
      use-sync-external-store:
        optional: true

snapshots:

  '@alloc/quick-lru@5.2.0': {}

  '@angular-devkit/core@17.3.11(chokidar@3.6.0)':
    dependencies:
      ajv: 8.12.0
      ajv-formats: 2.1.1(ajv@8.12.0)
      jsonc-parser: 3.2.1
      picomatch: 4.0.1
      rxjs: 7.8.1
      source-map: 0.7.4
    optionalDependencies:
      chokidar: 3.6.0

  '@angular-devkit/schematics-cli@17.3.11(chokidar@3.6.0)':
    dependencies:
      '@angular-devkit/core': 17.3.11(chokidar@3.6.0)
      '@angular-devkit/schematics': 17.3.11(chokidar@3.6.0)
      ansi-colors: 4.1.3
      inquirer: 9.2.15
      symbol-observable: 4.0.0
      yargs-parser: 21.1.1
    transitivePeerDependencies:
      - chokidar

  '@angular-devkit/schematics@17.3.11(chokidar@3.6.0)':
    dependencies:
      '@angular-devkit/core': 17.3.11(chokidar@3.6.0)
      jsonc-parser: 3.2.1
      magic-string: 0.30.8
      ora: 5.4.1
      rxjs: 7.8.1
    transitivePeerDependencies:
      - chokidar

  '@babel/code-frame@7.29.7':
    dependencies:
      '@babel/helper-validator-identifier': 7.29.7
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/helper-validator-identifier@7.29.7': {}

  '@borewit/text-codec@0.2.2': {}

  '@colors/colors@1.5.0':
    optional: true

  '@emnapi/runtime@1.10.0':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@esbuild/aix-ppc64@0.28.0':
    optional: true

  '@esbuild/android-arm64@0.28.0':
    optional: true

  '@esbuild/android-arm@0.28.0':
    optional: true

  '@esbuild/android-x64@0.28.0':
    optional: true

  '@esbuild/darwin-arm64@0.28.0':
    optional: true

  '@esbuild/darwin-x64@0.28.0':
    optional: true

  '@esbuild/freebsd-arm64@0.28.0':
    optional: true

  '@esbuild/freebsd-x64@0.28.0':
    optional: true

  '@esbuild/linux-arm64@0.28.0':
    optional: true

  '@esbuild/linux-arm@0.28.0':
    optional: true

  '@esbuild/linux-ia32@0.28.0':
    optional: true

  '@esbuild/linux-loong64@0.28.0':
    optional: true

  '@esbuild/linux-mips64el@0.28.0':
    optional: true

  '@esbuild/linux-ppc64@0.28.0':
    optional: true

  '@esbuild/linux-riscv64@0.28.0':
    optional: true

  '@esbuild/linux-s390x@0.28.0':
    optional: true

  '@esbuild/linux-x64@0.28.0':
    optional: true

  '@esbuild/netbsd-arm64@0.28.0':
    optional: true

  '@esbuild/netbsd-x64@0.28.0':
    optional: true

  '@esbuild/openbsd-arm64@0.28.0':
    optional: true

  '@esbuild/openbsd-x64@0.28.0':
    optional: true

  '@esbuild/openharmony-arm64@0.28.0':
    optional: true

  '@esbuild/sunos-x64@0.28.0':
    optional: true

  '@esbuild/win32-arm64@0.28.0':
    optional: true

  '@esbuild/win32-ia32@0.28.0':
    optional: true

  '@esbuild/win32-x64@0.28.0':
    optional: true

  '@floating-ui/core@1.7.5':
    dependencies:
      '@floating-ui/utils': 0.2.11

  '@floating-ui/dom@1.7.6':
    dependencies:
      '@floating-ui/core': 1.7.5
      '@floating-ui/utils': 0.2.11

  '@floating-ui/react-dom@2.1.8(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@floating-ui/dom': 1.7.6
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)

  '@floating-ui/utils@0.2.11': {}

  '@img/colour@1.1.0':
    optional: true

  '@img/sharp-darwin-arm64@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-darwin-arm64': 1.2.4
    optional: true

  '@img/sharp-darwin-x64@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-darwin-x64': 1.2.4
    optional: true

  '@img/sharp-libvips-darwin-arm64@1.2.4':
    optional: true

  '@img/sharp-libvips-darwin-x64@1.2.4':
    optional: true

  '@img/sharp-libvips-linux-arm64@1.2.4':
    optional: true

  '@img/sharp-libvips-linux-arm@1.2.4':
    optional: true

  '@img/sharp-libvips-linux-ppc64@1.2.4':
    optional: true

  '@img/sharp-libvips-linux-riscv64@1.2.4':
    optional: true

  '@img/sharp-libvips-linux-s390x@1.2.4':
    optional: true

  '@img/sharp-libvips-linux-x64@1.2.4':
    optional: true

  '@img/sharp-libvips-linuxmusl-arm64@1.2.4':
    optional: true

  '@img/sharp-libvips-linuxmusl-x64@1.2.4':
    optional: true

  '@img/sharp-linux-arm64@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.2.4
    optional: true

  '@img/sharp-linux-arm@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.2.4
    optional: true

  '@img/sharp-linux-ppc64@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-ppc64': 1.2.4
    optional: true

  '@img/sharp-linux-riscv64@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-riscv64': 1.2.4
    optional: true

  '@img/sharp-linux-s390x@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.2.4
    optional: true

  '@img/sharp-linux-x64@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.2.4
    optional: true

  '@img/sharp-linuxmusl-arm64@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.2.4
    optional: true

  '@img/sharp-linuxmusl-x64@0.34.5':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.2.4
    optional: true

  '@img/sharp-wasm32@0.34.5':
    dependencies:
      '@emnapi/runtime': 1.10.0
    optional: true

  '@img/sharp-win32-arm64@0.34.5':
    optional: true

  '@img/sharp-win32-ia32@0.34.5':
    optional: true

  '@img/sharp-win32-x64@0.34.5':
    optional: true

  '@isaacs/cliui@8.0.2':
    dependencies:
      string-width: 5.1.2
      string-width-cjs: string-width@4.2.3
      strip-ansi: 7.2.0
      strip-ansi-cjs: strip-ansi@6.0.1
      wrap-ansi: 8.1.0
      wrap-ansi-cjs: wrap-ansi@7.0.0

  '@jridgewell/gen-mapping@0.3.13':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/source-map@0.3.11':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/sourcemap-codec@1.5.5': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.5

  '@ljharb/through@2.3.14':
    dependencies:
      call-bind: 1.0.9

  '@lukeed/csprng@1.1.0': {}

  '@nestjs/cli@10.4.9':
    dependencies:
      '@angular-devkit/core': 17.3.11(chokidar@3.6.0)
      '@angular-devkit/schematics': 17.3.11(chokidar@3.6.0)
      '@angular-devkit/schematics-cli': 17.3.11(chokidar@3.6.0)
      '@nestjs/schematics': 10.2.3(chokidar@3.6.0)(typescript@5.7.2)
      chalk: 4.1.2
      chokidar: 3.6.0
      cli-table3: 0.6.5
      commander: 4.1.1
      fork-ts-checker-webpack-plugin: 9.0.2(typescript@5.7.2)(webpack@5.97.1)
      glob: 10.4.5
      inquirer: 8.2.6
      node-emoji: 1.11.0
      ora: 5.4.1
      tree-kill: 1.2.2
      tsconfig-paths: 4.2.0
      tsconfig-paths-webpack-plugin: 4.2.0
      typescript: 5.7.2
      webpack: 5.97.1
      webpack-node-externals: 3.0.0
    transitivePeerDependencies:
      - '@minify-html/node'
      - '@swc/css'
      - '@swc/html'
      - clean-css
      - cssnano
      - csso
      - esbuild
      - html-minifier-terser
      - lightningcss
      - postcss
      - uglify-js
      - webpack-cli

  '@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2)':
    dependencies:
      file-type: 20.4.1
      iterare: 1.2.1
      reflect-metadata: 0.2.2
      rxjs: 7.8.2
      tslib: 2.8.1
      uid: 2.0.2
    optionalDependencies:
      class-transformer: 0.5.1
      class-validator: 0.14.4
    transitivePeerDependencies:
      - supports-color

  '@nestjs/core@10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/platform-express@10.4.22)(@nestjs/websockets@10.4.22)(reflect-metadata@0.2.2)(rxjs@7.8.2)':
    dependencies:
      '@nestjs/common': 10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      '@nuxtjs/opencollective': 0.3.2
      fast-safe-stringify: 2.1.1
      iterare: 1.2.1
      path-to-regexp: 3.3.0
      reflect-metadata: 0.2.2
      rxjs: 7.8.2
      tslib: 2.8.1
      uid: 2.0.2
    optionalDependencies:
      '@nestjs/platform-express': 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/core@10.4.22)
      '@nestjs/websockets': 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/core@10.4.22)(@nestjs/platform-socket.io@10.4.22)(reflect-metadata@0.2.2)(rxjs@7.8.2)
    transitivePeerDependencies:
      - encoding

  '@nestjs/jwt@10.2.0(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))':
    dependencies:
      '@nestjs/common': 10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      '@types/jsonwebtoken': 9.0.5
      jsonwebtoken: 9.0.2

  '@nestjs/passport@10.0.3(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(passport@0.7.0)':
    dependencies:
      '@nestjs/common': 10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      passport: 0.7.0

  '@nestjs/platform-express@10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/core@10.4.22)':
    dependencies:
      '@nestjs/common': 10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      '@nestjs/core': 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/platform-express@10.4.22)(@nestjs/websockets@10.4.22)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      body-parser: 1.20.4
      cors: 2.8.5
      express: 4.22.1
      multer: 2.0.2
      tslib: 2.8.1
    transitivePeerDependencies:
      - supports-color

  '@nestjs/platform-socket.io@10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/websockets@10.4.22)(rxjs@7.8.2)':
    dependencies:
      '@nestjs/common': 10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      '@nestjs/websockets': 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/core@10.4.22)(@nestjs/platform-socket.io@10.4.22)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      rxjs: 7.8.2
      socket.io: 4.8.1
      tslib: 2.8.1
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate

  '@nestjs/schematics@10.2.3(chokidar@3.6.0)(typescript@5.7.2)':
    dependencies:
      '@angular-devkit/core': 17.3.11(chokidar@3.6.0)
      '@angular-devkit/schematics': 17.3.11(chokidar@3.6.0)
      comment-json: 4.2.5
      jsonc-parser: 3.3.1
      pluralize: 8.0.0
      typescript: 5.7.2
    transitivePeerDependencies:
      - chokidar

  '@nestjs/schematics@10.2.3(chokidar@3.6.0)(typescript@5.9.3)':
    dependencies:
      '@angular-devkit/core': 17.3.11(chokidar@3.6.0)
      '@angular-devkit/schematics': 17.3.11(chokidar@3.6.0)
      comment-json: 4.2.5
      jsonc-parser: 3.3.1
      pluralize: 8.0.0
      typescript: 5.9.3
    transitivePeerDependencies:
      - chokidar

  '@nestjs/websockets@10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/core@10.4.22)(@nestjs/platform-socket.io@10.4.22)(reflect-metadata@0.2.2)(rxjs@7.8.2)':
    dependencies:
      '@nestjs/common': 10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      '@nestjs/core': 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/platform-express@10.4.22)(@nestjs/websockets@10.4.22)(reflect-metadata@0.2.2)(rxjs@7.8.2)
      iterare: 1.2.1
      object-hash: 3.0.0
      reflect-metadata: 0.2.2
      rxjs: 7.8.2
      tslib: 2.8.1
    optionalDependencies:
      '@nestjs/platform-socket.io': 10.4.22(@nestjs/common@10.4.22(class-transformer@0.5.1)(class-validator@0.14.4)(reflect-metadata@0.2.2)(rxjs@7.8.2))(@nestjs/websockets@10.4.22)(rxjs@7.8.2)

  '@next/env@15.5.18': {}

  '@next/swc-darwin-arm64@15.5.18':
    optional: true

  '@next/swc-darwin-x64@15.5.18':
    optional: true

  '@next/swc-linux-arm64-gnu@15.5.18':
    optional: true

  '@next/swc-linux-arm64-musl@15.5.18':
    optional: true

  '@next/swc-linux-x64-gnu@15.5.18':
    optional: true

  '@next/swc-linux-x64-musl@15.5.18':
    optional: true

  '@next/swc-win32-arm64-msvc@15.5.18':
    optional: true

  '@next/swc-win32-x64-msvc@15.5.18':
    optional: true

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.20.1

  '@nuxtjs/opencollective@0.3.2':
    dependencies:
      chalk: 4.1.2
      consola: 2.15.3
      node-fetch: 2.7.0
    transitivePeerDependencies:
      - encoding

  '@pkgjs/parseargs@0.11.0':
    optional: true

  '@prisma/client@6.19.3(prisma@6.19.3(typescript@5.9.3))(typescript@5.9.3)':
    optionalDependencies:
      prisma: 6.19.3(typescript@5.9.3)
      typescript: 5.9.3

  '@prisma/config@6.19.3':
    dependencies:
      c12: 3.1.0
      deepmerge-ts: 7.1.5
      effect: 3.21.0
      empathic: 2.0.0
    transitivePeerDependencies:
      - magicast

  '@prisma/debug@6.19.3': {}

  '@prisma/engines-version@7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7': {}

  '@prisma/engines@6.19.3':
    dependencies:
      '@prisma/debug': 6.19.3
      '@prisma/engines-version': 7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7
      '@prisma/fetch-engine': 6.19.3
      '@prisma/get-platform': 6.19.3

  '@prisma/fetch-engine@6.19.3':
    dependencies:
      '@prisma/debug': 6.19.3
      '@prisma/engines-version': 7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7
      '@prisma/get-platform': 6.19.3

  '@prisma/get-platform@6.19.3':
    dependencies:
      '@prisma/debug': 6.19.3

  '@radix-ui/number@1.1.1': {}

  '@radix-ui/primitive@1.1.3': {}

  '@radix-ui/react-arrow@1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-collection@1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-compose-refs@1.1.2(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-context@1.1.2(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-dialog@1.1.15(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-focus-guards': 1.1.3(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-focus-scope': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.5(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.15)(react@19.2.6)
      aria-hidden: 1.2.6
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      react-remove-scroll: 2.7.2(@types/react@19.2.15)(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-direction@1.1.1(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-dismissable-layer@1.1.11(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-escape-keydown': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-dropdown-menu@2.1.16(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-menu': 2.1.16(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-focus-guards@1.1.3(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-focus-scope@1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-id@1.1.1(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-label@2.1.8(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.4(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-menu@2.1.16(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-focus-guards': 1.1.3(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-focus-scope': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-popper': 1.2.8(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.5(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      aria-hidden: 1.2.6
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      react-remove-scroll: 2.7.2(@types/react@19.2.15)(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-popper@1.2.8(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@floating-ui/react-dom': 2.1.8(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-arrow': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-rect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-size': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/rect': 1.1.1
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-portal@1.1.9(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-presence@1.1.5(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-primitive@2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-primitive@2.1.4(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-slot': 1.2.4(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-roving-focus@1.1.11(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-select@2.2.6(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/number': 1.1.1
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-focus-guards': 1.1.3(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-focus-scope': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-popper': 1.2.8(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-previous': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-visually-hidden': 1.2.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      aria-hidden: 1.2.6
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      react-remove-scroll: 2.7.2(@types/react@19.2.15)(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-slot@1.2.3(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-slot@1.2.4(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-tabs@1.1.13(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-id': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-presence': 1.1.5(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-roving-focus': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-toast@1.2.15(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/primitive': 1.1.3
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-context': 1.1.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-dismissable-layer': 1.1.11(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-presence': 1.1.5(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-visually-hidden': 1.2.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/react-use-callback-ref@1.1.1(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-use-controllable-state@1.2.2(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-effect-event': 0.0.2(@types/react@19.2.15)(react@19.2.6)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-use-effect-event@0.0.2(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-use-escape-keydown@1.1.1(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-use-layout-effect@1.1.1(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-use-previous@1.1.1(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-use-rect@1.1.1(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      '@radix-ui/rect': 1.1.1
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-use-size@1.1.1(@types/react@19.2.15)(react@19.2.6)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.2.15)(react@19.2.6)
      react: 19.2.6
    optionalDependencies:
      '@types/react': 19.2.15

  '@radix-ui/react-visually-hidden@1.2.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.2.3(@types/react@19.2.15))(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      '@types/react-dom': 19.2.3(@types/react@19.2.15)

  '@radix-ui/rect@1.1.1': {}

  '@socket.io/component-emitter@3.1.2': {}

  '@standard-schema/spec@1.1.0': {}

  '@swc/helpers@0.5.15':
    dependencies:
      tslib: 2.8.1

  '@tokenizer/inflate@0.2.7':
    dependencies:
      debug: 4.4.3
      fflate: 0.8.3
      token-types: 6.1.2
    transitivePeerDependencies:
      - supports-color

  '@tokenizer/token@0.3.0': {}

  '@types/bcryptjs@2.4.6': {}

  '@types/body-parser@1.19.6':
    dependencies:
      '@types/connect': 3.4.38
      '@types/node': 22.19.19

  '@types/connect@3.4.38':
    dependencies:
      '@types/node': 22.19.19

  '@types/cors@2.8.19':
    dependencies:
      '@types/node': 22.19.19

  '@types/d3-color@3.1.3': {}

  '@types/d3-drag@3.0.7':
    dependencies:
      '@types/d3-selection': 3.0.11

  '@types/d3-interpolate@3.0.4':
    dependencies:
      '@types/d3-color': 3.1.3

  '@types/d3-selection@3.0.11': {}

  '@types/d3-transition@3.0.9':
    dependencies:
      '@types/d3-selection': 3.0.11

  '@types/d3-zoom@3.0.8':
    dependencies:
      '@types/d3-interpolate': 3.0.4
      '@types/d3-selection': 3.0.11

  '@types/eslint-scope@3.7.7':
    dependencies:
      '@types/eslint': 9.6.1
      '@types/estree': 1.0.9

  '@types/eslint@9.6.1':
    dependencies:
      '@types/estree': 1.0.9
      '@types/json-schema': 7.0.15

  '@types/estree@1.0.9': {}

  '@types/express-serve-static-core@5.1.1':
    dependencies:
      '@types/node': 22.19.19
      '@types/qs': 6.15.1
      '@types/range-parser': 1.2.7
      '@types/send': 1.2.1

  '@types/express@5.0.6':
    dependencies:
      '@types/body-parser': 1.19.6
      '@types/express-serve-static-core': 5.1.1
      '@types/serve-static': 2.2.0

  '@types/http-errors@2.0.5': {}

  '@types/json-schema@7.0.15': {}

  '@types/jsonwebtoken@9.0.10':
    dependencies:
      '@types/ms': 2.1.0
      '@types/node': 22.19.19

  '@types/jsonwebtoken@9.0.5':
    dependencies:
      '@types/node': 22.19.19

  '@types/ms@2.1.0': {}

  '@types/multer@1.4.13':
    dependencies:
      '@types/express': 5.0.6

  '@types/node@22.19.19':
    dependencies:
      undici-types: 6.21.0

  '@types/passport-jwt@4.0.1':
    dependencies:
      '@types/jsonwebtoken': 9.0.10
      '@types/passport-strategy': 0.2.38

  '@types/passport-strategy@0.2.38':
    dependencies:
      '@types/express': 5.0.6
      '@types/passport': 1.0.17

  '@types/passport@1.0.17':
    dependencies:
      '@types/express': 5.0.6

  '@types/qs@6.15.1': {}

  '@types/range-parser@1.2.7': {}

  '@types/react-dom@19.2.3(@types/react@19.2.15)':
    dependencies:
      '@types/react': 19.2.15

  '@types/react@19.2.15':
    dependencies:
      csstype: 3.2.3

  '@types/send@1.2.1':
    dependencies:
      '@types/node': 22.19.19

  '@types/serve-static@2.2.0':
    dependencies:
      '@types/http-errors': 2.0.5
      '@types/node': 22.19.19

  '@types/validator@13.15.10': {}

  '@types/ws@8.18.1':
    dependencies:
      '@types/node': 22.19.19

  '@webassemblyjs/ast@1.14.1':
    dependencies:
      '@webassemblyjs/helper-numbers': 1.13.2
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2

  '@webassemblyjs/floating-point-hex-parser@1.13.2': {}

  '@webassemblyjs/helper-api-error@1.13.2': {}

  '@webassemblyjs/helper-buffer@1.14.1': {}

  '@webassemblyjs/helper-numbers@1.13.2':
    dependencies:
      '@webassemblyjs/floating-point-hex-parser': 1.13.2
      '@webassemblyjs/helper-api-error': 1.13.2
      '@xtuc/long': 4.2.2

  '@webassemblyjs/helper-wasm-bytecode@1.13.2': {}

  '@webassemblyjs/helper-wasm-section@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-buffer': 1.14.1
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/wasm-gen': 1.14.1

  '@webassemblyjs/ieee754@1.13.2':
    dependencies:
      '@xtuc/ieee754': 1.2.0

  '@webassemblyjs/leb128@1.13.2':
    dependencies:
      '@xtuc/long': 4.2.2

  '@webassemblyjs/utf8@1.13.2': {}

  '@webassemblyjs/wasm-edit@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-buffer': 1.14.1
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/helper-wasm-section': 1.14.1
      '@webassemblyjs/wasm-gen': 1.14.1
      '@webassemblyjs/wasm-opt': 1.14.1
      '@webassemblyjs/wasm-parser': 1.14.1
      '@webassemblyjs/wast-printer': 1.14.1

  '@webassemblyjs/wasm-gen@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/ieee754': 1.13.2
      '@webassemblyjs/leb128': 1.13.2
      '@webassemblyjs/utf8': 1.13.2

  '@webassemblyjs/wasm-opt@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-buffer': 1.14.1
      '@webassemblyjs/wasm-gen': 1.14.1
      '@webassemblyjs/wasm-parser': 1.14.1

  '@webassemblyjs/wasm-parser@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/helper-api-error': 1.13.2
      '@webassemblyjs/helper-wasm-bytecode': 1.13.2
      '@webassemblyjs/ieee754': 1.13.2
      '@webassemblyjs/leb128': 1.13.2
      '@webassemblyjs/utf8': 1.13.2

  '@webassemblyjs/wast-printer@1.14.1':
    dependencies:
      '@webassemblyjs/ast': 1.14.1
      '@xtuc/long': 4.2.2

  '@xtuc/ieee754@1.2.0': {}

  '@xtuc/long@4.2.2': {}

  '@xyflow/react@12.10.2(@types/react@19.2.15)(react-dom@19.2.6(react@19.2.6))(react@19.2.6)':
    dependencies:
      '@xyflow/system': 0.0.76
      classcat: 5.0.5
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      zustand: 4.5.7(@types/react@19.2.15)(react@19.2.6)
    transitivePeerDependencies:
      - '@types/react'
      - immer

  '@xyflow/system@0.0.76':
    dependencies:
      '@types/d3-drag': 3.0.7
      '@types/d3-interpolate': 3.0.4
      '@types/d3-selection': 3.0.11
      '@types/d3-transition': 3.0.9
      '@types/d3-zoom': 3.0.8
      d3-drag: 3.0.0
      d3-interpolate: 3.0.1
      d3-selection: 3.0.0
      d3-zoom: 3.0.0

  accepts@1.3.8:
    dependencies:
      mime-types: 2.1.35
      negotiator: 0.6.3

  acorn@8.16.0: {}

  ajv-formats@2.1.1(ajv@8.12.0):
    optionalDependencies:
      ajv: 8.12.0

  ajv-formats@2.1.1(ajv@8.20.0):
    optionalDependencies:
      ajv: 8.20.0

  ajv-keywords@3.5.2(ajv@6.15.0):
    dependencies:
      ajv: 6.15.0

  ajv-keywords@5.1.0(ajv@8.20.0):
    dependencies:
      ajv: 8.20.0
      fast-deep-equal: 3.1.3

  ajv@6.15.0:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ajv@8.12.0:
    dependencies:
      fast-deep-equal: 3.1.3
      json-schema-traverse: 1.0.0
      require-from-string: 2.0.2
      uri-js: 4.4.1

  ajv@8.20.0:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-uri: 3.1.2
      json-schema-traverse: 1.0.0
      require-from-string: 2.0.2

  ansi-colors@4.1.3: {}

  ansi-escapes@4.3.2:
    dependencies:
      type-fest: 0.21.3

  ansi-regex@5.0.1: {}

  ansi-regex@6.2.2: {}

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  ansi-styles@6.2.3: {}

  any-promise@1.3.0: {}

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.2

  append-field@1.0.0: {}

  arg@5.0.2: {}

  argparse@2.0.1: {}

  aria-hidden@1.2.6:
    dependencies:
      tslib: 2.8.1

  array-flatten@1.1.1: {}

  array-timsort@1.0.3: {}

  autoprefixer@10.5.0(postcss@8.5.15):
    dependencies:
      browserslist: 4.28.2
      caniuse-lite: 1.0.30001793
      fraction.js: 5.3.4
      picocolors: 1.1.1
      postcss: 8.5.15
      postcss-value-parser: 4.2.0

  balanced-match@1.0.2: {}

  balanced-match@4.0.4: {}

  base64-js@1.5.1: {}

  base64id@2.0.0: {}

  baseline-browser-mapping@2.10.32: {}

  bcryptjs@2.4.3: {}

  binary-extensions@2.3.0: {}

  bl@4.1.0:
    dependencies:
      buffer: 5.7.1
      inherits: 2.0.4
      readable-stream: 3.6.2

  body-parser@1.20.4:
    dependencies:
      bytes: 3.1.2
      content-type: 1.0.5
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      http-errors: 2.0.1
      iconv-lite: 0.4.24
      on-finished: 2.4.1
      qs: 6.14.2
      raw-body: 2.5.3
      type-is: 1.6.18
      unpipe: 1.0.0
    transitivePeerDependencies:
      - supports-color

  brace-expansion@1.1.15:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@2.1.1:
    dependencies:
      balanced-match: 1.0.2

  brace-expansion@5.0.6:
    dependencies:
      balanced-match: 4.0.4

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.28.2:
    dependencies:
      baseline-browser-mapping: 2.10.32
      caniuse-lite: 1.0.30001793
      electron-to-chromium: 1.5.363
      node-releases: 2.0.46
      update-browserslist-db: 1.2.3(browserslist@4.28.2)

  buffer-equal-constant-time@1.0.1: {}

  buffer-from@1.1.2: {}

  buffer@5.7.1:
    dependencies:
      base64-js: 1.5.1
      ieee754: 1.2.1

  busboy@1.6.0:
    dependencies:
      streamsearch: 1.1.0

  bytes@3.1.2: {}

  c12@3.1.0:
    dependencies:
      chokidar: 4.0.3
      confbox: 0.2.4
      defu: 6.1.7
      dotenv: 16.6.1
      exsolve: 1.0.8
      giget: 2.0.0
      jiti: 2.7.0
      ohash: 2.0.11
      pathe: 2.0.3
      perfect-debounce: 1.0.0
      pkg-types: 2.3.1
      rc9: 2.1.2

  call-bind-apply-helpers@1.0.2:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2

  call-bind@1.0.9:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      get-intrinsic: 1.3.0
      set-function-length: 1.2.2

  call-bound@1.0.4:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      get-intrinsic: 1.3.0

  callsites@3.1.0: {}

  camelcase-css@2.0.1: {}

  caniuse-lite@1.0.30001793: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  chalk@5.6.2: {}

  chardet@0.7.0: {}

  chokidar@3.6.0:
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.3
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3

  chokidar@4.0.3:
    dependencies:
      readdirp: 4.1.2

  chrome-trace-event@1.0.4: {}

  citty@0.1.6:
    dependencies:
      consola: 3.4.2

  citty@0.2.2: {}

  class-transformer@0.5.1: {}

  class-validator@0.14.4:
    dependencies:
      '@types/validator': 13.15.10
      libphonenumber-js: 1.13.3
      validator: 13.15.35

  class-variance-authority@0.7.1:
    dependencies:
      clsx: 2.1.1

  classcat@5.0.5: {}

  cli-cursor@3.1.0:
    dependencies:
      restore-cursor: 3.1.0

  cli-spinners@2.9.2: {}

  cli-table3@0.6.5:
    dependencies:
      string-width: 4.2.3
    optionalDependencies:
      '@colors/colors': 1.5.0

  cli-width@3.0.0: {}

  cli-width@4.1.0: {}

  client-only@0.0.1: {}

  clone@1.0.4: {}

  clsx@2.1.1: {}

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  commander@2.20.3: {}

  commander@4.1.1: {}

  comment-json@4.2.5:
    dependencies:
      array-timsort: 1.0.3
      core-util-is: 1.0.3
      esprima: 4.0.1
      has-own-prop: 2.0.0
      repeat-string: 1.6.1

  concat-map@0.0.1: {}

  concat-stream@1.6.2:
    dependencies:
      buffer-from: 1.1.2
      inherits: 2.0.4
      readable-stream: 2.3.8
      typedarray: 0.0.6

  concat-stream@2.0.0:
    dependencies:
      buffer-from: 1.1.2
      inherits: 2.0.4
      readable-stream: 3.6.2
      typedarray: 0.0.6

  confbox@0.2.4: {}

  consola@2.15.3: {}

  consola@3.4.2: {}

  content-disposition@0.5.4:
    dependencies:
      safe-buffer: 5.2.1

  content-type@1.0.5: {}

  cookie-signature@1.0.7: {}

  cookie@0.7.2: {}

  core-util-is@1.0.3: {}

  cors@2.8.5:
    dependencies:
      object-assign: 4.1.1
      vary: 1.1.2

  cors@2.8.6:
    dependencies:
      object-assign: 4.1.1
      vary: 1.1.2

  cosmiconfig@8.3.6(typescript@5.7.2):
    dependencies:
      import-fresh: 3.3.1
      js-yaml: 4.1.1
      parse-json: 5.2.0
      path-type: 4.0.0
    optionalDependencies:
      typescript: 5.7.2

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  cssesc@3.0.0: {}

  csstype@3.2.3: {}

  d3-color@3.1.0: {}

  d3-dispatch@3.0.1: {}

  d3-drag@3.0.0:
    dependencies:
      d3-dispatch: 3.0.1
      d3-selection: 3.0.0

  d3-ease@3.0.1: {}

  d3-interpolate@3.0.1:
    dependencies:
      d3-color: 3.1.0

  d3-selection@3.0.0: {}

  d3-timer@3.0.1: {}

  d3-transition@3.0.1(d3-selection@3.0.0):
    dependencies:
      d3-color: 3.1.0
      d3-dispatch: 3.0.1
      d3-ease: 3.0.1
      d3-interpolate: 3.0.1
      d3-selection: 3.0.0
      d3-timer: 3.0.1

  d3-zoom@3.0.0:
    dependencies:
      d3-dispatch: 3.0.1
      d3-drag: 3.0.0
      d3-interpolate: 3.0.1
      d3-selection: 3.0.0
      d3-transition: 3.0.1(d3-selection@3.0.0)

  debug@2.6.9:
    dependencies:
      ms: 2.0.0

  debug@4.3.7:
    dependencies:
      ms: 2.1.3

  debug@4.4.3:
    dependencies:
      ms: 2.1.3

  deepmerge-ts@7.1.5: {}

  deepmerge@4.3.1: {}

  defaults@1.0.4:
    dependencies:
      clone: 1.0.4

  define-data-property@1.1.4:
    dependencies:
      es-define-property: 1.0.1
      es-errors: 1.3.0
      gopd: 1.2.0

  defu@6.1.7: {}

  depd@2.0.0: {}

  destr@2.0.5: {}

  destroy@1.2.0: {}

  detect-libc@2.1.2:
    optional: true

  detect-node-es@1.1.0: {}

  didyoumean@1.2.2: {}

  dlv@1.1.3: {}

  dotenv-cli@8.0.0:
    dependencies:
      cross-spawn: 7.0.6
      dotenv: 16.6.1
      dotenv-expand: 10.0.0
      minimist: 1.2.8

  dotenv-expand@10.0.0: {}

  dotenv@16.6.1: {}

  dunder-proto@1.0.1:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-errors: 1.3.0
      gopd: 1.2.0

  eastasianwidth@0.2.0: {}

  ecdsa-sig-formatter@1.0.11:
    dependencies:
      safe-buffer: 5.2.1

  echarts-for-react@3.0.6(echarts@5.6.0)(react@19.2.6):
    dependencies:
      echarts: 5.6.0
      fast-deep-equal: 3.1.3
      react: 19.2.6
      size-sensor: 1.0.3

  echarts@5.6.0:
    dependencies:
      tslib: 2.3.0
      zrender: 5.6.1

  ee-first@1.1.1: {}

  effect@3.21.0:
    dependencies:
      '@standard-schema/spec': 1.1.0
      fast-check: 3.23.2

  electron-to-chromium@1.5.363: {}

  emoji-regex@8.0.0: {}

  emoji-regex@9.2.2: {}

  empathic@2.0.0: {}

  encodeurl@2.0.0: {}

  engine.io-client@6.6.5:
    dependencies:
      '@socket.io/component-emitter': 3.1.2
      debug: 4.4.3
      engine.io-parser: 5.2.3
      ws: 8.20.1
      xmlhttprequest-ssl: 2.1.2
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate

  engine.io-parser@5.2.3: {}

  engine.io@6.6.8:
    dependencies:
      '@types/cors': 2.8.19
      '@types/node': 22.19.19
      '@types/ws': 8.18.1
      accepts: 1.3.8
      base64id: 2.0.0
      cookie: 0.7.2
      cors: 2.8.6
      debug: 4.4.3
      engine.io-parser: 5.2.3
      ws: 8.20.1
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate

  enhanced-resolve@5.22.0:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.3.3

  error-ex@1.3.4:
    dependencies:
      is-arrayish: 0.2.1

  es-define-property@1.0.1: {}

  es-errors@1.3.0: {}

  es-module-lexer@1.7.0: {}

  es-object-atoms@1.1.2:
    dependencies:
      es-errors: 1.3.0

  esbuild@0.28.0:
    optionalDependencies:
      '@esbuild/aix-ppc64': 0.28.0
      '@esbuild/android-arm': 0.28.0
      '@esbuild/android-arm64': 0.28.0
      '@esbuild/android-x64': 0.28.0
      '@esbuild/darwin-arm64': 0.28.0
      '@esbuild/darwin-x64': 0.28.0
      '@esbuild/freebsd-arm64': 0.28.0
      '@esbuild/freebsd-x64': 0.28.0
      '@esbuild/linux-arm': 0.28.0
      '@esbuild/linux-arm64': 0.28.0
      '@esbuild/linux-ia32': 0.28.0
      '@esbuild/linux-loong64': 0.28.0
      '@esbuild/linux-mips64el': 0.28.0
      '@esbuild/linux-ppc64': 0.28.0
      '@esbuild/linux-riscv64': 0.28.0
      '@esbuild/linux-s390x': 0.28.0
      '@esbuild/linux-x64': 0.28.0
      '@esbuild/netbsd-arm64': 0.28.0
      '@esbuild/netbsd-x64': 0.28.0
      '@esbuild/openbsd-arm64': 0.28.0
      '@esbuild/openbsd-x64': 0.28.0
      '@esbuild/openharmony-arm64': 0.28.0
      '@esbuild/sunos-x64': 0.28.0
      '@esbuild/win32-arm64': 0.28.0
      '@esbuild/win32-ia32': 0.28.0
      '@esbuild/win32-x64': 0.28.0

  escalade@3.2.0: {}

  escape-html@1.0.3: {}

  escape-string-regexp@1.0.5: {}

  eslint-scope@5.1.1:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 4.3.0

  esprima@4.0.1: {}

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@4.3.0: {}

  estraverse@5.3.0: {}

  etag@1.8.1: {}

  events@3.3.0: {}

  express@4.22.1:
    dependencies:
      accepts: 1.3.8
      array-flatten: 1.1.1
      body-parser: 1.20.4
      content-disposition: 0.5.4
      content-type: 1.0.5
      cookie: 0.7.2
      cookie-signature: 1.0.7
      debug: 2.6.9
      depd: 2.0.0
      encodeurl: 2.0.0
      escape-html: 1.0.3
      etag: 1.8.1
      finalhandler: 1.3.2
      fresh: 0.5.2
      http-errors: 2.0.1
      merge-descriptors: 1.0.3
      methods: 1.1.2
      on-finished: 2.4.1
      parseurl: 1.3.3
      path-to-regexp: 0.1.13
      proxy-addr: 2.0.7
      qs: 6.14.2
      range-parser: 1.2.1
      safe-buffer: 5.2.1
      send: 0.19.2
      serve-static: 1.16.3
      setprototypeof: 1.2.0
      statuses: 2.0.2
      type-is: 1.6.18
      utils-merge: 1.0.1
      vary: 1.1.2
    transitivePeerDependencies:
      - supports-color

  exsolve@1.0.8: {}

  external-editor@3.1.0:
    dependencies:
      chardet: 0.7.0
      iconv-lite: 0.4.24
      tmp: 0.0.33

  fast-check@3.23.2:
    dependencies:
      pure-rand: 6.1.0

  fast-deep-equal@3.1.3: {}

  fast-glob@3.3.3:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-json-stable-stringify@2.1.0: {}

  fast-safe-stringify@2.1.1: {}

  fast-uri@3.1.2: {}

  fastq@1.20.1:
    dependencies:
      reusify: 1.1.0

  fdir@6.5.0(picomatch@4.0.4):
    optionalDependencies:
      picomatch: 4.0.4

  fflate@0.8.3: {}

  figures@3.2.0:
    dependencies:
      escape-string-regexp: 1.0.5

  file-type@20.4.1:
    dependencies:
      '@tokenizer/inflate': 0.2.7
      strtok3: 10.3.5
      token-types: 6.1.2
      uint8array-extras: 1.5.0
    transitivePeerDependencies:
      - supports-color

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  finalhandler@1.3.2:
    dependencies:
      debug: 2.6.9
      encodeurl: 2.0.0
      escape-html: 1.0.3
      on-finished: 2.4.1
      parseurl: 1.3.3
      statuses: 2.0.2
      unpipe: 1.0.0
    transitivePeerDependencies:
      - supports-color

  foreground-child@3.3.1:
    dependencies:
      cross-spawn: 7.0.6
      signal-exit: 4.1.0

  fork-ts-checker-webpack-plugin@9.0.2(typescript@5.7.2)(webpack@5.97.1):
    dependencies:
      '@babel/code-frame': 7.29.7
      chalk: 4.1.2
      chokidar: 3.6.0
      cosmiconfig: 8.3.6(typescript@5.7.2)
      deepmerge: 4.3.1
      fs-extra: 10.1.0
      memfs: 3.5.3
      minimatch: 3.1.5
      node-abort-controller: 3.1.1
      schema-utils: 3.3.0
      semver: 7.8.1
      tapable: 2.3.3
      typescript: 5.7.2
      webpack: 5.97.1

  forwarded@0.2.0: {}

  fraction.js@5.3.4: {}

  framer-motion@11.18.2(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      motion-dom: 11.18.1
      motion-utils: 11.18.1
      tslib: 2.8.1
    optionalDependencies:
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)

  fresh@0.5.2: {}

  fs-extra@10.1.0:
    dependencies:
      graceful-fs: 4.2.11
      jsonfile: 6.2.1
      universalify: 2.0.1

  fs-monkey@1.1.0: {}

  fsevents@2.3.3:
    optional: true

  function-bind@1.1.2: {}

  get-intrinsic@1.3.0:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.2
      function-bind: 1.1.2
      get-proto: 1.0.1
      gopd: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.3
      math-intrinsics: 1.1.0

  get-nonce@1.0.1: {}

  get-proto@1.0.1:
    dependencies:
      dunder-proto: 1.0.1
      es-object-atoms: 1.1.2

  giget@2.0.0:
    dependencies:
      citty: 0.1.6
      consola: 3.4.2
      defu: 6.1.7
      node-fetch-native: 1.6.7
      nypm: 0.6.6
      pathe: 2.0.3

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  glob-to-regexp@0.4.1: {}

  glob@10.4.5:
    dependencies:
      foreground-child: 3.3.1
      jackspeak: 3.4.3
      minimatch: 9.0.9
      minipass: 7.1.3
      package-json-from-dist: 1.0.1
      path-scurry: 1.11.1

  glob@13.0.6:
    dependencies:
      minimatch: 10.2.5
      minipass: 7.1.3
      path-scurry: 2.0.2

  gopd@1.2.0: {}

  graceful-fs@4.2.11: {}

  has-flag@4.0.0: {}

  has-own-prop@2.0.0: {}

  has-property-descriptors@1.0.2:
    dependencies:
      es-define-property: 1.0.1

  has-symbols@1.1.0: {}

  hasown@2.0.3:
    dependencies:
      function-bind: 1.1.2

  http-errors@2.0.1:
    dependencies:
      depd: 2.0.0
      inherits: 2.0.4
      setprototypeof: 1.2.0
      statuses: 2.0.2
      toidentifier: 1.0.1

  iconv-lite@0.4.24:
    dependencies:
      safer-buffer: 2.1.2

  ieee754@1.2.1: {}

  import-fresh@3.3.1:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  inherits@2.0.4: {}

  inquirer@8.2.6:
    dependencies:
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      cli-cursor: 3.1.0
      cli-width: 3.0.0
      external-editor: 3.1.0
      figures: 3.2.0
      lodash: 4.18.1
      mute-stream: 0.0.8
      ora: 5.4.1
      run-async: 2.4.1
      rxjs: 7.8.2
      string-width: 4.2.3
      strip-ansi: 6.0.1
      through: 2.3.8
      wrap-ansi: 6.2.0

  inquirer@9.2.15:
    dependencies:
      '@ljharb/through': 2.3.14
      ansi-escapes: 4.3.2
      chalk: 5.6.2
      cli-cursor: 3.1.0
      cli-width: 4.1.0
      external-editor: 3.1.0
      figures: 3.2.0
      lodash: 4.18.1
      mute-stream: 1.0.0
      ora: 5.4.1
      run-async: 3.0.0
      rxjs: 7.8.2
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wrap-ansi: 6.2.0

  ipaddr.js@1.9.1: {}

  is-arrayish@0.2.1: {}

  is-binary-path@2.1.0:
    dependencies:
      binary-extensions: 2.3.0

  is-core-module@2.16.2:
    dependencies:
      hasown: 2.0.3

  is-extglob@2.1.1: {}

  is-fullwidth-code-point@3.0.0: {}

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-interactive@1.0.0: {}

  is-number@7.0.0: {}

  is-unicode-supported@0.1.0: {}

  isarray@1.0.0: {}

  isexe@2.0.0: {}

  iterare@1.2.1: {}

  jackspeak@3.4.3:
    dependencies:
      '@isaacs/cliui': 8.0.2
    optionalDependencies:
      '@pkgjs/parseargs': 0.11.0

  jest-worker@27.5.1:
    dependencies:
      '@types/node': 22.19.19
      merge-stream: 2.0.0
      supports-color: 8.1.1

  jiti@1.21.7: {}

  jiti@2.7.0: {}

  js-tokens@4.0.0: {}

  js-yaml@4.1.1:
    dependencies:
      argparse: 2.0.1

  json-parse-even-better-errors@2.3.1: {}

  json-schema-traverse@0.4.1: {}

  json-schema-traverse@1.0.0: {}

  json5@2.2.3: {}

  jsonc-parser@3.2.1: {}

  jsonc-parser@3.3.1: {}

  jsonfile@6.2.1:
    dependencies:
      universalify: 2.0.1
    optionalDependencies:
      graceful-fs: 4.2.11

  jsonwebtoken@9.0.2:
    dependencies:
      jws: 3.2.3
      lodash.includes: 4.3.0
      lodash.isboolean: 3.0.3
      lodash.isinteger: 4.0.4
      lodash.isnumber: 3.0.3
      lodash.isplainobject: 4.0.6
      lodash.isstring: 4.0.1
      lodash.once: 4.1.1
      ms: 2.1.3
      semver: 7.8.1

  jsonwebtoken@9.0.3:
    dependencies:
      jws: 4.0.1
      lodash.includes: 4.3.0
      lodash.isboolean: 3.0.3
      lodash.isinteger: 4.0.4
      lodash.isnumber: 3.0.3
      lodash.isplainobject: 4.0.6
      lodash.isstring: 4.0.1
      lodash.once: 4.1.1
      ms: 2.1.3
      semver: 7.8.1

  jwa@1.4.2:
    dependencies:
      buffer-equal-constant-time: 1.0.1
      ecdsa-sig-formatter: 1.0.11
      safe-buffer: 5.2.1

  jwa@2.0.1:
    dependencies:
      buffer-equal-constant-time: 1.0.1
      ecdsa-sig-formatter: 1.0.11
      safe-buffer: 5.2.1

  jws@3.2.3:
    dependencies:
      jwa: 1.4.2
      safe-buffer: 5.2.1

  jws@4.0.1:
    dependencies:
      jwa: 2.0.1
      safe-buffer: 5.2.1

  libphonenumber-js@1.13.3: {}

  lilconfig@3.1.3: {}

  lines-and-columns@1.2.4: {}

  loader-runner@4.3.2: {}

  lodash.includes@4.3.0: {}

  lodash.isboolean@3.0.3: {}

  lodash.isinteger@4.0.4: {}

  lodash.isnumber@3.0.3: {}

  lodash.isplainobject@4.0.6: {}

  lodash.isstring@4.0.1: {}

  lodash.once@4.1.1: {}

  lodash@4.18.1: {}

  log-symbols@4.1.0:
    dependencies:
      chalk: 4.1.2
      is-unicode-supported: 0.1.0

  lru-cache@10.4.3: {}

  lru-cache@11.5.1: {}

  lucide-react@0.469.0(react@19.2.6):
    dependencies:
      react: 19.2.6

  magic-string@0.30.8:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5

  math-intrinsics@1.1.0: {}

  media-typer@0.3.0: {}

  memfs@3.5.3:
    dependencies:
      fs-monkey: 1.1.0

  merge-descriptors@1.0.3: {}

  merge-stream@2.0.0: {}

  merge2@1.4.1: {}

  methods@1.1.2: {}

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.2

  mime-db@1.52.0: {}

  mime-types@2.1.35:
    dependencies:
      mime-db: 1.52.0

  mime@1.6.0: {}

  mimic-fn@2.1.0: {}

  minimatch@10.2.5:
    dependencies:
      brace-expansion: 5.0.6

  minimatch@3.1.5:
    dependencies:
      brace-expansion: 1.1.15

  minimatch@9.0.9:
    dependencies:
      brace-expansion: 2.1.1

  minimist@1.2.8: {}

  minipass@7.1.3: {}

  mkdirp@0.5.6:
    dependencies:
      minimist: 1.2.8

  motion-dom@11.18.1:
    dependencies:
      motion-utils: 11.18.1

  motion-utils@11.18.1: {}

  ms@2.0.0: {}

  ms@2.1.3: {}

  multer@1.4.5-lts.2:
    dependencies:
      append-field: 1.0.0
      busboy: 1.6.0
      concat-stream: 1.6.2
      mkdirp: 0.5.6
      object-assign: 4.1.1
      type-is: 1.6.18
      xtend: 4.0.2

  multer@2.0.2:
    dependencies:
      append-field: 1.0.0
      busboy: 1.6.0
      concat-stream: 2.0.0
      mkdirp: 0.5.6
      object-assign: 4.1.1
      type-is: 1.6.18
      xtend: 4.0.2

  mute-stream@0.0.8: {}

  mute-stream@1.0.0: {}

  mz@2.7.0:
    dependencies:
      any-promise: 1.3.0
      object-assign: 4.1.1
      thenify-all: 1.6.0

  nanoid@3.3.12: {}

  negotiator@0.6.3: {}

  neo-async@2.6.2: {}

  next@15.5.18(react-dom@19.2.6(react@19.2.6))(react@19.2.6):
    dependencies:
      '@next/env': 15.5.18
      '@swc/helpers': 0.5.15
      caniuse-lite: 1.0.30001793
      postcss: 8.4.31
      react: 19.2.6
      react-dom: 19.2.6(react@19.2.6)
      styled-jsx: 5.1.6(react@19.2.6)
    optionalDependencies:
      '@next/swc-darwin-arm64': 15.5.18
      '@next/swc-darwin-x64': 15.5.18
      '@next/swc-linux-arm64-gnu': 15.5.18
      '@next/swc-linux-arm64-musl': 15.5.18
      '@next/swc-linux-x64-gnu': 15.5.18
      '@next/swc-linux-x64-musl': 15.5.18
      '@next/swc-win32-arm64-msvc': 15.5.18
      '@next/swc-win32-x64-msvc': 15.5.18
      sharp: 0.34.5
    transitivePeerDependencies:
      - '@babel/core'
      - babel-plugin-macros

  node-abort-controller@3.1.1: {}

  node-emoji@1.11.0:
    dependencies:
      lodash: 4.18.1

  node-fetch-native@1.6.7: {}

  node-fetch@2.7.0:
    dependencies:
      whatwg-url: 5.0.0

  node-releases@2.0.46: {}

  normalize-path@3.0.0: {}

  nypm@0.6.6:
    dependencies:
      citty: 0.2.2
      pathe: 2.0.3
      tinyexec: 1.2.2

  object-assign@4.1.1: {}

  object-hash@3.0.0: {}

  object-inspect@1.13.4: {}

  ohash@2.0.11: {}

  on-finished@2.4.1:
    dependencies:
      ee-first: 1.1.1

  onetime@5.1.2:
    dependencies:
      mimic-fn: 2.1.0

  ora@5.4.1:
    dependencies:
      bl: 4.1.0
      chalk: 4.1.2
      cli-cursor: 3.1.0
      cli-spinners: 2.9.2
      is-interactive: 1.0.0
      is-unicode-supported: 0.1.0
      log-symbols: 4.1.0
      strip-ansi: 6.0.1
      wcwidth: 1.0.1

  os-tmpdir@1.0.2: {}

  package-json-from-dist@1.0.1: {}

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  parse-json@5.2.0:
    dependencies:
      '@babel/code-frame': 7.29.7
      error-ex: 1.3.4
      json-parse-even-better-errors: 2.3.1
      lines-and-columns: 1.2.4

  parseurl@1.3.3: {}

  passport-jwt@4.0.1:
    dependencies:
      jsonwebtoken: 9.0.3
      passport-strategy: 1.0.0

  passport-strategy@1.0.0: {}

  passport@0.7.0:
    dependencies:
      passport-strategy: 1.0.0
      pause: 0.0.1
      utils-merge: 1.0.1

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  path-scurry@1.11.1:
    dependencies:
      lru-cache: 10.4.3
      minipass: 7.1.3

  path-scurry@2.0.2:
    dependencies:
      lru-cache: 11.5.1
      minipass: 7.1.3

  path-to-regexp@0.1.13: {}

  path-to-regexp@3.3.0: {}

  path-type@4.0.0: {}

  pathe@2.0.3: {}

  pause@0.0.1: {}

  perfect-debounce@1.0.0: {}

  picocolors@1.1.1: {}

  picomatch@2.3.2: {}

  picomatch@4.0.1: {}

  picomatch@4.0.4: {}

  pify@2.3.0: {}

  pirates@4.0.7: {}

  pkg-types@2.3.1:
    dependencies:
      confbox: 0.2.4
      exsolve: 1.0.8
      pathe: 2.0.3

  pluralize@8.0.0: {}

  postcss-import@15.1.0(postcss@8.5.15):
    dependencies:
      postcss: 8.5.15
      postcss-value-parser: 4.2.0
      read-cache: 1.0.0
      resolve: 1.22.12

  postcss-js@4.1.0(postcss@8.5.15):
    dependencies:
      camelcase-css: 2.0.1
      postcss: 8.5.15

  postcss-load-config@6.0.1(jiti@1.21.7)(postcss@8.5.15)(tsx@4.22.3):
    dependencies:
      lilconfig: 3.1.3
    optionalDependencies:
      jiti: 1.21.7
      postcss: 8.5.15
      tsx: 4.22.3

  postcss-nested@6.2.0(postcss@8.5.15):
    dependencies:
      postcss: 8.5.15
      postcss-selector-parser: 6.1.2

  postcss-selector-parser@6.1.2:
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  postcss-value-parser@4.2.0: {}

  postcss@8.4.31:
    dependencies:
      nanoid: 3.3.12
      picocolors: 1.1.1
      source-map-js: 1.2.1

  postcss@8.5.15:
    dependencies:
      nanoid: 3.3.12
      picocolors: 1.1.1
      source-map-js: 1.2.1

  prisma@6.19.3(typescript@5.9.3):
    dependencies:
      '@prisma/config': 6.19.3
      '@prisma/engines': 6.19.3
    optionalDependencies:
      typescript: 5.9.3
    transitivePeerDependencies:
      - magicast

  process-nextick-args@2.0.1: {}

  proxy-addr@2.0.7:
    dependencies:
      forwarded: 0.2.0
      ipaddr.js: 1.9.1

  punycode@2.3.1: {}

  pure-rand@6.1.0: {}

  qs@6.14.2:
    dependencies:
      side-channel: 1.1.0

  queue-microtask@1.2.3: {}

  range-parser@1.2.1: {}

  raw-body@2.5.3:
    dependencies:
      bytes: 3.1.2
      http-errors: 2.0.1
      iconv-lite: 0.4.24
      unpipe: 1.0.0

  rc9@2.1.2:
    dependencies:
      defu: 6.1.7
      destr: 2.0.5

  react-dom@19.2.6(react@19.2.6):
    dependencies:
      react: 19.2.6
      scheduler: 0.27.0

  react-remove-scroll-bar@2.3.8(@types/react@19.2.15)(react@19.2.6):
    dependencies:
      react: 19.2.6
      react-style-singleton: 2.2.3(@types/react@19.2.15)(react@19.2.6)
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.15

  react-remove-scroll@2.7.2(@types/react@19.2.15)(react@19.2.6):
    dependencies:
      react: 19.2.6
      react-remove-scroll-bar: 2.3.8(@types/react@19.2.15)(react@19.2.6)
      react-style-singleton: 2.2.3(@types/react@19.2.15)(react@19.2.6)
      tslib: 2.8.1
      use-callback-ref: 1.3.3(@types/react@19.2.15)(react@19.2.6)
      use-sidecar: 1.1.3(@types/react@19.2.15)(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15

  react-style-singleton@2.2.3(@types/react@19.2.15)(react@19.2.6):
    dependencies:
      get-nonce: 1.0.1
      react: 19.2.6
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.15

  react@19.2.6: {}

  read-cache@1.0.0:
    dependencies:
      pify: 2.3.0

  readable-stream@2.3.8:
    dependencies:
      core-util-is: 1.0.3
      inherits: 2.0.4
      isarray: 1.0.0
      process-nextick-args: 2.0.1
      safe-buffer: 5.1.2
      string_decoder: 1.1.1
      util-deprecate: 1.0.2

  readable-stream@3.6.2:
    dependencies:
      inherits: 2.0.4
      string_decoder: 1.3.0
      util-deprecate: 1.0.2

  readdirp@3.6.0:
    dependencies:
      picomatch: 2.3.2

  readdirp@4.1.2: {}

  reflect-metadata@0.2.2: {}

  repeat-string@1.6.1: {}

  require-from-string@2.0.2: {}

  resolve-from@4.0.0: {}

  resolve@1.22.12:
    dependencies:
      es-errors: 1.3.0
      is-core-module: 2.16.2
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  restore-cursor@3.1.0:
    dependencies:
      onetime: 5.1.2
      signal-exit: 3.0.7

  reusify@1.1.0: {}

  rimraf@6.1.3:
    dependencies:
      glob: 13.0.6
      package-json-from-dist: 1.0.1

  run-async@2.4.1: {}

  run-async@3.0.0: {}

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  rxjs@7.8.1:
    dependencies:
      tslib: 2.8.1

  rxjs@7.8.2:
    dependencies:
      tslib: 2.8.1

  safe-buffer@5.1.2: {}

  safe-buffer@5.2.1: {}

  safer-buffer@2.1.2: {}

  scheduler@0.27.0: {}

  schema-utils@3.3.0:
    dependencies:
      '@types/json-schema': 7.0.15
      ajv: 6.15.0
      ajv-keywords: 3.5.2(ajv@6.15.0)

  schema-utils@4.3.3:
    dependencies:
      '@types/json-schema': 7.0.15
      ajv: 8.20.0
      ajv-formats: 2.1.1(ajv@8.20.0)
      ajv-keywords: 5.1.0(ajv@8.20.0)

  semver@7.8.1: {}

  send@0.19.2:
    dependencies:
      debug: 2.6.9
      depd: 2.0.0
      destroy: 1.2.0
      encodeurl: 2.0.0
      escape-html: 1.0.3
      etag: 1.8.1
      fresh: 0.5.2
      http-errors: 2.0.1
      mime: 1.6.0
      ms: 2.1.3
      on-finished: 2.4.1
      range-parser: 1.2.1
      statuses: 2.0.2
    transitivePeerDependencies:
      - supports-color

  serve-static@1.16.3:
    dependencies:
      encodeurl: 2.0.0
      escape-html: 1.0.3
      parseurl: 1.3.3
      send: 0.19.2
    transitivePeerDependencies:
      - supports-color

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-property-descriptors: 1.0.2

  setprototypeof@1.2.0: {}

  sharp@0.34.5:
    dependencies:
      '@img/colour': 1.1.0
      detect-libc: 2.1.2
      semver: 7.8.1
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.34.5
      '@img/sharp-darwin-x64': 0.34.5
      '@img/sharp-libvips-darwin-arm64': 1.2.4
      '@img/sharp-libvips-darwin-x64': 1.2.4
      '@img/sharp-libvips-linux-arm': 1.2.4
      '@img/sharp-libvips-linux-arm64': 1.2.4
      '@img/sharp-libvips-linux-ppc64': 1.2.4
      '@img/sharp-libvips-linux-riscv64': 1.2.4
      '@img/sharp-libvips-linux-s390x': 1.2.4
      '@img/sharp-libvips-linux-x64': 1.2.4
      '@img/sharp-libvips-linuxmusl-arm64': 1.2.4
      '@img/sharp-libvips-linuxmusl-x64': 1.2.4
      '@img/sharp-linux-arm': 0.34.5
      '@img/sharp-linux-arm64': 0.34.5
      '@img/sharp-linux-ppc64': 0.34.5
      '@img/sharp-linux-riscv64': 0.34.5
      '@img/sharp-linux-s390x': 0.34.5
      '@img/sharp-linux-x64': 0.34.5
      '@img/sharp-linuxmusl-arm64': 0.34.5
      '@img/sharp-linuxmusl-x64': 0.34.5
      '@img/sharp-wasm32': 0.34.5
      '@img/sharp-win32-arm64': 0.34.5
      '@img/sharp-win32-ia32': 0.34.5
      '@img/sharp-win32-x64': 0.34.5
    optional: true

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel-list@1.0.1:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4

  side-channel-map@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4

  side-channel-weakmap@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4
      side-channel-map: 1.0.1

  side-channel@1.1.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4
      side-channel-list: 1.0.1
      side-channel-map: 1.0.1
      side-channel-weakmap: 1.0.2

  signal-exit@3.0.7: {}

  signal-exit@4.1.0: {}

  size-sensor@1.0.3: {}

  socket.io-adapter@2.5.7:
    dependencies:
      debug: 4.4.3
      ws: 8.20.1
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate

  socket.io-client@4.8.3:
    dependencies:
      '@socket.io/component-emitter': 3.1.2
      debug: 4.4.3
      engine.io-client: 6.6.5
      socket.io-parser: 4.2.6
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate

  socket.io-parser@4.2.6:
    dependencies:
      '@socket.io/component-emitter': 3.1.2
      debug: 4.4.3
    transitivePeerDependencies:
      - supports-color

  socket.io@4.8.1:
    dependencies:
      accepts: 1.3.8
      base64id: 2.0.0
      cors: 2.8.6
      debug: 4.3.7
      engine.io: 6.6.8
      socket.io-adapter: 2.5.7
      socket.io-parser: 4.2.6
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate

  socket.io@4.8.3:
    dependencies:
      accepts: 1.3.8
      base64id: 2.0.0
      cors: 2.8.6
      debug: 4.4.3
      engine.io: 6.6.8
      socket.io-adapter: 2.5.7
      socket.io-parser: 4.2.6
    transitivePeerDependencies:
      - bufferutil
      - supports-color
      - utf-8-validate

  source-map-js@1.2.1: {}

  source-map-support@0.5.21:
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1

  source-map@0.6.1: {}

  source-map@0.7.4: {}

  statuses@2.0.2: {}

  streamsearch@1.1.0: {}

  string-width@4.2.3:
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  string-width@5.1.2:
    dependencies:
      eastasianwidth: 0.2.0
      emoji-regex: 9.2.2
      strip-ansi: 7.2.0

  string_decoder@1.1.1:
    dependencies:
      safe-buffer: 5.1.2

  string_decoder@1.3.0:
    dependencies:
      safe-buffer: 5.2.1

  strip-ansi@6.0.1:
    dependencies:
      ansi-regex: 5.0.1

  strip-ansi@7.2.0:
    dependencies:
      ansi-regex: 6.2.2

  strip-bom@3.0.0: {}

  strtok3@10.3.5:
    dependencies:
      '@tokenizer/token': 0.3.0

  styled-jsx@5.1.6(react@19.2.6):
    dependencies:
      client-only: 0.0.1
      react: 19.2.6

  sucrase@3.35.1:
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      commander: 4.1.1
      lines-and-columns: 1.2.4
      mz: 2.7.0
      pirates: 4.0.7
      tinyglobby: 0.2.16
      ts-interface-checker: 0.1.13

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-color@8.1.1:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  symbol-observable@4.0.0: {}

  tailwind-merge@2.6.1: {}

  tailwindcss@3.4.19(tsx@4.22.3):
    dependencies:
      '@alloc/quick-lru': 5.2.0
      arg: 5.0.2
      chokidar: 3.6.0
      didyoumean: 1.2.2
      dlv: 1.1.3
      fast-glob: 3.3.3
      glob-parent: 6.0.2
      is-glob: 4.0.3
      jiti: 1.21.7
      lilconfig: 3.1.3
      micromatch: 4.0.8
      normalize-path: 3.0.0
      object-hash: 3.0.0
      picocolors: 1.1.1
      postcss: 8.5.15
      postcss-import: 15.1.0(postcss@8.5.15)
      postcss-js: 4.1.0(postcss@8.5.15)
      postcss-load-config: 6.0.1(jiti@1.21.7)(postcss@8.5.15)(tsx@4.22.3)
      postcss-nested: 6.2.0(postcss@8.5.15)
      postcss-selector-parser: 6.1.2
      resolve: 1.22.12
      sucrase: 3.35.1
    transitivePeerDependencies:
      - tsx
      - yaml

  tapable@2.3.3: {}

  terser-webpack-plugin@5.6.1(webpack@5.97.1):
    dependencies:
      '@jridgewell/trace-mapping': 0.3.31
      jest-worker: 27.5.1
      schema-utils: 4.3.3
      terser: 5.48.0
      webpack: 5.97.1

  terser@5.48.0:
    dependencies:
      '@jridgewell/source-map': 0.3.11
      acorn: 8.16.0
      commander: 2.20.3
      source-map-support: 0.5.21

  thenify-all@1.6.0:
    dependencies:
      thenify: 3.3.1

  thenify@3.3.1:
    dependencies:
      any-promise: 1.3.0

  through@2.3.8: {}

  tinyexec@1.2.2: {}

  tinyglobby@0.2.16:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.4)
      picomatch: 4.0.4

  tmp@0.0.33:
    dependencies:
      os-tmpdir: 1.0.2

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  toidentifier@1.0.1: {}

  token-types@6.1.2:
    dependencies:
      '@borewit/text-codec': 0.2.2
      '@tokenizer/token': 0.3.0
      ieee754: 1.2.1

  tr46@0.0.3: {}

  tree-kill@1.2.2: {}

  ts-interface-checker@0.1.13: {}

  tsconfig-paths-webpack-plugin@4.2.0:
    dependencies:
      chalk: 4.1.2
      enhanced-resolve: 5.22.0
      tapable: 2.3.3
      tsconfig-paths: 4.2.0

  tsconfig-paths@4.2.0:
    dependencies:
      json5: 2.2.3
      minimist: 1.2.8
      strip-bom: 3.0.0

  tslib@2.3.0: {}

  tslib@2.8.1: {}

  tsx@4.22.3:
    dependencies:
      esbuild: 0.28.0
    optionalDependencies:
      fsevents: 2.3.3

  type-fest@0.21.3: {}

  type-is@1.6.18:
    dependencies:
      media-typer: 0.3.0
      mime-types: 2.1.35

  typedarray@0.0.6: {}

  typescript@5.7.2: {}

  typescript@5.9.3: {}

  uid@2.0.2:
    dependencies:
      '@lukeed/csprng': 1.1.0

  uint8array-extras@1.5.0: {}

  undici-types@6.21.0: {}

  universalify@2.0.1: {}

  unpipe@1.0.0: {}

  update-browserslist-db@1.2.3(browserslist@4.28.2):
    dependencies:
      browserslist: 4.28.2
      escalade: 3.2.0
      picocolors: 1.1.1

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  use-callback-ref@1.3.3(@types/react@19.2.15)(react@19.2.6):
    dependencies:
      react: 19.2.6
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.15

  use-sidecar@1.1.3(@types/react@19.2.15)(react@19.2.6):
    dependencies:
      detect-node-es: 1.1.0
      react: 19.2.6
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.2.15

  use-sync-external-store@1.6.0(react@19.2.6):
    dependencies:
      react: 19.2.6

  util-deprecate@1.0.2: {}

  utils-merge@1.0.1: {}

  validator@13.15.35: {}

  vary@1.1.2: {}

  watchpack@2.5.1:
    dependencies:
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.11

  wcwidth@1.0.1:
    dependencies:
      defaults: 1.0.4

  webidl-conversions@3.0.1: {}

  webpack-node-externals@3.0.0: {}

  webpack-sources@3.5.0: {}

  webpack@5.97.1:
    dependencies:
      '@types/eslint-scope': 3.7.7
      '@types/estree': 1.0.9
      '@webassemblyjs/ast': 1.14.1
      '@webassemblyjs/wasm-edit': 1.14.1
      '@webassemblyjs/wasm-parser': 1.14.1
      acorn: 8.16.0
      browserslist: 4.28.2
      chrome-trace-event: 1.0.4
      enhanced-resolve: 5.22.0
      es-module-lexer: 1.7.0
      eslint-scope: 5.1.1
      events: 3.3.0
      glob-to-regexp: 0.4.1
      graceful-fs: 4.2.11
      json-parse-even-better-errors: 2.3.1
      loader-runner: 4.3.2
      mime-types: 2.1.35
      neo-async: 2.6.2
      schema-utils: 3.3.0
      tapable: 2.3.3
      terser-webpack-plugin: 5.6.1(webpack@5.97.1)
      watchpack: 2.5.1
      webpack-sources: 3.5.0
    transitivePeerDependencies:
      - '@minify-html/node'
      - '@swc/core'
      - '@swc/css'
      - '@swc/html'
      - clean-css
      - cssnano
      - csso
      - esbuild
      - html-minifier-terser
      - lightningcss
      - postcss
      - uglify-js

  whatwg-url@5.0.0:
    dependencies:
      tr46: 0.0.3
      webidl-conversions: 3.0.1

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  wrap-ansi@6.2.0:
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  wrap-ansi@7.0.0:
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  wrap-ansi@8.1.0:
    dependencies:
      ansi-styles: 6.2.3
      string-width: 5.1.2
      strip-ansi: 7.2.0

  ws@8.20.1: {}

  xmlhttprequest-ssl@2.1.2: {}

  xtend@4.0.2: {}

  yargs-parser@21.1.1: {}

  zrender@5.6.1:
    dependencies:
      tslib: 2.3.0

  zustand@4.5.7(@types/react@19.2.15)(react@19.2.6):
    dependencies:
      use-sync-external-store: 1.6.0(react@19.2.6)
    optionalDependencies:
      '@types/react': 19.2.15
      react: 19.2.6

  zustand@5.0.13(@types/react@19.2.15)(react@19.2.6)(use-sync-external-store@1.6.0(react@19.2.6)):
    optionalDependencies:
      '@types/react': 19.2.15
      react: 19.2.6
      use-sync-external-store: 1.6.0(react@19.2.6)
```

---

<a id="file-193"></a>

## 文件 193 : `pnpm-workspace.yaml`

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

---

<a id="file-194"></a>

## 文件 194 : `README.md`

```markdown
# AI Agent Studio

工业级 AI 多智能体协同平台 — **本地版**

一台电脑即可运行，基于 Docker + Node.js + pnpm 构建，支持 Cursor 一键开发。

## 功能特性

- **AI Agent Studio** — 创建、编辑、管理 AI Agent，支持 **8 种**工业 Agent 模板
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
```

---

<a id="file-195"></a>

## 文件 195 : `start.bat`

```bat
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
```

---

<a id="file-196"></a>

## 文件 196 : `tsconfig.base.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM"],
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

---

