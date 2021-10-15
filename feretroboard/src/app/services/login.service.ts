import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { BaseService } from './base.service';

@Injectable()
export class LoginService extends BaseService {

  constructor(http: HttpClient, authService:AuthService) {
    super(http, authService);
  }

  authenticate(username:string, password:string):any {
    return this.post(this.baseUrl + `/auth/signin`, {
      Username: username,
      Password: password
    });
  }

  signOut() {
    return this.get(this.baseUrl + `/auth/signOut`);
  }
}
