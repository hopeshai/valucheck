import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'nv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private auth: AuthService) { }

  logInAsOwner() {
    this.auth.logIn('owner');
  }

  logInAsUser() {
    this.auth.logIn('user');
  }

  logInAsGuest() {
    this.auth.logIn('guest');
  }
}
