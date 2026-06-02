/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useSearch } from "@/context/SearchContext";
import useAgendamentos from "@/hooks/useAgendamentos";
import type Agendamentos from "@/interfaces/Agendamento";
import { useParams } from "next/navigation";
import { useState } from "react";
import FormAgendamento from "./FormAgendamento";

export default function Agendamentos() {
  const { searchTerm, setSearchTerm } = useSearch();
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [AgendamentosSelecionado, setAgendamentosSelecionado] =
    useState<Agendamentos | null>(null);

  const {
    agendamentosFiltrados,
    loading,
    criarAgendamento,
    excluirAgendamento,
    editarAgendamento,
  } = useAgendamentos(searchTerm, id);

  if (loading) return <p>Carregando dados de agendamentos...</p>;

  const handleCriar = () => {
    setAgendamentosSelecionado(null);
    setIsModalOpen(true);
  };

  const handleEditar = (agendamentos: Agendamentos) => {
    setAgendamentosSelecionado(agendamentos);
    setIsModalOpen(true);
  };

  const handleSalvarAgendamentos = async (dados: Omit<Agendamentos, "id">) => {
    if (AgendamentosSelecionado) {
      const { id, ...dadosSemId } = dados as any;
      return await editarAgendamento(AgendamentosSelecionado.id, dadosSemId);
    } else {
      // Se não tem, estamos CRIANDO
      return await criarAgendamento(dados);
    }
  };

  return (
    <>
      <section>
        <div className="header-pages">
          <span>Total de {agendamentosFiltrados.length} agendamentos</span>
          <button className="btn_add" onClick={handleCriar}>
            + Novo Agendamento
          </button>
        </div>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th className="th-ini">PACIENTE</th>
                <th>MÉDICO</th>
                <th>ESPECIALIDADE</th>
                <th>DATA/HORA</th>
                <th>STATUS</th>
                <th className="th-fim">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {agendamentosFiltrados.map((item, index) => (
                <tr key={index}>
                  <td>{item.idPaciente.nome}</td>
                  <td>{item.idMedico.nome}</td>
                  <td>{item.idMedico.especialidade}</td>
                  <td>{item.dataehora}</td>
                  <td>
                    <span>{item.status}</span>
                  </td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => handleEditar(item)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => excluirAgendamento(item.id)}
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
      <FormAgendamento
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSalvarAgendamentos}
        agendamentoParaEditar={AgendamentosSelecionado}
      />
    </>
  );
}
