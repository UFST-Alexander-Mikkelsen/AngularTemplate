import { Action, createReducer, on } from '@ngrx/store';
import { Page } from '../../../shared/models/simple-table/simple-data-source';
import * as Todo from '../actions/todo.actions';
import { ITodoResult } from '../models/todo';

export const todoFeatureKey = 'todo';

export interface State {
  todoResultWithPagination: Page<ITodoResult>;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  todoResultWithPagination: { content: [], number: 0, size: 0, totalElements:0 } as Page<ITodoResult>,
  isLoading: false,
  error: ''
};

export const obligationReducer = createReducer(
  initialState, on(
    Todo.loadTodos,
    (state) => ({ ...state, isLoading: true, error: '' })
  ),
  on(
    Todo.loadTodosSuccess,
    (state, { todoResultWithPagination }) => ({
      ...state,
      todoResultWithPagination,
      isLoading: false
    })
  ),
  on(
    Todo.loadTodosFailure,
    (state, { error }) => ({
      ...state,
      error,
      isLoading: false
    })
  )
);


export function reducer(state: State | undefined, action: Action) {
  return obligationReducer(state, action);
}
