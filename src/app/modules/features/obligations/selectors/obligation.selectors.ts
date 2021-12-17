import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromObligation from '../reducers/obligations.reducer';

const getObligationState = createFeatureSelector<fromObligation.State>(
  fromObligation.obligationFeatureKey
);

export const selectObligationList = createSelector(
  getObligationState,
  state => state.obligationResultWithPagination.content
)

export const selectObligationListWithPagination = createSelector(
  getObligationState,
  state => state.obligationResultWithPagination
)

export const selectObligationError = createSelector(
  getObligationState,
  state => state.error
)

export const selectObligationIsLoading = createSelector(
  getObligationState,
  state => state.isLoading
)

export const selectAppComponentViewModel = createSelector(
  selectObligationList,
  selectObligationError,
  getObligationState,
  (obligation, error, loading) => ({
    obligation,
    error,
    loading
  })
);

