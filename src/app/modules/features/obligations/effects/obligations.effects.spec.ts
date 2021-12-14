import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ObligationEffects } from './obligations.effects';

describe('ObligationEffects', () => {
  let actions$: Observable<any>;
  let effects: ObligationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ObligationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ObligationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
