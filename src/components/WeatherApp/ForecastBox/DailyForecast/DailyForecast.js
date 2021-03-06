import React from "react";
import "./DailyForecast.scss";
import Wind from "../../../../img/wind.svg";
import Temperature from "../../../../img/thermometer.svg";
import Rain from "../../../../img/raining.svg";

const DailyForecast = (props) => {
  const data = props.data;

  // get day name from date
  const dayFromDate = (date) => {
    const day = new Date(date);
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(day);
  };

  return (
    <div className="daily-forecast">
      <p>{dayFromDate(data.day)}</p>

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
      <button onClick={() => props.setshowHourlyForecast([true, data.day])}>
        Hourly forecast
      </button>
    </div>
  );
};

export default DailyForecast;
