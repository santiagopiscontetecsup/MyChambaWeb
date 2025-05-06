'use client';

import React, { useEffect, useState } from "react";
import './styles/main.css';
import PageTittle from "../home/pageTittle/PageTittle";
import MyProjects from "./myProjects";
import { ProyectoEmpresa } from "@/models/proyectoEmpresa";
import { getProjectsByEmpresaId } from "@/services/empresa/getProjects";
import { getUserFromToken } from "@/services/auth/authService";

const Main: React.FC = () => {
  const [proyectosIniciales, setProyectosIniciales] = useState<ProyectoEmpresa[]>([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      const user = getUserFromToken();
      if (user && user.idEmpresa) {
        try {
          const proyectosBackend = await getProjectsByEmpresaId(user.idEmpresa);
          // Asegúrate de que la respuesta sea un array
          if (Array.isArray(proyectosBackend)) {
            setProyectosIniciales(proyectosBackend);
          } else {
            console.error("La respuesta de proyectos no es un array:", proyectosBackend);
            setProyectosIniciales([]); // En caso de error, ponemos un array vacío
          }
        } catch (error) {
          console.error("Error al cargar proyectos desde el backend:", error);
          setProyectosIniciales([]); // En caso de error, ponemos un array vacío
        }
      }
    };

    fetchProyectos();
  }, []);

  return (
    <main id="main" className="main">
      <PageTittle page="Mis Proyectos" />
      <MyProjects proyectosIniciales={proyectosIniciales} />
    </main>
  );
};

export default Main;
