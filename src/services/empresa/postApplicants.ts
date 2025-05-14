// import api from "../api";

// export const aceptarPostulante = async (idSolicitud: number) => {
//   try {
//     const response = await api.post(`/api/Postulantes/aceptar/${idSolicitud}`);

//     return response.data; 
//   } catch (error) {
//     console.error("Error en aceptarPostulante:", error);
//     throw error;
//   }
// };

import api from "../api";

export const aceptarPostulante = async (idSolicitud: number) => {
  try {
    const response = await api.post(`/api/Postulantes/aceptar/${idSolicitud}`, null, {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error en aceptarPostulante:", error);
    throw error;
  }
};
