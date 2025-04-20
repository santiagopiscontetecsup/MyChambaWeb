"use client";

import React from "react";
import { notifications } from "@/data/header/mockData";

const Notifications: React.FC = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell"></i>
        <span className="badge bg-primary badge-number">{notifications.length}</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have {notifications.length} new notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>

        <li><hr className="dropdown-divider" /></li>

        {notifications.map((notif) => (
          <React.Fragment key={notif.id}>
            <li className="notification-item">
              <i className={`bi ${notif.icon} ${notif.iconColor}`}></i>
              <div>
                <h4>{notif.title}</h4>
                <p>{notif.message}</p>
                <p>{notif.time}</p>
              </div>
            </li>
            <li><hr className="dropdown-divider" /></li>
          </React.Fragment>
        ))}

        <li className="dropdown-footer">
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
};

export default Notifications;
