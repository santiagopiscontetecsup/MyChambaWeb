"use client";

import React, { useEffect, useState } from "react";
import { getNotificacionesByEmpresaId } from "@/services/empresa/getNotifications";
import '@/components/header/styles/Notifications.css';

interface NotificacionBackend {
  id: number;
  tipoMensaje: string;
  mensaje: string;
  fechaEnvio: string;
  leido: boolean;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificacionBackend[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotificacionesByEmpresaId();
        setNotifications(data.sort((a, b) => new Date(b.fechaEnvio).getTime() - new Date(a.fechaEnvio).getTime()).slice(0, 4));
      } catch (error) {
        console.error("Error al obtener notificaciones:", error);
      }
    };

    fetchNotifications();

    const intervalId = setInterval(fetchNotifications, 30000);

    return () => clearInterval(intervalId); 
  }, []);

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const displayCount = notifications.length > 9 ? "9+" : notifications.length.toString();

  const formatDate = (fecha: string): string => {
    const date = new Date(fecha);
    return date.toLocaleString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell fs-5"></i>
        <span className="badge bg-danger badge-number">{displayCount}</span>
      </a>

      <ul
        className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications animate__animated animate__fadeIn"
        style={{ minWidth: "360px", maxWidth: "380px" }}
      >
        <li className="dropdown-header d-flex align-items-center">
          <i className="bi bi-clock me-2"></i>
          Tienes {notifications.length} nuevas notificaciones
        </li>

        <li><hr className="dropdown-divider" /></li>

        {notifications.map((notif) => (
          <React.Fragment key={notif.id}>
            <li className="notification-item d-flex px-3 py-3 align-items-start justify-content-between position-relative">
              <div className="d-flex align-items-start w-100 gap-3">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "42px", height: "42px", fontWeight: "bold" }}
                >
                  <i className="bi bi-info-lg"></i>
                </div>

                <div style={{ maxWidth: "250px" }}>
                  <h6 className="fw-semibold mb-1 text-dark">
                    {notif.tipoMensaje === "nueva_solicitud" ? "Nueva Solicitud" : "Notificación"}
                  </h6>
                  <p className="mb-1 small text-muted">{notif.mensaje}</p>
                  <div className="small text-secondary">
                    <i className="bi bi-clock me-1"></i> {formatDate(notif.fechaEnvio)}
                  </div>
                </div>
              </div>

              <div className="dropdown ms-2">
                <a
                  href="#"
                  role="button"
                  className="text-muted"
                  id={`dropdownMenu-${notif.id}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="bi bi-three-dots-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby={`dropdownMenu-${notif.id}`}
                >
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => markAsRead(notif.id)}
                    >
                      Marcar como leído
                    </button>
                  </li>
                </ul>
              </div>
            </li>
            <li><hr className="dropdown-divider" /></li>
          </React.Fragment>
        ))}

        <li className="dropdown-footer text-center">
          <a href="/notifications" className="text-primary fw-semibold">
            Ver todas las notificaciones
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Notifications;
