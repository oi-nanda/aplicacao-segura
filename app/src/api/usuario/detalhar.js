import axios from "axios";
import { API_URL } from "../../constants/api_base";

export async function detalhar(id) {
  try {
    const response = await axios.get(`${API_URL}/usuarios/detalhar/${id}`);
    return response.data;
  } catch (error) {}
}
