import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private loginPageCss:string = "login-page";
  private dashboardPageCass:string[] = [ "g-sidenav-show", "bg-gray-100" ] //sidebar-mini - for LTE
  constructor() { }

  viewLoginPage() {
    let body = document.getElementsByTagName('body')[0];
    //this.dashboardPageCass.forEach(x => body.classList.remove(x));
    //body.classList.add(this.loginPageCss);
    
  }

  viewAdminPage() {
    let body = document.getElementsByTagName('body')[0];
    //body.classList.remove(this.loginPageCss);
    this.dashboardPageCass.forEach(x => body.classList.add(x));
  }
}
