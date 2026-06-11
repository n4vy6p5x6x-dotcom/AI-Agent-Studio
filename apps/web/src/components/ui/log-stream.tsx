'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LogEntry {
  id: string;
  level: string;
  message: string;
  createdAt: string;
  agent?: { name: string };
}

interface LogStreamProps {
  logs: LogEntry[];
  className?: string;
}

const levelColors: Record<string, string> = {
  DEBUG: 'text-gray-400',
  INFO: 'text-cyber-blue',
  WARN: 'text-yellow-400',
  ERROR: 'text-red-400',
};

export function LogStream({ logs, className }: LogStreamProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [logs]);

  return (
    <div className={cn('glass-card overflow-hidden', className)}>
      <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
        <span className="hud-text">实时日志流</span>
        <span className="text-[10px] text-muted-foreground font-mono">{logs.length} entries</span>
      </div>
      <div ref={containerRef} className="h-64 overflow-y-auto p-2 space-y-1 font-mono text-xs">
        <AnimatePresence>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-2 px-2 py-1 rounded hover:bg-white/5"
            >
              <span className="text-muted-foreground shrink-0">
                {new Date(log.createdAt).toLocaleTimeString('zh-CN')}
              </span>
              <span className={cn('shrink-0 w-12', levelColors[log.level])}>
                [{log.level}]
              </span>
              {log.agent && (
                <span className="text-cyber-purple shrink-0">{log.agent.name}:</span>
              )}
              <span className="text-foreground/80 truncate">{log.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        {logs.length === 0 && (
          <div className="text-center text-muted-foreground py-8">暂无日志</div>
        )}
      </div>
    </div>
  );
}
