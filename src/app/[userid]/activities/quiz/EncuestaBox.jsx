"use client";
import React, { useState } from "react";
import AnswerRadioGroup from "./AnswerRadioGroup";
import { Button } from "@nextui-org/button";
import { FaAngleRight } from "react-icons/fa";

export default function EncuestaBox(props) {
  const questions = [
    {
      id: 1,
      question:
        "¿El menor a cargo ha experimentado dolores abdominales recurrentes y dolores de cabeza sin causa orgánica?",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "¿El menor a cargo ha tenido dificultades para caminar sin razón aparente?",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      question:
        "¿El menor a cargo ha mostrado fenómenos regresivos como la enuresis o encopresis después de haber logrado el control de esfínteres?",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      question:
        "¿El menor a cargo ha experimentado trastornos emocionales como sentimientos de tristeza, desesperanza, o relaciones hostiles y distantes?",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "¿El menor a cargo tiende a quedarse en la escuela fuera del horario habitual?",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "¿El menor a cargo tiende a permanecer en espacios sociales y comunitarios una vez finalizadas las actividades?",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
    {
      id: 7,
      question:
        "¿Ha habido conflictos o desconfianza del menor a cargo hacia figuras de autoridad o personas adultas? ",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
    {
      id: 8,
      question: "¿El menor a cargo ha mostrado conductas autoagresivas?",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
    {
      id: 9,
      question:
        "¿El menor a cargo ha mostrado indicios de abandono del hogar, como ausencias prolongadas sin explicación o intentos de alejarse del hogar sin motivo aparente?",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
    {
      id: 10,
      question:
        "¿El menor a cargo ha mostrado conductas sexuales infrecuentes o precoces?",
      answers: [
        {
          id: 1,
          title: "Si",
          isCorrect: false,
        },
        {
          id: 2,
          title: "No",
          isCorrect: true,
        },
        {
          id: 3,
          title: "No estoy seguro",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentAnswer(null);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <h2 className="my-4 text-2xl text-center font-light">
        {questions[currentQuestion].question}
      </h2>

      <div className="flex flex-col gap-8 mx-64 grow">
        <AnswerRadioGroup
          answers={questions[currentQuestion].answers}
          handler={setCurrentAnswer}
          current={currentAnswer}
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={nextQuestion}
          className="light"
          size="lg"
          endContent={<FaAngleRight />}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
