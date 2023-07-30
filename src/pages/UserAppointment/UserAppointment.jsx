import React, { useState } from "react";
import { fetchAppointmentsByDogId } from "../../services/apiCalls";
import "./UserAppointment.css";
import Footer from "../../common/Footer/Footer";

const UserAppointment = () => {
  const [dogId, setDogId] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [showNoAppointmentsMsg, setShowNoAppointmentsMsg] = useState(false);

  const handleSearch = async () => {
    try {
      console.log("ID del perro:", dogId);
      const response = await fetchAppointmentsByDogId(dogId);
      if (response.data && Array.isArray(response.data)) {
        setAppointments(response.data);
        setShowNoAppointmentsMsg(false);
      } else {
        setAppointments([]);
        setShowNoAppointmentsMsg(true);
      }
    } catch (error) {
      console.error("Error al obtener las citas:", error);
    }
  };

  return (
    <div className="user-appointment-container">
      <h1>Buscar Citas por ID de Perro</h1>
      <div className="search-container">
        <input
          type="text"
          value={dogId}
          onChange={(e) => setDogId(e.target.value)}
          placeholder="Introduce el ID del perro"
        />
        <button onClick={handleSearch}>Buscar Citas</button>
      </div>
      {showNoAppointmentsMsg ? (
        <p className="no-appointments-msg">
          No hay citas registradas para este perro
        </p>
      ) : (
        <div className="appointments-list">
          {appointments.length > 0 && <h2>Citas reservadas:</h2>}
          {appointments.length > 0 ? (
            <ul>
              {appointments.map((appointmentDog) => (
                <li key={appointmentDog.id} className="appointment-item">
                  <div className="appointment-info">
                    <p>Fecha: {appointmentDog.date}</p>
                    <p>Hora: {appointmentDog.time}</p>
                    <p>Observaciones: {appointmentDog.observations}</p>
                    <p>Duración: {appointmentDog.duration}</p>
                    <p>Servicio: {appointmentDog.service_id}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default UserAppointment;
