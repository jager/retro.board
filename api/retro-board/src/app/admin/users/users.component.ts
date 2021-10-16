import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName:string = "Aleksandra Niewiadomska"
  avatarLink:string = environment.avatarLink + this.userName.replace(' ', '+')
  constructor() { }

  ngOnInit(): void {
  }

}
