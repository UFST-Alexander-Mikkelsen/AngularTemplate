import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search360OverviewNotesComponent } from './search360-overview-notes.component';

describe('Search360OverviewNotesComponent', () => {
  let component: Search360OverviewNotesComponent;
  let fixture: ComponentFixture<Search360OverviewNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search360OverviewNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search360OverviewNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
