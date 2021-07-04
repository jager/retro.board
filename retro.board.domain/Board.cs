using System.Collections.Generic;
using System.Linq;
using retro.board.domain.Administration;
using retro.board.domain.Framework;
using retro.board.domain.RetroBoard;

namespace retro.board.domain
{
    public class Board
    {
        public BoardId Id { get; }
        public IList<Zone> Zones { get; }
        public IList<Member> Members { get; }
        public Member Owner { get; }


        public Member[] AllMembers()
        {
            //var allMembers = (IList<Member>).Members.ToArray().Clone();
            //allMembers.ToList().Add(Owner);
            //return AllMembers.ToArray();
            return null;
        }
        public Board(BoardId id, IList<Member> members, Member owner, IList<Zone> zones)
        {
            Id = id;
            Members = members;
            Owner = owner;
            Zones = zones;
        }

        public void AddZone(Zone zone)
        {
            if (Zones.Any(z => z.Name == zone.Name))
                throw new BusinessException($"Nie możesz utworzyć obszaru o nazwie {zone.Name.Value}, ponieważ taki obszar istnieje.");

            Zones.Add(zone);
        }

        public void AddCard(ZoneName name, StickyCard card) 
        {
            var zone = Zones.FirstOrDefault(x => x.Name == name);
            if (zone == null)
                throw new BusinessException($"Wybrany obszar o nazwie {name.Value}, nie istnieje.");

            zone.AddCard(card);
        }

        public void RemoveCard(CardId cardId, IBoardWithCards boardWithCards) 
        {
            var cards = Zones.Select(x => x.Cards).ToList();
            if (cards == null || !cards.Any())
                throw new BusinessException("Tablica nie zawiera kartek!");

            var card = cards.FirstOrDefault(x => x.Id == cardId);

            if (card == null)
                throw new BusinessException("Podana kartka nie istnieje!");

            boardWithCards.RemoveCard(card);
        }

        public void RemoveZone()
        {

        }

        public void EditCard()
        {

        }
    }
}
