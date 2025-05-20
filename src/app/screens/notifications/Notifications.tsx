"use client";

import React, { useEffect, useState } from "react";
import { getNotificacionesByEmpresaId } from "@/services/empresa/getNotifications";
import { formatDistanceToNow, isToday, isYesterday, parseISO, compareDesc } from "date-fns";
import { es } from "date-fns/locale";
import "./styles/Notifications.css";

interface NotificacionBackend {
  id: number;
  tipoMensaje: string;
  mensaje: string;
  fechaEnvio: string;
  leido: boolean;
}

const agruparPorFecha = (notificaciones: NotificacionBackend[]) => {
  const grupos: { [key: string]: NotificacionBackend[] } = {
    Hoy: [],
    Ayer: [],
    "Últimos días": [],
  };

  notificaciones.forEach((n) => {
    const fecha = parseISO(n.fechaEnvio);
    if (isToday(fecha)) grupos["Hoy"].push(n);
    else if (isYesterday(fecha)) grupos["Ayer"].push(n);
    else grupos["Últimos días"].push(n);
  });

  Object.keys(grupos).forEach((grupo) => {
    grupos[grupo] = grupos[grupo].sort((a, b) =>
      compareDesc(parseISO(a.fechaEnvio), parseISO(b.fechaEnvio))
    );
  });

  return grupos;
};

const Notifications: React.FC = () => {
  const [notificaciones, setNotificaciones] = useState<NotificacionBackend[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotificacionesByEmpresaId();
        const ordenadas = data.sort((a, b) =>
          compareDesc(parseISO(a.fechaEnvio), parseISO(b.fechaEnvio))
        );
        setNotificaciones(ordenadas);
      } catch (err) {
        console.error("Error al cargar notificaciones", err);
      }
    };
    fetchData();
  }, []);

  const agrupadas = agruparPorFecha(notificaciones);

  return (
    <div className="notificaciones-global-container">
      {Object.entries(agrupadas).map(([grupo, lista]) =>
        lista.length > 0 ? (
          <div key={grupo} className="grupo-notificaciones animate__animated animate__fadeInUp">
            <h4 className="titulo-grupo">{grupo}</h4>
            <div className="contenedor-cards">
              {lista.map((notif) => (
                <div key={notif.id} className="card-notificacion shadow">
                  <div className="icono-avatar">
                    <div className="letra-avatar bg-primary text-white">
                      {notif.tipoMensaje.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className="contenido">
                    <p className="mensaje mb-1">
                      <strong>{notif.tipoMensaje.replace("_", " ")}</strong>: {notif.mensaje}
                    </p>
                    <span className="tiempo small text-muted">
                      <i className="bi bi-clock me-1"></i>
                      {formatDistanceToNow(parseISO(notif.fechaEnvio), {
                        addSuffix: true,
                        locale: es,
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Notifications;
