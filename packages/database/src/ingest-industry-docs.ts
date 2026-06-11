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
      linkedAgentCategories: ['PLANNER', 'DATA_ANALYST', 'SCHEDULER', 'DISPATCHER', 'QUALITY', 'SIMULATOR', 'DECISION'],
    },
    create: {
      id: INDUSTRY_KB_ID,
      name: '工业行业知识库',
      description: `AI Agent Studio 内置行业 RAG 知识库，含 ${INDUSTRY_DOCUMENTS.length} 份无人机/SMT/新能源汽车/多智能体文档，与工业场景和 Agent 模板关联。`,
      industry: 'INDUSTRIAL',
      isSystem: true,
      linkedAgentCategories: ['PLANNER', 'DATA_ANALYST', 'SCHEDULER', 'DISPATCHER', 'QUALITY', 'SIMULATOR', 'DECISION'],
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
