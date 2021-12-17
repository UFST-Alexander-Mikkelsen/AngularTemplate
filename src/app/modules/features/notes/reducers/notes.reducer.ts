import { Action, createReducer, on } from '@ngrx/store';
import { Page } from '../../../shared/models/simple-table/simple-data-source';
import * as Note from '../actions/notes.actions';
import { INoteResult } from '../models/notes';

export const notesFeatureKey = 'notes';

export interface State {
  noteResultWithPagination: Page<INoteResult>;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  noteResultWithPagination: {} as Page<INoteResult>,
  isLoading: false,
  error: ''
};

export const noteReducer = createReducer(
  initialState, on(
    Note.loadNotes,
    (state) => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    Note.loadNotesSuccess,
    (state, { noteResultWithPagination }) => ({
      ...state,
      noteResultWithPagination,
      isLoading: false
    })
  ),
  on(
    Note.loadNotesFailure,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false
    })
  )
);


export function reducer(state: State | undefined, action: Action) {
  return noteReducer(state, action);
}
