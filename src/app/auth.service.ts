import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  logIn(token: string) {
    localStorage.setItem('token', token);
    this.router.navigate([''], {replaceUrl: true});
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
