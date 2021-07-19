import React, { useState, useEffect } from "react";
//SCSS
import "./WeatherApp.scss";
//Components
import SearchBox from "../components/WeatherApp/SearchBox/SearchBox";
import ForecastBox from "../components/WeatherApp/ForecastBox/ForecastBox";
import ActualWeather from "../components/WeatherApp/ActualWeather/ActualWeather";

const WeatherApp = () => {
  //State
  const [actualWeather, setactualWeather] = useState([]);
  const [forecasts, setForecasts] = useState([]);

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
  // get day name from date
  const dayFromDate = (date) => {
    const day = new Date(date);
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(day);
  };
  // filter for get forecast from API
  const filterForecastData = ({ forecast }) => {
    let daysforecast = [];
    forecast.forecastday.map((days) => {
      daysforecast.push({
        day: dayFromDate(days.date),
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
        `https://api.weatherapi.com/v1/forecast.json?key=0a7c1ff2372040d5829153426213006&q=${encodeURI(
          query
        )}&days=4&aqi=no&alerts=no`
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
        <ForecastBox forecasts={forecasts} />
        <p></p>
      </div>
    </main>
  );
};

export default WeatherApp;
