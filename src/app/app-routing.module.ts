import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { EmployComponent } from './employ/employ.component';
import { DashboardComponent } from "../app/dashboard/dashboard.component";
import { EmployDetailsComponent } from "../app/employ-details/employ-details.component";

const routes : Routes= [
  {path:'dashboard', component: DashboardComponent},
  {path:'employee', component: EmployComponent},
  {path:'employee-detail/:id', component: EmployDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
