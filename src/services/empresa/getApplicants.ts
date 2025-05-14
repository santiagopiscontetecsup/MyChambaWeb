import api from "../api";
import { Postulante } from "@/components/cards/CardPostulante";

export const getPostulantesByProyectoId = async (
  idProyecto: number
): Promise<Postulante[]> => {
  const response = await api.get<Postulante[]>(`/api/Postulantes/proyecto/${idProyecto}/postulantes`, {
    headers: {
      "ngrok-skip-browser-warning": "69420",
    },
  });

  return response.data;
};
