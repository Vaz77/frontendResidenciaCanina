import "./App.css";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import GetAllAppointments from "./pages/GetAllAppointments/GetAllAppointments";
import AllUsers from "./pages/AllUsers/AllUsers";
import AllDogs from "./pages/AllDogs/AllDogs";
import AllServices from "./pages/AllServices/AllServices";
import DogsPage from "./pages/DogsPage/DogsPage";
import UserAppointment from "./pages/UserAppointment/UserAppointment";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getAllAppointments" element={<GetAllAppointments />} />
        <Route path="/allUsers" element={<AllUsers />} />
        <Route path="/allDogs" element={<AllDogs />} />
        <Route path="/allServices" element={<AllServices />} />
        <Route path="/dogsPage" element={<DogsPage />} />
        <Route path="/userAppointment" element={<UserAppointment />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
