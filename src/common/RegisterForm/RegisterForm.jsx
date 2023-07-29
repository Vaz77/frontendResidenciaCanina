import Modal from "react-modal";
import React, { useState } from "react";
import "./RegisterForm.css";
import { registerUser } from "../../services/apiCalls";
import "./RegisterForm.css";

const RegisterForm = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    dni: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const token = await registerUser(formData);
    } catch (error) {
      console.error(error);
    }
  };
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
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellidos:</label>
            <input
              type="text"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dni">Dni:</label>
            <input
              type="text"
              id="dni"
              value={formData.dni}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="text"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <button className="btn btn-cancel" onClick={onRequestClose}>
              Cancelar
            </button>
            <button className="btn btn-register" onClick={handleRegister}>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterForm;
