import React, { useState } from "react";
import "./AppointmentsPage.css";
import icon1 from "../../assets/flechaHaciaAbajo.png";
import { createAppointment } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

const AppointmentsPage = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [observations, setObservations] = useState("");
  const [dog_name, setDog_name] = useState("");
  const [dog_id, setDog_id] = useState("");
  const [service_id, setService_id] = useState("");
  const [service_name, setService_name] = useState("");
  const [duration, setDuration] = useState("");
  const { credentials } = useSelector(userData);
  const [serviceInputValue, setServiceInputValue] = useState("");
  const [suggestedServices, setSuggestedServices] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "time":
        setTime(value);
        break;
      case "date":
        setDate(value);
        break;
      case "observations":
        setObservations(value);
        break;
      case "dog_id":
        setDog_id(value);
        break;
      case "dog_name":
        setDog_name(value);
        break;
      case "service_id":
        setService_id(value);
        break;
      case "service_name":
        setService_name(value);
        break;
      case "duration":
        setDuration(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const appointmentData = {
        date,
        time,
        observations,
        dog_id,
        dog_name,
        duration,
        service_id,
        service_name,
      };
      const response = await createAppointment(
        credentials.token,
        appointmentData
      );
      setDuration("");
      setTime("");
      setDate("");
      setObservations("");
      setDog_id("");
      setDog_name("");
      setService_id("");
      setService_name("");
    } catch (error) {
      console.error("Error al crear la cita:", error);
    }
  };
  const availableServices = [
    "Residencia",
    "Guardería",
    "Transporte",
    "Entrenamientos/paseos",
    "Veterinario",
    "Baños e higiene",
  ];
  const handleServiceInputChange = (event) => {
    const inputValue = event.target.value;
    setServiceInputValue(inputValue);
    const filteredServices = availableServices.filter((service) =>
      service.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestedServices(filteredServices);
  };

  const handleServiceOptionClick = (service) => {
    setServiceInputValue(service);
    setSuggestedServices([]);
  };

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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Fecha de la cita:</label>
            <input
              type="text"
              id="date"
              name="date"
              required
              value={date}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Hora de la cita:</label>
            <input
              type="text"
              id="time"
              name="time"
              required
              value={time}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dog_name">Nombre del perro:</label>
            <input
              type="text"
              id="dog_name"
              name="dog_name"
              required
              value={dog_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="service_name">Nombre del servicio:</label>
            <input
              type="text"
              id="service_name"
              name="service_name"
              required
              value={serviceInputValue}
              onChange={handleServiceInputChange}
            />
            {suggestedServices.length > 0 && (
              <ul className="suggested-services-list">
                {suggestedServices.map((service) => (
                  <ul
                    key={service}
                    className="suggested-service-item"
                    onClick={() => handleServiceOptionClick(service)}
                  >
                    {service}
                  </ul>
                ))}
              </ul>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duración:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              required
              value={duration}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dog_id">ID del perro:</label>
            <input
              type="number"
              id="dog_id"
              name="dog_id"
              required
              value={dog_id}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="observations">Observaciones:</label>
            <textarea
              id="observations"
              name="observations"
              rows="4"
              value={observations}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button className="custom-button" type="submit">
            Reservar cita
          </button>
        </form>
      </section>
    </div>
  );
};

export default AppointmentsPage;
