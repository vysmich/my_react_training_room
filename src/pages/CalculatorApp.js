import React from "react";
import "./CalculatorApp.scss";
import Screen from "../components/CalculatorApp/Screen/Screen";
import KeyPad from "../components/CalculatorApp/KeyPad/KeyPad";

const CalculatorApp = () => {
  return (
    <main className="container">
      <h1>Calulator</h1>
      <div className="calculator">
        <Screen></Screen>
        <KeyPad />
      </div>
    </main>
  );
};

export default CalculatorApp;
