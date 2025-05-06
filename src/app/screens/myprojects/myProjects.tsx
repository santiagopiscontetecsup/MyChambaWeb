'use client';

import React, { useEffect, useState } from "react";
import './styles/home.css';
import Card from "@/components/cards/Cards";
import { ProyectoEmpresa } from "@/models/proyectoEmpresa";  // Importando el nuevo modelo
import { getProjectsByEmpresaId } from "@/services/empresa/getProjects"; 
import { getUserFromToken } from "@/services/auth/authService"; 

interface HomeProps {
  proyectosIniciales: ProyectoEmpresa[];  // Usando ProyectoEmpresa
}

const MyProjects: React.FC<HomeProps> = ({ proyectosIniciales }) => {
  const [proyectos, setProyectos] = useState<ProyectoEmpresa[]>(proyectosIniciales || []);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProyectos = async () => {
      setLoading(true);
      const user = getUserFromToken();
      if (user && user.idEmpresa) {
        try {
          const proyectosBackend = await getProjectsByEmpresaId(user.idEmpresa);
          console.log("Proyectos Backend:", proyectosBackend); // Verifica lo que devuelve la API

          // Asegúrate de que la respuesta sea un array antes de asignarla
          if (Array.isArray(proyectosBackend)) {
            setProyectos(proyectosBackend);
          } else {
            console.error("La respuesta de proyectos no es un array:", proyectosBackend);
            setProyectos([]); // Ponemos un array vacío en caso de error
          }
        } catch (error) {
          console.error("Error al cargar proyectos desde el backend:", error);
          setProyectos([]); // En caso de error, ponemos un array vacío
        }
      }
      setLoading(false);
    };

    fetchProyectos();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Puedes mostrar un mensaje de carga mientras esperas la respuesta
  }

  return (
    <section className="home section container-fluid mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Mis proyectos recientes</h2>
        <p className="text-muted">Aquí encontrarás tus últimos proyectos que has publicado</p>
      </div>

      <div className="row mt-5">
        {proyectos.length === 0 ? (
          <p className="text-center text-muted">No hay proyectos publicados aún.</p>
        ) : (
          // Verifica si proyectos es un array antes de usar .map
          Array.isArray(proyectos) && proyectos.map((card) => (
            <Card
              key={card.id}
              card={{
                id: card.id,
                title: card.nombre,
                shortDescription: card.descripcion,
                technologies: [],
                date: card.fechaLimite,
                logo: "",
                members: card.numeroPostulaciones || 0,
              }}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MyProjects;
