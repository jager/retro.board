using retro.board.domain.Administration;
using retro.board.domain.RetroBoard;

namespace retro.board.domain
{
    public class StickyCard
    {
        public CardId Id { get; }
        public CardContent Content { get; private set; }
        public Member Author { get; }
        public CardColor Color { get; private set; }

        public StickyCard(CardId id, CardContent content, Member author, CardColor color)
        {
            Id = id;
            Content = content;
            Author = author;
            Color = color;
        }


        public void Update(StickyCard card)
        {
            Content = card.Content;
            Color = card.Color;
        }

    }
}
