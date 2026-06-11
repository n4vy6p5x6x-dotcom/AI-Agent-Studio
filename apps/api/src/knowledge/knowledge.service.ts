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

      { category: 'SCHEDULER', name: 'AI 排程员', industries: ['SMT', 'UAV'] },

      { category: 'QUALITY', name: 'AI 质量员', industries: ['UAV', 'SMT', 'EV'] },

      { category: 'DATA_ANALYST', name: 'AI 数据员', industries: ['PLATFORM'] },

      { category: 'DISPATCHER', name: 'AI 调度员', industries: ['PLATFORM'] },

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


