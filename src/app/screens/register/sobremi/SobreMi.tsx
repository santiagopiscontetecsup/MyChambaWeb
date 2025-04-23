"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { registerEmpresa, RegisterEmpresaDTO } from "@/services/register/registerService";

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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: 500, width: "100%" }}>
        <h2 className="text-center fw-bold mb-4">Cuéntanos sobre tu empresa</h2>
        {errors.general && <div className="alert alert-danger">{errors.general}</div>}

        <div className="mb-3">
          <label className="form-label">Nombre de la empresa</label>
          <input
            type="text"
            className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Sector</label>
          <select
            className={`form-select ${errors.idSector ? "is-invalid" : ""}`}
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

        <div className="mb-3">
          <label className="form-label">RUC</label>
          <input
            type="text"
            className={`form-control ${errors.ruc ? "is-invalid" : ""}`}
            value={ruc}
            onChange={(e) => setRuc(e.target.value)}
          />
          {errors.ruc && <div className="invalid-feedback">{errors.ruc}</div>}
        </div>

        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={handleFinalize}
          disabled={loading}
        >
          {loading ? "Registrando..." : "Finalizar registro"}
        </button>
      </div>
    </div>
  );
};

export default SobreMi;
