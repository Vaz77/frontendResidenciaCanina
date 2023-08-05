import React, { useEffect, useState } from "react";
import { fetchAllDogs, updateDog } from "../../services/apiCalls";
import "./AllDogs.css";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { Link } from "react-router-dom";

const AllDogs = () => {
  const { credentials } = useSelector(userData);
  const [dogs, setDogs] = useState([]);
  const [editingDog, setEditingDog] = useState(null);
  useEffect(() => {
    getAllDogs();
  }, [credentials.token]);
  const getAllDogs = async () => {
    try {
      const dogsData = await fetchAllDogs(credentials.token);
      setDogs(dogsData.data);
    } catch (error) {
      console.error("Error al obtener los servicios:", error);
    }
  };
  const handleEditDog = (dogId) => {
    const dogToEdit = dogs.find((dog) => dog.id === dogId);
    setEditingDog(dogToEdit);
  };
  const handleUpdateDog = async () => {
    try {
      if (editingDog && editingDog.id) {
        await updateDog(editingDog);
        setEditingDog(null);
        getAllDogs();
      } else {
        console.error("El perro que se está editando no tiene un ID válido.");
      }
    } catch (error) {
      console.error("Error al actualizar el perro:", error);
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
            {editingDog && editingDog.id === dog.id ? (
              <div>
                <input
                  type="text"
                  value={editingDog.name}
                  onChange={(e) =>
                    setEditingDog({
                      ...editingDog,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingDog.age}
                  onChange={(e) =>
                    setEditingDog({
                      ...editingDog,
                      age: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingDog.wheight}
                  onChange={(e) =>
                    setEditingDog({
                      ...editingDog,
                      wheight: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingDog.pathologies}
                  onChange={(e) =>
                    setEditingDog({
                      ...editingDog,
                      pathologies: e.target.value,
                    })
                  }
                />
                <button className="butonDogs2" onClick={handleUpdateDog}>
                  Guardar
                </button>
                <button
                  className="butonDogs2"
                  onClick={() => setEditingDog(null)}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div>
                <p>Nombre del perro: {dog.dog_name}</p>
                <p>Raza: {dog.breed}</p>
                <p>Edad: {dog.age}</p>
                <p>Peso: {dog.wheight}</p>
                <p>Patologías: {dog.pathologies}</p>
                <button
                  className="butonDogs"
                  onClick={() => handleEditDog(dog.id)}
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

export default AllDogs;
