import React from "react";
import "./ForecastBox.scss";

import DailyForecast from "./DailyForecast/DailyForecast";

const ForecastBox = (props) => {
  const dailyData = props.forecasts;
  return (
    <ul className="forecast-box">
      {dailyData.map((day) => (
        <li id={day.date}>
          <DailyForecast
            data={day}
            showHourlyForecast={props.showHourlyForecast}
            setshowHourlyForecast={props.setshowHourlyForecast}
          />
        </li>
      ))}
    </ul>
  );
};

export default ForecastBox;
