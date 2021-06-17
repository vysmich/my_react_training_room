import React from "react";
import "./Keypad.scss";
import KeypadRow from "./KeypadRow/KeypadRow";
import ButtonCalc from "./KeypadRow/Button/ButtonCalc";

const KeyPad = (props) => {
  return (
    <section className="keypad">
      <KeypadRow>
        <ButtonCalc type="primary" onButtonPress={props.onButtonPress}>
          C
        </ButtonCalc>
        <ButtonCalc type="primary" onButtonPress={props.onButtonPress}>
          &larr;
        </ButtonCalc>
        <ButtonCalc type="operator" onButtonPress={props.onButtonPress}>
          %
        </ButtonCalc>
        <ButtonCalc type="operator" onButtonPress={props.onButtonPress}>
          /
        </ButtonCalc>
      </KeypadRow>
      <KeypadRow>
        <ButtonCalc onButtonPress={props.onButtonPress}>9</ButtonCalc>
        <ButtonCalc onButtonPress={props.onButtonPress}>8</ButtonCalc>
        <ButtonCalc onButtonPress={props.onButtonPress}>7</ButtonCalc>
        <ButtonCalc type="operator" onButtonPress={props.onButtonPress}>
          *
        </ButtonCalc>
      </KeypadRow>
      <KeypadRow>
        <ButtonCalc onButtonPress={props.onButtonPress}>6</ButtonCalc>
        <ButtonCalc onButtonPress={props.onButtonPress}>5</ButtonCalc>
        <ButtonCalc onButtonPress={props.onButtonPress}>4</ButtonCalc>
        <ButtonCalc type="operator" onButtonPress={props.onButtonPress}>
          -
        </ButtonCalc>
      </KeypadRow>
      <KeypadRow>
        <ButtonCalc onButtonPress={props.onButtonPress}>3</ButtonCalc>
        <ButtonCalc onButtonPress={props.onButtonPress}>2</ButtonCalc>
        <ButtonCalc onButtonPress={props.onButtonPress}>1</ButtonCalc>
        <ButtonCalc type="operator" onButtonPress={props.onButtonPress}>
          +
        </ButtonCalc>
      </KeypadRow>
      <KeypadRow>
        <ButtonCalc onButtonPress={props.onButtonPress}>0</ButtonCalc>
        <ButtonCalc onButtonPress={props.onButtonPress}>.</ButtonCalc>
        <ButtonCalc type="large" onButtonPress={props.onButtonPress}>
          =
        </ButtonCalc>
      </KeypadRow>
    </section>
  );
};

export default KeyPad;
