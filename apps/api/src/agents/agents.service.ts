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
