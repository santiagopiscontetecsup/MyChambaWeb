"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "@/components/cards/styles/cards.css";
import { Project } from "@/data/projects/mockData";
import avatar from "@/assets/avatar.jpg";

interface Props {
  card: Project;
}

const Card: React.FC<Props> = ({ card }) => {
  const router = useRouter();

  const handleViewApplicants = () => {
    router.push(`/applicants/${card.id}`);
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm card-hover">
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center mb-3">
            <img src={card.logo || avatar.src} alt="Logo" className="avatar-logo me-2" />
            <div>
              <h5 className="card-title mb-0">{card.title || "Sin título"}</h5>
              <small className="text-muted">Empresa: PisconteDev</small>
            </div>
          </div>

          <hr className="my-2" />

          <p className="text-muted mb-1">
            <small>📅 Publicado: {card.date || "Fecha no disponible"}</small>
          </p>

          <p className="card-text">{card.shortDescription || "Sin descripción"}</p>

          <div className="tech-list mb-3">
            {card.technologies && card.technologies.length > 0 ? (
              card.technologies.map((tech, index) => (
                <span key={index} className="badge bg-light text-dark border me-1 mb-1">
                  {tech}
                </span>
              ))
            ) : (
              <span className="text-muted">Sin tecnologías</span>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
            <div className="d-flex align-items-center">
              <i className="bi bi-people-fill me-1 text-primary"></i>
              <span>{card.members || 0} miembros</span>
            </div>
            <div className="d-flex gap-2">
              <button
                className="btn p-0 border-0 text-secondary"
                title="Ver postulantes"
                onClick={handleViewApplicants}
              >
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
