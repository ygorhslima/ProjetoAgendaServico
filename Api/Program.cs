using Api.Data;
using Api.Features.Agendamentos;
using Api.Features.Medicos;
using Api.Features.Pacientes;
using Api.Features.Prontuarios;

var builder = WebApplication.CreateBuilder(args);

var myAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddValidation();
builder.AddClinicaDb();

builder.Services.AddScoped<IPacientesService, PacientesServices>();
builder.Services.AddScoped<IMedicosService, MedicosServices>();
builder.Services.AddScoped<IProntuariosServices, ProntuariosService>();
builder.Services.AddScoped<IAgendamentosService, AgendamentosServices>();

var app = builder.Build();

app.UseCors(myAllowSpecificOrigins);
app.MigrateDb();

//--------- endpoint --------------
app.MapPacientesEndpoint();
app.MapMedicosEndpoint();
app.MapProntuariosEndpoint();
app.MapAgendamentosEndpoint();
// -----------------------

app.Run();
