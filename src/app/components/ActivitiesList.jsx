import React from "react";
import ActivityCard from "./ActivityCard";
import SimulacionImg from "../assets/simulacion.png";
import IdentikitImg from "../assets/identikit.png";
import QuizImg from "../assets/quiz.png";
import { useDisclosure } from "@nextui-org/react";
import ActivityModal from "./ActivityModal";
import { useState } from "react";
import SimulacionSvg from "../assets/SimulacionSvg";
import IdentikitSvg from "../assets/IdentikitSvg";
import QuizSvg from "../assets/QuizSvg";
function ActivitiesList({ router }) {
  const [activity, setActivity] = useState("");
  const navigateTo = () => router.push(`/activities/${activity}`);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleActivity = (activity) => {
    setActivity(activity);
    onOpen();
  };

  const content = [
    {
      activity: "quiz",
      title: "Estás a punto de iniciar el cuestionario",
      body: "A continuación, te haremos una serie de preguntas sobre el Grooming. ¿Estás listo para desafiar tus habilidades?",
    },
    {
      activity: "identikit",
      title: "Estás a punto de iniciar el Identikit",
      body: "A continuación, verás una serie de imágenes de perfiles de redes sociales. ¿Estás listo para desafiar tus habilidades y detectar cuál de ellos es sospechoso?",
    },
    {
      activity: "simulation",
      title: "Estás a punto de iniciar la simulación",
      body: "A definir",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
          cardImage={<SimulacionSvg />}
          cardButtonTitle={"Comenzar actividad"}
          onPress={() => handleActivity(content[2].activity)}
          isDisabled={true}
        />
        <ActivityCard
          cardTitle={"Identikit"}
          cardContent={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
          cardImage={<IdentikitSvg />}
          cardButtonTitle={"Comenzar actividad"}
          onPress={() => handleActivity(content[1].activity)}
        />
        <ActivityCard
          cardTitle={"Aprende con nosotros"}
          cardContent={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
          cardImage={<QuizSvg />}
          cardButtonTitle={"Comenzar actividad"}
          isExclusive={true}
          onPress={() => handleActivity(content[0].activity)}
        />
        <ActivityModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          navigateTo={navigateTo}
          content={content.find((x) => x.activity === activity)}
          variant="start"
        />
      </div>
    </div>
  );
}

export default ActivitiesList;
