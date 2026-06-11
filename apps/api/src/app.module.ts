import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AgentsModule } from './agents/agents.module';
import { WorkflowsModule } from './workflows/workflows.module';
import { KnowledgeModule } from './knowledge/knowledge.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TasksModule } from './tasks/tasks.module';
import { ChatModule } from './chat/chat.module';
import { EventsModule } from './events/events.module';
import { HealthController } from './health.controller';
import { RootController } from './root.controller';

@Module({
  imports: [
    AuthModule,
    AgentsModule,
    WorkflowsModule,
    KnowledgeModule,
    ScenariosModule,
    DashboardModule,
    TasksModule,
    ChatModule,
    EventsModule,
  ],
  controllers: [RootController, HealthController],
})
export class AppModule {}
