using Instagramar;
using Instagramar.Models;
using Microsoft.EntityFrameworkCore;
// using System.Data.Entity;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();






var app = builder.Build();

app.UseSwagger();                       // if(app.Environment.IsDevelopment())
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.MapControllers();
app.UseAuthentication();
app.UseAuthorization();
app.UseCors(x => x.AllowAnyHeader()
.AllowAnyMethod()
.WithOrigins("http://localhost:3000"));



// create new blog posts
// using (var context = new BlogDataContext())
// {
//     var john = new Author { Name = "John T. hoàng", Email = "john@example.com" };
//     context.Authors.Add(john);

//     var jane = new Author { Name = "Jane Q. Hacker", Email = "jane@example.com" };
//     context.Authors.Add(jane);

//     var post = new Post { Title = "Hello World", Content = "I wrote an app using EF Core!", Author = jane };
//     context.Posts.Add(post);
//     post = new Post { Title = "How to use EF Core", Content = "It's pretty easy", Author = john };
//     context.Posts.Add(post);

//     context.SaveChanges();
// }

// // query the blog posts, using a join between the two tables
// using (var context = new BlogDataContext())
// {
//     var posts = context.Posts
//         .Include(p => p.Author)
//         .ToList();

//     foreach (var post in posts)
//     {
//         Console.WriteLine($"{post.Title} by {post.Author.Name}");
//     }
// }

// //getID
// using (var context = new BlogDataContext())
// {
//     var user = context.Authors.Find(10);
//     if (user == null) throw new KeyNotFoundException("User not found");

//     Console.WriteLine("get id 1");

//     Console.WriteLine($"{user.Name}");
// }


// //update user
// using (var context = new BlogDataContext())
// {
//     var id = 10;



//     // check
//     var user = context.Authors.Find(id);
//     if (user == null) throw new KeyNotFoundException("User not found");



//     // update
//     context.ChangeTracker.Clear();
//     context.Authors.Update(new Author { AuthorId = id, Name = "updated2", Email = "updated2@example.com2" });
//     context.SaveChanges();



//     // log
//     Console.WriteLine($"updated 2 {user.AuthorId} {user.Name} {user.Email}");
// }

// //delete user
// using (var context = new BlogDataContext())
// {
//     var id = 26;




//     // //check
//     var user = context.Authors.Find(id);
//     if (user == null) throw new KeyNotFoundException("User not found");




//     // delete
//     context.ChangeTracker.Clear();
//     context.Authors.Remove(new Author { AuthorId = 28 });
//     context.SaveChanges();
// }






app.Run();


public class BlogDataContext : System.Data.Entity.DbContext
{
    static readonly string connectionString = "Server=mysql-asp8;Port=3306;Database=instagramar;User=root;Password=instagramar;";

    public DbSet<Author> Authors { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<User> Users { get; set; }


    protected void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
        Console.WriteLine("0 - connect success");
    }
}

public class Post
{
    public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public Author Author { get; set; }
}

public class Author
{
    public int AuthorId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }

    public List<Post> Posts { get; set; }
}
