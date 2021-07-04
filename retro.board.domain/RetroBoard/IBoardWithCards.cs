using System;
namespace retro.board.domain.RetroBoard
{
    public interface IBoardWithCards
    {
        void RemoveCard(StickyCard card);
        void AddCard(StickyCard card, ZoneName zoneName, BoardId boardId);
        void UpdateCard(StickyCard card, ZoneName zoneName, BoardId boardId);
    }
}
