import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../../models/AdminUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminUser:AdminUser;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {}

}