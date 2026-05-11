using System;
using Api.Features.Agendamentos.Dto;

namespace Api.Features.Agendamentos;

public interface IAgendamentosService
{
    Task<IEnumerable<ReadDto>> GetAllAgendamentosAsync();
    Task<ReadDto> GetAgendamentoByIdAsync(int Id);
    Task<ReadDto> CreateAgendamentoAsync(CreateDto dto);
    Task<bool> UpdateAgendamentoAsync(int Id, UpdateDto dto);
    Task<bool> DeleteAgendamentoAsync(int Id);
}
