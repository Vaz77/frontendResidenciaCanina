import React, { useState, useEffect } from "react";
import { fetchAllAppointments } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import "./GetAllAppointments.css";

function GetAllAppointments() {
  const { credentials } = useSelector(userData);
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getAllAppointments = async () => {
      try {
        const fetchedAppointments = await fetchAllAppointments(
          credentials.token
        );
        setAppointments(fetchedAppointments.data);
      } catch (error) {
        console.error("Error fetching all appointments:", error);
      }
    };
    getAllAppointments();
  }, [credentials.token]);

  return (
    <div className="get-all-appointments-container">
      <div>
        <h2 className="misCitas">Mis citas</h2>
      </div>
      {appointments.length ? (
        <div className="appointmentsList">
          {appointments.map((appointment) => {
            return (
              <div key={appointment.id} className="appointmentCard">
                <p>Hora: {appointment.time}</p>
                <p>Fecha: {appointment.date}</p>
                <p>Observaciones: {appointment.observations}</p>
                <p>Nombre del perro: {appointment.dog_name}</p>
                <p>Servicio: {appointment.service_id}</p>
                <p>Duracion: {appointment.duration}</p>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="loadingAppointments">No hay citas disponibles.</p>
      )}
    </div>
  );
}

export default GetAllAppointments;
