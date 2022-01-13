import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import { notesAdapterSelectors, getActive, getPagination, Notes } from './notes.reducer';

export const getNotesState = createFeatureSelector<Notes>('notes');

export const getNotesIds = createSelector(
  getNotesState,
  notesAdapterSelectors.selectIds
);

export const getNotesEntities = createSelector(
  getNotesState,
  notesAdapterSelectors.selectEntities
);

export const getAllNotes = createSelector(
  getNotesState,
  notesAdapterSelectors.selectAll
);

export const getNotesTotal = createSelector(
  getNotesState,
  notesAdapterSelectors.selectTotal
);

export const getNotesActive = createSelector(
  getNotesState,
  getActive
);

export const getNotesPagination = createSelector(
  getNotesState,
  getPagination
);


