import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  viewLoginPage() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("sidebar-mini");
    body.classList.add("login-page");
  }

  viewAdminPage() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("login-page");
    body.classList.add("sidebar-mini");
  }
}
