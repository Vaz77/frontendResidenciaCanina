import React, { useState } from "react";
import Pregunta from "../Question/Question";
import "./Quizz.css";

const Quizz = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [slideOut, setSlideOut] = useState(false);
  const preguntas = [
    {
      pregunta: "¿De que raza es tu peludin?",
      opciones: ["Rojo", "Azul", "Verde", "Amarillo"],
    },
    {
      pregunta: "¿Cuanto pesa tu peludo?",
      opciones: [
        "Entre 10-15kg",
        "Entre 15-25kg",
        "Entre 25-40kg",
        "Mas de 40kg",
      ],
    },
  ];
  const handleRespuestaSeleccionada = (respuesta) => {
    setRespuestas([...respuestas, respuesta]);
    setSlideOut(true);
    setTimeout(() => {
      setSlideOut(false);
      setPreguntaActual(preguntaActual + 1);
    }, 300);
  };
  return (
    <div className="QuizzContainer">
      <div className={`QuizzContent ${slideOut ? "slideOutRight" : ""}`}>
        {preguntaActual < preguntas.length ? (
          <Pregunta
            pregunta={preguntas[preguntaActual].pregunta}
            opciones={preguntas[preguntaActual].opciones}
            onRespuestaSeleccionada={handleRespuestaSeleccionada}
          />
        ) : (
          <div className="QuizzCompleted">
            <h2>¡Gracias por completar la Encuesta!</h2>
            <h3>Respuestas:</h3>
            <ul>
              {respuestas.map((respuesta, index) => (
                <li key={index}>{respuesta}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizz;
