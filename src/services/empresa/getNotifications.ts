import api from "../api";
import { getUserFromToken } from "@/services/auth/authService";

export interface Notificacion {
  id: number;
  tipoMensaje: string;
  mensaje: string;
  fechaEnvio: string;
  leido: boolean;
}

export const getNotificacionesByEmpresaId = async (): Promise<Notificacion[]> => {
  const user = getUserFromToken();
  if (!user) throw new Error("Usuario no autenticado");

  const response = await api.get<Notificacion[]>(
    `/api/Notificaciones/empresa/${user.idEmpresa}`,
    {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    }
  );

  return response.data;
};
