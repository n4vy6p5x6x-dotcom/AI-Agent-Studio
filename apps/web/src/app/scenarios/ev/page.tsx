'use client';

import { useEffect, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';

export default function EvScenarioPage() {
  const [scenario, setScenario] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    api.getScenarios().then((scenarios) => {
      const ev = scenarios.find((s) => s.type === 'EV_MANUFACTURING');
      if (ev) setScenario(ev);
    });
  }, []);

  const data = (scenario?.data || {}) as Record<string, unknown>;
  const trace = (data.traceability || {}) as Record<string, unknown>;
  const supply = (data.supplyChain || {}) as Record<string, unknown>;
  const bom = (data.bom || {}) as Record<string, unknown>;

  return (
    <AppLayout>
      <Header title="新能源汽车制造场景" subtitle="质量追溯 · 供应链协同 · 多级 BOM" />
      <div className="p-6 space-y-6">
        <Link href="/scenarios" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> 返回场景列表
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-4">
            <p className="text-xs hud-text">质量追溯</p>
            <p className="text-lg font-mono mt-2 text-cyber-blue">{trace.vin as string}</p>
            <p className="text-sm text-muted-foreground mt-2">{trace.checkpoints as number} 检测点</p>
            <p className="text-sm text-cyber-green mt-1">合格率: {trace.passRate as number}%</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs hud-text">供应链协同</p>
            <p className="text-3xl font-bold mt-2">{(supply.tier1 as number) + (supply.tier2 as number)}</p>
            <p className="text-sm text-muted-foreground">Tier1: {supply.tier1 as number} · Tier2: {supply.tier2 as number}</p>
            <p className="text-sm text-cyber-green mt-1">准时率: {supply.onTimeRate as number}%</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs hud-text">多级 BOM</p>
            <p className="text-3xl font-bold mt-2 text-cyber-purple">{bom.totalParts as number}</p>
            <p className="text-sm text-muted-foreground">{bom.levels as number} 层级 · 关键件 {bom.criticalParts as number}</p>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <h3 className="font-semibold mb-4 hud-text">质量追溯链路</h3>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {['原材料入库', '冲压成型', '焊接组装', '涂装工艺', '总装下线', 'PDI 检测', '出厂交付'].map((step, i) => (
              <div key={step} className="flex items-center gap-2 shrink-0">
                <div className="px-4 py-3 rounded-lg bg-cyber-green/10 border border-cyber-green/20 text-center min-w-[100px]">
                  <p className="text-xs text-cyber-green">Step {i + 1}</p>
                  <p className="text-sm mt-1">{step}</p>
                </div>
                {i < 6 && <div className="w-8 h-0.5 bg-cyber-blue/30" />}
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
}
