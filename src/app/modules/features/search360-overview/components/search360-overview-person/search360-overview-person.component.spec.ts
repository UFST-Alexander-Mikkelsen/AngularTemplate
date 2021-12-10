import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search360OverviewPersonComponent } from './search360-overview-person.component';

describe('Search360OverviewPersonComponent', () => {
  let component: Search360OverviewPersonComponent;
  let fixture: ComponentFixture<Search360OverviewPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search360OverviewPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search360OverviewPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
