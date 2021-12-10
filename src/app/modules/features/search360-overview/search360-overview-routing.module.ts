import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search360OverviewPagesComponent } from './pages/search360-overview-pages/search360-overview-pages.component';

const routes: Routes = [
  {
    path: 'account/:id',
    component: Search360OverviewPagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Search360OverviewRoutingModule { }
