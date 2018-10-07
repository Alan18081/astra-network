import {IAppState} from '../state';
import {Note} from '../../helpers/models/note.model';
import * as actions from './notes.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

const notesAdapter: EntityAdapter<Note> = createEntityAdapter<Note>();

export interface Notes extends EntityState<Note> {
  pagination: {
    page: number;
    totalCount: number;
    itemsPerPage: number;
  };
  activeNote: Note;
}

const initialState: Notes = notesAdapter.getInitialState({
  pagination: {
    page: 1,
    totalCount: 0,
    itemsPerPage: 0
  },
  activeNote: null
});

export function notesReducer(state = initialState, { type, payload }: actions.NotesActions) {
  switch (type) {

    case actions.FETCH_NOTES_SUCCESS:
      return notesAdapter.addMany(payload, state);

    default:
      return state;
  }
}

export interface NotesState extends IAppState {
  notes: Notes;
}

export const notesAdapterSelectors = notesAdapter.getSelectors();
export const getActive = (state: Notes) => state.activeNote;
export const getPagination = (state: Notes) => state.pagination;
