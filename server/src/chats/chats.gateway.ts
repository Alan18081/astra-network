import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';

import * as actions from './chats.actions';
import {JoinChatDto} from './dto/join-chat.dto';
import {ChatsService} from './chats.service';

@WebSocketGateway({ namespace: 'chats' })
export class ChatsGateway {
  @WebSocketServer() server;

  constructor(
    private readonly chatsService: ChatsService
  ) {}

  @SubscribeMessage(actions.JOIN_ROOM)
  async onJoinChat(client, payload: JoinChatDto) {

    this.server.to(payload.chatId).emit();
  }
}