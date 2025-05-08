import React from 'react';
import InputText from '../input/inputText/InputText';

interface CampoFechaProps {
  label: string;
  value: string;
  onChange: (newFecha: string) => void;
  error?: string; // Propiedad para el mensaje de error
  helperText?: string; // Propiedad para el texto de ayuda
  className?: string;
  id: string;
}

const CampoFecha: React.FC<CampoFechaProps> = ({ label, value, onChange, error, helperText, className }) => {
  return (
    <div className={`campo-fecha ${className || ''}`}>
      <InputText
        label={label}
        value={value}
        onChange={onChange}
        type="date" // Tipo de input "date"
        className={error ? 'input-error' : ''} // Aplica la clase de error si existe
        helperText={helperText}
        error={error} // Pasa el mensaje de error
      />
    </div>
  );
};

export default CampoFecha;