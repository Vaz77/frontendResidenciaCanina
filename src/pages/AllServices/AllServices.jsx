import React, { useEffect, useState } from "react";
import { fetchAllServices, updateServices } from "../../services/apiCalls";
import "./AllServices.css";
import Footer from "../../common/Footer/Footer";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const { credentials } = useSelector(userData);

  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    try {
      const servicesData = await fetchAllServices(credentials.token);
      setServices(servicesData.data);
    } catch (error) {
      console.error("Error al obtener los servicios:", error);
    }
  };

  const handleEditService = (serviceId) => {
    const serviceToEdit = services.find((service) => service.id === serviceId);
    setEditingService(serviceToEdit);
  };

  const handleUpdateService = async () => {
    try {
      if (editingService && editingService.id) {
        await updateServices(editingService);
        setEditingService(null);
        getAllServices();
      } else {
        console.error(
          "El servicio que se está editando no tiene un ID válido."
        );
      }
    } catch (error) {
      console.error("Error al actualizar el servicio:", error);
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
            {editingService && editingService.id === service.id ? (
              <div>
                <input
                  type="text"
                  value={editingService.name}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingService.description}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      description: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingService.price}
                  onChange={(e) =>
                    setEditingService({
                      ...editingService,
                      price: e.target.value,
                    })
                  }
                />
                <button
                  className="botonServices2"
                  onClick={handleUpdateService}
                >
                  Guardar
                </button>
                <button
                  className="botonServices2"
                  onClick={() => setEditingService(null)}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div>
                <p>Nombre del servicio: {service.name}</p>
                <p>Descripción: {service.description}</p>
                <p>Precio: {service.price}</p>
                <button
                  className="botonServices"
                  onClick={() => handleEditService(service.id)}
                >
                  Editar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <Link to="/" className="imageLink"></Link>
    </div>
  );
};

export default AllServices;
