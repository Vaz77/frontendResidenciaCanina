import React from "react";
import Quizz from "../../common/Quizz/Quizz";
import { GiSittingDog, GiDogBowl } from "react-icons/gi";
import "./AlimentPage.css";

const AlimentPage = () => {
  return (
    <div className="alimentPage">
      <div className="aliment">
        <h1 className="title">
          <GiSittingDog className="icon" /> Plan de Alimentación para tu Mascota{" "}
          <GiDogBowl className="icon" />
        </h1>
        <p className="instructions">
          Rellena el siguiente cuestionario con los datos de tu mascota para
          poder asegurarle un buen plan de alimentación y un pienso de calidad.
        </p>
        <Quizz />
      </div>
    </div>
  );
};

export default AlimentPage;
