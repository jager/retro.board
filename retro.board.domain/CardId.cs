using System;
namespace retro.board.domain
{
    public class CardId : Id<string>
    {
        public CardId(string value) : base(value)
        {
        }
    }
}
