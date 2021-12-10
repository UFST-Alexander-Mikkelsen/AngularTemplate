import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search360OverviewPagesComponent } from './search360-overview-pages.component';

describe('Search360OverviewPagesComponent', () => {
  let component: Search360OverviewPagesComponent;
  let fixture: ComponentFixture<Search360OverviewPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search360OverviewPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search360OverviewPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
