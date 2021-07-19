import React from "react";
import "./ActualWeather.scss";

const ActualWeather = (props) => {
  const actualData = props.actualWeather;
  console.log(actualData.length);
  if (actualData.currentTemp) {
    return (
      <div className="actual-weather">
        <h2>
          Current weather in {actualData.location} <br />
          <span>({actualData.country})</span>{" "}
        </h2>
        <article>
          <p>
            {" "}
            <img src={actualData.forecastImg} alt="" />
          </p>

          <p>{actualData.currentTemp}°C</p>
          <p>{actualData.currentWind} km/h</p>
        </article>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ActualWeather;
