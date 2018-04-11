using System.Collections.Generic;
using System.Data;
using Dapper;
using keeper.Models;

namespace keeper.Repositories
{
    public class KeepRepository
    {
        private readonly IDbConnection _db;

        public KeepRepository(IDbConnection db)
        {
            _db = db;
        }

        //Create a Keep

        public Keep Add(Keep keep)
        {
            int id = _db.ExecuteScalar<int>(@"
            INSERT INTO keeps (
                name,
                description,
                userId
            ) VALUES (@Name, @Description, @UserId)", keep);
            keep.Id = id;
            return keep;
        }

        //Find all Keeps

        public IEnumerable<Keep> GetKeeps()
        {
            return _db.Query<Keep>("SELECT * FROM keeps");
        }

        //Find one Keep

        public Keep GetById(int id)
        {
            return _db.QueryFirstOrDefault<Keep>(@"
            SELECT * FROM keeps WHERE id = @id", id);
        }

        //Delete one Keep
        public Keep Delete(int id)
        {
            return _db.QueryFirstOrDefault<Keep>(@"
            DELETE * FROM keeps WHERE id = @id", id);
        }
    }
}