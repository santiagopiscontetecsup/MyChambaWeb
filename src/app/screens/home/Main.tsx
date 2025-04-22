"use client";

import React from "react";
import './styles/main.css';
import PageTittle from "./pageTittle/PageTittle";


const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle />
    </main>
  );
};

export default Main;