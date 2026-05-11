using System;
using Api.Features.Prontuarios.Dto;

namespace Api.Features.Prontuarios;

public interface IProntuariosServices
{
    public Task<IEnumerable<ReadDto>> GetAllProntuariosAsync();
    public Task<ReadDto> GetProntuarioByIdAsync(int Id);
    public Task<ReadDto> CreateProntuarioAsync(CreateDto dto);
    public Task<bool> UpdateProntuarioAsync(int Id, UpdateDto dto);
    public Task<bool> DeleteProntuarioAsync(int Id);
}
