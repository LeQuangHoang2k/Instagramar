using System;
using System.Collections.Generic;

namespace Instagramar.Models;

public partial class Like
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? LikeToId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Comment? LikeTo { get; set; }

    public virtual Post? LikeToNavigation { get; set; }
}
