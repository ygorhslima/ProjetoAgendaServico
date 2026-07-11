using System;
using Microsoft.AspNetCore.Builder; // Adicionado para estender WebApplication e WebApplicationBuilder
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Data;

public static class DataExtensions
{
    public static void MigrateDb(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<ClinicaContext>();
        dbContext.Database.Migrate();
    }

    public static void AddClinicaDb(this WebApplicationBuilder builder)
    {
        var connString = builder.Configuration.GetConnectionString("Clinica");
        
        // Alterado de UseNpgsql para UseMySql
        builder.Services.AddDbContext<ClinicaContext>(options => 
            options.UseMySql(connString, ServerVersion.AutoDetect(connString)));
    }
}
