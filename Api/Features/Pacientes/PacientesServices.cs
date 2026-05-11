using System;
using Api.Data;
using Api.Features.Pacientes;
using Api.Features.Pacientes.Dto;
using Microsoft.EntityFrameworkCore;

namespace Api.Features.Pacientes;

public class PacientesServices(ClinicaContext dbContext) : IPacientesService
{
    public async Task<ReadDto> CreatePacienteAsync(CreateDto dto)
    {
        var paciente = dto.ToCreateDto();
        dbContext.Pacientes.Add(paciente);
        await dbContext.SaveChangesAsync();
        return paciente.ToReadDto();
    }

    public async Task<bool> DeletePacienteAsync(int Id)
    {
        var rowsAffected = await dbContext.Pacientes.Where(p => p.Id == Id).ExecuteDeleteAsync();
        return rowsAffected > 0;
    }

    public async Task<IEnumerable<ReadDto>> GetAllPacientesAsync()
    {
        return await dbContext.Pacientes
            .Select(p => p.ToReadDto())
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<ReadDto> GetPacienteByIdAsync(int Id)
    {
        return await dbContext.Pacientes
            .Where(p => p.Id == Id)
            .Select(p => p.ToDetailsDto())
            .FirstOrDefaultAsync();
    }

    public async Task<bool> UpdatePacienteAsync(int Id, UpdateDto dto)
    {
        var existingPaciente = await dbContext.Pacientes.FindAsync(Id);
        if (existingPaciente is null) return false;
        existingPaciente.ToUpdateDto(dto);
        await dbContext.SaveChangesAsync();
        return true;
    }
}
