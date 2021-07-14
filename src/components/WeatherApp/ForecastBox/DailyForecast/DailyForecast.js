import React from "react";
import "./DailyForecast.scss";
import weather from "../../../../img/weather.png";

const DailyForecast = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <ul className="daily-forecast">
      <li>{data.day}</li>
      <li>
        {" "}
        <img src={data.icon} alt="" />
      </li>

      <li>
        {data.maxTemp} °C/{data.minTemp} °C
      </li>
      <li> {data.maxWind} km/h</li>
      <li> {data.chanceOfRain} %</li>
    </ul>
  );
};

export default DailyForecast;
