// import api from "../api";

// export interface EmpresaPayload {
//   nombre: string;
//   telefono: string;
//   direccion: string;
//   ruc: string;
//   logo: string;
//   idSector: number;
// }

// export interface RegisterEmpresaDTO {
//   email: string;
//   password: string;
//   empresa: EmpresaPayload;
// }

// export const registerEmpresa = async (
//   payload: RegisterEmpresaDTO
// ): Promise<any> => {
//   try {
//     const response = await api.post("/api/UserRegister/register/empresa", payload);
//     return response.data;
//   } catch (error: any) {
//     console.error("registerEmpresa error:", error.response?.data || error.message);
//     throw error;
//   }
// };


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
): Promise<unknown> => {
  try {
    const response = await api.post("/api/UserRegister/register/empresa", payload);
    return response.data;
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "response" in error &&
      typeof (error as { response?: { data?: unknown } }).response === "object" &&
      (error as { response?: { data?: unknown } }).response !== null
    ) {
      console.error(
        "registerEmpresa error:",
        (error as { response?: { data?: unknown } }).response?.data || "No data"
      );
    } else if (error instanceof Error) {
      console.error("registerEmpresa error:", error.message);
    } else {
      console.error("registerEmpresa error:", error);
    }
    throw error;
  }
};
