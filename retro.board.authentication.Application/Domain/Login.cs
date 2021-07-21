using System;

namespace retro.board.authentication.Application.Domain
{
    public class Login
    {
        public string Value { get; }

        public Login(string value)
        {
            if (String.IsNullOrEmpty(value))
                throw new ArgumentNullException("Login cannot be empty or null!");

            Value = value;
        }
    }
}
