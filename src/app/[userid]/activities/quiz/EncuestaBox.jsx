"use client";
import React, { useState, useEffect, useContext } from "react";
import AnswerRadioGroup from "./AnswerRadioGroup";
import { Button } from "@nextui-org/button";
import { FaAngleRight } from "react-icons/fa";
import { useDisclosure } from "@nextui-org/react";
import ActivityModal from "../ActivityModal";
import { UserContext } from "../../../contexts/UserContext";
import { Progress } from "@nextui-org/progress";

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
          score: 25,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 15,
        },
      ],
      category: "welfare",
    },
    {
      id: 2,
      question:
        "¿El menor a cargo ha tenido dificultades para caminar sin razón aparente?",
      answers: [
        {
          id: 1,
          title: "Si",
          score: 25,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 15,
        },
      ],
      category: "welfare",
    },
    {
      id: 3,
      question:
        "¿El menor a cargo ha mostrado fenómenos regresivos como la enuresis o encopresis después de haber logrado el control de esfínteres?",
      answers: [
        {
          id: 1,
          title: "Si",
          score: 25,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 15,
        },
      ],
      category: "welfare",
    },
    {
      id: 4,
      question:
        "¿El menor a cargo ha experimentado trastornos emocionales como sentimientos de tristeza, desesperanza, o relaciones hostiles y distantes?",
      answers: [
        {
          id: 1,
          title: "Si",
          score: 25,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 15,
        },
      ],
      category: "welfare",
    },
    {
      id: 5,
      question:
        "¿El menor a cargo tiende a quedarse en la escuela fuera del horario habitual?",
      answers: [
        {
          id: 1,
          title: "Si",
          score: 50,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 25,
        },
      ],
      category: "habits",
    },
    {
      id: 6,
      question:
        "¿El menor a cargo tiende a permanecer en espacios sociales y comunitarios una vez finalizadas las actividades?",
      answers: [
        {
          id: 1,
          title: "Si",
          score: 50,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 25,
        },
      ],
      category: "habits",
    },
    {
      id: 7,
      question:
        "¿Ha habido conflictos o desconfianza del menor a cargo hacia figuras de autoridad o personas adultas? ",
      answers: [
        {
          id: 1,
          title: "Si",
          score: 50,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 25,
        },
      ],
      category: "socialInteractions",
    },
    {
      id: 8,
      question: "¿El menor a cargo ha mostrado conductas autoagresivas?",
      answers: [
        {
          id: 1,
          title: "Si",
          score: 50,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 25,
        },
      ],
      category: "socialInteractions",
    },
    {
      id: 9,
      question:
        "¿El menor a cargo ha mostrado indicios de abandono del hogar, como ausencias prolongadas sin explicación o intentos de alejarse del hogar sin motivo aparente?",
      answers: [
        {
          id: 1,
          title: "Si",
          score: 50,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 25,
        },
      ],
      category: "behaviour",
    },
    {
      id: 10,
      question:
        "¿El menor a cargo ha mostrado conductas sexuales infrecuentes o precoces?",
      answers: [
        {
          id: 1,
          title: "Si",
          score: 50,
        },
        {
          id: 2,
          title: "No",
          score: 0,
        },
        {
          id: 3,
          title: "No estoy seguro",
          score: 25,
        },
      ],
      category: "behaviour",
    },
  ];

  const user = useContext(UserContext);
  const navigateTo = `/${user._id}/activities`;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [currentAnswer, setCurrentAnswer] = useState(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({
    userId: user._id,
    parentForm: [],
  });

  const handleAnswerSelection = (selectedAnswerId) => {
    console.log("Selected Answer ID: " + selectedAnswerId);
    setCurrentAnswer(selectedAnswerId);
  };

  const nextQuestion = () => {
    setCurrentAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleQuestion = () => {
    const currentQuestionData = {
      score:
        questions[currentQuestion].answers.find(
          (answer) => answer.id === currentAnswer
        )?.score || 0,
      category: questions[currentQuestion].category,
    };
    formData.parentForm.push(currentQuestionData);
    setFormData(formData);
    if (currentQuestion < questions.length - 1) {
      nextQuestion();
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    onOpen();
    sendDataToServer();
  };

  const sendDataToServer = () => {
   
    fetch("https://buddy-api-msil.onrender.com/parent_forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div className="flex flex-col gap-8 justify-between">
      <div className="w-full px-16">
        <Progress
          aria-label="currentProgress"
          size="lg"
          value={currentQuestion + 1}
          maxValue={questions.length}
          showValueLabel={true}
          valueLabel={`Pregunta ${currentQuestion + 1} de ${questions.length}`}
        />
      </div>
      <h2 className="my-4 text-2xl text-center font-light">
        {questions[currentQuestion].question}
      </h2>

      <div className="flex flex-col gap-8 mx-64 grow">
        <AnswerRadioGroup
          answers={questions[currentQuestion].answers}
          handler={handleAnswerSelection}
          current={currentAnswer}
        />
      </div>
      <div className="flex justify-end">
        {currentQuestion == questions.length - 1 && currentAnswer != null ? (
          <Button
            className="light"
            size="lg"
            color="primary"
            onClick={handleQuestion}
          >
            Terminar actividad
          </Button>
        ) : (
          <Button
            onClick={handleQuestion}
            className="light"
            size="lg"
            endContent={<FaAngleRight />}
          >
            Siguiente
          </Button>
        )}
        <ActivityModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          navigateTo={navigateTo}
          content={{
            title: "¡Felicidades, has finalizado la actividad!",
            body: "Has completado exitosamente el nivel. Espero que hayas comprendido la importancia de cuidarnos y considerar todos los aspectos cruciales al seguir a desconocidos en las redes sociales.",
          }}
        />
      </div>
    </div>
  );
}
