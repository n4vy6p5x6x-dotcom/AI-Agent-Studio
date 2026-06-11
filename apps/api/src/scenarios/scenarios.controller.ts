import { Controller, Get, Put, Param, Body, UseGuards } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('scenarios')
@UseGuards(JwtAuthGuard)
export class ScenariosController {
  constructor(private scenariosService: ScenariosService) {}

  @Get()
  findAll() {
    return this.scenariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scenariosService.findOne(id);
  }

  @Put(':id/data')
  updateData(@Param('id') id: string, @Body() body: Record<string, unknown>) {
    return this.scenariosService.updateData(id, body);
  }
}
