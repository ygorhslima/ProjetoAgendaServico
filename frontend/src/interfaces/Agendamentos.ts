import type Medicos from "./Medicos";
import type Pacientes from "./Pacientes";

export default interface Agendamentos{
    paciente:Pacientes;
    medico:Medicos;
    especialidade:string;
    data:string;
    hora:string;
    status:string;
}