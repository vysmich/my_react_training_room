import React from "react";
import "./CalculatorApp.scss";
import Screen from "../components/CalculatorApp/Screen/Screen";
import KeyPad from "../components/CalculatorApp/KeyPad/KeyPad";

class CalculatorApp extends React.Component {
  state = {
    equation: "",
    result: 0,
  };

  onButtonPress = (event) => {
    let equation = this.state.equation;
    const pressedButton = event.target.innerHTML;

    if (pressedButton === "C") return this.clear();
    else if (
      (pressedButton >= "0" && pressedButton <= "9") ||
      pressedButton === "."
    ) {
      equation += pressedButton;
    } else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1) {
      equation += " " + pressedButton + " ";
    } else if (pressedButton === "=") {
      try {
        // eslint-disable-next-line
        const evalResult = eval(equation);
        const result = Number.isInteger(evalResult)
          ? evalResult
          : evalResult.toFixed(2);
        this.setState({ result });
      } catch (error) {
        alert("Invalid Matematical Equation");
      }
    } else {
      equation = equation.trim;
      equation = equation.substr(0, equation.length - 1);
    }
    this.setState({ equation: equation });
  };
  clear() {
    this.setState({ equation: "", result: 0 });
  }
  render() {
    return (
      <main className="container">
        <h1>Calculator</h1>
        <div className="calculator">
          <Screen equation={this.state.equation} result={this.state.result} />
          <KeyPad onButtonPress={this.onButtonPress} />
        </div>
      </main>
    );
  }
}

export default CalculatorApp;
