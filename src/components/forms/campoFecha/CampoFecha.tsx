import React from 'react';
import InputText from '../input/inputText/InputText';

interface CampoFechaProps {
  label: string;
  value: string;
  onChange: (newFecha: string) => void;
  error?: string; // Propiedad para el mensaje de error
  helperText?: string; // Propiedad para el texto de ayuda
  className?: string;
}

const CampoFecha: React.FC<CampoFechaProps> = ({ label, value, onChange, error, helperText, className }) => {
  return (
    <div className={`campo-fecha ${className || ''}`}>
      <InputText
        label={label}
        value={value}
        onChange={onChange}
        type="date" // Tipo de input "date"
      />
      {/* Mostrar mensaje de error si existe */}
      {error && <p className="error-text">{error}</p>}
      {/* Mostrar texto de ayuda si existe */}
      {helperText && !error && <p className="helper-text">{helperText}</p>}
    </div>
  );
};

export default CampoFecha;