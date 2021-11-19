import { Board } from "./Board";
import { Sprint } from "./sprintreview/Sprint";

export class Team
{
  constructor(public id:number, public name:string, public boards:Board[], public sprints:Sprint[] = []) {}

  addBoard(board:Board) {
    this.boards.push(board);
  }
}
