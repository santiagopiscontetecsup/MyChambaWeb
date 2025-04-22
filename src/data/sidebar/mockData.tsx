import { NavItem } from '@/features/navItem/sidebarTypes';

export const navList: NavItem[] = [
  {
    id: 1,
    name: "Home",
    icon: "bi bi-house",
    category: "main", 
  },
  {
    id: 2,
    name: "Mis Proyectos",
    icon: "bi bi-folder",
    category: "main",
  },
  {
    id: 3,
    name: "Publicar Proyecto",
    icon: "bi bi-file-earmark-plus",
    category: "main",
  },
  {
    id: 4,
    name: "Postulantes",
    icon: "bi bi-person-plus",
    category: "main",
  },
  {
    id: 5,
    name: "Profile",
    icon: "bi bi-person",
    category: "others", 
  },
  {
    id: 6,
    name: "Settings",
    icon: "bi bi-gear",
    category: "others",
  },
  {
    id: 7,
    name: "Help",
    icon: "bi bi-question-circle",
    category: "others",
  },
  {
    id: 8,
    name: "Logout",
    icon: "bi bi-box-arrow-right",
    category: "others",
  },
];
