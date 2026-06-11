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
