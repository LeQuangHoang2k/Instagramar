using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Instagramar.Models.Request.User
{
    public class Forgot
    {
        [Required]
        [StringLength(10, ErrorMessage = "Book name is required")]
        public string Username { get; set; }
        [Required]
        [StringLength(10)]
        public string NewPassword { get; set; }
    }
}
