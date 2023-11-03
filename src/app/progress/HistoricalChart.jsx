"use client";
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
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
    maintainAspectRatio:false,
    y:
      {
        min: 0,
        max: 100,
        stepSize: 10,
      }
  };
  
  const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  
  const data = (data) => {
    return {
        labels,
        datasets: [
          {
            data: data,
            borderColor: "rgb(60, 108, 141)",
            backgroundColor: "rgba(60, 108, 141, 0.5)",
            borderWidth: 8
          }
        ]
      };
  };
  
  export default function HistoryChart(props) {
    return (
        <div style={{flex: '1 1 0', padding: 24, background: 'white', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', height: 264, flexDirection: 'column', alignItems: 'center', display: 'flex'}}>
                <div style={{alignSelf: 'stretch', height: 48, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', color: '#2C2C2E', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>{props.title}</div>
                </div>
                <div style={{width: "100%", height: 192, position: 'relative'}}>
                    <Line options={options} data={data(props.data)} />
                </div>
            </div>
        </div>
    );
  }

