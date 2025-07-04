import avatar from "@/assets/image.png";
import background from "@/assets/img/fondo.jpg";

export interface UserProfile {
  name: string;
  role: string;
  description: string;
  profileImage: string;
  backgroundImage: string;
  industria: string;
  redes:string
}

export const userProfile: UserProfile = {
  name: "Pro Avance SAC",
  role: "Owner",
  description:
    "Ayudamos a personas y empresas a crecer mediante capacitaciones en gestión administrativa, recursos humanos, finanzas, contabilidad, logística y seguridad.",
  profileImage: avatar.src,
  backgroundImage: background.src,
  industria:"Diseño digital y desarrollo de productos interactivos",
  redes:"Correo: piscontedev@gmail.com"
};