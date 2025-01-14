import { Action, createReducer, on } from '@ngrx/store';
import { Page } from '../../../shared/models/simple-table/simple-data-source';
import * as Obligations from '../actions/obligations.actions';
import { IObligationResult } from '../models/obligation';

export const obligationFeatureKey = 'obligation';

export interface State {
  obligationResultWithPagination: Page<IObligationResult>;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  obligationResultWithPagination: {} as Page<IObligationResult>,
  isLoading: false,
  error: ''
};

export const obligationReducer = createReducer(
  initialState, on(
    Obligations.loadObligations,
    (state) => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    Obligations.loadObligationsSuccess,
    (state, { obligationResultWithPagination }) => ({
      ...state,
      obligationResultWithPagination,
      isLoading: false
    })
  ),
  on(
    Obligations.loadObligationsFailure,
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
