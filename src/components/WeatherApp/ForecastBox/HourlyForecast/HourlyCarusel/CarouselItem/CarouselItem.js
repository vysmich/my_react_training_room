import React from "react";
import "./CarouselItem.scss";
import Wind from "../../../../../../img/wind.svg";
import Temperature from "../../../../../../img/thermometer.svg";
import Rain from "../../../../../../img/raining.svg";

const CarouselItem = (props) => {
  const hour = props.hour;
  return (
    <div className="carousel-item">
      <p>{hour.time.slice(10)}</p>
      <img src={hour.condition.icon} alt={hour.condition.text} />
      <p>
        <img src={Temperature} alt="temperature icon" className="svg-icon" />
        {hour.temp_c.toFixed(0)}
      </p>
      <p>
        <img src={Wind} alt="Wind icon" className="svg-icon" />
        {hour.wind_kph.toFixed(0)}
      </p>
      <p>
        <img src={Rain} alt="Rain icon" className="svg-icon" />
        {hour.chance_of_rain}
      </p>
    </div>
  );
};

export default CarouselItem;
