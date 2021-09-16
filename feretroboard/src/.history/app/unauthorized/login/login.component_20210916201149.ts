import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../../models/AdminUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminUser:AdminUser = null;

  @NgInput()
  public emailAddress:string
  public password:string

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    this.adminUser = new AdminUser(this.emailAddress, this.password);
    console.log(this.adminUser);
    this.emailAddress = "";
    this.password = "";

  }

}
