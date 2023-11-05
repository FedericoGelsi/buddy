// ImageComparison.js
"use client";
import React, { useEffect, useState } from "react";
import Image from "./Image";
import PIC1 from "../../assets/identikit/Instagram_Messi_OK.png";
import PIC2 from "../../assets/identikit/Instagram_Messi.png";

function ImageComparison(props) {
  const { activeExplanation, setActiveExplanation, explanations } = props;
  const [imgStack, setImgStack] = useState([]);

  const drawBox = (data, index) => {
    let elem = document.getElementById("correct-img");
    const width = elem.width;
    const height = elem.height;
    return (
      <div
        key={index}
        className="absolute z-40"
        style={{
          left:
            elem.offsetLeft + data.invisibleRectangle.x * (width / PIC2.width),
          top:
            elem.offsetTop + data.invisibleRectangle.y * (height / PIC2.height),
        }}
      >
        {data.markImage}
      </div>
    );
  };

  const handleDifferenceClick = (index) => {
    // Display the explanation for the clicked invisible rectangle
    setActiveExplanation(explanations[index]);
    if (
      imgStack.length == 0 ||
      !imgStack.find((x) => x.title === explanations[index].title)
    )
      imgStack.push(explanations[index]);
    setImgStack(imgStack);
  };

  return (
    <div>
      <div className="flex justify-evenly gap-8">
        <Image
          src={PIC1}
          invisibleRectangles={{}}
          onDifferenceClick={handleDifferenceClick}
        />
        <Image
          id="correct-img"
          src={PIC2}
          invisibleRectangles={explanations.map(
            (exp) => exp.invisibleRectangle
          )}
          onDifferenceClick={handleDifferenceClick}
        >
          {activeExplanation && imgStack.map((elem, index) => drawBox(elem, index))}
        </Image>
      </div>
    </div>
  );
}

export default ImageComparison;
