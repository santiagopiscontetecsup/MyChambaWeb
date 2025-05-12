"use client";

import React, { useEffect, useState } from "react";
import './styles/home.css';
import Card from "@/components/cards/Cards";
import avatar from "@/assets/avatar.jpg";

import { getProjectsByEmpresaId } from "@/services/empresa/getProjects";
import { getUserFromToken } from "@/services/auth/authService";
import { ProyectoEmpresa } from "@/models/proyectoEmpresa";
import { Project } from "@/data/projects/mockData";

const Home = () => {
  const [proyectos, setProyectos] = useState<Project[]>([]);

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

        if (!Array.isArray(data)) {
          console.error("Error: data no es un array", data);
          return;
        }

        const adapted: Project[] = data
          .map((proyecto) => ({
            id: proyecto.id,
            title: proyecto.nombre,
            shortDescription: proyecto.descripcion,
            logo: avatar.src,
            date: new Date(proyecto.fechaLimite).toLocaleDateString("es-PE"),
            technologies: [],
            members: proyecto.numeroPostulaciones || 0
          }))
          .sort((a, b) => {
            const dateA = new Date(a.date.split("/").reverse().join("/"));
            const dateB = new Date(b.date.split("/").reverse().join("/"));
            return dateB.getTime() - dateA.getTime();
          })
          .slice(0, 6); 

        setProyectos(adapted);
      } catch (error) {
        console.error("Error al cargar proyectos para home:", error);
      }
    };

    fetchProyectos();
  }, []);

  return (
    <section className="home section container-fluid mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Mis proyectos recientes</h2>
        <p className="text-muted">Aquí encontrarás tus últimos proyectos que has publicado</p>
      </div>

      <div className="row mt-5">
        {proyectos.length > 0 ? (
          proyectos.map((card) => (
            <Card
              key={card.id}
              card={card}
            />
          ))
        ) : (
          <p className="text-center text-muted">
            {proyectos.length === 0 ? "No hay proyectos recientes aún." : "Cargando proyectos..."}
          </p>
        )}
      </div>
    </section>
  );
};

export default Home;
