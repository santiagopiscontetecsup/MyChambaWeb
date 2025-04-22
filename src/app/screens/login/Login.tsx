"use client";

import React from "react";
import { useRouter } from "next/navigation"; 
import "./styles/Login.css";

const Login: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home"); 
  };
  
  const handleRegister = () => {
    router.push("/register"); 
  };

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <button onClick={handleLogin} className="btn btn-primary">
        Ingresar
      </button>
    </div>
  );
};

export default Login;