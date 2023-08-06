import React, { useState } from "react";
import "./DogsPage.css";
import { registerDog } from "../../services/apiCalls";
import { Link } from "react-router-dom";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";

const DogsPage = () => {
  const { credentials } = useSelector(userData);
  const [dogData, setDogData] = useState({
    dog_name: "",
    breed: "",
    age: "",
    wheight: "",
    pathologies: "",
    userId: "",
    userDni: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDogData({ ...dogData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerDog(credentials.token, dogData);
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
            name="dog_name"
            value={dogData.dog_name}
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
            name="userDni"
            value={dogData.userDni}
            placeholder="DNI del cliente"
            onChange={handleChange}
          />
          <button type="submit">Registrar Perro</button>
        </form>
      </div>
      <Link to="/" className="imageLink"></Link>
    </div>
  );
};

export default DogsPage;
