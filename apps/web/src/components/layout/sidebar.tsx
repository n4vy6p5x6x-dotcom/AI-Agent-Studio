'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Bot, GitBranch, Network, BookOpen, Factory,
  BarChart3, Settings, ChevronLeft, Zap, LogOut,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAppStore, useAuthStore } from '@/stores/app-store';

const navItems = [
  { href: '/', label: '控制台', icon: LayoutDashboard },
  { href: '/agents', label: 'Agent Studio', icon: Bot },
  { href: '/workflows', label: '工作流', icon: GitBranch },
  { href: '/collaboration', label: '多Agent协同', icon: Network },
  { href: '/knowledge', label: '知识库', icon: BookOpen },
  { href: '/scenarios', label: '工业场景', icon: Factory },
  { href: '/dashboard', label: '数据驾驶舱', icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, toggleSidebar } = useAppStore();
  const { user, logout } = useAuthStore();

  return (
    <motion.aside
      animate={{ width: sidebarOpen ? 260 : 72 }}
      className="fixed left-0 top-0 h-screen glass-card border-r border-white/10 z-50 flex flex-col"
    >
      <div className="flex items-center gap-3 p-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        {sidebarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-sm font-bold glow-text">AI Agent Studio</h1>
            <p className="text-[10px] text-muted-foreground">工业级多智能体平台</p>
          </motion.div>
        )}
      </div>

      <nav className="flex-1 py-4 space-y-1 px-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group',
                isActive
                  ? 'bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/5',
              )}
            >
              <item.icon className={cn('w-5 h-5 shrink-0', isActive && 'text-cyber-blue')} />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 border-t border-white/10 space-y-1">
        {sidebarOpen && user && (
          <div className="px-3 py-2 text-xs text-muted-foreground">
            <p className="font-medium text-foreground">{user.name}</p>
            <p>{user.email}</p>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 w-full"
        >
          <ChevronLeft className={cn('w-5 h-5 transition-transform', !sidebarOpen && 'rotate-180')} />
          {sidebarOpen && <span className="text-sm">收起</span>}
        </button>
        <button
          onClick={logout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-red-400 hover:bg-red-400/5 w-full"
        >
          <LogOut className="w-5 h-5" />
          {sidebarOpen && <span className="text-sm">退出</span>}
        </button>
      </div>
    </motion.aside>
  );
}
