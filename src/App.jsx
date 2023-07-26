import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Quizz from "./common/Quizz/Quizz";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quizzPage" element={<Quizz />} />
      </Routes>
    </>
  );
}

export default App;
