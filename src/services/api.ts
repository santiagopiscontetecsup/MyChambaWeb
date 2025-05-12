import axios from "axios";

const NEXT_PUBLIC_API_BASE_URL="http://44.201.117.88:5227/"


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
