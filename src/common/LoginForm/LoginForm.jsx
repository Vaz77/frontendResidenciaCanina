import React, { useState } from "react";
import Modal from "react-modal";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";

const LoginForm = ({ isOpen, onRequestClose }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const handleRegisterModalOpen = () => {
    setIsRegisterModalOpen(true);
  };
  const handleRegisterModalClose = () => {
    setIsRegisterModalOpen(false);
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
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" />
          </div>
          <NavLink as={NavLink} to="/" exact="true" className="inicio">
            <h3 onClick={handleRegisterModalOpen}>
              Todavía no te has registrado? Registrate aquí
            </h3>
          </NavLink>
          <div className="button-container">
            <button className="btn btn-cancel" onClick={onRequestClose}>
              Cancelar
            </button>
            <button className="btn btn-login">Iniciar Sesión</button>
          </div>
        </form>
        <RegisterForm
          isOpen={isRegisterModalOpen}
          onRequestClose={handleRegisterModalClose}
        />
      </div>
    </Modal>
  );
};

export default LoginForm;
