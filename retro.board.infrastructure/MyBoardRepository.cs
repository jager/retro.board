using retro.board.domain;
using retro.board.domain.Administration;

namespace retro.board.infrastructure.sqlite
{
    class MyBoardRepository : BaseRepository, IMyBoards
    {
        public Board[] FindBy(string owner)
        {
            throw new System.NotImplementedException();
        }

        public Board LoadBoard(BoardKey key)
        {
            throw new System.NotImplementedException();
        }

        public void SaveBoard(Board board)
        {
            throw new System.NotImplementedException();
        }
    }
}
