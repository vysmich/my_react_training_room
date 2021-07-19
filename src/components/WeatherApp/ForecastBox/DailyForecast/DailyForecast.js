import React from "react";
import "./DailyForecast.scss";
import weather from "../../../../img/weather.png";

const DailyForecast = (props) => {
  const data = props.data;

  return (
    <div className="daily-forecast">
      <p>{data.day}</p>
      <p>
        {" "}
        <img src={data.icon} alt="" />
      </p>

      <p>
        {data.maxTemp} °C/{data.minTemp} °C
      </p>
      <p> {data.maxWind} km/h</p>
      <p> {data.chanceOfRain} %</p>
    </div>
  );
};

export default DailyForecast;
