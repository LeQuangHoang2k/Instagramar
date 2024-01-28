// using Microsoft.EntityFrameworkCore;

// namespace TodoApi.Models;

// public class TodoContext : DbContext
// {
//     public TodoContext(DbContextOptions<TodoContext> options)
//         : base(options)
//     {
//     }

//     public DbSet<TodoItem> TodoItems { get; set; } = null!;
// }

//using Microsoft.EntityFrameworkCore;

//namespace Instagramar.Models;

//public class TodoContext : DbContext
//{
//    public TodoContext(DbContextOptions<TodoContext> options)
//        : base(options)
//    {
//    }

//    public DbSet<TodoItem> TodoItems { get; set; } = null!;
//}

//using Microsoft.EntityFrameworkCore;

//namespace Instagramar.Models;

//public class TodoContext : DbContext
//{
//    static readonly string connectionString = "Server=mysql-asp8;Port=3306;Database=instagramar;User=root;Password=instagramar;";
//    public DbSet<TodoItem> TodoItems { get; set; } = null!;
//    public DbSet<User> Users { get; set; } = null!;
//    public TodoContext(DbContextOptions<TodoContext> options)
//        : base(options)
//    {
//    }

//    protected void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//    {
//        optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
//        Console.WriteLine("0 - connect success");
//    }
//}


using Instagramar.Models;
using Microsoft.EntityFrameworkCore;

public class TodoContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public TodoContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to mysql with connection string from app settings
        var connectionString = Configuration.GetConnectionString("WebApiDatabase");
        options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
    }

    public DbSet<User> Users { get; set; }
    public DbSet<TodoItem> TodoItems { get; set; } = null!;
}