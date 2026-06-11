'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';

export default function UavScenarioPage() {
  const [scenario, setScenario] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    api.getScenarios().then((scenarios) => {
      const uav = scenarios.find((s) => s.type === 'UAV_MANUFACTURING');
      if (uav) setScenario(uav);
    });
  }, []);

  const data = (scenario?.data || {}) as Record<string, unknown>;
  const bom = (data.bom || []) as Array<Record<string, unknown>>;
  const mps = (data.mps || {}) as Record<string, unknown>;
  const mrp = (data.mrp || {}) as Record<string, unknown>;

  return (
    <AppLayout>
      <Header title="无人机制造场景" subtitle="MPS · MRP · BOM 生产计划" />
      <div className="p-6 space-y-6">
        <Link href="/scenarios" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> 返回场景列表
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground hud-text">MPS 主生产计划</p>
            <p className="text-3xl font-bold mt-2 text-cyber-blue">{mps.plannedQty as number}</p>
            <p className="text-sm text-muted-foreground mt-1">计划产量 · {mps.period as string}</p>
            <p className="text-sm text-cyber-green mt-2">确认: {mps.confirmedQty as number} 台</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground hud-text">MRP 物料需求</p>
            <p className="text-3xl font-bold mt-2 text-cyber-purple">{mrp.materials as number}</p>
            <p className="text-sm text-muted-foreground mt-1">物料种类</p>
            <p className="text-sm text-red-400 mt-2">缺料: {mrp.shortages as number} 项</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs text-muted-foreground hud-text">BOM 层级</p>
            <p className="text-3xl font-bold mt-2 text-cyber-green">5</p>
            <p className="text-sm text-muted-foreground mt-1">多级 BOM 结构</p>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <h3 className="font-semibold mb-4 hud-text">BOM 物料清单</h3>
          {bom.map((item) => (
            <div key={item.id as string} className="mb-4">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-cyber-blue/5 border border-cyber-blue/20">
                <span className="font-mono text-cyber-blue text-sm">{item.id as string}</span>
                <span className="font-medium">{item.name as string}</span>
                <span className="text-xs text-muted-foreground ml-auto">x{item.qty as number}</span>
              </div>
              <div className="ml-6 mt-1 space-y-1">
                {((item.children as Array<Record<string, unknown>>) || []).map((child) => (
                  <div key={child.id as string} className="flex items-center gap-2 p-2 rounded bg-white/5 text-sm">
                    <span className="font-mono text-muted-foreground">{child.id as string}</span>
                    <span>{child.name as string}</span>
                    <span className="text-xs text-muted-foreground ml-auto">x{child.qty as number}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </GlassCard>
      </div>
    </AppLayout>
  );
}
