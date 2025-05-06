import api from "../api";

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/api/Auth/login", { email, password });
  const token = response.data.token;

  // Guardar el token en localStorage
  localStorage.setItem("token", token);

  return response.data;
};