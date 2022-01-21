namespace retro.board.domain.Administration
{
    public interface IMyBoards
    {
        Board LoadBoard(BoardKey key);        
        void SaveBoard(Board board);
        Board[] FindBy(string owner);
    }
}