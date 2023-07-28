import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchAllUsers } from "../../services/apiCalls";
import "./AllUsers.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const userToken = useSelector((state) => state.user.credentials.token);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

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
    </div>
  );
};

export default AllUsers;
