"use client";

import React from 'react';
import './styles/InputText.css'; // Importa el archivo CSS

interface InputTextoProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type?: string;
  id?: string;
  className?: string; // Clase personalizada, incluyendo errores
  error?: string; // Recibe el mensaje de error
  helperText?: string; // Recibe el texto de ayuda
}

const InputText: React.FC<InputTextoProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  id,
  className,
  error,
  helperText,
}) => {
  return (
    <div className="input-text-container">
      {label && <label htmlFor={id} className="input-text-label">{label}</label>}
      <input
        id={id}
        type={type}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`input-text ${className || ''}`} // Aplica la clase personalizada
      />
      {error && <p className="input-text-error-message">{error}</p>} {/* Muestra el mensaje de error */}
      {!error && helperText && <p className="input-text-helper">{helperText}</p>} {/* Muestra texto de ayuda */}
    </div>
  );
};

export default InputText;