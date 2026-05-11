namespace Api.Features.Pacientes.Dto;

public record class UpdateDto(
    int Id,
    string Nome,
    string Cpf,
    string Nascimento,
    string Telefone,
    string? Convenio
);