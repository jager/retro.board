export class AdminUser {

  constructor(private emailAddress: string, private password: string, private token:string = null) {

  }

  public hasToken():boolean {
    return this.token != null && this.token != "";
  }

  public 
}
