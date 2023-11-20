"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  y: {
    min: 0,
    max: 100,
    stepSize: 10,
  },
};

//const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

const data = (labels, data) => {
  return {
    labels,
    datasets: [
      {
        data: data,
        borderColor: "#0C969D",
        backgroundColor: "rgba(60, 108, 141, 0.5)",
        borderWidth: 8,
      },
    ],
  };
};

export default function HistoryChart(props) {
  return (
    <div className="bg-T500 rounded-xl p-4 flex flex-col gap-4 h-full">
      <div className="text-xl font-bold text-S300">{props.title}</div>
      <div className="bg-T100 rounded-lg grow">
        <Line options={options} data={data(props.labels, props.data)} />
      </div>
    </div>
  );
}
