namespace retro.board.domain.Administration
{
    public interface IMyBoards
    {
        Board LoadBoard(BoardId boardId);
        Board[] FindBoardsByOwner(Member owner);
        void SaveBoard(Board board);
    }
}