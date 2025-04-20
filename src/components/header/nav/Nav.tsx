"use client";

import React from "react";

import '@/components/header/styles/Nav.css';
import Notifications from "./notifications/Notifications";
import Avatar from "./avatar/Avatar";


const Nav: React.FC = () => {
  return (
    <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
            <Notifications />
            <Avatar />
        </ul>
    </nav>
  );
};

export default Nav;