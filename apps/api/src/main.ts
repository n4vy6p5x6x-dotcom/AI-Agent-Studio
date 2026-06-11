import { config } from 'dotenv';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { NestFactory } from '@nestjs/core';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

for (const envPath of [resolve(process.cwd(), '../../.env'), resolve(process.cwd(), '.env')]) {
  if (existsSync(envPath)) {
    config({ path: envPath });
    break;
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.setGlobalPrefix('api', {
    exclude: [
      { path: '', method: RequestMethod.GET },
      { path: 'info', method: RequestMethod.GET },
    ],
  });

  const port = Number(process.env.API_PORT || 3001);
  const host = process.env.HOST || '127.0.0.1';
  const frontendUrl = process.env.FRONTEND_URL || 'http://127.0.0.1:3000';
  await app.listen(port, host);
  console.log(`🚀 AI Agent Studio API running on http://${host}:${port}`);
  console.log(`🌐 前端页面请访问 ${frontendUrl}`);
  console.log(`📡 WebSocket on ws://${host}:${port}`);
  console.log(`🔒 仅本机访问，未监听局域网`);
}

bootstrap();
