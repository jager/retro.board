export class AdminUser {
  public EmailAddress: string;
  public Password: string;
  constructor(private emailAddress: string, private password: string, private Token:string = null) {
    this.EmailAddress = emailAddress;
    this.Password = password;
  }

  public hasToken
}
