using System;
using Api.Data;
using Api.Features.Agendamentos.Dto;
using Microsoft.EntityFrameworkCore;

namespace Api.Features.Agendamentos;

public class AgendamentosServices(ClinicaContext dbContext) : IAgendamentosService
{
    public async Task<ReadDto> CreateAgendamentoAsync(CreateDto dto)
    {
        var agendamento = dto.ToCreateDto();
        dbContext.Agendamentos.Add(agendamento);
        await dbContext.SaveChangesAsync();
        return agendamento.ToReadDto();
    }

    public async Task<bool> DeleteAgendamentoAsync(int Id)
    {
        var rowsAffected = await dbContext.Agendamentos.Where(m => m.Id == Id).ExecuteDeleteAsync();
        return rowsAffected > 0;

    }

    public async Task<IEnumerable<ReadDto>> GetAllAgendamentosAsync()
    {
        return await dbContext.Agendamentos
            .Select(m => m.ToReadDto())
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<ReadDto> GetAgendamentoByIdAsync(int Id)
    {
        return await dbContext.Agendamentos.Where(a => a.Id == Id)
        .Select(a => a.ToDetailsDto())
        .FirstOrDefaultAsync();
    }

    public async Task<bool> UpdateAgendamentoAsync(int Id, UpdateDto dto)
    {
        var existingAgendamento = await dbContext.Agendamentos.FindAsync(Id);
        if (existingAgendamento is null) return false;
        existingAgendamento.ToUpdateDto(dto);
        await dbContext.SaveChangesAsync();
        return true;
    }
}
