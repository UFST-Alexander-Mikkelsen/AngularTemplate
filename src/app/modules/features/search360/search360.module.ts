import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromSearch360 from './reducers/search360.reducer';
import { Search360RoutingModule } from './search360-routing.module';
import { Search360Component } from './components/search360/search360.component';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Search360Effects } from './effects/search360.effects';
import { Search360PagesComponent } from './pages/search360-pages/search360-pages.component';
import { Search360UserInputComponent } from './components/search360-user-input/search360-user-input.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Search360Component,
    Search360PagesComponent,
    Search360UserInputComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    Search360RoutingModule,
    StoreModule.forFeature(fromSearch360.search360FeatureKey, fromSearch360.reducer),
    EffectsModule.forFeature([Search360Effects]),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ]
})
export class Search360Module { }
