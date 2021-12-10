import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { Search360Effects } from './search360.effects';

describe('Search360Effects', () => {
  let actions$: Observable<any>;
  let effects: Search360Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Search360Effects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(Search360Effects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
