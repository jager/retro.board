using System;
using System.Collections.Generic;
using System.Linq;
using retro.board.domain.Framework;
using retro.board.domain.RetroBoard;

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

        public Zone Update(ZoneName zoneName)
        {
            return new Zone(zoneName, Color, Cards);
        }

        public void AddCard(StickyCard card, BoardId boardId, IBoardWithCards boardWithCards)
        {
            Cards.Add(card);
            boardWithCards.AddCard(card, Name, boardId);
        }

        public void UpdateCard(StickyCard card, BoardId boardId, IBoardWithCards boardWithCards)
        {
            var originalCard = FindCard(card);
            originalCard.Update(card);
            boardWithCards.UpdateCard(originalCard, Name, boardId);
        }

        public StickyCard FindCard(StickyCard card)
        {
            var originalCard = Cards.FirstOrDefault(x => x.Id == card.Id);
            if (originalCard == null)
                throw new BusinessException("Podana kartka nie istnieje!");

            return originalCard;
        }
    }
}
