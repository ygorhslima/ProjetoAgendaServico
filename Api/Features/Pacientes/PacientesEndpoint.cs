using System;

namespace Api.Features.Pacientes;

public static class PacientesEndpoint
{
    public static void MapPacientesEndpoint(this WebApplication app)
    {
        var group = app.MapGroup("/api/pacientes");
        group.MapGet("/", async () => { });
        group.MapGet("/{Id}", async () => { });
        group.MapPost("/", async () => { });
        group.MapPut("/{Id}", async () => { });
        group.MapDelete("/{Id}", async () => { });
    }
}
