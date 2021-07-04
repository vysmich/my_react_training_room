import React, { useState } from "react";
//SCSS
import "./WeatherApp.scss";
//Components
import SearchBox from "../components/WeatherApp/SearchBox/SearchBox";
import ForecastBox from "../components/WeatherApp/ForecastBox/ForecastBox";

const WeatherApp = () => {
  //State
  const [forecasts, setForecasts] = useState({});

  const filterData = ({ location, current, forecast }) => {
    return {
      location: location.name,
      currentTemp: current.temp_c,
      currentWind: current.wind_kph,
      forecastImg: current.condition.icon,
      today: {
        date: forecast.forecastday[0].date,
        icon: forecast.forecastday[0].day.condition.icon,
        maxTemp: forecast.forecastday[0].day.maxtemp_c,
        minTemp: forecast.forecastday[0].day.mintemp_c,
        chanceOfRain: forecast.forecastday[0].day.daily_chance_of_rain,
        maxWind: forecast.forecastday[0].day.maxwind_kph,
      },
      tomorrow: {
        date: forecast.forecastday[1].date,
        icon: forecast.forecastday[1].day.condition.icon,
        maxTemp: forecast.forecastday[1].day.maxtemp_c,
        minTemp: forecast.forecastday[1].day.mintemp_c,
        chanceOfRain: forecast.forecastday[1].day.daily_chance_of_rain,
        maxWind: forecast.forecastday[1].day.maxwind_kph,
      },
      afterTomorrow: {
        date: forecast.forecastday[2].date,
        icon: forecast.forecastday[2].day.condition.icon,
        maxTemp: forecast.forecastday[2].day.maxtemp_c,
        minTemp: forecast.forecastday[2].day.mintemp_c,
        chanceOfRain: forecast.forecastday[2].day.daily_chance_of_rain,
        maxWind: forecast.forecastday[2].day.maxwind_kph,
      },
    };
  };

  // function for api request and set state
  const handleSearch = (query) => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=0a7c1ff2372040d5829153426213006&q=${query}&days=5&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        let forecastData = filterData(data);
        setForecasts(forecastData);
      });
  };

  //JSX
  return (
    <main>
      <div className="container">
        <h1>Weather</h1>
        <SearchBox onSearch={handleSearch} />
        <ForecastBox forecasts={forecasts} />
        <p></p>
      </div>
    </main>
  );
};

export default WeatherApp;
