import React, { useState } from 'react';
import CampoFecha from './CampoFecha'; 
import Input from '../input/Input';

interface FechaProps {
  value: string; // Valor de la fecha
  onChange: (newFecha: string) => void; // Función para manejar el cambio de fecha
}



const App: React.FC<FechaProps> = ({value, onChange}) => {
  const [fechaLimite, setFechaLimite] = useState<string>('2025-12-31');

  const handleFechaChange = (newFecha: string) => {
    setFechaLimite(newFecha);
  };

  return (
    <div>
      <h1>Formulario de Fecha</h1>
      <CampoFecha
        value={fechaLimite} 
        onChange={handleFechaChange}
      />

      {/* <Input 
        label="¿Activar algo?" 
        checked={true} 
        onChange={(val) => console.log("Switch cambiado a", val)} 
      /> */}

    </div>
  );

};

export default App;