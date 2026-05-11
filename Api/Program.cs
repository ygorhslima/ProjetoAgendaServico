using Api.Data;
using Api.Features.Medicos;
using Api.Features.Pacientes;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

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

app.UseCors(myAllowSpecificOrigins);
app.MigrateDb();

//--------- endpoint --------------
app.MapPacientesEndpoint();
app.MapMedicosEndpoint();
// -----------------------

app.Run();
