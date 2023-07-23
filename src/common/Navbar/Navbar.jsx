import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MiLogo</div>
      <ul className="nav-links">
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
      </ul>
    </nav>
  );
};

export default Navbar;
