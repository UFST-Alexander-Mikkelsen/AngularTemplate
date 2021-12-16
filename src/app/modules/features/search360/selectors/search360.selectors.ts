import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearch360 from '../reducers/search360.reducer';

const getSearch360State = createFeatureSelector<fromSearch360.State>(
  fromSearch360.search360FeatureKey
);

export const selectSearch360List = createSelector(
  getSearch360State,
  state => state.search360ResultWithPagination.content
)

export const selectSearch360ResultWithPagination = createSelector(
  getSearch360State,
  state => state.search360ResultWithPagination
)

export const selectSearch360Error = createSelector(
  getSearch360State,
  state => state.error
)

export const selectSearch360IsLoading = createSelector(
  getSearch360State,
  state => state.isLoading
)

export const selectAppComponentViewModel = createSelector(
  selectSearch360List,
  selectSearch360Error,
  getSearch360State,
  (search360, error, loading) => ({
    search360,
    error,
    loading
  })
);

