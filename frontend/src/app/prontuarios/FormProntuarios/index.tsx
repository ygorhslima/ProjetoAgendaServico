/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useMedicos from "@/hooks/useMedicos";
import { usePacientes } from "@/hooks/usePacientes";
import Prontuarios from "@/interfaces/Prontuario";
import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";

interface PropsProntuarios {
  isOpen: boolean;
  onClose: () => void;
  onSave: (dados: Omit<Prontuarios, "id">) => Promise<void>;
  prontuariosParaEditar?: Prontuarios | null;
}

export default function FormProntuarios({
  isOpen,
  onClose,
  onSave,
  prontuariosParaEditar,
}: PropsProntuarios) {
  const [idPaciente, setIdPaciente] = useState("");
  const [idMedico, setIdMedico] = useState("");
  const [dataRegistro, setDataRegistro] = useState("");
  const [descricaoClinica, setDescricaoClinica] = useState("");
  const [tratamentoPrescrito, setTratamentoPrescrito] = useState("");
  const { medicosFiltrados } = useMedicos("");
  const { pacientesFiltrados } = usePacientes("");

  useEffect(() => {
    if (prontuariosParaEditar) {
      setIdPaciente(String(prontuariosParaEditar.pacienteid?.nome));
      setIdMedico(String(prontuariosParaEditar.medicoid?.nome));
      setDataRegistro(prontuariosParaEditar.dataregistro);
      setDescricaoClinica(prontuariosParaEditar.descricaoclinica);
      setTratamentoPrescrito(prontuariosParaEditar.tratamentoprescrito);
    } else {
      setIdPaciente("");
      setIdMedico("");
      setDataRegistro("");
      setDescricaoClinica("");
      setTratamentoPrescrito("");
    }
  }, [prontuariosParaEditar, isOpen]);

  const handleSubmit = async () => {
    const selectedPaciente = pacientesFiltrados.find(
      (p) => String(p.id) === idPaciente,
    );
    const selectedMedico = medicosFiltrados.find(
      (m) => String(m.id) === idMedico,
    );

    const dados = {
      pacienteid: { ...selectedPaciente, id: Number(idPaciente) } as any,
      medicoid: {
        ...selectedMedico,
        id: Number(idMedico),
      } as any,
      dataregistro: dataRegistro,
      descricaoclinica: descricaoClinica,
      tratamentoprescrito: tratamentoPrescrito,
    };

    await onSave(dados);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="container-formInput">
        <div className="header-modal">
          <h3>
            {prontuariosParaEditar ? "Editar Prontuarios" : "Criar Prontuarios"}
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

        <label>Descrição clínica</label>
        <input
          type="text"
          className="input-data"
          value={descricaoClinica}
          onChange={(e) => setDescricaoClinica(e.target.value)}
        />

        <label>Tratamento prescrito</label>
        <input
          type="text"
          className="input-data"
          value={tratamentoPrescrito}
          onChange={(e) => setTratamentoPrescrito(e.target.value)}
        />

        <button className="btn_add" onClick={handleSubmit}>
          {prontuariosParaEditar ? "Salvar Alterações" : "Criar"}
        </button>
      </div>
    </div>
  );
}
