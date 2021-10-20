import { Team } from "./Team";
import { UserRole } from "./UserRole";

export class ScrumMaster {
  constructor(public id:number, public login:string, public name:string, public role:UserRole, public teams:Team[], public email: string) {}


  addTeam(team:Team) {
    this.teams.push(team);
  }
}
