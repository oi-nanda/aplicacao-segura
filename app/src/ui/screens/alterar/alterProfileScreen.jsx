import "./index.css";
import back from "../../../assets/back.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useGlobalUser from "../../../context/user.context";
import { alterarUser } from "../../../api/usuario/alterar";
export function AlterProfileScreen() {
  const MESSAGE_TIME = 2000;
  const navigate = useNavigate();
  const [user, setUser] = useGlobalUser();
  const [error, setError] = useState();
  const [formInput, setFormInput] = useState({
    id: user.id,
    nome: "",
    email: "",
    telefone: "",
    imagem: "",
    requestResult: "",
  });

  function handBack() {
    navigate(`/profile`);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await alterarUser({
        id: user.id,
        nome: formInput.nome,
        email: formInput.email,
        telefone: formInput.telefone,
        imagem: formInput.imagem,
      });
      setError("Usuario alterado com sucesso!");
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, MESSAGE_TIME);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({
      ...oldFormInput,
      [name]: value,
    }));
  }

  return (
    <>
      <img src={back} alt="go back" className="back" onClick={handBack} />

      <div className="container_profile">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={handleSubmit}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="Name"
                  name="nome"
                  value={formInput.nome}
                  onChange={handleChange}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="tel"
                  className="login__input"
                  placeholder="Phone Number"
                  name="telefone"
                  value={formInput.telefone}
                  onChange={handleChange}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  name="email"
                  onChange={handleChange}
                  type="text"
                  className="login__input"
                  value={formInput.email}
                  placeholder="Email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  onChange={handleChange}
                  name="imagem"
                  type="text"
                  value={formInput.imagem}
                  className="login__input"
                  placeholder="Profile picture (url)"
                />
              </div>

              {error && <div className="login-error">{error}</div>}

              <button className="button login__submit">
                <span className="button__text">Confirm</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4_changeProfile"></span>
            <span className="screen__background__shape screen__background__shape3_changeProfile"></span>
            <span className="screen__background__shape screen__background__shape2_changeProfile"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
        <div className="title">
          <p className="subtitle">Alterar Usuário</p>
        </div>
      </div>
    </>
  );
}
