// import api from "../api";

// export const fetchProyectos = async (idEmpresa: number) => {
//   try {
//     const response = await api.get(`/api/Proyectos`, {
//       params: { idEmpresa },
//     });
//     return response.data;
//   } catch (error: any) {
//     console.error("Error al recuperar los proyectos:", error.response?.data || error.message);
//     throw error;
//   }
// };

// export const publishProyecto = async (proyecto: any, token: string) => {
//     try {
//       const response = await api.post("/api/Proyectos", proyecto, {
//         headers: {
//           Authorization: `Bearer ${token}`, 
//         },
//       });
//       return response.data;
//     } catch (error: any) {
//       console.error("Error al publicar el proyecto:", error.response?.data || error.message);
//       throw error;
//     }
//   };

import api from "../api";

export const fetchProyectos = async (idEmpresa: number) => {
  try {
    const response = await api.get(`/api/Proyectos`, {
      params: { idEmpresa },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      // @ts-expect-error: es posible que error no tenga response
      console.error("Error al recuperar los proyectos:", error.response?.data || error.message);
    } else {
      console.error("Error al recuperar los proyectos:", error);
    }
    throw error;
  }
};

export const publishProyecto = async (proyecto: unknown, token: string) => {
  try {
    const response = await api.post("/api/Proyectos", proyecto, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      // @ts-expect-error: error.response no es estándar en Error
      console.error("Error al publicar el proyecto:", error.response?.data || error.message);
    } else {
      console.error("Error al publicar el proyecto:", error);
    }
    throw error;
  }
};
