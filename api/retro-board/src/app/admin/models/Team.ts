import { Board } from "./Board";

export class Team
{
  constructor(public id:number, public name:string, public boards:Board[]) {}

  addBoard(board:Board) {
    this.boards.push(board);
  }
}
