import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';

import * as actions from './messages.actions';
import {AddMessageDto} from './dto/add-message.dto';
import {from, Observable} from 'rxjs/index';
import {MessagesService} from './messages.service';
import {map} from 'rxjs/internal/operators';
import {Message} from './message.entity';
import {UpdateMessageDto} from './dto/update-message.dto';
import {RemoveMessageDto} from './dto/remove-message.dto';

@WebSocketGateway({ namespace: 'messages' })
export class MessagesGateway {
  @WebSocketServer() server;

  constructor(
    private readonly messagesService: MessagesService
  ) {}

  @SubscribeMessage(actions.ADD_MESSAGE)
  async onAddMessage(client, payload: AddMessageDto): Promise<void> {
   const message = await this.messagesService.addMessage(payload);
   const action = new actions.AddMessage(message);
   this.server.to(payload.chatId).emit(action.event, action.data);
  }

  @SubscribeMessage(actions.UPDATE_MESSAGE)
  onUpdateMessage(client, payload: UpdateMessageDto): Observable<actions.UpdateMessage> {
    return from(this.messagesService.updateMessage(payload))
      .pipe(
        map((message: Message) => new actions.UpdateMessage(message))
      );
  }

  @SubscribeMessage(actions.REMOVE_MESSAGE)
  onRemoveMessage(client, payload: RemoveMessageDto): Observable<actions.RemoveMessage> {
    return from(this.messagesService.removeMessage(payload.id))
      .pipe(
        map((message: Message) => new actions.RemoveMessage(message))
      );
  }
}