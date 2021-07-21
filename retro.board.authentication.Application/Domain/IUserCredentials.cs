namespace retro.board.authentication.Application.Domain
{
    public interface IUserCredentials
    {
        SignInUser LoadBy(Login login);
    }
}
