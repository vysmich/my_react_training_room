import React from "react";
import "./Keypad.scss";
import KeypadRow from "./KeypadRow/KeypadRow";
import ButtonCalc from "./KeypadRow/Button/ButtonCalc";

const KeyPad = () => {
  return (
    <section className="keypad">
      <KeypadRow>
        <ButtonCalc>C</ButtonCalc>
        <ButtonCalc>&larr;</ButtonCalc>
        <ButtonCalc>%</ButtonCalc>
        <ButtonCalc>/</ButtonCalc>
      </KeypadRow>
      <KeypadRow>
        <ButtonCalc>9</ButtonCalc>
        <ButtonCalc>8</ButtonCalc>
        <ButtonCalc>7</ButtonCalc>
        <ButtonCalc>*</ButtonCalc>
      </KeypadRow>
      <KeypadRow>
        <ButtonCalc>6</ButtonCalc>
        <ButtonCalc>5</ButtonCalc>
        <ButtonCalc>4</ButtonCalc>
        <ButtonCalc>-</ButtonCalc>
      </KeypadRow>
      <KeypadRow>
        <ButtonCalc>3</ButtonCalc>
        <ButtonCalc>2</ButtonCalc>
        <ButtonCalc>1</ButtonCalc>
        <ButtonCalc>+</ButtonCalc>
      </KeypadRow>
      <KeypadRow>
        <ButtonCalc>0</ButtonCalc>
        <ButtonCalc>.</ButtonCalc>
        <ButtonCalc type="large">=</ButtonCalc>
      </KeypadRow>
    </section>
  );
};

export default KeyPad;
