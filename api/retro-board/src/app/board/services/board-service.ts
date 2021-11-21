import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { Observable } from 'rxjs';
import { IBoard } from '../model/board.request';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private hubConnection!: HubConnection | null;
  public Notification: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public initialize(): void {
    this.stopConnection();

    this.hubConnection = new signalR.HubConnectionBuilder()
                                    .withUrl("http://localhost:5000/hubs/board", { })
                                    .configureLogging(signalR.LogLevel.Information)
                                    .build();

    this.hubConnection.on("Notification", (data: any) => {
        console.log("Notification");
        console.log(data);
        this.Notification.emit(data);
    });

    this.hubConnection.start().then((data: any) => {
        console.log('Now connected');
    }).catch((error: any) => {
        console.log('Could not connect ' + error);
        setTimeout(() => this.initialize(), 3000);
    });
  }

  stopConnection() {
      if (this.hubConnection) {
          this.hubConnection.stop();
          this.hubConnection = null;
      }
  }

  send(message:string) {
    if (this.hubConnection) {
      this.hubConnection.invoke("Notification", message);
    }
  }
}
