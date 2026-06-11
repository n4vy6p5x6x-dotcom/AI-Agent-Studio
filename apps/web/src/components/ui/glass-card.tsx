'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = false, glow = false }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        hover ? 'glass-card-hover' : 'glass-card',
        glow && 'border-cyber-blue/20 shadow-cyber-blue/5',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
