import React from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const chartSizeMultiplier = (size) => {
  return size * 96;
};

const fontSizeMultiplier = (size) => {
  return size * 24;
};

const Circle = ({ color, size, pct }) => {
  const r = size/2.45;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={size/2}
      cy={size/2}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage, size, unit }) => {
  const fontSize = fontSizeMultiplier(size);
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={fontSize} style={{color: '#2C2C2E', fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}
    >
      {percentage.toFixed(0)}{unit}
    </text>
  );
};

const Pie = ({ percentage, color, size, unit }) => {
  const pct = cleanPercentage(percentage);
  const unitText = unit = null ? "%" : unit;
  const chartSize = chartSizeMultiplier(size);
  return (
    <svg width={chartSize} height={chartSize}>
      <g transform={`rotate(-90 ${chartSize/2} ${chartSize/2})`}>
        <Circle color="lightgrey" size={chartSize} />
        <Circle color={color} size={chartSize} pct={pct} />
      </g>
      <Text percentage={pct} size={size} unit={unitText} />
    </svg>
  );
};

export default Pie;