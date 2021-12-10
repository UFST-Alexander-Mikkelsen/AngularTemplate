import { TestBed } from '@angular/core/testing';

import { Search360OverviewApiService } from './search360-overview-api.service';

describe('Search360OverviewApiService', () => {
  let service: Search360OverviewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Search360OverviewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
