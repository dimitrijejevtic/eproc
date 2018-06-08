import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeDefaultComponent } from '../home-default/home-default.component';
import { StepComponent } from '../step/step.component';
import { AppComponent } from '../app.component';
import { LeftDrawerComponent } from '../layout/left-drawer/left-drawer.component';
import { WorkAreaComponent } from '../layout/work-area/work-area.component';
import { ErrorPageComponent } from '../home-default/error-page/error-page.component';

const routes: Routes = [
  { path: 'api/index', redirectTo: '', pathMatch: 'full' },
  { path: 'angular', redirectTo: '', pathMatch: 'full' },
  { path: 'wizardangulartestfrm', redirectTo: 'step/2', pathMatch: 'full' },
  { path: 'step/:id', component: StepComponent },
  { path: 'wizard/:id', component: LeftDrawerComponent, pathMatch: 'full' },
  { path: '', component: HomeDefaultComponent, pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
