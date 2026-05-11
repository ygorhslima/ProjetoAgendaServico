using System;
using Api.Features.Medicos.Dto;
using Api.Model;

namespace Api.Features.Medicos;

public static class MedicosMapping
{
    public static ReadDto ToReadDto(this Medico medico)
    {
        return new ReadDto(
            medico.Id,
            medico.Nome,
            medico.Crm,
            medico.Especialidade,
            medico.Telefone,
            medico.Email
        );
    }
    public static ReadDto ToDetailsDto(this Medico medico)
    {
        return new ReadDto(
            medico.Id,
            medico.Nome,
            medico.Crm,
            medico.Especialidade,
            medico.Telefone,
            medico.Email
        );
    }
    public static Medico ToCreateDto(this CreateDto dto)
    {
        return new Medico
        {
            Nome = dto.Nome,
            Crm = dto.Crm,
            Especialidade = dto.Especialidade,
            Telefone = dto.Telefone,
            Email = dto.Email
        };
    }
    public static Medico ToUpdateDto(this Medico existingMedico, UpdateDto dto)
    {
        existingMedico.Id = dto.Id;
        existingMedico.Nome = dto.Nome;
        existingMedico.Crm = dto.Crm;
        existingMedico.Especialidade = dto.Especialidade;
        existingMedico.Telefone = dto.Telefone;
        existingMedico.Email = dto.Email;
        return existingMedico;
    }
}
