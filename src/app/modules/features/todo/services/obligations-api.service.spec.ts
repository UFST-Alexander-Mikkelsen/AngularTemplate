import { TestBed } from '@angular/core/testing';

import { ObligationsApiService } from './obligations-api.service';

describe('ObligationsApiService', () => {
  let service: ObligationsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObligationsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
