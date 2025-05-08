import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserFromToken } from "@/services/auth/authService";
import { publishProyecto } from "@/services/project/projectService";
import "./styles/DetailChallenge.css";

const habilidadesMap: { [key: number]: string } = {
  1: "Java",
  2: "Python",
  3: "JavaScript",
  4: "C++",
  5: "React",
};

const formatFecha = (fecha: string): string => {
  const date = new Date(fecha);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

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

      const user = getUserFromToken();
      if (!user || !user.idEmpresa) {
        alert("No se pudo obtener el ID de la empresa.");
        return;
      }

      const proyectoParaEnviar = {
        ...proyecto,
        idEmpresa: user.idEmpresa,
      };

      await publishProyecto(proyectoParaEnviar, token);

      alert("Proyecto publicado con éxito en el servidor");
      localStorage.removeItem("formProyecto");
      router.push("/myprojects");
    } catch (error) {
      console.error("Error en la publicación del proyecto:", error);
      alert("Ocurrió un error al publicar el proyecto.");
    }
  };

  const habilidades =
    Array.isArray(proyecto.idHabilidades) && proyecto.idHabilidades.length > 0
      ? proyecto.idHabilidades.map((id: number) => habilidadesMap[id] || `Habilidad desconocida (${id})`).join(", ")
      : "No hay habilidades";

  return (
    <div className="detalle-container">
      <h1>{proyecto.titulo}</h1>
      <hr />
      <p><strong>Descripción:</strong> {proyecto.descripcion}</p>
      <p><strong>Fecha Límite:</strong> {formatFecha(proyecto.fechaLimite)}</p>
      <p><strong>Recompensa:</strong> {proyecto.tipoRecompensa === 1 ? "Sí" : "No"}</p>
      <p><strong>Habilidades:</strong> {habilidades}</p>

      <button onClick={handleEdit}>Editar</button>
      <button onClick={handlePublish}>Publicar</button>
    </div>
  );
};

export default DetailChallenge;