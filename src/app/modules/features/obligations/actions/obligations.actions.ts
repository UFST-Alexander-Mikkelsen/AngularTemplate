import { createAction, props } from '@ngrx/store';
import { Obligation } from '../../obligations/models/obligation';

export const loadObligations = createAction(
  '[Obligations] Load Obligations'
);

export const loadObligationsSuccess = createAction(
  '[Obligations] Load Obligations Success',
  props<{ Obligations: Obligation[] }>()
);

export const loadObligationsFailure = createAction(
  '[Obligations] Load Obligations Failure',
  props<{ error: any }>()
);

