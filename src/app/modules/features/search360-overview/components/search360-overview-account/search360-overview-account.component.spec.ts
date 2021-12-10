import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search360OverviewAccountComponent } from './search360-overview-account.component';

describe('Search360OverviewAccountComponent', () => {
  let component: Search360OverviewAccountComponent;
  let fixture: ComponentFixture<Search360OverviewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search360OverviewAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search360OverviewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
