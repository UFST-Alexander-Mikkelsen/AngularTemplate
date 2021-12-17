import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPerson from '../reducers/persons.reducer';

const getPersonState = createFeatureSelector<fromPerson.State>(
  fromPerson.personFeatureKey
);

export const selectPersonList = createSelector(
  getPersonState,
  state => state.personsResultWithPagination.content
)

export const selectPersonListWithPagination = createSelector(
  getPersonState,
  state => state.personsResultWithPagination
)

export const selectFirstPerson = createSelector(
  getPersonState,
  state => state.personsResultWithPagination?.content[0]
)

export const selectPersonError = createSelector(
  getPersonState,
  state => state.error
)

export const selectPersonIsLoading = createSelector(
  getPersonState,
  state => state.isLoading
)

export const selectAppComponentViewModel = createSelector(
  selectPersonList,
  selectPersonError,
  getPersonState,
  (obligation, error, loading) => ({
    obligation,
    error,
    loading
  })
);

