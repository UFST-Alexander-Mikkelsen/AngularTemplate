import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPagesComponent } from './notes-pages.component';

describe('NotesPagesComponent', () => {
  let component: NotesPagesComponent;
  let fixture: ComponentFixture<NotesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
