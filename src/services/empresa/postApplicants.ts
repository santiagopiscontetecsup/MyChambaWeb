import api from "../api";

export const aceptarPostulante = async (idSolicitud: number) => {
  try {
    const response = await api.post(`/api/Postulantes/aceptar/${idSolicitud}`, null, {
      headers: {
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error en aceptarPostulante:", error);
    throw error;
  }
};
