import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNotes from '../reducers/notes.reducer';

const getNoteState = createFeatureSelector<fromNotes.State>(
  fromNotes.notesFeatureKey
);

export const selectNoteList = createSelector(
  getNoteState,
  state => state.noteResultWithPagination.content
)

export const selectNoteListWithPagination = createSelector(
  getNoteState,
  state => state.noteResultWithPagination
)

export const selectNoteError = createSelector(
  getNoteState,
  state => state.error
)

export const selectNoteIsLoading = createSelector(
  getNoteState,
  state => state.isLoading
)

export const selectAppComponentViewModel = createSelector(
  selectNoteList,
  selectNoteError,
  getNoteState,
  (obligation, error, loading) => ({
    obligation,
    error,
    loading
  })
);

