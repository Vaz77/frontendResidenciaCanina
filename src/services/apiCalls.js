import axios from "axios";
import { useDispatch } from "react-redux";

// const API_URL = "http://localhost:3000";
const API_URL = "https://backend-residencia-canina.vercel.app";

export const registerUser = async (body) => {
  try {
    let res = await axios.post(`${API_URL}/auth/register`, body);
    console.log("Response from server:", body);
    return res.data.token;
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, formData);
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (body) => {
  let res = await axios.post(`${API_URL}/auth/logout`, body);
  const authToken = res.data.token;
  const dispatch = useDispatch();
  dispatch(setToken(authToken));
  return authToken;
};

export const createAppointment = async (token, appointmentData) => {
  console.log(appointmentData);
  try {
    const response = await axios.post(
      `${API_URL}/appointment`,
      appointmentData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear la cita:", error);
  }
};

export const fetchAllAppointments = async (token) => {
  try {
    const response = await axios.get(
      `${API_URL}/appointment/getAllAppointments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    throw error;
  }
};

export const fetchAllUsers = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user/getAllUsers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    throw error;
  }
};

export const fetchAllDogs = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/dog/getAllDogs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los perros:", error);
    throw error;
  }
};

export const fetchAllServices = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/service/getAllServices`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los servicios:", error);
    throw error;
  }
};

export const deleteAppointment = async (token, appointmentId) => {
  try {
    const response = await axios.delete(
      `${API_URL}/appointment/delete/${appointmentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw error;
  }
};

export const updateServices = async (serviceData, token) => {
  try {
    const response = await axios.put(
      `${API_URL}/service/update/${serviceData.id}`,
      serviceData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el servicio:", error);
    throw error;
  }
};

export const updateUser = async (userData, token) => {
  try {
    const response = await axios.put(
      `${API_URL}/user/profile/${userData.id}`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al modificar el usuario:", error);
    throw error;
  }
};

export const registerDog = async (token, dogData) => {
  try {
    const response = await axios.post(`${API_URL}/dog/register`, dogData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateDog = async (dogData, token) => {
  try {
    const response = await axios.put(
      `${API_URL}/dog/profile/${dogData.id}`,
      dogData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al modificar el perro:", error);
    throw error;
  }
};

export const fetchAppointmentsByDogId = async (dogId, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/appointment/appointment/dog/${dogId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    throw error;
  }
};

export const fetchAppointmentsByEmail = async (email, token) => {
  try {
    const response = await axios.get(
      `${API_URL}/appointment/getAppointmentsByEmail/${email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    throw error;
  }
};

export const fetchUserAppointments = async (token) => {
  try {
    const response = await axios.get(
      `${API_URL}/appointment/getUserAppointments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    throw error;
  }
};
