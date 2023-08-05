import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserAppointments } from "../../services/apiCalls";
import "./UserAppointment.css";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";

const UserAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [showNoAppointmentsMsg, setShowNoAppointmentsMsg] = useState(false);
  const { credentials } = useSelector(userData);
  console.log(appointments);
  useEffect(() => {
    fetchUserAppointments(credentials.token).then((appointments) => {
      setAppointments(appointments);
    });
  }, []);
  return (
    <div className="user-appointment-container">
      <h1>Mis citas</h1>
      {showNoAppointmentsMsg ? (
        <p className="no-appointments-msg">
          No hay citas registradas para este correo electrónico.
        </p>
      ) : (
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div className="appointment-item" key={appointment.createdAt}>
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
      )}
      <Link to="/" className="imageLink"></Link>
    </div>
  );
};

export default UserAppointment;
