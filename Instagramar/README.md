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