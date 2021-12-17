import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodo from '../reducers/todo.reducer';

const getTodoState = createFeatureSelector<fromTodo.State>(
  fromTodo.todoFeatureKey
);

export const selectTodoList = createSelector(
  getTodoState,
  state => state.todoResultWithPagination.content
)

export const selectTodoListWithPagination = createSelector(
  getTodoState,
  state => state.todoResultWithPagination
)

export const selectTodoError = createSelector(
  getTodoState,
  state => state.error
)

export const selectTodoIsLoading = createSelector(
  getTodoState,
  state => state.isLoading
)

export const selectAppComponentViewModel = createSelector(
  selectTodoList,
  selectTodoError,
  getTodoState,
  (obligation, error, loading) => ({
    obligation,
    error,
    loading
  })
);

