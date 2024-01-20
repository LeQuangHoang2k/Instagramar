using Microsoft.EntityFrameworkCore;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000");
                      });
}); //Add Cors


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())    // Configure the HTTP request pipeline.
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(MyAllowSpecificOrigins);    //Add CORS

app.UseAuthorization();

app.MapControllers();

app.Run();


// create new blog posts
using (var context = new BlogDataContext())
{
    var john = new Author { Name = "John T. Author", Email = "john@example.com" };
    context.Authors.Add(john);

    var jane = new Author { Name = "Jane Q. Hacker", Email = "jane@example.com" };
    context.Authors.Add(jane);

    var post = new Post { Title = "Hello World", Content = "I wrote an app using EF Core!", Author = jane };
    context.Posts.Add(post);
    post = new Post { Title = "How to use EF Core", Content = "It's pretty easy", Author = john };
    context.Posts.Add(post);

    context.SaveChanges();
}

// query the blog posts, using a join between the two tables
using (var context = new BlogDataContext())
{
    var posts = context.Posts
        .Include(p => p.Author)
        .ToList();

    foreach (var post in posts)
    {
        Console.WriteLine($"{post.Title} by {post.Author.Name}");
    }
}


public class BlogDataContext : DbContext
{
    static readonly string connectionString = "Server=mysql-asp8;Port=3306;Database=instagramar;User=root;Password=instagramar;";
    
    public DbSet<Author> Authors { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
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
