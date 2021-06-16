import React from "react";
import "./KeypadRow.scss";

const KeypadRow = (props) => {
  return <div className="keypad-row">{props.children}</div>;
};

export default KeypadRow;
