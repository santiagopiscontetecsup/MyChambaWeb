// services/projectService.ts
import api from "../api";

export interface ProyectoPayload {
  idEmpresa: number;
  titulo: string;
  descripcion: string;
  fechaLimite: string; // ISO format (ej: "2025-05-06T16:28:10.551Z")
  tipoRecompensa: number; // 0 o 1
  idHabilidades: number[]; // Ej: [1, 2]
}

export const registerProject = async (payload: ProyectoPayload) => {
  const response = await api.post("/api/Proyectos", payload);
  return response.data;
};
