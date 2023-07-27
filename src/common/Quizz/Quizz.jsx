import React, { useState } from "react";
import Pregunta from "../Question/Question";
import "./Quizz.css";

const Quizz = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [slideOut, setSlideOut] = useState(false);
  const preguntas = [
    {
      pregunta: "¿Que tamaño tiene?",
      opciones: ["Pequeño", "Mediano", "Grande"],
    },
    {
      pregunta: "¿Cuanto pesa?",
      opciones: [
        "Entre 5 y 10kg",
        "Entre 10 y 20kg",
        "Entre 20 y 35kg",
        "Mas de 40kg",
      ],
    },
    {
      pregunta: "¿Cual es su actividad diaria?",
      opciones: [
        "1 hora al día",
        "2 horas al día",
        "3 horas al día",
        "Mas de 3 horas al día",
      ],
    },
    {
      pregunta: "¿Cuantas veces suele comer al día?",
      opciones: ["1", "2", "3", "4"],
    },
    {
      pregunta: "¿Que edad tiene?",
      opciones: [
        "Menos de 1 año",
        "Entre 1 y 3 años",
        "Entre 3 y 6 años",
        "Entre 6 y 10 años",
        "Más de 10 años",
      ],
    },
    {
      pregunta: "¿A que hora prefieres que te llame tu nutricionista?",
      opciones: [
        "Entre las 9:00 - 09:30",
        "Entre las 10:00 - 10:30",
        "Entre las 11:15 - 11:45",
        "Entre las 11:45 - 12:15",
        "Entre las 16:00 - 16:30",
        "Entre las 16:30 - 17:00",
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
  const reiniciarCuestionario = () => {
    setPreguntaActual(0);
    setRespuestas([]);
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
            <h2>¡Gracias! En breve recibirá un email de confirmación</h2>
            <h3>Respuestas:</h3>
            <ul>
              {respuestas.map((respuesta, index) => (
                <li key={index}>{respuesta}</li>
              ))}
            </ul>
            <button onClick={reiniciarCuestionario}>
              Volver a realizar el cuestionario
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizz;
