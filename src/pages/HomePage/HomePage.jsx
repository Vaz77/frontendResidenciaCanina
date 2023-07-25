import React, { useEffect, useState, useRef } from "react";
import "./HomePage.css";
import InfoPage from "../InfoPage/InfoPage";
import Footer from "../../common/Footer/Footer";
import ServicesPage from "../ServicesPage/ServicesPage";
import AppointmentsPage from "../AppointmentsPage/AppointmentsPage";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [showImage, setShowImage] = useState(false);
  const [showInfoPage, setShowInfoPage] = useState(false);
  const [showServicesPage, setShowServicesPage] = useState(false);
  const [showAppointmentsPage, setShowAppointmentsPage] = useState(false);
  const infoPageRef = useRef(null);
  const servicesPageRef = useRef(null);
  const appointmentsPageRef = useRef(null);
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
    setShowAppointmentsPage(rect.bottom >= 0);
  }, []);
  const handleScroll = () => {
    const infoPageSection = infoPageRef.current;
    const servicesPageSection = servicesPageRef.current;
    const appointmentsPageSection = appointmentsPageRef.current;
    if (infoPageSection && servicesPageSection && appointmentsPageSection) {
      const rectInfoPage = infoPageSection.getBoundingClientRect();
      const rectServicesPage = servicesPageSection.getBoundingClientRect();
      const rectAppointmentsPage =
        appointmentsPageSection.getBoundingClientRect();
      setShowInfoPage(
        rectInfoPage.top < window.innerHeight && rectInfoPage.bottom >= 0
      );
      setShowServicesPage(
        rectServicesPage.top < window.innerHeight &&
          rectServicesPage.bottom >= 0
      );
      setShowAppointmentsPage(
        rectAppointmentsPage.top < window.innerHeight &&
          rectAppointmentsPage.bottom >= 0
      );
    }
  };
  const handleAppointmentsClick = () => {
    // Obtener la posición de la página después de infoPage (servicesPage)
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
  return (
    <>
      <div className="main-content">
        <div className={`generalHome ${showImage ? "show-image" : ""}`}>
          <div className="reservar-cita-container">
            <div className="reservar-cita-triangle"></div>
            <div className="reservar-cita-shape"></div>
            <NavLink className="reservar-cita-texto" onClick={handleAppointmentsClick}>
          <h5>¡Haz tu reserva aquí!</h5>
        </NavLink>
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
        <div ref={appointmentsPageRef} id="appointmentsPage">
          {showAppointmentsPage && <AppointmentsPage />}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
