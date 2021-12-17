import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NoteApiService } from '../services/notes-api.service';
import * as NotesAction from '../actions/notes.actions';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';



@Injectable()
export class NoteEffects {

  constructor(
    private actions$: Actions,
    private obligationsApiService: NoteApiService
  ) {}

  loadObligations$ =
    createEffect(() =>
      this.actions$.pipe(
        ofType(NotesAction.loadNotes),
        mergeMap((action) =>
          this.obligationsApiService.getList(action.note.url, new HttpParams()
            .set('size', action.note.size.toString())
            .set('page', action.note.page.toString())).pipe(
              map(noteResultWithPagination =>
                NotesAction.loadNotesSuccess({ noteResultWithPagination })
              ),
              catchError(error => of(NotesAction.loadNotesFailure({ error: error })))
          )
        ))
    );
}
