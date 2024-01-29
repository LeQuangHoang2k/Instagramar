# Instagramar
## https deploy
### pre-build Docker:
    dotnet dev-certs https -ep cert\.aspnet\https\aspnetapp.pfx -p password
    dotnet dev-certs https --trust
### build:
    docker compose up -d --build
### run migration:
    docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]
    example:  docker exec asp-development dotnet ef migrations add InitialCreate
    
    init shell: docker exec -it asp-development sh

## C# command:
### migration:
    dotnet ef migrations add InitialCreate
    dotnet ef database update
### build:
    dotnet publish "./Instagramar.csproj" -c Release -o ./publish 


### document:
    CRUD:
    https://github.com/cornflourblue/dotnet-6-crud-api/blob/master/Controllers/UsersController.cs

    Route .NET:
    https://learn.microsoft.com/en-us/aspnet/core/mvc/controllers/routing?view=aspnetcore-6.0

### BUG:    
    The type or namespace name 'DbContext' could not be found [closed]
    https://stackoverflow.com/questions/5741109/the-type-or-namespace-name-dbcontext-could-not-be-found

    error CS0115: 'BlogDataContext.OnConfiguring(DbContextOptionsBuilder)': no suitable method found to override [/app/Instagramar.csproj]
    https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/cs0115

### .Net Set Up A-Z
### CRUD
    https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0&tabs=visual-studio-code
    
    dotnet new webapi --use-controllers -o TodoApi
    cd TodoApi
    dotnet add package Microsoft.EntityFrameworkCore.InMemory
    code -r ../TodoApi
    dotnet dev-certs https --trust
    dotnet run --launch-profile https

    dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
    dotnet add package Microsoft.EntityFrameworkCore.Design
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    dotnet add package Microsoft.EntityFrameworkCore.Tools
    dotnet tool uninstall -g dotnet-aspnet-codegenerator
    dotnet tool install -g dotnet-aspnet-codegenerator
    dotnet tool update -g dotnet-aspnet-codegenerator

    dotnet aspnet-codegenerator controller -name TodoItemsController -async -api -m TodoItem -dc TodoContext -outDir Controllers




### AutoMapper
    https://www.c-sharpcorner.com/article/integrate-automapper-in-net-core-web-api2/ - https://stackoverflow.com/questions/40275195/how-to-set-up-automapper-in-asp-net-core
    
    dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection


### CONNECT DB
    https://jasonwatmore.com/post/2022/03/25/net-6-connect-to-mysql-database-with-entity-framework-core

    dotnet add package Pomelo.EntityFrameworkCore.MySql --version 8.0.0-beta.2

    dotnet ef migrations add InitialCreate
    dotnet ef database update

    docker exec asp-development dotnet ef migrations add InitialCreate --context InstagramarContext
    docker exec asp-development dotnet ef migrations remove InitialCreate --context InstagramarContext
    docker exec asp-development dotnet ef database update --context InstagramarContext

### Scafford
    https://dottutorials.net/scaffold-mysql-dotnet-core-database-first-approach/

    docker exec asp-development dotnet ef dbcontext scaffold "Server=mysql-asp8;Port=3306;Database=instagramar;User=root;Password=instagramar;" Pomelo.EntityFrameworkCore.MySql -o Models -f

### Custom Header
    https://code-maze.com/how-to-extract-custom-header-in-asp-net-core-web-api/

