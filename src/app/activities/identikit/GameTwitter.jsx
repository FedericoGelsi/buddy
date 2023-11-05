import React, { useContext } from "react";
import NextImage from "next/image";
import OtakuImg from "../../assets/identikit/Twitter_Otaku 1.png";
import { identikitContext } from "./identikitContext";
import AnswerRadioGroup from "../quiz/AnswerRadioGroup";

const GameTwitter = (props) => {
  const context = useContext(identikitContext);
  const { score, setScore } = props;

  const handleAnswer = (index) => {
    const answer = answers.at(index - 1);
    if (answer.isCorrect) setScore(context.identikit[2].maxScore);
    else setScore(0);
  };
  const answers = [
    {
      id: 1,
      title: "Porque no usa una foto de perfil que muestre su rostro.",
      isCorrect: true,
    },
    {
      id: 2,
      title: "Porque hace menciones de personajes de anime.",
      isCorrect: false,
    },
    {
      id: 3,
      title: "Porque tiene muchos “Me gusta”.",
      isCorrect: false,
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="mb-4 text-2xl text-center font-light">
          Observa el perfil de Twitter que se muestra y señala por qué crees que
          es sospechoso.
        </h2>

        <div className="hidden bg-P500 py-2 px-8 rounded-xl text-3xl font-light">
          {score + " de " + context.identikit[2].maxScore}
        </div>
        <div className="flex justify-center gap-4">
          <NextImage src={OtakuImg} alt="Comparison Image" />
        </div>
        <AnswerRadioGroup
          answers={answers}
          orientation="horizontal"
          handler={handleAnswer}
        />
      </div>
    </div>
  );
};

export default GameTwitter;
