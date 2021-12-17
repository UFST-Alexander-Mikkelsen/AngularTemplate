import { createAction, props } from '@ngrx/store';
import { Page } from '../../../shared/models/simple-table/simple-data-source';
import { ITodo, ITodoResult } from '../models/todo';

export const loadTodos = createAction(
  '[todo] Load Todos',
  props<{ todo: ITodo }>()
);

export const loadTodosSuccess = createAction(
  '[todo] Load Todos Success',
  props<{ todoResultWithPagination: Page<ITodoResult> }>()
);

export const loadTodosFailure = createAction(
  '[Obligations] Load Todos Failure',
  props<{ error: any }>()
);

