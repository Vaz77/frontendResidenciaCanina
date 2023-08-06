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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeAPICall = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(fakeAPICall);
  }, []);

  useEffect(() => {
    getAllDogs();
  }, [credentials.token]);
  const getAllDogs = async () => {
    try {
      const dogsData = await fetchAllDogs(credentials.token);
      setDogs(dogsData.data);
    } catch (error) {
      console.error("Error al obtener los perros:", error);
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
  return (
    <div className="dogs-container">
      <h1 className="dogs-title">Todos los perros registrados</h1>
      {isLoading ? (
        <div className="loading-animation">
          <span>Cargando todos los perros registrados...</span>
        </div>
      ) : (
        <div className="dogs-list">
          {dogs.map((dog) => (
            <div key={dog.id} className="dog-card">
              {editingDog && editingDog.id === dog.id ? (
                <div>
                  <label>Nombre del perro:</label>
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
                  <label>Raza:</label>
                  <input
                    type="text"
                    value={editingDog.breed}
                    onChange={(e) =>
                      setEditingDog({
                        ...editingDog,
                        breed: e.target.value,
                      })
                    }
                  />
                  <label>Edad:</label>
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
                  <label>Peso:</label>
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
                  <label>Patologías:</label>
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
                  <p>Dni del usuario: {dog.user_dni}</p>
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
      )}
      <Link to="/" className="imageLink"></Link>
    </div>
  );
};

export default AllDogs;
