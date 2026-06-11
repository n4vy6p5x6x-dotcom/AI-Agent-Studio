import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class RootController {
  @Get()
  root(@Res() res: Response) {
    const frontend = process.env.FRONTEND_URL || 'http://127.0.0.1:3000';
    return res.redirect(frontend);
  }

  @Get('info')
  info() {
    const host = process.env.HOST || '127.0.0.1';
    const frontend = process.env.FRONTEND_URL || 'http://127.0.0.1:3000';
    const port = process.env.API_PORT || 3001;
    return {
      service: 'AI Agent Studio API',
      message: '这是 API 服务。请访问前端页面使用系统。',
      frontend,
      api: `http://${host}:${port}/api`,
      health: `http://${host}:${port}/api/health`,
      login: 'admin@aistudio.local / admin123',
    };
  }
}
