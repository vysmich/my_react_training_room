import React from "react";
import "./WeatherApp.scss";

import SearchBox from "../components/WeatherApp/SearchBox/SearchBox";
import ForecastBox from "../components/WeatherApp/ForecastBox/ForecastBox";

const WeatherApp = () => {
  return (
    <main>
      <div className="container">
        <h1>Weather</h1>
        <SearchBox />
        <ForecastBox />
      </div>
    </main>
  );
};

export default WeatherApp;
