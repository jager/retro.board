export interface IBoard {
  id : number;
  name : string;
  activeFrom : string;
  activeTo : string;
  token : string;
  active :boolean;
  lanes : ILane[];
}

export interface ILane {
  name : string;
  stickers : ISticker[];
}

export interface ISticker {
  description : string;
  likes : number;
}
