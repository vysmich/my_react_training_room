import React from "react";
import "./ButtonCalc.scss";

const ButtonCalc = (props) => {
  const classes = ["btn"];
  if (typeof props !== "undefined" && typeof props.type !== "undefined") {
    classes.push("btn--" + props.type);
  }

  return <button className={classes.join(" ")}>{props.children}</button>;
};

export default ButtonCalc;
