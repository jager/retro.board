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

        public bool ZoneExists(Zone zone) => Zones.Any(z => z.Name == zone.Name);

        public void AddZone(Zone zone)
        {
            if (ZoneExists(zone))
                throw new BusinessException($"Nie możesz utworzyć obszaru o nazwie {zone.Name.Value}, ponieważ taki obszar istnieje.");

            Zones.Add(zone);
        }

        public void ChangeZoneName(Zone zone, ZoneName newZoneName)
        {
            if (zone.Name != newZoneName)
            {
                var newZone = zone.Update(newZoneName);
                AddZone(newZone);
                RemoveZone(zone.Name);
            }
        }

        public void RemoveZone(ZoneName zoneName)
        {
            var zone = FindZone(zoneName);
            Zones.Remove(zone);
        }

        public void AddCard(ZoneName zoneName, StickyCard card, IBoardWithCards boardWithCards)
        {
            var zone = FindZone(zoneName);
            zone.AddCard(card, Id, boardWithCards);
        }

        public void RemoveCard(StickyCard card, IBoardWithCards boardWithCards)
        {
            var originalCard = FindCard(card);
            boardWithCards.RemoveCard(originalCard);
        }

        public void EditCard(StickyCard card, ZoneName name, IBoardWithCards boardWithCards)
        {
            var zone = FindZone(name);
            zone.UpdateCard(card, Id, boardWithCards);
        }

        public void MoveCard(StickyCard card, ZoneName sourceZoneName, ZoneName destinationZoneName, IBoardWithCards boardWithCards)
        {
            var sourceZone = FindZone(sourceZoneName);
            var destinationZone = FindZone(destinationZoneName);
            boardWithCards.UpdateCard(card, destinationZone.Name, Id);
        }

        private StickyCard FindCard(StickyCard card)
        {
            if (Zones == null || !Zones.Any())
                throw new BusinessException("Tablica nie ma zdefiniowanych obszarów!");

            StickyCard originalCard = null;

            foreach(var zone in Zones)
            {
                originalCard = zone.Cards.Where(x => x.Id == card.Id).FirstOrDefault();
                if (originalCard != null)
                    break;
            }

            if (originalCard == null)
                throw new BusinessException("Podana kartka nie istnieje!");

            return originalCard;
        }

        private Zone FindZone(ZoneName zoneName)
        {
            var zone = Zones.FirstOrDefault(x => x.Name == zoneName);
            if (zone == null)
                throw new BusinessException($"Wybrany obszar o nazwie {zoneName.Value}, nie istnieje.");

            return zone;
        }
    }
}
