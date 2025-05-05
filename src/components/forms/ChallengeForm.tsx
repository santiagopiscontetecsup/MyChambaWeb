"use client";

import React, { useState, useEffect } from 'react';
import './styles/ChallengeForm.css';
import CampoSwitch from '@/components/forms/campoSwitch/CampoSwitch';
import CampoFecha from '@/components/forms/campoFecha/CampoFecha';
import InputText from '@/components/forms/input/inputText/InputText';
import { useRouter } from "next/navigation";

export interface Proyecto {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  date: string;
  members: number;
  logo: string;

  description: string;
  requirements: string;
  objectives: string;
  deadline: string;
  reward: boolean;
  certificate: boolean;
  duration: string;
}

interface ChallengeFormProps {
  onSubmit: (proyecto: Proyecto) => void;
  initialData?: Proyecto;
}

const ChallengeForm: React.FC<ChallengeFormProps> = ({ onSubmit, initialData }) => {
  const router = useRouter();

  const [nombreProyecto, setNombreProyecto] = useState(initialData?.title || '');
  const [descripcion, setDescripcion] = useState(initialData?.shortDescription || '');
  const [requisitos, setRequisitos] = useState(initialData?.requirements || '');
  const [objetivos, setObjetivos] = useState(initialData?.objectives || '');
  const [fechaLimite, setFechaLimite] = useState(initialData?.deadline || '');
  const [recompensa, setRecompensa] = useState(initialData?.reward ?? false);
  const [certificado, setCertificado] = useState(initialData?.certificate ?? false);
  const [plazo, setPlazo] = useState(initialData?.duration || '');

  // Estado para los errores de validación
  const [errors, setErrors] = useState({
    nombreProyecto: '',
    descripcion: '',
    requisitos: '',
    objetivos: '',
    fechaLimite: '',
    plazo: '',
    certificado: '',
  });

  const resetForm = () => {
    setNombreProyecto('');
    setDescripcion('');
    setRequisitos('');
    setObjetivos('');
    setFechaLimite('');
    setRecompensa(false);
    setCertificado(false);
    setPlazo('');
  };

  // Cargar datos persistidos desde localStorage al montar el componente
  useEffect(() => {
    const storedData = localStorage.getItem('formProyecto');
    if (storedData) {
      const parsedData: Proyecto = JSON.parse(storedData);
      setNombreProyecto(parsedData.title);
      setDescripcion(parsedData.shortDescription);
      setRequisitos(parsedData.requirements);
      setObjetivos(parsedData.objectives);
      setFechaLimite(parsedData.deadline);
      setRecompensa(parsedData.reward ?? false);
      setCertificado(parsedData.certificate ?? false);
      setPlazo(parsedData.duration);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validar que la fecha sea válida
    const isFechaValida = !isNaN(Date.parse(fechaLimite));
    const isPlazoValido = /^\d+$/.test(plazo); // Verifica que el plazo sea un número entero positivo
  
    const newErrors = {
      nombreProyecto: nombreProyecto ? '' : 'El nombre del proyecto es obligatorio.',
      descripcion: descripcion ? '' : 'La descripción es obligatoria.',
      requisitos: requisitos ? '' : 'Los requisitos son obligatorios.',
      objetivos: objetivos ? '' : 'Los objetivos son obligatorios.',
      fechaLimite: isFechaValida ? '' : 'La fecha límite debe ser válida.',
      plazo: isPlazoValido ? '' : 'El plazo debe ser un número en días.',
      certificado: certificado ? '' : 'El certificado es obligatorio.',
    };
  
    setErrors(newErrors);
  
    const hasErrors = Object.values(newErrors).some((error) => error !== '');
    if (!hasErrors) {
      const newProyecto: Proyecto = {
        id: initialData?.id || crypto.randomUUID(),
        title: nombreProyecto,
        shortDescription: descripcion,
        requirements: requisitos,
        objectives: objetivos,
        deadline: fechaLimite,
        reward: recompensa,
        certificate: certificado,
        duration: plazo,
        members: 0,
        logo: '',
        date: new Date().toISOString(), // Fecha actual
        technologies: [],
        description: descripcion,
      };
  
      console.log("Guardando proyecto en localStorage:", newProyecto);
        localStorage.setItem('formProyecto', JSON.stringify(newProyecto));
        resetForm();
        router.push('/detailchallenge');
    }
  };

  // Renderizado del formulario
  return (
    <form onSubmit={handleSubmit} className="challenge-form">
      <InputText
        label="Nombre del proyecto"
        value={nombreProyecto}
        onChange={setNombreProyecto}
        error={errors.nombreProyecto}
        helperText={errors.nombreProyecto}
      />
      <InputText
        label="Descripción"
        value={descripcion}
        onChange={setDescripcion}
        error={errors.descripcion}
        helperText={errors.descripcion}
      />
      <InputText
        label="Requerimientos"
        value={requisitos}
        onChange={setRequisitos}
        error={errors.requisitos}
        helperText={errors.requisitos}
      />
      <InputText
        label="Objetivos"
        value={objetivos}
        onChange={setObjetivos}
        error={errors.objetivos}
        helperText={errors.objetivos}
      />
      <CampoFecha
        label="Fecha límite"
        value={fechaLimite}
        onChange={setFechaLimite}
        error={errors.fechaLimite}
        helperText="Por favor, selecciona una fecha válida."
      />
      <InputText
        label="Plazo"
        value={plazo}
        onChange={setPlazo}
        error={errors.plazo}
        helperText={errors.plazo}
      />
      <CampoSwitch
        label="¿Tiene recompensa?"
        checked={recompensa}
        onChange={setRecompensa}
      />
      <CampoSwitch
        label="¿Entrega certificado?"
        checked={certificado}
        onChange={setCertificado}
      />
      {errors.certificado && <p className="error-text">{errors.certificado}</p>}

      <button type="submit">Continuar</button>
    </form>
  );
};

export default ChallengeForm;