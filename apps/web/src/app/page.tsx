'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { AgentCard } from '@/components/ui/agent-card';
import { LogStream } from '@/components/ui/log-stream';
import { Bot, GitBranch, BookOpen, Factory, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [metrics, setMetrics] = useState<Record<string, unknown>>({});
  const [agents, setAgents] = useState<Array<Record<string, unknown>>>([]);
  const [logs, setLogs] = useState<Array<{ id: string; level: string; message: string; createdAt: string; agent?: { name: string } }>>([]);

  useEffect(() => {
    Promise.all([
      api.getDashboardMetrics(),
      api.getAgents(),
      api.getRecentLogs(20),
    ]).then(([m, a, l]) => {
      setMetrics(m);
      setAgents(a.slice(0, 6) as Array<Record<string, unknown>>);
      setLogs(l as typeof logs);
    }).catch(console.error);
  }, []);

  const statCards = [
    { label: 'Agent 总数', value: metrics.totalAgents || 0, icon: Bot, color: 'text-cyber-blue' },
    { label: '活跃 Agent', value: metrics.activeAgents || 0, icon: Bot, color: 'text-cyber-green' },
    { label: '任务完成', value: `${metrics.completedTasks || 0}/${metrics.totalTasks || 0}`, icon: GitBranch, color: 'text-cyber-purple' },
    { label: '知识库文档', value: metrics.documents || 0, icon: BookOpen, color: 'text-cyber-orange' },
  ];

  return (
    <AppLayout>
      <Header title="控制台" subtitle="AI Agent Studio 工业级多智能体协同平台" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <GlassCard className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{String(stat.value)}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color} opacity-50`} />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Agent 概览</h3>
              <Link href="/agents" className="text-sm text-cyber-blue flex items-center gap-1 hover:underline">
                查看全部 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map((agent) => (
                <AgentCard
                  key={agent.id as string}
                  agent={agent as never}
                  onClick={() => window.location.href = `/agents/${agent.id}`}
                />
              ))}
            </div>
          </div>

          <LogStream logs={logs} />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">快速入口</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { href: '/workflows', label: '工作流设计', desc: '可视化拖拽编排', icon: GitBranch },
              { href: '/collaboration', label: '多Agent协同', desc: '合同网协议调度', icon: Bot },
              { href: '/scenarios', label: '工业场景', desc: '三大制造场景', icon: Factory },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <GlassCard hover className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyber-blue/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
