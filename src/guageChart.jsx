import React, { useState } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import { setChartValue } from "./redux/guageSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomGaugeChart = ({ value }) => {
  const data = [
    {
      name: "Filled",
      value: value,
      fill: "url(#purpleGradient)", // Reference the purple gradient fill
    },
  ];
  // Calculate the end angle based on value
  const calculatedEndAngle = 180 - (value / 100) * 180;
  return (
    <div
      style={{
        padding: "20px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart
          cx="50%"
          cy="100%"
          innerRadius="70%"
          outerRadius="100%"
          startAngle={180}
          endAngle={calculatedEndAngle}
          data={data}
        >
          {/* Define a linear gradient here */}
          <defs>
            <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a183d9" />
              <stop offset="50%" stopColor="#6939A5" />{" "}
              {/* Main color #6939A5 */}
              <stop offset="100%" stopColor="#4b2e7d" />{" "}
              {/* Darker Shade of #6939A5 */}
            </linearGradient>
          </defs>
          <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            cornerRadius={0} // Makes the ends rounded
          />
        </RadialBarChart>
      </ResponsiveContainer>
      {/* Display the range labels below the gauge */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "240px",
            display: "flex",
            justifyContent: "space-between",
            color: "#FFC107",
            marginTop: "5px",
          }}
        >
          <span>0%</span>
          <span>{value}%</span>
          <span>100%</span>
        </div>
      </div>
      <h3 style={{ textAlign: "center", color: "white" }}>Profit Margin</h3>
    </div>
  );
};
const Apps = () => {
  const dispatch = useDispatch();
  const chartValue = useSelector((state) => state.gauge.chartValue);
  const [lastNumber, setLastNumber] = useState(null);
  const handleClick = () => {
    const numbers = [25, 50, 75, 100];
    const availableNumbers = lastNumber
      ? numbers.filter((num) => num !== lastNumber)
      : numbers;
    const randomNumber =
      availableNumbers[Math.floor(Math.random() * availableNumbers.length)];

    dispatch(setChartValue(randomNumber));
    setLastNumber(randomNumber);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <CustomGaugeChart value={chartValue} />
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            cursor: "pointer",
            border: "1px solid #fff",
            borderRadius: "5px",
            color: "#fff",
            backgroundColor: "#000",
            padding: "10px",
          }}
          onClick={handleClick}
        >
          Generate Random Number
        </button>
      </div>
    </div>
  );
};

export default Apps;
