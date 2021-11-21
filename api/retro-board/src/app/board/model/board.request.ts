export class BoardRequest {
  id!: number;
  name!: string;
  activeFrom!: string;
  activeTo!: string;
  token!: string;
  active!:boolean;
  lanes!: LaneRequest[];
}

export class LaneRequest {
  name!: string;
  stickers!: StickerRequest[];
}

export class StickerRequest {
  description!: string;
  likes!: number;
}

export interface IBoard {
  loadBoard : BoardRequest
}
