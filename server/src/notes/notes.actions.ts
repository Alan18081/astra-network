import {WsResponse} from '@nestjs/websockets';
import {Note} from './note.entity';
import {IPaginatedResponse} from '../common/interfaces/paginated-response.inteface';

export const GET_NOTES = 'GET_NOTES';
export const GET_NOTES_WITH_PAGINATION = 'GET_NOTES_WITH_PAGINATION';
export const GET_NOTE_BY_ID = 'GET_NOTE_BY_ID';
export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export class GetNotes implements WsResponse {
  readonly event = GET_NOTES;
  constructor(public data: Note[]) {}
}

export class GetNotesWithPagination implements WsResponse {
  readonly event = GET_NOTES_WITH_PAGINATION;
  constructor(public data: IPaginatedResponse<Note>) {}
}

export class GetNoteById implements WsResponse {
  readonly event = GET_NOTE_BY_ID;
  constructor(public data: Note) {}
}

export class AddNote implements WsResponse {
  readonly event = ADD_NOTE;
  constructor(public data: Note) {}
}

export class UpdateNote implements WsResponse {
  readonly event = UPDATE_NOTE;
  constructor(public data: Note) {}
}

export class RemoveNote implements WsResponse {
  readonly event = REMOVE_NOTE;
  constructor(public data = null) {}
}