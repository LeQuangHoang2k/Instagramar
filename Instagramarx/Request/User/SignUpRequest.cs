namespace Instagramar.Models.User;

using System.ComponentModel.DataAnnotations;

public class SignUpRequest
{
    [Required]
    public string Username { get; set; }

    [Required]
    [MinLength(10)]
    public string Password { get; set; }

    // [Required]
    // [Compare("Password")]
    // public string ConfirmPassword { get; set; }

    // [Required]
    // public string FirstName { get; set; }

    // [Required]
    // public string LastName { get; set; }

    // [Required]
    // [EnumDataType(typeof(Role))]
    // public string Role { get; set; }

    // [Required]
    // [EmailAddress]
    // public string Email { get; set; }
}