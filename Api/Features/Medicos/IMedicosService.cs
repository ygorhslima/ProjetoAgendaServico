using System;
using Api.Features.Medicos.Dto;

namespace Api.Features.Medicos;

public interface IMedicosService
{
    Task<IEnumerable<ReadDto>> GetAllMedicosAsync();
    Task<ReadDto> GetMedicoByIdAsync(int Id);
    Task<ReadDto> CreateMedicoAsync(CreateDto dto);
    Task<bool> UpdateMedicoAsync(int Id, UpdateDto dto);
    Task<bool> DeleteMedicoAsync(int Id);
}
