import React from "react";
import "./ServicesPage.css";
import icono1 from "../../assets/hotel.png";
import icono2 from "../../assets/dieta.png";
import icono3 from "../../assets/paseo.png";
import icono4 from "../../assets/adiestramiento.png";
import icono5 from "../../assets/transportin.png";
import icono6 from "../../assets/vet.png";
import perroLavandose from "../../assets/perroLavandose.png";

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
      title: "Transporte",
      description:
        "En Guardería Canina, nos preocupamos por el bienestar de tu perro, por eso ofrecemos un transporte adaptado y seguro, garantizando comodidad durante sus traslados.",
      icon: icono5,
    },
    {
      title: "Veterinario 24h",
      description:
        "Contamos con un equipo de veterinarios disponibles las 24 horas que colaboran con nosotros, brindando atención médica integral y urgente para asegurar la salud y cuidado de tu mascota en todo momento.",
      icon: icono6,
    },
  ];
  const handleScrollToAppointments = () => {
    const appointmentsPageSection = document.getElementById("appointmentsPage");
    if (appointmentsPageSection) {
      appointmentsPageSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <div className="services-page">
      <h1>Nuestros Servicios</h1>
      <div className="service-section-container">
        {services.map((service, index) => (
          <div
            key={index}
            id={`service-${index + 1}`}
            className={`service-section ${service.className}`}
          >
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
              to=""
            />
            <div className="service-details">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button onClick={handleScrollToAppointments}>Reserva aquí</button>
            </div>
          </div>
        ))}
      </div>
      <div className="perroLavandose">
        <img src={perroLavandose} alt="Perro" className="perroLavandose" />
      </div>
    </div>
  );
};

export default ServicesPage;
