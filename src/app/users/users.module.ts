import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { UserRoutingModule } from './user-routing.module';
import { USerComponent } from './user.component';



@NgModule({
  declarations: [
    USerComponent,
    UserListComponent,
    UserDataComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
 
})
export class UsersModule { }
