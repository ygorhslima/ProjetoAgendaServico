import { CircleX } from "lucide-react";
export default function FormMedicos() {
  return (
    <div className="modal-overlay">
      <div className="container-formInput">
        <div className="header-modal">
          <h3>Novo Médico</h3>
          <button className="btn-close-modal">
            <CircleX />
          </button>
        </div>

        <label>Nome Completo</label>
        <input type="text" className="input-data" />

        <label>CRM</label>
        <input
          type="text"
          className="input-data"
          placeholder="000.000.000-00"
        />

        <label>Especialidade</label>
        <select name="" id="">
          <option value="">Opção</option>
        </select>

        <label>Telefone</label>
        <input
          type="tel"
          className="input-data"
          placeholder="(00) 00000-0000"
        />

        <label>Email</label>
        <input
          type="email"
          className="input-data"
          placeholder="email@exemplo.com"
        />

        <button className="btn_add">Cadastrar</button>
      </div>
    </div>
  );
}
