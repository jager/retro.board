namespace retro.board.be.Authentication
{
    public interface IJwtAuthenticationManager
    {
        string Authenticate(string username, string password);
    }
}
