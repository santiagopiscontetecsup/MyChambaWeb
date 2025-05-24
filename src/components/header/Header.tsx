"use client";

import React from "react";
import Logo from "./logo/Logo";
import '@/components/header/styles/Header.css';
import Nav from "./nav/Nav";


const Header: React.FC = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      {/* {logo} */}
      <Logo />
      {/* {nav} */}
      <Nav />
    </header>
  );
};

export default Header;