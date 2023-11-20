"use client";
import React from "react";
import Pie from "../components/Pie";

export default function PercentageChartSmall(props) {
  let chartColor = "#F9B460";
  if (props.value > 70) {
    chartColor = "#AFD778";
  } else if (props.value < 40) {
    chartColor = "#F26065";
  }

  return (
    <div className="bg-T500 rounded-xl p-4 flex gap-4 items-center">
      <div className="flex flex-col gap-2">
        <div className="text-lg font-bold text-S300">{props.title}</div>
        <div>{props.description}</div>
      </div>
      <div style={{ width: 96, height: 96, position: "relative" }}>
        <Pie percentage={props.value} color={chartColor} size={1} unit="/100" />
      </div>
    </div>
  );
}
