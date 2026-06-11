import type { AgentCollaborationEvent, ContractNetAssignment, ContractNetBid } from '@ai-studio/types';

export interface AgentConfig {
  id: string;
  name: string;
  systemPrompt: string;
  model: string;
  temperature: number;
  maxTokens: number;
  tools: string[];
  category: string;
}

export interface AgentRuntime {
  id: string;
  status: 'idle' | 'thinking' | 'executing' | 'waiting' | 'error';
  currentTask?: string;
  tokenUsage: number;
}

/** DeepSeek API 客户端 */
export class DeepSeekClient {
  private apiKey: string;
  private baseUrl: string;
  private defaultModel: string;

  constructor(apiKey?: string, baseUrl?: string, defaultModel?: string) {
    this.apiKey = apiKey || process.env.DEEPSEEK_API_KEY || '';
    this.baseUrl = baseUrl || process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com/v1';
    this.defaultModel = defaultModel || process.env.DEEPSEEK_MODEL || 'deepseek-chat';
  }

  async chat(
    messages: Array<{ role: string; content: string }>,
    options: { model?: string; temperature?: number; maxTokens?: number; stream?: boolean } = {},
  ): Promise<{ content: string; tokens: number }> {
    if (!this.apiKey) {
      return this.mockResponse(messages);
    }

    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: options.model || this.defaultModel,
          messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.maxTokens ?? 4096,
          stream: false,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        throw new Error(`DeepSeek API error: ${response.status} ${errorText}`);
      }

      const data = (await response.json()) as {
        choices: Array<{ message: { content: string } }>;
        usage: { total_tokens: number };
      };

      return {
        content: data.choices[0]?.message?.content || '',
        tokens: data.usage?.total_tokens || 0,
      };
    } catch {
      return this.mockResponse(messages);
    }
  }

  private mockResponse(messages: Array<{ role: string; content: string }>): { content: string; tokens: number } {
    const lastMessage = messages[messages.length - 1]?.content || '';
    return {
      content: `[DeepSeek 本地模拟] 已收到您的请求："${lastMessage.slice(0, 100)}"。\n\n作为工业 AI Agent，我已分析相关数据并生成处理方案。请在 .env 中配置 DEEPSEEK_API_KEY 以启用 DeepSeek 真实推理。`,
      tokens: 150,
    };
  }
}

/** @deprecated 使用 DeepSeekClient */
export const AIModelClient = DeepSeekClient;

/** 合同网协议 - Contract Net Protocol 任务分配 */
export class ContractNetProtocol {
  assignTask(
    taskId: string,
    taskDescription: string,
    agents: Array<{ id: string; name: string; category: string; tools: string[]; status: string }>,
  ): ContractNetAssignment {
    const bids: ContractNetBid[] = agents
      .filter((a) => a.status !== 'OFFLINE' && a.status !== 'ERROR')
      .map((agent) => {
        const capabilityScore = this.evaluateCapability(taskDescription, agent);
        const availabilityScore = agent.status === 'IDLE' ? 1.0 : agent.status === 'WAITING' ? 0.6 : 0.3;
        const bidScore = capabilityScore * 0.7 + availabilityScore * 0.3;

        return {
          agentId: agent.id,
          agentName: agent.name,
          taskId,
          bidScore,
          estimatedTime: Math.round((1 - bidScore) * 300 + 30),
          capabilities: agent.tools,
        };
      })
      .sort((a, b) => b.bidScore - a.bidScore);

    const winner = bids[0];

    return {
      taskId,
      assignedAgentId: winner?.agentId || '',
      assignedAgentName: winner?.agentName || '',
      bids,
      reason: winner
        ? `基于合同网协议，${winner.agentName} 以 ${(winner.bidScore * 100).toFixed(1)}% 匹配度中标`
        : '无可用 Agent',
    };
  }

  private evaluateCapability(task: string, agent: { category: string; tools: string[] }): number {
    const taskLower = task.toLowerCase();
    const categoryKeywords: Record<string, string[]> = {
      PLANNER: ['计划', 'mps', 'mrp', '排产', 'plan'],
      DATA_ANALYST: ['数据', '分析', '报表', 'chart', 'kpi'],
      SCHEDULER: ['排程', '调度', 'smt', '甘特', 'schedule'],
      DISPATCHER: ['分配', '调度', 'dispatch', 'allocate'],
      QUALITY: ['质量', '追溯', '缺陷', 'quality', 'trace'],
      SIMULATOR: ['仿真', '模拟', 'simulation', 'digital twin'],
      DECISION: ['决策', '协同', 'decision', 'consensus'],
    };

    const keywords = categoryKeywords[agent.category] || [];
    let score = 0.3;

    for (const kw of keywords) {
      if (taskLower.includes(kw)) score += 0.15;
    }

    return Math.min(score, 1.0);
  }
}

/** 多 Agent 协同管理器 */
export class AgentCollaborationManager {
  private agents: Map<string, AgentRuntime> = new Map();
  private eventHandlers: Array<(event: AgentCollaborationEvent) => void> = [];

  registerAgent(agentId: string): void {
    this.agents.set(agentId, {
      id: agentId,
      status: 'idle',
      tokenUsage: 0,
    });
  }

  onEvent(handler: (event: AgentCollaborationEvent) => void): void {
    this.eventHandlers.push(handler);
  }

  emit(event: AgentCollaborationEvent): void {
    for (const handler of this.eventHandlers) {
      handler(event);
    }
  }

  updateStatus(agentId: string, status: AgentRuntime['status'], agentName: string): void {
    const runtime = this.agents.get(agentId);
    if (runtime) {
      runtime.status = status;
    }

    this.emit({
      type: 'status_sync',
      agentId,
      agentName,
      data: { status },
      timestamp: new Date().toISOString(),
    });
  }

  getAgentStatuses(): AgentRuntime[] {
    return Array.from(this.agents.values());
  }
}

/** MCP Tool 注册表 */
export const MCP_TOOLS: Record<string, { name: string; description: string; parameters: Record<string, unknown> }> = {
  mps_calculator: {
    name: 'MPS 计算器',
    description: '计算主生产计划',
    parameters: { period: 'string', demand: 'number' },
  },
  mrp_engine: {
    name: 'MRP 引擎',
    description: '运行物料需求计划',
    parameters: { bomId: 'string', quantity: 'number' },
  },
  smt_scheduler: {
    name: 'SMT 排程器',
    description: '生成 SMT 产线排程',
    parameters: { lines: 'array', orders: 'array' },
  },
  traceability: {
    name: '质量追溯',
    description: '追溯产品质量数据',
    parameters: { serialNumber: 'string' },
  },
  sql_query: {
    name: 'SQL 查询',
    description: '执行数据库查询',
    parameters: { query: 'string' },
  },
  contract_net: {
    name: '合同网协议',
    description: '执行合同网任务分配',
    parameters: { taskId: 'string', agents: 'array' },
  },
};

export { DeepSeekClient as default };
