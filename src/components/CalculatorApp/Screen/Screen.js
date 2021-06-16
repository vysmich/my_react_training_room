import React from "react";
import "./Screen.scss";
import ResultScreen from "./ResultScreen/ResultScreen";
import ComputationScreen from "./ComputationScreen/ComputationScreen";

const Screen = () => {
  return (
    <section className="screen">
      <ResultScreen />
      <ComputationScreen />
    </section>
  );
};

export default Screen;
