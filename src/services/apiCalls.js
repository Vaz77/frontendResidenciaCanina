import axios from "axios";
import { useDispatch } from "react-redux";

export const registerUser = async (body) => {
  try {
    let res = await axios.post("http://localhost:3000/auth/register", body);
    console.log("Response from server:", body);
    return res.data.token;
  } catch (error) {
    console.error("Error during registration:", error);
  }
};
export const loginUser = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login",
      formData
    );
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (body) => {
  let res = await axios.post("http://localhost:3000/auth/logout", body);
  const authToken = res.data.token;
  const dispatch = useDispatch();
  dispatch(setToken(authToken));
  return authToken;
};

export const createAppointment = async (token, appointmentData) => {
  console.log(appointmentData);
  try {
    const response = await axios.post(
      "http://localhost:3000/appointment",
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
      "http://localhost:3000/appointment/getAllAppointments",
      {
        headers: {
          Authorization: ``,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    throw error;
  }
};

export const fetchAllUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/user/getAllUsers", {
      headers: {
        Authorization: ``,
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
    const response = await axios.get("http://localhost:3000/dog/getAllDogs", {
      headers: {
        Authorization: ``,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los perros:", error);
    throw error;
  }
};

export const fetchAllServices = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/service/getAllServices",
      {
        headers: {
          Authorization: ``,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los servicios:", error);
    throw error;
  }
};

export const deleteAppointment = async (token, appointmentId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/appointment/delete/${appointmentId}`,
      {
        headers: {
          Authorization: ``,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw error;
  }
};

export const updateServices = async (serviceData) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/service/update/${serviceData.id}`,
      serviceData,
      {
        headers: {
          Authorization: ``,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al actualizar el servicio:", error);
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/user/profile/${userData.id}`,
      userData,
      {
        headers: {
          Authorization: "",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al modificar el usuario:", error);
    throw error;
  }
};

export const registerDog = async (dogData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/dog/register`,
      dogData
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateDog = async (dogData) => {
  try {
    const response = await axios.put(
      `http://localhost:3000/dog/profile/${dogData.id}`,
      dogData,
      {
        headers: {
          Authorization: "",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al modificar el perro:", error);
    throw error;
  }
};

export const fetchAppointmentsByDogId = async (dogId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/appointment/appointment/dog/${dogId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener las citas:", error);
    throw error;
  }
};
