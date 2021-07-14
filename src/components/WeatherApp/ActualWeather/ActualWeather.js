import React from "react";
import "./ActualWeather.scss";

const ActualWeather = (props) => {
  const actualData = props.actualWeather;
  console.log(actualData);
  return (
    <ul className="actual-weather">
      <li>Actual</li>
      <li>{actualData.country}</li>
      <li>{actualData.location}</li>
      <li>
        {" "}
        <img src={actualData.forecastImg} alt="" />
      </li>

      <li>{actualData.currentTemp}°C</li>
      <li>{actualData.currentWind} km/h</li>
    </ul>
  );
};

export default ActualWeather;
