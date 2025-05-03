"use client";

import React from "react";
import './styles/main.css';

import PageTittle from "../home/pageTittle/PageTittle";
import Notifications from "./Notifications";


const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle page="Notificaciones"/>
      <Notifications />
    </main>
  );
};

export default Main;