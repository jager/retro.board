import { Injectable } from "@angular/core";
import { Board } from "src/app/admin/models/Board";
import { Lane, Sticker } from "src/app/admin/models/Lane";
import { BoardRequest } from "./board.request";

@Injectable({
  providedIn: 'root'
})
export class BoardFactory {
  create(request: BoardRequest): Board {
    if (request == null)
      return new Board(0,"","","","", false,[]);

    let lanes:Lane[] = [];
    if (request.lanes != null && request.lanes.length > 0) {
      lanes = request.lanes.map(l => {
        let stickers:Sticker[] = [];
        if (l.stickers != null && l.stickers.length > 0) {
          stickers = l.stickers.map(s => { return new Sticker(s.description, s.likes) });
        }
        return new Lane(l.name, stickers);
      })
    }

    return new Board(request.id, request.name, request.activeFrom, request.activeTo, request.token, request.active, lanes);
  }

}
