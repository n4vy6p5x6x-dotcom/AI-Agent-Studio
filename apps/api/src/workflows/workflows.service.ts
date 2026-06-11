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
