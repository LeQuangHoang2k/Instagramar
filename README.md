# Instagramar
## https deploy
### pre-build Docker:
    dotnet dev-certs https -ep cert\.aspnet\https\aspnetapp.pfx -p password
    dotnet dev-certs https --trust
### build:
    docker compose up -d --build
