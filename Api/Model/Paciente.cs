using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Model;

public class Paciente
{
    [Key]
    public int Id { get; set; }

    [Required]
    public required string Nome { get; set; }

    [Required]
    public required string Cpf { get; set; }

    [Required]
    public required string Nascimento { get; set; }

    [Required]
    public required string Telefone { get; set; }

    public string? Convenio { get; set; }
}
