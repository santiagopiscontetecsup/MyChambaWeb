import { NavItem } from '@/features/navItem/sidebarTypes';


export const navList: NavItem[] = [
  {
    id: 1,
    name: "Home",
    icon: "bi bi-house",
    category: "main",
    path: "/home",
  },
  {
    id: 2,
    name: "Mis Proyectos",
    icon: "bi bi-folder",
    category: "main",
    path: "/proyectos",
  },
  {
    id: 3,
    name: "Publicar Proyecto",
    icon: "bi bi-file-earmark-plus",
    category: "main",
    path: "/publicar",
  },
  {
    id: 4,
    name: "Postulantes",
    icon: "bi bi-person-plus",
    category: "main",
    path: "/postulantes",
  },
  {
    id: 5,
    name: "Profile",
    icon: "bi bi-person",
    category: "others",
    path: "/profile",
  },
  {
    id: 6,
    name: "Settings",
    icon: "bi bi-gear",
    category: "others",
    path: "/configuracion",
  },
  {
    id: 7,
    name: "Help",
    icon: "bi bi-question-circle",
    category: "others",
    path: "/ayuda",
  },
  {
    id: 8,
    name: "Logout",
    icon: "bi bi-box-arrow-right",
    category: "others",
    path: "/logout",
  },
];
