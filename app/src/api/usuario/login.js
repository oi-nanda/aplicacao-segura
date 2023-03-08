import axios from "axios";
import { API_URL } from "../../constants/api_base";

export const useAuth = () => {
  async function login({
    username,
    password
}) {
    const response = await axios.post(
      `${API_URL}/login`,
      {},
      {
        auth: { 
          username,
          password,
        },
      }
    );
    return response.data;
  }

  async function logout() {

    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
    
  }

  return { login, logout };
};
