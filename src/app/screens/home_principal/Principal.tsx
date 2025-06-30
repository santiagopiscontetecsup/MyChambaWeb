"use client";
import React from "react";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

const Principal: React.FC = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Principal;
