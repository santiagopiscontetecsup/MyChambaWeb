"use client";

import React from "react";
import './styles/main.css';

import PageTittle from "../home/pageTittle/PageTittle";
import Profile from "./Profile";


const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle page="Perfil"/>
      <Profile />
    </main>
  );
};

export default Main;