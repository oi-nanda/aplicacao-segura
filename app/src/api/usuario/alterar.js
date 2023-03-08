import { API_URL } from "../../constants/api_base";
import axios from "axios";

export async function alterarUser({id, nome, email, telefone, imagem }) {
  const response = await axios.put(`${API_URL}/usuarios/perfil/alterar`, {
    id,
    nome,
    email,
    telefone,
    imagem,
  });
  return response.data;
}