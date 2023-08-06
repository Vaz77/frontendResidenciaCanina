import Modal from "react-modal";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
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

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const closeForm = () => {
    onRequestClose();
  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
      setShowSuccessMessage(true);
      setTimeout(() => {
        closeForm();
      }, 2000);
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
        {showSuccessMessage && (
          <div className="success-message">Registro existoso!</div>
        )}
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Introduce tu nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellidos:</label>
            <input
              type="text"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Introduce tus apellidos"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dni">Dni:</label>
            <input
              type="text"
              id="dni"
              value={formData.dni}
              onChange={handleChange}
              placeholder="Introduce tu numero de dni"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Introduce tu número teléfono"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="text"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Introduce tu correo electrónico"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Introduce tu contraseña"
            />
                        {showPassword ? (
              <FiEyeOff
                className="password-visibility-icon"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FiEye
                className="password-visibility-icon"
                onClick={togglePasswordVisibility}
              />
            )}
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
