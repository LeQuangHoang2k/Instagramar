//namespace Instagramar.Models
//{
//    public class User
//    {
//    }
//}

namespace Instagramar.Models;

public class User
{
    public long Id { get; set; }
    public string Username { get; set; }
    public string HashPassword { get; set; }
    public string? Name { get; set; }
    public string? Phone { get; set; }
    public string? Email { get; set; }
}
