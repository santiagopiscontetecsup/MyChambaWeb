import avatar from "@/assets/avatar.jpg";
import background from "@/assets/img/fondo.jpg";

export interface UserProfile {
  name: string;
  role: string;
  description: string;
  profileImage: string;
  backgroundImage: string;
}

export const userProfile: UserProfile = {
  name: "Lucas Fernández",
  role: "Desarrollador Full Stack",
  description:
    "Apasionado por la tecnología y el desarrollo web. Siempre en busca de nuevos retos y aprendizajes para mejorar mis habilidades.",
  profileImage: avatar.src,
  backgroundImage: background.src,
};
