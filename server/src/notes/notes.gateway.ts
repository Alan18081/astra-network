import {SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from '@nestjs/websockets';
import {SocketCodes} from '../heplers/socket-codes';
import {AddNoteDto} from './dto/add-note.dto';
import {Observable, from} from 'rxjs';
import {Note} from './note.entity';
import {NotesService} from './notes.service';
import {map} from 'rxjs/internal/operators';

import {actions} from './notes.actions';


@WebSocketGateway({ namespace: 'notes' })
export class NotesGateway {
  @WebSocketServer() server;

  constructor(
    private readonly notesService: NotesService
  ) {}

  @SubscribeMessage(SocketCodes.ADD_NOTE)
  onAddNote(client, payload: AddNoteDto): Observable<WsResponse<Note>> {
    return from(this.notesService.addNote(payload))
      .pipe(map((note: Note) => actions.addNote(note)));
  }

}