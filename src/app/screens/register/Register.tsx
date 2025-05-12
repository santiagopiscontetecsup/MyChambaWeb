"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const togglePassword = () => setShowPassword((v) => !v);

  const validate = () => {
    const errs: typeof errors = {};
    const eTrim = email.trim();
    if (!eTrim) errs.email = "El correo es obligatorio.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eTrim))
      errs.email = "Formato de correo inválido.";

    if (!password) errs.password = "La contraseña es obligatoria.";
    else if (password.length < 6)
      errs.password = "La contraseña debe tener al menos 6 caracteres.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCreateAccount = () => {
    if (!validate()) return;
    sessionStorage.setItem("regEmail", email.trim());
    sessionStorage.setItem("regPassword", password);
    router.push("/sobremi");
  };

  const handleLogin = () => router.push("/");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h2 className="text-center fw-bold mb-4">
          Regístrate en <span className="text-primary">MyChamba</span>
        </h2>

        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">Correo electrónico</label>
          <input
            id="registerEmail"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value.trimStart())}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-4">
          <label htmlFor="registerPassword" className="form-label">Contraseña</label>
          <div className="input-group">
            <input
              id="registerPassword"
              type={showPassword ? "text" : "password"}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
            <span className="input-group-text bg-white" onClick={togglePassword} role="button">
              {showPassword ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </span>
            {errors.password && (
              <div className="invalid-feedback d-block">{errors.password}</div>
            )}
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary w-100 mb-3"
          onClick={handleCreateAccount}
        >
          Siguiente
        </button>

        <div className="text-center">
          <p className="mb-0">
            ¿Ya tienes cuenta?
            <button
              type="button"
              onClick={handleLogin}
              className="btn btn-link p-0 ms-1"
            >
              Iniciar sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
