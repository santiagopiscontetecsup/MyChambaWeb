"use client";

import React from "react";
import './styles/main.css';

import PageTittle from "../home/pageTittle/PageTittle";
import Settings from "./Settings";


const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle page="Settings"/>
      <Settings />
    </main>
  );
};

export default Main;