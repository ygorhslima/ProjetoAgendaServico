import { CircleX } from "lucide-react";
export default function FormAgendamento() {
  return (
    <div className="modal-overlay">
      <div className="container-formInput">
        <div className="header-modal">
          <h3>Novo Agendamento</h3>
          <button className="btn-close-modal">
            <CircleX />
          </button>
        </div>

        <label>Paciente</label>
        <select className="input-data">
          <option value="">Paciente1</option>
        </select>

        <label>Medico</label>
        <select className="input-data">
          <option value="">Medico1</option>
        </select>

        <label>Especialidade</label>
        <select className="input-data">
          <option value="">Paciente1</option>
        </select>

        <label>Data e Hora</label>
        <input type="datetime-local" className="input-data" />

        <label>Status</label>
        <select name="" id="">
            <option value="Agendado">Agendado</option>
            <option value="Cancelado">Cancelado</option>
            <option value="Concluido">Concluído</option>
        </select>
        
        
        <button className="btn_add">Agendar</button>
      </div>
    </div>
  );
}
