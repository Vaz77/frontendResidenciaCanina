import React, { useState } from "react";
import "./Ubication.css";
import image1 from "../../assets/ubicacion.png";

const Ubication = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      comments: "",
    });
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <div className="ubicationPage">
      <div className="ubication">
        <h3>Contacta con nosotros!</h3>
        <div className="image-container">
          <div className="textUbication">
            {messageSent ? (
              <p>Mensaje enviado. ¡Gracias por contactarnos!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Introduce tu nombre"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="Teléfono"
                  onChange={handleChange}
                />
                <textarea
                  name="comments"
                  value={formData.comments}
                  placeholder="Cuentanos!"
                  onChange={handleChange}
                />
                <button className="botonUbication" type="submit">Enviar</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <img src={image1} alt="Imagen 1" className="imageUbi" />
    </div>
  );
};

export default Ubication;
