import React, { useState, useEffect } from "react";
//SCSS
import "./WeatherApp.scss";
//Components
import SearchBox from "../components/WeatherApp/SearchBox/SearchBox";
import ForecastBox from "../components/WeatherApp/ForecastBox/ForecastBox";
import ActualWeather from "../components/WeatherApp/ActualWeather/ActualWeather";

const WeatherApp = () => {
  //--------State
  // Api data
  const [actualWeather, setactualWeather] = useState([]);
  const [forecasts, setForecasts] = useState([]);
  // modal state
  const [showHourlyForecast, setshowHourlyForecast] = useState(false);
  // Hourly forecast carousel state
  const [activeIndex, setactiveIndex] = useState(1);

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
        day: days.date,
        date: days.date,
        icon: days.day.condition.icon,
        maxTemp: days.day.maxtemp_c.toFixed(0),
        minTemp: days.day.mintemp_c.toFixed(0),
        chanceOfRain: days.day.daily_chance_of_rain,
        maxWind: days.day.maxwind_kph.toFixed(0),
      });
    });
    return daysforecast;
  };

  // function for api request and set state
  const handleSearch = (query) => {
    if (query && query.length > 2) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=0a7c1ff2372040d5829153426213006&&q=${query}&days=10&aqi=no&alerts=no`
      )
        .then((response) => response.json())
        .then((data) => {
          let actualData = filterActualData(data);
          let forecastData = filterForecastData(data);
          setactualWeather(actualData);
          setForecasts(forecastData);
        })
        .catch((error) => {
          alert("City not found");
        });
    }
  };

  useEffect(() => {
    handleSearch("Brno");
  }, []);

  //JSX
  return (
    <main className="weather-app">
      <div className="container">
        <h1>Weather</h1>
        <SearchBox onSearch={handleSearch} />
        <ActualWeather actualWeather={actualWeather} />
        <ForecastBox
          forecasts={forecasts}
          showHourlyForecast={showHourlyForecast}
          setshowHourlyForecast={setshowHourlyForecast}
        />
        <p></p>
      </div>
    </main>
  );
};

export default WeatherApp;
