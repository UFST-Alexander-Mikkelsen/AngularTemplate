import { Action, createReducer, on } from '@ngrx/store';
import { ISearch360 } from '../models/search360';
import * as Search360Actions from '../actions/search360.actions';

export const search360FeatureKey = 'search360';

export interface State {
  search360s: ISearch360[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  search360s: [],
  isLoading: false,
  error: ''
};

export const search360Reducer = createReducer(
  initialState, on(
    Search360Actions.loadSearch360,
    (state) => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    Search360Actions.loadSearch360Success,
    (state, { search360s }) => ({
      ...state,
      search360s,
      isLoading: false
    })
  ),
  on(
    Search360Actions.load360Failure,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false
    })
  )
);


export function reducer(state: State | undefined, action: Action) {
  return search360Reducer(state, action);
}
