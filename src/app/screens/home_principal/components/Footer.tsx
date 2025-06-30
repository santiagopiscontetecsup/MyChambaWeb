"use client";
import React from "react";
import "./../styles/footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-0">
          <div className="text-center small">
            © {new Date().getFullYear()} | <strong>Full Chamba</strong> - Todos los derechos reservados.
          </div>
    </footer>
  );
};
export default Footer;