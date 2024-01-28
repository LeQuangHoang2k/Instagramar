using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Instagramar.Models.Request.User
{
    public class SignUp
    {
        [Required]
        [StringLength(10, ErrorMessage = "Book name is required")]
        public string Username { get; set; }
        [Required]
        [StringLength(10)]
        public string Password { get; set; }
        [Required]
        [StringLength(10)]
        public string Name { get; set; }
        [Required]
        [StringLength(10)]
        public string Phone { get; set; }
        [Required]
        [StringLength(10)]
        public string Email { get; set; }
    }
}
