using Microsoft.Data.Sqlite;

namespace retro.board.infrastructure.sqlite
{
    public interface IBaseRepository
    {
        SqliteConnection Connection { get; }
    }
}
