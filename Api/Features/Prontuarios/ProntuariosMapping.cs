using System;
using Api.Features.Prontuarios.Dto;
using Api.Model;

namespace Api.Features.Prontuarios;

public static class ProntuariosMapping
{
    public static ReadDto ToReadDto(this Prontuario prontuario)
    {
        return new ReadDto(
            prontuario.Id,
            prontuario.PacienteId,
            prontuario.MedicoId,
            prontuario.DataRegistro,
            prontuario.DescricaoClinica,
            prontuario.TratamentoPrescrito
        );
    }
    public static ReadDto ToDetailsDto(this Prontuario prontuario)
    {
        return new ReadDto(
            prontuario.Id,
            prontuario.PacienteId,
            prontuario.MedicoId,
            prontuario.DataRegistro,
            prontuario.DescricaoClinica,
            prontuario.TratamentoPrescrito
        );
    }
    public static Prontuario ToCreateDto(this CreateDto dto)
    {
        return new Prontuario
        {
            PacienteId = dto.PacienteId,
            Paciente = null!,
            MedicoId = dto.MedicoId,
            Medico = null!,
            DataRegistro = dto.DataRegistro,
            DescricaoClinica = dto.DescricaoClinica,
            TratamentoPrescrito = dto.TratamentoPrescrito
        };
    }
    public static Prontuario ToUpdateDto(this Prontuario existingProntuario, UpdateDto dto)
    {
        existingProntuario.Id = dto.Id;
        existingProntuario.PacienteId = dto.PacienteId;
        existingProntuario.MedicoId = dto.MedicoId;
        existingProntuario.DataRegistro = dto.DataRegistro;
        existingProntuario.DescricaoClinica = dto.DescricaoClinica;
        existingProntuario.TratamentoPrescrito = dto.TratamentoPrescrito;
        return existingProntuario;
    }
}
