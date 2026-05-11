using System;
using Api.Model;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class ClinicaContext(DbContextOptions<ClinicaContext> options) : DbContext(options)
{
    public DbSet<Paciente> Pacientes => Set<Paciente>();
    public DbSet<Medico> Medicos => Set<Medico>();
    public DbSet<Agendamento> Agendamentos => Set<Agendamento>();
    public DbSet<Prontuario> Prontuarios => Set<Prontuario>();
}
