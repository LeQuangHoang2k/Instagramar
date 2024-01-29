using System;
using System.Collections.Generic;

namespace Instagramar.Models;

public partial class Follow
{
    public int? FollowingUserId { get; set; }

    public int? FollowedUserId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual User? FollowedUser { get; set; }

    public virtual User? FollowingUser { get; set; }
}
