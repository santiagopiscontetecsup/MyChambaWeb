"use client";

import React, { useEffect, useState } from "react";
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
import avatarDefault from "@/assets/avatar.jpg";
import backgroundDefault from "@/assets/img/fondo.jpg";
import { getUserFromToken } from "@/services/auth/authService";
import { getEmpresaByIdEmpresa } from "@/services/empresa/getData";

const Settings: React.FC = () => {
  const router = useRouter();
  const [empresaNombre, setEmpresaNombre] = useState("Empresa");
  const [ruc, setRuc] = useState("");
  const [logo, setLogo] = useState("");
  const [background, setBackground] = useState(backgroundDefault.src);

  const goToLogin = () => router.push("/");

  useEffect(() => {
    const fetchEmpresa = async () => {
      const user = getUserFromToken();
      const idEmpresa = user?.idEmpresa;

      if (!idEmpresa) {
        console.warn("idEmpresa no encontrado en el token.");
        return;
      }

      try {
        const empresa = await getEmpresaByIdEmpresa(idEmpresa);
        setEmpresaNombre(empresa?.nombre || "Empresa");
        setRuc(empresa?.ruc || "");
        setLogo(empresa?.logo || "");
      } catch (error) {
        console.error("Error al obtener datos de la empresa:", error);
      }
    };

    fetchEmpresa();
  }, []);

  return (
    <div className="settings-container">
      <div className="profile-card">
        <div
          className="profile-banner"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="profile-info">
            <Image
              src={logo || avatarDefault}
              alt="Profile"
              width={80}
              height={80}
              className="profile-avatar"
            />
            <div>
              <h4 className="profile-name">{empresaNombre}</h4>
              <small className="profile-role">{ruc}</small>
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
