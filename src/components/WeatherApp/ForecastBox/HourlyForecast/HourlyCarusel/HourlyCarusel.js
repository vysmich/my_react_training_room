import React, { useState } from "react";
import "./HourlyCarusel.scss";
import CarouselItem from "./CarouselItem/CarouselItem";

const HourlyCarusel = (props) => {
  // Hourly forecast carousel state
  const [activeIndex, setactiveIndex] = useState(0);
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />

        <CarouselItem />

        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
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
