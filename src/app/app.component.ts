import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Routing-Example';

  constructor(private router: Router) {

  }

  goToHome(){
 this.router.navigate(['/home']);
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
  goToSignUp(){
    this.router.navigate(['/signup']);
  }
  goToAdmmin(){

    this.router.navigate(['/admin']);
  }
  goToUsers(){
    this.router.navigate(['/user']);
  }
}
