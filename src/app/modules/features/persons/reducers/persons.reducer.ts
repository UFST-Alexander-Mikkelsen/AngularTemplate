import { Action, createReducer, on } from '@ngrx/store';
import { Page } from '../../../shared/models/simple-table/simple-data-source';
import * as Persons from '../actions/persons.actions';
import { IContent, IPersonResult } from '../models/person';

export const personFeatureKey = 'person';

export interface State {
  personsResultWithPagination: Page<IContent>;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  personsResultWithPagination: {} as Page<IContent>,
  isLoading: false,
  error: ''
};

export const obligationReducer = createReducer(
  initialState, on(
    Persons.loadPersonsSuccess,
    (state) => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    Persons.loadPersonsSuccess,
    (state, { personsResultWithPagination }) => ({
      ...state,
      personsResultWithPagination,
      isLoading: false
    })
  ),
  on(
    Persons.loadPersonsFailure,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false
    })
  )
);


export function reducer(state: State | undefined, action: Action) {
  return obligationReducer(state, action);
}
