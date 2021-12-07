import { createAction, props } from '@ngrx/store';
import { ISearch360 } from '../../search360/models/search360';

export const loadSearch360 = createAction(
  '[Search360] Load Customers'
);

export const loadSearch360Success = createAction(
  '[Search360] Load Search 360 Success',
  props<{ search360s: ISearch360[] }>()
);

export const load360Failure = createAction(
  '[Customer] Load Search360 Failure',
  props<{ error: any }>()
);

