import React, { useState } from "react";
import "./DogsPage.css";
import { registerDog } from "../../services/apiCalls";
import Footer from "../../common/Footer/Footer";

const DogsPage = () => {
  const [dogData, setDogData] = useState({
    name: "",
    breed: "",
    age: "",
    wheight: "",
    pathologies: "",
    userId: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerDog(dogData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dogs-page">
      <div className="dogs-container">
        <h1>Registro de Perros</h1>
        <form className="dog-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={dogData.name}
            placeholder="Nombre del perro"
            onChange={handleChange}
          />
          <input
            type="text"
            name="breed"
            value={dogData.breed}
            placeholder="Raza del perro"
            onChange={handleChange}
          />
          <input
            type="text"
            name="age"
            value={dogData.age}
            placeholder="Edad del perro"
            onChange={handleChange}
          />
          <input
            type="text"
            name="wheight"
            value={dogData.wheight}
            placeholder="Peso del perro"
            onChange={handleChange}
          />
          <input
            type="text"
            name="pathologies"
            value={dogData.pathologies}
            placeholder="Patologías del perro"
            onChange={handleChange}
          />
          <input
            type="text"
            name="userId"
            value={dogData.userId}
            placeholder="Numero de usuario"
            onChange={handleChange}
          />
          <button type="submit">Registrar Perro</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DogsPage;
