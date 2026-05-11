using System;
using Api.Features.Medicos.Dto;

namespace Api.Features.Medicos;

public static class MedicosEndpoint
{
    public static void MapMedicosEndpoint(this WebApplication app)
    {
        var group = app.MapGroup("/api/medicos");

        group.MapGet("/", async (IMedicosService service) =>
        {
            var medicos = await service.GetAllMedicosAsync();
            return Results.Ok(medicos);
        });

        group.MapGet("/{Id}", async (int Id, IMedicosService service) =>
        {
            var medico = await service.GetMedicoByIdAsync(Id);
            if (medico is null) return Results.NotFound();
            return Results.Ok(medico);
        });

        group.MapPost("/", async (CreateDto newMedico, IMedicosService service) =>
        {
            var createdMedico = await service.CreateMedicoAsync(newMedico);
            return Results.Ok(createdMedico);
        });

        group.MapPut("/{Id}", async (int Id, UpdateDto updatedMedico, IMedicosService service) =>
        {
            var success = await service.UpdateMedicoAsync(Id, updatedMedico);
            return success ? Results.NoContent() : Results.NotFound();
        });

        group.MapDelete("/{Id}", async (int Id, IMedicosService service) =>
        {
            var success = await service.DeleteMedicoAsync(Id);
            return success ? Results.NoContent() : Results.NotFound();
        });
    }
}
