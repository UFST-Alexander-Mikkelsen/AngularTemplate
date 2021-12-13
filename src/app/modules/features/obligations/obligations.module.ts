import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObligationsRoutingModule } from './obligations-routing.module';
import { ObligationsComponent } from './components/obligations/obligations.component';
import { ObligationPagesComponent } from './pages/obligation-pages/obligation-pages.component';


@NgModule({
  declarations: [
    ObligationsComponent,
    ObligationPagesComponent
  ],
  imports: [
    CommonModule,
    ObligationsRoutingModule
  ]
})
export class ObligationsModule { }
