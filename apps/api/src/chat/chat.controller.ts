import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('chat')
@UseGuards(JwtAuthGuard)
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Post()
  chat(@Body() body: { agentId: string; messages: Array<{ role: string; content: string }> }) {
    return this.chatService.chat(body.agentId, body.messages);
  }
}
