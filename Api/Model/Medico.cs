using System;
using System.ComponentModel.DataAnnotations;

namespace Api.Model;

public class Medico
{
    [Key]
    public int Id { get; set; }

    [Required]
    public required string Nome { get; set; }

    [Required]
    public required string Crm { get; set; }

    [Required]
    public required string Especialidade { get; set; }

    [Required]
    public required string Telefone { get; set; }

    [Required]
    public required string Email { get; set; }
}
