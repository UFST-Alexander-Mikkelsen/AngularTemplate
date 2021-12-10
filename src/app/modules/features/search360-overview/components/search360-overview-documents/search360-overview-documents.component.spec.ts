import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Search360OverviewDocumentsComponent } from './search360-overview-documents.component';

describe('Search360OverviewDocumentsComponent', () => {
  let component: Search360OverviewDocumentsComponent;
  let fixture: ComponentFixture<Search360OverviewDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Search360OverviewDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Search360OverviewDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
