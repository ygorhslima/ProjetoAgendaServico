/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINTS } from "@/constants/endpoints";
import { BaseService } from "./baseService";

class PacientesService extends BaseService{
  constructor(){
    super(ENDPOINTS.PACIENTES);
  }
}
export const pacientesService = new PacientesService();