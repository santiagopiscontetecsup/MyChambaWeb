"use client";

import React, { useState, useEffect } from "react";
/** @jsxImportSource react */
import { useRouter } from "next/navigation";
import { registerEmpresa, RegisterEmpresaDTO } from "@/services/register/registerService";
import "./styles/SobreMi.css";

const sectores = [
  { id: 1, nombre: "Tecnología" },
  { id: 2, nombre: "Salud" },
  { id: 3, nombre: "Educación" },
  { id: 4, nombre: "Finanzas" },
  { id: 5, nombre: "Manufactura" },
];

const SobreMi: React.FC = () => {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ruc, setRuc] = useState("");
  const [idSector, setIdSector] = useState<number | "">("");
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(sessionStorage.getItem("regEmail") || "");
    setPassword(sessionStorage.getItem("regPassword") || "");
  }, []);

  const validate = () => {
    const errs: typeof errors = {};
    if (!nombre) errs.nombre = "El nombre es obligatorio.";
    if (!ruc) errs.ruc = "El RUC es obligatorio.";
    else if (!/^[0-9]+$/.test(ruc)) errs.ruc = "Solo números.";
    if (idSector === "") errs.idSector = "Selecciona un sector.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFinalize = async () => {
    if (!validate()) return;

    const payload: RegisterEmpresaDTO = {
      email,
      password,
      empresa: {
        nombre,
        telefono: telefono || "",
        direccion: direccion || "",
        ruc,
        logo: "",
        idSector: Number(idSector),
      },
    };

    try {
      setLoading(true);
      console.log("Payload a enviar:", payload);
      await registerEmpresa(payload);
      sessionStorage.removeItem("regEmail");
      sessionStorage.removeItem("regPassword");
      router.push("/");
    } catch {
      setErrors({ general: "Error al registrar. Intenta de nuevo." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sobre-mi-container">
      <div className="sobre-mi-card">
        <form action="">
          <h2 className="sobre-mi-title">Cuéntanos sobre tu empresa</h2>
          {errors.general && <div className="sobre-mi-error-general">{errors.general}</div>}

          {/* Campo de nombre */}
          <div className="sobre-mi-field">
            <label htmlFor="nombreEmpresa" className="sobre-mi-label">Nombre de la empresa</label>
            <input
              id="nombreEmpresa"
              type="text"
              className={`sobre-mi-input ${errors.nombre ? "is-invalid" : ""}`}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
          </div>

          {/* Campo de teléfono */}
          <div className="sobre-mi-field">
            <label htmlFor="telefonoEmpresa" className="sobre-mi-label">Teléfono</label>
            <input
              id="telefonoEmpresa"
              type="text"
              className="sobre-mi-input"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          {/* Campo de dirección */}
          <div className="sobre-mi-field">
            <label htmlFor="direccionEmpresa" className="sobre-mi-label">Dirección</label>
            <input
              id="direccionEmpresa"
              type="text"
              className="sobre-mi-input"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>

          {/* Campo de sector */}
          <div className="sobre-mi-field">
            <label htmlFor="sectorEmpresa" className="sobre-mi-label">Sector</label>
            <div className="sobre-mi-field">
              <select
                id="sectorEmpresa"
                className={`sobre-mi-select ${errors.idSector ? "is-invalid" : ""}`}
                value={idSector ?? ""}
                onChange={(e) => setIdSector(e.target.value === "" ? "" : parseInt(e.target.value))}
                >
                <option value="">Selecciona un sector</option>
                {sectores.map((s) => (
                  <option key={s.id} value={s.id}>{s.nombre}</option>
                ))}
              </select>
              {errors.idSector && <div className="invalid-feedback">{errors.idSector}</div>}
            </div>
          </div>

          {/* Campo de RUC */}
          <div className="sobre-mi-field">
            <label htmlFor="rucEmpresa" className="sobre-mi-label">RUC</label>
            <input
              id="rucEmpresa"
              type="text"
              className={`sobre-mi-input ${errors.ruc ? "is-invalid" : ""}`}
              value={ruc}
              onChange={(e) => setRuc(e.target.value)}
            />
            {errors.ruc && <div className="invalid-feedback">{errors.ruc}</div>}
          </div>

          {/* Botón de finalizar */}
          <button
            type="button"
            className="sobre-mi-button"
            onClick={handleFinalize}
            disabled={loading}
          >
            {loading ? "Registrando..." : "Finalizar registro"}
          </button>
        </form>     
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h2>MyChamba</h2>
          <p>Falta poco para registrarte</p>
        </div>
      </div>

    </div>
  );
};

export default SobreMi;