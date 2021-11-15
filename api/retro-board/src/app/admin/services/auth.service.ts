import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()


export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token') as string;
    return true;// !this.jwtHelper.isTokenExpired(token);
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
