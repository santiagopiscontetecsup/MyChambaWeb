"use client";

import React from 'react';
import './styles/InputText.css';  // Importa el archivo CSS

interface InputTextoProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type?: string;
  id?: string;
  className?: string;
  error?: string; // Recibe el error
  helperText?: string; // Recibe el texto de ayuda o mensaje de error
}

const InputText: React.FC<InputTextoProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  id,
  error,
  helperText
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        id={id}
        type={type}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`input-text ${error ? 'input-text-error' : ''}`} // Aplica la clase de error si hay un error
      />
      {helperText && error && (
        <p className="input-text-error-message">{helperText}</p> // Muestra el mensaje de error
      )}
    </div>
  );
};

export default InputText;
