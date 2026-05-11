using System;
using Api.Features.Agendamentos.Dto;
using Api.Model;

namespace Api.Features.Agendamentos;

public static class AgendamentosMapping
{
    public static ReadDto ToReadDto(this Agendamento agendamento)
    {
        return new ReadDto(
            agendamento.Id,
            agendamento.IdPaciente,
            agendamento.IdMedico,
            agendamento.Especialidade,
            agendamento.DataEHora,
            agendamento.Status
        );
    }
    public static ReadDto ToDetailsDto(this Agendamento agendamento)
    {
        return new ReadDto(
            agendamento.Id,
            agendamento.IdPaciente,
            agendamento.IdMedico,
            agendamento.Especialidade,
            agendamento.DataEHora,
            agendamento.Status
        );
    }
    public static Agendamento ToCreateDto(this CreateDto dto)
    {
        return new Agendamento
        {
            IdPaciente = dto.IdPaciente,
            IdMedico = dto.IdMedico,
            Especialidade = dto.Especialidade,
            DataEHora = dto.DataEHora,
            Status = dto.Status,
            Paciente = null!,
            Medico = null!
        };
    }
    public static Agendamento ToUpdateDto(this Agendamento existingAgendamento, UpdateDto dto)
    {
        existingAgendamento.Id = dto.Id;
        existingAgendamento.IdPaciente = dto.IdPaciente;
        existingAgendamento.IdMedico = dto.IdMedico;
        existingAgendamento.Especialidade = dto.Especialidade;
        existingAgendamento.DataEHora = dto.DataEHora;
        existingAgendamento.Status = dto.Status;
        return existingAgendamento;
    }
}
