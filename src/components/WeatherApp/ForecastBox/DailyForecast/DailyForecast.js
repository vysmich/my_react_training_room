import React from "react";
import "./DailyForecast.scss";
import Wind from "../../../../img/wind.svg";
import Temperature from "../../../../img/thermometer.svg";
import Rain from "../../../../img/raining.svg";

const DailyForecast = (props) => {
  const data = props.data;

  return (
    <div className="daily-forecast">
      <p>{data.day}</p>

      <img src={data.icon} alt="" />

      <p>
        <img src={Temperature} alt="temperature icon" className="svg-icon" />
        {data.maxTemp} °C/{data.minTemp} °C
      </p>
      <p>
        {" "}
        <img src={Wind} alt="Wind icon" className="svg-icon" />
        {data.maxWind} km/h
      </p>
      <p>
        {" "}
        <img src={Rain} alt="Rain icon" className="svg-icon" />
        {data.chanceOfRain} %
      </p>
      <button>Hourly forecast</button>
    </div>
  );
};

export default DailyForecast;
