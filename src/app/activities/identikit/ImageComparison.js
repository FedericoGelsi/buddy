// ImageComparison.js
"use client";
import React, { useState } from "react";
import Image from "./Image";
import PIC1 from "../../assets/identikit/Instagram_Adele_F.png";
import PIC2 from "../../assets/identikit/Instagram_Adele_T.png";
import AdviceBox from "../../components/AdviceBox";
import { RectangleBox, CircleBox } from "../../assets/identikit/SvgBoxes";

function ImageComparison() {
  const [activeExplanation, setActiveExplanation] = useState();

  const explanations = [
    {
      title: "¡Correcto!",
      body: "Un consejo crucial a recordar, especialmente en las redes sociales como Instagram, Facebook o TikTok, es verificar si el perfil tiene el símbolo de verificación junto al nombre de usuario.",
      invisibleRectangle: { x: 304, y: 50, width: 37, height: 36 },
      markImage: <CircleBox width={37} height={36} />,
    },
    {
      title: "¡Correcto!",
      body: "Los desajustes entre los seguidores y los seguidores suelen ser comunes entre las cuentas de influencers y de personajes famosos, pero a pequeña escala es un claro indicio de que detrás de la cuenta se puede esconder un bot u otra persona.",
      invisibleRectangle: { x: 329, y: 90, width: 193, height: 27 },
      markImage: <RectangleBox width={193} height={27} />,
    },
    // Add more explanations as needed
  ];

  const drawBox = (data) => {
    let elem = document.getElementById("correct-img");
    let rect = elem.getBoundingClientRect();
    return (
      <div
        className="absolute z-40"
        style={{
          left: rect.left + data.invisibleRectangle.x,
          top: rect.top + data.invisibleRectangle.y,
        }}
      >
        {data.markImage}
      </div>
    );
  };

  const handleDifferenceClick = (index) => {
    // Display the explanation for the clicked invisible rectangle
    setActiveExplanation(explanations[index]);
  };

  return (
    <div>
      <div className="flex justify-evenly flex-wrap gap-8">
        <Image
          src={PIC1}
          invisibleRectangles={{}}
          onDifferenceClick={handleDifferenceClick}
        />
        <Image
          id="correct-img"
          src={PIC2}
          invisibleRectangles={explanations.map(
            (exp) => exp.invisibleRectangle
          )}
          onDifferenceClick={handleDifferenceClick}
        />
      </div>
      {activeExplanation && drawBox(activeExplanation)}
      {activeExplanation && (
        <AdviceBox
          className="absolute bg-success bottom-24 right-36 max-w-2xl"
          data={activeExplanation}
        />
      )}
    </div>
  );
}

export default ImageComparison;
