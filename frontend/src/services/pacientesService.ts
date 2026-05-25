/* eslint-disable @typescript-eslint/no-explicit-any */

import { ENDPOINTS } from "@/constants/endpoints";

export const pacientesService = {
  getAll: async (): Promise<any> => {
    const response = await fetch(ENDPOINTS.PACIENTES);
    if (!response.ok) throw new Error("Erro ao buscar pacientes");
    return await response.json();
  },

  delete: async (id: number): Promise<boolean> => {
    const response = await fetch(`${ENDPOINTS.PACIENTES}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  },

  create: async (novoPaciente: any): Promise<boolean> => {
    const response = await fetch(ENDPOINTS.PACIENTES, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoPaciente),
    });
    return response.ok;
  },

  update: async (id: number, pacienteAtualizado: any): Promise<boolean> => {
    const response = await fetch(`${ENDPOINTS.PACIENTES}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pacienteAtualizado),
    });
    return response.ok;
  },
};
