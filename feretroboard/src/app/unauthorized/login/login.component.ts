import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminUser } from '../../models/AdminUser';
import { AuthService } from '../../services/auth.service';
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
  errorText:string = "";

  private subscription: Subscription;

  constructor(private loginService:LoginService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
        this.router.navigate(['']);
    }
  }

  onSubmit() {
    this.errorText = "";
    this.adminUser = new AdminUser(this.emailAddress, this.password);

    console.log(this.adminUser);
    this.emailAddress = "";
    this.password = "";
    localStorage.removeItem('token');
    this.subscription = this.loginService.authenticate(this.adminUser.getEmail(), this.adminUser.getPassword())
      .subscribe(response =>
        {
          if (response != '') {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', this.adminUser.getEmail());
            this.router.navigate(['']);
          }
        }, err => { this.errorText = "Podany login i/lub hasło są niepoprawne!"});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
