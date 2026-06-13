import type { WorkflowEdge, WorkflowNode, WorkflowExecutionResult, WorkflowStepResult } from '@ai-studio/types';
import { DeepSeekClient } from '@ai-studio/agents';
import { generateId, sleep } from '@ai-studio/utils';

export interface WorkflowDefinition {
  id: string;
  name: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}

export type StepCallback = (step: WorkflowStepResult) => void;

/** LangGraph 风格的工作流执行引擎 */
export class WorkflowEngine {
  private deepseek: DeepSeekClient;

  constructor() {
    this.deepseek = new DeepSeekClient();
  }

  async execute(
    workflow: WorkflowDefinition,
    input: Record<string, unknown> = {},
    onStep?: StepCallback,
    options?: {
      ragSearch?: (knowledgeBaseId: string, query: string) => Promise<Array<{ content: string; score: number }>>;
    },
  ): Promise<WorkflowExecutionResult> {
    const executionId = generateId('exec');
    const steps: WorkflowStepResult[] = [];
    let context = { ...input };

    const startNode = workflow.nodes.find((n) => n.type === 'start');
    if (!startNode) {
      return { executionId, status: 'failed', steps, output: { error: 'No start node found' } };
    }

    const visited = new Set<string>();
    let currentNodeId: string | null = startNode.id;

    while (currentNodeId) {
      if (visited.has(currentNodeId)) break;

      const node = workflow.nodes.find((n) => n.id === currentNodeId);
      if (!node) break;

      if (node.type === 'parallel') {
        visited.add(currentNodeId);
        const forkStep = await this.executeNode(node, context, options);
        steps.push(forkStep);
        onStep?.(forkStep);

        const outEdges = workflow.edges.filter((e) => e.source === node.id);
        for (const edge of outEdges) {
          const branchNode = workflow.nodes.find((n) => n.id === edge.target);
          if (!branchNode || branchNode.type === 'merge') continue;
          if (visited.has(branchNode.id)) continue;
          visited.add(branchNode.id);
          const branchStep = await this.executeNode(branchNode, context, options);
          steps.push(branchStep);
          onStep?.(branchStep);
          if (branchStep.status === 'failed') {
            return { executionId, status: 'failed', steps, output: context };
          }
          if (branchStep.output) {
            context = { ...context, ...branchStep.output };
          }
        }

        currentNodeId = this.findMergeAfterParallel(node.id, workflow);
        continue;
      }

      visited.add(currentNodeId);

      const step = await this.executeNode(node, context, options);
      steps.push(step);
      onStep?.(step);

      if (step.status === 'failed') {
        return { executionId, status: 'failed', steps, output: context };
      }

      if (step.output) {
        context = { ...context, ...step.output };
      }

      if (node.type === 'end') break;

      currentNodeId = this.getNextNode(node.id, workflow.edges, context);
    }

    return { executionId, status: 'completed', steps, output: context };
  }

