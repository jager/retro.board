import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/admin/models/Board';
import { Lane, Sticker } from 'src/app/admin/models/Lane';
import { environment } from 'src/environments/environment';
import { faCheck, faMinus, faEllipsisV, faMinusCircle, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular }  from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { BoardRequest, IBoard } from '../model/board.request';
import { BoardFactory } from '../model/board.factory';
import { BoardService } from '../services/board-service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  showLanes: boolean = false;
  editedLane!: Lane | null;


  checkIcon = faCheck;
  removeStickerIcon = faMinus;
  menuIcon = faEllipsisV;
  removeLaneIcon = faMinusCircle;
  heartIcon = faHeart;
  heartRegular = faHeartRegular;

  private subscription!: Subscription
  private currentBoardId!: string | null;



  constructor(private apollo: Apollo,
              private boardFactory:BoardFactory,
              private boardService: BoardService,
              private route: ActivatedRoute)
  {
  }

  ngOnInit(): void {

    /*
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params != null)
        this.currentBoardId = params.get('boardId');
    })
    */
    this.currentBoardId = this.route.snapshot.paramMap.get('boardId');

    this.boardService.initialize();
    this.boardService.Notification.subscribe(d => {
        this.retrospectionBoard = this.boardFactory.create(JSON.parse(d));
        this.can();
      });
    this.subscription = this.apollo
      .watchQuery<IBoard>({
        query: gql`
        {
          loadBoard {
            name
            activeFrom
            activeTo
            active
            token
            lanes {
              name
              stickers {
                description
              }
            }
          }
        }
        `
      }).valueChanges
        .subscribe(result => {
              this.retrospectionBoard = this.boardFactory.create(result.data.loadBoard);
              this.can();
          });

  }

  onDestroy() {
    this.subscription.unsubscribe();
  }

  addSticker(lane:Lane, comment:string) {
    if (comment && lane) {
      let sticker = new Sticker(comment);
      this.retrospectionBoard.addStickerToLane(sticker, lane);
      this.changeEvent();
    }
  }

  addLane(laneTitle:string) {
    if (laneTitle && this.retrospectionBoard.canAddLanes) {
      let lane = new Lane(laneTitle, []);
      this.retrospectionBoard.addLane(lane);
      this.changeEvent();
    }
  }

  removeSticker(sticker: Sticker) {
    if (sticker) {
      this.retrospectionBoard.removeStickerFromLane(sticker);
      this.changeEvent();
    }
  }

  removeLane(lane: Lane) {
    if (lane) {
      this.retrospectionBoard.removeLane(lane);
      this.changeEvent();
    }
  }

  addLike(sticker: Sticker) {
    if (sticker) {
      this.retrospectionBoard.addLike(sticker);
      this.changeEvent();
    }
  }

  editLaneTitleModeOn(lane: Lane) {
    this.editedLane = lane;
  }

  editLaneTitleModeOff(lane: Lane, event: any) {
    this.editedLane = null;
    this.retrospectionBoard.updateLaneName(lane, event.target.value);
    this.changeEvent();
  }

  isCurrentLaneEdited(lane: Lane): boolean {
    return this.editedLane != null && this.editedLane == lane;
  }

  changeEvent() {
    this.boardService.send(JSON.stringify(this.retrospectionBoard));
    this.can();
  }

  can() {
    this.lanesAmount = this.retrospectionBoard ? this.retrospectionBoard.lanes.length : 0;
    this.canAddLanes = this.retrospectionBoard && this.retrospectionBoard.canAddLanes;
    this.showLanes = this.retrospectionBoard && this.retrospectionBoard.lanes.length > 0;
  }
}
