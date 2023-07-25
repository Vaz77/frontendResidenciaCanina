import React from "react";
import "./AppointmentsPage.css";

const AppointmentsPage = () => {
  return (
    <div className="appointments-page">
      <section className="how-to-reserve">
        <h2>¿Cómo reservar tu plaza?</h2>
        <div className="steps">
          <div className="step">
            {/* <img src={icon1} alt="Icono 1" /> */}
            <p>Contacta con nosotros</p>
          </div>
          <div className="step">
            {/* <img src={icon2} alt="Icono 2" /> */}
            <p>Fija la fecha y la hora</p>
          </div>
          <div className="step">
            {/* <img src={icon3} alt="Icono 3" /> */}
            <p>Reserva tu plaza</p>
          </div>
          <div className="step">
            {/* <img src={icon4} alt="Icono 4" /> */}
            <p>Recogemos a tu perro</p>
          </div>
        </div>
      </section>
      <section className="other-section">
        {/* Otra sección con más información */}
      </section>
    </div>
  );
};

export default AppointmentsPage;
