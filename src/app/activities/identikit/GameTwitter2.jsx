import React, { useContext } from "react";
import NextImage from "next/image";
import OtakuImg from "../../assets/identikit/Twitter_Ariana.png";
import { identikitContext } from "./identikitContext";
import AnswerRadioGroup from "../quiz/AnswerRadioGroup";

const GameTwitter2 = (props) => {
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
      title: "Voy al perfil de la persona que menciona en su descripción.",
      isCorrect: false,
    },
    {
      id: 2,
      title: "Leo sus primeros 10 tweets.",
      isCorrect: false,
    },
    {
      id: 3,
      title: "Me fijo en su perfil de Instagram para estar seguro.",
      isCorrect: true,
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="mb-4 text-2xl text-center font-light">
          ¿Qué harías para estar seguro de que esta persona es de verdad un fan
          de la cantante Ariana Grande?
        </h2>

        <div className="hidden bg-P500 py-2 px-8 rounded-xl text-3xl font-light">
          {score + " de " + context.identikit[1].maxScore}
        </div>
        <div className="flex justify-center gap-4">
          <NextImage src={OtakuImg} alt="Comparison Image" />
        </div>
        <AnswerRadioGroup answers={answers} orientation="horizontal" handler={handleAnswer}/>
      </div>
    </div>
  );
};
export default GameTwitter2;
