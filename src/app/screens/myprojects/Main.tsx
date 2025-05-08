"use client";

import React from "react";
import './styles/main.css';
import PageTittle from "../home/pageTittle/PageTittle";
import MyProjects from "./myProjects";

const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle page="Mis Proyectos" />
      <MyProjects />
    </main>
  );
};

export default Main;
