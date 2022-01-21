namespace retro.board.domain
{
    public class BoardKey : ValueObject<string>
    {
        public BoardKey(string id) : base(id)
        {
        }
    }
}
