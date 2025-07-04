import api from "../api";

export const aceptarPostulante = async (idSolicitud: number) => {
  try {
    const response = await api.put(`/api/Postulantes/solicitud/${idSolicitud}/aceptar`, null, {
      headers: {
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error en aceptarPostulante:", error);
    throw error;
  }
};
