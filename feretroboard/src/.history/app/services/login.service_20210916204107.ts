import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminUser } from '../models/AdminUser';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(private http: HttpClient) {
    super(http);
  }

  authenticate(username:string, password:string):any {
    return this.getClient().post(this.baseUrl + `/authenticate`, {
      user: username,
      password: password
    });
  }
}
