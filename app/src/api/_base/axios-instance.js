import axios from "axios";
import { API_URL } from "../../constants/api_base";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  withCredentials: true,
});