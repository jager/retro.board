import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/admin/models/Board';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  appName:string = environment.appHtmlName

  retrospectionBoard!: Board;
  lanesAmount: number = this.retrospectionBoard.lanes.length;



  constructor() { }

  ngOnInit(): void {

  }

}
