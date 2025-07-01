"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./../styles/header.css";
import logoPrincipal from "@/assets/logo_principal.jpg";

export const Header: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  const closeNavbar = () => setIsCollapsed(true); // <- esta función cierra el menú

  return (
    <header className="navbar navbar-expand-lg shadow-sm sticky-top custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="navbar-brand d-flex align-items-center" onClick={closeNavbar}>
          <img
            src={logoPrincipal.src}
            alt="Logo"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold fs-4 text-brand">FullChamba</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`} id="navbarResponsive">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <a className="nav-link fw-semibold" href="#contratar" onClick={closeNavbar}>
                Quiero contratar
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link fw-semibold"
                href="https://mega.nz/file/EEhQXJCC#mzO93kGsr9vrPrRcURYdvSYqqNTIzAjUeQ_ewN9gLEY"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeNavbar}
              >
                Quiero trabajar
              </a>
            </li>
          </ul>

          <div className="d-lg-flex align-items-center mt-3 mt-lg-0">
            <a href="/register" className="btn btn-outline-brand me-2 mb-2 mb-lg-0" onClick={closeNavbar}>
              Registrarse
            </a>
            <a href="/login" className="btn btn-brand" onClick={closeNavbar}>
              Iniciar sesión
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
