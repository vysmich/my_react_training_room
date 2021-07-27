import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import HourlyCarusel from "./HourlyCarusel/HourlyCarusel";
import "./HourlyForecast.scss";

const HourlyForecast = (props) => {
  const show = props.showHourlyForecast[0];
  //escape keydown close hourly forecast
  useEffect((props) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) {
        props.setshowHourlyForecast(false);
      }
    });
  }, []);

  if (!show) {
    return null;
  } else {
    return ReactDOM.createPortal(
      <div
        className="hourly-forecast"
        onClick={() => props.setshowHourlyForecast(false)}
      >
        <button
          className="close-btn"
          onClick={() => props.setshowHourlyForecast(false)}
        >
          x
        </button>
        <div
          className="modal-content"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <HourlyCarusel
            forecast={props.forecasts}
            showHourlyForecast={props.showHourlyForecast}
          />
        </div>
      </div>,
      document.getElementById("portal")
    );
  }
};

export default HourlyForecast;
