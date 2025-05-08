"use client";

import React, { useEffect, useState } from "react";
import PageTittle from "../home/pageTittle/PageTittle";
import DetailChallenge from "./DetailChallenge";

const Main: React.FC = () => {
  return (
    <main id="main" className="main">
      <PageTittle page="Publicar Proyecto" />
      <DetailChallenge />
    </main>
  );
};

export default Main;