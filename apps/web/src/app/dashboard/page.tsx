'use client';

import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { StatusBadge } from '@/components/ui/status-badge';
import { LogStream } from '@/components/ui/log-stream';
import { api } from '@/lib/api';

export default function DashboardPage() {
  const [metrics, setMetrics] = useState<Record<string, unknown>>({});
  const [charts, setCharts] = useState<Record<string, unknown>>({});

  useEffect(() => {
    Promise.all([api.getDashboardMetrics(), api.getDashboardCharts()])
      .then(([m, c]) => { setMetrics(m); setCharts(c); })
      .catch(console.error);
  }, []);

  const tokenData = (charts.tokenUsage || []) as Array<{ time: string; tokens: number }>;
  const apiData = (charts.apiCalls || []) as Array<{ time: string; calls: number }>;
  const taskData = (charts.taskCompletion || []) as Array<{ date: string; completed: number; failed: number }>;
  const agentData = (charts.agentActivity || []) as Array<{ name: string; tasks: number; tokens: number }>;
  const agentStatuses = (metrics.agentStatuses || []) as Array<Record<string, unknown>>;
  const recentLogs = (metrics.recentLogs || []) as Array<{ id: string; level: string; message: string; createdAt: string }>;

  const chartBase = {
    backgroundColor: 'transparent',
    textStyle: { color: '#888' },
    grid: { left: 50, right: 20, top: 30, bottom: 30 },
  };

  const tokenOption = {
    ...chartBase,
    title: { text: 'Token 消耗趋势', textStyle: { color: '#fff', fontSize: 14 } },
    xAxis: { type: 'category', data: tokenData.map((d) => d.time), axisLabel: { color: '#888' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#ffffff10' } } },
    series: [{ type: 'line', data: tokenData.map((d) => d.tokens), smooth: true, areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#00d4ff40' }, { offset: 1, color: '#00d4ff05' }] } }, lineStyle: { color: '#00d4ff' }, itemStyle: { color: '#00d4ff' } }],
  };

  const apiOption = {
    ...chartBase,
    title: { text: 'API 调用量', textStyle: { color: '#fff', fontSize: 14 } },
    xAxis: { type: 'category', data: apiData.map((d) => d.time), axisLabel: { color: '#888' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#ffffff10' } } },
    series: [{ type: 'bar', data: apiData.map((d) => d.calls), itemStyle: { color: '#7c3aed', borderRadius: [4, 4, 0, 0] } }],
  };

  const taskOption = {
    ...chartBase,
    title: { text: '任务完成情况', textStyle: { color: '#fff', fontSize: 14 } },
    legend: { data: ['完成', '失败'], textStyle: { color: '#888' }, top: 0, right: 0 },
    xAxis: { type: 'category', data: taskData.map((d) => d.date), axisLabel: { color: '#888' } },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: '#ffffff10' } } },
    series: [
      { name: '完成', type: 'bar', stack: 'total', data: taskData.map((d) => d.completed), itemStyle: { color: '#00ff88' } },
      { name: '失败', type: 'bar', stack: 'total', data: taskData.map((d) => d.failed), itemStyle: { color: '#ff4444' } },
    ],
  };

  const agentOption = {
    ...chartBase,
    title: { text: 'Agent 活跃度', textStyle: { color: '#fff', fontSize: 14 } },
    radar: {
      indicator: agentData.map((d) => ({ name: d.name, max: 60 })),
      axisName: { color: '#888', fontSize: 10 },
      splitArea: { areaStyle: { color: ['#ffffff05', '#ffffff02'] } },
      splitLine: { lineStyle: { color: '#ffffff10' } },
    },
    series: [{
      type: 'radar',
      data: [{
        value: agentData.map((d) => d.tasks),
        areaStyle: { color: '#00d4ff20' },
        lineStyle: { color: '#00d4ff' },
        itemStyle: { color: '#00d4ff' },
      }],
    }],
  };

  return (
    <AppLayout>
      <Header title="AI 数据驾驶舱" subtitle="实时监控 · Agent 状态 · Token 消耗 · API 调用" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { label: 'Agent 总数', value: metrics.totalAgents, color: 'text-cyber-blue' },
            { label: '活跃 Agent', value: metrics.activeAgents, color: 'text-cyber-green' },
            { label: '任务完成', value: metrics.completedTasks, color: 'text-cyber-purple' },
            { label: 'Token 消耗', value: (metrics.totalTokens as number)?.toLocaleString(), color: 'text-cyber-orange' },
            { label: 'API 调用', value: metrics.apiCalls, color: 'text-cyber-pink' },
            { label: '知识库', value: metrics.knowledgeBases, color: 'text-cyan-400' },
          ].map((stat) => (
            <GlassCard key={stat.label} glow className="p-4 text-center">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{String(stat.value || 0)}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <GlassCard className="p-4"><ReactECharts option={tokenOption} style={{ height: 280 }} /></GlassCard>
          <GlassCard className="p-4"><ReactECharts option={apiOption} style={{ height: 280 }} /></GlassCard>
          <GlassCard className="p-4"><ReactECharts option={taskOption} style={{ height: 280 }} /></GlassCard>
          <GlassCard className="p-4"><ReactECharts option={agentOption} style={{ height: 280 }} /></GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <GlassCard className="p-4">
            <h3 className="font-semibold mb-3 hud-text">Agent 状态</h3>
            <div className="space-y-2">
              {agentStatuses.map((agent) => (
                <div key={agent.id as string} className="flex items-center justify-between p-2 rounded bg-white/5">
                  <span className="text-sm">{agent.name as string}</span>
                  <StatusBadge status={agent.status as string} />
                </div>
              ))}
            </div>
          </GlassCard>
          <LogStream logs={recentLogs} />
        </div>
      </div>
    </AppLayout>
  );
}
