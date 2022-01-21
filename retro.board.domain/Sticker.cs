using retro.board.domain.Administration;
using retro.board.domain.RetroBoard;

namespace retro.board.domain
{
    public class Sticker
    {
        public CardContent Content { get; }
        public LikesAmount Likes { get; }

        public Sticker(CardContent content, LikesAmount likes)
        {
            Content = content;
            Likes = likes;
        }
    }
}
