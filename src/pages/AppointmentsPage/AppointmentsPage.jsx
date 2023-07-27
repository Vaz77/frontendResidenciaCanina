import React from "react";
import "./AppointmentsPage.css";
import icon1 from "../../assets/flechaHaciaAbajo.png";

const AppointmentsPage = () => {
  return (
    <div className="appointments-page">
      <h2 className="textoTittleForm">¿Cómo reservar tu plaza?</h2>
      <section className="how-to-reserve">
        <div className="steps">
          <div className="step">
            <h2 className="textoForm">Contacta con nosotros</h2>
          </div>
          <div className="step">
            <img src={icon1} alt="Icono 2" className="icon1" />
            <h2 className="textoForm">Fija la fecha y la hora</h2>
          </div>
          <div className="step">
            <img src={icon1} alt="Icono 3" className="icon1" />
            <h2 className="textoPlaza">Reserva tu plaza</h2>
          </div>
          <div className="step">
            <img src={icon1} alt="Icono 4" className="icon1" />
            <h2 className="textoForm">Recogemos a tu perro</h2>
          </div>
        </div>
      </section>
      <section className="other-section">
        <h2 className="textReserva">
          Rellena los datos y un profesional se pondrá en contacto contigo
        </h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellidos:</label>
            <input type="text" id="surname" name="surname" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
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
            <button className="custom-button" type="submit">
              Reservar cita
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AppointmentsPage;
