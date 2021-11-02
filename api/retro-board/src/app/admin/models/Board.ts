import { environment } from 'src/environments/environment';
import {Md5} from 'ts-md5/dist/md5';
import { Lane, Sticker } from './Lane';
export class Board {
  url:string = environment.boardUrl + this.token;

  private maxLaneNumber: number = environment.maxLaneNumber;
  canAddLanes: boolean = this.lanes.length < this.maxLaneNumber;

  constructor(public id:number,
              public name:string,
              public activeFrom:string,
              public activeTo:string,
              public token:string,
              public active:boolean,
              public lanes:Lane[] = [])
              {
                this.createToken();
              }

  private createToken():void {
    const md5 = new Md5();
    const currentTime = new Date();
    this.token = this.token == ""
                ? md5.appendStr(this.name + this.activeFrom + this.activeTo + currentTime.getMilliseconds().toString()).end().toString()
                : this.token;
  }

  public addLane(lane: Lane) : void {
    if (this.lanes.length < this.maxLaneNumber)
      this.lanes.push(lane);

    this.canAddLanes = this.lanes.length < this.maxLaneNumber
  }

  public removeLane(lane: Lane) : void {
    if (lane)
      this.lanes.splice(this.lanes.indexOf(lane), 1);

    this.canAddLanes = this.lanes.length < this.maxLaneNumber
  }

  public moveSticker(sticker: Sticker, destinationLane: Lane) : void {
    let sourceLane = this.findLaneBy(sticker);
    if (!destinationLane || sourceLane == destinationLane)
      return;

    sourceLane.removeSticker(sticker);
    destinationLane.addSticker(sticker);
  }

  public addStickerToLane(sticker: Sticker, lane: Lane) : void {
    let indexOfLane = this.lanes.indexOf(lane);
    if (indexOfLane === -1)
      return;

    this.lanes[indexOfLane].addSticker(sticker);
  }

  public removeStickerFromLane(sticker: Sticker) {
    let lane = this.findLaneBy(sticker);
    if (lane)
      lane.removeSticker(sticker);
  }

  private findLaneBy(sticker: Sticker) : Lane {
    return this.lanes.filter(x => x.stickers.indexOf(sticker) !== -1)[0]
  }
}
