import React from "react";
import "./ActualWeather.scss";
import Wind from "../../../img/wind.svg";
import Temperature from "../../../img/thermometer.svg";

const ActualWeather = (props) => {
  const actualData = props.actualWeather;
  if (actualData.currentTemp) {
    return (
      <div className="actual-weather">
        <h2>
          Current weather in {actualData.location} <br />
          <span>({actualData.country})</span>{" "}
        </h2>
        <article>
          <p>
            {" "}
            <img src={actualData.forecastImg} alt="" />
          </p>

          <p>
            <img
              src={Temperature}
              alt="Temperature icon"
              className="svg-icon"
            />
            {actualData.currentTemp}°C
          </p>
          <p>
            <img src={Wind} alt="Wind icon" className="svg-icon" />
            {actualData.currentWind} km/h
          </p>
        </article>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ActualWeather;
