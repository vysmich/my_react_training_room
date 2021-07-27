import React, { useState } from "react";
import "./HourlyCarusel.scss";
import CarouselItem from "./CarouselItem/CarouselItem";

const HourlyCarusel = (props) => {
  const forecast = props.forecast;
  // Filters the forecast data by pressing the button in DailyForecast component
  const hourlyData = forecast.filter(
    (date) => date.day === props.showHourlyForecast[1]
  )[0].hourly;

  // Hourly forecast carousel state
  const [activeIndex, setactiveIndex] = useState(0);
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {hourlyData.map((hour) => {
          return <CarouselItem hour={hour} />;
        })}
      </div>

      <div className="indicators">
        <button
          onClick={() => {
            setactiveIndex(activeIndex - 0.1);
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            setactiveIndex(activeIndex + 0.1);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HourlyCarusel;
