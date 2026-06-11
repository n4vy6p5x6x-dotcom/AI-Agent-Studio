import { Injectable } from '@nestjs/common';
import { prisma } from '@ai-studio/database';

@Injectable()
export class DashboardService {
  async getMetrics() {
    const [
      totalAgents,
      activeAgents,
      totalTasks,
      completedTasks,
      knowledgeBases,
      documents,
      recentLogs,
      agentStatuses,
    ] = await Promise.all([
      prisma.agent.count(),
      prisma.agent.count({ where: { status: { in: ['THINKING', 'EXECUTING'] } } }),
      prisma.task.count(),
      prisma.task.count({ where: { status: 'COMPLETED' } }),
      prisma.knowledgeBase.count(),
      prisma.document.count(),
      prisma.log.findMany({ take: 20, orderBy: { createdAt: 'desc' } }),
      prisma.agent.findMany({
        select: { id: true, name: true, status: true, category: true },
      }),
    ]);

    return {
      totalAgents,
      activeAgents,
      totalTasks,
      completedTasks,
      totalTokens: 125000,
      apiCalls: 3420,
      knowledgeBases,
      documents,
      recentLogs,
      agentStatuses,
    };
  }

  async getChartData() {
    return {
      tokenUsage: [
        { time: '00:00', tokens: 1200 },
        { time: '04:00', tokens: 800 },
        { time: '08:00', tokens: 3500 },
        { time: '12:00', tokens: 5200 },
        { time: '16:00', tokens: 4800 },
        { time: '20:00', tokens: 2100 },
      ],
      apiCalls: [
        { time: '00:00', calls: 45 },
        { time: '04:00', calls: 20 },
        { time: '08:00', calls: 120 },
        { time: '12:00', calls: 180 },
        { time: '16:00', calls: 150 },
        { time: '20:00', calls: 80 },
      ],
      taskCompletion: [
        { date: 'Mon', completed: 12, failed: 1 },
        { date: 'Tue', completed: 18, failed: 2 },
        { date: 'Wed', completed: 15, failed: 0 },
        { date: 'Thu', completed: 22, failed: 1 },
        { date: 'Fri', completed: 20, failed: 3 },
        { date: 'Sat', completed: 8, failed: 0 },
        { date: 'Sun', completed: 5, failed: 0 },
      ],
      agentActivity: [
        { name: 'AI 计划员', tasks: 45, tokens: 32000 },
        { name: 'AI 数据员', tasks: 38, tokens: 28000 },
        { name: 'AI 排程员', tasks: 52, tokens: 35000 },
        { name: 'AI 调度员', tasks: 30, tokens: 15000 },
        { name: 'AI 质量员', tasks: 25, tokens: 18000 },
      ],
    };
  }
}
