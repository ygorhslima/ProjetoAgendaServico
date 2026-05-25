/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINTS } from "@/constants/endpoints";

export const medicosService = {
  getAll: async (): Promise<any> => {
    const response = await fetch(ENDPOINTS.MEDICOS);
    if (!response.ok) throw new Error("Erro ao buscar médicos");
    return await response.json();
  },

  delete: async (id: number): Promise<boolean> => {
    const response = await fetch(`${ENDPOINTS.MEDICOS}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  },

  create: async (novoMedico: any): Promise<boolean> => {
    const response = await fetch(ENDPOINTS.MEDICOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoMedico),
    });
    return response.ok;
  },

  update: async (id: number, medicoAtualizado: any): Promise<boolean> => {
    const response = await fetch(`${ENDPOINTS.MEDICOS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(medicoAtualizado),
    });
    return response.ok;
  },
};
