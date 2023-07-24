import React from "react";
import "./Footer.css";
import instagramIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
          <h5>Citas Online</h5>
        </NavLink>
        <NavLink as={NavLink} to="/nosotros" exact="true" className="inicio">
          <h5>Sobre Nosotros</h5>
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
    </footer>
  );
};

export default Footer;
