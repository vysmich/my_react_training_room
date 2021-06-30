import React from "react";
import "./DailyForecast.scss";
import weather from "../../../../img/weather.png";

const DailyForecast = () => {
  return (
    <div className="daily-forecast">
      <h2>Day: Monday</h2>
      <img src={weather} alt="" />
      <p>Weather: Sun</p>
      <p>Temperture: 29°C</p>
      <p>Wind speed</p>
    </div>
  );
};

export default DailyForecast;
