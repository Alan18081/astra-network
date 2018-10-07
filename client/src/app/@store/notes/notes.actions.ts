import { Action } from '@ngrx/store';
import { Note } from '../../helpers/models/note.model';
import {IAddNote} from '../../helpers/interfaces/add-note.interface';

export const FETCH_NOTES = '[Notes] Fetch notes';
export const FETCH_NOTES_SUCCESS = '[Notes] Fetch notes success';
export const FETCH_NOTES_FAILED = '[Notes] Fetch notes failed';

export class FetchNotes implements Action {
  readonly type = FETCH_NOTES;
  constructor(public payload: number) {}
}

export class FetchNotesSuccess implements Action {
  readonly type = FETCH_NOTES_SUCCESS;
  constructor(public payload: Note[]) {}
}

export class FetchNotesFailed implements Action {
  readonly type = FETCH_NOTES_FAILED;
  constructor(public payload: Note) {}
}

export const ADD_NOTE = '[Notes] Add note';
export const ADD_NOTE_SUCCESS = '[Notes] Add note success';
export const ADD_NOTE_FAILED = '[Notes] Add note failed';

export class AddNote implements Action {
  readonly type = ADD_NOTE;
  constructor(public payload: IAddNote) {}
}

export class AddNoteSuccess implements Action {
  readonly type = ADD_NOTE_SUCCESS;
  constructor(public payload: Note) {}
}

export class AddNoteFailed implements Action {
  readonly type = ADD_NOTE_FAILED;
  constructor(public payload = null) {}
}

export const REMOVE_NOTE = '[Notes] Remove note';
export const REMOVE_NOTE_SUCCESS = '[Notes] Remove note success';
export const REMOVE_NOTE_FAILED = '[Notes] Remove note failed';

export class RemoveNote implements Action {
  readonly type = REMOVE_NOTE;
  constructor(public payload: number) {}
}

export class RemoveNoteSuccess implements Action {
  readonly type = REMOVE_NOTE_SUCCESS;
  constructor(public payload: number) {}
}

export class RemoveNoteFailed implements Action {
  readonly type = REMOVE_NOTE_FAILED;
  constructor(public payload = null) {}
}

export const SET_ACTIVE_NOTE = '[Notes] Set active note';

export class SetActiveNote implements Action {
  readonly type = SET_ACTIVE_NOTE;
  constructor(public payload: Note) {}
}

export type NotesActions =
  | FetchNotes
  | FetchNotesSuccess
  | FetchNotesFailed
  | AddNote
  | AddNoteSuccess
  | AddNoteFailed
  | RemoveNote
  | RemoveNoteSuccess
  | RemoveNoteFailed
  | SetActiveNote


