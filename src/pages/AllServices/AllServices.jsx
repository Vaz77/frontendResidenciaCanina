import React, { useEffect, useState } from "react";
import { fetchAllServices, updateServices } from "../../services/apiCalls";
import "./AllServices.css";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const { credentials } = useSelector(userData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeAPICall = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(fakeAPICall);
  }, []);

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

  return (
    <div className="services-container">
      <h1 className="services-title">Todos los servicios registrados</h1>
      {isLoading ? (
        <div className="loading-animation">
          <span>Cargando todos los servicios registrados...</span>
        </div>
      ) : (
        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {editingService && editingService.id === service.id ? (
                <div>
                  <label>Nombre del servicio:</label>
                  <input
                    type="text"
                    value={editingService.service_name}
                    onChange={(e) =>
                      setEditingService({
                        ...editingService,
                        service_name: e.target.value,
                      })
                    }
                  />
                  <label>Descripción:</label>
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
                  <label>Precio:</label>
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
                  <p>Nombre del servicio: {service.service_name}</p>
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
      )}
      <Link to="/" className="imageLink"></Link>
    </div>
  );
};

export default AllServices;
