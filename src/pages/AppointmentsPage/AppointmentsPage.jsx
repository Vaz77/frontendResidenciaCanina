import React, { useState } from "react";
import "./AppointmentsPage.css";
import icon1 from "../../assets/flechaHaciaAbajo.png";
import { createAppointment } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentsPage = () => {
  const [time, setTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [observations, setObservations] = useState("");
  const [dog_name, setDog_name] = useState("");
  const [service_name, setService_name] = useState("");
  const [duration, setDuration] = useState("");
  const { credentials } = useSelector(userData);
  const [suggestedServices, setSuggestedServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "time":
        setTime(value);
        break;
      case "date":
        setSelectedDate(value);
        break;
      case "observations":
        setObservations(value);
        break;
      case "dog_name":
        setDog_name(value);
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
        date: selectedDate,
        time,
        observations,
        dog_name,
        duration,
        service_name,
      };
      const response = await createAppointment(
        credentials.token,
        appointmentData
      );
      setDuration("");
      setTime("");
      setSelectedDate(null);
      setObservations("");
      setDog_name("");
      setService_name("");
      setSuccessMessage(
        "¡Reserva realizada con éxito! Te acabamos de enviar un email de confimación"
      );
      setErrorMessage("");
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
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              required
              className="custom-select"
              placeholderText="Seleccione una fecha"
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
            <select
              id="service_name"
              name="service_name"
              required
              value={service_name}
              onChange={handleInputChange}
              className="custom-select"
            >
              <option value="">Seleccione un servicio</option>
              {availableServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
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
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default AppointmentsPage;
