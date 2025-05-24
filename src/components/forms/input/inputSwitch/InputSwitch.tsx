
// "use client";

// import React from 'react';
// import './styles/InputSwitch.css';
// // Removed unused import

// interface InputSwitchProps {
//   label: string;
//   checked: boolean;
//   onChange: (newChecked: boolean) => void;
// }

// const InputSwitch: React.FC<{
//   label: string;
//   checked: boolean;
//   onChange: (checked: boolean) => void; errorMessage?: string
// }> = ({ label, checked, onChange, errorMessage }) => {
//   const id = `switch-${label.replace(/\s+/g, '-')}`;

//   return (
//     <div className="switch-container">
//       <label htmlFor={id} className="mr-2 text-sm">
//       <input
//         type="checkbox"
//         id={id}
//         className="form-check-input"
//         checked={checked || false} // Asegúrate de que el valor nunca sea undefined
//         onChange={(e) => onChange(e.target.checked)}
//       />
//         {label}
//       </label>
//       {errorMessage && <p className="error-text">{errorMessage}</p>}
//     </div>
//   );
// };

// export default InputSwitch;

"use client";

import React from 'react';
import './styles/InputSwitch.css';

interface InputSwitchProps {
  label: string;
  checked: boolean;
  onChange: (newChecked: boolean) => void;
  errorMessage?: string;
}

const InputSwitch: React.FC<InputSwitchProps> = ({ label, checked, onChange, errorMessage }) => {
  const id = `switch-${label.replace(/\s+/g, '-')}`;

  return (
    <div className="switch-container">
      <label htmlFor={id} className="mr-2 text-sm">
        <input
          type="checkbox"
          id={id}
          className="form-check-input"
          checked={checked || false}
          onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </label>
      {errorMessage && <p className="error-text">{errorMessage}</p>}
    </div>
  );
};

export default InputSwitch;
