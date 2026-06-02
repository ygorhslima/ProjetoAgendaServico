"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import useMedicos from "@/hooks/useMedicos";
import { usePacientes } from "@/hooks/usePacientes";
import Agendamentos from "@/interfaces/Agendamento";
import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";

interface FormAgendamentosProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (dados: any) => Promise<void>;
  agendamentoParaEditar?: Agendamentos | null;
}

export default function FormAgendamento({
  isOpen,
  onClose,
  onSave,
  agendamentoParaEditar,
}: FormAgendamentosProps) {
  const [idPaciente, setIdPaciente] = useState("");
  const [idMedico, setIdMedico] = useState("");
  const [dataehora, setDataehora] = useState("");
  const [status, setStatus] = useState("Agendado");

  const { medicosFiltrados } = useMedicos("");
  const { pacientesFiltrados } = usePacientes("");

  useEffect(() => {
    if (agendamentoParaEditar) {
      setIdPaciente(String(agendamentoParaEditar.idPaciente.id));
      setIdMedico(String(agendamentoParaEditar.idMedico.id));
      setDataehora(agendamentoParaEditar.dataehora);
      setStatus(String(agendamentoParaEditar.status));
    } else {
      setIdPaciente("");
      setIdMedico("");
      setDataehora("");
      setStatus("Agendado");
    }
  }, [agendamentoParaEditar, isOpen]);

  const handleSubmit = async () => {
    const selectedMedico = medicosFiltrados.find(
      (m) => String(m.id) === idMedico,
    );
    const selectedPaciente = pacientesFiltrados.find(
      (p) => String(p.id) === idPaciente,
    );

    const dados = {
      idPaciente: { id: Number(idPaciente), nome: selectedPaciente?.nome },
      idMedico: {
        id: Number(idMedico),
        nome: selectedMedico?.nome,
        especialidade: selectedMedico?.especialidade,
      },
      dataehora,
      status,
    };

    await onSave(dados);
    onClose();
  };

  if (!isOpen) return null;

  const currentMedico = medicosFiltrados.find((m) => String(m.id) === idMedico);

  return (
    <div className="modal-overlay">
      <div className="container-formInput">
        <div className="header-modal">
          <h3>
            {agendamentoParaEditar ? "Editar Agendamento" : "Criar Agendamento"}
          </h3>
          <button className="btn-close-modal" onClick={onClose}>
            <CircleX />
          </button>
        </div>

        <label>Paciente</label>
        <select
          className="input-data"
          value={idPaciente}
          onChange={(e) => setIdPaciente(e.target.value)}
        >
          <option value="">Selecione um paciente</option>
          {pacientesFiltrados.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nome}
            </option>
          ))}
        </select>

        <label>Medico</label>
        <select
          className="input-data"
          value={idMedico}
          onChange={(e) => setIdMedico(e.target.value)}
        >
          <option value="">Selecione um médico</option>
          {medicosFiltrados.map((m) => (
            <option key={m.id} value={m.id}>
              {m.nome}
            </option>
          ))}
        </select>

        <label>Especialidade</label>
        <input
          className="input-data"
          value={currentMedico?.especialidade || ""}
          disabled
          placeholder="Especialidade"
        />

        <label>Data e Hora</label>
        <input
          type="datetime-local"
          className="input-data"
          value={dataehora}
          onChange={(e) => setDataehora(e.target.value)}
        />

        <label>Status</label>
        <select
          className="input-data"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Agendado">Agendado</option>
          <option value="Cancelado">Cancelado</option>
          <option value="Concluido">Concluído</option>
        </select>

        <button className="btn_add" onClick={handleSubmit}>
          {agendamentoParaEditar ? "Salvar Alterações" : "Agendar"}
        </button>
      </div>
    </div>
  );
}
