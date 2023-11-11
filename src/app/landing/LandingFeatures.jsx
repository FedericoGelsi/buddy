import React from "react";
import LandingFeatureCard from "./LandingFeatureCard";
const LandingFeatures = () => {
  const cards = [
    {
      title: "¿Qué es el grooming?",
      body: "Descubre qué significa y cómo afecta a nuestros hijos.",
      icon: "FaUnlock",
    },
    {
      title: "Señales de alerta",
      body: "Aprende a identificar comportamientos sospechosos en línea.",
      icon: "FaSearch",
    },
    {
      title: "Conversaciones abiertas",
      body: "La comunicación abierta es clave. Averigua cómo hablar con tus hijos.",
      icon: "FaRegComments",
    },
    {
      title: "Configuración de privacidad",
      body: "Conoce cómo ajustar la configuración de privacidad en redes sociales.",
      icon: "FaLock",
    },
    {
      title: "Informando situaciones",
      body: "Descubre cómo abordar y denunciar situaciones de grooming.",
      icon: "FaInfo",
    },
    {
      title: "Nuestro pack de juegos",
      body: "Explora nuestros juegos educativos para una comprensión más profunda.",
      icon: "FaPuzzlePiece",
    },
  ];
  return (
    <div id="grooming" className="container flex flex-col justify-center items-center gap-8 my-32">
      <div className="flex flex-col items-center">
        <h4 className="uppercase text-[#628A2C] text-xl">
          Entendiendo el Grooming
        </h4>
        <h1 className="font-bold text-black text-[2.5rem] ">
          Identificando el peligro en línea
        </h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {cards.map((card) => (
          <LandingFeatureCard
            title={card.title}
            body={card.body}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingFeatures;
