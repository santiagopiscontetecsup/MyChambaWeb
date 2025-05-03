import avatar from "@/assets/avatar.jpg";

export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  technologies: string[];
  date: string;
  logo: string;
  members: number;
}

export const projectList: Project[] = [
    {
      id: 1,
      title: "Web Scraping: Scraper de Precios de Laptops",
      shortDescription: "Extrae nombres, precios y marcas de laptops desde una tienda online.",
      technologies: ["Python", "BeautifulSoup", "pandas", "requests"],
      date: "2024-11-10",
      logo: avatar.src,
      members: 8,
    },
    {
      id: 2,
      title: "Monitor de Estado de Servidores",
      shortDescription: "App para monitorear uptime y estado de servidores en tiempo real.",
      technologies: ["Node.js", "Socket.IO", "Express", "MongoDB"],
      date: "2024-12-01",
      logo: avatar.src,
      members: 12,
    },
    {
      id: 3,
      title: "Dashboard de Análisis de Datos",
      shortDescription: "Visualiza estadísticas de usuarios y tráfico web.",
      technologies: ["React", "Chart.js", "TailwindCSS"],
      date: "2025-01-05",
      logo: avatar.src,
      members: 6,
    },
    {
      id: 4,
      title: "Web Scraping: Scraper de Precios de Laptops",
      shortDescription: "Extrae nombres, precios y marcas de laptops desde una tienda online.",
      technologies: ["Python", "BeautifulSoup", "pandas", "requests"],
      date: "2024-11-10",
      logo: avatar.src,
      members: 9,
    },
    {
      id: 5,
      title: "Monitor de Estado de Servidores",
      shortDescription: "App para monitorear uptime y estado de servidores en tiempo real.",
      technologies: ["Node.js", "Socket.IO", "Express", "MongoDB"],
      date: "2024-12-01",
      logo: avatar.src,
      members: 15,
    },
    {
      id: 6,
      title: "Dashboard de Análisis de Datos",
      shortDescription: "Visualiza estadísticas de usuarios y tráfico web.",
      technologies: ["React", "Chart.js", "TailwindCSS"],
      date: "2025-01-05",
      logo: avatar.src,
      members: 10,
    },
    {
      id: 7,
      title: "Dashboard de Análisis de Datos",
      shortDescription: "Visualiza estadísticas de usuarios y tráfico web.",
      technologies: ["React", "Chart.js", "TailwindCSS"],
      date: "2025-01-05",
      logo: avatar.src,
      members: 10,
    },
    {
      id: 8,
      title: "Dashboard de Análisis de Datos",
      shortDescription: "Visualiza estadísticas de usuarios y tráfico web.",
      technologies: ["React", "Chart.js", "TailwindCSS"],
      date: "2025-01-05",
      logo: avatar.src,
      members: 10,
    },
    {
      id: 9,
      title: "Dashboard de Análisis de Datos",
      shortDescription: "Visualiza estadísticas de usuarios y tráfico web.",
      technologies: ["React", "Chart.js", "TailwindCSS"],
      date: "2025-01-05",
      logo: avatar.src,
      members: 10,
    },
    {
      id: 10,
      title: "Dashboard de Análisis de Datos",
      shortDescription: "Visualiza estadísticas de usuarios y tráfico web.",
      technologies: ["React", "Chart.js", "TailwindCSS"],
      date: "2025-01-05",
      logo: avatar.src,
      members: 10,
    },
    {
      id: 11,
      title: "Dashboard de Análisis de Datos",
      shortDescription: "Visualiza estadísticas de usuarios y tráfico web.",
      technologies: ["React", "Chart.js", "TailwindCSS"],
      date: "2025-01-05",
      logo: avatar.src,
      members: 10,
    },
    {
      id: 12,
      title: "Dashboard de Análisis de Datos",
      shortDescription: "Visualiza estadísticas de usuarios y tráfico web.",
      technologies: ["React", "Chart.js", "TailwindCSS"],
      date: "2025-01-05",
      logo: avatar.src,
      members: 10,
    },
  ];