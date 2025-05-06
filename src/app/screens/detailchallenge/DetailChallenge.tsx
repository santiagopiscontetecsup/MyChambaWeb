import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Proyecto } from "@/components/forms/ChallengeForm";
import './styles/DetailChallenge.css';

const DetailChallenge: React.FC = () => {
  const [proyecto, setProyecto] = useState<Proyecto | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("formProyecto");
    if (storedData) {
        const parsedData: Proyecto = JSON.parse(storedData);
        console.log("Proyecto cargado desde localStorage:", parsedData);
        setProyecto(parsedData);
    } else {
        console.log("No se encontró ningún proyecto en localStorage.");
    }
}, []);

  if (!proyecto) {
    return <div>No se pudo cargar el proyecto.</div>; // Mensaje de error si no hay proyecto
  }

  const handleEdit = () => {
    console.log("Redirigiendo a /postchallenge con el proyecto:", proyecto);
    localStorage.setItem("formProyecto", JSON.stringify(proyecto)); // Guarda el proyecto actual en localStorage
    router.push("/postchallenge"); // Redirige a la vista de postchallenge
  };

  const handlePublish = () => {
    console.log("handlePublish ejecutado con el proyecto:", proyecto);

    // Obtener la lista de proyectos publicados desde localStorage
    const storedProjects = localStorage.getItem("proyectosPublicados");
    const proyectosPublicados = storedProjects ? JSON.parse(storedProjects) : [];

    // Verifica si el proyecto ya existe en la lista
    const proyectoExiste = proyectosPublicados.some(
      (p: Proyecto) => p.id === proyecto.id
    );

    if (proyectoExiste) {
      alert("El proyecto ya está publicado.");
      router.push("/home");
      return;
    }

    // Agregar el proyecto al inicio de la lista
    proyectosPublicados.unshift(proyecto);
    localStorage.setItem("proyectosPublicados", JSON.stringify(proyectosPublicados));

    // Eliminar los datos del formulario de localStorage
    localStorage.removeItem("formProyecto");

    alert("Proyecto publicado con éxito");
    router.push("/home"); // Redirigir a la página principal
  };

  return (
    <div className="project-card">
      <h2 className="project-title">{proyecto.title}</h2>
      <p className="project-description">{proyecto.shortDescription}</p>

      <div className="project-details">
        <div className="detail">
          <p className="label">Requisitos:</p>
          <p>{proyecto.requirements}</p>
        </div>
        <div className="detail">
          <p className="label">Objetivos:</p>
          <p>{proyecto.objectives}</p>
        </div>
        <div className="detail">
          <p className="label">Fecha límite:</p>
          <p>{proyecto.deadline}</p>
        </div>
        <div className="detail">
          <p className="label">Recompensa:</p>
          <p>{proyecto.reward ? "Sí" : "No"}</p>
        </div>
        <div className="detail">
          <p className="label">Certificado:</p>
          <p>{proyecto.certificate ? "Sí" : "No"}</p>
        </div>
        <div className="detail">
          <p className="label">Plazo de entrega:</p>
          <p>{proyecto.duration}</p>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="button-group">
        <button className="edit-button" onClick={handleEdit}>
          Editar
        </button>
        <button className="publish-button" onClick={handlePublish}>
          Publicar
        </button>
      </div>
    </div>
  );
};

export default DetailChallenge;