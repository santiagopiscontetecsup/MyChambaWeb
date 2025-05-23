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
    path: "/myprojects",
  },
  {
    id: 3,
    name: "Publicar Proyecto",
    icon: "bi bi-file-earmark-plus",
    category: "main",
    path: "/postchallenge",
  },
  // {
  //   id: 4,
  //   name: "Postulantes",
  //   icon: "bi bi-person-plus",
  //   category: "main",
  //   path: "/postulants",
  // },
  {
    id: 4,
    name: "Perfil",
    icon: "bi bi-person",
    category: "others",
    path: "/profile",
  },
  {
    id: 5,
    name: "Ajustes",
    icon: "bi bi-gear",
    category: "others",
    path: "/settings",
  },
  {
    id: 6,
    name: "Logout",
    icon: "bi bi-box-arrow-right",
    category: "others",
    path: "/",
  },
];
