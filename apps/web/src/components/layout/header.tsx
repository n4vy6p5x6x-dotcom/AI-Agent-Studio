'use client';

import { Bell, Search, Activity } from 'lucide-react';
import { useAppStore } from '@/stores/app-store';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const { sidebarOpen } = useAppStore();

  return (
    <header
      className="sticky top-0 z-40 glass-card border-b border-white/10 px-6 py-4"
      style={{ marginLeft: sidebarOpen ? 260 : 72 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold glow-text">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索 Agent、工作流..."
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm w-64 focus:outline-none focus:border-cyber-blue/50 transition-colors"
            />
          </div>
          <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-cyber-blue rounded-full animate-pulse" />
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-green/10 border border-cyber-green/20">
            <Activity className="w-4 h-4 text-cyber-green" />
            <span className="text-xs text-cyber-green font-mono">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
