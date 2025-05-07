"use client";

import React from "react";
import './styles/main.css';
import PageTittle from "../home/pageTittle/PageTittle";
import PostulantesPage from "./Applicants";

const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle page="Postulantes" />
      <PostulantesPage />
    </main>
  );
};

export default Main;
