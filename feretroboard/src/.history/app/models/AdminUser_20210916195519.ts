export class AdminUser {
  public EmailAddress: string;
  public Password: string;
  constructor(emailAddress: string, password: string) {
    this.EmailAddress = emailAddress;
    this.Password = password;
  }
}
