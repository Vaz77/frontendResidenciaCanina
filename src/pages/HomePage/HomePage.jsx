import React, { useEffect, useState, useRef } from "react";
import "./HomePage.css";
import InfoPage from "../InfoPage/InfoPage";
import Footer from "../../common/Footer/Footer";
import ServicesPage from "../ServicesPage/ServicesPage";
import AppointmentsPage from "../AppointmentsPage/AppointmentsPage";
import { NavLink } from "react-router-dom";
import AlimentPage from "../AlimentPage/AlimentPage";
import Ubication from "../Ubication/Ubication";
import perroImage from "../../assets/fondoMel.png";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/perrosFelices.jpg";
import image2 from "../../assets/instalacionesPerros3.jpg";
import image4 from "../../assets/excursionCanina.jpg";
import image3 from "../../assets/perrosPIscina.jpeg";

const HomePage = () => {
  const [showImage, setShowImage] = useState(false);
  const [showInfoPage, setShowInfoPage] = useState(false);
  const [showServicesPage, setShowServicesPage] = useState(false);
  const [showAppointmentsPage, setShowAppointmentsPage] = useState(false);
  const [showAlimentPage, setShowAlimentPage] = useState(false);
  const [showUbicationPage, setShowUbicationPage] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const infoPageRef = useRef(null);
  const servicesPageRef = useRef(null);
  const appointmentsPageRef = useRef(null);
  const alimentPageRef = useRef(null);
  const ubicationPageRef = useRef(null);
  const user = useSelector((state) => state.user);
  const token = user.credentials.token;
  const role = user.data.roleId;

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
    setShowAlimentPage(rect.bottom >= 0);
    setShowUbicationPage(rect.bottom >= 0);
  }, []);

  const userName = useSelector((state) => state.user.data.name);

  useEffect(() => {
    setShowCards(role === 1);
  }, [role]);

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
              ? `¡Bienvenid@ ${userName} a tu Hotel canino cerca de la ciudad!`
              : "¡Bienvenid@ a tu Hotel canino cerca de la ciudad!"}
          </h1>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            <div>
              <img src={image1} alt="Imagen 1" />
              <p className="legend">¡Una imagen vale mas que mil palabras!</p>
            </div>
            <div>
              <img src={image2} alt="Imagen 2" />
              <p className="legend">Amplias instalaciones</p>
            </div>
            <div>
              <img src={image3} alt="Imagen 3" />
              <p className="legend">
                ¡Pisicnas adaptadas para ellos, y supervisadas!
              </p>
            </div>
            <div>
              <img src={image4} alt="Imagen 4" />
              <p className="legend">¡Organizamos excursiones con vosotros!</p>
            </div>
          </Carousel>
          {showCards && (
            <div className="card-container">
              <NavLink
                as={NavLink}
                to="/getAllAppointments"
                exact="true"
                className="inicio card"
              >
                <h5>Todas las citas</h5>
              </NavLink>
              <NavLink
                as={NavLink}
                to="/allUsers"
                exact="true"
                className="inicio card"
              >
                <h5>Todos los usuarios</h5>
              </NavLink>
              <NavLink
                as={NavLink}
                to="/allDogs"
                exact="true"
                className="inicio card"
              >
                <h5>Todos los perros</h5>
              </NavLink>
              <NavLink
                as={NavLink}
                to="/allServices"
                exact="true"
                className="inicio card"
              >
                <h5>Todos los servicios</h5>
              </NavLink>
              <NavLink
                as={NavLink}
                to="/dogsPage"
                exact="true"
                className="inicio card"
              >
                <h5>Registro de perros</h5>
              </NavLink>
            </div>
          )}
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
          {showAlimentPage && <AlimentPage />}
        </div>
        <div ref={ubicationPageRef} id="ubicationPage">
          {showUbicationPage && <Ubication />}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
