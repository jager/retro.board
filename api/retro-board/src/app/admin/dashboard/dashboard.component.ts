import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/common/services/layout.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { faJedi, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedInUser:string = localStorage.getItem('user') as string;
  appName:string = environment.appHtmlName

  /* icons */
  jediIcon = faJedi;
  usersIcon = faUsers;

  constructor(private router:Router, private authService:AuthService, private layoutService:LayoutService) { }

  ngOnInit(): void {
    this.layoutService.viewAdminPage();



  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['login']);
  }

}
