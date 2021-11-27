import axios from "axios";
import { getToken } from "./Auth";

const api = axios.create({
  baseURL: " http://localhost:1337/auth/local/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;