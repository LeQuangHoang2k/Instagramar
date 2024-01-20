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