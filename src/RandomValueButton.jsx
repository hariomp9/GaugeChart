import React from "react";
import { useDispatch } from "react-redux";
import { setChartValue } from "./redux/guageSlice";

const RandomValueButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    const randomValue = Math.floor(Math.random() * 101); // Generate random value between 0 and 100
    dispatch(setChartValue(randomValue)); // Dispatch action to update gauge
  };
  return <button onClick={handleClick}>Generate Random Value</button>;
};

export default RandomValueButton;
