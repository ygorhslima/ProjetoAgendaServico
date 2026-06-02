/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Medico from "@/interfaces/Medico";
import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";

interface FormMedicosProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (dados: any) => Promise<void>;
  medicoParaEditar?: Medico | null;
}

export default function FormMedicos({
  isOpen,
  onClose,
  onSave,
  medicoParaEditar,
}: FormMedicosProps) {
  const [nome, setNome] = useState("");
  const [crm, setCrm] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (medicoParaEditar) {
      setNome(medicoParaEditar.nome || "");
      setCrm(medicoParaEditar.crm || "");
      setEspecialidade(medicoParaEditar.especialidade || "");
      setTelefone(medicoParaEditar.telefone || "");
      setEmail(medicoParaEditar.email || "");
    } else {
      setNome("");
      setCrm("");
      setEspecialidade("");
      setTelefone("");
      setEmail("");
    }
  }, [medicoParaEditar, isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const dadosMedico = {
      nome,
      crm,
      especialidade,
      telefone,
      email,
    };

    const sucesso = await onSave(dadosMedico);
    if (sucesso) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <form onSubmit={handleSubmit} className="container-formInput">
        <div className="header-modal">
          <h3>{medicoParaEditar ? "Editar médico" : "Novo Médico"}</h3>
          <button type="button" className="btn-close-modal" onClick={onClose}>
            <CircleX />
          </button>
        </div>

        <label>Nome Completo</label>
        <input
          type="text"
          className="input-data"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>CRM</label>
        <input
          type="text"
          className="input-data"
          placeholder="000.000.000-00"
          value={crm}
          onChange={(e) => setCrm(e.target.value)}
        />

        <label>Especialidade</label>
        <select
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          required
          className="input-data"
        >
          <option value="">Selecione</option>
          <option value="Cardiologia">Cardiologia</option>
          <option value="Pediatria">Pediatria</option>
          <option value="Ginecologista">Ginecologista</option>
          <option value="Dermatologia">Dermatologia</option>
          <option value="Neurologia">Neurologia</option>
          <option value="Psiquiatria">Psiquiatria</option>
          <option value="Oftalmologia">Oftalmologia</option>
          <option value="Otorrinolaringologia">Otorrinolaringologia</option>
          <option value="Endocrinologia">Endocrinologia</option>
        </select>

        <label>Telefone</label>
        <input
          type="tel"
          className="input-data"
          placeholder="(00) 00000-0000"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          className="input-data"
          placeholder="email@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn_add">
          {medicoParaEditar ? "Salvar Alterações" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}
