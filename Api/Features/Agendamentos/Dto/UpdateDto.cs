using Api.Model;

namespace Api.Features.Agendamentos.Dto;

public record class UpdateDto
(
    int Id,
    int IdPaciente,
    int IdMedico,
    string Especialidade,
    DateTime DataEHora,
    StatusAgendamento Status
);