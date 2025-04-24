import React, { useState } from 'react';

// Definición de las props que el componente recibe
interface Props {
  label: string; // Etiqueta que se mostrará junto al switch
  checked: boolean; // Estado del switch (activado o desactivado)
  onChange: (val: boolean) => void; // Función que manejará el cambio del switch
}

const CampoSwitch: React.FC<Props> = ({ label, checked, onChange }) => {
  // Generación de un ID único para el input basado en el label
  const uniqueId = `switch-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="form-check form-switch mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id={uniqueId} // Asignar el ID único al input
        checked={checked} // El estado del switch
        onChange={(e) => onChange(!!e.target.checked)} // Pasar un valor booleano a la función onChange
      />
      <label className="form-check-label" htmlFor={uniqueId}>  {/* Vinculación del label con el input */}
        {label}
      </label>
    </div>
  );
};

export default CampoSwitch;