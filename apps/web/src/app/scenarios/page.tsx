'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/layout/app-layout';
import { Header } from '@/components/layout/header';
import { GlassCard } from '@/components/ui/glass-card';
import { Plane, Cpu, Car, ArrowRight } from 'lucide-react';
import { api } from '@/lib/api';
import { motion } from 'framer-motion';

const scenarioIcons: Record<string, typeof Plane> = {
  UAV_MANUFACTURING: Plane,
  SMT_MANUFACTURING: Cpu,
  EV_MANUFACTURING: Car,
};

const scenarioColors: Record<string, string> = {
  UAV_MANUFACTURING: 'from-blue-500 to-cyan-500',
  SMT_MANUFACTURING: 'from-orange-500 to-yellow-500',
  EV_MANUFACTURING: 'from-green-500 to-emerald-500',
};

const scenarioPaths: Record<string, string> = {
  UAV_MANUFACTURING: '/scenarios/uav',
  SMT_MANUFACTURING: '/scenarios/smt',
  EV_MANUFACTURING: '/scenarios/ev',
};

export default function ScenariosPage() {
  const [scenarios, setScenarios] = useState<Array<Record<string, unknown>>>([]);

  useEffect(() => {
    api.getScenarios().then(setScenarios).catch(console.error);
  }, []);

  return (
    <AppLayout>
      <Header title="工业场景" subtitle="无人机 · SMT · 新能源汽车 三大制造场景" />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((scenario, i) => {
            const type = scenario.type as string;
            const Icon = scenarioIcons[type] || Plane;
            const gradient = scenarioColors[type] || 'from-gray-500 to-slate-500';
            const path = scenarioPaths[type] || '/scenarios';

            return (
              <motion.div key={scenario.id as string} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
                <Link href={path}>
                  <GlassCard hover className="p-6 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{scenario.name as string}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{scenario.description as string}</p>
                    <div className="flex items-center text-cyber-blue text-sm">
                      进入场景 <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
