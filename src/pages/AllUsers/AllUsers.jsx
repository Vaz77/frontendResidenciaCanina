import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAllUsers, updateUser } from "../../services/apiCalls";
import "./AllUsers.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const userToken = useSelector((state) => state.user.credentials.token);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await fetchAllUsers(userToken);
      setUsers(response.data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  if (users.length === 0) {
    return <p>No hay usuarios registrados</p>;
  }

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser.id) {
        await updateUser(editingUser);
      } else {
      }
      setEditingUser(null);
      getAllUsers();
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="all-users-container">
      <h1 className="textUsers">Todos los usuarios registrados</h1>
      <div className="profileUsers">
        {currentUsers.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-photo"></div>
            <p>Nombre: {user.name}</p>
            <p>Apellido: {user.surname}</p>
            <p>Email: {user.email}</p>
            <p>Dni: {user.dni}</p>
            <p>Phone: {user.phone}</p>
            <button onClick={() => handleEditUser(user)}>Editar</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
      {editingUser && (
        <form className="edit-form" onSubmit={handleSubmit}>
          <h2>Editar Usuario</h2>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={editingUser.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              name="surname"
              value={editingUser.surname}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={editingUser.email}
              onChange={handleChange}
            />
          </label>
          <label>
            DNI:
            <input
              type="text"
              name="dni"
              value={editingUser.dni}
              onChange={handleChange}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="text"
              name="phone"
              value={editingUser.phone}
              onChange={handleChange}
            />
          </label>
          <button type="submit">
            {editingUser.id ? "Guardar Cambios" : "Crear Usuario"}
          </button>
          <button type="button" onClick={handleCancelEdit}>
            Limpiar
          </button>
        </form>
      )}
    </div>
  );
};

export default AllUsers;
