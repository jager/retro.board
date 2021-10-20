import { environment } from 'src/environments/environment';
import {Md5} from 'ts-md5/dist/md5';//'./../../../node-modules/angular-md5/angular-md5.min.js';
export class Board {
  url:string = environment.boardUrl + this.token;
  constructor(public id:number,
              public name:string,
              public activeFrom:string,
              public activeTo:string,
              public token:string,
              public active:boolean)
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
}
