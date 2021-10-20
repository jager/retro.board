import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BoardComponent } from './board/board/board.component';
import { AuthService } from './admin/services/auth.service';
import { AuthGuardService } from './admin/services/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginService } from './admin/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LayoutService } from './common/services/layout.service';
import { UsersComponent } from './admin/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    BoardComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    JwtModule.forRoot({ config: { tokenGetter: tokenGetter }}),
    FormsModule,
    FontAwesomeModule,
    
  ],
  providers: [AuthService, AuthGuardService, LoginService, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
