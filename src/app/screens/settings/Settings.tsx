"use client";

import React from "react";
import { userProfile } from "@/data/profile/mockData";
import Image from "next/image";
import {
  FaEdit,
  FaLock,
  FaSignOutAlt,
  FaCogs,
  FaLanguage,
  FaMoon,
  FaInfoCircle,
} from "react-icons/fa";
import "./styles/settings.css"; 
import { useRouter } from "next/navigation";


const Settings: React.FC = () => {
  const router = useRouter();

  const goToLogin = () => router.push("/");

  return (
    <div className="settings-container">
      {/* Card de perfil */}
      <div className="profile-card">
        <div
          className="profile-banner"
          style={{
            backgroundImage: `url(${userProfile.backgroundImage})`,
          }}
        >
          <div className="profile-info">
            <Image
              src={userProfile.profileImage}
              alt="Profile"
              width={80}
              height={80}
              className="profile-avatar"
            />
            <div>
              <h4 className="profile-name">{userProfile.name}</h4>
              <small className="profile-role">{userProfile.role}</small>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-options">
        <button className="settings-item">
          <FaEdit className="icon" />
          Editar perfil
        </button>
        <button className="settings-item">
          <FaLock className="icon" />
          Cambiar contraseña
        </button>
        <button className="settings-item">
          <FaCogs className="icon" />
          Preferencias
        </button>
        <button className="settings-item">
          <FaLanguage className="icon" />
          Idioma
        </button>
        <button className="settings-item">
          <FaMoon className="icon" />
          Tema oscuro
        </button>
        <button className="settings-item">
          <FaInfoCircle className="icon" />
          Versión de la app: <span className="version">1.0.0</span>
        </button>
        <button className="settings-item logout" onClick={goToLogin}>
          <FaSignOutAlt className="icon" />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Settings;
