"use client";

import React from "react";
import { notifications } from "@/data/notifications/mockData"; 
import "./styles/Notifications.css";

const groupNotificationsByDate = (notifs: typeof notifications) => {
  const grouped: { [key: string]: typeof notifications } = {};
  notifs.forEach((notif) => {
    if (!grouped[notif.dateGroup]) {
      grouped[notif.dateGroup] = [];
    }
    grouped[notif.dateGroup].push(notif);
  });
  return grouped;
};

const Notifications: React.FC = () => {
  const groupedNotifications = groupNotificationsByDate(notifications);

  return (
    <div className="notifications-container">
      {Object.keys(groupedNotifications).map((group) => (
        <div key={group} className="notification-group">
          <h3 className="group-title">{group}</h3>
          {groupedNotifications[group].map((notif) => (
            <div key={notif.id} className="notification-item">
              {notif.avatar ? (
                <img className="avatar" src={notif.avatar} alt={notif.user} />
              ) : (
                <div className="avatar placeholder">{notif.user.charAt(0)}</div>
              )}
              <div className="notification-content">
                <p className="message"><strong>{notif.user}</strong> {notif.message}</p>
                <span className="time">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
