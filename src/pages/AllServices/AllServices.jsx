import React, { useEffect, useState } from "react";
import "./AllServices.css";
import { fetchAllServices } from "../../services/apiCalls";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    try {
      const servicesData = await fetchAllServices();
      setServices(servicesData.data);
    } catch (error) {
      console.error("Error al obtener los servicios:", error);
    }
  };

  if (services.length === 0) {
    return <p>No hay servicios registrados</p>;
  }

  return (
    <div className="services-container">
      <h1 className="services-title">Todos los servicios registrados</h1>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <p>Nombre del servicio: {service.name}</p>
            <p>Descripción: {service.description}</p>
            <p>Precio: {service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
