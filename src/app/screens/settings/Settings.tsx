"use client";

import React from "react";
import { userProfile } from "@/data/profile/mockData";
import Image from "next/image";
import { FaEdit, FaLock, FaSignOutAlt, FaCogs, FaLanguage, FaMoon, FaInfoCircle } from "react-icons/fa";

const Settings: React.FC = () => {
  return (
    <div className="container mt-4">
      <div
        className="p-4 text-white rounded mb-4"
        style={{
          backgroundImage: `url(${userProfile.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="d-flex align-items-center">
          <Image
            src={userProfile.profileImage}
            alt="Profile"
            width={80}
            height={80}
            className="rounded-circle border border-white me-3"
          />
          <div>
            <h4 className="mb-0">{userProfile.name}</h4>
            <small>{userProfile.role}</small>
          </div>
        </div>
      </div>

      {/* Sección de acciones */}
      <div className="list-group">
        <button className="list-group-item list-group-item-action d-flex align-items-center">
          <FaEdit className="me-3" />
          Editar perfil
        </button>
        <button className="list-group-item list-group-item-action d-flex align-items-center">
          <FaLock className="me-3" />
          Cambiar contraseña
        </button>
        <button className="list-group-item list-group-item-action d-flex align-items-center">
          <FaCogs className="me-3" />
          Preferencias
        </button>
        <button className="list-group-item list-group-item-action d-flex align-items-center">
          <FaLanguage className="me-3" />
          Idioma
        </button>
        <button className="list-group-item list-group-item-action d-flex align-items-center">
          <FaMoon className="me-3" />
          Tema oscuro
        </button>
        <button className="list-group-item list-group-item-action d-flex align-items-center">
          <FaInfoCircle className="me-3" />
          Versión de la app: <span className="ms-2 text-muted">1.0.0</span>
        </button>
        <button className="list-group-item list-group-item-action text-danger d-flex align-items-center">
          <FaSignOutAlt className="me-3" />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Settings;
