import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {JwtHelper} from "angular2-jwt";

@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) {
   return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
     .map(response => {
       let result = response.json();
       if (result && result.token) {
         localStorage.setItem('token', result.token);
         return true;
       }
      return false;
     });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
  }
}

