import { useState, useRef } from "react";

import { data } from "./data";

import ArrowIcon from "./arrow.svg";

import "./index.css";

export function Carousel() {
  const [state, setState] = useState(0);
  const totalSliderWidth = useRef(null);

  const handleLeftClick = () => {
    if (state < 0) {
      setState((prevState) => prevState + 300);
    }
  };

  const handleRightClick = () => {
    const maxWidth = 2800;

    if (Math.abs(state) <= totalSliderWidth.current.clientWidth) {
      setState((prevState) =>
        Math.abs(prevState - 300) >= 2800
          ? prevState - (maxWidth - Math.abs(prevState))
          : prevState - 300
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
