import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile, updateUser } from "../../services/apiCalls";
import { userData, setUserProfile } from "../userSlice";
import "./UserProfile.css";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const [editedUser, setEditedUser] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { credentials, data } = useSelector(userData);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userProfileData = await fetchUserProfile(data.id);
        setEditedUser(userProfileData);
        setLoading(false);
        dispatch(setUserProfile(userProfileData));
      } catch (error) {
        setLoading(false);
        console.error("Error fetching user profile:", error);
      }
    };
    getUserProfile();
  }, []);

  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async () => {
    try {
      const updatedUserData = await updateUser(credentials.token, editedUser);
      dispatch(setUserProfile(updatedUserData));
      setEditedUser(updatedUserData);
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const userProfile = useSelector(userData);

  return (
    <div className="updateProfile">
      {!loading ? (
        <>
          <div className="updateProfileForm">
            <div className="modal-content">
              <h2>Modificar datos de usuario</h2>
              <div>
                <label>Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Apellidos</label>
                <input
                  type="text"
                  name="surname"
                  value={editedUser.surname || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Teléfono</label>
                <input
                  type="text"
                  name="phone"
                  value={editedUser.phone || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label>Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={editedUser.email || ""}
                  onChange={handleInputChange}
                />
              </div>
              <button onClick={handleUpdateProfile}>Guardar cambios</button>
            </div>
          </div>
          <Link to="/" className="imageLink"></Link>
        </>
      ) : (
        <p className="cargandoUsuario">Cargando datos del usuario...</p>
      )}
    </div>
  );
};

export default UserProfile;
