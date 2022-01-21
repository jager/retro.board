namespace retro.board.domain.Administration
{
    public class Team
    {
        public TeamName Name { get; }

        public Team(TeamName name)
        {
            Name = name;
        }
    }
}
