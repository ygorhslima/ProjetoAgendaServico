using Api.Model;

namespace Api.Features.Agendamentos.Dto;

public record class ReadDto
(
    int Id,
    int IdPaciente,
    int IdMedico,
    DateTime DataEHora,
    StatusAgendamento Status
);