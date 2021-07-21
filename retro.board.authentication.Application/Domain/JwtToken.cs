using System;

namespace retro.board.authentication.Application.Domain
{
    public class JwtToken
    {
        public string Value { get; }

        private JwtToken(string value)
        {
            Value = value;
        }

        public static JwtToken Create(string token)
        {
            return !String.IsNullOrEmpty(token)
                ? new JwtToken(token)
                : null;
        }
    }
}
