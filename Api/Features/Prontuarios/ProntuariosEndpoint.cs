using System;
using Api.Features.Prontuarios.Dto;
namespace Api.Features.Prontuarios;

public static class ProntuariosEndpoint
{
    public static void MapProntuariosEndpoint(this WebApplication app)
    {
        var group = app.MapGroup("/api/prontuarios");

        group.MapGet("/", async (IProntuariosServices service) =>
        {
            var prontuarios = await service.GetAllProntuariosAsync();
            return Results.Ok(prontuarios);
        });

        group.MapGet("/{Id}", async (int Id, IProntuariosServices service) =>
        {
            var prontuario = await service.GetProntuarioByIdAsync(Id);
            if (prontuario is null) return Results.NotFound();
            return Results.Ok(prontuario);
        });

        group.MapPost("/", async (CreateDto newProntuario, IProntuariosServices service) =>
        {
            var createdProntuario = await service.CreateProntuarioAsync(newProntuario);

        });
        
        group.MapPut("/{Id}", async (int Id, UpdateDto updatedProntuario, IProntuariosServices service) =>
        {
            var success = await service.UpdateProntuarioAsync(Id, updatedProntuario);
            return success ? Results.NoContent() : Results.NotFound();
        });

        group.MapDelete("/{Id}", async (int Id, IProntuariosServices service) =>
        {
            var arrowsAffected = await service.DeleteProntuarioAsync(Id);
            return arrowsAffected ? Results.NoContent() : Results.NotFound();
        });
    }
}
