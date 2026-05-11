using System;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Internal;

namespace Api.Data;

public static class DataExtensions
{
    public static void MigrateDb(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var DbContext = scope.ServiceProvider.GetRequiredService<ClinicaContext>();
        DbContext.Database.Migrate();
    }
    public static void AddClinicaDb(this WebApplicationBuilder builder)
    {
        var connString = builder.Configuration.GetConnectionString("");
        var serverVersion = ServerVersion.AutoDetect(connString);
        builder.Services.AddDbContext<ClinicaContext>(options => options.UseMySql(connString, serverVersion));
    }
}
