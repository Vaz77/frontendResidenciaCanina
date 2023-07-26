import React from "react";
import "./AppointmentsPage.css";
import icon1 from "../../assets/flechaHaciaAbajo.png";

const AppointmentsPage = () => {
  return (
    <div className="appointments-page">
      <section className="how-to-reserve">
        <h2>¿Cómo reservar tu plaza?</h2>
        <div className="steps">
          <div className="step">
            <p>Contacta con nosotros</p>
          </div>
          <div className="step">
            <img src={icon1} alt="Icono 2" className="icon1" />
            <p>Fija la fecha y la hora</p>
          </div>
          <div className="step">
            <img src={icon1} alt="Icono 3" className="icon1" />
            <p className="textoPlaza">Reserva tu plaza</p>
          </div>
          <div className="step">
            <img src={icon1} alt="Icono 4" className="icon1" />
            <p>Recogemos a tu perro</p>
          </div>
        </div>
      </section>
      <section className="other-section">
        <h2 className="textReserva">Reserva tu cita</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre completo:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono de contacto:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="dogName">Nombre de tu perro:</label>
            <input type="text" id="dogName" name="dogName" required />
          </div>
          <div className="form-group">
            <label htmlFor="dogBreed">Raza de tu perro:</label>
            <input type="text" id="dogBreed" name="dogBreed" required />
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Fecha de la cita:</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointmentTime">Hora de la cita:</label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalInfo">Información adicional:</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="4"
            ></textarea>
          </div>
          <button type="submit">Reservar cita</button>
        </form>
      </section>
    </div>
  );
};

export default AppointmentsPage;
