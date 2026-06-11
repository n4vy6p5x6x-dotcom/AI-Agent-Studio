import {

  Controller, Get, Post, Delete, Body, Param, UseGuards, Request, UseInterceptors, UploadedFile,

} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { KnowledgeService } from './knowledge.service';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';



@Controller('knowledge')

@UseGuards(JwtAuthGuard)

export class KnowledgeController {

  constructor(private knowledgeService: KnowledgeService) {}



  @Get()

  findAll(@Request() req: { user: { id: string } }) {

    return this.knowledgeService.findAll(req.user.id);

  }



  @Get('industry/default')

  getIndustryKb() {

    return { id: this.knowledgeService.getIndustryKnowledgeBaseId() };

  }



  @Get(':id/stats')

  getStats(@Param('id') id: string) {

    return this.knowledgeService.getStats(id);

  }



  @Get(':id')

  findOne(@Param('id') id: string, @Request() req: { user: { id: string } }) {

    return this.knowledgeService.findOne(id, req.user.id);

  }



  @Post()

  create(@Request() req: { user: { id: string } }, @Body() body: { name: string; description?: string; industry?: string }) {

    return this.knowledgeService.create(req.user.id, body);

  }



  @Delete(':id')

  remove(@Param('id') id: string, @Request() req: { user: { id: string } }) {

    return this.knowledgeService.remove(id, req.user.id);

  }



  @Post(':id/upload')

  @UseInterceptors(FileInterceptor('file'))

  upload(

    @Param('id') id: string,

    @Request() req: { user: { id: string } },

    @UploadedFile() file: Express.Multer.File,

  ) {

    return this.knowledgeService.uploadDocument(id, req.user.id, file);

  }



  @Post(':id/search')

  search(

    @Param('id') id: string,

    @Body() body: { query: string; topK?: number; industry?: string; scenarioType?: string },

  ) {

    return this.knowledgeService.search(id, body.query, body.topK, {

      industry: body.industry,

      scenarioType: body.scenarioType,

    });

  }



  @Post(':id/organize')

  organize(@Param('id') id: string, @Request() req: { user: { id: string } }) {

    return this.knowledgeService.organizeByAgents(id, req.user.id);

  }

}


