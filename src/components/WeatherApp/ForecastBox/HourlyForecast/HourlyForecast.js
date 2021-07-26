import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import HourlyCarusel from "./HourlyCarusel/HourlyCarusel";
import "./HourlyForecast.scss";

const HourlyForecast = (props) => {
  //escape keydown close hourly forecast
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        props.setshowHourlyForecast(false);
      }
    });
  }, []);

  if (!props.show) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div
        className="hourly-forecast"
        onClick={() => props.setshowHourlyForecast(false)}
      >
        <button onClick={() => props.setshowHourlyForecast(false)}>
          close
        </button>
        <div
          className="modal-content"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <HourlyCarusel />
        </div>
      </div>,
      document.getElementById("portal")
    );
  }
};

export default HourlyForecast;
