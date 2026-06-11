import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@ai-studio/types', '@ai-studio/utils'],
  experimental: {
    optimizePackageImports: ['lucide-react', 'echarts-for-react'],
  },
};

export default nextConfig;
