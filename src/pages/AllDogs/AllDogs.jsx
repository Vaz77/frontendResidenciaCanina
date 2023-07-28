import React, { useEffect, useState } from "react";
import "./AllDogs.css";
import { fetchAllDogs } from "../../services/apiCalls";

const AllDogs = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getAllDogs();
  }, []);

  const getAllDogs = async () => {
    try {
      const token = "...";
      const dogsData = await fetchAllDogs(token);
      setDogs(dogsData.data);
    } catch (error) {
      console.error("Error al obtener los perros:", error);
    }
  };

  if (dogs.length === 0) {
    return <p>No hay perros registrados</p>;
  }

  return (
    <div className="dogs-container">
      <h1 className="dogs-title">Todos los perros registrados</h1>
      <div className="dogs-list">
        {dogs.map((dog) => (
          <div key={dog.id} className="dog-card">
            <div className="dog-photo"></div>
            <p>Nombre: {dog.name}</p>
            <p>Raza: {dog.breed}</p>
            <p>Edad: {dog.age}</p>
            <p>Peso: {dog.wheight}</p>
            <p>Patologias: {dog.pathologies}</p>
            <p>User id: {dog.user_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDogs;
