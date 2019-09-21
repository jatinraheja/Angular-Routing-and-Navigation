import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from './department-list/department-list.component';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path : 'departments' , component : DepartmentListComponent },
  {path : 'employees' , component : EmployeListComponent },
  {path : '**' , component : PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [DepartmentListComponent, EmployeListComponent, PagenotfoundComponent];
