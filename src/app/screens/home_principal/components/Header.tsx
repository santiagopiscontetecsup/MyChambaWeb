"use client";
import React from "react";
import Link from "next/link";
import "./../styles/header.css";
import logoPrincipal from "@/assets/logo_principal.jpg";

export const Header: React.FC = () => {
  return (
    <header className="navbar navbar-expand-lg shadow-sm sticky-top custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logoPrincipal.src}
            alt="Logo"
            width="40"
            height="40"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold fs-4 text-brand">FullChamba</span>
        </Link>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item px-3">
              <a className="nav-link fw-semibold" href="#contratar">
                Quiero contratar
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                className="nav-link fw-semibold"
                href="https://mega.nz/file/EEhQXJCC#mzO93kGsr9vrPrRcURYdvSYqqNTIzAjUeQ_ewN9gLEY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiero trabajar
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <a href="/register" className="btn btn-outline-brand me-2">Registrarse</a>
          <a href="/login" className="btn btn-brand">Iniciar sesión</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
