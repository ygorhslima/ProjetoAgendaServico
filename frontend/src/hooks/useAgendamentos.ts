"use client";
/* eslint-disable react-hooks/set-state-in-effect */
import Agendamentos from "@/interfaces/Agendamento";
import { agendamentosService } from "@/services/agendamentosService";
import { useEffect, useState } from "react";
import useMedicos from "./useMedicos";
import { usePacientes } from "./usePacientes";

export const useAgendamentos = (searchTerm: string, id?: string | string[]) => {
  const [agendamentos, setAgendamentos] = useState<Agendamentos[]>([]);
  const [loading, setLoading] = useState(true);

  // Buscamos as listas para poder cruzar os dados (Hidratação)
  const { medicosFiltrados: medicos } = useMedicos("");
  const { pacientesFiltrados: pacientes } = usePacientes("", undefined);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await agendamentosService.getAll(); // Supondo que retorne [{ idPaciente: 1, ... }]

      // Transformamos os IDs em objetos completos para a tabela funcionar
      const hydrated = (data || []).map((ag: any) => ({
        ...ag,
        idPaciente:
          pacientes.find((p) => p.id === ag.idPaciente) || ag.idPaciente,
        idMedico: medicos.find((m) => m.id === ag.idMedico) || ag.idMedico,
      }));

      setAgendamentos(hydrated);
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Aguarda carregar medicos e pacientes antes de processar agendamentos
    if (medicos.length > 0 && pacientes.length > 0) {
      loadData();
    }
  }, [medicos.length, pacientes.length]);

  const agendamentosFiltrados = agendamentos.filter((ag) => {
    const term = (searchTerm || "").toLowerCase();
    // Acesso seguro com ?. para evitar quebra caso o objeto ainda não esteja mapeado
    const nomePaciente = (ag.idPaciente?.nome || "").toLowerCase();
    const nomeMedico = (ag.idMedico?.nome || "").toLowerCase();
    const matchesSearch =
      nomePaciente.includes(term) || nomeMedico.includes(term);
    return matchesSearch;
  });

  const excluirAgendamento = async (id: number): Promise<void> => {
    const confirmacao = window.confirm(
      "tem certeza que deseja remover este agendamento da tabela?",
    );
    if (!confirmacao) {
      return;
    }
    try {
      await agendamentosService.delete(id);
      setAgendamentos((prev) => prev.filter((a) => a.id !== id));
    } catch (error) {
      console.error("Erro ao remover um agendamento", error);
      alert("Não foi possível excluir o agendamento");
    }
  };

  const editarAgendamento = async (
    id: number,
    dadosAtualizados: Partial<Agendamentos>,
  ) => {
    try {
      const responseUpdate: Response = await agendamentosService.update(
        id,
        dadosAtualizados,
      );

      if (responseUpdate.ok) {
        await loadData();
        return true;
      }

      return false;
    } catch (error) {
      console.error("Erro ao editar um Agendamento:", error);
      return false;
    }
  };

  const criarAgendamento = async (
    novoAgendamento: Omit<Agendamentos, "id">,
  ) => {
    try {
      setLoading(true);
      const responseCreate = await agendamentosService.create(novoAgendamento);

      if (responseCreate) {
        await loadData();
        return true;
      }

      return false;
    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    agendamentosFiltrados,
    loading,
    excluirAgendamento,
    editarAgendamento,
    criarAgendamento,
    reload: loadData,
    setAgendamentos,
  };
};

export default useAgendamentos;
