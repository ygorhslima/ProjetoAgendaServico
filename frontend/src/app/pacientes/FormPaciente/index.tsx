/* eslint-disable @typescript-eslint/no-explicit-any */
import Paciente from "@/interfaces/Paciente";
import { CircleX } from "lucide-react";
import { useState } from "react";

interface Props {
  paciente: Paciente;
  onClose: () => void;
}

export default function FormPaciente({ paciente, onClose }: Props) {
  
  const [formData, setFormData] = useState({
    nome: paciente.nome,
    cpf: paciente.cpf,
    nascimento: paciente.nascimento,
    telefone: paciente.telefone,
    convenio: paciente.convenio,
  });

  return (
    <div className="modal-overlay">
      <div className="container-formInput">
        <div className="header-modal">
          <h3>Novo Paciente</h3>
          <button onClick={onClose} className="btn-close-modal">
            <CircleX />
          </button>
        </div>

        <label>Nome Completo</label>
        <input
          type="text"
          className="input-data"
          maxLength={100}
          required
          value={formData.nome}
        />

        <label>CPF</label>
        <input
          type="text"
          className="input-data"
          placeholder="000.000.000-00"
          maxLength={14}
          required
          value={formData.cpf}
          onChange={(event) => {
            let value = event.target.value;

            // 1. Remove tudo que não for número
            value = value.replace(/\D/g, "");

            // 2. Aplica a máscara passo a passo
            // O limite de caracteres ajuda a não quebrar o regex
            if (value.length <= 11) {
              value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Primeiro ponto
              value = value.replace(/(\d{3})(\d)/, "$1.$2"); // Segundo ponto
              value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Traço
            }

            event.target.value = value;
          }}
        />

        <label>Data de Nascimento</label>
        <input
          type="date"
          className="input-data"
          required
          value={formData.nascimento}
        />

        <label>Telefone</label>
        <input
          name="telefone"
          type="tel"
          className="input-data"
          placeholder="(00) 00000-0000"
          maxLength={15}
          required
          value={formData.nascimento}
          onChange={(event) => {
            let value = event.target.value;
            value = value.replace(/\D/g, "");
            value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses no DDD
            value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca hífen após o quinto dígito
            event.target.value = value;
          }}
        />

        <button className="btn_add">Cadastrar</button>
      </div>
    </div>
  );
}
