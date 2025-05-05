// components/input/CampoSwitch.tsx
import React from 'react';
import './styles/CampoSwitch.css'; // Asegúrate de importar el archivo CSS

interface Props {
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
}

const CampoSwitch: React.FC<Props> = ({ label, checked, onChange }) => {
  const id = `switch-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="switch-container">
      <label htmlFor={id} className="mr-2 text-sm">{label}</label>
      <input
        type="checkbox"
        id={id}
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
};

export default CampoSwitch;
// 