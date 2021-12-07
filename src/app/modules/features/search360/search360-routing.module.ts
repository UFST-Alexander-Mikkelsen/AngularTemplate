import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search360Component } from './components/search360/search360.component';

const routes: Routes = [
  {
    path: '',
    component: Search360Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Search360RoutingModule { }
