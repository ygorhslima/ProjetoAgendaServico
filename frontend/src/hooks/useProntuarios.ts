/* eslint-disable @typescript-eslint/no-explicit-any */
import Prontuarios from "@/interfaces/Prontuario";
import { prontuariosService } from "@/services/prontuariosService";
import { useGenericCrud } from "./useGenericCrud";
import { useMemo } from "react";
import useMedicos from "./useMedicos";
import { usePacientes } from "./usePacientes";

export const useProntuarios = (searchTerm: string) => {
  // Buscamos as listas de médicos e pacientes para cruzar os dados (Hidratação)
  const { medicosFiltrados: medicos } = useMedicos("");
  const { pacientesFiltrados: pacientes } = usePacientes("", undefined);

  const {
    filteredData: rawData,
    loading: crudLoading,
    deleteItem: excluirProntuario,
    updateItem: editarProntuario,
    createItem: criarProntuario,
    reload,
  } = useGenericCrud<Prontuarios>({
    service: prontuariosService,
    searchTerm,
    entityName: "prontuário",
    filterFn: (item: any, term) => {
      // Buscamos os objetos para permitir que o filtro também funcione por nome do paciente/médico
      const paciente = pacientes.find(
        (p) => p.id === item.idPaciente || p.id === item.pacienteid,
      );
      const medico = medicos.find(
        (m) => m.id === item.idMedico || m.id === item.medicoid,
      );

      const nomePaciente = (paciente?.nome || "").toLowerCase();
      const nomeMedico = (medico?.nome || "").toLowerCase();
      const data = (item.dataregistro || "").toLowerCase();

      return (
        nomePaciente.includes(term) ||
        nomeMedico.includes(term) ||
        data.includes(term)
      );
    },
  });

  // Transforma os IDs em objetos completos para que a página consiga acessar .nome
  const prontuariosFiltrados = useMemo(() => {
    return rawData.map((item: any) => ({
      ...item,
      pacienteid: pacientes.find(
        (p) => p.id === item.idPaciente || p.id === item.pacienteid,
      ),
      medicoid: medicos.find(
        (m) => m.id === item.idMedico || m.id === item.medicoid,
      ),
    }));
  }, [rawData, pacientes, medicos]);

  const loading = crudLoading;

  return {
    prontuariosFiltrados,
    loading,
    excluirProntuario,
    editarProntuario,
    criarProntuario,
    reload,
  };
};
