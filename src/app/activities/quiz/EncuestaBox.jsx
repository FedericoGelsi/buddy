import React from "react";
import AnswerCheckboxGroup from "./AnswerCheckbox";
import AnswerRadioGroup from "./AnswerRadioGroup";
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
  ];
  return (
    <div
      className="p-8 min-h-[85%] rounded-3xl flex flex-col justify-center"
      style={{ backgroundColor: "#3C6C8D2F" }}
    >
      <h2 className="my-4 text-2xl text-center font-light">
        {questions[0].question}
      </h2>

      <div className="flex flex-col gap-8 mx-64 grow">
        <AnswerCheckboxGroup answers={questions[0].answers} />
        <AnswerRadioGroup answers={questions[0].answers} />
      </div>
    </div>
  );
}
