import { LoginResponse } from './../models/LoginResponse';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';
import { LayoutService } from 'src/app/common/services/layout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  appName:string = environment.appHtmlName
  Login!:string;
  Password!:string;
  errorText:string = "";
  private subscription: Subscription = new Subscription();

  constructor(private loginService:LoginService, private authService: AuthService, private router: Router, private layout:LayoutService) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
        this.router.navigate(['']);
    }
    this.layout.viewLoginPage();
  }

  onSubmit() {
    this.errorText = "";
    localStorage.removeItem('token');
    this.subscription = this.loginService.authenticate(this.Login, this.Password)
      .subscribe((response: LoginResponse) =>
        {
          console.log(response);
          if (response != null) {

            localStorage.setItem('token', response.token);
            localStorage.setItem('user', this.Login);
            this.router.navigate(['']);
          }
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
