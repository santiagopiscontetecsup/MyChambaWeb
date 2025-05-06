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
  const [habilidades, setHabilidades] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem("formProyecto");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTitulo(parsedData.titulo || '');
      setDescripcion(parsedData.descripcion || '');
      setFechaLimite(parsedData.fechaLimite || '');
      setTipoRecompensa(parsedData.tipoRecompensa === 1);
      setHabilidades(
        Array.isArray(parsedData.idHabilidades)
          ? parsedData.idHabilidades.join(', ')
          : ''
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    if (!titulo.trim() || !descripcion.trim() || !fechaLimite.trim() || !habilidades.trim()) {
      alert("Por favor completa todos los campos obligatorios.");
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
      idHabilidades: habilidades
        .split(',')
        .map(id => id.trim())
        .filter(id => id !== '')
        .map(id => parseInt(id)),
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

      <InputText
        label="Título del proyecto"
        value={titulo}
        onChange={setTitulo}
      />

      <InputText
        label="Descripción"
        value={descripcion}
        onChange={setDescripcion}
      />

      <CampoFecha
        label="Fecha límite"
        value={fechaLimite}
        onChange={(date: string) => setFechaLimite(date)}
      />

      <CampoSwitch
        label="¿Tiene recompensa?"
        checked={tipoRecompensa}
        onChange={(checked: boolean) => setTipoRecompensa(checked)}
      />

      <InputText
        label="ID de habilidades (separados por coma)"
        value={habilidades}
        onChange={setHabilidades}
      />

      <button type="submit" className="btn-submit">Enviar Proyecto</button>
    </form>
  );
};

export default ChallengeForm;