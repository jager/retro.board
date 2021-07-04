using System;
using System.Collections.Generic;

namespace retro.board.domain
{
    public class Zone
    {
        public ZoneName Name { get; }
        public ZoneColor Color { get; }
        public IList<StickyCard> Cards { get; private set; }

        public Zone(ZoneName name, ZoneColor color, IList<StickyCard> cards)
        {
            Name = name;
            Color = color;
            Cards = cards;
        }

        public void AddCard(StickyCard card) => Cards.Add(card);
    }
}
