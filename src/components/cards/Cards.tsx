"use client";

import React from "react";
import "@/components/cards/styles/cards.css";
import { Project } from "@/data/projects/mockData";
import avatar from "@/assets/avatar.jpg";

interface Props {
  card: Project;
}

const Card: React.FC<Props> = ({ card }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm card-hover">
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center mb-3">
            <img src={avatar.src} alt="Logo" className="avatar-logo me-2" />
            <div>
              <h5 className="card-title mb-0">{card.title}</h5>
              <small className="text-muted">Empresa: PisconteDev</small>
            </div>
          </div>

          <hr className="my-2" />

          <p className="text-muted mb-1">
            <small>📅 Publicado: {card.date}</small>
          </p>

          <p className="card-text">{card.shortDescription}</p>

          <div className="tech-list mb-3">
            {card.technologies.map((tech, index) => (
              <span key={index} className="badge bg-light text-dark border me-1 mb-1">
                {tech}
              </span>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
            <div className="d-flex align-items-center">
              <i className="bi bi-people-fill me-1 text-primary"></i>
              <div className="avatar-group">
                <img src={avatar.src} alt="User" className="avatar-sm" />
                <img src={avatar.src} alt="User" className="avatar-sm" />
                <img src={avatar.src} alt="User" className="avatar-sm" />
                <span className="more-count">+6</span>
              </div>
            </div>
            <div className="d-flex gap-2">
                <button className="btn p-0 border-0 text-secondary" title="Ver">
                    <i className="bi bi-eye-fill"></i>
                </button>
                <button className="btn p-0 border-0 text-secondary" title="Editar">
                    <i className="bi bi-pencil-fill"></i>
                </button>
                <button className="btn p-0 border-0 text-secondary" title="Eliminar">
                    <i className="bi bi-trash-fill"></i>
                </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
