import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligationPagesComponent } from './obligation-pages.component';

describe('ObligationPagesComponent', () => {
  let component: ObligationPagesComponent;
  let fixture: ComponentFixture<ObligationPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObligationPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObligationPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
