import { createAction, props } from '@ngrx/store';
import { Page } from '../../../shared/models/simple-table/simple-data-source';
import { IObligation, IObligationResult } from '../../obligations/models/obligation';

export const loadObligations = createAction(
  '[Obligations] Load Obligations',
  props<{ obligation: IObligation }>()
);

export const loadObligationsSuccess = createAction(
  '[Obligations] Load Obligations Success',
  props<{ obligationResultWithPagination: Page<IObligationResult> }>()
);

export const loadObligationsFailure = createAction(
  '[Obligations] Load Obligations Failure',
  props<{ error: any }>()
);

