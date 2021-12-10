import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search360OverviewToDosComponent } from './search360-overview-to-dos.component';

describe('Search360OverviewToDosComponent', () => {
  let component: Search360OverviewToDosComponent;
  let fixture: ComponentFixture<Search360OverviewToDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search360OverviewToDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search360OverviewToDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
