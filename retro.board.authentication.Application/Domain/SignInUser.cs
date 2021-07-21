namespace retro.board.authentication.Application.Domain
{
    public class SignInUser
    {
        public Login Login { get; }
        public Password Password { get; }

        public SignInUser(Login login, Password password)
        {
            Login = login;
            Password = password;
        }
    }
}
