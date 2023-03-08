import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useAuth } from "../../../api/usuario/login";

import useGlobalUser from "../../../context/user.context";

export function LoginScreen() {
  const MESSAGE_TIME = 1000;
  const [error, setError] = useState();
  const [user, setUser] = useGlobalUser();
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSingUp() {
    navigate(`/singUp`);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormInput((oldFormInput) => ({
      ...oldFormInput,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const user = await login({
        username: formInput.username,
        password: formInput.password,
      });
      setUser(user);
    } catch (error) {
      setError("Usuário ou senha incorretos");
    } finally {
      setTimeout(() => {
        window.location.reload();
      }, MESSAGE_TIME);
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <p className="Logo">Seguranca</p>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="Email"
                name="username"
                value={formInput.username}
                onChange={handleChange}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                name="password"
                value={formInput.password}
                onChange={handleChange}
              />
            </div>

            {error && <div className="login-error">{error}</div>}

            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>

          <div className="social-login">
            <a onClick={handleSingUp}>Sing Up</a>
          </div>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
