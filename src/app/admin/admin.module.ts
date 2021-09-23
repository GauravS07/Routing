import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { AdminLisComponent } from './admin-lis/admin-lis.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
