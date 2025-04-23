"use client";

import React from "react";
import { userProfile } from "@/data/profile/mockData";
import "./styles/Profile.css"; 

const Profile: React.FC = () => {
  return (
    <div className="container mt-4">
      {/* Imagen de fondo */}
      <div className="position-relative">
        <img
          src={userProfile.backgroundImage}
          alt="Fondo"
          className="w-100 rounded shadow"
          style={{ height: "200px", objectFit: "cover" }}
        />

        {/* Imagen de perfil */}
        <div
          className="position-absolute top-100 start-50 translate-middle"
          style={{ marginTop: "20px" }}
        >
          <img
            src={userProfile.profileImage}
            alt="Perfil"
            className="rounded-circle border border-3"
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Nombre y rol */}
      <div className="text-center mt-5">
        <h3 className="mb-0">{userProfile.name}</h3>
        <p className="text-muted">{userProfile.role}</p>
      </div>

      {/* Descripción en una card */}
      <div className="card shadow mt-3 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h5 className="card-title">Sobre mí</h5>
          <p className="card-text">{userProfile.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
