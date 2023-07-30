import React, { useEffect, useState } from "react";
import { fetchAllUsers, updateUser } from "../../services/apiCalls";
import "./AllUsers.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    try {
      const usersData = await fetchAllUsers();
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
  if (users.length === 0) {
    return <p>No hay perros registrados</p>;
  }
  return (
    <div className="users-container">
      <h1 className="users-title">Todos los users registrados</h1>
      <div className="users-list">
        {users.map((user) => (
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
                <button onClick={handleUpdateUser}>Guardar</button>
                <button onClick={() => setEditingUser(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                <p>Nombre: {user.name}</p>
                <p>Apellidos: {user.surname}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Dni: {user.dni}</p>
                <button onClick={() => handleEditUser(user.id)}>Editar</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
