import React from "react";
import "./InfoPage.css";
import card1 from "../../assets/instalacionesPerros2.jpg";
import card2 from "../../assets/instalacionesPerros13.jpg";
import card3 from "../../assets/instalacionesPerros2.png";
import card4 from "../../assets/perroPiscina7.jpg";

const InfoPage = () => {
  return (
    <div className="infoPage">
      <div className="card-with-image">
        <div className="info-card">
          <img src={card1} alt="Imagen 1" />
          <h2 className="textoCard">Nuestras Instalaciones e Intenciones</h2>
          <p>
            En nuestra guardería canina, nos esforzamos por proporcionar un
            entorno seguro y cómodo para tus perros. Nuestras amplias
            instalaciones están diseñadas para que los perros puedan disfrutar
            de tiempo al aire libre y socializar con otros peludos amigos.
          </p>
        </div>
      </div>
      <div className="card-with-image">
        <div className="info-card2">
          <img src={card2} alt="Imagen 1" />
          <h2 className="textoCard">Cuidado Individualizado</h2>
          <p>
            Nuestro equipo de cuidadores altamente capacitados se asegura de que
            cada perro reciba atención individualizada y cariño en un entorno
            amigable. Nuestra intención es garantizar que tus mascotas se
            sientan felices y cómodas durante su estancia con nosotros.
          </p>
        </div>
      </div>
      <div className="card-with-image">
        <div className="info-card">
          <img src={card3} alt="Imagen 1" />
          <h2 className="textoCard">Descubre Nuestras Instalaciones</h2>
          <p>
            Ven a visitarnos y descubre nuestras increíbles instalaciones y
            nuestro compromiso con el bienestar de tus perros. ¡Esperamos
            recibir a tu mascota en nuestra guardería canina!
          </p>
        </div>
      </div>
      <div className="card-with-image">
        <div className="info-card2">
          <img src={card4} alt="Imagen 1" />
          <h2 className="textoCard">Cuidado Individualizado</h2>
          <p>
            Nuestro equipo de cuidadores altamente capacitados se asegura de que
            cada perro reciba atención individualizada y cariño en un entorno
            amigable. Nuestra intención es garantizar que tus mascotas se
            sientan felices y cómodas durante su estancia con nosotros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
