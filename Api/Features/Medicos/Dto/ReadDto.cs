namespace Api.Features.Medicos.Dto;

public record class ReadDto(
    int Id,
    string Nome,
    string Crm,
    string Especialidade,
    string Telefone,
    string Email 
);