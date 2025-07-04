"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/components/header/styles/Avatar.css";
import { getUserFromToken } from "@/services/auth/authService";
import { getEmpresaByIdEmpresa } from "@/services/empresa/getData";
import avatarDefault from "@/assets/avatar.jpg";

const Avatar: React.FC = () => {
  const router = useRouter();
  const [empresaNombre, setEmpresaNombre] = useState("Empresa");

  const goToProfile = () => router.push("/profile");
  const goToSettings = () => router.push("/settings");
  const goToLogin = () => router.push("/");

  useEffect(() => {
    const fetchEmpresaInfo = async () => {
      const user = getUserFromToken();
      const idEmpresa = user?.idEmpresa;

      if (!idEmpresa) {
        console.warn("idEmpresa no encontrado en el token.");
        return;
      }

      try {
        const empresa = await getEmpresaByIdEmpresa(idEmpresa);
        setEmpresaNombre(empresa?.nombre || "Empresa");
      } catch (error) {
        console.error("Error al obtener datos de la empresa:", error);
      }
    };

    fetchEmpresaInfo();
  }, []);

  return (
    <li className="nav-item dropdown pe-3">
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <Image
          src={avatarDefault}
          alt="Profile"
          width={40}
          height={40}
          className="rounded-circle"
        />
        <span className="d-none d-md-block dropdown-toggle ps-2">{empresaNombre}</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>{empresaNombre}</h6>
          <span>Empresa</span>
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
