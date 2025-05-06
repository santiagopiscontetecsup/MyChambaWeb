import api from "../api";

export const getProjectsByEmpresaId = async (idEmpresa: number) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token no encontrado");
  }

  try {
    const response = await api.get("/api/Proyectos", {
      params: { idEmpresa },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Respuesta de la API:", response);

    if (response.status === 200) {
      // Verifica que la respuesta sea un array
      if (Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error("La respuesta no es un array:", response.data);
        throw new Error("Error al obtener los proyectos: La respuesta no es un array");
      }
    } else {
      console.error(`Error en la respuesta: ${response.status}`);
      throw new Error("Error al obtener los proyectos");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
};
