"use client";
import React from "react";
import ActivityCard from "./ActivityCard";
import { useDisclosure } from "@nextui-org/react";
import ActivityModal from "./ActivityModal";
import { useState } from "react";
import SimulacionSvg from "../../assets/SimulacionSvg";
import IdentikitSvg from "../../assets/IdentikitSvg";
import QuizSvg from "../../assets/QuizSvg";
import { usePathname } from "next/navigation";
import VideoModal from "./VideoModal";

function ActivitiesList() {
  const [activity, setActivity] = useState("");
  const pathname = usePathname();
  const navigateTo = `${pathname}/${activity}`;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleActivity = (activity) => {
    setActivity(activity);
    onOpen();
  };

  const content = [
    {
      activity: "quiz",
      title: "Estás a punto de iniciar el cuestionario",
      body: "A continuación, verás una serie de preguntas que ayudarán a entender cómo el menor actúa en diversas situaciones. Como responsable, podrás evaluar su comportamiento en este formulario.",
    },
    {
      activity: "identikit",
      title: "Estás a punto de iniciar el Identikit",
      body: "A continuación, verás una serie de imágenes de perfiles de redes sociales. ¿Estás listo para desafiar tus habilidades y detectar cuál de ellos es sospechoso?",
    },
    {
      activity: "simulation",
      title: "Estás a punto de iniciar la simulación",
      body: "Prepárate para sumergirte en la experiencia y conversar con diversos personajes. ¿Estás listo?",
    },
  ];
  return (
    <div className="w-full">
      <h2 className="my-4 text-2xl"> Actividades y guía de seguridad online</h2>
      <h2 className="my-4 text-md font-light">
        Elige una actividad y aprende sobre el Grooming mientras te diviertes.
      </h2>
      <div className="flex justify-center align-center gap-8 flex-wrap">
        <ActivityCard
          cardTitle={"Juego de simulacion"}
          cardContent={
            "Tendrás la oportunidad de explorar un mundo abierto y entablar conversaciones con diversos personajes."
          }
          cardImage={<SimulacionSvg />}
          cardButtonTitle={"Comenzar actividad"}
          onPress={() => handleActivity(content[2].activity)}
        />
        <ActivityCard
          cardTitle={"Identikit"}
          cardContent={
            "Te desafiaremos a poner a prueba tus habilidades para identificar perfiles sospechosos. Completa el formulario y demuestra tu conocimiento."
          }
          cardImage={<IdentikitSvg />}
          cardButtonTitle={"Comenzar actividad"}
          onPress={() => handleActivity(content[1].activity)}
        />
        <ActivityCard
          cardTitle={"Aprende con nosotros"}
          cardContent={
            "Observa cómo tu menor actúa en diversas situaciones. Como responsable, podrás evaluar su comportamiento en este formulario."
          }
          cardImage={<QuizSvg />}
          cardButtonTitle={"Comenzar actividad"}
          isExclusive={true}
          onPress={() => handleActivity(content[0].activity)}
        />
        {activity === "simulation" ? (
          <VideoModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            content={content.find((x) => x.activity === activity)}
          />
        ) : (
          <ActivityModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            navigateTo={navigateTo}
            content={content.find((x) => x.activity === activity)}
            variant="start"
          />
        )}
      </div>
    </div>
  );
}

export default ActivitiesList;
