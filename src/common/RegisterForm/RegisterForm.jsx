import React from "react";
import Modal from "react-modal";
import "./RegisterForm.css";

const RegisterForm = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Registro Modal"
      className="register-modal"
      overlayClassName="register-modal-overlay"
    >
      <div className="register-modal-content">
        <h2>Registro de Usuario</h2>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellidos:</label>
            <input type="surname" id="surname" />
          </div>
          <div className="form-group">
            <label htmlFor="dni">Dni:</label>
            <input type="dni" id="dni" />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Teléfono:</label>
            <input type="phone" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" />
          </div>
          <div className="button-container">
            <button className="btn btn-cancel" onClick={onRequestClose}>
              Cancelar
            </button>
            <button className="btn btn-register">Registrarse</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterForm;
