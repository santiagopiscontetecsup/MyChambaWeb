"use client";

import React, { useState } from "react";
import { notifications as initialNotifications } from "@/data/notifications/mockData";

const Notifications: React.FC = () => {
  // Establecer el estado inicial de las notificaciones de hoy
  const [notifications, setNotifications] = useState(
    initialNotifications.filter((n) => n.dateGroup === "Hoy").slice(0, 4)
  );

  // Función para marcar una notificación como leída
  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">{notifications.length}</span>
      </a>

      <ul
        className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications"
        style={{ minWidth: "350px", maxWidth: "360px" }}
      >
        <li className="dropdown-header d-flex align-items-center">
          <i className="bi bi-clock me-2"></i>
          Tienes {notifications.length} nuevas notificaciones
        </li>

        <li><hr className="dropdown-divider" /></li>

        {notifications.map((notif) => (
          <React.Fragment key={notif.id}>
            <li className="notification-item d-flex px-3 py-2 align-items-start justify-content-between position-relative">
              <div className="d-flex align-items-start">
                {notif.avatar ? (
                  <img
                    src={notif.avatar}
                    alt={notif.user}
                    className="rounded-circle me-3"
                    style={{ width: "40px", height: "40px", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    className="bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{ width: "40px", height: "40px", fontWeight: "bold" }}
                  >
                    {notif.user.charAt(0)}
                  </div>
                )}

                <div style={{ maxWidth: "270px" }}>
                  <h6 className="fw-bold mb-1">{notif.user}</h6>
                  <p className="mb-1 small text-muted">{notif.message}</p>
                  <div className="small text-muted">
                    <i className="bi bi-clock me-1"></i>{notif.time}
                  </div>
                </div>
              </div>

              <div className="dropdown">
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
            Ver Notificaciones
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Notifications;
