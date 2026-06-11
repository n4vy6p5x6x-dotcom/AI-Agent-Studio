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
