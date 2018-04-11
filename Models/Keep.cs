
namespace keeper.Models
{
    public class Keep : IPostItem
    {
        public string UserId { get; set; }
        
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }

    public class VaultKeep
    {
        public string VaultId { get; set; }

        public string Keep { get; set; }

        public string Username { get; set; }

        public string Description { get; set; }

    }


}