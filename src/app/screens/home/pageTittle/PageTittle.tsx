"use client";

import React from "react";
import "../styles/pageTittle.css"

interface PageTittleProps {
  page: string;
}

const PageTittle: React.FC<PageTittleProps> = ({ page }) => {
  return (
    <div className="pagetitle">
      <h1>{page}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">{page}</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageTittle;