"use client";
import React from "react";
import Pie from "../components/Pie";

export default function PercentageChartBig(props) {
  let chartColor = "#F9B460";
  if (props.value > 70) {
    chartColor = "#AFD778";
  } else if (props.value < 40) {
    chartColor = "#F26065";
  }

  return (
    <div className="bg-T500 rounded-2xl p-8 flex sm:flex-row lg:flex-col items-center justify-center gap-8">
      <div className="text-lg text-center">{props.title}</div>
      <Pie percentage={props.value} color={chartColor} size={2} unit="%" />
    </div>
  );
}
