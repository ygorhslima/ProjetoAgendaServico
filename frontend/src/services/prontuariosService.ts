/* eslint-disable @typescript-eslint/no-explicit-any */

import { ENDPOINTS } from "@/constants/endpoints";
import { BaseService } from "./baseService";

class ProntuariosServices extends BaseService{
  constructor(){
    super(ENDPOINTS.PRONTUARIOS);
  }
}
export const prontuariosService = new ProntuariosServices();