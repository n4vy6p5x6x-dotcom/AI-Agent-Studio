'use client';

import { cn } from '@/lib/utils';

const statusMap: Record<string, { label: string; className: string }> = {
  IDLE: { label: '空闲', className: 'status-idle' },
  THINKING: { label: '思考中', className: 'status-thinking' },
  EXECUTING: { label: '执行中', className: 'status-executing' },
  WAITING: { label: '等待中', className: 'status-thinking' },
  ERROR: { label: '错误', className: 'status-error' },
  OFFLINE: { label: '离线', className: 'status-offline' },
};

interface StatusBadgeProps {
  status: string;
  showLabel?: boolean;
}

export function StatusBadge({ status, showLabel = true }: StatusBadgeProps) {
  const config = statusMap[status] || statusMap.IDLE;
  return (
    <div className="flex items-center gap-1.5">
      <span className={cn('status-dot', config.className)} />
      {showLabel && <span className="text-xs text-muted-foreground">{config.label}</span>}
    </div>
  );
}
