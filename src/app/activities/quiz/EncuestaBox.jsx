'use client';
import React, { useState } from "react";
import AnswerCheckboxGroup from "./AnswerCheckbox";
import AnswerRadioGroup from "./AnswerRadioGroup";
import { Button } from "@nextui-org/button";
export default function EncuestaBox(props) {
  const router = useRouter();
  const navigateTo = () => router.push(`/activities`);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
      question:
        "¿El menor a cargo ha mostrado conductas autoagresivas?",
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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const nextQuestion = () => {
    if(currentQuestion < questions.length){
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div
      className="p-8 min-h-[85%] rounded-3xl flex flex-col justify-center"
      style={{ backgroundColor: "#3C6C8D2F" }}
    >
      <h2 className="my-4 text-2xl text-center font-light" style={{ color: 'white' }}>
        {questions[currentQuestion].question}
      </h2>

      <div className="flex flex-col gap-8 mx-64 grow">
        <AnswerRadioGroup answers={questions[currentQuestion].answers} />
      </div>
      <Button onClick={nextQuestion} variant="light" style={{ marginLeft: "auto", backgroundColor: "rgb(255, 255, 255)" }} size="lg">
          Siguiente
      </Button>
    </div>
  );
  //<AnswerRadioGroup answers={questions[0].answers} />
}
