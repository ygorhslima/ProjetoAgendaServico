using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Model;

public enum StatusAgendamento
{
    Agendado = 1,
    Concluido = 2,
    Cancelado = 3
}

public class Agendamento
{
    [Key]
    public int Id { get; set; }

    [Required]
    public int IdPaciente { get; set; }

    [ForeignKey("IdPaciente")]
    public required Paciente Paciente { get; set; }

    [Required]
    public int IdMedico { get; set; }

    [ForeignKey("IdMedico")]
    public required Medico Medico { get; set; }

    [Required]
    public required string Especialidade { get; set; }
    
    public DateTime DataEHora { get; set; }

    public StatusAgendamento Status { get; set; }
}
