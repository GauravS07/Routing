import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
     path: 'home', 
     component: HomeComponent 
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'user',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
     path: "", 
     redirectTo: "/home", 
     pathMatch: "full" 
  },
  {
       path: 'login',
       component: LoginComponent
  },
  {
    path: 'signup' ,
    component : SignUpComponent
  },
  {
    path: '**' ,
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
