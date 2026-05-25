/* eslint-disable @typescript-eslint/no-explicit-any */

import { ENDPOINTS } from "@/constants/endpoints";

export const prontuariosService = {
  getAll: async (): Promise<any> => {
    const response = await fetch(ENDPOINTS.PRONTUARIOS);
    if (!response.ok) throw new Error("Erro ao buscar prontuarios");
    return await response.json();
  },

  delete: async (id: number): Promise<boolean> => {
    const response = await fetch(`${ENDPOINTS.PRONTUARIOS}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  },

  create: async (novoProntuario: any): Promise<boolean> => {
    const response = await fetch(ENDPOINTS.PRONTUARIOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoProntuario),
    });
    return response.ok;
  },

  update: async (id: number, prontuarioAtualizado: any): Promise<boolean> => {
    const response = await fetch(`${ENDPOINTS.PRONTUARIOS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prontuarioAtualizado),
    });
    return response.ok;
  },
};
