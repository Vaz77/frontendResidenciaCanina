import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar/Navbar";
import Footer from "./common/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
