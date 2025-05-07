"use client";

import React from "react";
import { userProfile } from "@/data/profile/mockData";
import { useRouter } from "next/navigation";
import "./styles/profile.css"; 
import Card from "@/components/cards/Cards";
import { projectList } from "@/data/projects/mockData";


const Profile: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/postchallenge");
  };

  return (
    <div className="container mt-4">
      <div className="position-relative">
        <img
          src={userProfile.backgroundImage}
          alt="Fondo"
          className="w-100 rounded shadow"
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div
          className="position-absolute top-100 start-50 translate-middle"
          style={{ 
            marginTop: "20px",

           }}
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

      <br />
      <br />

      <div className="text-center mt-5">
        <h3 className="mb-0">{userProfile.name}</h3>
        <p className="text-muted">{userProfile.role}</p>
      </div>

      <div className="card shadow mt-3 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h5 className="card-title">Sobre mí</h5>
          <p className="card-text">{userProfile.description}</p>
        </div>
      </div>

      <div className="d-flex gap-3 mt-3 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card shadow flex-fill">
          <div className="card-body">
            <h5 className="card-title">Industria</h5>
            <p className="card-text">{userProfile.industria}</p>
          </div>
        </div>

        <div className="card shadow flex-fill">
          <div className="card-body">
            <h5 className="card-title">Redes</h5>
            <p className="card-text">{userProfile.redes}</p>
          </div>
        </div>
      </div>

      <br />

      <div className="d-flex justify-content-center">
      <button className="btn btn-primary mt-3" onClick={handleClick}>
          Publicar retos
        </button>
      </div>
      
      <br />

      <div className="row">
        <div className="col-12">
          <div className="row">
            {projectList.map(card => (
              <Card key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Profile;