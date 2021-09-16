import { Injectable } from '@angular/core';
import { AdminUser } from '../models/AdminUser';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor() {
    super();
  }

  authe(user:AdminUser)
}
