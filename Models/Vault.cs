using System.ComponentModel.DataAnnotations;

namespace keeper.Models
{
    public class Vault : IPostItem
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public string Description { get; set; }
        
        public string UserId { get; set; }
    }
}