using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using static System.Net.Mime.MediaTypeNames;

namespace keeper.Models
{
    public class User
    {
        [Key]
        [Required]
        public string Id { get; set; }

        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(4)]
        public string Password { get; set; }
    }

    public class UserCreateModel
    {
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(4)]
        public string Password { get; set; }
    }

    public class UserLoginModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

       //public image
    }

    public class UserReturnModel
    {
        [Required]
        public string Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string Name { get; set; }

        //setting up session tokens AKA Claims (auto login)
        public ClaimsPrincipal SetClaims()
        {
            var claims = new List<Claim>{
        new Claim(ClaimTypes.Email, Email),
        new Claim(ClaimTypes.Name, Id)
      };
            var userIdentity = new ClaimsIdentity(claims, "login");
            var principal = new ClaimsPrincipal(userIdentity);
            return principal;
        }
    }
    public class PublicUserModel
    {
        public string Name { get; set; }
    }

    public class ChangeUserPasswordModel
    {
        public string Id { get; set; }
        [MaxLength(255), EmailAddress]
        public string Email { get; set; }
        [Required, MinLength(4)]
        public string OldPassword { get; set; }
        [Required, MinLength(4)]
        public string NewPassword { get; set; }
    }
    

}