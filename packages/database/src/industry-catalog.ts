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
  { title: '无人机精益生产线布局指南', category: '精益生产', tags: ['精益', '线体', '布局'], agents: ['PLANNER', 'SIMULATOR'] },
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
  { title: '产线 AGV 配送路径与节拍匹配', category: '物流仓储', tags: ['AGV', '配送', '节拍'], agents: ['SCHEDULER', 'DISPATCHER'] },
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
  { title: '总装产线节拍优化与工位平衡', category: '排程优化', tags: ['节拍', '工位', '平衡'], agents: ['SCHEDULER', 'PLANNER'] },
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
