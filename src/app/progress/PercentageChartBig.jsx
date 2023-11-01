"use client";
import React from "react";
import Pie from "../components/Pie";

export default function PercentageChartBig(props) {
    let chartColor = "#F9B460";
    if(props.value > 70) {
        chartColor = "#AFD778"
    } else if (props.value < 40){
        chartColor = "#F26065"
    };

  return (
    <div style={{flex: '0 1 0', padding: 24, background: 'white', borderRadius: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 264, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'flex'}}>
            <div style={{alignSelf: 'stretch', height: 48, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', color: '#2C2C2E', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>{props.title}</div>
            </div>
            <div style={{width: 192, height: 192, position: 'relative'}}>
                <Pie percentage={props.value} color={chartColor} size={2} unit="%" />
            </div>
        </div>
    </div>
  );
}
