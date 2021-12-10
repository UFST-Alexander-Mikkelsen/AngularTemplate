import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search360UserInputComponent } from './search360-user-input.component';

describe('Search360UserInputComponent', () => {
  let component: Search360UserInputComponent;
  let fixture: ComponentFixture<Search360UserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search360UserInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search360UserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
