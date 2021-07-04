using System;
using retro.board.domain.Framework;

namespace retro.board.domain.RetroBoard
{
    public class CardContent : ValueObject<string>
    {
        private static int _maxSize = 200;
        private CardContent(string value) : base(value)
        {
        }

        public static CardContent Create(string content)
        {
            if (content.Length > _maxSize)
                throw new BusinessException($"Dopuszczalna długość zawartości kartki to {_maxSize} została przekroczona o {content.Length - _maxSize}!");

            return new CardContent(content);
        }
    }
}
