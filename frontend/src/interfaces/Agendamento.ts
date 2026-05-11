import type Medicos from "./Medico";
import type Pacientes from "./Paciente";

export default interface Agendamentos{
    paciente:Pacientes;
    medico:Medicos;
    especialidade:string;
    data:string;
    hora:string;
    status:string;
}