"use client";
import React from "react";
import Pie from "../components/Pie";

export default function PercentageChartSmall(props) {
    let chartColor = "#F9B460";
    if(props.value > 70) {
        chartColor = "#AFD778"
    } else if (props.value < 40){
        chartColor = "#F26065"
    };

  return (
    <div style={{flex: '1 1 0', height: 144, padding: 24, background: 'white', borderRadius: 16, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'flex'}}>
    <div style={{flex: '1 1 0', height: 96, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
          <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', color: '#2C2C2E', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>{props.title}</div>
              <div style={{alignSelf: 'stretch', color: '#404042', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>{props.description}</div>
          </div>
          <div style={{width: 96, height: 96, position: 'relative'}}>
            <Pie percentage={props.value} color={chartColor} size={1} unit="/100" />
          </div>
      </div>
      </div>  
  );
}
