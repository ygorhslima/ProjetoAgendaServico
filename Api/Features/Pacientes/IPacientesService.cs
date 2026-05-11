using System;
using Api.Features.Pacientes.Dto;

namespace Api.Features.Pacientes;

public interface IPacientesService
{
    Task<IEnumerable<ReadDto>> GetAllPacientesAsync();
    Task<ReadDto> GetPacienteByIdAsync(int Id);
    Task<ReadDto> CreatePacienteAsync(CreateDto dto);
    Task<bool> UpdatePacienteAsync(int Id, UpdateDto dto);
    Task<bool> DeletePacienteAsync(int Id);
}
