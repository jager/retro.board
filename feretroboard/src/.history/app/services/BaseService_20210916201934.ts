import { environment } from '../environments/environment';
export class BaseService {
  protected baseUrl:string = environment.baseUrl;
}
