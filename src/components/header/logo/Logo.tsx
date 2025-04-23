"use client";

import React from 'react'

import '@/components/header/styles/Logo.css';
const Logo: React.FC = () => {
    const handleToggleSidebar = () => {
        document.body.classList.toggle("toggle-sidebar");
    };

  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="/home" className="logo d-flex align-items-center">
        {/* <img src="/logo.png" alt="Logo" /> */}
        <span className="d-none d-lg-block">MyChamba</span>
      </a>
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSidebar}
      ></i>
    </div>
  );
};

export default Logo;