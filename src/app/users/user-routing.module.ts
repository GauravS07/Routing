
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { UserListComponent } from './user-list/user-list.component';


import { USerComponent } from './user.component';


const routes: Routes = [ 
  { 
    path:'', 
    component: USerComponent,
    children: [
      { path:':user/data', component: UserDataComponent },
      { path: '', component: UserListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
{ }