import { Controller, Get, Post, Put, Body, Param, UseGuards, Request, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll(@Request() req: { user: { id: string } }) {
    return this.tasksService.findAll(req.user.id);
  }

  @Post()
  create(@Request() req: { user: { id: string } }, @Body() body: Record<string, unknown>) {
    return this.tasksService.create(req.user.id, body as never);
  }

  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: { status: string }) {
    return this.tasksService.updateStatus(id, body.status);
  }

  @Get('logs/recent')
  getLogs(@Query('limit') limit?: string) {
    return this.tasksService.getLogs(limit ? parseInt(limit) : 50);
  }
}
