import { createAction, props } from '@ngrx/store';
import { ISearch360 } from '../../search360/models/search360';
import { ISearch360Result, ISearch360ResultWithPagination } from '../models/search360-result';

export const loadSearch360 = createAction(
  '[Search360] Load Search360',
  props<{ search360: ISearch360 }>()
);

export const loadSearch360Success = createAction(
  '[Person] Load Search 360 Success',
  props<{ search360ResultWithPagination: ISearch360ResultWithPagination }>()
);

export const load360Failure = createAction(
  '[ISearch360Result] Load Search360 Failure',
  props<{ error: any }>()
);

