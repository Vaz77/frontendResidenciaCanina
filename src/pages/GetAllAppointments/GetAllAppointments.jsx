import React, { useState, useEffect } from "react";
import { fetchAllAppointments, deleteAppointment } from "../../services/apiCalls";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import "./GetAllAppointments.css";

function GetAllAppointments() {
  const { credentials } = useSelector(userData);
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  // Definir la función getAllAppointments fuera del useEffect
  const getAllAppointments = async () => {
    try {
      const fetchedAppointments = await fetchAllAppointments(credentials.token);
      setAppointments(fetchedAppointments.data);
    } catch (error) {
      console.error("Error fetching all appointments:", error);
    }
  };

  useEffect(() => {
    // Llamar a getAllAppointments dentro del useEffect
    getAllAppointments();
  }, [credentials.token]);

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      // Llama a la función deleteAppointment de apiCalls
      await deleteAppointment(credentials.token, appointmentId);
      // Vuelve a cargar la lista de citas después de eliminar
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
          <button onClick={() => handleDeleteAppointment(selectedAppointmentId)}>Eliminar</button>
          <button onClick={handleCloseModal}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default GetAllAppointments;



// import React, { useState, useEffect } from "react";
// import { fetchAllAppointments } from "../../services/apiCalls";
// import { useSelector } from "react-redux";
// import { userData } from "../userSlice";
// import "./GetAllAppointments.css";
// import { deleteAppointment } from "../../services/apiCalls";

// function GetAllAppointments() {
//   const { credentials } = useSelector(userData);
//   const [appointments, setAppointments] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const fetchedAppointments = await fetchAllAppointments(
//           credentials.token
//         );
//         setAppointments(fetchedAppointments.data);
//       } catch (error) {
//         console.error("Error fetching all appointments:", error);
//       }
//     };
//     fetchAppointments(); // Cambia el nombre de la función aquí
//   }, [credentials.token]);

//   const handleDeleteAppointment = async (appointmentId) => {
//     try {
//       // Llama a la función deleteAppointment de apiCalls
//       await deleteAppointment(credentials.token, appointmentId);
//       // Vuelve a cargar la lista de citas después de eliminar
//       getAllAppointments(); // <- Cambiar fetchAppointments() por getAllAppointments()
//     } catch (error) {
//       console.error("Error deleting appointment:", error);
//     }
//   };
  

//   return (
//     <div className="get-all-appointments-container">
//       <div>
//         <h2 className="misCitas">Mis citas</h2>
//       </div>
//       {appointments.length ? (
//         <div className="appointmentsList">
//           {appointments.map((appointment) => {
//             return (
//               <div key={appointment.id} className="appointmentCard">
//                 <p>Hora: {appointment.time}</p>
//                 <p>Fecha: {appointment.date}</p>
//                 <p>Observaciones: {appointment.observations}</p>
//                 <p>Nombre del perro: {appointment.dog_name}</p>
//                 <p>Servicio: {appointment.service_id}</p>
//                 <p>Duracion: {appointment.duration}</p>
//                 <button onClick={() => handleDeleteAppointment(appointment.id)}>
//                   Eliminar Cita
//                 </button>
//                 <hr />
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <p className="loadingAppointments">No hay citas disponibles.</p>
//       )}
//     </div>
//   );
// }

// export default GetAllAppointments;