  private async executeNode(
    node: WorkflowNode,
    context: Record<string, unknown>,
    options?: {
      ragSearch?: (knowledgeBaseId: string, query: string) => Promise<Array<{ content: string; score: number }>>;
    },
  ): Promise<WorkflowStepResult> {
    const startTime = Date.now();
    const logs: string[] = [];

    try {
      logs.push(`[${node.type}] 开始执行节点: ${node.data.label || node.id}`);

      switch (node.type) {
        case 'start':
          return this.completeStep(node, context, logs, startTime);

        case 'end':
          logs.push('工作流执行完成');
          return this.completeStep(node, context, logs, startTime);

        case 'agent': {
          const agentName = (node.data.label as string) || 'Agent';
          logs.push(`调用 Agent: ${agentName}`);
          await sleep(500);

          const response = await this.deepseek.chat([
            { role: 'system', content: `你是 ${agentName}，请处理以下任务。` },
            { role: 'user', content: JSON.stringify(context) },
          ]);

          logs.push(`Agent 响应: ${response.content.slice(0, 100)}...`);
          return this.completeStep(node, { agentResponse: response.content, tokens: response.tokens }, logs, startTime);
        }

        case 'rag': {
          const kbId = (node.data.knowledgeBaseId as string) || 'industry-kb-main';
          const query = (context.query as string) || (node.data.query as string) || '工业制造生产计划';
          logs.push(`RAG 检索: KB=${kbId}, query=${query}`);
          await sleep(200);

          if (options?.ragSearch) {
            const results = await options.ragSearch(kbId, query);
            logs.push(`命中 ${results.length} 条知识片段`);
            return this.completeStep(
              node,
              {
                ragResults: results,
                ragContext: results.map((r) => r.content).join('\n\n'),
                knowledgeBaseId: kbId,
              },
              logs,
              startTime,
            );
          }

          return this.completeStep(node, { ragResults: [], ragContext: '' }, logs, startTime);
        }

        case 'http': {
          const url = (node.data.url as string) || 'http://127.0.0.1:3001/health';
          logs.push(`HTTP 请求: ${url}`);
          await sleep(200);
          return this.completeStep(node, { httpResponse: { status: 200 } }, logs, startTime);
        }

        case 'condition': {
          const condition = (node.data.condition as string) || 'true';
          logs.push(`条件判断: ${condition}`);
          const result = condition === 'approved' || condition === 'true';
          return this.completeStep(node, { conditionResult: result }, logs, startTime);
        }

        case 'parallel': {
          const label = (node.data.label as string) || '并行网关';
          logs.push(`并行网关启动: ${label}`);
          await sleep(150);
          return this.completeStep(node, { parallelGateway: label }, logs, startTime);
        }

        case 'merge': {
          const label = (node.data.label as string) || '合并网关';
          logs.push(`合并网关: ${label}`);
          await sleep(100);
          return this.completeStep(node, { mergeGateway: label }, logs, startTime);
        }

        case 'tool': {
          const toolName = (node.data.toolName as string) || 'unknown';
          logs.push(`调用 Tool: ${toolName}`);
          await sleep(400);
          return this.completeStep(node, { toolResult: `${toolName} 执行成功` }, logs, startTime);
        }

        default:
          logs.push(`未知节点类型: ${node.type}`);
          return this.completeStep(node, {}, logs, startTime);
      }
    } catch (error) {
      logs.push(`错误: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return {
        nodeId: node.id,
        nodeType: node.type,
        status: 'failed',
        duration: Date.now() - startTime,
        logs,
      };
    }
  }

  private completeStep(
    node: WorkflowNode,
    output: Record<string, unknown>,
    logs: string[],
    startTime: number,
  ): WorkflowStepResult {
    return {
      nodeId: node.id,
      nodeType: node.type,
      status: 'completed',
      output,
      duration: Date.now() - startTime,
      logs,
    };
  }

  private getNextNode(
    currentId: string,
    edges: WorkflowEdge[],
    context: Record<string, unknown>,
  ): string | null {
    const outEdges = edges.filter((e) => e.source === currentId);
    if (outEdges.length === 0) return null;
    if (outEdges.length === 1) return outEdges[0].target;

    if (context.conditionResult === false) {
      const falseEdge = outEdges.find((e) =>
        ['false', '否', '失控', '有冲突'].includes((e.label as string) || ''),
      );
      return falseEdge?.target || outEdges[1]?.target || null;
    }

    const trueEdge = outEdges.find((e) =>
      ['true', '是', '通过', '受控', '无冲突'].includes((e.label as string) || ''),
    );
    return trueEdge?.target || outEdges[0].target;
  }

  private findMergeAfterParallel(parallelId: string, workflow: WorkflowDefinition): string | null {
    const branchIds = workflow.edges.filter((e) => e.source === parallelId).map((e) => e.target);
    for (const branchId of branchIds) {
      const out = workflow.edges.find((e) => e.source === branchId);
      if (out) {
        const target = workflow.nodes.find((n) => n.id === out.target);
        if (target?.type === 'merge') return out.target;
      }
    }
    return this.getNextNode(parallelId, workflow.edges, {});
  }
}

export { WorkflowEngine as default };
