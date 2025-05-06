export interface ProyectoEmpresa {
    id: number;  // El ID del proyecto
    nombre: string;  // El nombre del proyecto
    descripcion: string;  // La descripción corta del proyecto
    fechaLimite: string;  // La fecha límite del proyecto en formato string
    numeroPostulaciones: number;  // El número de postulaciones para el proyecto
    postulantes: any[];  // Lista de postulantes (vacía en tu caso)
  }
  