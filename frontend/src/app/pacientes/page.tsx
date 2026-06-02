"use client";

import { useState } from "react";
import FormPaciente from "./FormPaciente";
import type Paciente from "@/interfaces/Paciente";
import { useSearch } from "@/context/SearchContext";
import { useParams } from "next/navigation";
import { usePacientes } from "@/hooks/usePacientes";

export default function Pacientes() {
  const { searchTerm, setSearchTerm } = useSearch();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pacienteSelecionado, setPacienteSelecionado] =
    useState<Paciente | null>(null);

  const {
    pacientesFiltrados,
    loading,
    criarPaciente,
    excluirPaciente,
    editarPaciente,
  } = usePacientes(searchTerm, id);

  if (loading) return <p>Carregando dados de médicos...</p>;

  const handleCriar = () => {
    setPacienteSelecionado(null);
    setIsModalOpen(true);
  };

  const handleEditar = (paciente: Paciente) => {
    setPacienteSelecionado(paciente);
    setIsModalOpen(true);
  };

  const handleSalvarPaciente = async (dados: Omit<Paciente, "id">) => {
    if (pacienteSelecionado) {
      // Se tem médico selecionado, estamos EDITANDO
      const { id, ...dadosSemId } = dados as any;
      return await editarPaciente(pacienteSelecionado.id, dadosSemId);
    } else {
      // Se não tem, estamos CRIANDO
      return await criarPaciente(dados);
    }
  };
  return (
    <>
      <section>
        <div className="header-pages">
          <span>
            Total de {pacientesFiltrados.length} pacientes cadastrados
          </span>
          <button className="btn_add" onClick={handleCriar}>
            + Novo Paciente
          </button>
        </div>

        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th className="th-ini">NOME</th>
                <th>CPF</th>
                <th>DATA NASCIMENTO</th>
                <th>TELEFONE</th>
                <th>CONVÊNIO</th>
                <th className="th-fim">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {pacientesFiltrados.map((paciente, index) => (
                <tr key={index}>
                  <td>{paciente.nome}</td>
                  <td>{paciente.cpf}</td>
                  <td>{paciente.nascimento}</td>
                  <td>{paciente.telefone}</td>
                  <td>{paciente.convenio}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEditar(paciente)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => excluirPaciente(paciente.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <FormPaciente
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSalvarPaciente}
        pacienteParaEditar={pacienteSelecionado}
      />
    </>
  );
}
