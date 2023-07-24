// import React, { useState } from "react";
// import "./Navbar.css";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <nav className="navbar">
//       {/* <img src="/src/assets/dog-nose.png" alt="Twitter"  className="logo"/> */}
//       <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
//         <div className="icon-line"></div>
//         <div className="icon-line"></div>
//         <div className="icon-line"></div>
//       </div>
//       <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
//         <NavLink as={NavLink} to="/" exact="true" className="inicio">
//           <h5>Inicio</h5>
//         </NavLink>
//         <NavLink as={NavLink} to="/instalaciones" exact="true" className="inicio">
//           <h5>Instalaciones</h5>
//         </NavLink>
//         <NavLink as={NavLink} to="/nosotros" exact="true" className="inicio">
//           <h5>Servicios</h5>
//         </NavLink>
//         <NavLink as={NavLink} to="/nosotros" exact="true" className="inicio">
//           <h5>Alimentación</h5>
//         </NavLink>
//         <NavLink as={NavLink} to="/nosotros" exact="true" className="inicio">
//           <h5>Citas Online</h5>
//         </NavLink>
//         <NavLink as={NavLink} to="/nosotros" exact="true" className="inicio">
//           <h5>Sobre Nosotros</h5>
//         </NavLink>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
