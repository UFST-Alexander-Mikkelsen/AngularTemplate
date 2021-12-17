import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsPagesComponent } from './pages/persons-pages/persons-pages.component';
import * as fromPerson from './reducers/persons.reducer';
import { PersonEffects } from './effects/persons.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    PersonsPagesComponent
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    StoreModule.forFeature(fromPerson.personFeatureKey, fromPerson.reducer),
    EffectsModule.forFeature([PersonEffects]),
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatGridListModule,
  ],
  exports: [
    PersonsPagesComponent,
  ]
})
export class PersonsModule { }
