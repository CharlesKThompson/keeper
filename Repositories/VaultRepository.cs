using System.Collections.Generic;
using System.Data;
using Dapper;
using keeper.Models;

namespace keeper.Repositories
{
    public class VaultRepository
    {
        private readonly IDbConnection _db;

        public VaultRepository(IDbConnection db)
        {
            _db = db;
        }

        //Create a Vault
        public Vault Add(Vault vault)
        {
            int id = _db.ExecuteScalar<int>($@"
            INSERT INTO vaults (
                userId,
                name,
                description
                ) VALUES (@UserId, @Name, @Description )", vault);
            vault.Id = id;
            return vault;
        }

        //Find all Vaults
        public IEnumerable<Vault> GetVaults()
        {
            return _db.Query<Vault>("SELECT * FROM vaults");
        }

        //Find one Vault
        public Vault GetById(int id)
        {
            return _db.QueryFirstOrDefault<Vault>(@"
            SELECT * FROM vaults WHERE id = @Id", id);
        }

        //Delete one Vault
        public string Delete(int id)
        {
            _db.ExecuteScalar("DELETE FROM vaults WHERE id = @Id", new {id=id});
            return "Successfully deleted";
        }
    }
}