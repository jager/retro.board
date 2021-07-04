using System;
using retro.board.domain.Framework;

namespace retro.board.domain
{
    public class Color : ValueObject<string>
    {
        public Color(string color) : base(color)
        {
            if (Value.Length != 7 || Value[0] != '#')
                throw new BusinessException($"Niepoprawny format coloru: {Value}");
        }
    }
}
