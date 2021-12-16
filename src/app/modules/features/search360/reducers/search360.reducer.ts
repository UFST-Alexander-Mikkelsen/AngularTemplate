import { Action, createReducer, on } from '@ngrx/store';
import { ISearch360Result, ISearch360ResultWithPagination } from '../models/search360-result';
import * as Search360Actions from '../actions/search360.actions';
import { Page } from '../../../shared/models/simple-table/simple-data-source';

export const search360FeatureKey = 'search360';

export interface State {
  search360ResultWithPagination: Page<ISearch360Result>;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  search360ResultWithPagination: {} as Page<ISearch360Result>,
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
    (state, { search360ResultWithPagination }) => ({
      ...state,
      search360ResultWithPagination,
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
