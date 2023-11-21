import React, { useContext, useEffect, useState } from "react";
import ImageComparison from "./ImageComparison";
import { RectangleBox, CircleBox } from "../../../assets/identikit/SvgBoxes";
import AdviceBox from "../AdviceBox";
import { identikitContext } from "./identikitContext";

const GameInstagram = (props) => {
  const { score, setScore } = props;
  const [activeExplanation, setActiveExplanation] = useState();
  const context = useContext(identikitContext);

  useEffect(() => {
    if (activeExplanation) setScore(score + 1);
  }, [activeExplanation]);

  const explanations = [
    {
      title: "Foto de perfil",
      body: "Ten precaución si el perfil de alguien en Instagram tiene una imagen de un personaje de anime en lugar de una foto real, ya que podría ser sospechoso.",
      invisibleRectangle: { x: 95, y: 38, width: 110, height: 106 },
      markImage: <CircleBox width={110} height={106} />,
    },
    {
      title: "Descripción del perfil",
      body: "Ten en cuenta que perfiles con descripciones extrañas o inapropiadas en Instagram pueden ser señal de que no son de confianza. Si algo te parece extraño, ¡mejor mantente alejado!",
      invisibleRectangle: { x: 217, y: 122, width: 132, height: 22 },
      markImage: <RectangleBox width={132} height={22} />,
    },
    {
      title: "Cantidad de publicaciones",
      body: "Si ves que alguien en las redes sociales casi no comparte cosas, eso podría ser una señal de que ese perfil no es de confianza.",
      invisibleRectangle: { x: 220, y: 72, width: 37, height: 36 },
      markImage: <CircleBox width={37} height={36} />,
    },
    {
      title: "Seguidos vs seguidores",
      body: "Si notas que una cuenta en redes sociales tiene muchos seguidores pero muy pocos que le siguen de vuelta, ten cuidado. Podría ser señal de que la cuenta no es de confianza y deberías proteger tu privacidad en línea.",
      invisibleRectangle: { x: 290, y: 75, width: 174, height: 27 },
      markImage: <RectangleBox width={174} height={27} />,
    },
    {
      title: "Símbolo de verificado",
      body: "Un consejo muy importante en redes sociales como Instagram, Facebook o TikTok es buscar un símbolo de verificación al lado del nombre de usuario. Eso te ayuda a saber si la cuenta es real y segura",
      invisibleRectangle: { x: 300, y: 38, width: 37, height: 36 },
      markImage: <CircleBox width={37} height={36} />,
    },
    // Add more explanations as needed
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center py-4">
        <h2 className="mb-4 text-2xl text-center font-light">
          Tu objetivo es identificar los cinco indicadores que hagan que el
          perfil de la imagen de la derecha parezca sospechoso.
        </h2>

        <div className="bg-P500 py-2 px-8 rounded-xl text-3xl font-light">
          {score + " de " + context.identikit[0].maxScore}
        </div>
      </div>

      <ImageComparison
        explanations={explanations}
        activeExplanation={activeExplanation}
        setActiveExplanation={setActiveExplanation}
      />
      <div className="">
        {activeExplanation && (
          <AdviceBox
            className="bg-success mx-16 my-4"
            data={activeExplanation}
          />
        )}
      </div>
    </div>
  );
};

export default GameInstagram;
