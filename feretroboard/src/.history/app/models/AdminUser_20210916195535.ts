export class AdminUser {
  public EmailAddress: string;
  public Password: string;
  constructor(emailAddress: string, password: string, private Token) {
    this.EmailAddress = emailAddress;
    this.Password = password;
  }
}
