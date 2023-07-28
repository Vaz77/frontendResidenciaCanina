import "./App.css";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import GetAllAppointments from "./pages/GetAllAppointments/GetAllAppointments";
import AllUsers from "./pages/AllUsers/AllUsers";
import AllDogs from "./pages/AllDogs/AllDogs";
import AllServices from "./pages/AllServices/AllServices";

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
      </Routes>
    </>
  );
}

export default App;
