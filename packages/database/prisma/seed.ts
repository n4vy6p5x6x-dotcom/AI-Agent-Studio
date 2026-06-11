import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
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

  const templateAgents = [
    {
      name: 'AI 计划员',
      description: '负责 MPS/MRP 生产计划制定与优化',
      systemPrompt: '你是一位资深的生产计划专家，精通 MPS（主生产计划）和 MRP（物料需求计划）。你的职责是分析订单需求、产能约束和库存状况，制定最优生产计划。',
      category: 'PLANNER' as const,
      tools: ['mps_calculator', 'mrp_engine', 'capacity_analysis'],
    },
    {
      name: 'AI 数据员',
      description: '负责工业数据采集、分析与可视化',
      systemPrompt: '你是一位工业数据分析专家，擅长处理制造数据、生成分析报告和数据洞察。你可以连接各类数据源，执行 SQL 查询，生成图表和 KPI 报告。',
      category: 'DATA_ANALYST' as const,
      tools: ['sql_query', 'chart_generator', 'kpi_calculator'],
    },
    {
      name: 'AI 排程员',
      description: '负责 SMT 产线排程与换线优化',
      systemPrompt: '你是一位 SMT 排程专家，精通贴片产线调度、换线优化和甘特图排程。你需要考虑设备产能、换线时间和订单优先级，生成最优排程方案。',
      category: 'SCHEDULER' as const,
      tools: ['smt_scheduler', 'gantt_generator', 'changeover_optimizer'],
    },
    {
      name: 'AI 调度员',
      description: '负责多 Agent 任务分配与资源调度',
      systemPrompt: '你是一位智能调度专家，使用合同网协议（Contract Net Protocol）进行任务分配。你需要评估各 Agent 的能力和资源状态，将任务分配给最合适的 Agent。',
      category: 'DISPATCHER' as const,
      tools: ['task_allocator', 'resource_monitor', 'contract_net'],
    },
    {
      name: 'AI 质量员',
      description: '负责质量追溯与缺陷分析',
      systemPrompt: '你是一位质量管理专家，精通质量追溯、SPC 统计过程控制和缺陷根因分析。你可以追踪产品从原材料到成品的全流程质量数据。',
      category: 'QUALITY' as const,
      tools: ['traceability', 'spc_analysis', 'defect_analyzer'],
    },
    {
      name: 'AI 仿真员',
      description: '负责工业场景仿真与数字孪生',
      systemPrompt: '你是一位工业仿真专家，可以构建和运行制造场景的数字孪生模型，进行 What-If 分析和产能仿真。',
      category: 'SIMULATOR' as const,
      tools: ['digital_twin', 'what_if_analysis', 'capacity_simulation'],
    },
    {
      name: '协同决策员',
      description: '负责多 Agent 协同决策与方案整合',
      systemPrompt: '你是一位协同决策专家，负责整合多个 Agent 的分析结果，进行冲突消解和方案优化，输出最终决策建议。',
      category: 'DECISION' as const,
      tools: ['conflict_resolver', 'decision_matrix', 'consensus_builder'],
    },
  ];

  for (const agent of templateAgents) {
    await prisma.agent.upsert({
      where: { id: `template-${agent.category.toLowerCase()}` },
      update: {},
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
  console.log(`   Agents: ${templateAgents.length} templates`);
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
