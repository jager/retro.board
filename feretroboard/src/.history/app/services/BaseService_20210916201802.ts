import { environment } from '../environments/environemnt.ts';
export class BaseService {
  private baseUrl:string = environment.baseUrl;
}
