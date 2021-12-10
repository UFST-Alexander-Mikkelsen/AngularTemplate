import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search360Component } from './search360.component';

describe('Search360Component', () => {
  let component: Search360Component;
  let fixture: ComponentFixture<Search360Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search360Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
