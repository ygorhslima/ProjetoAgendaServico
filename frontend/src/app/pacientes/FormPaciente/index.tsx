/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Paciente from "@/interfaces/Paciente";
import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";

interface FormPacientesProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (dados: any) => Promise<void>;
  pacienteParaEditar?: Paciente | null;
}

export default function FormPaciente({
  isOpen,
  onClose,
  onSave,
  pacienteParaEditar,
}: FormPacientesProps) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [convenio, setConvenio] = useState("");

  useEffect(() => {
    if (pacienteParaEditar) {
      setNome(pacienteParaEditar.nome || "");
      setCpf(pacienteParaEditar.cpf || "");
      setNascimento(pacienteParaEditar.nascimento || "");
      setTelefone(pacienteParaEditar.telefone || "");
      setConvenio(pacienteParaEditar.convenio || "");
    } else {
      setNome("");
      setCpf("");
      setNascimento("");
      setTelefone("");
      setConvenio("");
    }
  }, [pacienteParaEditar, isOpen]);

  if (!isOpen) {
    return null;
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dadosPaciente = {
      nome,
      cpf,
      nascimento,
      telefone,
      convenio,
    };

    const sucesso = await onSave(dadosPaciente);
    if (sucesso) {
      onClose();
    }
  };
  return (
    <div className="modal-overlay">
      <form onSubmit={handleSubmit} className="container-formInput">
        <div className="header-modal">
          <h3>{pacienteParaEditar ? "Editar Paciente" : "Novo Paciente"}</h3>
          <button type="button" onClick={onClose} className="btn-close-modal">
            <CircleX />
          </button>
        </div>

        <label>Nome Completo</label>
        <input
          type="text"
          className="input-data"
          maxLength={100}
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>CPF</label>
        <input
          type="text"
          className="input-data"
          placeholder="000.000.000-00"
          maxLength={14}
          required
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <label>Data de Nascimento</label>
        <input
          type="date"
          className="input-data"
          required
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
        />

        <label>Telefone</label>
        <input
          name="telefone"
          type="tel"
          className="input-data"
          placeholder="(00) 00000-0000"
          maxLength={15}
          required
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <label>convenio</label>
        <input
          name="convenio"
          type="text"
          className="input-data"
          maxLength={15}
          required
          value={convenio}
          onChange={(e) => setConvenio(e.target.value)}
        />

        <button className="btn_add">
          {pacienteParaEditar ? "Salvar Alterações" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}
