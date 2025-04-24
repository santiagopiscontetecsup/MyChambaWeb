interface Props {
    label: string;
    checked: boolean;
    onChange: (val: boolean) => void;
  }
  
  const Input: React.FC<Props> = ({ label, checked, onChange }) => (
    <div className="form-check form-switch mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        id="switch" 
      />
      <label className="form-check-label" htmlFor="switch">
        {label}
      </label>
    </div>
  );
  
  export default Input;