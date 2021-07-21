using MediatR;
using retro.board.authentication.Application.Domain;

namespace retro.board.authentication.Application.App.Signin
{
    public class SignInCommand : IRequest<JwtToken>
    {
    }
}
