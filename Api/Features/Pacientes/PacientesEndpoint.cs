using System;
using Api.Features.Pacientes.Dto;

namespace Api.Features.Pacientes;

public static class PacientesEndpoint
{
    public static void MapPacientesEndpoint(this WebApplication app)
    {
        var group = app.MapGroup("/api/pacientes");

        group.MapGet("/", async (IPacientesService service) =>
        {
            var pacientes = await service.GetAllPacientesAsync();
            return Results.Ok(pacientes);
        });

        group.MapGet("/{Id}", async (int Id, IPacientesService service) =>
        {
            var paciente = await service.GetPacienteByIdAsync(Id);
            if (paciente is null) return Results.NotFound();
            return Results.Ok(paciente);
        });

        group.MapPost("/", async (CreateDto newPaciente, IPacientesService service) =>
        {
            var createdPaciente = await service.CreatePacienteAsync(newPaciente);
            return Results.Ok(createdPaciente);
        });

        group.MapPut("/{Id}", async (int Id, UpdateDto updatedPaciente, IPacientesService service) =>
        {
            var success = await service.UpdatePacienteAsync(Id, updatedPaciente);
            return success ? Results.NoContent() : Results.NotFound();
        });

        group.MapDelete("/{Id}", async (int Id, IPacientesService service) =>
        {
            var success = await service.DeletePacienteAsync(Id);
            return success ? Results.NoContent() : Results.NotFound();
        });
    }
}
