import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
export class BaseService {
  protected baseUrl:string = environment.baseUrl;
  

  constructor(private http: HttpClient) {

  }

  public getClient(): HttpClient {
    return this.http;
  }
}
