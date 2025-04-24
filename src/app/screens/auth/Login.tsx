"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/login/loginService"; 

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
      // localStorage.setItem("token", response.token);
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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        <h2 className="text-center fw-bold mb-4">
          Bienvenido a <span className="text-primary">MyChamba</span>
        </h2>

        {errors.general && (
          <div className="alert alert-danger py-2 text-center" role="alert">
            {errors.general}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="loginEmail" className="form-label">
            Correo electrónico
          </label>
          <input
            id="loginEmail"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-4 position-relative">
          <label htmlFor="loginPassword" className="form-label">
            Contraseña
          </label>
          <input
            id="loginPassword"
            type={showPassword ? "text" : "password"}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
          <span
            onClick={togglePassword}
            role="button"
            className="position-absolute top-50 end-0 translate-middle-y me-3"
          >
            {showPassword ? (
              <i className="bi bi-eye-slash fs-5"></i>
            ) : (
              <i className="bi bi-eye fs-5"></i>
            )}
          </span>
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <button
          type="button"
          className="btn btn-primary w-100 mb-3"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Cargando..." : "Ingresar"}
        </button>

        <div className="d-flex align-items-center my-3">
          <div className="flex-grow-1 border-top" />
          <div className="mx-2 text-muted small">o</div>
          <div className="flex-grow-1 border-top" />
        </div>

        <div className="text-center">
          <p className="mb-0">
            ¿No tienes cuenta?
            <button
              type="button"
              onClick={handleRegister}
              className="btn btn-link p-0 ms-1"
            >
              Regístrate ahora
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
