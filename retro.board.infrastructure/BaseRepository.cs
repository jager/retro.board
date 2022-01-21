using Microsoft.Data.Sqlite;

namespace retro.board.infrastructure.sqlite
{
    public class BaseRepository : IBaseRepository
    {
        private readonly string _databaseName;
        public BaseRepository(string databaseName)
        {
            _databaseName = databaseName;
        }

        public BaseRepository() { }

        public SqliteConnection Connection
        {
            get
            {
                string databaseName = !string.IsNullOrEmpty(_databaseName)
                    ? _databaseName
                    : "retro.board";
                return new SqliteConnection($"Data Source={databaseName}");
            }
        }
    }
}
