// "use client";

// import React, { useEffect, useState } from "react";
// import { userProfile } from "@/data/profile/mockData";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import "./styles/profile.css"; 
// import Card from "@/components/cards/Cards";
// import { getProjectsByEmpresaId } from "@/services/empresa/getProjects";
// import { getUserFromToken } from "@/services/auth/authService";
// import avatar from "@/assets/avatar.jpg";

// const Profile: React.FC = () => {
//   const router = useRouter();

//   // Estado para proyectos
//   const [projects, setProjects] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const handleClick = () => {
//     router.push("/postchallenge");
//   };

//   // Fetch proyectos dinámicos al montar componente
//   useEffect(() => {
//     const fetchProyectos = async () => {
//       try {
//         const user = getUserFromToken();
//         const idEmpresa = user?.idEmpresa;

//         if (!idEmpresa) {
//           console.error("idEmpresa no definido en el token");
//           setLoading(false);
//           return;
//         }

//         const data = await getProjectsByEmpresaId(idEmpresa);

//         if (!Array.isArray(data)) {
//           console.error("Error: data no es un array", data);
//           setLoading(false);
//           return;
//         }

//         const adapted = data.map((proyecto: any) => ({
//           id: proyecto.id,
//           title: proyecto.nombre,
//           shortDescription: proyecto.descripcion,
//           logo: avatar.src,
//           date: new Date(proyecto.fechaLimite).toLocaleDateString("es-PE"),
//           technologies: [], 
//           members: proyecto.numeroPostulaciones || 0,
//         }));

//         setProjects(adapted);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error al cargar proyectos:", error);
//         setLoading(false);
//       }
//     };

//     fetchProyectos();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <div className="position-relative">
//         <Image
//           src={userProfile.backgroundImage}
//           alt="Fondo"
//           className="w-100 rounded shadow"
//           style={{ height: "200px", objectFit: "cover" }}
//         />

//         <div
//           className="position-absolute top-100 start-50 translate-middle"
//           style={{ marginTop: "20px" }}
//         >
//           <Image
//             src={userProfile.profileImage}
//             alt="Perfil"
//             className="rounded-circle border border-3"
//             width={100}
//             height={100}
//             style={{ objectFit: "cover" }}
//           />
//         </div>
//       </div>

//       <br />
//       <br />

//       <div className="text-center mt-5">
//         <h3 className="mb-0">{userProfile.name}</h3>
//         <p className="text-muted">{userProfile.role}</p>
//       </div>

//       <div className="card shadow mt-3 mx-auto" style={{ maxWidth: "700px" }}>
//         <div className="card-body">
//           <h5 className="card-title">Sobre mí</h5>
//           <p className="card-text">{userProfile.description}</p>
//         </div>
//       </div>

//       <div className="d-flex gap-3 mt-3 mx-auto" style={{ maxWidth: "700px" }}>
//         <div className="card shadow flex-fill">
//           <div className="card-body">
//             <h5 className="card-title">Industria</h5>
//             <p className="card-text">{userProfile.industria}</p>
//           </div>
//         </div>

//         <div className="card shadow flex-fill">
//           <div className="card-body">
//             <h5 className="card-title">Redes</h5>
//             <p className="card-text">{userProfile.redes}</p>
//           </div>
//         </div>
//       </div>

//       <br />

//       {/* Aquí muestra proyectos dinámicos desde backend en vez del mock */}
//       <div className="row">
//         {loading ? (
//           <p className="text-center text-muted">Cargando proyectos...</p>
//         ) : projects.length > 0 ? (
//           projects.map((card) => <Card key={card.id} card={card} />)
//         ) : (
//           <p className="text-center text-muted">No tienes proyectos publicados aún.</p>
//         )}
//       </div>

//       <div className="d-flex justify-content-center">
//         <button className="custom-btn mt-3" onClick={handleClick}>
//           Publicar retos
//         </button>
//       </div>
      
//       <br />
//     </div>
//   );
// };

// export default Profile;

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ProyectoEmpresa } from "@/models/proyectoEmpresa"; // Ajusta la ruta según tu proyecto
import avatar from "@/assets/avatar.jpg";
import Card from "@/components/cards/Cards";
import { getProjectsByEmpresaId } from "@/services/empresa/getProjects";
import { getUserFromToken } from "@/services/auth/authService";
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

const Profile: React.FC = () => {
  const router = useRouter();

  const [projects, setProjects] = useState<ProjectCard[]>([]);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    router.push("/postchallenge");
  };

  useEffect(() => {
    const fetchProyectos = async () => {
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
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar proyectos:", error);
        setLoading(false);
      }
    };

    fetchProyectos();
  }, []);

  return (
    <div className="container mt-4">
      <div className="position-relative">
        <Image
          src="/path/to/background-image.jpg" // Reemplaza con el fondo correcto o una variable
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
            src="/path/to/profile-image.jpg" // Cambia esto también o usa userProfile.profileImage si tienes
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
        <h3 className="mb-0">Nombre Usuario</h3> {/* Cambia por datos reales */}
        <p className="text-muted">Rol del usuario</p> {/* Cambia por datos reales */}
      </div>

      <div className="card shadow mt-3 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h5 className="card-title">Sobre mí</h5>
          <p className="card-text">Descripción del usuario aquí</p> {/* Cambia por datos reales */}
        </div>
      </div>

      <div className="d-flex gap-3 mt-3 mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card shadow flex-fill">
          <div className="card-body">
            <h5 className="card-title">Industria</h5>
            <p className="card-text">Industria del usuario</p> {/* Cambia por datos reales */}
          </div>
        </div>

        <div className="card shadow flex-fill">
          <div className="card-body">
            <h5 className="card-title">Redes</h5>
            <p className="card-text">Redes sociales del usuario</p> {/* Cambia por datos reales */}
          </div>
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
