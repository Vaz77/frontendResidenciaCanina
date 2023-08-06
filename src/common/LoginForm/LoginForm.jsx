import React, { useState } from "react";
import Modal from "react-modal";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/apiCalls";
import { login } from "../../pages/userSlice";
import jwt_decode from "jwt-decode";

const LoginForm = ({ isOpen, onRequestClose, onRegisterModalOpen }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    loginUser({ email, password })
      .then((token) => {
        const decodedToken = jwt_decode(token);
        dispatch(
          login({
            token: token,
            email: formData.email,
            password: formData.password,
            name: decodedToken.name,
            roleId: decodedToken.roleId,
          })
        );
        onRequestClose();
        navigate("/");
      })
      .catch((error) => {
        console.log("Error durante el inicio de sesión:", error);
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
              name="email"
              value={formData.email}
              onChange={inputHandler}
              placeholder="Introduce tu correo electrónico"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={inputHandler}
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
          <NavLink as={NavLink} to="/" exact="true" className="inicio">
            <h3 onClick={onRegisterModalOpen}>
              Todavía no te has registrado? Registrate aquí
            </h3>
          </NavLink>
          <div className="button-container">
            <button className="btn btn-cancel" onClick={onRequestClose}>
              Cancelar
            </button>
            <button className="btn btn-login" onClick={submitHandler}>
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default LoginForm;
