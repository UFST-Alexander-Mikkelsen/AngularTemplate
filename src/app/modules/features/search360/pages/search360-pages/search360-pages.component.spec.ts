import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search360PagesComponent } from './search360-pages.component';

describe('Search360PagesComponent', () => {
  let component: Search360PagesComponent;
  let fixture: ComponentFixture<Search360PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search360PagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search360PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
