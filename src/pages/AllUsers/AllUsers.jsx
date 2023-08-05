import React, { useEffect, useState } from "react";
import { fetchAllUsers, updateUser } from "../../services/apiCalls";
import "./AllUsers.css";
import Footer from "../../common/Footer/Footer";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const { credentials } = useSelector(userData);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const usersData = await fetchAllUsers(credentials.token);
      setUsers(usersData.data);
    } catch (error) {
      console.error("Error al obtener los Users:", error);
    }
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    setEditingUser(userToEdit);
  };

  const handleUpdateUser = async () => {
    try {
      if (editingUser && editingUser.id) {
        await updateUser(editingUser);
        setEditingUser(null);
        getAllUsers();
      } else {
        console.error("El usuario que se está editando no tiene un ID válido.");
      }
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (users.length === 0) {
    return <p>No hay usuarios que mostrar</p>;
  }
  return (
    <div className="users-container">
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <h1 className="users-title">Todos los users registrados</h1>
      <div className="users-list">
        {currentUsers.map((user) => (
          <div key={user.id} className="user-card">
            {editingUser && editingUser.id === user.id ? (
              <div>
                <input
                  type="text"
                  value={editingUser.name}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingUser.surname}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      surname: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      email: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingUser.phone}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      phone: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editingUser.dni}
                  onChange={(e) =>
                    setEditingUser({
                      ...editingUser,
                      dni: e.target.value,
                    })
                  }
                />
                <button className="botonUser2" onClick={handleUpdateUser}>
                  Guardar
                </button>
                <button
                  className="botonUser2"
                  onClick={() => setEditingUser(null)}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div>
                <p>Nombre: {user.name}</p>
                <p>Apellidos: {user.surname}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Dni: {user.dni}</p>
                <button
                  className="botonUser"
                  onClick={() => handleEditUser(user.id)}
                >
                  Editar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Link to="/" className="imageLink"></Link>
    </div>
  );
};

export default AllUsers;
