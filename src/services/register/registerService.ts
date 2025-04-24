import api from "../api";

export interface EmpresaPayload {
  nombre: string;
  telefono: string;
  direccion: string;
  ruc: string;
  logo: string;
  idSector: number;
}

export interface RegisterEmpresaDTO {
  email: string;
  password: string;
  empresa: EmpresaPayload;
}

export const registerEmpresa = async (
  payload: RegisterEmpresaDTO
): Promise<any> => {
  try {
    const response = await api.post("/api/Usuario/register/empresa", payload);
    return response.data;
  } catch (error: any) {
    console.error("registerEmpresa error:", error.response?.data || error.message);
    throw error;
  }
};
