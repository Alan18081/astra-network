import {SubscribeMessage, WebSocketGateway, WebSocketServer} from '@nestjs/websockets';
import {AddNoteDto} from './dto/add-note.dto';
import {Observable, from} from 'rxjs';
import {Note} from './note.entity';
import {NotesService} from './notes.service';
import {map} from 'rxjs/internal/operators';

import * as actions from './notes.actions';
import {UpdateNoteDto} from './dto/update-note.dto';
import {GetNotesDto} from './dto/get-notes.dto';
import {GetNotesWithPaginationDto} from './dto/get-notes-with-pagination.dto';
import {IPaginatedResponse} from '../common/interfaces/paginated-response.inteface';
import {GetNoteByIdDto} from './dto/get-note-by-id.dto';


@WebSocketGateway({ namespace: 'notes' })
export class NotesGateway {
  @WebSocketServer() server;

  constructor(
    private readonly notesService: NotesService
  ) {}

  @SubscribeMessage(actions.GET_NOTES)
  onGetNotes(client, payload: GetNotesDto): Observable<actions.GetNotes> {
    return from(this.notesService.findAll(payload))
      .pipe(
        map((notes: Note[]) => new actions.GetNotes(notes))
      );
  }

  @SubscribeMessage(actions.GET_NOTES_WITH_PAGINATION)
  onGetNotesWithPagination(client, payload: GetNotesWithPaginationDto)
  : Observable<actions.GetNotesWithPagination> {
    return from(this.notesService.findNotesWithPagination(payload))
      .pipe(
        map((result: IPaginatedResponse<Note>) => new actions.GetNotesWithPagination(result))
      )
  }

  @SubscribeMessage(actions.GET_NOTE_BY_ID)
  onGetNoteById(client, payload: GetNoteByIdDto): Observable<actions.GetNoteById> {
    return from(this.notesService.findNoteById(payload.id, payload))
      .pipe(
        map((note: Note) => new actions.GetNoteById(note))
      )
  }

  @SubscribeMessage(actions.ADD_NOTE)
  onAddNote(client, payload: AddNoteDto): Observable<actions.AddNote> {
    return from(this.notesService.addNote(payload))
      .pipe(
        map((note: Note) => new actions.AddNote(note))
      );
  }

  @SubscribeMessage(actions.UPDATE_NOTE)
  onUpdateNote(client, payload: UpdateNoteDto): Observable<actions.UpdateNote> {
    return from(this.notesService.updateNote(payload, {}))
      .pipe(
        map((note: Note) => new actions.UpdateNote(note))
      )
  }

}