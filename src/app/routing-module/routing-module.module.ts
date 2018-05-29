import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeDefaultComponent } from '../home-default/home-default.component';
import { StepComponent } from '../step/step.component';

const routes: Routes = [
{ path: '', component: HomeDefaultComponent , pathMatch: 'full'},
{ path: 'step/:id', component: StepComponent} ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
