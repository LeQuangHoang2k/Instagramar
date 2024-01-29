using System;
using System.Collections.Generic;

namespace Instagramar.Models;

public partial class Post
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public string? Video { get; set; }

    /// <summary>
    /// Content of the post
    /// </summary>
    public string? Body { get; set; }

    public int? AuthorId { get; set; }

    public string? Status { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual User? Author { get; set; }

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

    public virtual ICollection<Like> Likes { get; set; } = new List<Like>();
}
