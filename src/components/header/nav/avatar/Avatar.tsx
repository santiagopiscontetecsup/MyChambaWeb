"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/components/header/styles/Avatar.css";
import { avatarData } from "@/data/avatar/mockData";

const Avatar: React.FC = () => {
  const router = useRouter();
 
  const goToProfile = () => router.push("/profile");
  const goToSettings = () => router.push("/settings");
  const goToLogin = () => router.push("/");

  return (
    <li className="nav-item dropdown pe-3">
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <Image
          src={avatarData.image}
          alt="Profile"
          width={avatarData.image.width}   // Aquí Next.js tiene los valores correctos
          height={avatarData.image.height}
          className="rounded-circle"
        />
        <span className="d-none d-md-block dropdown-toggle ps-2">{avatarData.name}</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>{avatarData.name}</h6>
          <span>{avatarData.role}</span>
        </li>

        <li><hr className="dropdown-divider" /></li>

        <li>
          <button className="dropdown-item d-flex align-items-center" onClick={goToProfile}>
            <i className="bi bi-person"></i>
            <span>Perfil</span>
          </button>
        </li>

        <li><hr className="dropdown-divider" /></li>

        <li>
          <button className="dropdown-item d-flex align-items-center" onClick={goToSettings}>
            <i className="bi bi-gear"></i>
            <span>Configuración</span>
          </button>
        </li>

        <li><hr className="dropdown-divider" /></li>

        <li>
          <button className="dropdown-item d-flex align-items-center" onClick={goToLogin}>
            <i className="bi bi-box-arrow-right"></i>
            <span>Cerrar Sesión</span>
          </button>
        </li>
      </ul>
    </li>
  );
};

export default Avatar;
