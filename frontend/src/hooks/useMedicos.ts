"use client";
/* eslint-disable react-hooks/set-state-in-effect */
import Medico from "@/interfaces/Medico";
import { medicosService } from "@/services/medicosService";
import { useEffect, useState } from "react";

export const useMedicos = (searchTerm: string) => {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      // obtendo todos os médicos
      const data = await medicosService.getAll();
      setMedicos(data || []);
    } catch (error) {
      console.error("Erro ao buscar dados: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // função responsável por filtrar médicos, comparando se o médico que o usuário quer procurar na pesquisa está na tabela
  const medicosFiltrados = medicos.filter((med) => {
    const term = (searchTerm || "").toLowerCase();
    const nomeMedico = (med.nome || "").toLowerCase();
    const crmMedico = (med.crm || "").toLowerCase();

    const matchesSearch = nomeMedico.includes(term) || crmMedico.includes(term);
    return matchesSearch;
  });

  const excluirMedico = async (id: number): Promise<void> => {
    // armazena o resultado da escolha do usuário
    const confirmacao = window.confirm(
      "Tem certeza que deseja remover este médico da tabela?",
    );
    if (!confirmacao) {
      return;
    }
    try {
      await medicosService.delete(id);
      setMedicos((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Erro ao remover um médico", error);
      alert("Não foi possível excluir o médico");
    }
  };

  const editarMedico = async (
    id: number,
    dadosAtualizados: Partial<Medico>,
  ) => {
    try {
      const responseUpdate: Response = await medicosService.update(
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

  const criarMedico = async (novoMedico: Omit<Medico, "id">) => {
    try {
      setLoading(true);
      const responseCreate = await medicosService.create(novoMedico);

      if (responseCreate) {
        await loadData();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Erro ao criar médico:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    medicosFiltrados,
    loading,
    editarMedico,
    excluirMedico,
    criarMedico,
    reload: loadData,
    setMedicos,
  };
};

export default useMedicos;
