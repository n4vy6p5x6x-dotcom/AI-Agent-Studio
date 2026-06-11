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
