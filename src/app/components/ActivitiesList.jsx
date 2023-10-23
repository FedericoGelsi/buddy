import React from "react";
import ActivityCard from "./ActivityCard";
import SimulacionImg from "../assets/simulacion.png";
import IdentikitImg from "../assets/identikit.png";
import QuizImg from "../assets/quiz.png";
import { useDisclosure } from "@nextui-org/react";
import ActivityModal from "./ActivityModal";
import { useState } from "react";

function ActivitiesList({ router }) {
  const [activity, setActivity] = useState(null);
  const navigateTo = () => router.push(`/activities/${activity}`);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleActivity = (activity) => {
    setActivity(activity);
    onOpen();
  };
  return (
    <div className="w-full">
      <h2 className="my-4 text-2xl">Actividades y guía de seguridad online</h2>
      <h2 className="my-4 text-md font-light">
        Elige una actividad y aprende sobre el Grooming mientras te diviertes.
      </h2>
      <div className="flex justify-center align-center gap-8 flex-wrap">
        <ActivityCard
          cardTitle={"Juego de simulacion"}
          cardContent={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
          cardImage={SimulacionImg}
          cardButtonTitle={"Comenzar actividad"}
          onPress={() => handleActivity("simulation")}
          isDisabled={true}
        />
        <ActivityCard
          cardTitle={"Identikit"}
          cardContent={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
          cardImage={IdentikitImg}
          cardButtonTitle={"Comenzar actividad"}
          onPress={() => handleActivity("identikit")}
          isDisabled={true}
        />
        <ActivityCard
          cardTitle={"Aprende con nosotros"}
          cardContent={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
          cardImage={QuizImg}
          cardButtonTitle={"Comenzar actividad"}
          isExclusive={true}
          onPress={() => handleActivity("quiz")}
        />
        <ActivityModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          navigateTo={navigateTo}
        />
      </div>
    </div>
  );
}

export default ActivitiesList;
