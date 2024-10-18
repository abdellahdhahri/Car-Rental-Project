FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY . .
RUN dotnet restore "carRenral_Backend.csproj"
RUN dotnet build "carRenral_Backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "carRenral_Backend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "carRenral_Backend.dll"]
