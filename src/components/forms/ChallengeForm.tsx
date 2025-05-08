"use client";

import React, { useEffect, useState } from 'react';
import './styles/ChallengeForm.css';
import CampoSwitch from '@/components/forms/campoSwitch/CampoSwitch';
import CampoFecha from '@/components/forms/campoFecha/CampoFecha';
import InputText from '@/components/forms/input/inputText/InputText';
import { useRouter } from "next/navigation";
import { getUserFromToken } from '@/services/auth/authService'; // Importa la función corregida

const ChallengeForm: React.FC = () => {
  const router = useRouter();

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaLimite, setFechaLimite] = useState('');
  const [tipoRecompensa, setTipoRecompensa] = useState(false);
  const [habilidades, setHabilidades] = useState<number[]>([]);
  const [errors, setErrors] = useState({
    titulo: '',
    descripcion: '',
    fechaLimite: '',
    habilidades: '',
  });

  useEffect(() => {
    const storedData = localStorage.getItem("formProyecto");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
  
      // Convierte la fecha al formato adecuado para el campo de tipo "date"
      const formattedFechaLimite = parsedData.fechaLimite
        ? new Date(parsedData.fechaLimite).toISOString().split("T")[0]
        : "";
  
      setTitulo(parsedData.titulo || "");
      setDescripcion(parsedData.descripcion || "");
      setFechaLimite(formattedFechaLimite); // Establece la fecha formateada
      setTipoRecompensa(parsedData.tipoRecompensa === 1);
      setHabilidades(parsedData.idHabilidades || []);
    }
  }, []);

  const handleCheckboxChange = (id: number) => {
    setHabilidades(prev =>
      prev.includes(id) ? prev.filter(habilidad => habilidad !== id) : [...prev, id]
    );
  };

  const validateForm = () => {
    const today = new Date();
    const selectedDate = new Date(fechaLimite);
    const newErrors = {
      titulo: titulo.trim() ? '' : 'El título es obligatorio.',
      descripcion: descripcion.trim() ? '' : 'La descripción es obligatoria.',
      fechaLimite:
        fechaLimite.trim() && selectedDate > today
          ? ''
          : 'La fecha límite debe ser mayor a la fecha actual.',
      habilidades: habilidades.length > 0 ? '' : 'Debes seleccionar al menos una habilidad.',
    };

    setErrors(newErrors);

    // Retorna true si no hay errores
    return Object.values(newErrors).every(error => error === '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const user = getUserFromToken();
    console.log("User desde el token:", user);
    if (!user || !user.idEmpresa) {
      console.error("No se pudo recuperar el idEmpresa del token.");
      alert("Error al recuperar datos del usuario. Intenta iniciar sesión nuevamente.");
      return;
    }

    const data = {
      idEmpresa: user.idEmpresa,
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      fechaLimite: new Date(fechaLimite).toISOString(),
      tipoRecompensa: tipoRecompensa ? 1 : 0,
      idHabilidades: habilidades,
    };

    console.log("Datos listos para guardar:", data);

    // Guardar en localStorage para la vista de confirmación
    localStorage.setItem('formProyecto', JSON.stringify(data));

    // Redirigir a vista de detalle
    router.push('/detailchallenge');
  };

  return (
    <form className="challenge-form" onSubmit={handleSubmit}>
      <h2>Crear Proyecto</h2>
      <hr />
      <div className="form-group">
        <InputText
          id="titulo"
          label="Título del proyecto"
          value={titulo}
          onChange={setTitulo}
          className={errors.titulo ? 'input-error' : ''}
          error={errors.titulo} // Pasa el mensaje de error
        />
      </div>
  
      <div className="form-group">
        <InputText
          id="descripcion"
          label="Descripción"
          value={descripcion}
          onChange={setDescripcion}
          className={errors.descripcion ? 'input-error' : ''}
          error={errors.descripcion} // Pasa el mensaje de error
        />
      </div>
  
      <div className="form-group">
        <CampoFecha
          id="fechaLimite"
          label="Fecha límite"
          value={fechaLimite}
          onChange={setFechaLimite}
          className={errors.fechaLimite}
          error={errors.fechaLimite} // Pasa el mensaje de error
        />
      </div>
  
      <div className="form-group">
        <p className="form-label">¿Tiene recompensa?</p>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={tipoRecompensa}
            onChange={(e) => setTipoRecompensa(e.target.checked)}
            className="checkbox-input"
          />
          <span className="checkbox-custom"></span>
          Sí
        </label>
      </div>

      <div className="checkbox-group">
        <p className="checkbox-group-title">Seleccionar habilidades</p>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={habilidades.includes(1)}
            onChange={() => handleCheckboxChange(1)}
            className="checkbox-input"
          />
          <span className="checkbox-custom"></span>
          Java
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={habilidades.includes(2)}
            onChange={() => handleCheckboxChange(2)}
            className="checkbox-input"
          />
          <span className="checkbox-custom"></span>
          Python
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={habilidades.includes(3)}
            onChange={() => handleCheckboxChange(3)}
            className="checkbox-input"
          />
          <span className="checkbox-custom"></span>
          JavaScript
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={habilidades.includes(4)}
            onChange={() => handleCheckboxChange(4)}
            className="checkbox-input"
          />
          <span className="checkbox-custom"></span>
          React
        </label>
      </div>
      {errors.habilidades && <p className="error-message">{errors.habilidades}</p>}
  
      <button type="submit" className="btn-submit">Enviar Proyecto</button>
    </form>
  );
};

export default ChallengeForm;