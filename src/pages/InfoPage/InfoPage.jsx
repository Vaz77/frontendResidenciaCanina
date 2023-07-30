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
          <h2 className="textoCard">Nuestras Instalaciones</h2>
          <p>
            En nuestro Hotel canino, nos esforzamos por proporcionar un
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
          <h2 className="textoCard">Algunas de nuestras habitaciones de lujo</h2>
          <p>
          Descubre nuestras exclusivas habitaciones de lujo diseñadas especialmente para consentir a tu peludo de una manera única. Con comodidades de primer nivel, camas mullidas y espacios elegantes, tu amigo peludo se sentirá como la realeza. ¡Reserva ahora y déjalo disfrutar de una estancia inolvidable con todo el confort y estilo que se merece!
          </p>
        </div>
      </div>
      <div className="card-with-image">
        <div className="info-card2">
          <img src={card4} alt="Imagen 1" />
          <h2 className="textoCard">¡Piscina adaptada para ellos!</h2>
          <p>
          ¡Ven a disfrutar con tu peludo en nuestra increíble piscina diseñada especialmente para perros! 🐾 Sumérgete en la diversión acuática y disfruta de momentos únicos junto a tu fiel compañero. ¡No te pierdas esta refrescante experiencia y crea recuerdos inolvidables juntos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
