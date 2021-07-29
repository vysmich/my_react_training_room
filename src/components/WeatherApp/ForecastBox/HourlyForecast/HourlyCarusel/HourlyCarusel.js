import React, { useState } from "react";
import "./HourlyCarusel.scss";
import CarouselItem from "./CarouselItem/CarouselItem";

const HourlyCarusel = (props) => {
  // Hourly forecast carousel state
  const [activeIndex, setactiveIndex] = useState(0);
  //Forecast data
  const forecast = props.forecast;
  const btnRight = document.querySelector(".btn-right");

  // Filters the forecast data by pressing the button in DailyForecast component
  const hourlyData = forecast.filter(
    (date) => date.day === props.showHourlyForecast[1]
  )[0].hourly;
  // function for check if is element in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.right >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {hourlyData.map((hour) => {
          return <CarouselItem key={hour.time} hour={hour} />;
        })}
      </div>

      <div className="indicators">
        {activeIndex > 0 && (
          <button
            className="btn-left"
            onClick={() => {
              btnRight.style = "display:block";
              activeIndex <= 0.3
                ? setactiveIndex(0)
                : setactiveIndex(activeIndex - 0.3);
            }}
          >
            &lt;
          </button>
        )}
        {
          <button
            className="btn-right"
            onClick={() => {
              //last item in carousel
              var lastCarouselItem = document.querySelector(
                ".carousel-item:last-child"
              );
              if (!isInViewport(lastCarouselItem)) {
                setactiveIndex(activeIndex + 0.3);
              } else {
                btnRight.style = "display:none";
              }
            }}
          >
            &gt;
          </button>
        }
      </div>
    </div>
  );
};

export default HourlyCarusel;
