import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NoteEffects } from './notes.effects';

describe('ObligationEffects', () => {
  let actions$: Observable<any>;
  let effects: NoteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(NoteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
