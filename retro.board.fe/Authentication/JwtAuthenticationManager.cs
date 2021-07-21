using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace retro.board.be.Authentication
{
    public class JwtAuthenticationManager : IJwtAuthenticationManager
    {
        private readonly IDictionary<string, string> _users = new Dictionary<string, string>()
        { {"test", "pass" } };
        private readonly string _key;

        public JwtAuthenticationManager(string key)
        {
            _key = key;
        }
        public string Authenticate(string username, string password)
        {
            if (!_users.Any(u => u.Key.ToLower() == username.ToLower() && u.Value == password))
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes(_key);
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, username)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
