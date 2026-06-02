/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSearch } from "@/context/SearchContext";
import useMedicos from "@/hooks/useMedicos";
import Medico from "@/interfaces/Medico";
import SearchBar from "@/layout/SearchBar";
import { useParams } from "next/navigation";
import FormMedicos from "./FormMedicos";
import { useState } from "react";

export default function Medicos() {
  const { searchTerm, setSearchTerm } = useSearch();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicoSelecionado, setMedicoSelecionado] = useState<Medico | null>(
    null,
  );

  const {
    medicosFiltrados,
    loading,
    criarMedico,
    excluirMedico,
    editarMedico,
  } = useMedicos(searchTerm, id);

  if (loading) return <p>Carregando dados de médicos...</p>;

  const handleCriar = () => {
    setMedicoSelecionado(null);
    setIsModalOpen(true);
  };

  const handleEditar = (medico: Medico) => {
    setMedicoSelecionado(medico);
    setIsModalOpen(true);
  };

  const handleSalvarMedico = async (dados: Omit<Medico, "id">) => {
    if (medicoSelecionado) {
      // Se tem médico selecionado, estamos EDITANDO
      const { id, ...dadosSemId } = dados as any;
      return await editarMedico(medicoSelecionado.id, dadosSemId);
    } else {
      // Se não tem, estamos CRIANDO
      return await criarMedico(dados);
    }
  };

  return (
    <>
      <section>
        <div className="header-pages">
          <span>Total de {medicosFiltrados.length} médicos cadastrados</span>
          <button className="btn_add" onClick={handleCriar}>
            + Novo Médico
          </button>
          <SearchBar onSearch={setSearchTerm} searchTerm={searchTerm} />
        </div>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th className="th-ini">NOME</th>
                <th>CRM</th>
                <th>ESPECIALIDADE</th>
                <th>TELEFONE</th>
                <th>EMAIL</th>
                <th className="th-fim">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {medicosFiltrados.map((medico, index) => (
                <tr key={index}>
                  <td>{medico.nome}</td>
                  <td>{medico.crm}</td>
                  <td>
                    <span className="especialidade-badge">
                      {medico.especialidade}
                    </span>
                  </td>
                  <td>{medico.telefone}</td>
                  <td>{medico.email}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEditar(medico)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => excluirMedico(medico.id)}
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

      <FormMedicos
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSalvarMedico}
        medicoParaEditar={medicoSelecionado}
      />
    </>
  );
}
