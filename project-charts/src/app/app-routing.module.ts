import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DashComponent } from './dash/dash.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
 { path:'line-chart' ,
  component:LineChartComponent},
  {path : ' ' , 
  component :NavComponent},
  { path: 'dashboard',
   component: DashComponent },
   { path: 'barchart',
   component: BarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
