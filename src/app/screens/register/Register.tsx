"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./styles/Register.css";

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
    <div className="register-container">
      <div className="register-card">
        <form action="">
          <h2 className="register-title">
            Regístrate en <span className="register-brand">MyChamba</span>
          </h2>

          {/* Campo de correo electrónico */}
          <div className="register-field">
            <label htmlFor="registerEmail" className="register-label">Correo electrónico</label>
            <div className="register-input-container">
              <input
                id="registerEmail"
                type="email"
                className={`register-input ${errors.email ? "is-invalid" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value.trimStart())}
                placeholder="correo@ejemplo.com"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>

          {/* Campo de contraseña */}
          <div className="register-field">
            <label htmlFor="registerPassword" className="register-label">Contraseña</label>
            <div className="register-input-container">
              <input
                id="registerPassword"
                type={showPassword ? "text" : "password"}
                className={`register-input ${errors.password ? "is-invalid" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
              <span
                className="register-password-toggle"
                onClick={togglePassword}
                role="button"
              >
                {showPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </span>
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
          </div>

          {/* Botón de siguiente */}
          <button
            type="button"
            className="register-button"
            onClick={handleCreateAccount}
          >
            Siguiente
          </button>
        </form>
      </div>
      <div className="toggle-box">
        <div className="toggle-panel toggle-right">
          <h2>Bienvenido nuevamente </h2>
          <p>¿Ya tienes una cuenta?</p>
          <button
            type="button"
            className="btn register-button"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;