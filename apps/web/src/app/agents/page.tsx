'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { AgentCard } from '@/components/ui/agent-card';
import { GlassCard } from '@/components/ui/glass-card';
import { Plus, Search } from 'lucide-react';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function AgentsPage() {
  const [agents, setAgents] = useState<Array<Record<string, unknown>>>([]);
  const [filter, setFilter] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [form, setForm] = useState({ name: '', description: '', systemPrompt: '', category: 'CUSTOM', model: 'deepseek-chat' });

  useEffect(() => {
    api.getAgents().then(setAgents).catch(console.error);
  }, []);

  const filtered = agents.filter((a) =>
    (a.name as string).toLowerCase().includes(filter.toLowerCase()),
  );

  const handleCreate = async () => {
    try {
      const agent = await api.createAgent(form);
      setAgents([agent, ...agents]);
      setShowCreate(false);
      setForm({ name: '', description: '', systemPrompt: '', category: 'CUSTOM', model: 'deepseek-chat' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppLayout>
      <Header title="Agent Studio" subtitle="创建、编辑和管理 AI Agent" />
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索 Agent..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm w-64 focus:outline-none focus:border-cyber-blue/50"
            />
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-2 px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-lg text-cyber-blue hover:bg-cyber-blue/20 transition-colors"
          >
            <Plus className="w-4 h-4" /> 创建 Agent
          </button>
        </div>

        {showCreate && (
          <GlassCard className="p-6 space-y-4">
            <h3 className="font-semibold">创建自定义 Agent</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="Agent 名称"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
              />
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none"
            >
              <option value="CUSTOM">自定义</option>
              <option value="PLANNER">计划员</option>
              <option value="DATA_ANALYST">数据员</option>
              <option value="SCHEDULER">排程员</option>
              <option value="QUALITY">质量员</option>
            </select>
            <select
              value={form.model}
              onChange={(e) => setForm({ ...form, model: e.target.value })}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none"
            >
              <option value="deepseek-chat">deepseek-chat</option>
              <option value="deepseek-reasoner">deepseek-reasoner</option>
            </select>
            </div>
            <input
              placeholder="描述"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
            />
            <textarea
              placeholder="System Prompt"
              value={form.systemPrompt}
              onChange={(e) => setForm({ ...form, systemPrompt: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
            />
            <div className="flex gap-2">
              <button onClick={handleCreate} className="px-4 py-2 bg-cyber-blue rounded-lg text-sm font-medium">创建</button>
              <button onClick={() => setShowCreate(false)} className="px-4 py-2 bg-white/5 rounded-lg text-sm">取消</button>
            </div>
          </GlassCard>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((agent) => (
            <Link key={agent.id as string} href={`/agents/${agent.id}`}>
              <AgentCard agent={agent as never} />
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
