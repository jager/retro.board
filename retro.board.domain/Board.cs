using retro.board.domain.Administration;
using System;

namespace retro.board.domain
{
    public class Board
    {
        public BoardId Id { get; }
        public BoardKey Key { get; }
        public Lane[] Lanes { get; }
        public bool Active { get; }
        public DateTime ActiveFrom { get; }
        public DateTime  ActiveTo { get; }
        public Team Team { get; }
        
    }
}
