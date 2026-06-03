/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINTS } from "@/constants/endpoints";
import { BaseService } from "./baseService";

class AgendamentosService extends BaseService{
  constructor(){
    super(ENDPOINTS.AGENDAMENTOS);
  }
}
export const agendamentosService = new AgendamentosService();