import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ObligationsApiService } from '../services/obligations-api.service';
import * as ObligationsAction from '../actions/obligations.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';



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
          this.obligationsApiService.getList(action.id).pipe(
            map(search360Result =>
              Search360Action.loadSearch360Success({ search360Result })
            ),
            catchError(error => of(Search360Action.load360Failure({ error: error })))
          )
        ))
    );
}
