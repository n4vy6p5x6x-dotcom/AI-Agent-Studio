import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request, Query } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('agents')
@UseGuards(JwtAuthGuard)
export class AgentsController {
  constructor(private agentsService: AgentsService) {}

  @Get()
  findAll(@Request() req: { user: { id: string } }, @Query('templates') templates?: string) {
    return this.agentsService.findAll(req.user.id, templates !== 'false');
  }

  @Get('statuses')
  getStatuses() {
    return this.agentsService.getStatuses();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentsService.findOne(id);
  }

  @Post()
  create(@Request() req: { user: { id: string } }, @Body() body: Record<string, unknown>) {
    return this.agentsService.create(req.user.id, body as never);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return this.agentsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentsService.remove(id);
  }

  @Post('assign-task')
  assignTask(@Body() body: { taskDescription: string }) {
    return this.agentsService.assignTask(body.taskDescription);
  }
}
