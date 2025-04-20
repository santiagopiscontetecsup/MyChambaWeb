"use client";

import React from "react";
import "@/components/header/styles/Avatar.css";
import { avatarData } from "@/data/avatar/mockData";

const Avatar: React.FC = () => {
  return (
    <li className="nav-item dropdown pe-3">
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <img src={avatarData.image} alt="Profile" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toggle ps-2">{avatarData.name}</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>{avatarData.name}</h6>
          <span>{avatarData.role}</span>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-person"></i>
            <span>Perfil</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-gear"></i>
            <span>Configuración</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-box-arrow-right"></i>
            <span>Cerrar Sesión</span>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Avatar;
