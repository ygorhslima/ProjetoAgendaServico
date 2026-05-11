import { CircleX } from "lucide-react";
export default function FormPaciente() {
  return (
    <div className="modal-overlay">
      <div className="container-formInput">
        <div className="header-modal">
          <h3>Novo Paciente</h3>
          <button className="btn-close-modal">
            <CircleX />
          </button>
        </div>

        <label>Nome Completo</label>
        <input type="text" className="input-data" />

        <label>CPF</label>
        <input
          type="text"
          className="input-data"
          placeholder="000.000.000-00"
        />

        <label>Data de Nascimento</label>
        <input type="date" className="input-data" />

        <label>Telefone</label>
        <input
          name="telefone"
          type="tel"
          className="input-data"
          placeholder="(00) 00000-0000"
        />

        <button className="btn_add">Cadastrar</button>
      </div>
    </div>
  );
}
