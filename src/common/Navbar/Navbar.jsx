import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
return (
    <nav className="navbar">
    <div className="logo">MiLogo</div>
    <ul className="nav-links">
        <li>
            <a href="#home">Inicio</a>
        </li>
        <li>
            <a href="#servicios">Instalaciones</a>
        </li>
        <li>
            <a href="#nosotros">Servicios</a>
        </li>
        <li>
            <a href="#home">Alimentación</a>
        </li>
        <li>
            <a href="#servicios">Citas online</a>
        </li>
        <li>
            <a href="#nosotros">Nosotros</a>
        </li>
    </ul>
    </nav>
);
};

export default Navbar;
