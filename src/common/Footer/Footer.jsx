import React, { useState } from "react";
import "./Footer.css";
import instagramIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook(2).png";
import twitterIcon from "../../assets/twitter(1).png";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../pages/userSlice";
import { useDispatch } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state.user);
  const token = user.credentials.token;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleServicesClick = () => {
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
  const handleAppointmentsClick = () => {
    const appointmentsPageSection = document.getElementById("appointmentsPage");
    if (appointmentsPageSection) {
      const windowHeight = window.innerHeight;
      const rect = appointmentsPageSection.getBoundingClientRect();
      const scrollOffset = Math.max(0, rect.top - windowHeight / 2);
      appointmentsPageSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const handleAlimentClick = () => {
    const alimentPageSection = document.getElementById("alimentPage");
    if (alimentPageSection) {
      const windowHeight = window.innerHeight;
      const rect = alimentPageSection.getBoundingClientRect();
      const scrollOffset = Math.max(0, rect.top - windowHeight / 2);
      alimentPageSection.scrollIntoView({
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
        <NavLink className="inicio" onClick={handleAlimentClick}>
          <h5>Alimentación</h5>
        </NavLink>
        <NavLink className="inicio" onClick={handleAppointmentsClick}>
          <h5>Reservas</h5>
        </NavLink>
        {token && (
          <NavLink as={NavLink} to="/userAppointment" exact="true">
            <h5>Mis citas</h5>
          </NavLink>
        )}
        {token ? (
          <NavLink
            as={NavLink}
            to="/"
            exact="true"
            className="iniciarCerrar"
            onClick={handleLogout}
          >
            <h5>Cerrar sesión</h5>
          </NavLink>
        ) : (
          <NavLink as={NavLink} to="/" exact="true" className="inicio">
            <h5 onClick={handleLoginModalOpen}>Iniciar Sesión</h5>
          </NavLink>
        )}
      </div>
      <div className="footer-container">
        <div className="footer-content footer-info">
          <p className="textPhone">
            Teléfono: 692157845 | Email: info@guarderiacanina.com
          </p>
        </div>
        <div className="footer-content footer-social">
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
        <p className="footerDerechos footer-rights">
          &copy; {new Date().getFullYear()} Hotel canino. Todos los derechos
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
