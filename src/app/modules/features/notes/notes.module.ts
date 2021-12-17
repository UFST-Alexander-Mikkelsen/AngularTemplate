import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesPagesComponent } from './pages/notes-pages/notes-pages.component';
import * as fromNotes from './reducers/notes.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NoteEffects } from './effects/notes.effects';


@NgModule({
  declarations: [
    NotesPagesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    StoreModule.forFeature(fromNotes.notesFeatureKey, fromNotes.reducer),
    EffectsModule.forFeature([NoteEffects]),
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ]
})
export class NotesModule { }
