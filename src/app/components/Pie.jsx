import React from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={48}
      cy={48}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage, unit }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"} style={{color: '#2C2C2E', fontSize: 24, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}
    >
      {percentage.toFixed(0)}{unit}
    </text>
  );
};

const Pie = ({ percentage, color, unit }) => {
  const pct = cleanPercentage(percentage);
  const unitText = unit = null ? "%" : unit;
  return (
    <svg width={96} height={96}>
      <g transform={`rotate(-90 ${"48 48"})`}>
        <Circle colour="lightgrey" />
        <Circle colour={color} pct={pct} />
      </g>
      <Text percentage={pct} unit={unitText} />
    </svg>
  );
};

export default Pie;