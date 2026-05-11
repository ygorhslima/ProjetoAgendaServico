namespace Api.Features.Pacientes.Dto;

record class CreateDto(
    int Id,
    string Nome,
    string Cpf,
    string Nascimento,
    string Telefone,
    string? Convenio
);
