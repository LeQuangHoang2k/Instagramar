#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/sdk:8.0
WORKDIR /app
COPY . .
EXPOSE 8080
EXPOSE 8081

RUN dotnet new console -o EFCoreMySQL --force

RUN cd EFCoreMySQL && dotnet add package Pomelo.EntityFrameworkCore.MySql

RUN dotnet tool install --global dotnet-ef && \
    dotnet add package Microsoft.EntityFrameworkCore.Design
    
ENV PATH $PATH:/root/.dotnet/tools


# ENTRYPOINT [ "dotnet", "run"]
ENTRYPOINT [ "dotnet", "run", "--launch-profile", "https" ]
# ENTRYPOINT [ "dotnet", "watch", "run", "--launch-profile", "https" ].