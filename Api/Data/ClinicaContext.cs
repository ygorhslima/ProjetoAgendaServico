using System;
using Api.Model;
using Microsoft.EntityFrameworkCore;

namespace Api.Data;

public class ClinicaContext : DbContext
{
    public ClinicaContext(DbContextOptions<ClinicaContext> options) : base(options){}
    public DbSet<Paciente> Pacientes => Set<Paciente>();
    public DbSet<Medico> Medicos => Set<Medico>();
    public DbSet<Agendamento> Agendamentos => Set<Agendamento>();
    public DbSet<Prontuario> Prontuarios => Set<Prontuario>();
}
