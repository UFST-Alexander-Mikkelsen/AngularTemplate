import { Action, createReducer, on } from '@ngrx/store';
import * as Obligations from '../actions/obligations.actions';
import { Obligation } from '../models/obligation';

export const obligationFeatureKey = 'obligation';

export interface State {
  Obligations: Obligation[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  Obligations: [],
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
    (state, { Obligations }) => ({
      ...state,
      Obligations,
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
