import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoApiService } from '../service/todo-api.service';
import * as TodoAction from '../actions/todo.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';



@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private obligationsApiService: TodoApiService
  ) {}

  loadObligations$ =
    createEffect(() =>
      this.actions$.pipe(
        ofType(TodoAction.loadTodos),
        mergeMap((action) =>
          this.obligationsApiService.getList(action.todo.url, new HttpParams()
            .set('size', action.todo.size.toString())
            .set('page', action.todo.page.toString())).pipe(
              map(todoResultWithPagination =>
                TodoAction.loadTodosSuccess({ todoResultWithPagination })
              ),
              catchError(error => of(TodoAction.loadTodosFailure({ error: error })))
          )
        ))
    );
}
