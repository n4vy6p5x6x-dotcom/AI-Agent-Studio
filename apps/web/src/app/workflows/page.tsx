'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow, Background, Controls, MiniMap, addEdge,
  useNodesState, useEdgesState, type Connection, type Node, type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { Play, Save, Plus } from 'lucide-react';
import { api } from '@/lib/api';

const nodeTypes = ['start', 'end', 'agent', 'http', 'condition', 'rag', 'tool', 'parallel', 'merge'] as const;

const nodeLabels: Record<string, string> = {
  agent: 'AI Agent',
  rag: 'RAG 检索',
  condition: '条件判断',
  http: 'HTTP 请求',
  tool: 'Tool 调用',
  parallel: '并行网关',
  merge: '合并网关',
};

const defaultNodes: Node[] = [
  { id: 'start', type: 'input', position: { x: 100, y: 200 }, data: { label: '开始' }, style: { background: '#00d4ff20', border: '1px solid #00d4ff', borderRadius: 8, color: '#fff', padding: 10 } },
  { id: 'agent-1', position: { x: 350, y: 200 }, data: { label: 'AI Agent' }, style: { background: '#7c3aed20', border: '1px solid #7c3aed', borderRadius: 8, color: '#fff', padding: 10 } },
  { id: 'end', type: 'output', position: { x: 600, y: 200 }, data: { label: '结束' }, style: { background: '#00ff8820', border: '1px solid #00ff88', borderRadius: 8, color: '#fff', padding: 10 } },
];

const defaultEdges: Edge[] = [
  { id: 'e1', source: 'start', target: 'agent-1', animated: true, style: { stroke: '#00d4ff' } },
  { id: 'e2', source: 'agent-1', target: 'end', animated: true, style: { stroke: '#00d4ff' } },
];

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState<Array<Record<string, unknown>>>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
  const [executionResult, setExecutionResult] = useState<Record<string, unknown> | null>(null);
  const [executing, setExecuting] = useState(false);

  useEffect(() => {
    api.getWorkflows().then((wfs) => {
      setWorkflows(wfs);
      if (wfs.length > 0) {
        loadWorkflow(wfs[0].id as string);
      }
    }).catch(console.error);
  }, []);

  const loadWorkflow = async (id: string) => {
    setSelectedId(id);
    const wf = await api.getWorkflow(id);
    if (wf.nodes && (wf.nodes as Node[]).length > 0) {
      setNodes(wf.nodes as Node[]);
      setEdges(wf.edges as Edge[]);
    }
  };

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#00d4ff' } }, eds)),
    [setEdges],
  );

  const handleSave = async () => {
    if (!selectedId) return;
    await api.updateWorkflow(selectedId, { nodes, edges });
  };

  const handleExecute = async () => {
    if (!selectedId) return;
    setExecuting(true);
    setExecutionResult(null);
    try {
      const result = await api.executeWorkflow(selectedId);
      setExecutionResult(result);
    } catch (err) {
      console.error(err);
    } finally {
      setExecuting(false);
    }
  };

  const addNode = (type: string) => {
    const id = `${type}-${Date.now()}`;
    setNodes((nds) => [
      ...nds,
      {
        id,
        position: { x: 250 + Math.random() * 200, y: 100 + Math.random() * 200 },
        data: { label: nodeLabels[type] || type },
        style: {
          background: type === 'parallel' ? '#06b6d420' : type === 'merge' ? '#06b6d420' : '#ffffff10',
          border: type === 'parallel' ? '2px solid #06b6d4' : type === 'merge' ? '2px dashed #06b6d4' : '1px solid #ffffff30',
          borderRadius: 8,
          color: '#fff',
          padding: 10,
        },
      },
    ]);
  };

  return (
    <AppLayout>
      <Header title="工作流设计" subtitle="可视化拖拽编排 Agent 工作流" />
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4">
          <select
            value={selectedId || ''}
            onChange={(e) => loadWorkflow(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
          >
            {workflows.map((wf) => (
              <option key={wf.id as string} value={wf.id as string}>{wf.name as string}</option>
            ))}
          </select>
          <div className="flex gap-2">
            {nodeTypes.filter(t => !['start', 'end'].includes(t)).map((type) => (
              <button
                key={type}
                onClick={() => addNode(type)}
                className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg hover:bg-white/10"
              >
                <Plus className="w-3 h-3 inline mr-1" />{type}
              </button>
            ))}
          </div>
          <div className="ml-auto flex gap-2">
            <button onClick={handleSave} className="flex items-center gap-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10">
              <Save className="w-4 h-4" /> 保存
            </button>
            <button
              onClick={handleExecute}
              disabled={executing}
              className="flex items-center gap-1 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg text-sm text-cyber-blue hover:bg-cyber-blue/20 disabled:opacity-50"
            >
              <Play className="w-4 h-4" /> {executing ? '执行中...' : '运行'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <GlassCard className="lg:col-span-3 h-[600px] overflow-hidden">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
              className="bg-transparent"
            >
              <Background color="#ffffff10" gap={20} />
              <Controls className="!bg-card !border-white/10 !rounded-lg" />
              <MiniMap className="!bg-card !border-white/10 !rounded-lg" nodeColor="#00d4ff" />
            </ReactFlow>
          </GlassCard>

          <GlassCard className="p-4 h-[600px] overflow-y-auto">
            <h3 className="font-semibold mb-3 hud-text">执行日志</h3>
            {executionResult ? (
              <div className="space-y-2 font-mono text-xs">
                <p className="text-cyber-green">状态: {executionResult.status as string}</p>
                <p>执行 ID: {executionResult.executionId as string}</p>
                {((executionResult.steps as Array<Record<string, unknown>>) || []).map((step, i) => (
                  <div key={i} className="p-2 rounded bg-white/5 border border-white/10">
                    <p className="text-cyber-blue">[{step.nodeType as string}] {step.nodeId as string}</p>
                    <p className="text-muted-foreground">{step.status as string} - {step.duration as number}ms</p>
                    {((step.logs as string[]) || []).map((log, j) => (
                      <p key={j} className="text-foreground/60 pl-2">{log}</p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">点击"运行"执行工作流</p>
            )}
          </GlassCard>
        </div>
      </div>
    </AppLayout>
  );
}
