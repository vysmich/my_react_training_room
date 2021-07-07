import React, { useState } from "react";
//SCSS
import "./WeatherApp.scss";
//Components
import SearchBox from "../components/WeatherApp/SearchBox/SearchBox";
import ForecastBox from "../components/WeatherApp/ForecastBox/ForecastBox";

const WeatherApp = () => {
  //State
  const [actualWeather, setactualWeather] = useState({});
  const [forecasts, setForecasts] = useState({});

  // filter for get actual weather from API
  const filterActualData = ({ location, current }) => {
    return {
      country: location.country,
      region: location.region,
      location: location.name,
      currentTemp: current.temp_c,
      currentWind: current.wind_kph,
      forecastImg: current.condition.icon,
    };
  };

  // filter for get forecast from API
  const filterForecastData = ({ forecast }) => {
    let daysforecast = [];
    forecast.forecastday.map((days) => {
      daysforecast.push({
        date: days.date,
        icon: days.day.condition.icon,
        maxTemp: days.day.maxtemp_c,
        minTemp: days.day.mintemp_c,
        chanceOfRain: days.day.daily_chance_of_rain,
        maxWind: days.day.maxwind_kph,
      });
    });
    return daysforecast;
  };

  // function for api request and set state
  const handleSearch = (query) => {
    if (query && query.length > 2) {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=0a7c1ff2372040d5829153426213006&q=${encodeURI(
          query
        )}&days=4&aqi=no&alerts=no`
      )
        .then((response) => response.json())
        .then((data) => {
          let actualData = filterActualData(data);
          let forecastData = filterForecastData(data);
          setactualWeather(actualData);
          setForecasts(forecastData);
        });
    }
  };

  //JSX
  return (
    <main>
      <div className="container">
        <h1>Weather</h1>
        <SearchBox onSearch={handleSearch} />
        <ForecastBox forecasts={forecasts} actualWeather={actualWeather} />
        <p></p>
      </div>
    </main>
  );
};

export default WeatherApp;
