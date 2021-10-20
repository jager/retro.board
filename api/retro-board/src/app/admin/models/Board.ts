export class Board {
  constructor(public id:number,
              public name:string,
              public activeFrom:string,
              public activeTo:string,
              public token:string,
              public active:boolean) { }
}
