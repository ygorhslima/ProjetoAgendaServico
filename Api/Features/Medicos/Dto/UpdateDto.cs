namespace Api.Features.Medicos.Dto;

public record class UpdateDto
(
    int Id,
    string Nome,
    string Crm,
    string Especialidade,
    string Telefone,
    string Email
);