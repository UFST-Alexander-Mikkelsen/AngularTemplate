import { createAction, props } from '@ngrx/store';
import { ISearch360 } from '../../search360/models/search360';
import { ISearch360Result } from '../models/search360-result';

export const loadSearch360 = createAction(
  '[Search360] Load Customers',
  props<ISearch360>()
);

export const loadSearch360Success = createAction(
  '[Person] Load Search 360 Success',
  props<{ search360Result: ISearch360Result[] }>()
);

export const load360Failure = createAction(
  '[ISearch360Result] Load Search360 Failure',
  props<{ error: any }>()
);

