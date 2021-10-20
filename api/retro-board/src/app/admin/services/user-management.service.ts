import { Injectable } from '@angular/core';
import { Board } from '../models/Board';
import { ScrumMaster } from '../models/ScrumMaster';
import { Team } from '../models/Team';
import { UserRole } from '../models/UserRole';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor() { }

  findAll():ScrumMaster[] {
    let boards = [
      new Board(3,"Sprint: PLS-12 05.10-19.10", "19.10.2021 13:00", "19.10.2021 13:15", "HUBhhasouh((^234hff7jah72", true)
    ];
    return [
      new ScrumMaster(1, "scrum1", "Maciek Maciejewski", new UserRole("Administrator systemu", "admin"), [

      ]),
      new ScrumMaster(1, "scrum2", "Grzegorz Kwasibrzuch", new UserRole("Scrum master", "scrummaster"), [
        new Team(14, "Freewolni (Z69)", []),
        new Team(21, "Hoży Doktorzy (Z88)", []),
      ]),
      new ScrumMaster(1, "scrum3", "Marcin Wariowaty", new UserRole("Scrum master", "scrummaster"), [
        new Team(142, "Gadżeciaże.pl", []),
        new Team(213, "Jedi (Z1)", []),
        new Team(243, "Clones (Z12)", []),
        new Team(29, "Jar Jar Binksy (Z1)", []),
      ]),
      new ScrumMaster(1, "scrum4", "Karol Kolczyński", new UserRole("Scrum master", "scrummaster"), [
        new Team(1, "Sprintersi (Z23)", boards),
        new Team(13, "Kapłani Metryczek (Z3)", []),
      ]),
      new ScrumMaster(1, "scrum5", "Damian Szydełko", new UserRole("Agile coach", "agilecoach"), [
        new Team(1, "Przpustki do bram piekelnych (Z666)", []),
      ]),
    ]
  }
}
