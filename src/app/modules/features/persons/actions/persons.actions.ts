import { createAction, props } from '@ngrx/store';
import { Page } from '../../../shared/models/simple-table/simple-data-source';
import { IContent, IPerson, IPersonResult } from '../models/person';

export const loadPersons = createAction(
  '[Person] Load Persons',
  props<{ person: IPerson }>()
);

export const loadPersonsSuccess = createAction(
  '[Person] Load Persons Success',
  props<{ personsResultWithPagination: Page<IContent> }>()
);

export const loadPersonsFailure = createAction(
  '[Person] Load Persons Failure',
  props<{ error: any }>()
);

