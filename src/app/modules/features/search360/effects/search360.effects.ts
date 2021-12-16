import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Search360ApiService } from '../services/search360-api.service';
import * as Search360Action from '../actions/search360.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';



@Injectable()
export class Search360Effects {

  constructor(
    private actions$: Actions,
    private search360ApiService$: Search360ApiService
  ) { }

  loadSearch360s$ =
    createEffect(() =>
      this.actions$.pipe(
        ofType(Search360Action.loadSearch360),
        mergeMap((action) =>
          this.search360ApiService$.getList(action.search360.url,
            new HttpParams()
              .set('types', action.search360.types)
              .set('size', action.search360.size.toString())
              .set('page', action.search360.page.toString())).pipe(
                  map(search360ResultWithPagination =>
                    Search360Action.loadSearch360Success({ search360ResultWithPagination })
                  ),
                  catchError(error => of(Search360Action.load360Failure({ error: error })))
                )
              ))
        );
}
