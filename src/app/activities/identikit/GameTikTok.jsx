import React, { useContext, useState } from "react";
import PIC1 from "../../assets/identikit/TikTok_Madonna_Falso.png";
import PIC2 from "../../assets/identikit/TikTok_Madonna.png";
import Image from "./Image";
import { identikitContext } from "./identikitContext";

const GameTikTok = (props) => {
  const context = useContext(identikitContext);
  const { score, setScore } = props;
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const onDifferenceClick = (index) => {
    setActive(true);
    setActive2(false);
    setScore(context.identikit[1].maxScore);
  };
  const onDifferenceClick2 = (index) => {
    setActive2(!active2);
    setActive(false);
    setScore(context.identikit[1].maxScore / 2);
  };
  return (
    <div className="max-h-fit">
      <div className="flex flex-col justify-center items-center py-4">
        <h2 className="mb-4 text-2xl text-center font-light">
          Elije la foto de perfil de TikTok que te parezca sospechosa.
        </h2>

        <div className="bg-P500 py-2 px-8 rounded-xl text-3xl font-light">
          {score + " de " + context.identikit[1].maxScore}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <Image
          className={active ? "border-8 border-P300 rounded-3xl" : ""}
          src={PIC1}
          invisibleRectangles={[
            { x: 0, y: 0, width: PIC1.width, height: PIC1.height },
          ]}
          onDifferenceClick={onDifferenceClick}
        />
        <Image
          src={PIC2}
          className={active2 ? "border-8 border-warning rounded-3xl" : ""}
          invisibleRectangles={[
            { x: 0, y: 0, width: PIC2.width, height: PIC2.height },
          ]}
          // onDifferenceClick={onDifferenceClick2}
          onDifferenceClick={() => {}}
        />
      </div>
    </div>
  );
};

export default GameTikTok;
