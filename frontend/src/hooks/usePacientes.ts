"use client";
import Paciente from "@/interfaces/Paciente";
import { pacientesService } from "@/services/pacientesService";
import { useGenericCrud } from "./useGenericCrud";

export const usePacientes = (searchTerm: string) => {
  const {
    filteredData: pacientesFiltrados,
    loading,
    deleteItem: excluirPaciente,
    updateItem: editarPaciente,
    createItem: criarPaciente,
  } = useGenericCrud<Paciente>({
    service: pacientesService,
    searchTerm,
    entityName: "paciente",
    filterFn: (pac, term) => {
      const nome = (pac.nome || "").toLowerCase();
      const cpf = (pac.cpf || "").toLowerCase();
      return nome.includes(term) || cpf.includes(term);
    },
  });

  return {
    pacientesFiltrados,
    loading,
    excluirPaciente,
    editarPaciente,
    criarPaciente,
  };
};
