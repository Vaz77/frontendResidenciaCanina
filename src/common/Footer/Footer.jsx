import React, {useState} from "react";
import "./Footer.css";
import instagramIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook(2).png";
import twitterIcon from "../../assets/twitter(1).png";
import { NavLink } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";

const Footer = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const handleLoginModalOpen = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };
  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };
  const handleRegisterModalOpen = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };
  const handleRegisterModalClose = () => {
    setIsRegisterModalOpen(false);
  };
  return (
    <footer className="footer">
            <div className="nav-links">
        <NavLink as={NavLink} to="/" exact="true" className="inicio">
          <h5>Inicio</h5>
        </NavLink>
        <NavLink as={NavLink} to="/instalaciones" exact="true" className="inicio">
          <h5>Instalaciones</h5>
        </NavLink>
        <NavLink as={NavLink} to="/nosotros" exact="true" className="inicio">
          <h5>Servicios</h5>
        </NavLink>
        <NavLink as={NavLink} to="/nosotros" exact="true" className="inicio">
          <h5>Alimentación</h5>
        </NavLink>
        <NavLink as={NavLink} to="/nosotros" exact="true" className="inicio">
          <h5>Reservas</h5>
        </NavLink>
        <NavLink as={NavLink} to="/nosotros" exact="true" className="inicio">
          <h5>Sobre Nosotros</h5>
        </NavLink>
        <NavLink as={NavLink} to="/" exact="true" className="inicio">
        <h5 onClick={handleLoginModalOpen}>Iniciar Sesión</h5>
        </NavLink>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <h3>Teléfono: 692157845</h3>
          <h3>Email: info@guarderiacanina.com</h3>
        </div>
        <div className="footer-content">
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Guarderia Canina. Todos los derechos
          reservados.
        </p>
      </div>
      {isLoginModalOpen && (
        <LoginForm
          isOpen={isLoginModalOpen}
          onRequestClose={handleLoginModalClose}
          onRegisterModalOpen={handleRegisterModalOpen}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterForm
          isOpen={isRegisterModalOpen}
          onRequestClose={handleRegisterModalClose}
        />
      )}
    </footer>
  );
};

export default Footer;
