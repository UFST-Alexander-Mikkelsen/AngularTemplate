import { TestBed } from '@angular/core/testing';

import { Search360ApiService } from './search360-api.service';

describe('Search360ApiService', () => {
  let service: Search360ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Search360ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
