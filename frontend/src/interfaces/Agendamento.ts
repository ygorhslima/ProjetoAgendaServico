import type Medicos from "./Medico";
import type Pacientes from "./Paciente";

export default interface Agendamentos {
  id: number;
  idPaciente: Pacientes;
  idMedico: Medicos;
  especialidade: string;
  dataehora: string;
  status: number;
}
