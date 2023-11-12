"use client";
import React, { useContext, useState } from "react";
import ActivityWrapper from "../ActivityWrapper";
import { Button } from "@nextui-org/button";
import { FaAngleRight } from "react-icons/fa";
import { submitForm } from "../../../api/identikit";
import { identikitContext } from "./identikitContext";
import GameInstagram from "./GameInstagram";
import GameTikTok from "./GameTikTok";
import GameTikTok2 from "./GameTikTok2";
import GameTwitter2 from "./GameTwitter2";
import GameTwitter from "./GameTwitter";
import { useDisclosure } from "@nextui-org/react";
import ActivityModal from "../ActivityModal";
import { UserContext } from "../../../contexts/UserContext";
import { Progress } from "@nextui-org/progress";

function IdentikitHome() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const user = useContext(UserContext);
  const navigateTo = `/${user._id}/activities`;

  const [score, setScore] = useState(0);
  const context = useContext(identikitContext);
  const [currentGame, setCurrentGame] = useState(1);
  const handleNext = () => {
    saveState();
    setCurrentGame(currentGame + 1);
    setScore(0);
  };

  const saveState = () => {
    context.identikit[currentGame - 1].score = score;
    console.log(context);
  };

  const handleSubmit = () => {
    saveState();
    onOpen();
    submitForm(context).then((res) => console.log(res));
  };

  return (
    <ActivityWrapper>
      <div className="w-full px-16 mb-4">
        <Progress
          aria-label="currentProgress"
          size="lg"
          value={currentGame}
          maxValue={5}
          showValueLabel={true}
          valueLabel={`Identikit ${currentGame} de ${5}`}
        />
      </div>
      {currentGame == 1 && <GameInstagram score={score} setScore={setScore} />}
      {currentGame == 2 && <GameTikTok score={score} setScore={setScore} />}
      {currentGame == 3 && <GameTwitter score={score} setScore={setScore} />}
      {currentGame == 4 && <GameTikTok2 score={score} setScore={setScore} />}
      {currentGame == 5 && <GameTwitter2 score={score} setScore={setScore} />}

      <div className="my-4 flex justify-end">
        {currentGame < 5 && (
          <Button
            className="light"
            size="lg"
            endContent={<FaAngleRight />}
            onClick={handleNext}
          >
            Siguiente
          </Button>
        )}
        {currentGame == 5 && (
          <Button
            className="light"
            size="lg"
            color="primary"
            onClick={handleSubmit}
          >
            Terminar actividad
          </Button>
        )}
      </div>
      <ActivityModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        navigateTo={navigateTo}
        content={{
          title: "¡Felicidades, has finalizado la actividad!",
          body: "Has completado exitosamente el nivel. Espero que hayas comprendido la importancia de cuidarnos y considerar todos los aspectos cruciales al seguir a desconocidos en las redes sociales.",
        }}
      />
    </ActivityWrapper>
  );
}

export default IdentikitHome;
