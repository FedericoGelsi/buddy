// Image.js
"use client";
import React from "react";
import NextImage from "next/image";

function Image(props) {
  const { src, invisibleRectangles, onDifferenceClick, ...otherProps } = props;
  const handleImageClick = (event) => {
    const clickX = event.nativeEvent.offsetX;
    const clickY = event.nativeEvent.offsetY;

    // Check if the click is within any of the invisible rectangles
    for (let i = 0; i < invisibleRectangles.length; i++) {
      const rect = invisibleRectangles[i];
      if (
        clickX >= rect.x &&
        clickX <= rect.x + rect.width &&
        clickY >= rect.y &&
        clickY <= rect.y + rect.height
      ) {
        // Handle the click on this invisible rectangle
        onDifferenceClick(i);
        return; // Stop checking for other rectangles
      }
    }
  };

  return (
    <div>
      <NextImage
        {...otherProps}
        src={src}
        alt="Comparison Image"
        onClick={handleImageClick}
      />
    </div>
  );
}

export default Image;
