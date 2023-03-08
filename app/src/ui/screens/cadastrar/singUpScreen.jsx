import "./index.css";
import back from "../../../assets/back.png";
import { useNavigate } from "react-router-dom";
import { cadastrarUser } from "../../../api/usuario/cadastrar";
import { useState } from "react";

export function SingUpScreen() {
  const MESSAGE_TIME = 2000;
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    imagem: "",
    requestResult: "",
  });

  function handBack() {
    navigate(`/`);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await cadastrarUser({
        nome: formInput.nome,
        email: formInput.email,
        telefone: formInput.telefone,
        senha: formInput.senha,
        imagem: formInput.imagem,
      });
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        requestResult: "Usuario cadastrado com sucesso!",
      }));
    } catch (error) {
      setFormInput((oldFormInput) => ({
        ...oldFormInput,
        requestResult: error.response.data.message,
      }));
    }
    finally {
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

      <div className="container">
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
                  name="senha"
                  onChange={handleChange}
                  type="password"
                  className="login__input"
                  placeholder="Password"
                  value={formInput.senha}
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
              <button className="button login__submit">
                <span className="button__text">Confirm</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>

            <div className="social-login">
              <div className="social-icons"></div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
        <div className="title">
          <p className="subtitle">Cadastro</p>
        </div>
      </div>
    </>
  );
}
