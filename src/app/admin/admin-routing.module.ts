
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { AdminLisComponent } from './admin-lis/admin-lis.component';
import { AdminComponent } from './admin.component';




const routes: Routes = [ 
  { 
    path:'', 
    component: AdminComponent,
    children: [
      { path:':admin/data', component: AdminDataComponent },
      { path: '', component: AdminLisComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    AdminComponent,
    AdminDataComponent,
    AdminLisComponent
  ],
  
})
export class AdminRoutingModule { }
{ }