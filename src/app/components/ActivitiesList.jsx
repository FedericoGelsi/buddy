import React from "react";
import ActivityCard from "./ActivityCard";
import SimulacionImg from "../assets/simulacion.png";
import IdentikitImg from "../assets/identikit.png";
import QuizImg from "../assets/quiz.png";

function ActivitiesList({ router }) {
  const navigateQuiz = () => router.push("/activities/quiz");
  const navigateSimulation = () => router.push("/activities/simulation");
  const navigateIdentikit = () => router.push("/activities/identikit");

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
          onPress={navigateSimulation}
          isDisabled={true}
        />
        <ActivityCard
          cardTitle={"Identikit"}
          cardContent={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          }
          cardImage={IdentikitImg}
          cardButtonTitle={"Comenzar actividad"}
          onPress={navigateIdentikit}
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
          onPress={navigateQuiz}
        />
      </div>
    </div>
  );
}

export default ActivitiesList;
