import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Board } from '../models/Board';
import { ScrumMaster } from '../models/ScrumMaster';
import { Team } from '../models/Team';
import { UserManagementService } from '../services/user-management.service';
import { faLink, faCopy, faCheck, faLock, faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser!:ScrumMaster;
  selectedTeam!:Team | null;
  scrumMasters:ScrumMaster[] = []
  newTeamName:string = ""
  newBoardName:string = ""
  newBoardActiveTo:string =  new Date().toString()
  newBoardActiveFrom:string = new Date().toString();
  avatarLink:string = ""

  linkIcon = faLink;
  copyIcon = faCopy;
  checkIcon = faCheck
  lockIcon = faLock;
  penIcon = faPenSquare;
  trashIcon = faTrash;

  constructor(private userManagement: UserManagementService)
  {
    this.scrumMasters = this.userManagement.findAll();
  }

  ngOnInit(): void {
  }

  getAvatar(name: string) : string {
    return (name)
          ? environment.avatarLink + name.replace(' ', '+')
          : "#"
  }

  selectUser(user:ScrumMaster): void {
    this.selectedUser = user;
    this.avatarLink = this.selectedUser != null ? this.getAvatar(this.selectedUser.name) : "#"
    this.selectedTeam = null;
  }

  selectTeam(team:Team) {
    this.selectedTeam = team;
  }

  addNewTeam(teamName:string) {
    if (this.selectedUser == null) {
      return;
    }
    let team = new Team(-1, teamName,[]);
    this.selectedUser.addTeam(team)
    this.newTeamName = ""
  }

  addNewBoard(newBoardName:string, newBoardActiveFrom:string, newBoardActiveTo:string) {
    if (this.selectedUser == null || this.selectedTeam == null){
      return;
    }
    let board = new Board(-1, newBoardName, newBoardActiveFrom, newBoardActiveTo, "", true);
    this.selectedTeam?.addBoard(board)
  }

}
