import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { IBoard } from '../model/board.interface';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private apollo: Apollo) { }

  public loadBoard() : any { //Observable<ApolloQueryResult<IBoard>> {
    return null;
    /*
    return this.apollo
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
      })
      .valueChanges;
      */
  }
}
