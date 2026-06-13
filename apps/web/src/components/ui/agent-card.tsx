'use client';

import { motion } from 'framer-motion';
import { Bot, Brain, LayoutGrid, Wrench } from 'lucide-react';
import { GlassCard } from './glass-card';
import { StatusBadge } from './status-badge';
import { cn } from '@/lib/utils';

const categoryIcons: Record<string, typeof Bot> = {
  PLANNER: Brain,
  DATA_ANALYST: Bot,
  SCHEDULER: Bot,
  DISPATCHER: Bot,
  DESIGNER: LayoutGrid,
  QUALITY: Bot,
  SIMULATOR: Bot,
  DECISION: Brain,
  CUSTOM: Wrench,
};

const categoryColors: Record<string, string> = {
  PLANNER: 'from-blue-500 to-cyan-500',
  DATA_ANALYST: 'from-purple-500 to-pink-500',
  SCHEDULER: 'from-orange-500 to-yellow-500',
  DISPATCHER: 'from-green-500 to-emerald-500',
  DESIGNER: 'from-teal-500 to-cyan-500',
  QUALITY: 'from-red-500 to-rose-500',
  SIMULATOR: 'from-indigo-500 to-violet-500',
  DECISION: 'from-cyan-500 to-blue-500',
  CUSTOM: 'from-gray-500 to-slate-500',
};

interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    description?: string;
    status: string;
    category: string;
    model: string;
    isTemplate?: boolean;
  };
  onClick?: () => void;
}

export function AgentCard({ agent, onClick }: AgentCardProps) {
  const Icon = categoryIcons[agent.category] || Bot;
  const gradient = categoryColors[agent.category] || categoryColors.CUSTOM;

  return (
    <GlassCard hover className="p-4 cursor-pointer" glow={agent.status === 'EXECUTING'}>
      <div onClick={onClick}>
        <div className="flex items-start justify-between mb-3">
          <div className={cn('w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center', gradient)}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <StatusBadge status={agent.status} />
        </div>
        <h3 className="font-semibold text-sm mb-1">{agent.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {agent.description || '暂无描述'}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-cyber-blue/70">{agent.model}</span>
          {agent.isTemplate && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/20">
              模板
            </span>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export function AgentThinkingAnimation() {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-cyber-blue"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      <span className="text-xs text-cyber-blue ml-1">AI 思考中...</span>
    </div>
  );
}
