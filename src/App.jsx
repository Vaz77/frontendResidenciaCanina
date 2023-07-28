import "./App.css";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import GetAllAppointments from "./pages/GetAllAppointments/GetAllAppointments";
import AllUsers from "./pages/AllUsers/AllUsers";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getAllAppointments" element={<GetAllAppointments />} />
        <Route path="/allUsers" element={<AllUsers />} />
      </Routes>
    </>
  );
}

export default App;
