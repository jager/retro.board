using Dapper;
using retro.board.domain.Framework;
using System.Collections.Generic;
using System.Linq;

namespace retro.board.infrastructure.sqlite
{
    public class DatabaseBootstraper : IDatabaseBootstraper
    {
        private readonly IBaseRepository _repository;

        private readonly IDictionary<string, string> _tables = new Dictionary<string, string>()
        {
            { "RetroBoard", "select name from sqlite_master where type = 'table' and name = 'RetroBoard'" }
        };

        private readonly IDictionary<string, string> _tablesCreate = new Dictionary<string, string>()
        {
            { "RetroBoard", "create table RetroBoard (Key varchar(100) NotNull, Active Boolean, ActiveFrom timestamp, ActiveTo timestamp, Team varchar(50) NotNull, Owner varchar(100) NotNull, Value Text NotNull)" }
        };

        public DatabaseBootstraper(IBaseRepository repository)
        {
            _repository = repository;
        }

        public void Setup()
        {
            if (_tables.Count == 0)
                throw new BusinessException("Brak tabel w konfiguracji.");

            if (_tables.Count != _tablesCreate.Count)
                throw new BusinessException($"Liczba table {_tables.Count} i konfiguracji: {_tablesCreate.Count} nie zgadzają się.");

            foreach (var table in _tables)
            {
                if (!TableExists(table.Key))
                    CreateTable(table.Key);
            }
        }

        private bool TableExists(string tableName)
        {
            if (!_tables.ContainsKey(tableName))
                throw new BusinessException($"Podana tabela: {tableName} nie istnieje w konfiguracji.");

            if (!_tablesCreate.ContainsKey(tableName))
                throw new BusinessException($"Podana tabela: {tableName} nie istnieje w konfiguracji i nie mogę jej stworzyć.");

            var table = _repository.Connection.Query(_tables[tableName])
                                              .FirstOrDefault();

            if (!string.IsNullOrEmpty(table) && table == tableName)
                return true;

            return false;
        }

        private void CreateTable(string tableName)
        {
            _repository.Connection.Execute(_tablesCreate[tableName]);
        }
    }
}
