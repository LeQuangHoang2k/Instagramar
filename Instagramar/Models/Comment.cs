using System;
using System.Collections.Generic;

namespace Instagramar.Models;

public partial class Comment
{
    public int Id { get; set; }

    public string? Comment1 { get; set; }

    public string? Status { get; set; }

    public int? CommentFromUser { get; set; }

    public int? PostId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<Like> Likes { get; set; } = new List<Like>();

    public virtual Post? Post { get; set; }
}
