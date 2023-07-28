import React, { useState } from "react";
import Modal from "react-modal";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/apiCalls";

const LoginForm = ({ isOpen, onRequestClose, onRegisterModalOpen }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputHandler = ({ target }) => {
    let { name, value } = target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(user)
      .then((token) => {
        dispatch(
          login({
            token: token,
            name: user.name,
            email: user.email,
          })
        );
        console.log("Token recibido:", token);
        navigate("/");
      })
      .catch((error) => {
        console.log("Error durante el inicio de sesión:", error.message);
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="login-modal"
      overlayClassName="login-modal-overlay"
    >
      <div className="login-modal-content">
        <h2>Iniciar sesión</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </div>
          <NavLink as={NavLink} to="/" exact="true" className="inicio">
            <h3 onClick={onRegisterModalOpen}>
              Todavía no te has registrado? Registrate aquí
            </h3>
          </NavLink>
          <div className="button-container">
            <button className="btn btn-cancel" onClick={onRequestClose}>
              Cancelar
            </button>
            <button
              className="btn btn-login"
              onClick={(e) => {
                submitHandler(e, user);
              }}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
