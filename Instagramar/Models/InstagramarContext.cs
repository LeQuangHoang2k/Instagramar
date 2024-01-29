using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace Instagramar.Models;

public partial class InstagramarContext : DbContext
{
    public InstagramarContext()
    {
    }

    public InstagramarContext(DbContextOptions<InstagramarContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Comment> Comments { get; set; }

    public virtual DbSet<Follow> Follows { get; set; }

    public virtual DbSet<Like> Likes { get; set; }

    public virtual DbSet<Post> Posts { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySql("server=mysql-asp8;port=3306;database=instagramar;user=root;password=instagramar", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.3.0-mysql"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Comment>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.HasIndex(e => e.PostId, "PostId");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Comment1)
                .HasMaxLength(255)
                .HasColumnName("Comment");
            entity.Property(e => e.CreatedAt).HasColumnType("timestamp");
            entity.Property(e => e.Status).HasMaxLength(255);
            entity.Property(e => e.UpdatedAt).HasColumnType("timestamp");

            entity.HasOne(d => d.Post).WithMany(p => p.Comments)
                .HasForeignKey(d => d.PostId)
                .HasConstraintName("Comments_ibfk_1");
        });

        modelBuilder.Entity<Follow>(entity =>
        {
            entity.HasNoKey();

            entity.HasIndex(e => e.FollowedUserId, "FollowedUserId");

            entity.HasIndex(e => e.FollowingUserId, "FollowingUserId");

            entity.Property(e => e.CreatedAt).HasColumnType("timestamp");
            entity.Property(e => e.UpdatedAt).HasColumnType("timestamp");

            entity.HasOne(d => d.FollowedUser).WithMany()
                .HasForeignKey(d => d.FollowedUserId)
                .HasConstraintName("Follows_ibfk_2");

            entity.HasOne(d => d.FollowingUser).WithMany()
                .HasForeignKey(d => d.FollowingUserId)
                .HasConstraintName("Follows_ibfk_1");
        });

        modelBuilder.Entity<Like>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.HasIndex(e => e.LikeToId, "LikeToId");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CreatedAt).HasColumnType("timestamp");
            entity.Property(e => e.UpdatedAt).HasColumnType("timestamp");

            entity.HasOne(d => d.LikeTo).WithMany(p => p.Likes)
                .HasForeignKey(d => d.LikeToId)
                .HasConstraintName("Likes_ibfk_1");

            entity.HasOne(d => d.LikeToNavigation).WithMany(p => p.Likes)
                .HasForeignKey(d => d.LikeToId)
                .HasConstraintName("Likes_ibfk_2");
        });

        modelBuilder.Entity<Post>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.HasIndex(e => e.AuthorId, "AuthorId");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Body)
                .HasComment("Content of the post")
                .HasColumnType("text");
            entity.Property(e => e.CreatedAt).HasColumnType("timestamp");
            entity.Property(e => e.Status).HasMaxLength(255);
            entity.Property(e => e.Title).HasMaxLength(255);
            entity.Property(e => e.UpdatedAt).HasColumnType("timestamp");
            entity.Property(e => e.Video).HasMaxLength(255);

            entity.HasOne(d => d.Author).WithMany(p => p.Posts)
                .HasForeignKey(d => d.AuthorId)
                .HasConstraintName("Posts_ibfk_1");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.CreatedAt).HasColumnType("timestamp");
            entity.Property(e => e.Email).HasMaxLength(255);
            entity.Property(e => e.HashPassword).HasMaxLength(255);
            entity.Property(e => e.Image).HasMaxLength(255);
            entity.Property(e => e.Name).HasMaxLength(255);
            entity.Property(e => e.Nickname).HasMaxLength(255);
            entity.Property(e => e.Phone).HasMaxLength(255);
            entity.Property(e => e.Role).HasMaxLength(255);
            entity.Property(e => e.UpdatedAt).HasColumnType("timestamp");
            entity.Property(e => e.Username).HasMaxLength(255);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
