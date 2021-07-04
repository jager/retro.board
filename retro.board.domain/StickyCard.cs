using System;
using retro.board.domain.Administration;
using retro.board.domain.RetroBoard;

namespace retro.board.domain
{
    public class StickyCard
    {
        public CardId Id { get; }
        public CardContent Content { get; }
        public Member Author { get; }
        public CardColor Color { get; }

        public StickyCard(CardId id)
        {
            Id = id;
        }
    }
}
