import { Injectable, NotFoundException } from '@nestjs/common';

import { prisma } from '@ai-studio/database';

import { DeepSeekClient } from '@ai-studio/agents';

import { KnowledgeService } from '../knowledge/knowledge.service';



@Injectable()

export class ChatService {

  private deepseek = new DeepSeekClient();



  constructor(private knowledgeService: KnowledgeService) {}



  async chat(agentId: string, messages: Array<{ role: string; content: string }>) {

    const agent = await prisma.agent.findUnique({ where: { id: agentId } });

    if (!agent) throw new NotFoundException('Agent 不存在');



    await prisma.agent.update({

      where: { id: agentId },

      data: { status: 'THINKING' },

    });



    let ragContext = '';

    if (agent.knowledgeBaseId) {

      const lastUser = [...messages].reverse().find((m) => m.role === 'user');

      const query = lastUser?.content || agent.description || '工业制造';

      const hits = await this.knowledgeService.search(agent.knowledgeBaseId, query, 3);

      if (hits.length > 0) {

        ragContext = `\n\n## 行业知识库参考\n${hits.map((h, i) => `[${i + 1}] ${h.content}`).join('\n\n')}`;

      }

    }



    const systemMessage = { role: 'system', content: agent.systemPrompt + ragContext };

    const allMessages = [systemMessage, ...messages];



    const response = await this.deepseek.chat(allMessages, {

      model: agent.model || process.env.DEEPSEEK_MODEL || 'deepseek-chat',

      temperature: agent.temperature,

      maxTokens: agent.maxTokens,

    });



    await prisma.agent.update({

      where: { id: agentId },

      data: { status: 'IDLE' },

    });



    await prisma.log.create({

      data: {

        level: 'INFO',

        message: `Agent ${agent.name} 完成对话，消耗 ${response.tokens} tokens`,

        agentId: agent.id,

        metadata: { tokens: response.tokens, ragEnabled: !!agent.knowledgeBaseId },

      },

    });



    return {

      content: response.content,

      tokens: response.tokens,

      agentId: agent.id,

      agentName: agent.name,

      ragEnabled: !!agent.knowledgeBaseId,

    };

  }

}


