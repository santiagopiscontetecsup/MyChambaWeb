"use client";

import React, { useEffect, useState } from "react";
import './styles/home.css';
import Card from "@/components/cards/Cards";
import { Proyecto } from "@/models/project";

interface HomeProps {
  proyectosIniciales: Proyecto[]; 
}

const Home: React.FC<HomeProps> = ({ proyectosIniciales }) => {
  const [proyectos, setProyectos] = useState<Proyecto[]>(proyectosIniciales || []);

  useEffect(() => {
    const storedProjects = localStorage.getItem('proyectosPublicados');
    if (storedProjects) {
      const proyectos = JSON.parse(storedProjects);
      console.log("Proyectos cargados:", proyectos.map((p: Proyecto) => ({ id: p.id, title: p.title })));
      const uniqueProyectos = proyectos.map((proyecto: Proyecto, index: number) => ({
        ...proyecto,
        id: proyecto.id || `unique-id-${index}`,
      }));
      localStorage.setItem('proyectosPublicados', JSON.stringify(uniqueProyectos));
      setProyectos(uniqueProyectos);
    }
  }, []);

  return (
    <section className="home section container-fluid mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Mis proyectos recientes</h2>
        <p className="text-muted">Aquí encontrarás tus últimos proyectos que has publicado</p>
      </div>

      <div className="row mt-5">
        {proyectos.map((card) => (
          <Card
            key={`${card.id}-${card.title}-${Math.random()}`}
            card={{
              id: Number(card.id),
              title: card.title,
              shortDescription: card.description,
              technologies: card.technologies || [],
              date: card.deadline,
              logo: card.logo || "",
              members: card.members || 0,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;