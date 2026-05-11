namespace Api.Features.Prontuarios.Dto;

public record class ReadDto(
    int Id,
    int PacienteId,
    int MedicoId,
    DateTime DataRegistro,
    string DescricaoClinica,
    string TratamentoPrescrito
);
