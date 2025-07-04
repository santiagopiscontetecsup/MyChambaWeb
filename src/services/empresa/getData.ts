import api from "../api";

/**
 * Obtiene la información de una empresa a partir de su ID.
 * @param idEmpresa ID de la empresa
 * @returns Datos de la empresa
 */
export const getEmpresaByIdEmpresa = async (idEmpresa: number) => {
  try {
    const response = await api.get(`/api/Empresa/${idEmpresa}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      // @ts-expect-error: puede que no tenga .response
      console.error("Error al obtener datos de empresa:", error.response?.data || error.message);
    } else {
      console.error("Error al obtener datos de empresa:", error);
    }
    throw error;
  }
};
