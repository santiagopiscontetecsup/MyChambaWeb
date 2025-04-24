"use client";

import React from "react";
import './styles/main.css';

import PageTittle from "../home/pageTittle/PageTittle";
import PostChallege from "./PostChallange";


const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle page="Publicar Proyecto"/>
      <PostChallege />
    </main>
  );
};

export default Main;