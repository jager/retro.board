import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './unauthorized/login/login.component';
import { MainComponent } from './authorized/main/main.component';

import { Observable, throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';

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
    Observable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }