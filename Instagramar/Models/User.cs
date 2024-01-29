using System;
using System.Collections.Generic;

namespace Instagramar.Models;

public partial class User
{
    public int Id { get; set; }

    public string? Username { get; set; }

    public string? HashPassword { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public string? Image { get; set; }

    public string? Nickname { get; set; }

    public string? Name { get; set; }

    public string? Role { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<Post> Posts { get; set; } = new List<Post>();
}
