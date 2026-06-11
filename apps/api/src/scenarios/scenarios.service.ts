import { Injectable, NotFoundException } from '@nestjs/common';
import { prisma } from '@ai-studio/database';

@Injectable()
export class ScenariosService {
  async findAll() {
    return prisma.industrialScenario.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const scenario = await prisma.industrialScenario.findUnique({ where: { id } });
    if (!scenario) throw new NotFoundException('场景不存在');
    return scenario;
  }

  async findByType(type: string) {
    return prisma.industrialScenario.findMany({
      where: { type: type as never },
    });
  }

  async updateData(id: string, data: Record<string, unknown>) {
    await this.findOne(id);
    return prisma.industrialScenario.update({
      where: { id },
      data: { data: data as never },
    });
  }
}
