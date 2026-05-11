using System;
using Api.Features.Pacientes.Dto;
using Api.Model;

namespace Api.Features.Pacientes;

public static class PacientesMapping
{
    public static ReadDto ToReadDto(this Paciente Paciente)
    {
        return new ReadDto(
            Paciente.Id,
            Paciente.Nome,
            Paciente.Cpf,
            Paciente.Nascimento,
            Paciente.Telefone,
            Paciente.Convenio
        );
    }
    public static ReadDto ToDetailsDto(this Paciente Paciente)
    {
        return new ReadDto(
            Paciente.Id,
            Paciente.Nome,
            Paciente.Cpf,
            Paciente.Nascimento,
            Paciente.Telefone,
            Paciente.Convenio
        );
    }
    internal static Paciente ToCreateDto(this CreateDto dto)
    {
        return new Paciente
        {
            Nome = dto.Nome,
            Cpf = dto.Cpf,
            Nascimento = dto.Nascimento,
            Telefone = dto.Telefone,
            Convenio = dto.Convenio
        };
    }
    public static Paciente ToUpdateDto(this Paciente existingPaciente, UpdateDto dto)
    {
        existingPaciente.Nome = dto.Nome;
        existingPaciente.Cpf = dto.Cpf;
        existingPaciente.Nascimento = dto.Nascimento;
        existingPaciente.Telefone = dto.Telefone;
        existingPaciente.Convenio = dto.Convenio;
        return existingPaciente;
    }
}
