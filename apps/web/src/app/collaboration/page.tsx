'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow, Background, Controls, addEdge,
  useNodesState, useEdgesState, type Connection, type Node, type Edge, MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion } from 'framer-motion';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { StatusBadge } from '@/components/ui/status-badge';
import { LogStream } from '@/components/ui/log-stream';
import { Zap, Send } from 'lucide-react';
import { api } from '@/lib/api';

export default function CollaborationPage() {
  const [agents, setAgents] = useState<Array<Record<string, unknown>>>([]);
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [taskInput, setTaskInput] = useState('生成 Q2 无人机 MPS 生产计划');
  const [assignment, setAssignment] = useState<Record<string, unknown> | null>(null);
  const [logs, setLogs] = useState<Array<{ id: string; level: string; message: string; createdAt: string }>>([]);
  const [tokenUsage] = useState(12500);

  useEffect(() => {
    api.getAgents().then((agentList) => {
      const templates = agentList.filter((a) => a.isTemplate);
      setAgents(templates);

      const flowNodes: Node[] = templates.map((agent, i) => {
        const angle = (i / templates.length) * 2 * Math.PI;
        const radius = 250;
        return {
          id: agent.id as string,
          position: {
            x: 400 + Math.cos(angle) * radius,
            y: 300 + Math.sin(angle) * radius,
          },
          data: {
            label: (
              <div className="text-center">
                <p className="font-semibold text-xs">{agent.name as string}</p>
                <StatusBadge status={agent.status as string} showLabel={false} />
              </div>
            ),
          },
          style: {
            background: agent.status === 'EXECUTING' ? '#00d4ff30' : '#ffffff10',
            border: agent.status === 'EXECUTING' ? '2px solid #00d4ff' : '1px solid #ffffff30',
            borderRadius: 12,
            color: '#fff',
            padding: 12,
            minWidth: 120,
            boxShadow: agent.status === 'EXECUTING' ? '0 0 20px #00d4ff40' : 'none',
          },
        };
      });

      flowNodes.push({
        id: 'dispatcher',
        position: { x: 400, y: 300 },
        data: { label: <div className="text-center"><Zap className="w-5 h-5 mx-auto text-cyber-blue" /><p className="text-xs mt-1">调度中心</p></div> },
        style: { background: '#7c3aed30', border: '2px solid #7c3aed', borderRadius: 16, color: '#fff', padding: 16, minWidth: 100 },
      });

      const flowEdges: Edge[] = templates.map((agent) => ({
        id: `e-${agent.id}`,
        source: 'dispatcher',
        target: agent.id as string,
        animated: agent.status === 'EXECUTING' || agent.status === 'THINKING',
        style: { stroke: agent.status === 'EXECUTING' ? '#00d4ff' : '#ffffff30' },
        markerEnd: { type: MarkerType.ArrowClosed, color: '#00d4ff' },
      }));

      setNodes(flowNodes);
      setEdges(flowEdges);
    }).catch(console.error);
  }, [setNodes, setEdges]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges],
  );

  const handleAssign = async () => {
    try {
      const result = await api.assignTask(taskInput);
      setAssignment(result);
      setLogs([
        { id: '1', level: 'INFO', message: `合同网协议启动: ${taskInput}`, createdAt: new Date().toISOString() },
        { id: '2', level: 'INFO', message: `收到 ${((result.bids as unknown[]) || []).length} 个 Agent 竞标`, createdAt: new Date().toISOString() },
        { id: '3', level: 'INFO', message: `任务分配给: ${result.assignedAgentName}`, createdAt: new Date().toISOString() },
        { id: '4', level: 'INFO', message: result.reason as string, createdAt: new Date().toISOString() },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppLayout>
      <Header title="多 Agent 协同" subtitle="合同网协议 · 自动任务分配 · Agent 状态同步" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground">在线 Agent</p>
            <p className="text-2xl font-bold text-cyber-green">{agents.length}</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground">Token 消耗</p>
            <p className="text-2xl font-bold text-cyber-blue">{tokenUsage.toLocaleString()}</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground">Tool 调用</p>
            <p className="text-2xl font-bold text-cyber-purple">47</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground">协同任务</p>
            <p className="text-2xl font-bold text-cyber-orange">12</p>
          </GlassCard>
        </div>

        <div className="flex gap-2">
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
            placeholder="输入任务描述..."
          />
          <button
            onClick={handleAssign}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium hover:opacity-90"
          >
            <Send className="w-4 h-4" /> 合同网分配
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <GlassCard className="lg:col-span-2 h-[500px]">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
            >
              <Background color="#ffffff08" gap={30} />
              <Controls className="!bg-card !border-white/10" />
            </ReactFlow>
          </GlassCard>

          <div className="space-y-4">
            {assignment && (
              <GlassCard className="p-4">
                <h3 className="font-semibold mb-2 hud-text">分配结果</h3>
                <p className="text-sm text-cyber-green mb-2">✓ {assignment.assignedAgentName as string}</p>
                <p className="text-xs text-muted-foreground">{assignment.reason as string}</p>
                <div className="mt-3 space-y-1">
                  {((assignment.bids as Array<Record<string, unknown>>) || []).map((bid, i) => (
                    <div key={i} className="flex justify-between text-xs p-1.5 rounded bg-white/5">
                      <span>{bid.agentName as string}</span>
                      <span className="text-cyber-blue">{((bid.bidScore as number) * 100).toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}
            <LogStream logs={logs} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
