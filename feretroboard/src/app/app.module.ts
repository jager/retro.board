import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './unauthorized/login/login.component';
import { MainComponent } from './authorized/main/main.component';

import { Observable, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginService } from './services/login.service';
//import { catchError, retry } from 'rxjs/operators';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({ config: { tokenGetter: tokenGetter }}),
    //Observable
  ],
  providers: [ AuthService, AuthGuardService, LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


