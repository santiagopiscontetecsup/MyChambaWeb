"use client";

import React from "react";
import './styles/main.css';

import PageTittle from "../home/pageTittle/PageTittle";
import PostChallenge from "./PostChallenge";


const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle page="Publicar proyecto"/>
      <PostChallenge />
    </main>
  );
};

export default Main;