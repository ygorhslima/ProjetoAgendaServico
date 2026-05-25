/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINTS } from "@/constants/endpoints";

export const agendamentosServices = {
  getAll: async (): Promise<any> => {
    const response = await fetch(ENDPOINTS.AGENDAMENTOS);
    if (!response.ok) throw new Error("Erro ao agendar uma consulta");
  },

  delete: async (id: number): Promise<boolean> => {
    const response = await fetch(`${ENDPOINTS.AGENDAMENTOS}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  },

  create: async (novoAgendamento: any): Promise<boolean> => {
    const response = await fetch(ENDPOINTS.AGENDAMENTOS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoAgendamento),
    });
    return response.ok;
  },

  update: async (id: number, agendamentoAtualizado: any): Promise<boolean> => {
    const response = await fetch(`${ENDPOINTS.AGENDAMENTOS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(agendamentoAtualizado),
    });
    return response.ok;
  },
};
