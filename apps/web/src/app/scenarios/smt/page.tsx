'use client';

import { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { api } from '@/lib/api';

export default function SmtScenarioPage() {
  const [scenario, setScenario] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    api.getScenarios().then((scenarios) => {
      const smt = scenarios.find((s) => s.type === 'SMT_MANUFACTURING');
      if (smt) setScenario(smt);
    });
  }, []);

  const data = (scenario?.data || {}) as Record<string, unknown>;
  const schedule = (data.schedule || []) as Array<Record<string, unknown>>;
  const changeover = (data.changeover || {}) as Record<string, unknown>;

  const ganttOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    grid: { left: 80, right: 20, top: 20, bottom: 30 },
    xAxis: { type: 'category', data: schedule.map((s) => `${s.line}: ${s.product}`), axisLabel: { color: '#888', fontSize: 10 } },
    yAxis: { type: 'value', name: '产量', axisLabel: { color: '#888' }, splitLine: { lineStyle: { color: '#ffffff10' } } },
    series: [{
      type: 'bar',
      data: schedule.map((s) => s.qty),
      itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#00d4ff' }, { offset: 1, color: '#7c3aed' }] }, borderRadius: [4, 4, 0, 0] },
    }],
  };

  return (
    <AppLayout>
      <Header title="SMT 制造场景" subtitle="SMT 排程 · 换线优化 · 甘特图" />
      <div className="p-6 space-y-6">
        <Link href="/scenarios" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4" /> 返回场景列表
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-4">
            <p className="text-xs hud-text">产线数量</p>
            <p className="text-3xl font-bold mt-2">4</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs hud-text">换线时间优化</p>
            <p className="text-3xl font-bold mt-2 text-cyber-green">{changeover.savings as string}</p>
            <p className="text-sm text-muted-foreground">{changeover.avgTime as number}min → {changeover.optimized as number}min</p>
          </GlassCard>
          <GlassCard className="p-4">
            <p className="text-xs hud-text">排程任务</p>
            <p className="text-3xl font-bold mt-2 text-cyber-blue">{schedule.length}</p>
          </GlassCard>
        </div>

        <GlassCard className="p-4">
          <h3 className="font-semibold mb-4 hud-text">SMT 排程甘特图</h3>
          <ReactECharts option={ganttOption} style={{ height: 300 }} />
        </GlassCard>

        <GlassCard className="p-4">
          <h3 className="font-semibold mb-4 hud-text">排程明细</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 px-3 text-muted-foreground">产线</th>
                  <th className="text-left py-2 px-3 text-muted-foreground">产品</th>
                  <th className="text-left py-2 px-3 text-muted-foreground">开始</th>
                  <th className="text-left py-2 px-3 text-muted-foreground">结束</th>
                  <th className="text-right py-2 px-3 text-muted-foreground">产量</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-2 px-3 font-mono text-cyber-blue">{s.line as string}</td>
                    <td className="py-2 px-3">{s.product as string}</td>
                    <td className="py-2 px-3">{s.start as string}</td>
                    <td className="py-2 px-3">{s.end as string}</td>
                    <td className="py-2 px-3 text-right font-bold">{s.qty as number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </AppLayout>
  );
}
