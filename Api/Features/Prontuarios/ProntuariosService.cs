using System;
using Api.Data;
using Api.Features.Prontuarios.Dto;
using Microsoft.EntityFrameworkCore;

namespace Api.Features.Prontuarios;

public class ProntuariosService(ClinicaContext dbContext) : IProntuariosServices
{
    public async Task<ReadDto> CreateProntuarioAsync(CreateDto dto)
    {
        var prontuario = dto.ToCreateDto();
        dbContext.Prontuarios.Add(prontuario);
        await dbContext.SaveChangesAsync();
        return prontuario.ToReadDto();
    }

    public async Task<bool> DeleteProntuarioAsync(int Id)
    {
        var rowsAffected = await dbContext.Prontuarios.Where(p => p.Id == Id).ExecuteDeleteAsync();
        return rowsAffected > 0;
    }

    public async Task<IEnumerable<ReadDto>> GetAllProntuariosAsync()
    {
        return await dbContext.Prontuarios
           .Select(p => p.ToReadDto())
           .AsNoTracking()
           .ToListAsync();
    }

    public async Task<ReadDto> GetProntuarioByIdAsync(int Id)
    {
        return await dbContext.Prontuarios
           .Where(p => p.Id == Id)
           .Select(p => p.ToDetailsDto())
           .FirstOrDefaultAsync();
    }

    public async Task<bool> UpdateProntuarioAsync(int Id, UpdateDto dto)
    {
        var existingProntuario = await dbContext.Prontuarios.FindAsync(Id);
        if (existingProntuario is null) return false;
        existingProntuario.ToUpdateDto(dto);
        await dbContext.SaveChangesAsync();
        return true;
    }
}
