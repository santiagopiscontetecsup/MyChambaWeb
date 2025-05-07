// "use client";

// import React, { useState } from "react";
// import "@/components/cards/styles/cards.css";
// import avatar from "@/assets/avatar.jpg";
// import { aceptarPostulante } from "@/services/empresa/postApplicants";
// import { useRouter } from "next/navigation";

// export interface Postulante {
//   idSolicitud: number;
//   nombreCompleto: string;
//   universidad: string;
//   carrera: string;
//   acercaDe: string;
// }

// interface Props {
//   postulante: Postulante;
// }

// const CardPostulante: React.FC<Props> = ({ postulante }) => {
//   const [mensaje, setMensaje] = useState<string | null>(null);

//   const handleAceptar = async () => {
//     try {
//       await aceptarPostulante(postulante.idSolicitud);
//       setMensaje(`Has aceptado la postulación de ${postulante.nombreCompleto}.`);
//       setTimeout(() => setMensaje(null), 3000); 
//     } catch (error) {
//       console.error("Error al aceptar postulante:", error);
//       setMensaje("Ocurrió un error al aceptar al postulante.");
//     }
//   };

//   return (
//     <div className="col-12 col-md-6 col-lg-4 mb-4">
//       <div className="card h-100 shadow-sm card-hover">
//         <div className="card-body d-flex flex-column">
//           <div className="d-flex align-items-center mb-3">
//             <img src={avatar.src} alt="Avatar" className="avatar-logo me-2" />
//             <div>
//               <h5 className="card-title mb-0">{postulante.nombreCompleto}</h5>
//               <small className="text-muted">{postulante.universidad}</small>
//             </div>
//           </div>
//           <hr className="my-2" />
//           <p><strong>Carrera:</strong> {postulante.carrera}</p>
//           <p><strong>Acerca de:</strong> {postulante.acercaDe}</p>

//           <div className="d-flex justify-content-end gap-3 mt-auto pt-3 border-top">
//             <button
//               className="btn btn-outline-success btn-sm"
//               title="Aceptar"
//               onClick={handleAceptar}
//             >
//               <i className="bi bi-check-circle-fill"></i>
//             </button>
//             <button className="btn btn-outline-danger btn-sm" title="Rechazar">
//               <i className="bi bi-x-circle-fill"></i>
//             </button>
//           </div>

//           {mensaje && (
//             <div className="alert alert-success mt-3 fade show" role="alert">
//               {mensaje}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardPostulante;

"use client";

import React, { useState } from "react";
import "@/components/cards/styles/cards.css";
import avatar from "@/assets/avatar.jpg";
import { aceptarPostulante } from "@/services/empresa/postApplicants";
import { useRouter } from "next/navigation";

export interface Postulante {
  idSolicitud: number;
  nombreCompleto: string;
  universidad: string;
  carrera: string;
  acercaDe: string;
}

interface Props {
  postulante: Postulante;
}

const CardPostulante: React.FC<Props> = ({ postulante }) => {
  const [mensaje, setMensaje] = useState<string | null>(null);
  const router = useRouter();

  const handleAceptar = async () => {
    try {
      await aceptarPostulante(postulante.idSolicitud);
      setMensaje(`Has aceptado la postulación de ${postulante.nombreCompleto}.`);

      // Espera un momento para mostrar el mensaje, luego redirige
      setTimeout(() => {
        setMensaje(null);
        router.push("/home"); // Cambia "/home" si quieres otra ruta
      }, 2500);
    } catch (error) {
      console.error("Error al aceptar postulante:", error);
      setMensaje("Ocurrió un error al aceptar al postulante.");
    }
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm card-hover">
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center mb-3">
            <img src={avatar.src} alt="Avatar" className="avatar-logo me-2" />
            <div>
              <h5 className="card-title mb-0">{postulante.nombreCompleto}</h5>
              <small className="text-muted">{postulante.universidad}</small>
            </div>
          </div>
          <hr className="my-2" />
          <p><strong>Carrera:</strong> {postulante.carrera}</p>
          <p><strong>Acerca de:</strong> {postulante.acercaDe}</p>

          <div className="d-flex justify-content-end gap-3 mt-auto pt-3 border-top">
            <button
              className="btn btn-outline-success btn-sm"
              title="Aceptar"
              onClick={handleAceptar}
            >
              <i className="bi bi-check-circle-fill"></i>
            </button>
            <button className="btn btn-outline-danger btn-sm" title="Rechazar">
              <i className="bi bi-x-circle-fill"></i>
            </button>
          </div>

          {mensaje && (
            <div className={`alert ${mensaje.includes("error") ? "alert-danger" : "alert-success"} mt-3 fade show`} role="alert">
              {mensaje}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPostulante;
