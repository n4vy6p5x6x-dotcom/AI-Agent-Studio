'use client';

import { useEffect, useState, use } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { StatusBadge } from '@/components/ui/status-badge';
import { AgentThinkingAnimation } from '@/components/ui/agent-card';
import { Send, ArrowLeft } from 'lucide-react';
import { api } from '@/lib/api';
import Link from 'next/link';

export default function AgentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [agent, setAgent] = useState<Record<string, unknown> | null>(null);
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.getAgent(id).then(setAgent).catch(console.error);
  }, [id]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await api.chat(id, newMessages);
      setMessages([...newMessages, { role: 'assistant', content: res.content }]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!agent) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center h-96">
          <div className="w-8 h-8 border-2 border-cyber-blue border-t-transparent rounded-full animate-spin" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <Header title={agent.name as string} subtitle={agent.description as string} />
      <div className="p-6">
        <Link href="/agents" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="w-4 h-4" /> 返回 Agent 列表
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard className="p-4 space-y-4">
            <h3 className="font-semibold">Agent 配置</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">状态</span>
                <StatusBadge status={agent.status as string} />
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">模型</span>
                <span className="font-mono text-cyber-blue">{agent.model as string}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">温度</span>
                <span>{agent.temperature as number}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Max Tokens</span>
                <span>{agent.maxTokens as number}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Tools</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {((agent.tools as string[]) || []).map((tool) => (
                    <span key={tool} className="text-[10px] px-2 py-0.5 rounded bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <span className="text-muted-foreground text-sm">System Prompt</span>
              <pre className="mt-1 p-3 rounded-lg bg-white/5 text-xs whitespace-pre-wrap max-h-40 overflow-y-auto">
                {agent.systemPrompt as string}
              </pre>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-2 flex flex-col h-[600px]">
            <div className="px-4 py-3 border-b border-white/10">
              <span className="hud-text">Agent 对话</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground py-12">
                  开始与 {agent.name as string} 对话
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                    msg.role === 'user'
                      ? 'bg-cyber-blue/10 border border-cyber-blue/20'
                      : 'bg-white/5 border border-white/10'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && <AgentThinkingAnimation />}
            </div>
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="输入消息..."
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="px-4 py-2 bg-cyber-blue rounded-lg hover:opacity-90 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </AppLayout>
  );
}
