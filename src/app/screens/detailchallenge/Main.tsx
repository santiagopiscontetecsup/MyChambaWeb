"use client";

import React, { useEffect, useState } from "react";
import PageTittle from "../home/pageTittle/PageTittle";
import DetailChallenge from "./DetailChallenge";
import { Proyecto } from "@/components/forms/ChallengeForm";

const Main: React.FC = () => {
  const [proyecto, setProyecto] = useState<Proyecto | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("formProyecto");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log("Proyecto cargado desde localStorage:", parsedData);
      setProyecto(parsedData);
    } else {
      console.log("No se encontró ningún proyecto en localStorage.");
    }
  }, []);

  return (
    <main id="main" className="main">
      <PageTittle page="Publicar Proyecto" />
      <DetailChallenge />
    </main>
  );
};

export default Main;