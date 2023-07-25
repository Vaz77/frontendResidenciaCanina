import React, { useState } from "react";
import "./Footer.css";
import instagramIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook(2).png";
import twitterIcon from "../../assets/twitter(1).png";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { NavLink } from "react-router-dom";

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
  const handleInstalacionesClick = () => {
    // Obtener la posición de la sección "Instalaciones" en HomePage
    const infoPageSection = document.getElementById("infoPage");
    if (infoPageSection) {
      const windowHeight = window.innerHeight;
      const rect = infoPageSection.getBoundingClientRect();
      const scrollOffset = Math.max(0, rect.top - windowHeight / 2);
      infoPageSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const handleInicioClick = () => {
    // Hacer scroll hasta la parte superior de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleServicesClick = () => {
    // Obtener la posición de la página después de infoPage (servicesPage)
    const servicesPageSection = document.getElementById("servicesPage");
    if (servicesPageSection) {
      const windowHeight = window.innerHeight;
      const rect = servicesPageSection.getBoundingClientRect();
      const scrollOffset = Math.max(0, rect.top - windowHeight / 2);
      servicesPageSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="nav-links">
        <NavLink
          as={NavLink}
          to="/"
          exact="true"
          className="inicio"
          onClick={handleInicioClick}
        >
          <h5>Inicio</h5>
        </NavLink>
        <NavLink className="inicio" onClick={handleInstalacionesClick}>
          <h5>Instalaciones</h5>
        </NavLink>
        <NavLink className="inicio" onClick={handleServicesClick}>
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
          <h3 className="textoEmailFooter">Email: info@guarderiacanina.com</h3>
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
