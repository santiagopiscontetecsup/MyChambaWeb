import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import './styles/DetailChallenge.css';
import { getUserFromToken } from '@/services/auth/authService';

const DetailChallenge: React.FC = () => {
  const [proyecto, setProyecto] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("formProyecto");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log("Proyecto cargado desde localStorage:", parsedData);
      setProyecto(parsedData);
    } else {
      console.log("No se encontró ningún proyecto en localStorage.");
    }
  }, []);

  if (!proyecto) {
    return <div>No se pudo cargar el proyecto.</div>;
  }

  const handleEdit = () => {
    localStorage.setItem("formProyecto", JSON.stringify(proyecto));
    router.push("/postchallenge");
  };

  const handlePublish = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No hay token disponible.");
        return;
      }

      // Obtener idEmpresa desde el token usando el servicio
      const user = getUserFromToken();
      if (!user || !user.idEmpresa) {
        alert("No se pudo obtener el ID de la empresa.");
        return;
      }

      // Crear el objeto de envío al backend
      const proyectoParaEnviar = {
        ...proyecto,
        idEmpresa: user.idEmpresa,
      };

      const response = await fetch("http://44.201.117.88:5227/api/Proyectos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // ✅ ESTA ES LA CORRECCIÓN CLAVE
        },
        body: JSON.stringify(proyectoParaEnviar),
      });

      if (!response.ok) throw new Error("Error al publicar el proyecto");

      alert("Proyecto publicado con éxito en el servidor");
      localStorage.removeItem("formProyecto");
      router.push("/myprojects");

    } catch (error) {
      console.error("Error en la publicación del proyecto:", error);
      alert("Ocurrió un error al publicar el proyecto.");
    }
  };

  const habilidades = Array.isArray(proyecto.idHabilidades)
    ? proyecto.idHabilidades.join(', ')
    : 'No hay habilidades';

  return (
    <div className="detalle-container">
      <h1>{proyecto.titulo}</h1>
      <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
      <p><strong>Fecha Límite:</strong> {proyecto.fechaLimite}</p>
      <p><strong>Recompensa:</strong> {proyecto.tipoRecompensa === 1 ? 'Sí' : 'No'}</p>
      <p><strong>ID Habilidades:</strong> {habilidades}</p>

      <button onClick={handleEdit}>Editar</button>
      <button onClick={handlePublish}>Publicar</button>
    </div>
  );
};

export default DetailChallenge;