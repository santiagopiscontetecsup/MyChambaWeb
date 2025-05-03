"use client";

import React from "react";
import './styles/home.css';
import Card from "@/components/cards/Cards";
import { projectList } from "@/data/projects/mockData";

const Home: React.FC = () => {
  return (
    <section className="home section container-fluid mt-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Mis proyectos recientes</h2>
        <p className="text-muted">Aquí encontrarás tus últimos proyectos que has publicados</p>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="row">
            {projectList.map(card => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;