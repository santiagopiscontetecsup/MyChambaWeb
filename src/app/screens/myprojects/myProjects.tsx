"use client";

import { useEffect, useState } from "react";
import { getProjectsByEmpresaId } from "@/services/empresa/getProjects";
import { getUserFromToken } from "@/services/auth/authService";
import Cards from "@/components/cards/Cards";
import avatar from "@/assets/avatar.jpg";

import { ProyectoEmpresa } from "@/models/proyectoEmpresa";
import { Project } from "@/data/projects/mockData";

const MyProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const user = getUserFromToken();
        const idEmpresa = user?.idEmpresa;

        if (!idEmpresa) {
          console.error("idEmpresa no definido en el token");
          return;
        }

        const data: ProyectoEmpresa[] = await getProjectsByEmpresaId(idEmpresa);
        console.log("DATA recibida del servicio:", data);
        console.log("Es array?", Array.isArray(data));

        if (!Array.isArray(data)) {
          console.error("Error: data no es un array", data);
          return;
        }

        const adapted: Project[] = data.map((proyecto) => ({
          id: proyecto.id,
          title: proyecto.nombre,
          shortDescription: proyecto.descripcion,
          logo: avatar.src,                         
          date: new Date(proyecto.fechaLimite)
                  .toLocaleDateString("es-PE"),   
          technologies: [],                          
          members: proyecto.numeroPostulaciones || 0 
        }));

        setProjects(adapted);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
      }
    };

    fetchProyectos();
  }, []);

  return (
    <div className="row">
      {projects.length > 0 ? (
        projects.map((card) => <Cards key={card.id} card={card} />)
      ) : (
        <p className="text-center text-muted">
          {projects.length === 0 ? "No tienes proyectos publicados aún." : "Cargando proyectos..."}
        </p>
      )}
    </div>
  );
};

export default MyProjects;
