using System.Collections.Generic;

namespace retro.board.domain
{
    public class Lane
    {
        public LaneName Name { get; }
        public Sticker[] Stickers { get; private set; }

        public Lane(LaneName name, Sticker[] stickers)
        {
            Name = name;
            Stickers = stickers;
        }

       
    }
}
