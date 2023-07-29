import React, { useEffect, useState, useRef } from "react";
import "./HomePage.css";
import InfoPage from "../InfoPage/InfoPage";
import Footer from "../../common/Footer/Footer";
import ServicesPage from "../ServicesPage/ServicesPage";
import AppointmentsPage from "../AppointmentsPage/AppointmentsPage";
import { NavLink } from "react-router-dom";
import AlimentPage from "../AlimentPage/AlimentPage";
import perroImage from "../../assets/fondoMel.png";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [showImage, setShowImage] = useState(false);
  const [showInfoPage, setShowInfoPage] = useState(false);
  const [showServicesPage, setShowServicesPage] = useState(false);
  const [showAppointmentsPage, setShowAppointmentsPage] = useState(false);
  const infoPageRef = useRef(null);
  const servicesPageRef = useRef(null);
  const appointmentsPageRef = useRef(null);
  const alimentPageRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const infoPageSection = infoPageRef.current;
    const rect = infoPageSection.getBoundingClientRect();
    setShowInfoPage(rect.top < window.innerHeight && rect.bottom >= 0);
    setShowServicesPage(rect.bottom >= 0);
    setShowAppointmentsPage(rect.bottom >= 0);
  }, []);

  const userName = useSelector((state) => state.user.data.name);

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
  return (
    <>
      <div className="main-content">
        <div className={`generalHome ${showImage ? "show-image" : ""}`}>
          <div className="reservar-cita-container">
            <div className="reservar-cita-triangle"></div>
            <div className="reservar-cita-shape"></div>
            <NavLink
              className="reservar-cita-texto"
              onClick={handleAppointmentsClick}
            >
              <h5>¡Haz tu reserva aquí!</h5>
            </NavLink>
            <div className="reservar-cita-rope"></div>
          </div>
          <h1 className="textoBienvenida">
            {userName
              ? `¡Bienvenid@ ${userName} a tu Guarderia Canina cerca de la ciudad!`
              : "¡Bienvenid@ a tu Guarderia Canina cerca de la ciudad!"}
          </h1>
          <div className="perro-image-container">
            <img src={perroImage} alt="Perro" className="perro-image" />
          </div>
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
        <div ref={alimentPageRef} id="alimentPage">
          <AlimentPage />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
