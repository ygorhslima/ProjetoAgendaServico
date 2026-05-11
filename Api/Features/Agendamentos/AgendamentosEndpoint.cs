using System;
using Api.Features.Agendamentos.Dto;

namespace Api.Features.Agendamentos;

public static class AgendamentosEndpoint
{
    public static void MapAgendamentosEndpoint(this WebApplication app)
    {
        var group = app.MapGroup("/api/agendamentos");

        group.MapGet("/", async (IAgendamentosService service) =>
        {
            var agendamentos = await service.GetAllAgendamentosAsync();
            return Results.Ok(agendamentos);
        });

        group.MapGet("/{Id}", async (int Id, IAgendamentosService service) =>
        {
            var agendamento = await service.GetAgendamentoByIdAsync(Id);
            if (agendamento is null) return Results.NotFound();
            return Results.Ok(agendamento);
        });

        group.MapPost("/", async (CreateDto newAgendamento, IAgendamentosService service) =>
        {
            var createdAgendamento = await service.CreateAgendamentoAsync(newAgendamento);
            return Results.Ok(createdAgendamento);
        });
        
        group.MapPut("/{Id}", async (int Id, UpdateDto updatedAgendamento, IAgendamentosService service) =>
        {
            var success = await service.UpdateAgendamentoAsync(Id, updatedAgendamento);
            return success ? Results.NoContent() : Results.NotFound();
        });

        group.MapDelete("/{Id}", async (int Id, IAgendamentosService service) =>
        {
            var success = await service.DeleteAgendamentoAsync(Id);
            return success ? Results.NoContent() : Results.NotFound();
        });
    }
}
