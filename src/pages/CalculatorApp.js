import React from "react";
import "./CalculatorApp.scss";
import Screen from "../components/CalculatorApp/Screen/Screen";
import KeyPad from "../components/CalculatorApp/KeyPad/KeyPad";

class CalculatorApp extends React.Component {
  state = {
    equation: "",
    result: 0,
  };

  render() {
    return (
      <main className="container">
        <h1>Calculator</h1>
        <div className="calculator">
          <Screen equation={this.state.equation} result={this.state.result} />
          <KeyPad />
        </div>
      </main>
    );
  }
}

export default CalculatorApp;
