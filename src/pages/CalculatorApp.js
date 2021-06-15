import React from "react";
import "./CalculatorApp.scss";
import Screen from "../components/CalculatorApp/Screen";

const CalculatorApp = () => {
  return (
    <main className="container">
      <h1>Calulator</h1>
      <div className="calculator">
        <Screen></Screen>
      </div>
    </main>
  );
};

export default CalculatorApp;
