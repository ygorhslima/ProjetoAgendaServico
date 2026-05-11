import Medicos from "./Medico";
import type Pacientes from "./Paciente";

export default interface Prontuarios{
    paciente:Pacientes;
    medico:Medicos;
    dataRegistro:string;
    diagnostico:string;
    descricaoClinica:string;
    tratamentoPrescrito:string;
}