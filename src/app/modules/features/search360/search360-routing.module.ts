import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Search360UserInputComponent } from './components/search360-user-input/search360-user-input.component';

const routes: Routes = [
  {
    path: '',
    component: Search360UserInputComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Search360RoutingModule { }
