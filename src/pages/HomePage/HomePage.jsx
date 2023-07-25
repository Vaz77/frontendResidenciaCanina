import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";
import InfoPage from "../InfoPage/InfoPage";
import Footer from "../../common/Footer/Footer";
import ServicesPage from "../ServicesPage/ServicesPage";

const HomePage = () => {
  const [showImage, setShowImage] = useState(false);
  const [showInfoPage, setShowInfoPage] = useState(false);
  const [showServicesPage, setShowServicesPage] = useState(false);
  const infoPageRef = useRef(null);
  const servicesPageRef = useRef(null);
  useEffect(() => {
    // Cuando el componente se monte, muestra la imagen después de un breve retraso
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 100);
    // Limpia el timeout cuando el componente se desmonte para evitar errores
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const infoPageSection = infoPageRef.current;
    const rect = infoPageSection.getBoundingClientRect();
    // Mostrar InfoPage si el rectángulo superior de infoPage está dentro de la ventana visible
    setShowInfoPage(rect.top < window.innerHeight && rect.bottom >= 0);
    // Mostrar ServicesPage solo cuando el rectángulo inferior de infoPage no esté visible
    setShowServicesPage(rect.bottom >= 0);
  }, []);
  const handleScroll = () => {
    const infoPageSection = infoPageRef.current;
    if (infoPageSection) {
      const rect = infoPageSection.getBoundingClientRect();
      // Actualizar showInfoPage basado en la posición de desplazamiento
      setShowInfoPage(rect.top < window.innerHeight && rect.bottom >= 0);
      // Actualizar showServicesPage basado en la posición de desplazamiento
      setShowServicesPage(rect.bottom >= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="main-content">
        <div className={`generalHome ${showImage ? "show-image" : ""}`}>
          <div className="reservar-cita-container">
            <div className="reservar-cita-triangle"></div>
            <div className="reservar-cita-shape"></div>
            <div className="reservar-cita-texto">
              Haz clic aquí para reservar
            </div>
            <div className="reservar-cita-rope"></div>
          </div>
          <h1 className="textoBienvenida">
            ¡Bienvenid@ a tu Guarderia Canina cerca de la ciudad!
          </h1>
        </div>
        <div ref={infoPageRef} id="infoPage">
          {showInfoPage && <InfoPage />}
        </div>
        <div ref={servicesPageRef} id="servicesPage">
          {showServicesPage && <ServicesPage />}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
