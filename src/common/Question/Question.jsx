import React from "react";

const Question = ({ pregunta, opciones, onRespuestaSeleccionada }) => {
  const [fadeOut, setFadeOut] = React.useState(false);
  const handleRespuestaSeleccionada = (respuesta) => {
    onRespuestaSeleccionada(respuesta);
  };
  return (
    <div className={`PreguntaContainer ${fadeOut ? "fadeOut" : ""}`}>
      <h2>{pregunta}</h2>
      <ul>
        {opciones.map((opcion) => (
          <li
            key={opcion}
            className={`PreguntaOption ${fadeOut ? "fadeOut" : ""}`}
          >
            <label className="PreguntaOptionLabel">
              <input
                type="radio"
                className="PreguntaOptionInput"
                name="respuesta"
                value={opcion}
                onChange={() => handleRespuestaSeleccionada(opcion)}
              />
              {opcion}
              <span className="PreguntaOptionCheckmark"></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
