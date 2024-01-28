// var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.

// builder.Services.AddControllers();
// // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// var app = builder.Build();

// // Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.UseSwagger();
//     app.UseSwaggerUI();
// }

// app.UseHttpsRedirection();

// app.UseAuthorization();

// app.MapControllers();

// app.Run();

//using Microsoft.EntityFrameworkCore;
//using Instagramar.Models;

//var builder = WebApplication.CreateBuilder(args);

//builder.Services.AddControllers();
//builder.Services.AddDbContext<TodoContext>(opt =>
//    opt.UseInMemoryDatabase("TodoList"));
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

//var app = builder.Build();

//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseHttpsRedirection();

//app.UseAuthorization();

//app.MapControllers();

//app.Run();

using Microsoft.EntityFrameworkCore;
using Instagramar.Models;
using Instagramar.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddAutoMapper(typeof(AutoMapperProfile));

builder.Services.AddTransient<TodoContext>();

//builder.Services.AddDbContext<TodoContext>(opt =>
//    opt.UseInMemoryDatabase("TodoList"));

//// Replace with your connection string.
//var connectionString = "server=localhost;user=root;password=1234;database=ef";

//// Replace with your server version and type.
//// Use 'MariaDbServerVersion' for MariaDB.
//// Alternatively, use 'ServerVersion.AutoDetect(connectionString)'.
//// For common usages, see pull request #1233.
//var serverVersion = new MySqlServerVersion(new Version(8, 0, 29));

//// Replace 'YourDbContext' with the name of your own DbContext derived class.
//builder.Services.AddDbContext<TodoContext>(
//    dbContextOptions => dbContextOptions
//        .UseMySql(connectionString, serverVersion)
//        // The following three options help with debugging, but should
//        // be changed or removed for production.
//        .LogTo(Console.WriteLine, LogLevel.Information)
//        .EnableSensitiveDataLogging()
//        .EnableDetailedErrors()
//);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();