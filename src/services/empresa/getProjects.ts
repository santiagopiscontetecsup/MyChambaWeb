import api from "../api";
import { ProyectoEmpresa } from "@/models/proyectoEmpresa";

export const getProjectsByEmpresaId = async (
  idEmpresa: number
): Promise<ProyectoEmpresa[]> => {
  const token = localStorage.getItem("token");
  const response = await api.get<ProyectoEmpresa[]>("/api/Proyectos", {
    params: { idEmpresa },
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  return response.data;
};
