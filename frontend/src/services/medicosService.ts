/* eslint-disable @typescript-eslint/no-explicit-any */
import { ENDPOINTS } from "@/constants/endpoints";
import { BaseService } from "./baseService";

class MedicosService extends BaseService {
  constructor(){
    super(ENDPOINTS.MEDICOS);
  }
}
export const medicosService = new MedicosService();
