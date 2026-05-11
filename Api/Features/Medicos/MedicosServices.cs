using System;
using Api.Data;
using Api.Features.Medicos.Dto;
using Microsoft.EntityFrameworkCore;

namespace Api.Features.Medicos;

public class MedicosServices(ClinicaContext dbContext) : IMedicosService
{
    public async Task<ReadDto> CreateMedicoAsync(CreateDto dto)
    {
        var medico = dto.ToCreateDto();
        dbContext.Medicos.Add(medico);
        await dbContext.SaveChangesAsync();

        return medico.ToReadDto();
    }

    public async Task<bool> DeleteMedicoAsync(int Id)
    {
        var rowsAffected = await dbContext.Medicos.Where(m => m.Id == Id).ExecuteDeleteAsync();
        return rowsAffected > 0;
    }

    public async Task<IEnumerable<ReadDto>> GetAllMedicosAsync()
    {
        return await dbContext.Medicos
            .Select(m => m.ToReadDto())
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<ReadDto> GetMedicoByIdAsync(int Id)
    {
        return await dbContext.Medicos
        .Where(m => m.Id == Id)
        .Select(m => m.ToDetailsDto())
        .FirstOrDefaultAsync();
    }

    public async Task<bool> UpdateMedicoAsync(int Id, UpdateDto dto)
    {
        var existingMedico = await dbContext.Medicos.FindAsync(Id);
        if (existingMedico is null) return false;
        existingMedico.ToUpdateDto(dto);
        dbContext.Medicos.Update(existingMedico);
        await dbContext.SaveChangesAsync();
        return true;
    }
}
