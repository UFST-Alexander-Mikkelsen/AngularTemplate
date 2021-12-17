import { TestBed } from '@angular/core/testing';

import { NoteApiService } from './notes-api.service';

describe('ObligationsApiService', () => {
  let service: NoteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
