'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, User } from 'lucide-react';
import { SciFiBackground } from '@/components/layout/sci-fi-background';
import { useAuthStore } from '@/stores/app-store';

export default function LoginPage() {
  const router = useRouter();
  const { login, register } = useAuthStore();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('admin@aistudio.local');
  const [password, setPassword] = useState('admin123');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isRegister) {
        if (!name.trim()) {
          setError('请输入姓名');
          setLoading(false);
          return;
        }
        await register(email.trim(), password, name.trim());
      } else {
        await login(email.trim(), password);
      }
      router.replace('/');
    } catch (err) {
      if (err instanceof TypeError) {
        setError('无法连接 API 服务，请确认后端已启动（http://127.0.0.1:3001）');
      } else {
        setError(err instanceof Error ? err.message : '登录失败');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <SciFiBackground />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass-card p-8 cyber-border"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold glow-text">AI Agent Studio</h1>
          <p className="text-sm text-muted-foreground mt-1">工业级 AI 多智能体协同平台</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {isRegister && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
                required
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              inputMode="email"
              autoComplete="email"
              placeholder="邮箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="password"
              placeholder="密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyber-blue/50"
              required
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? '处理中...' : isRegister ? '注册' : '登录'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-sm text-cyber-blue hover:underline"
          >
            {isRegister ? '已有账号？登录' : '没有账号？注册'}
          </button>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
          <p className="text-xs text-muted-foreground text-center">
            演示账号: admin@aistudio.local / admin123
          </p>
        </div>
      </motion.div>
    </div>
  );
}
