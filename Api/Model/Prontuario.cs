using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Model;

public class Prontuario
{
    [Key]
    public int Id { get; set; }

    public int PacienteId { get; set; }
    [ForeignKey("PacienteId")]
    public Paciente Paciente { get; set; }

    public int MedicoId { get; set; }
    [ForeignKey("MedicoId")]
    public Medico Medico { get; set; }

    [Required]
    public DateTime DataRegistro { get; set; }

    [Required]
    public string DescricaoClinica { get; set; }

    public string TratamentoPrescrito { get; set; }
}