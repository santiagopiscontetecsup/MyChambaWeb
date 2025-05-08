// "use client";

// import { useEffect, useState } from "react";
// import { getProjectsByEmpresaId } from "@/services/empresa/getProjects";
// import { getUserFromToken } from "@/services/auth/authService";
// import Cards from "@/components/cards/Cards";
// import avatar from "@/assets/avatar.jpg";

// import { ProyectoEmpresa } from "@/models/proyectoEmpresa";
// import { Project } from "@/data/projects/mockData";

// const Applicants = () => {
//   const [projects, setProjects] = useState<Project[]>([]);

//   useEffect(() => {
//     const fetchProyectos = async () => {
//       try {
//         const user = getUserFromToken();
//         const idEmpresa = user?.idEmpresa;

//         if (!idEmpresa) {
//           console.error("idEmpresa no definido en el token");
//           return;
//         }

//         const data: ProyectoEmpresa[] = await getProjectsByEmpresaId(idEmpresa);
//         console.log("DATA recibida del servicio:", data);
//         console.log("Es array?", Array.isArray(data));

//         if (!Array.isArray(data)) {
//           console.error("Error: data no es un array", data);
//           return;
//         }

//         const adapted: Project[] = data.map((proyecto) => ({
//           id: proyecto.id,
//           title: proyecto.nombre,
//           shortDescription: proyecto.descripcion,
//           logo: avatar.src,                         
//           date: new Date(proyecto.fechaLimite)
//                   .toLocaleDateString("es-PE"),   
//           technologies: [],                          
//           members: proyecto.numeroPostulaciones || 0 
//         }));

//         setProjects(adapted);
//       } catch (error) {
//         console.error("Error al cargar proyectos:", error);
//       }
//     };

//     fetchProyectos();
//   }, []);

//   return (
//     <div className="row">
//       {projects.length > 0 ? (
//         projects.map((card) => <Cards key={card.id} card={card} />)
//       ) : (
//         <p className="text-center text-muted">
//           {projects.length === 0 ? "No tienes proyectos publicados aún." : "Cargando proyectos..."}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Applicants;

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPostulantesByProyectoId } from "@/services/empresa/getApplicants"; 
import CardPostulante from "@/components/cards/CardPostulante"; 

interface Postulante {
  idSolicitud: number;
  nombreCompleto: string;
  universidad: string;
  carrera: string;
  acercaDe: string;
}

const PostulantesPage = () => {
  const params = useParams();
  const idProyecto = Number(params.idProyecto); 

  const [postulantes, setPostulantes] = useState<Postulante[]>([]);

  useEffect(() => {
    const fetchPostulantes = async () => {
      if (!idProyecto) {
        console.error("idProyecto no está disponible");
        return;
      }

      try {
        const data = await getPostulantesByProyectoId(idProyecto);
        setPostulantes(data);
      } catch (error) {
        console.error("Error al cargar los postulantes:", error);
      }
    };

    fetchPostulantes();
  }, [idProyecto]);

  return (
    <div className="container">
      {postulantes.length > 0 ? (
        <div className="row">
          {postulantes.map((postulante) => (
            <CardPostulante key={postulante.idSolicitud} postulante={postulante} />
          ))}
        </div>
      ) : (
        <p>No se encontraron postulantes para este proyecto.</p>
      )}
    </div>
  );
};

export default PostulantesPage;

