"use client";
import Medico from "@/interfaces/Medico";
import { medicosService } from "@/services/medicosService";
import { useGenericCrud } from "./useGenericCrud";

export const useMedicos = (searchTerm: string) => {
  const {
    filteredData: medicosFiltrados,
    loading,
    deleteItem: excluirMedico,
    updateItem: editarMedico,
    createItem: criarMedico,
    reload,
    setData: setMedicos,
  } = useGenericCrud<Medico>({
    service: medicosService,
    searchTerm,
    entityName: "médico",
    filterFn: (med, term) => {
      const nome = (med.nome || "").toLowerCase();
      const crm = (med.crm || "").toLowerCase();
      return nome.includes(term) || crm.includes(term);
    },
  });

  return {
    medicosFiltrados,
    loading,
    editarMedico,
    excluirMedico,
    criarMedico,
    reload,
    setMedicos,
  };
};

export default useMedicos;
