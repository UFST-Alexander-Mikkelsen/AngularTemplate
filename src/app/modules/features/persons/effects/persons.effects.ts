import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PersonsApiService } from '../services/persons-api.service';
import * as PersonAction from '../actions/persons.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';



@Injectable()
export class PersonEffects {

  constructor(
    private actions$: Actions,
    private personsApiService: PersonsApiService
  ) {}

  loadObligations$ =
    createEffect(() =>
      this.actions$.pipe(
        ofType(PersonAction.loadPersons),
        mergeMap((action) =>
          this.personsApiService.getList(action.person.url, new HttpParams()
            .set('size', action.person.size.toString())
            .set('page', action.person.page.toString())).pipe(
              map(personsResultWithPagination =>
                PersonAction.loadPersonsSuccess({ personsResultWithPagination })
              ),
              catchError(error => of(PersonAction.loadPersonsFailure({ error: error })))
          )
        ))
    );
}
