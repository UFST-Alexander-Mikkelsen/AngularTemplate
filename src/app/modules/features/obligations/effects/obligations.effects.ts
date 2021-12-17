import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ObligationsApiService } from '../services/obligations-api.service';
import * as ObligationsAction from '../actions/obligations.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';



@Injectable()
export class ObligationEffects {

  constructor(
    private actions$: Actions,
    private obligationsApiService: ObligationsApiService
  ) {}

  loadObligations$ =
    createEffect(() =>
      this.actions$.pipe(
        ofType(ObligationsAction.loadObligations),
        mergeMap((action) =>
          this.obligationsApiService.getList(action.obligation.url, new HttpParams()
            .set('size', action.obligation.size.toString())
            .set('page', action.obligation.page.toString())).pipe(
              map(obligationResultWithPagination =>
                ObligationsAction.loadObligationsSuccess({ obligationResultWithPagination })
              ),
              catchError(error => of(ObligationsAction.loadObligationsFailure({ error: error })))
          )
        ))
    );
}
