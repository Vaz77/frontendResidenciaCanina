import React, { useEffect, useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Cuando el componente se monte, muestra la imagen después de un breve retraso
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 100);
    // Limpia el timeout cuando el componente se desmonte para evitar errores
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`generalHome ${showImage ? "show-image" : ""}`}>
      <h1 className="textoBienvenida">
        ¡Bienvenid@ a tu Guarderia Canina cerca de la ciudad!
      </h1>
    </div>
  );
};

export default HomePage;
