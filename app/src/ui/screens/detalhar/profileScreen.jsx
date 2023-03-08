import { useState, useEffect } from "react";
import post_teste from "../../../assets/post_teste.jpg";
import "./index.css";
import axios from "axios";
import { detalhar } from "../../../api/usuario/detalhar";
import useGlobalUser from "../../../context/user.context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../api/usuario/login";
import { USER_KEY } from "../../../constants/user";
import { API_URL } from "../../../constants/api_base";
export function ProfileScreen() {
  const [actualUser, setActualuser] = useState();
  const { logout } = useAuth();
  const [user, setUser] = useGlobalUser();
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadActualuser() {
      try {
        const response = await axios.get(
          `${API_URL}/usuarios/detalhar/${user.id}`
        );
        if (response?.data) {
          setActualuser(response.data);
        }
      } catch (error) {
        setError(error.response.data.message);
      }
    }

    loadActualuser();
  }, [user]);

  async function handleClickLogout() {
    navigate(`/`);
    await logout();
    setUser(null);
    localStorage.removeItem(USER_KEY);
  }

  async function handleAlterProfile() {
    navigate(`/alterProfile`);
  }

  return (
    <div className="homeScreen">
      <button className="header_button_logout" onClick={handleClickLogout}>
        Sair
      </button>
      <section className="section_profile">
        <header className="header_profile">
          <img src={actualUser?.imagem} alt="" className="perfil_image" />
          <div className="infos_profile">
            <p className="header_info">{actualUser?.nome}</p>
            <p className="header_info">Email: {actualUser?.email}</p>
            <p className="header_info">Telefone: {actualUser?.telefone}</p>
            <p className="header_info">CriadoEm: {actualUser?.criadoEm}</p>

            {actualUser?.atualizadoEm ? (
              <p className="header_info">
                PerfilAlteradoEm: {actualUser?.atualizadoEm}
              </p>
            ) : null}

            {error && <div className="login-error">{error}</div>}

            <button className="header_button" onClick={handleAlterProfile}>
              Alterar Perfil
            </button>
          </div>

          <p className="logo_profile">Seguranca</p>
        </header>
      </section>
    </div>
  );
}
