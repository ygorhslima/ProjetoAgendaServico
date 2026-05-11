import Medicos from "./Medicos";
import type Pacientes from "./Pacientes";

export default interface Prontuarios{
    paciente:Pacientes;
    medico:Medicos;
    dataRegistro:string;
    diagnostico:string;
    descricaoClinica:string;
    tratamentoPrescrito:string;
}