// import { jwtDecode } from "jwt-decode";

// export interface UserPayload {
//   idEmpresa: number;
//   emailEmpresa: string;
//   rol: string;
// }

// export const getUserFromToken = (): UserPayload | null => {
//   const token = localStorage.getItem("token");
//   if (!token) return null;

//   try {
//     const decoded: any = jwtDecode(token);
//     console.log("Payload del token:", decoded);

//     return {
//       idEmpresa: parseInt(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]),
//       emailEmpresa: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
//       rol: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
//     };
//   } catch (error) {
//     console.error("Error al decodificar el token:", error);
//     return null;
//   }
// };

import { jwtDecode } from "jwt-decode";

export interface UserPayload {
  idEmpresa: number;
  emailEmpresa: string;
  rol: string;
}

interface JwtPayload {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
}

export const getUserFromToken = (): UserPayload | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    console.log("Payload del token:", decoded);

    return {
      idEmpresa: parseInt(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]),
      emailEmpresa: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
      rol: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    };
  } catch (error) {
    console.error("Error al decodificar el token:", error);
    return null;
  }
};
