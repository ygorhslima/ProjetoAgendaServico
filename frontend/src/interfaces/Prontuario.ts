import Medicos from "./Medico";
import type Pacientes from "./Paciente";

export default interface Prontuarios{
    id:number;
    pacienteid:Pacientes;
    medicoid:Medicos;
    dataregistro:string;
    descricaoclinica:string;
    tratamentoprescrito:string;
}