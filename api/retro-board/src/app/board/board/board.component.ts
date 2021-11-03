import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Board } from 'src/app/admin/models/Board';
import { Lane, Sticker } from 'src/app/admin/models/Lane';
import { environment } from 'src/environments/environment';
import { faCheck, faMinus, faEllipsisV, faMinusCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular }  from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})


export class BoardComponent implements OnInit {

  appName:string = environment.appHtmlName

  retrospectionBoard!: Board;
  lanesAmount: number = this.retrospectionBoard ? this.retrospectionBoard.lanes.length : 0;
  canAddLanes: boolean = false;
  showLanes: boolean = true;
  editedLane!: Lane | null;


  checkIcon = faCheck;
  removeStickerIcon = faMinus;
  menuIcon = faEllipsisV;
  removeLaneIcon = faMinusCircle;
  heartIcon = faHeart;
  heartRegular = faHeartRegular;



  constructor()
  {
  }

  ngOnInit(): void {
    let lanes = [
      new Lane("co nie wyszło", []),
      new Lane("co poszło dobrze", []),
      new Lane("do zmian", []),
    ]
    this.retrospectionBoard = new Board(1, "retro test", "2021-10-28 10:00:00", "2021-10-28 10:00:00", "tokenizer", true, lanes);
    this.canAddLanes = this.retrospectionBoard && this.retrospectionBoard.canAddLanes;
    this.showLanes = this.retrospectionBoard && this.retrospectionBoard.lanes.length > 0;
  }

  addSticker(lane:Lane, comment:string) {
    if (comment && lane) {
      let sticker = new Sticker(comment);
      this.retrospectionBoard.addStickerToLane(sticker, lane);
    }
  }

  addLane(laneTitle:string) {
    if (laneTitle && this.retrospectionBoard.canAddLanes) {
      let lane = new Lane(laneTitle, []);
      this.retrospectionBoard.addLane(lane);
      this.canAddLanes = this.retrospectionBoard && this.retrospectionBoard.canAddLanes;
    }
  }

  removeSticker(sticker: Sticker) {
    if (sticker) {
      this.retrospectionBoard.removeStickerFromLane(sticker);
    }
  }

  removeLane(lane: Lane) {
    if (lane) {
      this.retrospectionBoard.removeLane(lane);
      this.canAddLanes = this.retrospectionBoard && this.retrospectionBoard.canAddLanes;
    }
  }

  addLike(sticker: Sticker) {
    if (sticker) {
      this.retrospectionBoard.addLike(sticker);
    }
  }

  editLaneTitleModeOn(lane: Lane) {
    this.editedLane = lane;
  }

  editLaneTitleModeOff(lane: Lane, event: any) {
    this.editedLane = null;
    this.retrospectionBoard.updateLaneName(lane, event.target.value);
  }

  isCurrentLaneEdited(lane: Lane): boolean {
    return this.editedLane != null && this.editedLane == lane;
  }

}
