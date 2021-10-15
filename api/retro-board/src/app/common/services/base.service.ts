import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../admin/services/auth.service';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
export class BaseService {
  protected baseUrl:string = environment.baseUrl;
  protected options:any;

  constructor(private http: HttpClient, private authService:AuthService) {

  }

  public post<T>(url:string, data:any) {
    return this.getClient()
               .post<T>(url, data)
               .pipe(catchError(this.handleError));
  }

  public get<T>(url:string) {
    return this.getClient()
               .get<T>(url)
               .pipe(catchError(this.handleError));
  }

  private getClient(): HttpClient {
    this.setOptions();
    return this.http;
  }

  private setOptions() {
    this.options = {}

    //set Bearer: token
    if (this.authService.isAuthenticated()) {
      this.setBeareerToken(localStorage.getItem('token') as string);
    }
  }

  private setBeareerToken(bearerToken: string) {
    this.options = {
      headers: { "Authentication" : bearerToken }
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
