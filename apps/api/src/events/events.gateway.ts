import {
  WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    client.emit('connected', { message: 'AI Agent Studio WebSocket connected' });
  }

  @SubscribeMessage('subscribe:agents')
  handleAgentSubscribe(client: Socket) {
    client.join('agents');
    return { event: 'subscribed', data: { channel: 'agents' } };
  }

  @SubscribeMessage('subscribe:logs')
  handleLogSubscribe(client: Socket) {
    client.join('logs');
    return { event: 'subscribed', data: { channel: 'logs' } };
  }

  @SubscribeMessage('subscribe:workflow')
  handleWorkflowSubscribe(client: Socket, data: { workflowId: string }) {
    client.join(`workflow:${data.workflowId}`);
    return { event: 'subscribed', data: { channel: `workflow:${data.workflowId}` } };
  }

  emitAgentEvent(event: Record<string, unknown>) {
    this.server.to('agents').emit('agent:event', event);
  }

  emitLog(log: Record<string, unknown>) {
    this.server.to('logs').emit('log:new', log);
  }

  emitWorkflowStep(workflowId: string, step: Record<string, unknown>) {
    this.server.to(`workflow:${workflowId}`).emit('workflow:step', step);
  }
}
