import React from "react";
import "./Footer.css";
import instagramIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Información de Contacto</h3>
          <p>Email: info@guarderiacanina.com</p>
          <p>Teléfono: 692157845</p>
        </div>
        <div className="footer-content">
          <h3>Síguenos en redes sociales</h3>
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
