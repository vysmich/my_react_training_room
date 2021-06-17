import React from "react";
import "./Screen.scss";
import ResultScreen from "./ResultScreen/ResultScreen";
import ComputationScreen from "./ComputationScreen/ComputationScreen";

const Screen = (props) => {
  return (
    <section className="screen">
      <ResultScreen>{props.result}</ResultScreen>
      <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
  );
};

export default Screen;
