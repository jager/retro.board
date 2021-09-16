import { Component, OnInit } from '@angular/core';
import { AdminUser } from '../../models/AdminUser';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminUser:AdminUser = null;

  emailAddress:string
  password:string

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  onSubmit() {

    this.adminUser = new AdminUser(this.emailAddress, this.password);

    console.log(this.adminUser);
    this.emailAddress = "";
    this.password = "";

    this.loginService.authenticate(this.adminUser.getEmail(), this.adminUser.getPassword())
      .subscribe(response =>
        {
          
        });
  }

}
