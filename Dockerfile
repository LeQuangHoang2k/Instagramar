# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Instagramar.csproj", "."]
RUN dotnet restore "./././Instagramar.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "./Instagramar.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Instagramar.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Instagramar.dll"]

# # https://hub.docker.com/_/microsoft-dotnet
# FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
# WORKDIR /source

# # copy csproj and restore as distinct layers
# COPY *.sln .
# COPY *.csproj .
# RUN dotnet restore

# # copy everything else and build app
# COPY . .
# RUN dotnet publish -c release -o /app --no-restore

# # final stage/image
# FROM mcr.microsoft.com/dotnet/aspnet:8.0
# WORKDIR /app
# COPY --from=build /app .
# ENTRYPOINT ["dotnet", "Instagramar.dll"]