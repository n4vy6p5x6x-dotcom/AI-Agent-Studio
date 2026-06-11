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
