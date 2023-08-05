import React, { useState, useEffect } from "react";
import "./GetAllAppointments.css";
import {
  fetchAllAppointments,
  deleteAppointment,
} from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import "./GetAllAppointments.css";
import { Link } from "react-router-dom";

function GetAllAppointments() {
  const { credentials } = useSelector(userData);
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);
  const getAllAppointments = async () => {
    try {
      const fetchedAppointments = await fetchAllAppointments(credentials.token);
      setAppointments(fetchedAppointments.data);
    } catch (error) {
      console.error("Error fetching all appointments:", error);
    }
  };
  useEffect(() => {
    getAllAppointments();
  }, [credentials.token]);
  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await deleteAppointment(credentials.token, appointmentId);
      getAllAppointments();
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };
  const handleOpenModal = (appointmentId) => {
    setShowModal(true);
    setSelectedAppointmentId(appointmentId);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAppointmentId(null);
  };
  return (
    <div className="get-all-appointments-container">
      <div>
        <h2 className="misCitas">Todas las citas</h2>
      </div>
      {appointments.length ? (
        <div className="appointmentsList">
          {appointments.map((appointment) => {
            return (
              <div key={appointment.id} className="appointmentCard">
                <p>Hora de entrada: {appointment.time}</p>
                <p>Fecha de entrada: {appointment.date}</p>
                <p>Nombre del perro: {appointment.dog_name}</p>
                <p>Servicio: {appointment.service_name}</p>
                <p>Fecha de salida: {appointment.date_exit}</p>
                <p>Hora de salida: {appointment.duration}</p>
                <p>Observaciones: {appointment.observations}</p>
                <button onClick={() => handleOpenModal(appointment.id)}>
                  Eliminar Cita
                </button>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="loadingAppointments">No hay citas disponibles.</p>
      )}
      {showModal && (
        <div className="modal">
          <h3>¿Eliminar esta cita?</h3>
          <button
            onClick={() => handleDeleteAppointment(selectedAppointmentId)}
          >
            Eliminar
          </button>
          <button onClick={handleCloseModal}>Cancelar</button>
        </div>
      )}
      <Link to="/" className="imageLink"></Link>
    </div>
  );
}

export default GetAllAppointments;
