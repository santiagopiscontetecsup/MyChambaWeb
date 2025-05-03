"use client";

import React from "react";
import './styles/main.css';
import PageTittle from "./pageTittle/PageTittle";
import Home from "./Home";


const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle page="Home"/>
      <Home />
    </main>
  );
};

export default Main;