import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./modules/features/customers/customers-routing.module').then(m => m.CustomersRoutingModule)
  },
  {
    path: 'search360',
    loadChildren: () => import('./modules/features/search360/search360-routing.module').then(m => m.Search360RoutingModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/features/search360-overview/search360-overview-routing.module').then(m => m.Search360OverviewRoutingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
