import React from "react";
import "./ForecastBox.scss";

import DailyForecast from "./DailyForecast/DailyForecast";

const ForecastBox = () => {
  return (
    <div className="forecast-box">
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
      <DailyForecast />
    </div>
  );
};

export default ForecastBox;
