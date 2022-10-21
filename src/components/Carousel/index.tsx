import { useState, useRef } from "react";

import { data } from "./data";

import ArrowIcon from "./arrow.svg";

import "./index.css";

const STEP = 300;
const MAX_CAROUSEL_STEP = 2800;

export function Carousel() {
  const [state, setState] = useState(0);
  const totalSliderWidth = useRef(null);

  const handleLeftClick = () => {
    if (state < 0) {
      setState((prevState) =>
        Math.abs(prevState) - STEP < 0 ? 0 : prevState + STEP
      );
    }
  };

  const handleRightClick = () => {
    if (Math.abs(state) <= totalSliderWidth.current.clientWidth) {
      setState((prevState) =>
        Math.abs(prevState - STEP) >= 2800
          ? prevState - (MAX_CAROUSEL_STEP - Math.abs(prevState))
          : prevState - STEP
      );
    }
  };

  return (
    <div className="carousel_container">
      <button
        className="carousel_btn_left"
        data-direction="left"
        onClick={handleLeftClick}
      >
        <img src={ArrowIcon} alt="" />
      </button>
      <button
        className="carousel_btn_right"
        data-direction="right"
        onClick={handleRightClick}
      >
        <img src={ArrowIcon} alt="" />
      </button>
      <div
        ref={totalSliderWidth}
        data-value={state}
        className="transition"
        style={{
          transform: `translateX(${state}px)`,
          overflowX: "hidden",
          position: "absolute",
          display: "flex",
          columnGap: "1rem",
        }}
      >
        {data.map((img) => (
          <img key={img} src={img} alt="photo" loading="lazy" />
        ))}
      </div>
    </div>
  );
}
