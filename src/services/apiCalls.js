import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../pages/userSlice";

export const registerUser = async (body) => {
  try {
    let res = await axios.post("http://localhost:3000/auth/register", body);
    console.log("Response from server:", body);
    return res.data.token;
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

export const loginUser = async (body) => {
  try {
    let res = await axios.post("http://localhost:3000/auth/login", body);
    return res.data.token;
  } catch (error) {
    throw new Error("Inicio de sesión fallido. Verifica tus credenciales.");
  }
};

export const logoutUser = async (body) => {
  let res = await axios.post("http://localhost:3000/auth/logout", body);
  const authToken = res.data.token;
  const dispatch = useDispatch(); // Agrega esta línea para obtener el dispatch
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
          Authorization: ``,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al crear la cita:", error);
  }
};
