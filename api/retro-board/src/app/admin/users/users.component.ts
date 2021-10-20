import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Board } from '../models/Board';
import { ScrumMaster } from '../models/ScrumMaster';
import { Team } from '../models/Team';
import { UserManagementService } from '../services/user-management.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser!:ScrumMaster;
  selectedTeam!:Team | null;
  scrumMasters:ScrumMaster[] = []
  avatarLink:string = "#"
  newTeamName:string = ""
  newBoardName:string = ""
  newBoardActiveTo:string = ""
  newBoardActiveFrom:string = ""

  constructor(private userManagement: UserManagementService)
  {
    this.scrumMasters = this.userManagement.findAll();
  }

  ngOnInit(): void {
  }

  selectUser(user:ScrumMaster): void {
    this.selectedUser = user;
    this.avatarLink = this.selectedUser != null ? environment.avatarLink + this.selectedUser.name.replace(' ', '+') : "#"
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
