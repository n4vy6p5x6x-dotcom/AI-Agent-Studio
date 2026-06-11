import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      service: 'AI Agent Studio API',
      timestamp: new Date().toISOString(),
    };
  }
}
