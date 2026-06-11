'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SciFiBackground } from './sci-fi-background';
import { Sidebar } from './sidebar';
import { useAuthStore, useAppStore } from '@/stores/app-store';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isLoading, loadProfile } = useAuthStore();
  const { sidebarOpen } = useAppStore();

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SciFiBackground />
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-cyber-blue border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-muted-foreground hud-text">系统初始化中...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen">
      <SciFiBackground />
      <Sidebar />
      <main
        className="min-h-screen transition-all duration-300"
        style={{ marginLeft: sidebarOpen ? 260 : 72 }}
      >
        {children}
      </main>
    </div>
  );
}
