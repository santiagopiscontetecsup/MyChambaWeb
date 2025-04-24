import axios from "axios";

const API_BASE_URL = "https://bd3f-2800-200-f410-12ea-c4f7-9cbe-11c5-1670.ngrok-free.app";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;