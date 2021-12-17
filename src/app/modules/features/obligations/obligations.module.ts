import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObligationsRoutingModule } from './obligations-routing.module';
import { ObligationsComponent } from './components/obligations/obligations.component';
import { ObligationPagesComponent } from './pages/obligation-pages/obligation-pages.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromObligation from './reducers/obligations.reducer';
import { ObligationEffects } from './effects/obligations.effects';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ObligationsComponent,
    ObligationPagesComponent,
  ],
  imports: [
    CommonModule,
    ObligationsRoutingModule,
    StoreModule.forFeature(fromObligation.obligationFeatureKey, fromObligation.reducer),
    EffectsModule.forFeature([ObligationEffects]),
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  exports: [
    ObligationsComponent,
    ObligationPagesComponent,
  ]
})
export class ObligationsModule { }
