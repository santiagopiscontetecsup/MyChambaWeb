"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProyectoEmpresa } from "@/models/proyectoEmpresa";
import avatar from "@/assets/avatar.jpg";
import background from "@/assets/img/fondo.jpg";
import Card from "@/components/cards/Cards";
import { getProjectsByEmpresaId } from "@/services/empresa/getProjects";
import { getUserFromToken } from "@/services/auth/authService";
import { getEmpresaByIdEmpresa } from "@/services/empresa/getData";
import "./styles/profile.css";

interface ProjectCard {
  id: number;
  title: string;
  shortDescription: string;
  logo: string;
  date: string;
  technologies: string[];
  members: number;
}

interface EmpresaInfo {
  idUsuario: number;
  nombre: string;
  telefono: string;
  direccion: string;
  ruc: string;
  logo: string;
  sector: string;
}

const Profile: React.FC = () => {
  const router = useRouter();

  const [projects, setProjects] = useState<ProjectCard[]>([]);
  const [empresaInfo, setEmpresaInfo] = useState<EmpresaInfo | null>(null);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    router.push("/postchallenge");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = getUserFromToken();
        const idEmpresa = user?.idEmpresa;

        if (!idEmpresa) {
          console.error("idEmpresa no definido en el token");
          setLoading(false);
          return;
        }

        const data: ProyectoEmpresa[] = await getProjectsByEmpresaId(idEmpresa);

        if (!Array.isArray(data)) {
          console.error("Error: data no es un array", data);
          setLoading(false);
          return;
        }

        const adapted: ProjectCard[] = data.map((proyecto) => ({
          id: proyecto.id,
          title: proyecto.nombre,
          shortDescription: proyecto.descripcion,
          logo: avatar.src,
          date: new Date(proyecto.fechaLimite).toLocaleDateString("es-PE"),
          technologies: [],
          members: proyecto.numeroPostulaciones || 0,
        }));

        setProjects(adapted);

        const empresa = await getEmpresaByIdEmpresa(idEmpresa);
        setEmpresaInfo(empresa);

        setLoading(false);
      } catch (error) {
        console.error("Error al cargar datos:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="position-relative">
        <Image
          src={background}
          alt="Fondo"
          className="w-100 rounded shadow"
          style={{ height: "200px", objectFit: "cover" }}
          width={800}
          height={200}
        />

        <div
          className="position-absolute top-100 start-50 translate-middle"
          style={{ marginTop: "20px" }}
        >
          <Image
            src={empresaInfo?.logo || avatar}
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
        <h3 className="mb-0">{empresaInfo?.nombre || "Nombre de empresa"}</h3>
        <p className="text-muted">RUC: {empresaInfo?.ruc || "Sin RUC"}</p>
      </div>

      <div className="card shadow mt-3 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h5 className="card-title">Sobre mí</h5>
          <p className="card-text">{empresaInfo?.direccion || "Dirección no registrada"}</p>
        </div>
      </div>

      <div className="d-flex gap-3 mt-3 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card shadow flex-fill">
          <div className="card-body">
            <h5 className="card-title">Industria</h5>
            <p className="card-text">{empresaInfo?.sector || "No especificado"}</p>
          </div>
        </div>

        <div className="card shadow flex-fill">
          <div className="card-body">
            <h5 className="card-title">Teléfono</h5>
            <p className="card-text">{empresaInfo?.telefono || "No registrado"}</p>
          </div>
        </div>
      </div>

      <div className="card shadow mt-3 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h5 className="card-title">Redes</h5>
          <p className="card-text">No disponibles</p>
        </div>
      </div>

      <br />

      <div className="row">
        {loading ? (
          <p className="text-center text-muted">Cargando proyectos...</p>
        ) : projects.length > 0 ? (
          projects.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <p className="text-center text-muted">No tienes proyectos publicados aún.</p>
        )}
      </div>

      <div className="d-flex justify-content-center">
        <button className="custom-btn mt-3" onClick={handleClick}>
          Publicar retos
        </button>
      </div>

      <br />
    </div>
  );
};

export default Profile;
