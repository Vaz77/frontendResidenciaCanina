import React, { useState } from "react";
import { fetchAppointmentsByEmail } from "../../services/apiCalls";
import "./UserAppointment.css";
import Footer from "../../common/Footer/Footer";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

const UserAppointment = () => {
  const [email, setEmail] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [showNoAppointmentsMsg, setShowNoAppointmentsMsg] = useState(false);
  const data = useSelector(userData);
  console.log(data)
  const handleSearch = async () => {
    try {
      console.log("Correo electrónico del usuario:", email);
      const appointments = await fetchAppointmentsByEmail(
        email,
        credentials.token
      );
      if (appointments && Array.isArray(appointments)) {
        setAppointments(appointments);
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
      <h1>Buscar mis citas</h1>
      <div className="search-container">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        <button onClick={handleSearch}>Buscar Citas</button>
      </div>
      {showNoAppointmentsMsg ? (
        <p className="no-appointments-msg">
          No hay citas registradas para este correo electrónico.
        </p>
      ) : (
        <div className="appointments-list">
          {appointments.length > 0 && <h2></h2>}
          {appointments.length > 0 ? (
            <div className="card-container">
              {Array.from({ length: Math.ceil(appointments.length / 3) }).map(
                (_, index) => (
                  <div className="card-row" key={index}>
                    {appointments
                      .slice(index * 3, index * 3 + 3)
                      .map((appointment) => (
                        <div className="appointment-item" key={appointment.id}>
                          <div className="appointment-info">
                            <p>Perro: {appointment.dog_name}</p>
                            <p>Fecha: {appointment.date}</p>
                            <p>Hora de llegada: {appointment.time}</p>
                            <p>Servicio: {appointment.service_name}</p>
                            <p>Fecha de salida: {appointment.date_exit}</p>
                            <p>Hora de salida: {appointment.duration}</p>
                            <p>Observaciones: {appointment.observations}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                )
              )}
            </div>
          ) : null}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default UserAppointment;
