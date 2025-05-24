import api from "../api";

export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/api/Auth/login", { email, password });
  const token = response.data.token;

  localStorage.setItem("token", token);

  return response.data;
};