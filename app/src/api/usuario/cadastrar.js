import axios from "axios";
import { API_URL } from "../../constants/api_base";
export async function cadastrarUser({ nome, email, telefone, senha, imagem }) {
  const response = await axios.post(`${API_URL}/usuarios/cadastrar`, {
    nome,
    email,
    telefone,
    senha,
    imagem,
  });
  return response.data;
}
