import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { WorkflowsService } from './workflows.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('workflows')
@UseGuards(JwtAuthGuard)
export class WorkflowsController {
  constructor(private workflowsService: WorkflowsService) {}

  @Get()
  findAll(@Request() req: { user: { id: string } }) {
    return this.workflowsService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workflowsService.findOne(id);
  }

  @Post()
  create(@Request() req: { user: { id: string } }, @Body() body: Record<string, unknown>) {
    return this.workflowsService.create(req.user.id, body as never);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return this.workflowsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workflowsService.remove(id);
  }

  @Post(':id/execute')
  execute(@Param('id') id: string, @Body() body: { input?: Record<string, unknown> }) {
    return this.workflowsService.execute(id, body.input);
  }
}
