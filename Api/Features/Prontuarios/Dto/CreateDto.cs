using Api.Model;

namespace Api.Features.Prontuarios.Dto;

public record class CreateDto(
    int Id,
    int PacienteId,
    int MedicoId,
    DateTime DataRegistro,
    string DescricaoClinica,
    string TratamentoPrescrito
);