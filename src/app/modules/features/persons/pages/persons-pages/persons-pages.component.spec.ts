import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsPagesComponent } from './persons-pages.component';

describe('PersonsPagesComponent', () => {
  let component: PersonsPagesComponent;
  let fixture: ComponentFixture<PersonsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
