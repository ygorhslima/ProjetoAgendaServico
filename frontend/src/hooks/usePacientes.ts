/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Paciente from "@/interfaces/Paciente";
import { pacientesService } from "@/services/pacientesService";
import { useEffect, useState } from "react";

export const usePacientes = (searchTerm: string) => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await pacientesService.getAll();
      setPacientes(data || []);
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const pacientesFiltrados = pacientes.filter((pac) => {
    const term = (searchTerm || "").toLowerCase();
    const nomePaciente = (pac.nome || "").toLowerCase();
    const cpfPaciente = (pac.cpf || "").toLowerCase();
    const matchesSearch =
      nomePaciente.includes(term) || cpfPaciente.includes(term);
    return matchesSearch;
  });

  const excluirPaciente = async (id: number): Promise<void> => {
    const confirmacao = window.confirm(
      "tem certeza que deseja remover este paciente da tabela?",
    );
    if (!confirmacao) {
      return;
    }
    try {
      await pacientesService.delete(id);
      setPacientes((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Erro ao remover um paciente", error);
      alert("Não foi possível excluir o paciente");
    }
  };
  const editarPaciente = async (
    id: number,
    dadosAtualizados: Partial<Paciente>,
  ) => {
    try {
      const responseUpdate: Response = await pacientesService.update(
        id,
        dadosAtualizados,
      );

      if (responseUpdate.ok) {
        await loadData();
        return true;
      }

      return false;
    } catch (error) {
      console.error("Erro ao editar médico:", error);
      return false;
    }
  };

  const criarPaciente = async (novoPaciente: Omit<Paciente, "id">) => {
    try {
      setLoading(true);
      const responseCreate = await pacientesService.create(novoPaciente);
      if (responseCreate) {
        await loadData();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Erro ao criar paciente:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    pacientesFiltrados,
    loading,
    excluirPaciente,
    editarPaciente,
    criarPaciente,
  };
};
