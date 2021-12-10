import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Search360OverviewRoutingModule } from './search360-overview-routing.module';
import { Search360OverviewPagesComponent } from './pages/search360-overview-pages/search360-overview-pages.component';
import { Search360OverviewPersonComponent } from './components/search360-overview-person/search360-overview-person.component';
import { Search360OverviewAccountComponent } from './components/search360-overview-account/search360-overview-account.component';
import { Search360OverviewNotesComponent } from './components/search360-overview-notes/search360-overview-notes.component';
import { Search360OverviewDocumentsComponent } from './components/search360-overview-documents/search360-overview-documents.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Search360OverviewToDosComponent } from './components/search360-overview-to-dos/search360-overview-to-dos.component';

@NgModule({
  declarations: [
    Search360OverviewPagesComponent,
    Search360OverviewPersonComponent,
    Search360OverviewAccountComponent,
    Search360OverviewNotesComponent,
    Search360OverviewDocumentsComponent,
    Search360OverviewToDosComponent,
  ],
  imports: [
    CommonModule,
    Search360OverviewRoutingModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
  ]
})
export class Search360OverviewModule { }
