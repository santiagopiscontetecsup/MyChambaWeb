"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/login/loginService";
import "./styles/Login.css"
import { href } from "react-router-dom";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [loading, setLoading] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const validate = () => {
    const errs: typeof errors = {};
    if (!email) errs.email = "El correo es obligatorio.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Formato de correo inválido.";
    if (!password) errs.password = "La contraseña es obligatoria.";
    else if (password.length < 6)
      errs.password = "La contraseña debe tener al menos 6 caracteres.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    try {
      setLoading(true);
      const response = await loginUser(email, password);
      localStorage.setItem("token", response.token);
      router.push("/home");
    } catch (err: any) {
      setErrors({ general: "Correo o contraseña incorrectos." });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form action="">
          <h2 className="login-title">
            Iniciar sesión<span className="login-brand"></span>
          </h2>

            {errors.general && (
              <div className="login-error-general">
                {errors.general}
              </div>
            )}
          
          <div className="login-field">
            <label htmlFor="loginEmail" className="login-label">
              Correo electrónico
            </label>
            <div className="input-box">
              <input
                id="loginEmail"
                type="email"
                className={`login-input ${errors.email ? "login-input-error" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@ejemplo.com"
              />
              {errors.email && <div className="login-error">{errors.email}</div>}
            </div>
          </div>
        
          <div className="login-field">
            <label htmlFor="loginPassword" className="login-label">
              Contraseña
            </label>
            <div className="input-box">
              <input
                id="loginPassword"
                type={showPassword ? "text" : "password"}
                className={`login-input ${errors.password ? "login-input-error" : ""}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
              />
              <span
                onClick={togglePassword}
                className="login-password-toggle"
                role="button"
              >
                {showPassword ? (
                  <i className="bi bi-eye-slash"></i> // Ícono de ojo tachado
                ) : (
                  <i className="bi bi-eye"></i> // Ícono de ojo
                )}
              </span>
            </div>
            {errors.password && <div className="login-error">{errors.password}</div>}
          </div>
          <div className="login-forgot-password">
            <a href="#" className="login-forgot-password">
              Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="button"
            className="login-button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Cargando..." : "Ingresar"}
          </button>

          <div className="login-register">
            <p>
              registrate con
            </p>
            <div className="referencias">
              <a href="#"><i className='bi bi-google'></i></a>
              <a href="#"><i className='bi bi-linkedin'></i></a>
            </div>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h2>Bienvenido a MyChamba</h2>
          <p>¿Tu primera vez en MyChamba?</p>
          <button
            type="button"
            className="btn register-button"
            onClick={handleRegister}
          >
            Crea una cuenta
          </button>
        </div>
      </div>

    </div>
  );
};

export default Login;