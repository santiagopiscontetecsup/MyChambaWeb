"use client";

import React from 'react';

import '@/components/header/styles/Logo.css';
import profileImg from "@/assets/logo.jpg";
import Image from "next/image";

const Logo: React.FC = () => {
  const handleToggleSidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="/home" className="logo d-flex align-items-center text-decoration-none">
        <Image src={profileImg} alt="Logo" width={40} height={40} />
        <span className="d-none d-lg-block">FullChamba</span>
      </a>
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSidebar}
      ></i>
    </div>
  );
};

export default Logo;
