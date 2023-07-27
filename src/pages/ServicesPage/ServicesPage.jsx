import React from "react";
import "./ServicesPage.css";
import icono1 from "../../assets/hotel.png";
import icono2 from "../../assets/dieta.png";
import icono3 from "../../assets/paseo.png";
import icono4 from "../../assets/adiestramiento.png";
import icono5 from "../../assets/transportin.png";
import icono6 from "../../assets/vet.png";

const ServicesPage = () => {
  const services = [
    {
      title: "Cuidado Diario",
      description:
        "Ofrecemos cuidado diario para tu perro mientras estás en el trabajo o fuera de casa. Nuestros cuidadores se asegurarán de que tu perro esté feliz y cómodo durante su estancia en nuestra guardería.",
      icon: icono1,
    },
    {
      title: "Alojamiento Nocturno",
      description:
        "¿Necesitas que tu perro se quede con nosotros durante la noche? Ofrecemos alojamiento nocturno en cómodas habitaciones individuales para que tu perro descanse y se sienta como en casa.",
      icon: icono2,
    },
    {
      title: "Paseos y Ejercicio",
      description:
        "Mantén a tu perro activo y en forma con nuestros paseos y sesiones de ejercicio diarias. Nuestros cuidadores se asegurarán de que tu perro reciba la cantidad adecuada de actividad física y diversión.",
      icon: icono3,
    },
    {
      title: "Baños y Cuidados",
      description:
        "Mantén a tu perro limpio y fresco con nuestros servicios de baño y cuidado. Utilizamos productos de alta calidad y técnicas de aseo suaves para asegurarnos de que tu perro se sienta relajado y mimado.",
      icon: icono4,
    },
    {
      title: "Baños y Cuidados",
      description:
        "Mantén a tu perro limpio y fresco con nuestros servicios de baño y cuidado. Utilizamos productos de alta calidad y técnicas de aseo suaves para asegurarnos de que tu perro se sienta relajado y mimado.",
      icon: icono5,
    },
    {
      title: "Baños y Cuidados",
      description:
        "Mantén a tu perro limpio y fresco con nuestros servicios de baño y cuidado. Utilizamos productos de alta calidad y técnicas de aseo suaves para asegurarnos de que tu perro se sienta relajado y mimado.",
      icon: icono6,
    },
  ];
  return (
    <div className="services-page">
      <h1>Nuestros Servicios</h1>
      <div className="service-section-container">
        {services.map((service, index) => (
          <div key={index} className={`service-section ${service.className}`}>
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <div className="service-details">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
