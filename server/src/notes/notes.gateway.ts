import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {SocketCodes} from '../heplers/socket-codes';
import {AddNoteDto} from './dto/add-note.dto';

@WebSocketGateway(3001,{ namespace: 'notes' })
export class NotesGateway {
  @WebSocketServer() server;

  @SubscribeMessage(SocketCodes.ADD_NOTE)
  onAddNote(client, data: AddNoteDto) {
    console.log(data);
  }

}