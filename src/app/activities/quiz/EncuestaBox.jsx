"use client";

import React from "react";
import AnswerRadioGroup from "./AnswerRadioGroup";
import ActivityModal from "../../components/ActivityModal";
import AdviceBox from "./AdviceBox";

import { useDisclosure } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

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
        {/* <AnswerCheckboxGroup answers={questions[0].answers} /> */}
        <AnswerRadioGroup answers={questions[0].answers} />
      </div>
      <Button className="light" onPress={onOpen}>
        Finalizar actividad
      </Button>
      <ActivityModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        navigateTo={navigateTo}
        content={{
          title: "¡Felicidades, has finalizado la actividad!",
          body: "Has completado exitosamente el nivel. Te hemos preparado un informe crucial sobre el menor para que lo descargues, además, será revisado por uno de nuestros especialistas, quien se pondrá en contacto contigo.",
        }}
      />
      <AdviceBox data={{ title: "Advice title", body: "lorem ipsum" }} />
    </div>
  );
}
